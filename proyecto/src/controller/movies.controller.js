
const MovieModel = require("../model/movie")


function postMovie(request, response)
{
    // console.log(request.body);

    let movie = new MovieModel({
        title : request.body.title,
        genre: request.body.genre,
        actors: request.body.actors,
        screenwritters: request.body.screenwritters,
        directors: request.body.directors,
        producer : request.body.producer
    })
    movie.save()
    .then((movie) => 
    {
        console.log("Pelicula guardada")
        console.log(movie)
        response.send(movie);
    })    
    .catch((error) =>
    {
        console.log(error);
    })
}

function postActor(request, response)
{
    MovieModel.findByIdAndUpdate(request.body.id,
    {                         
        $push: {actors: request.body.newActor}
    })    
    .then((movie) => 
    {
    console.log("Nuevo actor introducido")
    response.send(movie);
    })
    .catch((error) =>
    {
    console.log(error);
    })
}

function postDirector(request, response)
{
    MovieModel.findByIdAndUpdate(request.body.id,
    {                         
        $push: {directors: request.body.newDirector}
    })    
    .then((movie) => 
    {
    console.log("Nuevo director introducido")
    response.send(movie);
    })
    .catch((error) =>
    {
    console.log(error);
    })
}

function postGuionista(request, response)
{
    MovieModel.findByIdAndUpdate(request.body.id,
    {                         
        $push: {screenwritters: request.body.newScreenwritter}
    })    
    .then((movie) => 
    {
    console.log("Nuevo guionista introducido")
    response.send(movie);
    })
    .catch((error) =>
    {
    console.log(error);
    })
}


// // GET //////////////////////////////////////////////

function getMovie(request, response) 
{
    if(request.query.id == null)
    {
        MovieModel.find({})
        .then((movie) => 
        {
            console.log(movie)
            response.send(movie);
        })
        .catch((err) => 
        {
            console.log(err)
            // process.exit(-1);
        })
    }   
    else{
        MovieModel.findById(request.query.id)
        .then((movie) => 
        {
            console.log(movie)
            response.send(movie);
        })
        .catch((err) => 
        {
            console.log(err)
            // process.exit(-1);
        })
    }      
}


function getActor(request, response) {
    
    MovieModel.findById(request.query.id)
    .then((movie) =>
    {
        console.log(movie.actors);
        response.send(movie.actors)
    })
    .catch((err) => 
        {
            console.log(err)
            // process.exit(-1);
        })
}


function getDirector(request, response) {
   
    MovieModel.findById(request.query.id)
    .then((movie) =>
    {
        console.log(movie.directors);
        response.send(movie.directors)
    })
    .catch((err) => 
        {
            console.log(err)
            // process.exit(-1);
        })
}


function getGuionista(request, response) {
    MovieModel.findById(request.query.id)
    .then((movie) =>
    {
        console.log(movie.screenwritters);
        response.send(movie.screenwritters)
    })
    .catch((err) => 
        {
            console.log(err)
            // process.exit(-1);
        })
}


function getProducer(request, response) {
    MovieModel.findById(request.query.id)
    .then((movie) =>
    {
        console.log(movie.producer);
        response.send(movie.producer)
    })
    .catch((err) => 
        {
            console.log(err)
            // process.exit(-1);
        })
}

// // PUT /////////////////////////////////////////////////////////


function putMovie(request, response) 
{
    MovieModel.findByIdAndUpdate( request.body.id,
                                {                         
                                title : request.body.title,
                                genre: request.body.genre,
                                actors: request.body.actors,
                                screenwritters: request.body.screenwritters,
                                directors: request.body.directors,
                                producer : request.body.producer
                                },
                                )    
    .then((movie) => 
    {
        console.log("Pelicula actualizada")
        response.send(movie);
    })
    .catch((error) =>
    {
        console.log(error);
    })
}


// // DELETE ///////////////////////////////////////////////////

function deleteMovie(request, response) 
{
    MovieModel.deleteOne({_id :request.body.id})
    .then((movie) => 
    {
        console.log("Pelicula eliminada")
        response.send(movie);
    })
    .catch((error) => 
    {
        console.log(error);
    })
}


function deleteActor(request, response)
{
    MovieModel.findByIdAndUpdate(request.body.id,
    {                         
        $pullAll: {actors: [request.body.actor]}
    })    
    .then((movie) => 
    {
    console.log("Actor eliminado")
    response.send(movie);
    })
    .catch((error) =>
    {
    console.log(error);
    })
}

function deleteDirector(request, response)
{
    MovieModel.findByIdAndUpdate(request.body.id,
    {                         
        $pullAll: {directors: [request.body.director]}
    })    
    .then((movie) => 
    {
    console.log("Director eliminado")
    response.send(movie);
    })
    .catch((error) =>
    {
    console.log(error);
    })
}

function deleteGuionista(request, response)
{
    MovieModel.findByIdAndUpdate(request.body.id,
    {                         
        $pullAll: {screenwritters: [request.body.screenwritter]}
    })    
    .then((movie) => 
    {
    console.log("Guionista eliminado")
    response.send(movie);
    })
    .catch((error) =>
    {
    console.log(error);
    })
}



module.exports = {postMovie, postActor,postDirector, postGuionista, getMovie, getActor, getDirector, getGuionista, getProducer, putMovie ,deleteMovie, deleteActor, deleteDirector, deleteGuionista}