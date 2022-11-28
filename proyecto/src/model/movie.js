const {Schema, model} = require("mongoose");


const MovieSchema = new Schema({
    title : String,
    genre : String,
    actors: [String],
    screenwritters: [String],
    directors: [String],
    producer: String
    

})

module.exports = model("movie", MovieSchema);