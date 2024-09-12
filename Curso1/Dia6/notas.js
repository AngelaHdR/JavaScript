let notas = [5,8,7,10,9];
function listarNotas(){
    let lista = document.getElementById("listaCalificaciones");
    for(let nota of notas){
        let itemLista = document.createElement("li");
        itemLista.innerText= nota;
        lista.appendChild(itemLista);
    }
}
function mostrarLista(){
    let lista = document.getElementById("listaCalificaciones");
    lista.style.display = "block";
}
function ocultarLista(){
    let lista = document.getElementById("listaCalificaciones");
    lista.style.display = "none";
}
function calcularPromedio(){
    let suma=0;
    let elementoPromedio = document.getElementById("notaPromedio");
    for(let nota of notas){
        suma+=nota;
    }
    elementoPromedio.textContent = suma/5;
}
function notaMasAlta(){
    let notaAlta=0;
    contador = 0;
    let elementoNotaAlta = document.getElementById("notaAlta");
    while(contador<notas.length){
        let nota = notas[contador];
        contador++;
        if(nota>notaAlta){
            notaAlta=nota;
        }else{
            continue;
        }
    }
    elementoNotaAlta.textContent=notaAlta;
}
function hayAplazos(){
    contador=0;
    let aplazo = "NO";
    let elementoAplazos = document.getElementById("aplazos")
    do{
        let nota=notas[contador];
        if(nota<4){
            aplazo="SI";
            break;
        }
        contador++;
    }while(contador<notas.length-1);   
    elementoAplazos.textContent = aplazo;
}    