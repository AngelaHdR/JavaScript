//Variables
let fecha = new Date();
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let diasMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let diasSemana = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

//Fecha actual
let anyo = fecha.getFullYear();
let mes = meses[fecha.getMonth()];
let dia = fecha.getDate();
let diaSemana = diasSemana[fecha.getDay()];

let mensaje = `Hoy es ${diaSemana}, ${dia} de ${mes} del ${anyo}`;
let fechaActual = document.getElementById("mostrarFecha");
fechaActual.textContent = mensaje;

//Mostrar un calendario
let year;
let month;
function crearCalendario() {
    let tituloDias = document.getElementById("tituloDias");
    tituloDias.innerHTML = "";
    /*Con programacion funcional, pero el domingo sale primero 
    diasSemana.forEach(dia=>{
        let titulo = document.createElement("th");
        titulo.textContent = dia;
        tituloDias.appendChild(titulo);
        
    })*/
    
    for (i = 1; i < 8; i++) {
        let titulo = document.createElement("th");
        if (i >= 7) {
            titulo.textContent = diasSemana[0];
        } else {
            titulo.textContent = diasSemana[i];
        }
        tituloDias.appendChild(titulo);
    }
    mostrarFechas();
}

function mostrarMes() {
    year = +document.getElementById("anyo").value;
    month = +document.getElementById("mes").value -1;
    definirMes(year, month);
    crearCalendario();
}

function definirMes(year, month) {
    fecha.setFullYear(year)
    fecha.setMonth(month);
    fecha.setDate(1);
    let mesCalendario = document.getElementById("mesCalendario");
    mesCalendario.textContent = `${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`;
}

function mostrarFechas() {
    let tablaBody = document.getElementById("numerosDias");
    tablaBody.innerHTML = "";
    let diaUno = fecha.getDay();
    if (diaUno == 0) {
        diaUno = 7;
    }
    let longitud = diasMeses[fecha.getMonth()];

    longitud = longitud + (-1 + diaUno);
    let fila = document.createElement("tr");
    let iterarSemana = 1;
    for (i = 1; i <= longitud; i++) {
        //Rellenar las primeras celdas vacias hasta el dia 1
        if (iterarSemana < diaUno) {
            let columna = document.createElement("td");
            columna.textContent = " ";
            fila.appendChild(columna);
            iterarSemana++;
        //Completar las celdas con numeros
        } else {
            let columna = document.createElement("td");
            let dia = i - diaUno + 1;
            columna.setAttribute("class","dia"+dia)
            columna.textContent = dia;
            fila.appendChild(columna);
        }
        //Cambiar de fila cuando llega el domingo
        if (i % 7 == 0) {
            tablaBody.appendChild(fila);
            fila = document.createElement("tr");
        }
        //Rellenar las celdas vacias hasta el siguiente domingo
        if (i == longitud) {
            let finalDay = new Date(fecha.getFullYear(), fecha.getMonth(), diasMeses[fecha.getMonth()]).getDay();
            while (finalDay != 0) {
                let columna = document.createElement("td");
                columna.textContent = " ";
                fila.appendChild(columna);
                finalDay++;
                if (finalDay == 7) {
                    finalDay = 0;
                }
            }
            tablaBody.appendChild(fila);
        }
    }
    pintarFechaActual();
}

function avanzarMes() {
    month += 1;
    definirMes(year, month);
    crearCalendario();
}

function retrocederMes() {
    month -= 1
    definirMes(year, month);
    crearCalendario();
}

function pintarFechaActual(){
    let fechaActual = new Date();
    if(month==fechaActual.getMonth() && year==fechaActual.getFullYear()){
        console.log(fechaActual);
        console.log(fechaActual.getDate());
        let diaActual = document.getElementsByClassName("dia"+fechaActual.getDate());
        diaActual[0].setAttribute("class","table__day--warning")
    }
}