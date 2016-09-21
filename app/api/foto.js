var mongoose = require('mongoose');
var model = mongoose.model('Foto');

exports.lista = function (req, res) {
    model
    .find({})
    .then(
        fotos => {
            console.log(fotos);
            res.json(fotos);
        }, 
        error => {
            console.log(error);
            res.sendStatus(500).json(error);
        }
    );
};

exports.buscaPorId = function (req, res) {
    model
    .findById(req.params.id)
    .then(
        foto => {
            if(!foto) throw Error('Foto não encontrada');
            res.json(foto);
        },
        error => {
            console.log(error);
            res.sendStatus(404).json(error);
        }
    );
};

exports.atualiza = function(req, res) {
    model
    .findByIdAndUpdate(req.params.id, req.body)
    .then(
        foto => res.json(foto),
        error => {
            console.log(error);
            res.sendStatus(500).json(error);
        }
    );
};

exports.adiciona = function (req, res) {
    model
    .create(req.body)
    .then(
        foto => res.json(foto),
        error => {
            console.log(error);
            res.sendStatus(500).json(error);
        }
    );
};

exports.removePorId = function (req, res) {
    model
    .remove({_id: req.params.id})
    .then(
        () => 
            res.sendStatus(204),
        error => {
            console.log(error);
            res.sendStatus(500).json(error);
        }
    );
};