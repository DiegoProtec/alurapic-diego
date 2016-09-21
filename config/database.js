module.exports = function(mongoose, uri) {
	mongoose.connect(`mongodb://${uri}`);

	mongoose.connection.on('connected', () => console.log('Conectado no MongoDB!'));

	mongoose.connection.on('error', error => console.log(`Erro na conexão: ${error}`));

	mongoose.connection.on('disconnected', error => console.log('Desconectado do MongoDB'));

	process.on('SIGINT', () => { 
		mongoose.connection.close( () => {
			console.log('Conexão fechada pelo término da aplicação');
			process.exit(0);
		});
	});
}