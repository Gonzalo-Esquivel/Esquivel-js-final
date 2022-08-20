const campos = document.querySelectorAll("input")
const btnCargar = document.querySelector(".button.button-outline")

function listarInformacion() {
    debugger
    campos.forEach(campo => {
        console.log(campo.value)
    })
}

function focoEnCampos() {
    campos.forEach(campo => {
        campo.addEventListener("focus", ()=> {campo.className = "fondo-amarillo"})
        campo.addEventListener("blur", ()=> {campo.className = ""})
        campo.addEventListener("keypress", (e)=> {      
            if (e.key == "T") {
                alert("Se pulso la tecla enter.")
            }
        })
    })
}

focoEnCampos()


btnCargar.addEventListener("mouseup", ()=> {
    console.log("tecla soltada del mouse")
    btnCargar.title = "Prueba de evento MOUSEMOVE"
})