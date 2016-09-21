var fotos = [
    {_id: 1, titulo: 'Leão', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
    {_id: 2, titulo: 'Leão 2', url:'http://www.fundosanimais.com/Minis/leoes.jpg' }
];

exports.lista = function (req, res) {
    res.json(fotos);
}

exports.buscaPorId = function (req, res) {

    var foto = fotos.find(function(foto){
        return foto._id == req.params.id;
    });

    res.json(foto);
}

exports.removePorId = function (req, res) {

    var fotos = fotos.filter(function(foto) {
        return foto._id != req.params.id;
    });

    
}

// var api = {};

// api.lista = function(req, res) {
//     var fotos = [
//         {_id: 1, titulo: 'Leão', url:'http://www.fundosanimais.com/Minis/leoes.jpg' },
//         {_id: 2, titulo: 'Leão 2', url:'http://www.fundosanimais.com/Minis/leoes.jpg' }
//     ];
//     res.json(fotos); 
// };