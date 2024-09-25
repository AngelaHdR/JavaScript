//Pagina solo para cargar los datos de las diferentes url

/*Desestructuracion de objetos: 
const {propiedad} = data.json() --> recoje los datos que estan en el campo determinado
en una variable de su mismo nombre */

let pag = 0;
const urlListPokemon = [
  "https://pokeapi.co/api/v2/pokemon?offset=0&limit=30",
  "https://pokeapi.co/api/v2/pokemon?offset=30&limit=30",
  "https://pokeapi.co/api/v2/pokemon?offset=60&limit=30",
  "https://pokeapi.co/api/v2/pokemon?offset=90&limit=30",
];
const urlType = "https://pokeapi.co/api/v2/type?offset=0&limit=21";

const loadTypeData = async () => {
  try {
    const data = await fetch(urlType);
    const { results } = await data.json();
    return results;
  } catch (error) {
    console.log("Error al cargar los tipos" + error);
  }
};

const loadListPokemonData = async (pag) => {
  try {
    const respuesta = await fetch(urlListPokemon[pag]);
    const { results } = await respuesta.json();
    return results;
  } catch (error) {
    console.log("Error al cargar la lista de pokemon" + error);
  }
};

const loadpokemonDataFromList = async (pokemonList) => {
  let _pokemonList = [];
  await pokemonList.forEach(async (pokemon) => {
    const pokemonData = await loadOnePokemonData(pokemon.name, pokemon.url);
    _pokemonList.push(pokemonData);
  });
  return sortPokedex(_pokemonList);
};

//Cargar los detalles de un pokemon segun su nombre y enlace
async function loadOnePokemonData(name, url) {
  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    const { id, types, sprites, stats } = data;
    const pokemonObj = new Pokemon(
      name,
      url,
      id,
      types,
      sprites.front_default,
      stats[0].base_stat,
      stats[1].base_stat,
      stats[2].base_stat
    );

    return pokemonObj;
  } catch (error) {
    console.log("Error al cargar un pokemon" + error);
  }
}

const sortPokedex = (pokemonList) => {
  return pokemonList.sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id);
};

//Botones para cambiar de pagina, solo funcionan en la opcion de busqueda general
function previousPage() {
  pag--;
  document.getElementById("landing").innerHTML = "";
  showAllPokemon();
  showButton();
}

function nextPage() {
  pag++;
  document.getElementById("landing").innerHTML = "";
  showAllPokemon();
  showButton();
}

function showButton() {
  let buttonPrevious = document.getElementById("previous");
  let buttonNext = document.getElementById("next");
  //Quitar el boton de anterior en la primera pagina
  if (pag == 0) {
    buttonPrevious.style.display = "none";
  } else {
    buttonPrevious.style.display = "block";
  }
  //Quitar el boton de siguiente en la ultima pagina
  if (pag == urlListPokemon.length - 1) {
    buttonNext.style.display = "none";
  } else {
    buttonNext.style.display = "block";
  }
}