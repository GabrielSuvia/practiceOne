/*
console.log("Archivo guardado");


class Activities{
    constructor(id, titulo, descripcion, imgUrl){
        
         this.id= id;
         this.titulo= titulo;
         this.descripcion= descripcion;
         this.imgUrl= imgUrl;
    }
}



class Repositorio{
    constructor(){
        this.act = [];
    }
    getAct(){
    return this.act;
    }
    agregarAct(titulo, descripcion, imgUrl){
       const id = this.act.length +1;
        const deporte = new Activities(id, titulo, descripcion, imgUrl)
        this.act.push(deporte);
    }
    deleteAct(datoId){
        const dato = this.repo.filter(e => e.id === datoId)
        return dato;
    }

}
const objeto = new Repositorio();
objeto.agregarAct("deporte", "futbol", "jugadores de pelota")
objeto.agregarAct("deporte", "volleyball", "jugadores de balon de volley")
console.log(objeto.getAct())*/

function Persona(name, edad){
    this.name= name;
    this.edad= edad;
}

Persona.prototype.saludar = function (){
    console.log(`Hello my name is ${this.name}`)
}

const persona1 = new Persona("andres", 4)

const saludar2 = persona1.saludar();

saludar2;