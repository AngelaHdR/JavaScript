//Iniciar la web
function iniciarWeb(){
    consultarAPI(mostrarCotizaciones);
    cargarHTMLBasico();
    cargarTextos();
}



function cargarHTMLBasico(){
    document.getElementById("titulo").textContent = "Banco de cotizaciones";
    document.getElementById("logo").setAttribute('src','logo.jpg');
    document.getElementById("imgEspera").setAttribute('src','loading.gif');
}

async function consultarAPI(callback){
    await delay(3000);
    let promesaDollar = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    callback(await promesaDollar.json());
    
    let promesaEuro = await fetch('https://open.er-api.com/v6/latest/USD');
    let datosEuro = await promesaEuro.json();
    document.getElementById('euro').append(datosEuro.rates.EUR);

    let promesaLibra = await crearPedido('https://open.er-api.com/v6/latest/ARS');
    document.getElementById('libra').append(promesaLibra.rates.ARS);

    document.getElementById("imgEspera").style.visibility='hidden';
}
async function mostrarCotizaciones(datos){
    document.getElementById('dollar').append(datos.bpi.USD.rate);
}
async function crearPedido(url){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onload = function(){
            if(xhr.status==200){
                resolve(JSON.parse(xhr.responseText));
            }else{
                reject(xhr.statusText)
            }
        }
        xhr.send();
    })
}
function cargarTextos(){
    document.getElementById("dollar").append("Bitcoin a USD: ");
    document.getElementById("euro").append("Euro a USD: ");
    document.getElementById("libra").append("Libra a USD: ");
}

function delay(ms){
    return new Promise(function(res){
        setTimeout(res,ms);
    })
}