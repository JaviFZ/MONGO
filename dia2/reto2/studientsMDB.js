const mongoose = require("mongoose");
const MarksModel = require("./marksMDB");

const StudientSchema = new mongoose.Schema({
    firstName : String,
    lastName: String,
    marks: [MarksModel.schema]
    
})

module.exports = mongoose.model("studient", StudientSchema)