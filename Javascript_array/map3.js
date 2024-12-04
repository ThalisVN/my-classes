Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "borracha", "preço": 3.45}',
    '{"nome": "cadreno", "preço": 13.90}',
    '{"nome": "Kit de lapis", "preço": 41.22}',
    '{"nome": "caneta", "preço": 7.50}'
]

//retornar um array apenas com os preços

const obj = json => JSON.parse(json)
let preços = produto => produto.preço

const resultado = carrinho.map2(obj).map2(preços)
console.log(resultado)