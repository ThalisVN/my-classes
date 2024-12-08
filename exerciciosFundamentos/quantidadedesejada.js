function filtraporqtddedigitos(numeros, qtd) {
    return numeros.filter(numero => {
        const quantidadeDeDigitos = String(numero).length

        return quantidadeDeDigitos === qtd
    })
}

console.log(filtraporqtddedigitos([38, 2, 365, 10, 125, 11],2))
console.log(filtraporqtddedigitos([5, 9, 1, 125, 11],1))