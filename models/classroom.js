const mongoose = require('mongoose');

const classSchema = mongoose.Schema(
    {
       nom : {type:String,required:true},
       effectif : {type:Number,required:false},
    }
);

module.exports = mongoose.model('Classe',classSchema);