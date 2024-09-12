
function recomendar(genero){
    let edad = document.getElementById("edad").value;
    let pelicula = document.getElementById("peliculaRecomendada"); 
    switch(genero){
        case "fantasia":
            if(edad<13){
                pelicula.textContent = "Encanto";
            }else{
                if(edad<16){
                    pelicula.textContent = "Harry Potter";
                }
                else{
                    pelicula.textContent =  "Memoria de Idhun";
                }
            }
            break;
        case "romance":
            if(edad<13){
                pelicula.textContent =  "Cenicienta";
            }else{
                if(edad<16){
                    pelicula.textContent =  "Buenos dias princesa";
                }
                else{
                    pelicula.textContent =  "Crepusculo";
                }
            }
            break;
        case "accion":
            if(edad<13){
                pelicula.textContent =  "Spiderman";
            }else{
                if(edad<16){
                    pelicula.textContent =  "Los vengadores";
                }
                else{
                    pelicula.textContent =  "Fast and Furious";
                }
            }
            break;
        case "infantil":
            if(edad<13){
                pelicula.textContent =  "Frozen";
            }else{
                if(edad<16){
                    pelicula.textContent =  "Mulan";
                }
                else{
                    pelicula.textContent =  "Inside out";
                }
            }
            break;
    }
}