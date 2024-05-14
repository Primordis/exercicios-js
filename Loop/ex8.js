let num = parseInt(prompt("Qual é a sua Idade?"))

while (num < 18){
    num = parseInt(prompt("Acesso Negado. Qual sua idade?"))
    if (num >= 18){
        console.log("Bem vindo.")
    }
}