const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesvariadas = new Map([
    [function () {}, "Funçao"],
    [{}, 'objeto'],
    [123, 'número'],
])

chavesvariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesvariadas.has(123))
chavesvariadas.delete(123)
console.log(chavesvariadas.has(123))
console.log(chavesvariadas.size)

chavesvariadas.set(123, 'a')
chavesvariadas.set(123, 'b')
console.log(chavesvariadas)