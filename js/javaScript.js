// alert ("Bienvenidos a LA MORADA")


    function cliente () {
        let nombre = prompt ("Ingrese su nombre").toUpperCase();
        while (nombre === "" || nombre === null) {
        nombre = prompt ("Ingrese su nombre");
        }
        let reserva = prompt ("Ingrese su N° de reserva").toUpperCase();
        while (reserva === "" || reserva === null) {
        reserva = prompt ("Ingrese su N° de reserva");
        }
    console.log ("Bienvenido " + nombre + " reserva N° "+ reserva);
    }

console.warn ("Estas son nuestras mermeladas artesanales")

cliente ()

function creoID() {
    return parseInt(Math.random() * 5000)
}

const mermelada = ["MANGO", "FRUTILLA", "ARANDANOS", "MANZANA", "FRUTOS ROJOS","CEREZA", "CAYOTE", "PERA"]
const mermeladas = []

function listarMermelada() {
    for (let mermelada of mermeladas) {
        console.table(mermelada)
    }
}
class Mermelada {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}

function agregarMermeladas() {
    let id = creoID();
    let descripcion = prompt("Elija el sabor:").toUpperCase();
    let importe = parseInt(prompt("Ingresa el importe:"));
    bebidas.push(new Mermelada(id, descripcion, importe));
    console.table(mermeladas);
}

function generadorAutomaticoMermelada() {
    mermeladas.push(new Mermelada(1234, "MANGO", 250))
    mermeladas.push(new Mermelada(2345, "FRUTILLA", 200))
    mermeladas.push(new Mermelada(3456, "ARANDANOS", 250))
    mermeladas.push(new Mermelada(4567, "MANZANA", 500))
    mermeladas.push(new Mermelada(5678, "FRUTOS ROJOS", 400))
    mermeladas.push(new Mermelada(6789, "CEREZA", 350))
    mermeladas.push(new Mermelada(7890, "CAYOTE", 600))
    mermeladas.push(new Mermelada(8901, "PERA", 200))
    console.table(mermeladas)
}


const postre = ["LEMON PIE", "PAN DE BANANA", "TARTA DE MANZANA", "PASTAFROLA", "SELVA NEGRA", "TORTA HELADA", "TARTA CABSHA", "ESPECIAL LA MORADA"];
const postres =[]

function listarPostre() {
    for (let postre of postres) {
        console.table(postre)
    }
}

class Postre {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}
function agregarPostres() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre del postre:").toUpperCase()
    let importe = parseInt(prompt("Ingresa el importe:"))
    postres.push(new Postre(id, descripcion, importe))
    console.table(postres)
}

function generadorAutomaticoPostre() {
    postres.push(new Postre(1234, "LEMON PIE", 400))
    postres.push(new Postre(2345, "PAN DE BANANA", 500))
    postres.push(new Postre(3456, "TARTA DE MANZANA", 600))
    postres.push(new Postre(4567, "PASTAFROLA", 450))
    postres.push(new Postre(5678, "SELVA NEGRA", 550))
    postres.push(new Postre(6789, "TORTA HELADA", 400))
    postres.push(new Postre(7890, "TARTA CABSHA", 450))
    postres.push(new Postre(8901, "ESPECIAL LA MORADA", 800))
    console.table(postres)
}


console.log(mermeladas)
console.log(postres)

generadorAutomaticoMermelada()
generadorAutomaticoPostre()

const resultado = [""]


function filtrarMermelada (){
    let prod = prompt ("Ingresa producto que desea filtrar:").toUpperCase()
    const resultado = mermeladass.filter (mermelada =>mermelada.nombre.includes(prod))
    console.table(resultado)
}
function filtrarPostre (){
    let prod = prompt ("Ingresa producto que desea filtrar:").toUpperCase()
    const resultado = postres.filter (postre =>postre.nombre.includes(prod))
    console.table(resultado)
}


function buscar (){
    let prod = prompt ("ingresa producto que desea buscar:").toUpperCase()
    const resultado = [
        mermeladas.find (mermelada =>mermelada.nombre.includes(prod))||
        postres.find (postre =>postre.nombre.includes(prod))
        
    ]
    console.table(resultado)
}


alert("Indique lo que desea llevar")

const carritos=[]

function listarCarrito() {
    for (let carrito of carritos) {
        console.table(carrito)
    }
}
class Carrito {
    constructor(nombre, importe) {
        this.nombre = nombre
        this.importe = importe
    }
}
function generadorAutomaticoCarrito() {
    console.table(carritos)
}

function agregarCarrito() {
    let descripcion = prompt("Ingresa el nombre:").toUpperCase()
    let importe = parseInt(prompt("Ingresa el importe:"))
    carritos.push(new Carrito(descripcion, importe))

}


function calcular(){
    let total = carritos.reduce((acumulador,producto)=>acumulador+producto.importe,0)
console.table(carritos)
console.log("Total a pagar: $",total)
alert("Total a pagar: $" + total)
}

agregarCarrito()

let agregar = false

while (agregar === false) {
    if (confirm("¿Desea cerrar el carrito?\nSi desea seguir agregando, indique cancelar")===false) {
        agregarCarrito()
        agregar = false
    } else {
        calcular() 
        agregar=true
    }
}

console.log ("Se generó la oreden N°: " + creoID())
