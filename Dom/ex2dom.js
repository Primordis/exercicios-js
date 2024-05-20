// adicionar e remover itens de uma lista



const addItem = () => {
    let novoItem = document.createElement("li")
    novoItem.textContent = "Novo Item"
    let lista = document.getElementById("minhaListaex2")
    lista.appendChild(novoItem);
}

const removerItem = () => {
    let novoItem = document.eraseElement("li")
    let lista = document.getElementById("minhaListaex2")
    minhaListaex2.innerhtml = ""
    lista.appendChild(novoItem);
}