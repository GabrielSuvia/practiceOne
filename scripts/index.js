
class Activity{
    constructor(id, titulo, descripcion, imagen){
        
         this.id= id;
         this.titulo= titulo;
         this.descripcion= descripcion;
         this.imagen= imagen;
    }
};



class Repositorio{
    constructor(){
        this.act = [];
        this.id=0;
    }
    getAct(){
    return this.act;
    }
    agregarAct(titulo, descripcion, imagen){
        const deporte = new Activity(this.id, titulo, descripcion, imagen)
        this.id+=1;
        this.act.push(deporte);
    }

};


const objeto = new Repositorio();

//Crea los elementos para las propiedades del objeto para crear las card

const actividad = function (actClas, indice){
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

//Adjuntamos las actividades a elementos creados dentro del contenedor recibiendo el arreglo de actividades

const conver = function (actividades){
    const docCont = document.querySelector(".container");
  
    docCont.innerHTML = "";
    const arrAct=[];

    arrAct= actividades.map((e,i)=>{
        arrAct.push(actividad(e,i))
    });


    arrAct.forEach((e)=>{
        docCont.innerHTML = docCont.innerHTML+ e;
    });
 

};

//capturar los valores de los input y creacion de la actividad

const handler = function (){

    const titulo = document.getElementById("titulo");
    const descripcion = document.getElementById("descripciones");
    const imagen = document.getElementById("imagen");
    

   if(titulo.value === "" || descripcion.value ==="" || imagen.value ==""){

        alert("Es necesario rellenar los 3 espacios")
    }else{
        objeto.agregarAct(titulo.value, descripcion.value, imagen.value)
        

 //vaciar los input
        titulo.value = "";
        descripcion.value = ""; 
        imagen.value = "";

        conver(objeto.getAct())//todas las actividades, copia en el innerhtml(termina bloque)
    }
};


const button = document.getElementById("btn-1");

   button.addEventListener("click",function(e){
   e.preventDefault();
    handler();
   
   });


