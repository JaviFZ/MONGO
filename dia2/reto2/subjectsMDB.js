const mongoose = require("mongoose");
const TeachersModel = require("./teachersMDB");

const subjectsSchema = new mongoose.Schema({
    title : String,
    teachers: [TeachersModel.schema]
})

module.exports = mongoose.model("subject", subjectsSchema)