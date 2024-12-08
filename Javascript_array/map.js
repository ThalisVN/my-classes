const nums = [1, 2, 3, 4, 5]

//for com propósito
let resultado = nums.map(function(e){
    return e * 2 
})

console.log(resultado)

const Soma10 = e => e + 10
const triplo = e => e * 3
const Pordinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(Soma10).map(triplo).map(Pordinheiro)
console.log(resultado)