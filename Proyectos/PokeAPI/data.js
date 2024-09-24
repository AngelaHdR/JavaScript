let types = [];
let pokemonList = [];
let pokemonObjList = []; //Lista de objetos pokemon con todas las caracteristicas
let pag = 0;
let listPokemon = ["https://pokeapi.co/api/v2/pokemon?offset=0&limit=30",
                    "https://pokeapi.co/api/v2/pokemon?offset=30&limit=30",
                    "https://pokeapi.co/api/v2/pokemon?offset=60&limit=30",
                    "https://pokeapi.co/api/v2/pokemon?offset=90&limit=30"];

//Cargar los nombres y enlaces de los pokemon y los nombres de los tipos
function loadAllData(){
    loadTypeData();
}

async function loadListPokemonData(pag){
    await fetch(listPokemon[pag])
    .then(res=>res.json())
    .then((data)=>{
        data.results.forEach(pokemon=>{
            pokemonList.push(pokemon);
        });
    })
    .catch(error=>{
        console.log("Error al cargar la lista de pokemon"+error);
    })
    await pokemonList.forEach(pokemon=>{
        let pokemonObj= loadOnePokemonData(pokemon.name,pokemon.url);
        pokemonObjList.push(pokemonObj);
    })
    console.log(pokemonObjList)
    await console.log(pokemonList)
    
    showButton();
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
    .catch(error=>{
        console.log("Error al cargar los tipos"+error);
    })
}

//Cargar los detalles de un pokemon segun su nombre y enlace
async function loadOnePokemonData(name,url){
    await fetch(url)
    .then(res=>res.json())
    .then((data)=>{
        let pokemonObj = new Pokemon(
            name,
            url,
            data.types,
            data.sprites.front_default,
            data.stats[0].base_stat,
            data.stats[1].base_stat,
            data.stats[2].base_stat
        );
        console.log("Pokemon: "+pokemonObj)
        return pokemonObj;
    })
    .catch(error=>{
        console.log("Error al cargar un pokemon"+error);
    })
    
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
