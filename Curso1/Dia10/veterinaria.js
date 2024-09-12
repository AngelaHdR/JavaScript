class Animal{
    constructor(nombre, peso, edad){
        this._nombre=nombre;
        this._peso=peso;
        this._edad=edad;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad=edad;
    }
    get peso(){
        return this._peso;
    }
    set peso(peso){
        this._peso=peso;
    }
    informacion(){
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años`;
    }
}
class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre,peso,edad);
        this._sexo=sexo;
    }
    get sexo(){
        return this._sexo;
    }
    set sexo(sexo){
        this._sexo=sexo;
    }
    informacion(){
        return `Gato - ${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.sexo}`;
    }
}
class Perro extends Animal{
    constructor(nombre, peso,edad, raza){
        super(nombre,peso,edad);
        this._raza=raza;
    }
    get raza(){
        return this._raza;
    }
    set raza(raza){
        this._raza=raza;
    }
    informacion(){
        return `Perro - ${this.nombre} - ${this.peso} kg - ${this.edad} años - ${this.raza}`;
    }

}
class Conejo extends Animal{
    constructor(nombre, peso,edad, color){
        super(nombre,peso,edad);
        this._color=color;
    }
    get color(){
        return this._color;
    }
    set color(color){
        this._color=color;
    }
    informacion(){
        return `Conejo - ${this.nombre} - ${this.peso} kg - ${this.edad} años - Color: ${this.color}`;
    }
}

let gato1 =new Gato("Ginny","4","3","macho");
let gato2 =new Gato("Sura","3","3","hembra");
let perro1 = new Perro("Bat","6","8","cazador");
let conejo1 = new Conejo("Pimpon","2","5","blanco");
let animales = [gato1,gato2,perro1,conejo1];

function mostrarAnimales(){
    let lista = document.getElementById("listaAnimales");
    for(let animal of animales){
        let item = document.createElement("li");
        item.textContent = animal.informacion();
        lista.appendChild(item);
    }
}
