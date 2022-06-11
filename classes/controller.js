const Classe = require('../models/classroom');


exports.createClasse =  (req, res, next) => {
    delete req.body._id;
    const classes = new Classe({ ...req.body});
     classes.save()
    .then((classe) => res.status(200).json({ classe}))
    .catch(error => res.status(400).json({ error })); 

}

exports.updateClasse = (req, res, next) => {
    Classe.updateOne({_id: req.params.id}, {...req.body,_id: req.params.id})
    .then(() => res.status(201).json({ message: 'Classe modifiée !'}))
    .catch(error => res.status(400).json({ error }));
}

exports.deleteClasse = (req, res, next) => {
    Classe.deleteOne({_id: req.params.id})
    .then(() => res.status(201).json({ message: 'classe supprimée!'}))
    .catch(error => res.status(400).json({ error }));
}

exports.getOneClasse = (req, res, next) => {
    Classe.findOne({_id: req.params.id})
    .then(classe => res.status(200).json(classe))
    .catch(error => res.status(400).json({ error }));
}

exports.getAllClasses = (req, res, next) => {
    Classe.find()
    .then(classes => res.status(200).json(classes))
    .catch(error => res.status(400).json(error));
    
}