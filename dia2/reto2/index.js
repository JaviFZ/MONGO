const mongoose = require("mongoose");
const Teachers = require("./teachersMDB");
const Subjects = require("./subjectsMDB");
const Marks = require("./marksMDB");
const Studients = require("./studientsMDB");


mongoose.connect('mongodb+srv://JavierFZ:Calzada99@cluster0.ctllnsg.mongodb.net/Codenotch3',
                    {useNewUrlParser: false, useUnifiedTopology: false})




// // INTRUDUCIR PROFESORES

let teacherDocument1 = new Teachers({
    firstName: "Jose",
    lastName: "Herrera",
    groups: ["Full time", "Part time"]
});
let teacherDocument2 = new Teachers({
    firstName: "Menchu",
    lastName: "Lopez",
    groups: ["Full time", "Full time Online"]
});
let teacherDocument3 = new Teachers({
    firstName: "Dani",
    lastName: "Martin",
    groups: ["Full time Online", "Part time"]
});


// teacherDocument1.save(checkRespuesta);


// // INTRODUCIR ASIGNATURAS


let subjectDocument1 = new Subjects({
    title: "JavaScript",
    teachers: [teacherDocument1, teacherDocument2]
})

let subjectDocument2 = new Subjects({
    title: "CSS",
    teachers: [teacherDocument2, teacherDocument3]
})

let subjectDocument3 = new Subjects({
    title: "Mongo",
    teachers: [teacherDocument1, teacherDocument3]
})


// subjectDocument1.save(checkRespuesta);


// // INTRODUCIR NOTAS

let markDocument1 = new Marks({
    date: "2022-09-09",
    mark: 8,
    subject: subjectDocument3
})

let markDocument2 = new Marks({
    date: "2022-10-12",
    mark: 5,
    subject: subjectDocument2
})

let markDocument3 = new Marks({
    date: "2021-09-12",
    mark: 7,
    subject: subjectDocument1
})

let markDocument4 = new Marks({
    date: "2021-12-12",
    mark: 9,
    subject: subjectDocument3
})


// markDocument1.save(checkRespuesta);

// // INTRODUCIR ESTUDIANTES

let studientDocument1 = new Studients({
    firstName: "Juan",
    lastName: "Fernandez",
    marks: [markDocument1, markDocument2]
})
let studientDocument2 = new Studients({
    firstName: "Pepe",
    lastName: "Mariano",
    marks: [markDocument2]
})
let studientDocument3 = new Studients({
    firstName: "Ana",
    lastName: "Sanchez",
    marks: [markDocument3, markDocument4]
})

// studientDocument3.save(checkRespuesta);



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


// // MOSTRAR POR CONSOLA TODAS LAS NOTAS DE UN ESTUDIANTE


// Studients.findOne({firstName:"Ana"}) 
//     .then((studient)=>{     
//         console.log("Estudiante localizado");     
//         console.log(studient); }) 
//     .catch(()=>{     
//         console.log("Error"); })


// Studients.find({}).where("firstName").equals("Juan")
//     .then(function (studient) 
//     {
//         console.log(studient[0].marks);
//     })
//     .catch(function () {
//         console.log("Error");
//     })


// // MOSTRAR POR CONSOLA TODAS LAS ASIGNATURAS DEL ALUMNO


// Studients.find({}).where("firstName").equals("Ana")
//     .then(function (studient) 
//     {
//         for(let i = 0; i<= studient[0].marks.length; i++){
//             console.log(studient[0].marks[i].subject);
//         }
        
//     })
//     .catch(function () {
//         console.log("Error");
//     })


// // MOSTRAR POR CONSOLA TODOS LOS PROFESORES DEL ALUMNO    


Studients.find({}).where("firstName").equals("Ana")
    .then(function (studient) 
    {
        for(let i = 0; i<= studient[0].marks.length; i++){
            console.log(studient[0].marks[i].subject.teachers);
        }
        
    })
    .catch(function () {
        console.log("Error");
    })
