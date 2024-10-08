"usse strict";
let alumnos = [
  {
    codigo: "DAW-1-2020",
    nombre: "Pepe",
    ciudad: "Valencia",
    calificaciones: [
      { asignatura: "PRG", nota: 9 },
      { asignatura: "GBD", nota: 6 },
      { asignatura: "ING", nota: 4 },
      { asignatura: "FOL", nota: 3 },
    ],
    edad: 24,
  },
  {
    codigo: "DAW-2-2020",
    nombre: "Juan",
    ciudad: "Castellon",
    calificaciones: [
      { asignatura: "DWC", nota: 4 },
      { asignatura: "DWS", nota: 6 },
      { asignatura: "DAW", nota: 7 },
      { asignatura: "DIW", nota: 8 },
      { asignatura: "ING", nota: 9 },
      { asignatura: "EIE", nota: 2 },
    ],
    edad: 28,
  },
  {
    codigo: "DAW-1-2019",
    nombre: "Ana",
    ciudad: "Valencia",
    calificaciones: [
      { asignatura: "PRG", nota: 6 },
      { asignatura: "GBD", nota: 2 },
      { asignatura: "ING", nota: 6 },
      { asignatura: "FOL", nota: 2 },
    ],
    edad: 22,
  },
  {
    codigo: "DAW-2-2020",
    nombre: "Maria",
    ciudad: "Castellon",
    calificaciones: [
      { asignatura: "DWC", nota: 4 },
      { asignatura: "DWS", nota: 6 },
      { asignatura: "DAW", nota: 7 },
      { asignatura: "DIW", nota: 8 },
      { asignatura: "ING", nota: 4 },
      { asignatura: "EIE", nota: 1 },
    ],
    edad: 30,
  },
];

const notasAlumno = () => {
  const nombre = document.getElementById("nombreAlumno").value.toLowerCase();
  let existe = alumnos.find((a) => a.nombre.toLowerCase() == nombre);
  if (existe == null) {
    console.log("El alumno no existe");
  } else {
    let max = existe.calificaciones[0];
    let min = existe.calificaciones[0];
    let suma = 0;
    existe.calificaciones.forEach((calificacion) => {
      if (calificacion.nota > max.nota) {
        max = calificacion;
      }
      if (calificacion.nota < min.nota) {
        min = calificacion;
      }
      suma += calificacion.nota;
    });

    let media = suma / existe.calificaciones.length;
    console.log("Nota media: " + media);
    console.log(
      "Nota maxima: " + max.nota + " en la asignatura " + max.asignatura
    );
    console.log(
      "Nota minima: " + min.nota + " en la asignatura " + min.asignatura
    );
  }
  document.getElementById("nombreAlumno").value = "";
};

const subeUnPunto = () => {
  alumnos.forEach((alumno) => {
    alumno.calificaciones.forEach((asignatura) => {
      if (asignatura.nota < 10) {
        asignatura.nota += 1;
      }
    });
  });
  console.log(alumnos);
};

const alumnosCiudad = () => {
  const ciudad = document.getElementById("nombreCiudad").value.toLowerCase();
  let alumnosCiudad = alumnos.filter((a) => a.ciudad.toLowerCase() == ciudad);
  if (alumnosCiudad.length == 0) {
    console.log("No hay alumnos en esta ciudad");
  } else {
    console.log(alumnosCiudad);
  }
  document.getElementById("nombreCiudad").value = "";
};

const alumnosCurso = () => {
  const curso = +document.getElementById("numeroCurso").value;
  let alumnosCurso = alumnos.filter((a) => a.codigo.split("-")[1] == curso);
  if (alumnosCurso.length == 0) {
    console.log("No hay alumnos en este curso");
  } else {
    console.log(alumnosCurso);
  }
  document.getElementById("numeroCurso").value = "";
};

const ordenaEdad = () => {
  alumnos.sort((a, b) => a.edad - b.edad);
  console.log(alumnos);
};

const ordenaNombreAsc = () => {
  alumnos.sort(function (a, b) {
    if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
      return -1;
    }
    if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  console.log(alumnos);
};

const ordenaNombreDesc = () => {
  alumnos.sort(function (a, b) {
    if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
      return -1;
    }
    if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  console.log(alumnos);
};

const borraAlumno = () => {
  const nombre = document.getElementById("nombreAlumno").value.toLowerCase();
  let index = alumnos.findIndex(
    (alumno) => alumno.nombre.toLowerCase() == nombre
  );
  if (index == -1) {
    console.log("El alumno " + nombre + " no existe");
  } else {
    alumnos.splice(index, 1);
    console.log("Alumno eliminado");
    console.log(alumnos);
  }
  document.getElementById("nombreAlumno").value = "";
};

const nuevoAlumno = () => {
  const numero = +document.getElementById("nuevoCurso").value;
  const codigo = "DAW-" + numero + "-2020";
  const nombre = document.getElementById("nuevoNombre").value;
  const edad = document.getElementById("nuevaEdad").value;
  const ciudad = document.getElementById("nuevaCiudad").value;

  let nuevoAlumno = {
    codigo: codigo,
    nombre: nombre,
    ciudad: ciudad,
    calificaciones: [],
    edad: edad,
  };
  alumnos.push(nuevoAlumno);
  console.log(alumnos);

  document.getElementById("nuevoCurso").value = "";
  document.getElementById("nuevoNombre").value = "";
  document.getElementById("nuevaEdad").value = "";
  document.getElementById("nuevaCiudad").value = "";
};

const nuevaAsignatura = () => {
  const nombre = document.getElementById("buscarNombre").value.toLowerCase();
  let alumno = alumnos.find((a) => a.nombre.toLowerCase() == nombre);
  if(alumno == undefined){
    console.log("El alumno no existe");
  }else{
    const nuevaAsignatura = document.getElementById("nuevaAsignatura").value.toUpperCase();
    const nuevaNota = +document.getElementById("nuevaNota").value;
    let antiguaAsignatura = alumno.calificaciones.find(c=>c.asignatura == nuevaAsignatura);
    if(antiguaAsignatura == undefined){
      console.log("Creando la asignatura");
      alumno.calificaciones.push({'asignatura':nuevaAsignatura,'nota':nuevaNota})
    }else{
      console.log("Cambaindo la nota de la asignatura");
      antiguaAsignatura.nota = nuevaNota;
    }
  }
  console.log(alumno);
};
