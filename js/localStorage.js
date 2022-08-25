// guardar_localStorage();
obtener_localStorage();

function obtener_localStorage(){

    if(localStorage.getItem("nombre")){
        let nombre = localStorage.getItem("nombre");
        let persona = JSON.parse(localStorage.getItem("persona")); 
    
        console.log(nombre);
        console.log(persona);
    }else{
        console.log("No hay datos en el local storage");
    }
    
  
}

function guardar_localStorage(){

    let persona = {
        
        nombre:"Gonzalo",
        edad:31,
        mail:"gesquivel263@gmail.com",
    };

    let nombre = "Juan";

    localStorage.setItem("nombre", nombre );
    localStorage.setItem("persona", JSON.stringify(persona) );


}