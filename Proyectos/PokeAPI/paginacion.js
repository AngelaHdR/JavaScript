let type = "";

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

//Pasar pagina en la vista general
const previousPageAll = () => {
  inicio = urlPreviousPage;
  document.getElementById("pokedex").innerHTML = "";
  showAllPokemon();
};

const nextPageAll = () => {
  inicio = urlNextPage;
  document.getElementById("pokedex").innerHTML = "";
  showAllPokemon();
};

//Pasar pagina con el filtro de tipos
const previousPageTypes = () => {
  inicio = urlPreviousPage;
  document.getElementById("pokedex").innerHTML = "";
  showAllFromType(type);
};

const nextPageTypes = () => {
  inicio = urlNextPage;
  document.getElementById("pokedex").innerHTML = "";
  showAllFromType(type);
};

const showButton = (nombre) => {
  let buttonPrevious = document.getElementById("previous-" + nombre);
  let buttonNext = document.getElementById("next-" + nombre);

  //Quitar el boton de anterior en la primera pagina
  if (urlPreviousPage == null) {
    buttonPrevious.style.display = "none";
  } else {
    buttonPrevious.style.display = "flex";
  }
  //Quitar el boton de siguiente en la ultima pagina
  if (urlNextPage == null) {
    buttonNext.style.display = "none";
  } else {
    buttonNext.style.display = "flex";
  }
};

const selectPaginacion = (_type) => {
  let paginacionTipos = document.getElementById("paginacion-types");
  let paginacionTodos = document.getElementById("paginacion-all");

  if (_type == "all") {
    paginacionTodos.style.display = "flex";
    paginacionTipos.style.display = "none";
    showButton("all");
  } else {
    paginacionTodos.style.display = "none";
    paginacionTipos.style.display = "flex";
    type = _type;
    showButton("types");
  }
};
