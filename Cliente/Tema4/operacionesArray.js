let miArray = [1, 4, 1, 4, 8, 9, 1, 8, 5];

const eliminarDuplicados = () => {
  let unicos = miArray.filter(
    (num, i) => miArray.findIndex((b) => b == num) == i
  );
  return unicos;
};

const modificarNumeros = () => {
  let numerosCuadrados = eliminarDuplicados().map((num) => {
    return num ** 2;
  });
  return numerosCuadrados;
};

const sumaNumeros = () => {
  const initial = 0;
  const suma = modificarNumeros().reduce(
    (accum, value) => accum + value,
    initial
  );
  console.log(suma);
  document.getElementById("resultadoSuma").textContent = suma;
};

const ordenarNum = () => {
  miArray.sort((a, b) => a - b);
  console.log(miArray);
};
