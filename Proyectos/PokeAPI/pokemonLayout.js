//Genera la carta del pokemon dado
function createCard(pokemon) {
  let card = document.createElement("div");
  card.className = "";

  let image = document.createElement("img");
  image.setAttribute("src", pokemon.image);
  image.setAttribute("alt", "image" + pokemon.name);

  let name = document.createElement("p");
  name.setAttribute("id", "pokemon" + pokemon.name);
  name.textContent = pokemon.name.toUpperCase();

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
  if (pokemon.types[0].type.name == "normal" && pokemon.types.length > 1) {
    card.className = "col card " + pokemon.types[1].type.name;
  } else {
    card.className = "col card " + pokemon.types[0].type.name;
  }

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(type);
  card.appendChild(experience);
  card.appendChild(attack);
  card.appendChild(defense);
  return card;
}

//Mostrar botones para todos los tipos o solo para el tipo buscado
const findTypes = async () => {
  let containerOptions = document.getElementById("options");
  containerOptions.innerHTML = "";
  
  let result = document.getElementById("type").value.toLowerCase();
  
  let data = await loadTypeData();
  data.forEach((typeElem) => {
    if(result==null || (result!=null && typeElem.name.startsWith(result))){
      let linked = document.createElement("button");
      linked.textContent = typeElem.name;
      linked.className = "boton boton-secundario";
      linked.addEventListener("click", () => showAllFromType(typeElem.name));
      containerOptions.appendChild(linked);
    }
  });
  document.getElementById("type").value = "";
};