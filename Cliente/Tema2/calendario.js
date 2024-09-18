//Variables
let fecha = new Date();
let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
let diasMeses = [31,28,31,30,31,30,31,31,30,31,30,31];
let diasSemana = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];

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
function crearCalendario(){
    let tituloDias = document.getElementById("tituloDias");
    tituloDias.innerHTML="";
    for(i=1;i<8;i++){
        let titulo = document.createElement("th");
        if(i>=7){
            titulo.textContent = diasSemana[0];
        }else{
            titulo.textContent = diasSemana[i];
        }
        tituloDias.appendChild(titulo);
    }
    mostrarFechas();
}

function mostrarMes(){
    year = +document.getElementById("anyo").value;
    month = +document.getElementById("mes").value;
    definirMes(year,month-1);
    crearCalendario();
}

function definirMes(year,month){
    fecha.setFullYear(year)
    fecha.setMonth(month);
    fecha.setDate(1);
    let mesCalendario = document.getElementById("mesCalendario");
    mesCalendario.textContent = `${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`;
}

function mostrarFechas(){
    let tablaBody = document.getElementById("numerosDias");
    tablaBody.innerHTML="";
    let diaUno = fecha.getDay();
    if(diaUno==0){
        diaUno=7;
    }
    let longitud = diasMeses[fecha.getMonth()];

    longitud = longitud + (-1+diaUno);
    let fila = document.createElement("tr");
    let iterarSemana=1;
    for(i=1;i<=longitud;i++){
        if(iterarSemana<diaUno){
            let columna = document.createElement("td");
            columna.textContent=" ";
            fila.appendChild(columna);
            iterarSemana++;
        }else{
            let columna = document.createElement("td");
            columna.textContent=i-diaUno+1;
            fila.appendChild(columna);
        }
        if(i%7==0 || i==longitud){
            tablaBody.appendChild(fila);
            fila = document.createElement("tr");
        }
    }
}

function avanzarMes(){
    month+=1;
    definirMes(year,month);
    crearCalendario();
}

function retrocederMes(){
    month-=1
    definirMes(year,month);
    crearCalendario();
}