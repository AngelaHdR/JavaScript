//Mostrar botones para todos los tipos
function showTypes() {
    let containerOptions = document.getElementById("options");
    containerOptions.innerHTML = "";

    i=0;
    types.forEach(typeElem=>{
        if(i%7==0){
            containerOptions.appendChild(document.createElement("br"));
        }
        let linked = document.createElement("button");
        linked.textContent = typeElem;
        linked.addEventListener("click", () => showAllFromType(typeElem));
        containerOptions.appendChild(linked);
        i++;
    })
}

//Input para buscar un tipo
function findTypes() {
    let containerOptions = document.getElementById("options");
    containerOptions.innerHTML = "";
    let data = document.getElementById("type").value.toLowerCase();
    console.log(data);
    i=0;
    types.forEach(typeElem=>{
        if(i%7==0 && i!=0){
            containerOptions.appendChild(document.createElement("br"));
        }
        if (typeElem.startsWith(data)) {
            let linked = document.createElement("button");
            linked.textContent = typeElem;
            linked.addEventListener("click", () => showAllFromType(typeElem));
            containerOptions.appendChild(linked);
            i++;
        }
    })
}

//Crear filas con los pokemon solo de un tipo
function showAllFromType(type) {
    let containerOptions = document.getElementById("options");
    containerOptions.innerHTML = "";
    console.log("Buscar por tipo")

    let landing = document.getElementById("landing");
    landing.innerHTML = "";
    let title = document.createElement("h2");
    title.textContent = type.toUpperCase();
    landing.appendChild(title);

    //Cargar todos los pokemon
    pokemonList=[];
    for(let i=0;i<listPokemon.length;i++){
        loadListPokemonData(i);
    }
    
    //Filtrar por el tipo
    let pokemonListType =[];
    pokemonListType = pokemonList.filter(pokemon => {
        return pokemon.types[1].type.name == type;
    });

    let i = 0;
    let num = 0;
    pokemonListType.forEach(pokemon => {
        if (i % 5 == 0 && i!=0) {
            num++;
        }
        createRow(pokemon, num, type)
        i++;
    })

    console.log(pokemonListType);

}
