const mongoose = require("mongoose");

const Photo = require("./photosMDB");

mongoose.connect('mongodb+srv://JavierFZ:Calzada99@cluster0.ctllnsg.mongodb.net/Codenotch2',
                    {useNewUrlParser: false, useUnifiedTopology: false});


// // INTRUDUCIR FOTO

// let photoDocument = new Photo({
//     nombreUsuario: "JaviFZ",
//     photoURL: "https://wallpapercave.com/wp/wp10650241.jpg",
//     title: "Boba Fett" ,
//     description: "Boba Fett disparando"

// });

// // OBTENER FOTOS

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

// Photo.findOneAndUpdate({title: "Boba Fett"}, {description: "Boba Fett dispara de nuevo"}, checkRespuesta);



// // ELIMINAR FOTO DADO USUSARIO Y TITULO

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


// photoDocument.save(checkRespuesta);

// function checkRespuesta(err, res) 
// {
//  if (err)
//     console.log("Error:" + err)
//  else
//  {
//     console.log("Documento guardado correctamente")
//     // mongoose.disconnect();
//  }      
// }