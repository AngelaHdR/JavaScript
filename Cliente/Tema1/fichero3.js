export function addAlumnos(alumnos){
    alumnos.forEach(alumno=>{
        let elemId = document.createElement("li");
        elemId.textContent = "Identificador: " + alumno.id;
        elemId.setAttribute("id","idAlumno");
        
        let elemNombre = document.createElement("li");
        elemNombre.textContent = "Nombre: " + alumno.nombre;
        elemNombre.setAttribute("id","nombreAlumno");
        
        let contenedorAlumno = document.getElementById("alumno");
        contenedorAlumno.appendChild(elemId);
        contenedorAlumno.appendChild(elemNombre);
    })
}