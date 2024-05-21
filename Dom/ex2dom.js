// adicionar e remover itens de uma lista


let novoItem = document.createElement("li")
let lista = document.getElementById("minhaListaex2")

const addItem = () => {
    let novoItem = document.createElement("li")
    let lista = document.getElementById("minhaListaex2")
    novoItem.textContent = "Novo Item"
    lista.appendChild(novoItem);
}

function clearAll() {while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }}