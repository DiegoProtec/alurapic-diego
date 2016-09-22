var express = require('express'),
	consign = require('consign'),
	bodyParser = require('body-parser'),
	jwt = require('jsonwebtoken'),
	app = express();

const mongoose = require('mongoose');

app.set('mongoose', mongoose);
app.set('banco', 'localhost/alurapic');
app.set('secret', 'omundocomazeitona');
app.set('jwt', jwt);
app.use(express.static('./public'));
app.use(bodyParser.json());

consign({cwd: 'app'})
.include('models')
.then('api')
.then('routes/auth.js')
.then('routes')
.into(app);

module.exports = app;