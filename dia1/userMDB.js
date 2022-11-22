const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login : String,
    password: {
        type: String,
        validate: [
            function (password) 
            {
                return password.length >= 8 && password.includes("A");    
            },
            'El password debe ser mas largo e incluir una A'],
            select: false
    },

})

UserSchema.pre('save', function (next) 
{
   console.log("Middleware de entrada");
   if(this.password.length > 10)
   {
    console.log("El password introducido es seguro")
    next();
   } 
   else
    console.log("El password introducido no es suficientemente seguro")
});


module.exports = mongoose.model("user", UserSchema)