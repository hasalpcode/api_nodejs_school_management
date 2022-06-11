const Student = require('../models/student');


exports.createStudent = (req, res, next) => {
    delete req.body._id;
    const students = new Student({ ...req.body});
    students.save()
    .then(() => res.status(200).json({ message: 'etudiant enregistré !'}))
    .catch(error => res.status(400).json({ error })); 

};

exports.updateStudent = (req, res, next) => {
    Student.updateOne({_id: req.params.id}, {...req.body,_id: req.params.id})
    .then(() => res.status(200).json({ message: 'etudiant modifié !'}))
    .catch(error => res.status(400).json({ error }));
}

exports.deleteStudent = (req, res, next) => {
    Student.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({ message: 'etudiant supprimé!'}))
    .catch(error => res.status(400).json({ error }));
}

exports.getOneStudent = (req, res, next) => {
    Student.findOne({_id: req.params.id})
    .then(student => res.status(200).json(student))
    .catch(error => res.status(400).json({ error }));
}

exports.getAllStudent = (req, res, next) => {
    Student.find()
    .then(students => res.status(200).json(students))
    .catch(error => res.status(400).json(error));
    
}