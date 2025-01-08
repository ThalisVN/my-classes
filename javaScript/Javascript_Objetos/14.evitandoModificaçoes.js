//Objects.preventExtensions nesse caso não pode adicionar novos dados
const produto = Object.preventExtensions({
    nome: 'Qualquer', preço: 1.99, Tag: 'promoção'
})
console.log('extensive:', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descrilção = 'borracha escolar branca'
delete produto.Tag
console.log(produto)

//Object.seal nesse casso adicionar ou excluir atributos 

const pessoa = {nome: 'juliana', idade: 35}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.frezze = selado + valores constantes