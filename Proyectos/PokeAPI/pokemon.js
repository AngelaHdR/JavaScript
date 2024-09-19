//Mostrar todos los pokemon
function showAllPokemon(){
    console.log("Show all pokemon");
    //Añadir el nombre del tipo
    let landing = document.getElementById("landing");
    let title = document.createElement("h2");
    title.textContent="ALL POKEMON";
    landing.appendChild(title);

    let i=0;
    let num=-1;
    for(let pokemon of pokemonList){
        //Para crear filas de 5 cartas
        if(i%5==0){
            num++;
        }
        loadOnePokemonData(pokemon.name,pokemon.url,num);
        i++
    }
}

//Cargar los detalles de un pokemon segun su nombre y enlace
function loadOnePokemonData(name,url,num){
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
        createRow(pokemon,num);
    })
}

//Crear filas con todo tipo de pokemon
function createRow(pokemon,num){
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

//Genera la carta del pokemon dado
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



//Mostrar los pokemon separados por tipo
function allFilteredByType(pokemon,num,type){
    let rowType = document.getElementById("row"+num+pokemon.types[0].type.name);
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

//Input para mostrar los pokemon solo de un tipo
function findTypes(){
    let containerOptions = document.getElementById("options");
    containerOptions.innerHTML = "";
    let data = document.getElementById("type").value.toLowerCase();
    console.log(data);
    for(let type of types){
        if(type.startsWith(data)){
            let linked = document.createElement("button");
            linked.textContent=type;
            linked.addEventListener("click",()=>showAllFromType(type));
            containerOptions.appendChild(linked);
        }
    }
}

//Crar filas con los pokemon solo de un tipo
function showAllFromType(types){
    let landing = document.getElementById("landing");
    landing.innerHTML="";
    let title = document.createElement("h2");
    title.textContent=types.toUpperCase();
    landing.appendChild(title);

    console.log("Buscar por tipo")
    let i=0;
    let num=-1;
    for(let pokemon of pokemonList){
        fetch(pokemon.url)
        .then(res=>res.json())
        .then((data)=>{
            let typeElem = data.types;
            for(let elem of typeElem){
                console.log(elem.type.name==types)
                if(elem.type.name===types){
                    pokemon={
                        "name":pokemon.name,
                        "types":data.types,
                        "image":data.sprites.front_default,
                        "hp":data.stats[0].base_stat,
                        "attack":data.stats[1].base_stat,
                        "defense":data.stats[2].base_stat
                    }
                    //Para crear filas de 5 cartas
                    if(i%5==0){
                        num++;
                    }
                    createRow(pokemon,num);
                    i++
                }
            }
            
        })
    }
}