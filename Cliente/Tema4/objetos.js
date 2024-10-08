let obj1 = {
    "nombre": "angela",
    "id": 4,
    "ciudad":"valencia",
    "cp":43421
}
let obj2 = {
    "nombre": "angela",
    "ciudad":"valencia",
    "cp":43421,
    "id": 4
}

const comparaObject = (obj1,obj2)=> {
    let propiedades1 = Object.keys(obj1);
    let propiedades2 = Object.keys(obj2);
    if(propiedades1.length()!=propiedades2.length()){
        return false;
    }
    propiedades1.forEach(propiedad=>{
        if(obj2[propiedad] !== obj1[propiedad]){
            return false;
        }
    })
    return true;

    //Version 1
    for(let propiedad in obj2){
        if(!propiedades1.contains(propiedad)){
            return false;
        }
    }
    return true;
    //Version 2
    
    return true;
    //Version 3
    propiedades1.forEach(propiedad=>{
        if(!propiedad in obj2){
            return false;
        }
    })
    return true;
}