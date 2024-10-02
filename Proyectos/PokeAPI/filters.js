//Mostrar todos los pokemon
const showAllPokemon = async () => {
  const pokemonList = await loadBasicPokemonDataFromList();
  const pokemonListFullData = await loadAllPokemonDataFromList(pokemonList);

  let containerOptions = document.getElementById("options");
  containerOptions.innerHTML = "";

  let pokedex = document.getElementById("pokedex");
  pokedex.innerHTML = "";

  let title = document.getElementById("title-type");
  title.textContent = "ALL POKEMON";

  pokemonListFullData.forEach((pokemon) => {
    let card = createCard(pokemon);
    pokedex.appendChild(card);
  });

  selectPaginacion("all");
};

//Mostrar los pokemon solo de un tipo
const showAllFromType = async (type) => {
  let containerOptions = document.getElementById("options");
  containerOptions.innerHTML = "";
  console.log("Buscar por tipo");

  let pokedex = document.getElementById("pokedex");
  pokedex.innerHTML = "";
  let title = document.getElementById("title-type");
  title.textContent = type.toUpperCase();
  let pokemonListFullData = "";
  do {
    const pokemonList = await loadBasicPokemonDataFromList();
    pokemonListFullData = await loadOneTypePokemonDataFromList(
      pokemonList,
      type
    );
    console.log(pokemonListFullData)
    inicio = urlNextPage;
  } while (pokemonListFullData.length == 0);

  pokemonListFullData.forEach((pokemon) => {
    let card = createCard(pokemon);
    pokedex.appendChild(card);
  });
  selectPaginacion(type);
};

//Mostrar los pokemon que empiecen por una cadena
const showFilteredPokemon = async () => {
  let pokedex = document.getElementById("pokedex");
  pokedex.innerHTML = "";

  let result = document.getElementById("pokemon").value.toLowerCase();
  let data = "";
  let pokemonNameList = [];
  do {
    data = await loadBasicPokemonDataFromList();

    data.forEach(async (pokemon) => {
      if (pokemon.name.startsWith(result)) {
        const pokemonObj = await loadOnePokemonData(pokemon.name, pokemon.url);
        pokemonNameList.push(pokemonObj)
      }
    });
    inicio = urlNextPage;
  } while ( pokemonNameList.length == 0 );

  pokemonNameList.forEach((pokemon) => {
    let card = createCard(pokemon);
    pokedex.appendChild(card);
  });
  selectPaginacion();
  //document.getElementById("pokemon").value = "";
};
