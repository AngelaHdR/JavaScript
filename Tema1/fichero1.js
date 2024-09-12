let x=20;

let textoX = document.createElement("h2");
textoX.textContent = "Valor de x: " + x;

let contenedorOperaciones = document.getElementById("operaciones");
contenedorOperaciones.appendChild(textoX);