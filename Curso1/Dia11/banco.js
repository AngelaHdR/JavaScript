function leerJson(archivoJson){
    let datosJson;
    fetch(archivoJson)
    .then(res=>res.json())
    .then((salida)=>{
        datosJson=salida;
        document.getElementById("banco").textContent = datosJson.banco;
        document.getElementById("sucursal").textContent = datosJson.sucursal;
        document.getElementById("titular").textContent = "Titular: " + datosJson.titular;
        document.getElementById("nro_cuenta").textContent = "Numero cuenta: " + datosJson.nro_cuenta;
        let saldo = document.getElementById("saldo");
        saldo.textContent = "Saldo: ";
        saldo.appendChild(document.createElement("br"));
        for(let element of datosJson.saldo){
            let importe = document.createElement("span");
            importe.textContent = element.moneda + " : " +element.monto;
            
            saldo.appendChild(importe);
            saldo.appendChild(document.createElement("br"));
        }
        let cbu = document.getElementById("cbu");
        cbu.textContent = "CBU: "+datosJson.cbu;
        let abierto = document.getElementById("abierto");
        abierto.textContent = "Fecha abertura: "+datosJson.abierto;
    }).catch(function(error){
        alert(error)
    });
}

let elementoInput = document.querySelectorAll("[input]");
elementoInput.map(res=>res.value);