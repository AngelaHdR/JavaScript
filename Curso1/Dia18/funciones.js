let nombre="Angela";
function cambiarNombre(nuevo){
    nombre=nuevo;
}
function enviarMensaje(){
    alert(nombre+" te ha enviado un mensaje")
}
export default{cambiarNombre,enviarMensaje}