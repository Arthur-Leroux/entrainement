// départ du back
const express = require('express');
require("dotenv").config({ path: "./config/.env" });
const userRoutes = require('./routes/user.route');
const bodyParser = require('body-parser');




//on avertie le server de la connexion a la base de données
require('./config/db');
//app utilise express
const app = express();
//permet de traiter la data qui va transiter d'un point A à un point B
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//on écoute le port 3000 placer dans le fichier (.env)
app.listen(process.env.PORT, () => {
    console.log(`listening on port, ${process.env.PORT}`)
});


app.use('/api/user/', userRoutes);
