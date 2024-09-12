let coches = [];

function Automovil(marca, modelo, color, anio, titular){
    this.marca=marca;
    this.modelo=modelo;
    this.color=color;
    this.anio=anio;
    this.titular=titular;
}
//Sin estas funciones el codigo funciona bien, al añadir los metodos falla el registro

Automovil.prototype.encender = function(){
alert("El coche se ha encendido")
}
Automovil.prototype.verAutomovil = function(){
    return `${this.marca}, ${this.modelo} - ${this.anio} - ${this.titular}`;
}
//

function registrarAutomovil(){
    let cocheProto = new Automovil("x","x","x","x","x");
    for(let propiedad in cocheProto){
        let dato = document.getElementById(propiedad).value;
        cocheProto[propiedad] = dato;
    }
    coches.push(cocheProto);
    limpiarCampos();
}

function limpiarCampos(){
    document.getElementById("marca").value="";
    document.getElementById("modelo").value="";
    document.getElementById("color").value="";
    document.getElementById("anio").value="";
    document.getElementById("titular").value="";
}
function venderAutomovil(){
    let nuevoPropietario = document.getElementById("nuevoPropietario").value;
    let cocheVendido = +document.getElementById("cocheVendido").value;
    cocheVendido-=1;
    coches[cocheVendido]["titular"] = nuevoPropietario;
    
    document.getElementById("nuevoPropietario").value="";
    document.getElementById("cocheVendido").value="";
}
function mostrarVenta(){
    let contenedorFormulario = document.getElementById("formularioVenta");
    contenedorFormulario.style.display = "block";

    let elementoTitulo = document.createElement("h1");
    elementoTitulo.innerText = "Introduzca el nombre del nuevo propietario";
    contenedorFormulario.appendChild(elementoTitulo);

    let elementoInput = document.createElement("input");
    elementoInput.setAttribute("id","nuevoPropietario");
    elementoInput.setAttribute("type","text");
    elementoInput.setAttribute("placeholder","Nuevo propietario");
    contenedorFormulario.appendChild(elementoInput);

    let elementoInput2 = document.createElement("input");
    elementoInput2.setAttribute("id","cocheVendido");
    elementoInput2.setAttribute("type","text");
    elementoInput2.setAttribute("placeholder", "Numero de coche");
    contenedorFormulario.appendChild(elementoInput2);

    let elementoBoton = document.createElement("button");
    elementoBoton.innerText = "Vender coche";
    elementoBoton.addEventListener("click",venderAutomovil);
    contenedorFormulario.appendChild(elementoBoton);

    let botonOcultar = document.getElementById("ocultarVenta");
    let botonMostrar = document.getElementById("mostrarVenta");
    botonOcultar.style.display = "block";
    botonMostrar.style.display = "none";
}

function ocultarVenta(){
    let elementoFormulario = document.getElementById("formularioVenta");
    elementoFormulario.innerHTML = "";
    elementoFormulario.style.display = "none";
    let botonOcultar = document.getElementById("ocultarVenta");
    let botonMostrar = document.getElementById("mostrarVenta");
    botonOcultar.style.display = "none";
    botonMostrar.style.display = "block";
}

function crearFormulario(){
    let elementoFormulario = document.getElementById("formularioRegistro");
    elementoFormulario.style.display = "block";
    let coche1 = new Automovil("x","x","x","x","x");
    
    let elementoTitulo = document.createElement("h1");
    elementoTitulo.innerText = "Rellene el siguiente formulario para añadir un coche";
    elementoFormulario.appendChild(elementoTitulo);

    for(let propiedad in coche1){
        let elementoParrafo = document.createElement("p");
        let elementoEtiqueta = document.createElement("label");
        let elementoInput = document.createElement("input");

        elementoEtiqueta.innerText = propiedad.toUpperCase() + " : ";
        elementoEtiqueta.setAttribute("for",propiedad);
        elementoInput.setAttribute("id",propiedad);
        elementoInput.setAttribute("type","text");

        elementoParrafo.appendChild(elementoEtiqueta);
        elementoParrafo.appendChild(elementoInput);
        elementoFormulario.appendChild(elementoParrafo);
    }

    let elementoBoton = document.createElement("button");
    elementoBoton.innerText = "Registrar coche";
    elementoBoton.addEventListener("click",registrarAutomovil);
    elementoFormulario.appendChild(elementoBoton);

    let botonOcultar = document.getElementById("ocultarFormulario");
    let botonMostrar = document.getElementById("mostrarFormulario");
    botonOcultar.style.display = "block";
    botonMostrar.style.display = "none";
}
function ocultarFormulario(){
    let elementoFormulario = document.getElementById("formularioRegistro");
    elementoFormulario.innerHTML = "";
    elementoFormulario.style.display = "none";
    let botonOcultar = document.getElementById("ocultarFormulario");
    let botonMostrar = document.getElementById("mostrarFormulario");
    botonOcultar.style.display = "none";
    botonMostrar.style.display = "block";
}

function crearParrafoCoche(coche){
    let elementoParrafo = document.createElement("p");
    elementoParrafo.innerText = "Coche de : " + coche.titular;
    let elementoDatos = document.createElement("ul");
    for(let dato in coche){
        let elementoPropiedad = document.createElement("li");
        elementoPropiedad.innerText = dato+ " : " + coche[dato];
        elementoDatos.appendChild(elementoPropiedad);
    }
    elementoParrafo.appendChild(elementoDatos);
    return elementoParrafo;
}
function mostrarRegistro(){
    let elementoRegistro = document.getElementById("registroCoches");
    for(let coche of coches){
        elementoRegistro.appendChild(crearParrafoCoche(coche));
    }
    let botonOcultar = document.getElementById("botonOcultar");
    let botonMostrar = document.getElementById("botonMostrar");
    botonOcultar.style.display = "block";
    botonMostrar.style.display = "none";
}
function ocultarRegistro(){
    let elementoRegistro = document.getElementById("registroCoches");
    elementoRegistro.innerHTML = "";
    let botonOcultar = document.getElementById("botonOcultar");
    let botonMostrar = document.getElementById("botonMostrar");
    botonOcultar.style.display = "none";
    botonMostrar.style.display = "block";
}