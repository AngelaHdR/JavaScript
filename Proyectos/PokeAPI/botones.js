//Botones para cambiar de pagina, solo funcionan en la opcion de busqueda general
const previousPage = (filter) => {
  urlListPokemon = urlPreviousPage;
  document.getElementById("pokedex").innerHTML = "";
  if (filter == "") {
    showAllPokemon();
  } else {
    showAllFromType(filter);
  }
};

const nextPage = (filter) => {
  urlListPokemon = urlNextPage;
  document.getElementById("pokedex").innerHTML = "";
  if (filter == "") {
    showAllPokemon();
  } else {
    showAllFromType(filter);
  }
};

const showButton = (filter) => {
  let buttonPrevious = document.getElementById("previous");
  let buttonNext = document.getElementById("next");
  
  buttonNext.addEventListener("click", ()=>nextPage(filter));
  buttonPrevious.setAttribute("click", ()=>previousPage(filter));
  //Quitar el boton de anterior en la primera pagina
  if (urlPreviousPage == null) {
    buttonPrevious.style.display = "none";
  } else {
    buttonPrevious.style.display = "block";
  }
  //Quitar el boton de siguiente en la ultima pagina
  if (urlNextPage == null) {
    buttonNext.style.display = "none";
  } else {
    buttonNext.style.display = "block";
  }
};
