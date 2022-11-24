const {Schema, model} = require("mongoose");


const PhotoSchema = new Schema({
    nombreUsuario : String,
    photoURL: String,
    title: String,
    description: String
    

})

module.exports = model("photo", PhotoSchema, "photos");