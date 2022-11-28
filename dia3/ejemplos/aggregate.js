let mongoose = require("mongoose");
const fs = require('fs');

mongoose.connect('mongodb://localhost:27017/codenotch', 
                {useNewUrlParser: false, useUnifiedTopology: false }  ) 

const LibroSchema = new mongoose.Schema(
    {
        titulo:String,
        nPaginas: Number,
    })

const AutorSchema = new mongoose.Schema(
    {
        nombre: String,
        edad: Number,
        direccion: mongoose.Schema.Types.Mixed,
        libros: [LibroSchema]
    
    }
)

LibroSchema.add({autores: [AutorSchema]});

let LibroModel = mongoose.model("LibroArbol", LibroSchema);
let AutorModel = mongoose.model("AutorArbol", AutorSchema);

// let autor1 = new AutorModel(
//     {
//         nombre: "Pepin", 
//         edad:109, 
//         direccion: {calle: "Triana", Ciudad: "Madrid", CP:28020},
//         libros: []
//     })

// let autor2 = new AutorModel(
//     {
//         nombre: "Sara", 
//         edad:300, 
//         direccion: {calle: "Libertad", Ciudad: "Guadalajara", CP:29033},
//         libros: []
//     })

// let autor3 = new AutorModel(
//     {
//         nombre: "Pepin", 
//         edad:109, 
//         direccion: {calle: "Triana", Ciudad: "Madrid", CP:28020},
//         libros: []
//     })

// autor1.save()
// .then((data) =>
// {
//     console.log(data);
// })
// .catch((err) =>
// {
//    console.log(err) 
// })
// autor2.save()
// autor3.save()

// //EQUIVALENCIA SELECT con solo unos campos y no mostrar el campo id
// AutorModel
// .aggregate([{$project: {//"NombreAutor": "$nombre", 
//                         nombre: 1,
//                          edad: 1,
//                          _id: 0}
//             }])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })




// //EQUIVALENCIA al WHERE
// AutorModel
// .aggregate([{$match: {nombre: "Pepin"}}])
// .then((result) =>
// {
//     console.log(result);
//    //fs.writeFileSync("autores.json", JSON.stringify(result))
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// //EQUIVALENCIA al COUNT
// AutorModel
// .aggregate([{$count: "Numero de Autores"}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// AutorModel
// .aggregate([{$match: {nombre: "Pepin"}}, 
//             {$count:"Numero de Autores con Nombre Pepin"}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// //EQUIVALENCIA DISTINCT
// AutorModel
// .distinct("nombre")
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// //EQUIVALENCIA              
// AutorModel
// .aggregate([{$group: {"_id": null, "Edad Total": {"$sum": "$edad"}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// // EQUIVALENCIA AVG
// AutorModel
// .aggregate([{$group: {"_id": null, "Edad Media": {"$avg": "$edad"}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


//////////////////////////////////////////

// EQUIVALENCIA AND y OR
// AutorModel
// .aggregate([{$match: {"$and":[{edad: {"$gte": 200}},
//                               {"$or": [{nombre:"Sara"},
//                                        {"direccion.calle":"Hermandad"}
//                                        ]
//                               }
//                              ]
//                      } 
//             }])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//EQUIVALENCIA GROUP BY. Contar el número de veces que aparece cada nombre
// AutorModel
// .aggregate([{$group: {"_id": {"Nombre" : "$nombre"}, 
//                      "Cantidad": {"$sum": 1}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//EQUIVALENCIA HAVING. Contar el número de veces que aparece cada nombre si esta cantidad es mayor igual  que 3
// AutorModel
// .aggregate([{$group: {"_id": {"Nombre" : "$nombre"}, 
//                       "Cantidad": {"$sum": 1}}},
//             {$match: {"Cantidad": {"$gte": 3}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// //EQUIVALENCIA ORDER BY. Igual que el anterior pero en orden ascencente
// AutorModel
// .aggregate([{$group: {"_id": {"Nombre" : "$nombre"}, 
//                       "Cantidad": {"$sum": 1}}},
//             {$match: {"Cantidad": {"$gte": 3}}},
//             {$sort: {"Cantidad": 1}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// //EQUIVALENCIA ORDER BY. Igual que el anterior pero en orden descendente
// AutorModel
// .aggregate([{$group: {"_id": {"Nombre" : "$nombre"}, 
//                       "Cantidad": {"$sum": 1}}},
//             {"$match": {"Cantidad": {"$gt": 1}}},
//             {"$sort": {"Cantidad": -1}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//EQUIVALENCIA LIMIT. Igual que el anterior pero que solo muestre un valor
// AutorModel
// .aggregate([{$group: {"_id": {"Nombre" : "$nombre"}, 
//                       "Cantidad": {"$sum": 1}}},
//             {$match: {"Cantidad": {"$gt": 1}}},
//             {$sort: {"Cantidad": -1}},
//             {$limit: 1}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

////////////////////////////////////////////////////////////////

//Skip
// AutorModel
// .aggregate([{$skip: 3}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//Unwind
AutorModel
.aggregate([{$match: {_id:mongoose.Types.ObjectId("637c9a421d9ac1e65be73372")}},
            {$unwind: "$libros"}
        ])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})


