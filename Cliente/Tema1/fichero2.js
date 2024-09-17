let y=30;
let z=x+y;

let textoY = document.createElement("h3");
textoY.textContent = "Valor de y: " + y;

let textoZ = document.createElement("h3");
textoZ.textContent = "Valor de z: " + z;

let contenedorOperacion = document.getElementById("operaciones");
contenedorOperacion.appendChild(textoY);
contenedorOperacion.appendChild(textoZ)