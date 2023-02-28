const UserModel = require('../models/userModel');

//on vérifie l'ID avec mongoose
const ObjectId = require('mongoose').Types.ObjectId;

// on récupere les infos des users 
 module.exports.getAllUser = async (req,res) => {
 console.log(req.body)
//tu trie tu select 
 const users = await UserModel.find().select('-password');
 //tu revoie un status de users 
 res.status(200).json(users)

 }