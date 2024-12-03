// coleção dinâmica de pares chaves/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca produtos'] = 'generico'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 890000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        },
    endereco: {
        logadouro: 'rua abc',
        numero: 123
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    },{
        nome: 'ana',
        idade: 42
    }]
}

//function calcularvalorsoseguro() {
    //...}

 console.log(carro)
 delete carro.condutores
 console.log(carro)
