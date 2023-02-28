const mongoose = require('mongoose');
const {isEmail}  =require('validator');



// objet de la bibliothéque mongoose "Schema"
const userSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        required: true,
        minLenght: 3,
        maxlength: 55,
        unique: true,
        trim: true,  // <= permet de supprimer les espaces à la fin du pseudo
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail],
        lowercase: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
        max: 1024,
        minLenght: 6,
      },

 

});



const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;