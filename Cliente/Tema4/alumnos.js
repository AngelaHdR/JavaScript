const alumnos = ["ana", "juan", "maria", "pepe", "luis", "angela", "sole"];

const mostrarAlumnos = () => {
  let listaAlumnos = document.getElementById("listaAlumnos");
  let texto = "";
  alumnos.forEach((alumno) => {
    texto += `<h3 class="border">${alumno}</h3>`;
  });
  listaAlumnos.innerHTML = texto;
};

const buscarAlumno = () => {
  const alumno = window.prompt("Introduce un alumno");
  const buscado = alumnos.filter((a) => a.startsWith(alumno));
  if (buscado.length == 0) {
    alert("El alumno no existe");
  } else {
    alert("Alumno buscado: " + buscado);
  }
};

const addAlumno = () => {
  const alumno = window.prompt("Introduce un alumno");
  const buscado = alumnos.filter((a) => a == alumno);
  if (buscado.length == 1) {
    alert("Este alumno ya existe");
  } else {
    alumnos.push(alumno);
    mostrarAlumnos();
  }
};

const borrarAlumno = () => {
  const alumno = window.prompt("Introduce un alumno");
  const buscado = alumnos.filter((a) => a == alumno);

  if (buscado.length == 1) {
    const i = alumnos.findIndex((b) => b == buscado);
    alumnos.splice(i, 1);
    alert("Alumno " + buscado + " eliminado");
  } else {
    alert("Este alumno no existe");
  }
};
