//Crear registro
async function crearRegistro(nombre,telefono){
    try{
        let respuesta = await fetch(agenda.json,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                nombre: nombre,
                telefono: telefono,
            })
        })
        //Respuesta no exitosa
        if(!respuesta.ok){
            throw new Error("Error en la solicitud: " + respuesta.statusText);
        }

        let data = await respuesta.json();
        console.log("Registro creado: " + data);

    }catch(error){
        console.log("Algo salio mal al crear el registro: "+error)
    }
}

crearRegistro("isa",192837463);

//Buscar datos
let usuario="Angela";
let password="javaScript";
let token="miToken";
fetch(agenda.json,{
    method: "GET",
    credentials: "include",
    cache: "only-if-cached",
    redirect:"manual",
    headers:{
        //"Authorization": "Basic"+btoa(usuario+":"+password),
        //"Authorization": "Bearer" + token,
        "Content-Type":"application/json"
    }
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error("Error: " + error))

//Actualizar todo
fetch(agenda.json[1],{
    method: "PUT",
    headers: {
        "Content-Type": "application/json",

    },
    body: JSON.stringify({
        nombre: "Nuevo titulo",
        telefono: "Nuevo telefono"
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error("Error: " + error))

//Borrar registro
fetch(agenda.json[1],{
    method: "DELETE"
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error("Error: " + error))

//Actualizar parcialmente
fetch(agenda.json[1],{
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",

    },
    body: JSON.stringify({
        telefono: "Nuevo telefono"
    })
})
.then(respuesta => {
    if(respuesta.type==="opaqueredirect"){
        let nuevaUbicacion = respuesta.headers.get("Location");
        console.log("Redirigiendo a : "+nuevaUbicacion);
    }else{
        return  respuesta.json();
    }
})
.then(data => console.log(data))
.catch(error => console.error("Error: " + error))

//Axios
axios.get("https://jsonplaceholder.typicode/posts")
.then(respuesta => console.log(respuesta.data))
.catch(error=>console.log(error))