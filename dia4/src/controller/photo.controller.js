
const PhotoModel = require("../model/photo")



function getPhoto(request, response) 
{
    if(request.query.nombreUsuario == null)
    {
        PhotoModel.find({})
        .then((photo) => 
        {
            console.log(photo)
            response.send(photo);
        })
        .catch((err) => 
        {
            console.log(err)
            // process.exit(-1);
        })
    }
    else
    {
        PhotoModel.find({nombreUsuario: request.query.nombreUsuario})
        .then((photo) => 
        {
            console.log(photo)
            response.send(photo);
        })
        .catch((err) => 
        {
            console.log(err)
            // process.exit(-1);
        })
    }    
}





function postPhoto(request, response)
{
    // console.log(request.body);

    let photo = new PhotoModel({
        nombreUsuario : request.body.nombreUsuario,
        photoURL: request.body.photoURL,
        title: request.body.title,
        description: request.body.description
    })
    photo.save()
    .then((photo) => 
    {
        console.log("Foto guardada")
        console.log(photo)
        response.send(photo);
    })    
    .catch((error) =>
    {
        console.log(error);
    })
}



function putPhoto(request, response) 
{
    PhotoModel.findOneAndUpdate( {title:request.body.title},
                                {                         
                                description: request.body.description 
                                },
                                )    
    .then((photo) => 
    {
        console.log("Foto actualizada")
        response.send(photo);
    })
    .catch((error) =>
    {
        console.log(error);
    })
}



function deletePhoto(request, response) 
{   
    if(!request.body.title){
        PhotoModel.deleteMany({nombreUsuario: request.body.nombreUsuario})
        .then((photo) => 
        {
            console.log("Fotos eliminadas")
            response.send(photo);
        })
        .catch((error) => 
        {
            console.log(error);
        }) 
    } else {
        PhotoModel.deleteOne({nombreUsuario: request.body.nombreUsuario, title: request.body.title})
        .then((photo) => 
        {
            console.log("Foto eliminada")
            response.send(photo);
        })
        .catch((error) => 
        {
            console.log(error);
        }) 
    }

}





module.exports = {getPhoto, postPhoto, putPhoto, deletePhoto}