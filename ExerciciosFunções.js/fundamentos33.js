let vetorInteiro = [10, 15, 20]
let vetorString = ["lucas","maria","Tailany"]
let vetorDouble = [1.1, 2.5, 3.3]

function concatenar(...args){
    resultado = []
    for(let i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concatenar(vetorInteiro, vetorString))
console.log(concatenar(vetorString,vetorDouble))