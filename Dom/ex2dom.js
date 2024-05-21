// adicionar e remover itens de uma lista


// let novoItem = document.createElement("li")
// let lista = document.getElementById("minhaListaex2")
// const addItem = () => {
//     let novoItem = document.createElement("li")
//     let lista = document.getElementById("minhaListaex2")
//     novoItem.textContent = "Novo Item"
//     lista.appendChild(novoItem);
// }

// function clearAll() {while (lista.firstChild) {
//         lista.removeChild(lista.firstChild)
//     }}

function addItem() {
    let novoItem = document.createElement("li")
    novoItem.textContent = "Novo Item"
    let lista = document.getElementById("minhaLista")
    lista.appendChild(novoItem);
}

function removeItem() {
    let lista = document.getElementById("minhaLista")

    if (lista.children.length > 0) {
        lista.removeChild(lista.lastElementChild);
    }
}