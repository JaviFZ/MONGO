const mongoose = require("mongoose");
// const User = require("./userMDB");
// const Profile = require("./profileMDB");
const Creedential = require("./creedentialsMDB");



mongoose.connect('mongodb+srv://JavierFZ:Calzada99@cluster0.ctllnsg.mongodb.net/Codenotch2',
                    {useNewUrlParser: false, useUnifiedTopology: false})


// // INTRUDUCIR USUARIO

// let userDocument = new User({
//     login: "JaviFZ",
//     password: "contraseña"
// });


// // INTRODUCIR PROFILE

// let profileDocument = new Profile({
//     name: "Agismundo",
//     surname: "Fernandez",
//     dateOfBirth: "2022-12-12",
//     Comments: "lorem ipsum",
//     rol: "master"
// })


// // INTRODUCIR CREDENCIALES

let creedentialsDocument = new Creedential({
    address: "C/ Hermanos Gomez, 23",
    phone: "630536161",
    email: "jav@gmail.com"
})

// userDocument.save(checkRespuesta);
// profileDocument.save(checkRespuesta);
creedentialsDocument.save(checkRespuesta);

function checkRespuesta(err, res) 
{
 if (err)
    console.log("Error:" + err)
 else
 {
    console.log("Documento guardado correctamente")
    mongoose.disconnect();
 }      
}