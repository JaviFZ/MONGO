const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name : String,
    surname: String,
    dateOfBirth: Date,
    Comments: String,
    rol: {
        type: String,
        enum: ["master", "user"]
    }

})

ProfileSchema.pre('save', function (next) 
{
   console.log("Middleware de entrada");
   if(this.name[0].includes("A","B","C", "D", "E", "F", "G", "H", "I", "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y" ,"Z") )
   {
    console.log("El nombre empieza por mayúscula")
    next();
   } 
   else
    console.log("El nombre debe empezar por mayúscula")
});

module.exports = mongoose.model("profile", ProfileSchema)