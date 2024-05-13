// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let anonascimento = parseInt(prompt("Digite seu ano de nascimento"))
let anoatual = new Date().getFullYear()
let idade = anoatual - anonascimento

if (idade >= 18){
    console.log("Você é maior de idade e pode acessar todas as partes deste site.")
    console.log("Sua idade é de " + idade + ".")
} else{
    console.log("Você é menor de idade e terá parte do conteúdo deste site reduzido.")
}