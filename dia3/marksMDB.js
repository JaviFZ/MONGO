const mongoose = require("mongoose");
const teachersModel = require("./teacherMDB");

const marksSchema = new mongoose.Schema({
    date : Date,
    mark: Number,
    studient_first_name: String,
    studient_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [teachersModel.schema]
})

module.exports = mongoose.model("marks", marksSchema)