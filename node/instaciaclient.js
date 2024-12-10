const contadorA = require('./instanciaunica')
const contadorB = require('./instancianova')

const contadorC = require('./instancianova')()
const contadorD = require('./instancianova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor)