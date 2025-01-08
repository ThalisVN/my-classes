const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'copo', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
return false
}))

const caro = produto => produto.preco >= 500
const fragil= produtos => fragil

console.log(produtos.filter(caro))
console.log(produtos.filter(fragil))
console.log(produtos.filter(fragil).filter(caro))