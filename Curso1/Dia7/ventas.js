function crearParrafoTienda(textoLabel, valorMin){
    let elementoParrafo = document.createElement("p");
    let elementoEtiqueta = document.createElement("label");
    let elementoInput = document.createElement("input");

    elementoEtiqueta.setAttribute("for",textoLabel);
    elementoEtiqueta.innerText=textoLabel+": ";
    
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id",textoLabel);
    elementoInput.setAttribute("min",valorMin);
    elementoInput.setAttribute("value",0);

    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);
    return elementoParrafo;
}
function crearTiendas(contenedorID,min,cantidadTiendas){
    let elementoContenedor=document.getElementById(contenedorID);
    for(let conteoTiendas=1; conteoTiendas<=cantidadTiendas; conteoTiendas++){
        let textoEtiqueta = "Tienda "+conteoTiendas;
        let parrafoTienda = crearParrafoTienda(textoEtiqueta,min);
        
        elementoContenedor.appendChild(parrafoTienda);
    }
    
}
function extraerNumeroDesdeElemento(elemento){
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}
function calcular(){
    let ventas = [];
    let posicionVentas=0;
    let elementosVentas=document.getElementById("itemsTiendas");

    for(let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas]=valorVenta;
        posicionVentas++;
    }

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    cambiarColoresInput(elementosVentas,ventaMayor,ventaMenor);
    

    let mensajeSalida = "Total ventas: " +totalVentas;
    document.getElementById("parrafoSalida").textContent = mensajeSalida;
}   
function sumarTotal(array){
    let suma=0;
    for(let venta of array){
        suma+=venta;
    }
    return suma;
}
function calcularMayor(array){
    let maximo = array[0]
    for(let venta of array){
        if(venta>maximo){
            maximo=venta;
        }
    }
    return maximo;
}
function calcularMenor(array){
    let minimo = array[0]
    for(let venta of array){
        if(venta<minimo){
            minimo=venta;
        }
    }
    return minimo;
}
function cambiarColoresInput(elemento,ventaMayor,ventaMenor){
    for(let item of elemento.children){
        let elementoInput = item.children[1];
        elementoInput.className = "inputNormal";
        if(elementoInput.value == ventaMayor){
            elementoInput.className = "inputMayor";
        }
        if(elementoInput.value == ventaMenor){
            elementoInput.className = "inputMenor";
        }
    }
}