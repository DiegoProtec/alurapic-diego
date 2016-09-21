const http = require('http'),
	app = require('./config/express'),
	mongoose = require('mongoose');

const banco = 'localhost/alurapic';

require('./config/database')(mongoose, banco);

http.createServer(app).listen(3000, () => console.log('Servidor rodando na porta 3000'));