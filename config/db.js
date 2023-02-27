//on connecte a la base de données
const mongoose = require('mongoose');
//require("dotenv").config({ path: "./config/.env" });

const DB_USER_PASS = process.env.DB_USER_PASS
mongoose.set("strictQuery", false);
mongoose.connect(
    ( "mongodb+srv://" + DB_USER_PASS + "@cluster0.ybrn2fj.mongodb.net/?retryWrites=true&w=majority"
    )
)
    /*Pour nous nous dire qu'on a relier notre Back a notre base de données*/
  .then(() => console.log("Connected to MongoDB"))
  /*Si c'est pas le cas on Catch !*/
  .catch((err) => console.log("Failed to connect to MongoDB", err));


