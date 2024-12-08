function MA(numero){
    const qtdNumeros = numero.length
    const somatotal = numero.reduce((numeroA, numeroB) => numeroA + numeroB)
    return somatotal / qtdNumeros
}

console.log(MA([0, 10]))
console.log(MA([1, 2, 3, 4, 5]))