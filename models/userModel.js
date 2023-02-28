const mongoose = require('mongoose');
const {isEmail}  =require('validator');
const bcrypt = require('bcrypt');



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
// play function before save into display : 'block',
userSchema.pre('save', async function(next){
  // on salt le MDP 
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});




const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;