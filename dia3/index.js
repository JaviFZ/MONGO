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
//     date : "2021-07-12",
//     mark : 9,
//     studient_first_name : "Javi",
//     studient_last_name : "Fernandez",
//     group_name : "presencial",
//     subject_name : "mongo",
//     teachers: [teacher2, teacher1]
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

Marks
.aggregate([{$unwind:"$teachers"} , {$project: {_id: 0, teachers:1}}])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})



// // OBTENER EL TOP 5 DE LOS NOMBRES DE LAS ASIGNATURAS CUYA NOTA MEDIA SEA MAYOR QUE 5






// // CALCULAR EL NUMERO DE PROFESORES QUE HAY POR CADA ASIGNATURA