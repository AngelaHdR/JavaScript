function crearTabla(){
    //Crear primera fila y columna
    let tablasMultiplicar = document.getElementById("tablasMultiplicar");
    let tituloTablas = document.createElement("tr");
    tituloTablas.setAttribute("id","tituloTablas");
    tablasMultiplicar.appendChild(tituloTablas);

    let totalTablas = document.createElement("tbody");
    totalTablas.setAttribute("id","totalTablas");
    tablasMultiplicar.appendChild(totalTablas);

    //Modificar thead
    let titulo = document.createElement("th");
    titulo.textContent = " ";
    tituloTablas.appendChild(titulo);

    for(i=1;i<=10;i++){
        //Añadir los nombres de las columnas
        let titulo = document.createElement("th");
        titulo.setAttribute("id","tabla"+i);
        titulo.textContent = "Tabla "+i;
        tituloTablas.appendChild(titulo);
        addFilas();
    }
}

function addFilas(){
    //Añadir los nombres de las filas
    let elementoFila = document.createElement("tr");
    elementoFila.setAttribute("id","fila"+i);
    for(num=0;num<=10;num++){
        let resultado = document.createElement("td");
        if(num==0){
            resultado.textContent = i;
        }else{
            resultado.textContent = "";
        }
        resultado.setAttribute("id","fila"+i+"column"+num);
        elementoFila.appendChild(resultado);
    }

    totalTablas.appendChild(elementoFila);
}

function mostrarTabla(){
    let num = +document.getElementById("numeroTabla").value;
    for(i=1;i<=10;i++){
        //Modificar cada fila de la columna num de la tabla
        let resultado = document.getElementById("fila"+i+"column"+num);
        resultado.textContent = num*i;
    }
    
}

function multiplicador(){
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;
    let result = document.getElementById("resultado");
    result.textContent=num1*num2;
    let resultado1 = document.getElementById("fila"+num1+"column"+num2);
    let resultado2 = document.getElementById("fila"+num2+"column"+num1);
    resultado1.textContent = num1*num2;
    resultado2.textContent = num1*num2;
}

function borrarTabla(){
    //Reiniciar inputs
    document.getElementById("numeroTabla").value = "";
    document.getElementById("numero1").value="";
    document.getElementById("numero2").value="";

    //Reiniciar multiplicador
    document.getElementById("resultado").textContent="";
    //Reiniciar tabla
    let tablasMultiplicar = document.getElementById("tablasMultiplicar");
    tablasMultiplicar.innerHTML="";
    crearTabla();
}