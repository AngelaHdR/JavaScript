let tableBody = document.getElementById("totalRegistros");
//Mostrar todas las filas
function crearFilasTabla(){
    fetch("https://my-json-server.typicode.com/fedegaray/telefonos/db")
    //fetch("agenda.json")
    .then(res=>res.json())
    .then((salida)=>{
        for(let registro of salida.dispositivos){
            crearFila(registro);
        } 
    })
}

//Añadir una fila a la tabla
function crearFila(registro){
    let elementoFila = document.createElement("tr");
    elementoFila.setAttribute("id","fila"+registro.id);

    let marca = document.createElement("td");
    marca.textContent = registro.marca;
    elementoFila.appendChild(marca);

    let modelo = document.createElement("td");
    modelo.textContent=registro.modelo;
    elementoFila.appendChild(modelo);

    let color = document.createElement("td");
    color.textContent=registro.color;
    elementoFila.appendChild(color);

    let almacenamiento = document.createElement("td");
    almacenamiento.textContent=registro.almacenamiento;
    elementoFila.appendChild(almacenamiento);

    let procesador = document.createElement("td");
    procesador.textContent=registro.procesador;
    elementoFila.appendChild(procesador);

    tableBody.appendChild(elementoFila)
}

//Borrar una fila de la tabla
function borrarFila(id){
    let filaTabla = document.getElementById("fila"+id);
    filaTabla.innerHTML="";
}

//Buscar un solo registro
function buscarRegistro(){
    let identificador = document.getElementById("identificadorRegistro");
    identificador = Number(identificador.value);
    fetch("https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/"+identificador)
    .then(res=>res.json())
    .then((data)=>{
        for(let propiedad in data){
            if(propiedad=="id"){
                continue;
            }
            let elementoPropiedad = document.getElementById(propiedad+"Modificar");
            elementoPropiedad.innerText = data[propiedad];
            
        }
    })
}

//Añadir un nuevo registro
async function crearRegistro(marca,modelo,color,almacenamiento,procesador){
    try{
        let respuesta = await fetch("https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                marca: marca,
                modelo: modelo,
                color: color,
                almacenamiento: almacenamiento,
                procesador: procesador
            })
        })
        if(!respuesta.ok){
            throw new Error("Error en la solicitud: " + respuesta.statusText);
        }

        let data = await respuesta.json();
        alert("Registro creado");

    }catch(error){
        console.log("Algo salio mal al crear el registro: "+error)
    }
}

function nuevoRegistro(){
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let color = document.getElementById("color").value;
    let almacenamiento = document.getElementById("almacenamiento").value;
    let procesador = document.getElementById("procesador").value;
    
    crearRegistro(marca,modelo,color,almacenamiento,procesador);
    let registro = {
        "marca": marca,
        "modelo": modelo,
        "color": color,
        "almacenamiento": almacenamiento,
        "procesador": procesador
    };
    crearFila(registro);
}

//Modificar un registro ya existente
function guardarRegistro(marca,modelo,color,almacenamiento,procesador){
    let identificador = document.getElementById("identificadorRegistro");
    identificador = Number(identificador.value);

    fetch("https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/"+identificador,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            marca: marca,
            modelo: modelo,
            color: color,
            almacenamiento: almacenamiento,
            procesador: procesador
        })
    })
    .then(respuesta => respuesta.json())
    .then(data => {
        alert("El registro fue modificado");
        borrarFila(identificador);
    })
    .catch(error => console.error("Error: " + error))
}

function modificarRegistro(){
    let marca = document.getElementById("marcaModificar").value;
    let modelo = document.getElementById("modeloModificar").value;
    let color = document.getElementById("colorModificar").value;
    let almacenamiento = document.getElementById("almacenamientoModificar").value;
    let procesador = document.getElementById("procesadorModificar").value;
    
    guardarRegistro(marca,modelo,color,almacenamiento,procesador);
    let registro = {
        "marca": marca,
        "modelo": modelo,
        "color": color,
        "almacenamiento": almacenamiento,
        "procesador": procesador
    };
    crearFila(registro);
}

//Borrar un registro
function eliminarRegistro(){
    let identificador = document.getElementById("identificadorRegistro");
    identificador = Number(identificador.value);

    fetch("https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/"+identificador,{
        method: "DELETE"
    })
    .then(respuesta => respuesta.json())
    .then(data => {
        alert("Registro eliminado");
        borrarFila(identificador);
    })
    .catch(error => console.error("Error: " + error))

}

