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

 };
 module.exports.userInfo = async (req,res) => {
    console.log(req.params)
    if (!ObjectId.isValid(req.params.id)){
        res.status(400).json('Id unknow' + req.params.id);
    }else{
        
    }
 }