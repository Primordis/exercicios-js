// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

// Nome de usuário
// Senha
// Verificar se são Admin e senha123 respectivamente
// Console log falando se o login foi bem sucedido. Se não for, responder com Nome ou Senha errados.

let nome = prompt("Digite seu usuário: ")
let senha = prompt("Digite sua senha: ")
if(nome = "admin" && senha == "senha123"){
    console.log("Bem vindo, admin.")

    
}

else{
        console.log("Usuário ou senha incorretos.")
    }