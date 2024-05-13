// Exercício 8: Cálculo de IMC
// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
// * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
// usuário se encontra, de acordo com a tabela a seguir:
// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal
// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3

let peso = parseInt(prompt("Digite seu peso em quilogramas."))
let altura = parseFloat(prompt("Digite sua altura em metros."))
let imc = (peso / (altura * altura))

if(imc < 18.5){
    console.log("Você está abaixo do peso. Coma mais, e de maneira saudável, junto de fazer exercícios.")
}
else if(imc <= 24.9){
    console.log("Parabéns! Você está em um peso normal, nem abaixo nem acima do comum.")
}
else if(imc <= 29.9){
    console.log("Você está acima do peso. Mude sua dieta para comidas que goste porém são saudáveis e tenha uma mente forte para conseguir se tornar seu eu ideal.")
}
else if(imc <= 34.9){
    console.log("Você tem obesidade de grau 1. É recomendado assistência médica para que você possa voltar a um peso normal.")
}
else if(imc <= 39.9){
    console.log("Você tem obesidade de grau 2. É recomendado assistência médica para que você possa voltar a um peso normal. ")
}
else if(imc >= 40.0){
    console.log("Você tem obesidade de grau 3. É recomendado assistência médica para que você possa voltar a um peso normal.")
}