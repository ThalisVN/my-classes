//Diferente do While pode repetir uma vez um codigo
function gerenumeroaleatorioentre(min, max) {
 const valor =Math.random() * (max - min) + min
 return Math.floor(valor)
}

let opcao// não precisa ter uma valor atribuido no inicio 

do {
    opcao = gerenumeroaleatorioentre(-1, 10)
    console.log('numero escolhido foi '+ opcao)
} while (opcao != -1)

// não entedi a ultilidade. ???