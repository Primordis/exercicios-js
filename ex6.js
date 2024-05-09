// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let idade = parseInt(prompt("Digite sua idade."))

if (idade >= 18){
    console.log("Você é maior de idade e pode acessar todas as partes deste site.")
} else{
    console.log("Você é menor de idade e terá parte do conteúdo deste site reduzido.")
}