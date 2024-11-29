// Armazenando uma funçao em uma variavel
const ImprimirSoma = function(a, b){
    console.log(a + b)
}

ImprimirSoma(2, 3)

//Armazenando uma função arrow em uma variavel

const soma= (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))