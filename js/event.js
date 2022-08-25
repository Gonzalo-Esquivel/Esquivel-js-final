const campos = document.querySelectorAll("input")
const btnCargar = document.querySelector(".button.button-outline")

function listarInformacion() {
    //debugger
    const obj = {
        Codigo : campos[0].value,
        Descripcion: campos[1].value,
        Importe: campos[2].value
    }
    const code = campos[0].value
    const description = campos[1].value
    const amount = campos[2].value

    //seteo un objeto en el localStorage
    localStorage.setItem("camposObj", JSON.stringify(obj))
    //seteo solo los valores en el localStorage
    localStorage.setItem("code", code)
    localStorage.setItem("description", description)
    localStorage.setItem("amount", amount)
    
    //aqui recorro el array "campos" y lo muestro por consola
    /*campos.forEach((campo, index) => {
        console.log(index) // indice del array
        console.log(campo) // objeto Input completo
        console.log(campo.id) // id del input
        console.log(campo.value) // valor ingresado en el input
    })*/
}

function focoEnCampos() {
    campos.forEach(campo => {
        campo.addEventListener("focus", ()=> {campo.className = "fondo-amarillo"})
        campo.addEventListener("blur", ()=> {campo.className = ""})
        campo.addEventListener("keypress", (e)=> {      
            if (e.key == "Enter") {
                alert("Se pulso la tecla enter.")
            }
        })
    })
}

focoEnCampos()


btnCargar.addEventListener("mouseup", ()=> {
    //llamo a la función listar información
    listarInformacion() 
    //obtengo del localStorage el objeto mediante la key y lo muestro en un alert
    alert(localStorage.getItem("camposObj"))
    //obtengo del localStorage los campos individuales mediante las kay y los muestro por consola
    console.log(localStorage.getItem("code"))
    console.log(localStorage.getItem("description"))
    console.log(localStorage.getItem("amount"))
    btnCargar.title = "Prueba de evento MOUSEMOVE"
})