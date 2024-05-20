// document.body.innerHTML = '<h1 id="titulo">hehehehaw</h1>'
// let titulo = document.getElementById("titulo")
// titulo.style.fontFamily = "Segoe UI"
// titulo.style.color = "red"

// document.getElementsByTagName('p') - Pega pelo nome em si da tag. Meio ruim já que vai mirar em TODAS as tags com nome igual (todos parágrafos neste exemplo)
// document.getElementById('texto') Mira baseado na classe.
// document.getElementsByClassName('teste')[0] - Pega todos os itens com a classe e eu devo selecionar eles numericamente com o número entre colchetes.
// document.querySelector('.myclass') - Deve mirar em todos os itens da classe.

let titulo = window.document.getElementById("titulo")
titulo.style.color = "#002596"
titulo.style.fontFamily = "Montserrat"

let click = 0

const somarClick = () => {
    click++
    
    document.querySelector("#botao")
    
    console.log(click)
}

const adicionarItem = () => {
    let novoItem = document.createElement("li")
    novoItem.textContent = "Novo Item"
    let lista = document.getElementById("minhaLista")
    lista.appendChild(novoItem);
}

const voltarPagina = () => {
    window.history.back()
}

const fecharPagina = () => {
    window.close()
}
