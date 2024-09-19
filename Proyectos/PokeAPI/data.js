let types = [];
let pokemonList = [];
let pag = 0;
let listPokemon = ["https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",
                    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
                    "https://pokeapi.co/api/v2/pokemon?offset=40&limit=20",
                    "https://pokeapi.co/api/v2/pokemon?offset=60&limit=20"];

//Cargar los nombres y enlaces de los pokemon y los nombres de los tipos
function loadAllData(){
    loadListPokemonData(pag);
    loadTypeData();
    showButton();
}

async function loadListPokemonData(pag){
    pokemonList = [];
    await fetch(listPokemon[pag])
    .then(res=>res.json())
    .then((data)=>{
        data.results.forEach(pokemon=>pokemonList.push(pokemon));
        console.log(pokemonList)
    })
}

function loadTypeData(){
    let urlType = "https://pokeapi.co/api/v2/type?offset=0&limit=21";
    fetch(urlType)
    .then(res=>res.json())
    .then((data)=>{
        for(let type of data.results){
            types.push(type.name);
        }
    })
    console.log(types);
}

//Botones para cambiar de pagina, solo funcionan en la opcion de busqueda general
async function previousPage(){
    pag--;
    document.getElementById("landing").innerHTML="";
    await loadListPokemonData(pag);
    showAllPokemon();
    showButton();
}

async function nextPage(){
    pag++;
    document.getElementById("landing").innerHTML="";
    await loadListPokemonData(pag);
    showAllPokemon();
    showButton();
}

function showButton(){
    let buttonPrevious = document.getElementById("previous");
    let buttonNext = document.getElementById("next");
    //Quitar el boton de anterior en la primera pagina
    if(pag==0){
        buttonPrevious.style.display = "none";
    }else{
        buttonPrevious.style.display = "block";
    }
    //Quitar el boton de siguiente en la ultima pagina
    if(pag==listPokemon.length-1){
        buttonNext.style.display = "none";
    }else{
        buttonNext.style.display = "block";
    }
}