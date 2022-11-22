const mongoose = require("mongoose");
const subjectsModel = require("./subjectsMDB");

const MarksSchema = new mongoose.Schema({
    date : Date,
    marks: Number,
    subject: subjectsModel.schema
})

module.exports = mongoose.model("marks", MarksSchema)