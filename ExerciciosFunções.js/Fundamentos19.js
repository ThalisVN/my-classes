function produto(cód, qtd) {
    switch(cód){
    case 100:
            return qtd * 3.00
    case 200:
            return qtd * 4.00
    case 300:
            return qtd *  5.50
    case 400:
            return qtd * 7.50
    case 500:
            return qtd * 3.50
    case 600:
            return qtd * 2.80
    default:
        return 'Produto não existe'
    }
}

console.log(produto(100, 2))
console.log(produto(200, 2))
console.log(produto(300, 2))
console.log(produto(400, 2))
console.log(produto(500, 2))
console.log(produto(600, 2))
console.log(produto(700, 2))