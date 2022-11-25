
const ProfModel = require("../model/professional")


function getProf(request, response) 
{
    if(request.query.id == null)
    {
        ProfModel.find({})
        .then((prof) => 
        {
            console.log(prof)
            response.send(prof);
        })
        .catch((err) => 
        {
            console.log(err)
            // process.exit(-1);
        })
    }
    else
    {
        ProfModel.findById(request.query.id)
        .then((prof) => 
        {
            console.log(prof)
            response.send(prof);
        })
        .catch((err) => 
        {
            console.log(err)
            // process.exit(-1);
        })
    }    
}



function postProf(request, response)
{
    // console.log(request.body);

    let prof = new ProfModel({
        name : request.body.name,
        age: request.body.age,
        oscarsNumber: request.body.oscarsNumber,
        profession: request.body.profession
    })
    prof.save()
    .then((prof) => 
    {
        console.log("Profesional guardade")
        console.log(prof)
        response.send(prof);
    })    
    .catch((error) =>
    {
        console.log(error);
    })
}



function putProf(request, response) 
{
    ProfModel.findByIdAndUpdate(request.body.id,
                                {                         
                                name : request.body.name,
                                age: request.body.age,
                                oscarsNumber: request.body.oscarsNumber,
                                profession: request.body.profession
                                },
                                )    
    .then((prof) => 
    {
        console.log("Profesional actualizade")
        response.send(prof);
    })
    .catch((error) =>
    {
        console.log(error);
    })
}



function deleteProf(request, response) 
{
    ProfModel.deleteOne({"_id": request.body.id})
    .then((prof) =>
    {
        console.log("Profesional eliminade")
        response.send(prof);
    })    
    .catch((error) => 
    {
        console.log(error);
    })
}



module.exports = {getProf, postProf, putProf, deleteProf}