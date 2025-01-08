const pilotos = ['vettel', 'Alonso', 'Raikkonen', ' Massa']

pilotos.pop() // massa quebrou o carro
console.log(pilotos)

pilotos.push('verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento[0]

pilotos.unshift('hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) // massa quebrou de novo
console.log(pilotos)

const algunspilotos = pilotos.slice(2) // novo array
console.log(algunspilotos)

const algunspilotos2 = pilotos.slice(1, 4)// é incluso o primeiro indice, mas não o ultimo
console.log(algunspilotos2)
