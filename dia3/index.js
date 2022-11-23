const mongoose = require("mongoose");
const Teacher = require("./teacherMDB");
const Marks = require("./marksMDB");



mongoose.connect('mongodb+srv://JavierFZ:Calzada99@cluster0.ctllnsg.mongodb.net/DIA3',
                    {useNewUrlParser: false, useUnifiedTopology: false})


// // INTRUDUCIR PROFESORES

let teacher1 = new Teachers({
    teacher_first_name: "Jose",
    teacher_last_name: "Herrera",
});

let teacher2 = new Teachers({
    teacher_first_name: "Carmen",
    teacher_last_name: "Aguilera",
});

let teacher3 = new Teachers({
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

let nota3 = new Marks({
    date : "2022-08-08",
    mark : 8,
    studient_first_name : "Paco",
    studient_last_name : "Gomez",
    group_name : "on-line",
    subject_name : "mongo",
    teachers: [teacher1, teacher3]
})

let nota4 = new Marks({
    date : "2022-10-12",
    mark : 4,
    studient_first_name : "Ruben",
    studient_last_name : "Perez",
    group_name : "on-line",
    subject_name : "mongo",
    teachers: [teacher1]
})

let nota5 = new Marks({
    date : "2022-05-12",
    mark : 7,
    studient_first_name : "Alex",
    studient_last_name : "Mas",
    group_name : "presencial",
    subject_name : "javascript",
    teachers: [teacher1, teacher2]
})