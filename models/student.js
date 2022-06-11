const mongoose = require('mongoose');
const classeSchema = require('./classroom');

const StudentSchema = mongoose.Schema(
    {
        nom : {type:String,required:true},
        prenom : {type:String,required:true},
        classe : {type: mongoose.Types.ObjectId, ref: "classeSchema"}
    }
);

module.exports = mongoose.model('Student',StudentSchema);