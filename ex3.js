// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do usuário e informe se este número é par ou
// ímpar.


let numero = parseInt(prompt("Digite um número, e te contarei se este é par ou ímpar."))

if (numero %2 == 0 ){
    console.log("Seu número é par.")
} else {
    console.log("Seu número é ímpar.")
}