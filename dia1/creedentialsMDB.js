const mongoose = require("mongoose");

const CreedentialsSchema = new mongoose.Schema({
    address : String,
    phone: String,
    email: {
        type: String,
        validate: [
            function (email) 
            {
                return email.includes("@", ".");    
            },
            'El mail no es válido'],
            select: false
    }
})


module.exports = mongoose.model("creedentials", CreedentialsSchema);