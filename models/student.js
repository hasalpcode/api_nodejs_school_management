const mongoose = require('mongoose');


const StudentSchema = mongoose.Schema(
    {
        nom : {type:String,required:true},
        prenom : {type:String,required:true},
        classe : {type:String,required:true},
    }
);

module.exports = mongoose.model('Student',StudentSchema);