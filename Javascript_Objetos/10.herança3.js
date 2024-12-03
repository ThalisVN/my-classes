const pai = {nome: 'pedro', cordocabelo: 'preto'}

const filha1= Object.create(pai)
filha1.nome = 'ana'
console.log(filha1.cordocabelo)

const filha2= Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
    filha2.nome = 'carla'
console.log(`${filha2.nome} tem cabelo ${filha2.cordocabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}