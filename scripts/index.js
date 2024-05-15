
console.log("Archivo guardado");


class Activity{
    constructor(id, titulo, descripcion, imagen){
        
         this.id= id;
         this.titulo= titulo;
         this.descripcion= descripcion;
         this.imagen= imagen;
    }
}



class Repositorio{
    constructor(){
        this.act = [];
    }
    getAct(){
    return this.act;
    }
    agregarAct(titulo, descripcion, imagen){
        const id = this.act.length +1;
        const deporte = new Activity(id, titulo, descripcion, imagen)
        this.act.push(deporte);
    }
    deleteAct(datoId){
        const dato = this.repo.filter(e => e.id === datoId)
        return dato;
    }

};

const objeto = new Repositorio();


const actividad = function (actClas){
      const  {titulo, descripcion, imagen } = actClas  ;

      const docTitulo = document.createElement("h3");
      const docImg = document.createElement("img");
      const docDesc = document.createElement("p");
      
      docTitulo.innerHTML= titulo;
      docImg.src= imagen;//en src va la ruta

      docDesc.innerHTML= descripcion;
      
      const dive = document.createElement("div");
      document.getElementById("container").appendChild(dive);
      dive.classList.add("card");

      dive.appendChild(docTitulo);
      dive.appendChild(docImg);
      dive.appendChild(docDesc);
      
      
      return dive;
};


//objeto.getAct(); como parametro

const conver = function (actividades){
    const docCont = document.querySelector(".container");
  
    docCont.innerHTML = "";
    const arrAct=[];

    arrAct= actividades.map((e)=>{
        arrAct.push(actividad(e))
    });

    
    arrAct.forEach((e)=>{
        docCont.innerHTML = docCont.innerHTML+ e;
    });
 
};


const handler = function (){

    const titulo = document.getElementById("titulos").value;
    const descripcion = document.getElementById("descripciones").value;
    const imagen = document.getElementById("imagen").value;

   // if(titulo === "" || descripcion ==="" || imagen ==""){

     //   console.log("Es necesario rellenar los 3 espacios")
    //}
    objeto.agregarAct(titulo, descripcion, imagen)

    conver(objeto.getAct())
}
;

const button = document.getElementById("btn-1");

   button.addEventListener("click",function(e){
    e.preventDefault();
    handler();
   })

