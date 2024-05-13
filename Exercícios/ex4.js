// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let nota1 = parseFloat(prompt("Digite a nota do primeiro bimestre."))
let nota2 = parseFloat(prompt("Digite a nota do segundo bimestre."))
let nota3 = parseFloat(prompt("Digite a nota do terceiro bimestre."))
let nota4 = parseFloat(prompt("Digite a nota do quarto bimestre."))

let media = parseFloat((nota1 + nota2 + nota3 + nota4)/4)

if (media >= 7.0){
    console.log("Parabéns, você passou! Você tirou " + media)
}
else if (media >= 5.0){
    console.log("Infelizmente, você ficou de recuperação. Você tirou " + media)
}
else if (media < 5.0){
    console.log("Sinto muito em te dizer isto, porém você foi reprovado. Você tirou " + media)
}