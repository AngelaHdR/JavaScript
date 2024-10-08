//Genera la carta del pokemon dado
const createCard = (pokemon) => {
  let card = document.createElement("div");
  card.className = "";

  let imageContainer = document.createElement("div");
  imageContainer.className = "flex flex--vertical flex--wrap imageContainer";

  let image = document.createElement("img");
  image.className = "pokemon";
  image.setAttribute("src", pokemon.image);
  image.setAttribute("alt", "image" + pokemon.name);
  image.addEventListener("click", () => createCardExpansion(pokemon));

  let typeContainer = document.createElement("div");
  typeContainer.className = "typeContainer";

  let experience = document.createElement("p");
  experience.textContent = pokemon.hp + " HP";
  typeContainer.appendChild(experience);

  for (slot of pokemon.types) {
    let _type = document.createElement("img");
    _type.setAttribute("src", "./images/" + slot.type.name + ".png");
    _type.setAttribute("alt", slot.type.name);
    _type.className = "type_img";
    typeContainer.appendChild(_type);
  }
  imageContainer.appendChild(typeContainer);
  imageContainer.appendChild(image);

  if (pokemon.types[0].type.name == "normal" && pokemon.types.length > 1) {
    card.className = "col card " + pokemon.types[1].type.name;
  } else {
    card.className = "col card " + pokemon.types[0].type.name;
  }

  let name = document.createElement("p");
  name.setAttribute("id", "pokemon" + pokemon.name);
  name.textContent = pokemon.name.toUpperCase();

  card.appendChild(imageContainer);
  card.appendChild(name);

  return card;
};

//Mostrar botones para todos los tipos o solo para el tipo buscado
const findTypes = async () => {
  let containerOptions = document.getElementById("options");
  containerOptions.innerHTML = "";

  let result = document.getElementById("type").value.toLowerCase();

  let data = await loadTypeData();
  data.forEach((typeElem) => {
    if (
      result == null ||
      (result != null && typeElem.name.startsWith(result))
    ) {
      let linked = document.createElement("button");
      linked.textContent = typeElem.name;
      linked.className = "boton boton-secundario";
      linked.addEventListener("click", () => showAllFromType(typeElem.name));
      containerOptions.appendChild(linked);
    }
  });
  document.getElementById("type").value = "";
};

const createCardExpansion = (pokemon) => {
  let modal = document.getElementById("modal");
  modal.classList.add("open");
  let cardExpansion = document.getElementById("cardExpansion");
  cardExpansion.innerHTML = "";

  let card = createCard(pokemon);

  let attackProgress = document.createElement("div");
  attackProgress.setAttribute("id", "attackProgress");

  let attackBar = document.createElement("div");
  attackBar.setAttribute("id", "attackBar");
  attackBar.textContent = "Attack";
  attackProgress.appendChild(attackBar);
  
  
  let defenseProgress = document.createElement("div");
  defenseProgress.setAttribute("id","defenseProgress");

  let defenseBar = document.createElement("div");
  defenseBar.setAttribute("id","defenseBar");
  defenseBar.textContent = "Defense";

  defenseProgress.appendChild(defenseBar);
  
  let abilities = document.createElement("ul");
  abilities.textContent = "Abilities: ";
  for (slot of pokemon.abilities) {
    let _ability = document.createElement("li");
    _ability.textContent = slot.ability.name;
    abilities.appendChild(_ability);
  }

  let closeButton = document.createElement("button");
  closeButton.setAttribute("id", "closeModal");
  closeButton.addEventListener("click", () => {
    modal.classList.remove("open");
  });
  closeButton.className = "typeContainer boton boton-principal";
  closeButton.textContent = "X";

  card.appendChild(attackProgress);
  card.appendChild(defenseProgress);
  card.appendChild(abilities);
  cardExpansion.appendChild(closeButton);
  cardExpansion.appendChild(card);
  
  
  moveProgressBar("attackBar",pokemon.attack);
  moveProgressBar("defenseBar",pokemon.defense);
  console.log("Carta expansion creada");
};


const moveProgressBar = (nameBar, value) => {
  var elem = document.getElementById(nameBar);
  elem.style.width = value + "%";
}
