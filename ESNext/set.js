const { time } = require("discord.js")

//Não aceita repetição/ não indexada
const times = new Set()
times.add('vasco')
times.add('São Paulo').add('Palmeiras').add('corinthians')
times.add('flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)