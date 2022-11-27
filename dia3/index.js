const mongoose = require("mongoose");
const Teacher = require("./teacherMDB");
const Marks = require("./marksMDB");



mongoose.connect('mongodb+srv://JavierFZ:Calzada99@cluster0.ctllnsg.mongodb.net/DIA3',
                    {useNewUrlParser: false, useUnifiedTopology: false})


// // INTRUDUCIR PROFESORES

let teacher1 = new Teacher({
    teacher_first_name: "Jose",
    teacher_last_name: "Herrera",
});

let teacher2 = new Teacher({
    teacher_first_name: "Carmen",
    teacher_last_name: "Aguilera",
});

let teacher3 = new Teacher({
    teacher_first_name: "Dani",
    teacher_last_name: "Torrijos",
});




// // INTRODUCIR NOTAS

let nota1 = new Marks({
    date : "2022-05-12",
    mark : 8,
    studient_first_name : "Javi",
    studient_last_name : "Fernandez",
    group_name : "presencial",
    subject_name : "javascript",
    teachers: [teacher1, teacher2]
})

let nota2 = new Marks({
    date : "2022-08-15",
    mark : 7,
    studient_first_name : "Julio",
    studient_last_name : "Marquez",
    group_name : "presencial",
    subject_name : "javascript",
    teachers: [teacher3, teacher2]
})


// nota2.save(checkRespuesta);

// Marks.create({
//     date : "2022-10-09",
//     mark : 9,
//     studient_first_name : "Natalia",
//     studient_last_name : "Fernandez",
//     group_name : "presencial",
//     subject_name : "sql",
//     teachers: [teacher3]
// }, checkRespuesta)



function checkRespuesta(err, res) 
{
 if (err)
    console.log("Error:" + err)
 else
 {
    console.log("Documento guardado correctamente")
    mongoose.disconnect();
 }      
};


// // CALCUAR NOTA MEDIA DE LOS ALUMNOS DE UNA ASIGNATURA

// Marks
// .aggregate([ {$match: {subject_name: "javascript"}}, {$group: {"_id": null, "Nota Media Javascript": {"$avg": "$mark"}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })



// // CALCULAR EL TOTAL DE ALUMNOS DEL BOOTCAMP


// Marks
// .aggregate([{$count: "total de alumnos"}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })





// // MOSTRAR NOMBRE Y APELLIDOS DE TODOS LOS ALUMNOS

// Marks
// .aggregate([{$project: {studient_first_name: 1, studient_last_name:1}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })




// // MOSTRAR NOMBRES Y APELLIDOS DE TODOS LOS PROFESORES


// Marks
// .aggregate([{$unwind:"$teachers"} , {$project: {_id: 0, teachers:1}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })




// // MOSTRAR EL NUMERO TOTAL DE ALUMNOS POR GRUPO ORDENADOS POR GRUPO EN ORDEN ALFABETICO INVERSO

// Marks
//     .aggregate([{
//         $group: { "_id": { grupo: "$group_name"}, "totalAlumnos": { "$sum": 1 }},
//     }, 
//     {
//         $project: { grupo: "$_id.grupo", totalAlumnos: 1, _id: 0 }
//     }, 
//     {
//         $sort: { grupo: -1 }
//     }
//     ])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })



// // OBTENER EL TOP 2 DE LOS NOMBRES DE LAS ASIGNATURAS CUYA NOTA MEDIA SEA MAYOR QUE 7

// Marks.aggregate([{ 
//         $group: { "_id": { asignatura: "$subject_name" }, "NotasMedias": { "$avg": "$mark" } } 
//     },
//     { 
//         $match: { NotasMedias: { $gt: 6 } } 
//     },
//     {
//         $sort: { NotasMedias: -1 }
//     },
//     {
//         $limit: 2
//     }
//     ])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })








// // CALCULAR EL NUMERO DE PROFESORES QUE HAY POR CADA ASIGNATURA


// Marks.aggregate([{ 
//         $unwind: "$teachers" 
//     },
//     {
//         $group: { "_id": { "Asignatura": "$subject_name" }, "Nº de Profesores": { "$sum": 1 } } 
//     }])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })




// // Obtén el nombre, apellido y la nota de los alumnos que tengan una nota mayor de 8 o la nota tenga fecha del año pasado o anterior.


// Marks.aggregate([{ 
//         $match: { "$or": [{ "mark": { "$gt": 8 } }, { "date": { "$lte": "2021-12-12" } }] } },
//     { 
//         $project: { "studient_first_name": 1, "studient_last_name": 1, "mark": 1, "_id": 0 } 
//     }])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })




// // Obtén la media de las notas que se han dado en el último año por asignatura.


// Marks.aggregate([{
//         $match: { "date": { "$gte": new Date("2021-12-12") } } 
//     }, 
//     { 
//         $group: { "_id": { "Asignatura": "$subject_name" }, "Media": { "$avg": "$mark" } } 
//     }])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })




// // Obtén la media aritmética de las notas que se han dado en el último año por nombre de alumno.


// Marks.aggregate([{ 
//         $match: { "date": { "$gte": new Date("2021-12-12") } } 
//     }, 
//     { 
//         $group: { "_id": { "Nombre": "$studient_first_name" }, "Media": { "$avg": "$mark" } } 
//     }])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })




// // Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno cuyo profesor sea uno que elijáis.


// Marks.aggregate([{ 
//         $unwind: "$teachers" 
//     }, 
//     { 
//         $match: { "teachers.teacher_first_name": "Carmen" } 
//     }, 
//     { 
//         $group: { "_id": { "Alumnos": "$studient_first_name" }, "value": { "$sum": 1 } } 
//     }])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })



