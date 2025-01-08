// usando a notaçao literal
const obj1 = {}
console.log(obj1)

//object em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funçoes construtora

function produto(nome, preco, desc){
    this.nome = nome
    this.getprecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('caneta', 7.99, 0.15)
const p2 = new produto('Notebook', 2998,99, 0.25)

console.log(p1.getprecoComDesconto(), p2.getprecoComDesconto())

//funçao factory

function criarfuncionario(nome, salariobase, falta){
    return{
        nome,
        salariobase,
        falta,
        getsalario() {
            return(salariobase / 30) * (30 -falta)
        }
    }
}

const f1 = criarfuncionario('joao', 7980, 4)
const f2 = criarfuncionario('maria', 11000, 1)
console.log(f1.getsalario(), f2.getsalario())

//object.create

const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)
// uma funçao famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"')
console.log(fromJSON.info)