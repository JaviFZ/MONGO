const mongoose = require("mongoose");


const PhotoSchema = new mongoose.Schema({
    nombreUsuario : String,
    photoURL: String,
    title: String,
    description: String
    

})

module.exports = mongoose.model("photo", PhotoSchema)