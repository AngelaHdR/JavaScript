//Mostrar todos los pokemon
const showAllPokemon = async () => {
  const pokemonList = await loadListPokemonData(pag);
  const pokemonListFullData = await loadpokemonDataFromList(pokemonList);

  console.log("Show all pokemon: " + pokemonListFullData);
  let containerOptions = document.getElementById("options");
  containerOptions.innerHTML = "";

  let landing = document.getElementById("landing");
  landing.innerHTML = "";

  let title = document.createElement("h2");
  title.textContent = "ALL POKEMON";

  landing.appendChild(title);

  let i = 0;
  let num = 0;

  setTimeout(async function () {
    await pokemonListFullData.forEach((pokemon) => {
      if (i % 5 == 0 && i != 0) {
        num++;
      }

      createRow(pokemon, num, "");
      i++;
    });
  }, 1000);

  showButton();
};

//Crear filas con todo tipo de pokemon
async function createRow(pokemon, num, type) {
  let row = document.getElementById("row" + num + type);

  if (row === undefined || row === null) {
    //Añadir el nombre del tipo
    let title = document.createElement("h2");
    title.textContent = type;

    //Crear la fila
    row = document.createElement("div");
    row.setAttribute("id", "row" + num + type);
    row.setAttribute("class", "row type");
    row.appendChild(title);
    landing.appendChild(row);
  }
  console.log("Row " + num);
  let card = await createCard(pokemon);
  row.appendChild(card);
  return row;
}

//Genera la carta del pokemon dado
function createCard(pokemon) {
  let card = document.createElement("div");
  card.setAttribute("class", "col card");

  let image = document.createElement("img");
  image.setAttribute("src", pokemon.image);
  image.setAttribute("alt", "image" + pokemon.name);

  let name = document.createElement("p");
  name.setAttribute("id", "pokemon" + pokemon.name);
  name.textContent = pokemon.name;

  let type = document.createElement("ul");
  type.textContent = "Tipo: ";
  for (slot of pokemon.types) {
    let type2 = document.createElement("li");
    type2.textContent = slot.type.name;
    type.appendChild(type2);
  }

  let experience = document.createElement("p");
  experience.textContent = "Puntos hp: " + pokemon.hp;

  let attack = document.createElement("p");
  attack.textContent = "Ataque: " + pokemon.attack;

  let defense = document.createElement("p");
  defense.textContent = "Defensa: " + pokemon.defense;

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(type);
  card.appendChild(experience);
  card.appendChild(attack);
  card.appendChild(defense);
  return card;
}
