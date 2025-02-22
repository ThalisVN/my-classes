function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN()  ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join(' ')
}

const preco = 29.90
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)