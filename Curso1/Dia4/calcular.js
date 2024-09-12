function mostrarResultado(result){
    document.getElementById("resultado").value = result;
}

function sumar(){
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;
    let result = num1 + num2;
    mostrarResultado(result);
}
function restar(){
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;
    let result = num1 - num2;
    mostrarResultado(result);
}
function multiplicar(){
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;
    let result = num1 * num2;
    mostrarResultado(result);
}
function dividir(){
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;
    let result = num1 / num2;
    mostrarResultado(result);
}
function potencia(){
    let num1 = +document.getElementById("numero1").value;
    let num2 = +document.getElementById("numero2").value;
    mostrarResultado(Math.pow(num1,num2));
}
function absoluto(){
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.abs(resultado));
}
function raiz(){
    let num = +document.getElementById("numero2").value;
    mostrarResultado(Math.sqrt(num));
}
function aleatorio(){
    let minimo = +document.getElementById("numero1").value;
    let maximo = +document.getElementById("numero2").value;
    maximo = maximo + 1;
    mostrarResultado(Math.floor(Math.random()*(maximo-minimo) + minimo));
}
function redondear(){
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.round(resultado));
}
function redondearBajo(){
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.floor(resultado));
}
function redondearAlto(){
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.ceil(resultado));
}