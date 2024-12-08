function DespesasTotais(itens) { 
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preço, 0) 
}

console.log(DespesasTotais([
    {Nome: 'Jornal Online', categoria: "informaçao", preço: 89.99},
    {Nome: 'Cinema', categoria: "Entreterimento", preço: 150}
]))

console.log(DespesasTotais([
    {Nome: 'Galaxy S50', categoria: "Eletronico", preço: 5599.99},
    {Nome: 'Macbook Pro', categoria: "Eletronico", preço: 38998.99}
]))