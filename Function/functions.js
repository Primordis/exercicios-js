// // function saudacao() {

// //     let nome = prompt("qual seu nome")

// //     let horaatual = new Date().getHours()

// //     if (horaatual > 6 && horaatual < 12) {
// //         window.alert("bom dia " + nome)
// //     }
// //     else if (horaatual >= 12 && horaatual < 18) {
// //         window.alert("boa tarde " + nome)

// //     } else { window.alert("boa noite " + nome) }
// // }
// // saudacao()
// // saudacao()

// function soma(num1, num2, num3){
//     let soma = num1 + num2 + num3
//     return(soma)
// }
// let resultado = soma (5, 6, 9)
// console.log("resultado é " + resultado )

// let professor = {}

//     professor.nome = prompt("su nombre?")
//     professor.sobrenome = prompt("su apellido?")
//     professor.idade = prompt("su idade?")

//     console.log(professor)

let produto = {

    nome: "Controle Remoto",
    marca: "Philco",
    modelo: "XRCTFG-456",
    preco: 30.0
}

console.log("Antes do desconto: " + produto.preco)

produto.preco = 20

console.log("Após o desconto: " + produto.preco)