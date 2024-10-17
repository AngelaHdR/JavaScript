criterios = ["Sin ordenar", "Ascendente por precio", "Descendente por precio"];
let carrito = new Carrito("1244f");

function creaListaCriterios() {
  let select = document.getElementById("criteriosOrdenacion");

  criterios.forEach((element) => {
    let option = document.createElement("option");
    option.textContent = element;
    option.setAttribute("id", element.substring(0, 3));
    option.addEventListener("click", () =>
      pintaArticulos(element.substring(0, 3))
    );
    select.appendChild(option);
  });
}

function pintaArticulos(orden) {
  let contenedor = document.getElementById("contenedor");
  if (orden == "Asc") {
    console.log("Ascendente");
    listaArticulos.sort((a, b) => b.price - a.price);
    console.log(listaArticulos);
  } else if (orden == "Des") {
    console.log("Descendente");
    listaArticulos.sort((a, b) => a.price - b.price);
    console.log(listaArticulos);
  }
  listaArticulos.forEach((articulo) => {
    let card = `<div class="col">
		<div id="card-${articulo.codigo}" class="card">
			<img src="./assets/${articulo.codigo}.jpg" alt="card-img-top">
			<div class="card-body">
				<h5 class="card-title">${articulo.nombre}</h5>
				<p class="card-text">${articulo.descripcion}</p>
				<b>
					<p class="card-text text-center">${articulo.precio}</p>
				</b>
			</div>
			<button id="${articulo.codigo}" class="btn-compra btn-success">Comprar</button>
		</div>
	</div>`;
    contenedor.innerHTML += card;
  });
  let buttonsCompra = contenedor.getElementsByClassName("btn-compra");
  Array.from(buttonsCompra).forEach(btn=>{
	btn.addEventListener("click",()=>ponArticuloEnCarrito(btn.id))})
}

function ponArticuloEnCarrito(codigo) {
	if(carrito.articulos.find(art => art.codigo == codigo)==undefined){
		let articulo = listaArticulos.find(art=>art.codigo==codigo);
		let newArticulo = new Articulo(articulo.codigo,articulo.nombre,articulo.descripcion,articulo.precio,1,articulo.precio);
		carrito.anyadeArticulo(newArticulo);
		console.log(carrito.articulos);
	}else{
		let articulo=carrito.articulos.find(art => art.codigo == codigo)
		carrito.modificaUnidades(articulo.codigo,1);
		console.log(carrito.articulos);
	}
  console.log("Articulo Añadido");
}

function verCarro() {
  if (carrito.articulos.length == 0) {
    alert("El Carrito esta vacio");
  } else {
    let dialog = document.getElementById("miDialogo");
    dialog.showModal();
	  carrito.verCarrito();
  }
}

function efectuaPedido() {}

function cerrarCarrito() {
  let dialog = document.getElementById("miDialogo");
  dialog.close();
}

window.onload = () => {
  creaListaCriterios();
  
  let imgCarrito = document.getElementById("carritoImg");
  imgCarrito.addEventListener("click", verCarro);

  pintaArticulos("Sin");
  let idCarrito = document.getElementById("idPedido");
  idCarrito.textContent = carrito.id;
  let botonSeguir = document.getElementById("btnCierraDialog");
  let botonComprar = document.getElementById("btnEfectuaPedido");
  botonComprar.addEventListener("click", cerrarCarrito);
  botonSeguir.addEventListener("click", cerrarCarrito);
};
