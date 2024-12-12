//function Arrow
const Soma= (a, b) => a + b

console.log(Soma(2,3))

//arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//paramentro Default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('sou mais forte')

//operador rest
function total(... numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
 console.log(total(1,2,3,4,5))