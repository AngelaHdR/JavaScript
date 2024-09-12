let empleados = [];
function Empleado(legajo,nombre,apellido,fecha_nacimiento,cargo){
    this.legajo=legajo;
    this.nombre=nombre;
    this.apellido=apellido;
    this.fecha_nacimiento=fecha_nacimiento;
    this.cargo=cargo;
}
function agregar(){
    let legajo = document.getElementById("legajo").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fecha_nacimiento = document.getElementById("nacimiento").value;
    let cargo = document.getElementById("cargo").value;

    let empleado = new Empleado(legajo,nombre,apellido,fecha_nacimiento,cargo);

    empleados.push(empleado);
    alert("El empleado " + nombre + " ha sido agregado")
    limpiarCampos();
}
function mostrarTodos(){
    let mensaje ="";
    for(let empleado of empleados){
        for(let caract in empleado){
            mensaje += caract.toUpperCase() + ": "+empleado[caract] +" / ";
        }
        mensaje += "\n";
    }
    alert(mensaje)
}
function limpiarCampos(){
    document.getElementById("legajo").value="";
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("nacimiento").value="";
    document.getElementById("cargo").value="";
}