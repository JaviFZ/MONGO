
class Professional {
    constructor(name, age, oscarsNumber ,profession){
        this.name = name;
        this.age = age;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        
    }
}



// FUNCION VALIDAR PARA QUE LOS PROFESIONALES SE CREEN CON TODOS LOS CAMPOS


function validar(professional)
{
    resultado = false
    if (professional.name == "" || professional.name == "null")
    {
        showToast("AVISO: Campo nombre no informado", "bg-warning")
    }
    else if (professional.age == "" || professional.age == "null")
    {
        showToast("AVISO: Campo edad no informado", "bg-warning")
    }
    else if (professional.oscarsNumber == "" || professional.oscarsNumber == "null")
    {
        showToast("AVISO: Campo nºOscars no informado", "bg-warning")
    }
    else if (professional.profession == "" || professional.profession == "null")
    {
        showToast("AVISO: Campo profesion no informado", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}

// // FUNCION PARA MOSTRAR EL TOAST (UNA ESPECIE DE ALERT)

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}



function tarjeta() {
    // console.log(professional);
    document.getElementById("movies").innerHTML= '';
    movies.forEach(function (movie) {
        document.getElementById("movies").innerHTML += `
        <div class="card" >
                <div class="card-body">
                <h5 class="card-title" style="height:80px" id="card_title1">ID profesional: ${data._id}</h5>
                <p class="card-text"> 
                Nombre: ${data.name} <br> 
                Edad: ${data.age}<br>
                Numero de Oscars: ${data.oscarsNumber}<br>
                Profesion: ${data.profession}<br>

                </p>
                
                </div>
            </div>
            `
    })
}
window.onload = (event) => {
    tarjeta();
};



function postProf()
{
    let professional = new Professional(document.getElementById("first_name").value,
                        document.getElementById("last_name").value,
                        document.getElementById("id_grupo").value,
                        document.getElementById("year_ingress").value,)
    
    const url = "http://localhost:3000/prof";

    if (validar(professional))
    {
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(professional),
                method: "POST"
            }

        fetch(url, param)
        .then(function(data)
        {
            return data.json()
        })
        .then(function(result)
        {
            if (result.error)
                showToast("ERROR: " +  result.mensaje, "bg-danger")
            else
                showToast(`professional con ID: ${result._id}  Creado Correctamente`, "bg-success")

            console.log(result)
        })
        .catch(function(error)
        {
            console.log(error)
        })
    }
}





function getProf()
{

    let lista = document.getElementById("alumnos");  
    lista.innerHTML=""
    let id = document.getElementById("id_studient").value;
    console.log(id);
    if(id){

        let url = "http://localhost:3000/prof?id="+id;

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }
    console.log(url);
    fetch(url, param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(data)
    {      
        if (!data.error)
        {      
              console.log(id + 'en fech');
              console.log(data);
        // console.log(solicitud);                                
        lista.innerHTML += `<div class="card" >
                            <div class="card-body">
                            <h5 class="card-title" style="height:80px" id="card_title1">ID profesional: ${data._id}</h5>
                            <p class="card-text"> 
                            <b>Nombre:</b> ${data.name} <br> 
                            <b>Edad: </b>${data.age}<br>
                            <b>Numero de Oscars: </b>${data.oscarsNumber}<br>
                            <b>Profesion: </b>${data.profession}<br>
                            </p>
                        </div>
                    </div>`
                                                        
        }
        else
            showToast("ERROR: " +  data.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error)
    })
    } else {
        let url = "http://localhost:3000/prof";

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }

    fetch(url, param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result)
    {      
        if (!result.error)
        {        

    result.forEach(function (professional) {               
        // console.log(solicitud);                                
        lista.innerHTML += `
                            <div class="card" >
                            <div class="card-body">
                            <h5 class="card-title" style="height:80px" id="card_title1">ID profesional: ${professional._id}</h5>
                            <p class="card-text"> 
                            <b>Nombre:</b> ${professional.name} <br> 
                            <b>Edad: </b>${professional.age}<br>
                            <b>Numero de Oscars:</b> ${professional.oscarsNumber}<br>
                            <b>Profesion:</b> ${professional.profession}<br>
                            </p>
                        </div>
                    </div>`
    })                                                       
        }
        else
            showToast("ERROR: " +  result.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error)
    })
    }

    tarjeta();
}





function putProf() {
    let newName = document.getElementById("first_name").value;
    let newAge = document.getElementById("last_name").value;
    let newOscarsNumber = document.getElementById("id_grupo").value;  
    let newProfession = document.getElementById("year_ingress").value;
    let id = document.getElementById("id_studient").value;

    let newProfessional = {id}

    if(newName != ''){
        newProfessional.name = newName;
    }
    if(newAge != ''){
        newProfessional.age = newAge;
    }
    if(newOscarsNumber != ''){
        newProfessional.oscarsNumber = newOscarsNumber;
    }
    if(newProfession != ''){
        newProfessional.profession = newProfession;
    }

    // let newProfessional ={
    //     name: newName, 
    //     age: newAge, 
    //     oscarsNumber: newOscarsNumber, 
    //     profession: newProfession,
    //     id: id

    // }
    // console.log(newProfessional);
    
    let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
        method: "PUT",
        body:JSON.stringify(newProfessional)
        
    };

    
 
    let url = "http://localhost:3000/prof"
    
    if (id != "") {
        fetch(url, param)
        .then((data) => {
        return data;
        })
        .then((data) => {
          console.log(data.resultado);
          showToast(`profesional actualizado Correctamente`, "bg-success")
        })
        .catch((error) => {
          console.log(error);
          showToast("ERROR: " +  error.mensaje, "bg-danger")
        })
    
    } else {
        showToast("Rellena el campo Id", "bg-danger");
    }
}





function deleteProf() {
    let id = document.getElementById("id_studient").value;
    // console.log(id);
  
    let param = {headers: {"Content-type": "application/json; charset= UTF-8"},
      method: "DELETE",
      body: JSON.stringify({id: id})
    };
  
    const url = "http://localhost:3000/prof";
  
    if (id != "") {
        fetch(url,param)
        .then((data) =>{
        return data.json()
        })
        .then((data) => {
        console.log(data);
        showToast(`professional eliminado Correctamente`, "bg-success")
        })
        .catch((error) => {
        console.log(error);
        })
    } else {
        showToast("Rellena el campo id", "bg-danger");
    }
}

