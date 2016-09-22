module.exports = function(app) {

    var model = app.get('mongoose').model('Foto');

    return {
        lista: function (req, res) {
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
        },
        buscaPorId: function (req, res) {
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
        },
        atualiza: function(req, res) {
            model
            .findByIdAndUpdate(req.params.id, req.body)
            .then(
                foto => res.json(foto),
                error => {
                    console.log(error);
                    res.sendStatus(500).json(error);
                }
            );
        },
        adiciona: function (req, res) {
            model
            .create(req.body)
            .then(
                foto => res.json(foto),
                error => {
                    console.log(error);
                    res.sendStatus(500).json(error);
                }
            );
        },
        removePorId: function (req, res) {
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
        }
    };
};

