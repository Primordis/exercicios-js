// // Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.

let dia = parseInt(prompt("Digite um número de 1 a 7, representando os dias da semana. "))

if(dia == 1){
    console.log("Hoje é segunda-feira. Bom dia, usuário.")
}
else if(dia == 2){
    console.log("Hoje é terça-feira. Bom dia, usuário.")
}
else if(dia == 3){
    console.log("Hoje é quarta-feira. Bom dia, usuário. Já estamos na metade da semana, continue!")
}
else if(dia == 4){
    console.log("Hoje é quinta-feira. Bom dia, usuário. Você está quase lá")
}
else if(dia == 5){
    console.log("Hoje é sexta-feira. Ótimo dia, usuário. Bom descanso.")
}
else if(dia == 6){
    console.log("Hoje é sábado. Bom fim de semana, usuário.")
}
else if(dia == 7){
    console.log("Hoje é domingo. Boa sorte com sua semana, usuário.")
}