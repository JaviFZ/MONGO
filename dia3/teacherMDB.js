const mongoose = require("mongoose");


const TeachersSchema = new mongoose.Schema({
    teacher_first_name : String,
    teacher_last_name : String
})

module.exports = mongoose.model("teacher", TeachersSchema)