import { addAlumnos } from "./fichero3";
import { alumnos } from "./fichero2";

let boton1 = document.getElementById("boton1");
boton1.innerText = "Mi boton";
boton1.addEventListener('click',()=>addAlumnos(alumnos));
