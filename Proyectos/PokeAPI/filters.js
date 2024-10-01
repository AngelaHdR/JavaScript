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

  showButton("");
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

  i = 0;
  do {
    const pokemonList = await loadBasicPokemonDataFromList();
    const pokemonListFullData = await loadOneTypePokemonDataFromList(
      pokemonList,
      type
    );

    pokemonListFullData.forEach((pokemon) => {
      let card = createCard(pokemon);
      pokedex.appendChild(card);
      i++;
    });
    urlListPokemon = urlNextPage;
  } while (urlNextPage != null && i < 20);
  showButton(type);
};

//Mostrar los pokemon que empiecen por una cadena
const showFilteredPokemon = async () => {
  let pokedex = document.getElementById("pokedex");
  pokedex.innerHTML = "";

  let result = document.getElementById("pokemon").value.toLowerCase();
  i = 0;
  do {
    const data = await loadBasicPokemonDataFromList();

    data.forEach(async (pokemon) => {
      if (pokemon.name.startsWith(result)) {
        const pokemonObj = await loadOnePokemonData(pokemon.name, pokemon.url);
        const card = createCard(pokemonObj);
        pokedex.appendChild(card);
        i++;
      }
    });
    urlListPokemon = urlNextPage;
  } while (urlNextPage != null && i < 14);
  document.getElementById("pokemon").value = "";
};

