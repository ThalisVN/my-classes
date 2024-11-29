const { normalizeArray } = require("discord.js");

// factory simples
function CriarPessoa() {
    return{
    nome: 'ana',
    sobrenome: 'silva'
    }
}

console.log(CriarPessoa())