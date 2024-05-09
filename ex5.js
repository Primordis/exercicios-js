// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let num1 = parseFloat(prompt("Digite um número."))
let num2 = parseFloat(prompt("Digite um segundo número."))
let num3 = parseFloat(prompt("Digite um terceiro número."))

if (num1 < num2 && num2 < num3){
    console.log("Seus números estão em ordem crescente. Isso é legal!")
}
else if(num1 > num2 && num2 > num3){
    console.log("Seus números estão em ordem decrescente. Isso é legal, mas não tanto quanto em ordem crescente.")
}
else{
    console.log("Seus números não estão em ordem crescente nem decrescente. Isso não é legal.")
}