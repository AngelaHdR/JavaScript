//Mostrar todos los pokemon
async function showAllPokemon(){
    console.log("Show all pokemon");
    let containerOptions = document.getElementById("options");
    containerOptions.innerHTML = "";
    pokemonList=[];
    loadListPokemonData(pag);
    
    let landing = document.getElementById("landing");
    landing.innerHTML="";
    let title = document.createElement("h2");
    title.textContent='ALL POKEMON';
    landing.appendChild(title);
    
    let i=0;
    let num=0;
    pokemonList.forEach(pokemon=>{
        if(i%5==0 && i!=0){
            num++;
        }
        createRow(pokemon,num,"")
        i++;
    })
}

//Crear filas con todo tipo de pokemon
function createRow(pokemon,num,type){
    let row = document.getElementById("row"+num+type);
    if(row === undefined || row === null){
        //Añadir el nombre del tipo
        let title = document.createElement("h2");
        title.textContent = type;
        
        //Crear la fila
        row = document.createElement("div");
        row.setAttribute("id","row"+num+type);
        row.setAttribute("class","row type");
        row.appendChild(title);
        landing.appendChild(row);
    }
    let card = createCard(pokemon);
    row.appendChild(card);
}

//Genera la carta del pokemon dado
function createCard(pokemon){
    console.log(pokemon)
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
    console.log(pokemon.types)
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