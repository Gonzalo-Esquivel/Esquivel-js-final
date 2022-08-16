const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const diasList = document.getElementById('diasList')
const selectDias = document.getElementById('diasSelect')


title.innerHTML = '<h1 id="title">Bienvenidos a la morada</h1>'

const fragment = document.createDocumentFragment()

for (const day of dias) {
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', day.toLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}

selectDias.appendChild(fragment)