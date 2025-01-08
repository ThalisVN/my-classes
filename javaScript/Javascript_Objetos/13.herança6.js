const { ConnectionService } = require("discord.js")

function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula('bem vindos', 123)
const aula2 = new aula('até breve', 456)
console.log(aula1, aula2)

//simulando o new

function Novo(f, ...params) {
    const obj ={}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
const aula3 = novo(aula, ' bem vindos', 123)
const aula4 = novo(aula, ' até breve', 456)
console.log(aula3, aula4)