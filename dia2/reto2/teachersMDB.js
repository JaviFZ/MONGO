const mongoose = require("mongoose");


const TeachersSchema = new mongoose.Schema({
    firstName : String,
    lastName: String,
    groups: [String]
})

module.exports = mongoose.model("teacher", TeachersSchema)