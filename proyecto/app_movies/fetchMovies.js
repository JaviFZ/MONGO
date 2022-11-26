class Movie {
    constructor(title, genre, actors ,screenwritters, directors, producer){
        this.title = title;
        this.genre = genre;
        this.actors = actors;
        this.screenwritters = screenwritters;
        this.directors = directors;
        this.producer = producer;
        
    }
}



// FUNCION VALIDAR PARA QUE LOS PROFESIONALES SE CREEN CON TODOS LOS CAMPOS


function validar(movie)
{
    resultado = false
    if (movie.title == "" || movie.title == "null")
    {
        showToast("AVISO: Campo titulo no informado", "bg-warning")
    }
    else if (movie.genre == "" || movie.genre == "null")
    {
        showToast("AVISO: Campo genero no informado", "bg-warning")
    }
    else if (movie.actors == "" || movie.actors == "null")
    {
        showToast("AVISO: Campo actores no informado", "bg-warning")
    }
    else if (movie.screenwritters == "" || movie.screenwritters == "null")
    {
        showToast("AVISO: Campo guionistas no informado", "bg-warning")
    }
    else if (movie.directors == "" || movie.directors == "null")
    {
        showToast("AVISO: Campo directores no informado", "bg-warning")
    }
    else if (movie.producer == "" || movie.producer == "null")
    {
        showToast("AVISO: Campo productora no informado", "bg-warning")
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




function postMovie()
{
    let movie = new Movie(document.getElementById("title").value,
                        document.getElementById("genre").value,
                        document.getElementById("actors").value,
                        document.getElementById("screenwritters").value,
                        document.getElementById("directors").value,
                        document.getElementById("producer").value,)
    
    const url = "http://localhost:3000/movie";

    if (validar(movie))
    {
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(movie),
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





function getMovie()
{

    let lista = document.getElementById("peliculas");  
    lista.innerHTML=""
    let id = document.getElementById("id_movie").value;
    console.log(id);
    if(id){

        let url = "http://localhost:3000/movie?id="+id;

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
            //   console.log(id + 'en fech');
              console.log(data);
        // console.log(solicitud);                                
        lista.innerHTML += `<p>ID pelicula: ${data._id} <br> 
                            Titulo: ${data.title} <br>  
                            Genero: ${data.genre}<br>
                            Actores: ${data.actors}<br>
                            Guionistas: ${data.screenwritters}<br>
                            Directores: ${data.directors}<br>
                            Productora: ${data.producer}<br>
                            </p>`
                                                        
        }
        else
            showToast("ERROR: " +  data.mensaje, "bg-danger")

    })
    .catch(function(error)
    {
        console.log(error)
    })
    } else {
        let url = "http://localhost:3000/movie";

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

    result.forEach(function (movie) {               
        // console.log(solicitud);                                
        lista.innerHTML += `<p>ID pelicula: ${movie._id} <br>
                            Titulo: ${movie.title} <br>  
                            Genero: ${movie.genre}<br>
                            Actores: ${movie.actors}<br>
                            Guionistas: ${movie.screenwritters}<br>
                            Directores: ${movie.directors}<br>
                            Productora: ${movie.producer}<br>
                            </p>`
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

    
}





function putMovie() {
    let newTitle = document.getElementById("title").value;
    let newGenre = document.getElementById("genre").value;
    let newActor = document.getElementById("actors").value;  
    let newScreenwritter = document.getElementById("screenwritters").value;
    let newDirector = document.getElementById("directors").value;
    let newProducer = document.getElementById("producer").value;
    let id = document.getElementById("id_movie").value;


    let newMovie = {id}


    if(newTitle != ''){
        newMovie.title = newTitle;
    }
    if(newGenre != ''){
        newMovie.genre = null;
    }
    if(newActor != ''){
        newMovie.actors = newActor;
    }
    if(newScreenwritter != ''){
        newMovie.screenwritters = newScreenwritter;
    }
    if(newDirector != ''){
        newMovie.directors = newDirector;
    }
    if(newProducer != ''){
        newMovie.producer = newProducer;
    }

    // let newMovie ={
    //     title: newTitle, 
    //     genre: newGenre, 
    //     actors: newActor, 
    //     screenwritters: newScreenwritter,
    //     directors: newDirector,
    //     producer: newProducer,
    //     id: id

    // }
    console.log(newMovie);
    
    let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
        method: "PUT",
        body:JSON.stringify(newMovie)
        
    };

    
 
    let url = "http://localhost:3000/movie"
    
    if (id != "") {
        fetch(url, param)
        .then((data) => {
        return data;
        })
        .then((data) => {
          console.log(data.resultado);
          showToast(`Pelicula modificada Correctamente`, "bg-success")
        })
        .catch((error) => {
          console.log(error);
          showToast("ERROR: " +  error.mensaje, "bg-danger")
        })
    
    } else {
        showToast("Rellena el campo Id", "bg-danger");
    }
}





function deleteMovie() {
    let id = document.getElementById("id_movie").value;
    // console.log(id);
  
    let param = {headers: {"Content-type": "application/json; charset= UTF-8"},
      method: "DELETE",
      body: JSON.stringify({id: id})
    };
  
    const url = "http://localhost:3000/movie";
  
    if (id != "") {
        fetch(url,param)
        .then((data) =>{
        return data.json()
        })
        .then((data) => {
        // console.log(data);
        showToast(`Pelicula eliminada`, "bg-success")
        })
        .catch((error) => {
        console.log(error);
        })
    } else {
        showToast("Rellena el campo id", "bg-danger");
    }
}
