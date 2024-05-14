let num = parseInt(prompt("Digite 0, por favor."))

while (num != 0) {
    num = parseInt(prompt("Digite 0, não esse número."))
}
if (num == 0) {
    console.log("Obrigado.")
}