const mongoose = require("mongoose");
const subjectsModel = require("./subjectsMDB");

const MarksSchema = new mongoose.Schema({
    date : Date,
    mark: Number,
    subject: subjectsModel.schema
})

module.exports = mongoose.model("marks", MarksSchema)