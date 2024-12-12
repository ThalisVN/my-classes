const { resolveBase64 } = require("discord.js")

function gerarNúmeroEntre(min, max) {
    if (min > max){
        [max, min] = [min, max]
    }
    return new Promise (resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator + min) 
        resolve(aleatorio)
    })
}gerarNúmeroEntre(10, 30).then(console.log)