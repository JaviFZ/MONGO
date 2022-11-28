const {Schema, model} = require("mongoose");


const ProfessionalSchema = new Schema({
    name : String,
    age: Number,
    oscarsNumber: Number,
    profession: String
    

})

module.exports = model("professional", ProfessionalSchema);
