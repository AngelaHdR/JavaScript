//Pagina solo para cargar los datos de las diferentes url

/*Desestructuracion de objetos: 
const {propiedad} = data.json() --> recoje los datos que estan en el campo determinado
en una variable de su mismo nombre */

let pag = 0;
const urlType = "https://pokeapi.co/api/v2/type";
let urlListPokemon = "https://pokeapi.co/api/v2/pokemon";
let inicio = 0;
let urlNextPage = null;
let urlPreviousPage = null;

//Cargar los tipos de pokemon que existen
const loadTypeData = async () => {
  try {
    const data = await fetch(urlType+"?offset=0&limit=21");
    const { results } = await data.json();
    return results;
  } catch (error) {
    console.log("Error al cargar los tipos" + error);
  }
};

//Cargar nombre y url de un listado de pokemon
const loadBasicPokemonDataFromList = async () => {
  try {
    let _urlListPokemon = urlListPokemon+"?offset="+inicio+"&limit=20";
    const respuesta = await fetch(_urlListPokemon);
    const { results, count } = await respuesta.json();
    paginacion(count);
    return results;
  } catch (error) {
    console.log("Error al cargar la lista de pokemon" + error);
  }
};

//Pasar de pagina
const paginacion = (count) => {
  if(inicio+20<count){
    urlNextPage = inicio+20;
  }else{
    urlNextPage = null;
  }
  if(inicio-20>=0){
    urlPreviousPage = inicio-20;
  }else{
    urlPreviousPage = null;
  }
}

//Crear cartas para todos los pokemon
const loadAllPokemonDataFromList = async (pokemonList) => {
  let _pokemonList = [];
  for (const pokemon of pokemonList) {
    let pokemonObj = await loadOnePokemonData(pokemon.name, pokemon.url);
    _pokemonList.push(pokemonObj);
  }
  return sortPokedex(_pokemonList);
};

//Crear cartas para los pokemon solo de un tipo
const loadOneTypePokemonDataFromList = async (pokemonList, type) => {
  let _pokemonListType = [];
  for (const pokemon of pokemonList) {
    let pokemonObj = await loadOnePokemonData(pokemon.name, pokemon.url);
    for (const typeElem of pokemonObj.types) {
      if (typeElem.type.name == type) {
        _pokemonListType.push(pokemonObj);
      }
    }
  }
  //console.log(_pokemonListType);
  return sortPokedex(_pokemonListType);
};

//Cargar los detalles de un pokemon segun su nombre y enlace
const loadOnePokemonData = async (name, url) => {
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
};

const sortPokedex = (pokemonList) => {
  return pokemonList.sort((pokemon1, pokemon2) => pokemon1.id - pokemon2.id);
};
