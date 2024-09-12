/*let audio = document.getElementById("audio");
let listaCanciones = document.getElementById("listaCanciones");
listaCanciones.addEventListener("change",cambiarCancion);

function cambiarCancion(){
    let cancionElegida = listaCanciones.value;
    audio.src=cancionElegida;
    audio.play();
    let evento = new CustomEvent("cambioDeCancion");
    audio.dispatchEvent(evento);
}

audio.addEventListener("cambioDeCancion",mostrarCancion);

function mostrarCancion(){
    console.log("La cancion actual es " + listaCanciones.value);
}
*/

//Variables
let listaCategorias = document.getElementById("listaCategorias");
let elementoBuscado = document.getElementById("buscador");
let botonBusqueda = document.getElementById("buscar");
let contenedorLista = document.getElementById("resultadoBusqueda");
let categoriaElegida = "peliculas.json";

//Eventos
listaCategorias.addEventListener("change", cambiarCategoria);
listaCategorias.addEventListener("encontrarCategoria",encontrarCategoria);
elementoBuscado.addEventListener("keydown",verificarInput);
botonBusqueda.addEventListener("click",busqueda);

//Funciones
function cambiarCategoria(){
    categoriaElegida = listaCategorias.value;
    let evento = new CustomEvent("encontrarCategoria");
    listaCategorias.dispatchEvent(evento);
}

function encontrarCategoria(){
    alert("Se modifico el archivo base a "+listaCategorias.value);
}

//Solo dejar escribir letras
function verificarInput(event){
    if((event.key<65 || event.key>90) && (event.key!=8 || event.key!=32) ){
        event.dispatchEvent();
    }
    
}

//Realizar la busqueda
function busqueda(){
    contenedorLista.innerHTML="";
    fetch(categoriaElegida)
    .then(resp=>resp.json())
    .then((salida)=>{
        for(let pelicula of salida.data){
            let nombre = pelicula.nombre;
            if(nombre.startsWith(elementoBuscado.value.toUpperCase())){
                
                let sinopsis = document.createElement("p");
                sinopsis.id=pelicula.nombre;
                sinopsis.innerHTML = pelicula.sinopsis;
                sinopsis.style.display = "none";

                let titulo = document.createElement("li")
                titulo.innerHTML = nombre;

                titulo.addEventListener("mouseover",function(){
                    let p = document.getElementById(pelicula.nombre);
                    p.style.display = "block";
                });
                titulo.addEventListener("mouseout",function(){
                    let p = document.getElementById(pelicula.nombre);
                    p.style.display = "none";
                });
                titulo.appendChild(sinopsis);
                contenedorLista.appendChild(titulo);
            }
        }
    }).catch(function(error){
        alert(error)
    });
}
