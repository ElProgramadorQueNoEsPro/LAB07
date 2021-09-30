var btnSolicitar = document.getElementById("btnSolicitar");
var btnMostrar = document.getElementById("btnMostrar");

btnSolicitar.addEventListener("change",cargar);
btnMostrar.addEventListener("click",mostrar);

var contenido;
function cargar(event){
    var f = event.target.files[0];
    //Validad tipo de archivo

    if(f.type.indexOf("json") === -1){
        alert("El tipo de archivo no puede procesarse");
        return;
    }

    var reader = new FileReader();
    //Eventos asociados
    reader.onloadstart = function(event){
        console.log("en loadstar...");
    }

    reader.onprogress = function(event){
        console.log("En progress..");
    }

    reader.onload = function(event){
        contenido = reader.result;
        console.log("en load...."+ contenido);
    }

    reader.onloadend = function(event){
        console.log (" en loadend....");
    }

    reader.onerror = function(event){
        console.log("ocurrio un error " + this.result.error );
    }

    //Indicar la lectura
    reader.readAsText(f);
}

function mostrar(){


    //Convertir la cadena a .... json
    var objetoJSON = JSON.parse(contenido);

    //Ahora hay que mostrar
    var parrafo = document.createElement("p");
    var titulo = document.createElement("h1");
    var imagen = document.createElement("img");
    
    //Asignar valores a cada nodo
    titulo.id  = "superheroe";
    titulo.textContent = objetoJSON.nombre;
    titulo.classList.add("h1");

    parrafo.textContent = objetoJSON.descripcion;

    imagen.src = objetoJSON.imagen;

    //Agregar DOM

    document.getElementById("contenido").appendChild(titulo);
    document.getElementById("contenido").appendChild(imagen);
    document.getElementById("contenido").appendChild(parrafo);


    
}
//Leer HEROES.JSON
function MostrarHeroes(){
    var objetoJSON=JSON.parse(contenido);

    var parrafo = document.createElement("p");
    var titulo = document.createElement("h1");
    var imagen = document.createElement("img");

    titulo.id  = "superheroe";
    titulo.textContent = objetoJSON.nombre;
    titulo.classList.add("h1");

    parrafo.textContent = objetoJSON.descripcion;

    imagen.src = objetoJSON.imagen;

    for(i=0;i<contenido.lenght;i++){
    document.getElementById("contenido").appendChild(titulo);
    document.getElementById("contenido").appendChild(imagen);
    document.getElementById("contenido").appendChild(parrafo);
    }


}