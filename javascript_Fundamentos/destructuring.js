
const pessoa ={
    nome:'Ana',
    idade: 5,
    endereco:{
     logradouro:'Rua abc',
     numero: 1000
    }
}
const {nome, idade} = pessoa
console.log(nome, idade)

const{nome: n, idade:i} = pessoa
console.log('nome= '+ n +'  idade= '+ i)

const {sobrenome, bemHumorada= true }= pessoa
console.log (sobrenome, bemHumorada)
const {endereco: { logradouro, numero, cep} }  = pessoa
console.log(logradouro,numero, cep)