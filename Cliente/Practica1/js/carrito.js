class Carrito {
  id = 0;
  articulos = [];
  constructor(id) {
    this.id = id;
  }

  anyadeArticulo(articulo) {
    this.articulos.push(articulo);
  }

  borraArticulo(codigo) {
    let i = this.articulos.findIndex((product) => product.codigo == codigo);
    this.articulos.splice(i, 1);
  }

  modificaUnidades(codigo, n) {
    let articulo = this.articulos.find((product) => product.codigo == codigo);
    articulo.unidades += n;
	articulo.precioTotal = articulo.precio * articulo.unidades;
  }

  verCarrito(){
	let contenedorTabla = document.getElementById("dialogContent");
	let tabla = `
	`;
  }
}
