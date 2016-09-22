module.exports = function(app) {
	return {
		lista: function(req, res){
			var grupos = [
				{ _id: 1, nome: 'esporte' }, 
				{ _id: 2, nome: 'lugares' }, 
				{ _id: 3, nome: 'animais' }
			];
			res.json(grupos);
		}
	};
};

