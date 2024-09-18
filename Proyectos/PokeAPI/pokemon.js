function loadGeneralData(){
    //let urlLista = "listaPokemon.json";
    let urlLista = "https://pokeapi.co/api/v2/pokemon";
    fetch(urlLista)
    .then(res=>res.json())
    .then((data)=>{
        let i=0;
        let num=-1;
        for(pokemon of data.results){
            if(i%6==0){
                num++;
            }
            loadPokemonData(pokemon.name,pokemon.url,num);
            i++;
        }
    })
}

function loadPokemonData(name,url,num){
    fetch(url)
    .then(res=>res.json())
    .then((data)=>{
        pokemon={
                "name":name,
                "types":data.types,
                "image":data.sprites.front_default,
                "hp":data.stats[0].base_stat,
                "attack":data.stats[1].base_stat,
                "defense":data.stats[2].base_stat
            }
        //createRow(pokemon, num);
        filterByType(pokemon);
        }
    )
    
}

function filterByType(pokemon){
    let rowType = document.getElementById("row"+pokemon.types[0].type.name);
    if(rowType === null){
        //Crear la fila para ese tipo
        rowType = document.createElement("div");
        rowType.setAttribute("id","row"+pokemon.types[0].type.name);
        rowType.setAttribute("class","row type");

        //Añadir el nombre del tipo
        let title = document.createElement("h2");
        title.textContent=pokemon.types[0].type.name;
        rowType.appendChild(title);
        landing.appendChild(rowType);
    }
    let card = createCard(pokemon);
    rowType.appendChild(card);
}

function createRow(pokemon,num){
    let landing = document.getElementById("landing");
    let row = document.getElementById("row"+num);
    if(row ===undefined || row===null){
        row = document.createElement("div");
        row.setAttribute("id","row"+num);
        row.setAttribute("class","row type");
        landing.appendChild(row);
    }
    let card = createCard(pokemon);
    row.appendChild(card);
    
}

function createCard(pokemon){
    let card = document.createElement("div");
    card.setAttribute("class","col card");

    let image = document.createElement("img");
    image.setAttribute("src",pokemon.image);
    image.setAttribute("alt","image"+pokemon.name);
    
    let name = document.createElement("p");
    name.setAttribute("id","pokemon"+pokemon.name);
    name.textContent = pokemon.name;

    let type = document.createElement("ul");
    type.textContent = "Tipo: ";
    for(slot of pokemon.types){
        let type2 = document.createElement("li");
        type2.textContent = slot.type.name;
        type.appendChild(type2)
    }

    let experience = document.createElement("p");
    experience.textContent="Puntos hp: "+ pokemon.hp;

    let attack = document.createElement("p");
    attack.textContent="Ataque: "+ pokemon.attack;

    let defense = document.createElement("p");
    defense.textContent="Defensa: "+ pokemon.defense;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(type);
    card.appendChild(experience);
    card.appendChild(attack);
    card.appendChild(defense);
    return card;
}
