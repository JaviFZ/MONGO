const mongoose = require("mongoose");

const Photo = require("./photosMDB");

mongoose.connect('mongodb+srv://JavierFZ:Calzada99@cluster0.ctllnsg.mongodb.net/Codenotch2',
                    {useNewUrlParser: false, useUnifiedTopology: false});


// // INTRUDUCIR FOTO
function introducirFoto(nombreUsuario, photoURL, title, description) {
    let photoDocument = new Photo({
        nombreUsuario: nombreUsuario,
        photoURL: photoURL,
        title: title ,
        description: description
    })
    photoDocument.save(checkRespuesta);
}
// introducirFoto("JaviFZ", "https://wallpapercave.com/wp/wp10650241.jpg", "Boba Fett", "Boba Fett disparando");


// let photoDocument = new Photo({
//     nombreUsuario: "JaviFZ",
//     photoURL: "https://wallpapercave.com/wp/wp10650241.jpg",
//     title: "Boba Fett" ,
//     description: "Boba Fett disparando"

// });

// // OBTENER FOTOS DE UN USUARIO

function findPhoto(nombreUsuario) {
    Photo.find({}).where("nombreUsuario").equals(nombreUsuario)
    .then (function (photo)
    {
        console.log(photo);    
    })
    .catch(function () 
    {
        console.log("Error");    
    })

}
// findPhoto("JaviFZ");




// Photo.find({}).where("nombreUsuario").equals("JaviFZ")
//     .then (function (photo)
//     {
//         console.log(photo);    
//     })
//     .catch(function () 
//     {
//         console.log("Error");    
//     })



// // MODIFICAR FOTOS

function modifyPhoto(title, newDescription) {
    Photo.findOneAndUpdate({title: title}, {description: newDescription}, checkRespuesta);
}


// modifyPhoto("Boba Fett", "Boba Fett dispara de nuevo");

// Photo.findOneAndUpdate({title: "Boba Fett"}, {description: "Boba Fett dispara de nuevo"}, checkRespuesta);



// // ELIMINAR FOTO DADO USUSARIO Y TITULO


function eliminatePhoto(nombreUsuario, title ) {
    Photo.deleteOne({nombreUsuario: nombreUsuario, title: title })
    .then(function (photo) 
    {
        console.log("Foto borrada");
        console.log(photo);
    })
    .catch(function () 
    {
        console.log("Error");    
    })
}
// eliminatePhoto("JaviFZ", "Boba Fett");

// Photo.deleteOne({nombreUsuario: "JaviFZ", title: "Boba Fett" })
//     .then(function (photo) 
//     {
//         console.log("Foto borrada");
//         console.log(photo);
//     })
//     .catch(function () 
//     {
//         console.log("Error");    
//     })



// // ELIMINAR TODAS LAS FOTOS



function deleteAll() {
    Photo.deleteMany({})
    .then(function (photo) 
    {
        console.log("Todas las fotos borradas");
        console.log(photo);    
    })
    .catch(function () 
    {
        console.log("Error");    
    })
}
// deleteAll();

// Photo.deleteMany({})
//     .then(function (photo) 
//     {
//         console.log("Todas las fotos borradas");
//         console.log(photo);    
//     })
//     .catch(function () 
//     {
//         console.log("Error");    
//     })




function checkRespuesta(err, res) 
{
 if (err)
    console.log("Error:" + err)
 else
 {
    console.log("Documento guardado correctamente")
    // mongoose.disconnect();
 }      
}