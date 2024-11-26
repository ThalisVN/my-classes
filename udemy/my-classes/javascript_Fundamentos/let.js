let numero = 1 // se usar let aqui vai pegar os escorpo de global no de fora e o de dentro no de dentro
{
 let numero = 2 // let só esta dentro do escorpo
console.log("dentro =", numero)
}
console.log("fora =", numero)