const leerFechas=()=>{
    let f1 = document.getElementById("fecha1").value;
    let f2 = document.getElementById("fecha2").value;
    compararFechas(f1,f2);
}

const compararFechas = (f1,f2) =>{
    let fechaMayor = document.getElementById("fechaMayor");
    let fechaMenor = document.getElementById("fechaMenor");
    const num1 = Number(f1.split("/").reverse().join(""));
    const num2 = Number(f2.split("/").reverse().join(""));
    if(num1>num2){
        fechaMayor.textContent = f1;
        fechaMenor.textContent = f2;
    }else if(num2>num1){
        fechaMayor.textContent = f2;
        fechaMenor.textContent = f1;
    }else{
        fechaMayor.textContent = "Las dos fechas son iguales";
    }
}
