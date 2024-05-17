// construir menu para escolher entre exercícios entre os anteriores, para serem executados.
// Faça com que o menu repita sua execução, disponibilizando as opções para o usuário até que digite "sair"


function exercicioCountimp() {
    for (let contador = 0; contador <= 50; contador++) {
        if (contador % 2 == 1) { console.log("Seu número é " + contador) }
    }

}
function exercicioTabuada() {
    let num = parseInt(prompt("Escolha um número, e te contarei a tabuáda dele..."))

    for (let multi = 1; multi <= 10; multi++) {
        console.log(num * multi)
    }
}
function exercicioFibo() {
    let n1 = 1, n2 = 1, nextTerm

    for (let fibo = 1; fibo <= 10; fibo++) {
        console.log(n1)
        nextTerm = n1 + n2
        n1 = n2
        n2 = nextTerm
    }
}
function exercicioPar() {
    let num = -2

    while (num < 20) {
        num = num + 1
        if (num % 2 == 0) { console.log(num) }
    }
}
function exercicioBinomial() {
    let sum = 0, num = 1

    while (num <= 100) {
        sum += num
        num++
        console.log(sum)
    }
}
function exercicioZero() {
    let num = parseInt(prompt("Digite 0, por favor."))

    while (num != 0) {
        num = parseInt(prompt("Digite 0, não esse número."))
    }
    if (num == 0) {
        console.log("Obrigado.")
    }
}

function bye() {
    console.log("Você escolheu sair. Tenha um bom dia.")
}

let opcao = "";

while (opcao != "7") {

    opcao = window.prompt("Menu\nDigite a opção desejada:\n\n1 - Conta de Ímpares\n2 - Tabuada\n3 - Fibonacci\n4 - Conta de Pares com While\n5 - Soma de Números Inteiros 1 a 100\n6 - Verificação de Valor\n7 - Sair")

    switch (opcao) {
        case "1":
            exercicioCountimp()
            break


        case "2":
            exercicioTabuada()
            break

        case "3":
            exercicioFibo()
            break

        case "4":
            exercicioPar()
            break

        case "5":
            exercicioBinomial()
            break

        case "6":
            exercicioZero()
            break

        case "7":
            bye()
            break

        default:
            break;
    }
}

// let opcao;

// do {
//     opcao = window.prompt("Menu\nDigite a opção desejada:\n\n1 - Conta de Ímpares\n2 - Tabuada\n3 - Fibonacci\n4 - Conta de Pares com While\n5 - Soma de Números Inteiros 1 a 100\n6 - Verificação de Valor\n7 - Sair")

//     switch (opcao) {
//         case "1":
//             exercicioCountimp()
//             break


//         case "2":
//             exercicioTabuada()
//             break

//         case "3":
//             exercicioFibo()
//             break

//         case "4":
//             exercicioPar()
//             break

//         case "5":
//             exercicioBinomial()
//             break

//         case "6":
//             exercicioZero()
//             break

//         case "7":
//             bye()
//             break

//         case "sair":
//             adios()
//             toLowerCase()
//             break

//         default:
//             break;
//     }

// } while (opcao != "7", "sair");