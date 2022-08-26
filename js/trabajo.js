const edad = 18
let entrevistaTrabajo;

if (edad > 17){
    entrevistaTrabajo = 'Si';
} else {
    entrevistaTrabajo = 'No'
}


let entrevistaTrabajo2 = edad > 17 ? (
    console.log('Si cumple los requisitos.'),'Si'
    ) : (console.log('No cumple los requisitos'),'No');
console.log(entrevistaTrabajo);
console.log(entrevistaTrabajo2);
