// ES* Object.values/Objects.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// melhorias na Notaçao Literal

const nome= 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Ola gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

//class
class animal {}
class cachorro extends animal {
    falar() {
        return 'Au au!'

    }
}

console.log(new cachorro().falar())