function getpreço(imposto = 0, moeda = 'R$') {
    return `${moeda} ${(this.preço * (1 - this.desc) * (1 + imposto)).toFixed(2)}`}

const produto = {
    nome: 'notebook',
    preço: 3599.99,
    desc: 0.15,
    getpreço
}

global.preço = 20
global.desc = 0.1

console.log(getpreço())
console.log(produto.getpreço())

const carro = {preço: 49999, desc: 0.20}
console.log(getpreço.call(carro))
console.log(getpreço.apply(carro))

console.log(getpreço.call(carro, 0.17, 'R$'))
console.log(getpreço.apply(global, [0.17, 'R$']))