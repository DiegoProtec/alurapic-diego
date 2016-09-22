module.exports = function(app) {
	var mongoose = app.get('mongoose');
	var model = mongoose.model('Usuario');
	var jwt = app.get('jwt');
	return {
		autentica: function(req, res) {
			model.findOne({
				login: req.body.login,
				senha: req.body.senha
			})
			.then( function(usuario) {
				if(!usuario){
					console.log('Login/senha inválidos');
					res.sendStatus(401);
				} else {
					var token = jwt.sign(
					{
						login: usuario.login
					},
					app.get('secret'),
					{
						expiresIn: 86400
					}
					);
					console.log('Autenticado: token adicionado na resposta')
					res.set('x-access-token', token);
					res.end();
				}
			});
		},
		verifica: function(req, res, next) {
			var token = req.headers['x-access-token'];
			if(token){
				console.log('Token recebido: decodificando...');
				jwt.verify(token, app.get('secret'), 
					function(error, decode) {
						if(error) {
							console.log('Token rejeitado');
							res.sendStatus(401);
						} else {
							req.usuario = decode;
							next();
						}
					});
			} else {
				console.log('Nenhum token enviado')
				res.sendStatus(401);
			}
		}
	};
};