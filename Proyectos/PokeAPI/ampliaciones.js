//Mostrar los pokemon separados por tipo 
function allFilteredByType(pokemon, num, type) {
    let rowType = document.getElementById("row" + num + pokemon.types[0].type.name);
    if (rowType === null) {
        //Crear la fila para ese tipo
        rowType = document.createElement("div");
        rowType.setAttribute("id", "row" + pokemon.types[0].type.name);
        rowType.setAttribute("class", "row type");

        //Añadir el nombre del tipo
        let title = document.createElement("h2");
        title.textContent = pokemon.types[0].type.name;
        rowType.appendChild(title);
        landing.appendChild(rowType);
    }
    let card = createCard(pokemon);
    rowType.appendChild(card);
}
