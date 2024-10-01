const resetMenu = () => {
  //Resetear url, botones
  urlListPokemon = "https://pokeapi.co/api/v2/pokemon";
  let buttonPrevious = document.getElementById("previous");
  let buttonNext = document.getElementById("next");
  buttonNext.setAttribute("onclick", () => nextPage());
  buttonPrevious.setAttribute("onclick", () => previousPage());
};

//Buscador todos los pokemon
const menuAll = () => {
  resetMenu();
  const htmlText = `<div class="menu">
          <button onclick="showAllPokemon()" class="boton boton-principal">
            Generar cartas
          </button>  
        </div>`;
  let buscador = document.getElementById("buscador");
  buscador.innerHTML = htmlText;
};

//Buscador pokemon por tipo
const menuTypes = () => {
  resetMenu();
  const htmlText = ` <div class="menu">
    <button onclick="findTypes()" class="boton boton-principal">
            Listar tipos
          </button>
          <input type="text" id="type" placeholder="Introduce un tipo" />
          <button onclick="findTypes()" class="boton boton-secundario">
            Buscar Tipo
          </button>
        </div> `;
  let buscador = document.getElementById("buscador");
  buscador.innerHTML = htmlText;
};

//Buscador pokemon por nombre
const menuNamePokemon = () => {
  resetMenu();
  const htmlText = `<div class="menu">
          <input type="text" id="pokemon" placeholder="Introduce un pokemon" />
          <button onclick="showFilteredPokemon()" class="boton boton-secundario">
            Buscar Pokemon
          </button>
        </div>`;
  let buscador = document.getElementById("buscador");
  buscador.innerHTML = htmlText;
  urlListPokemon = "https://pokeapi.co/api/v2/pokemon";
};
