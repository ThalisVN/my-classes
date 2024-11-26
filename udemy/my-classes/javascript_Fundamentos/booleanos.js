let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log("OS verdadeiros")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"TEXTO")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))


console.log("os falsos")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo= false))

console.log(!!(""|| null|| 0 || " "))// se tiver um unico verdadeiro retornar o verdadeiro

var nome ="lucas"
console.log(nome || "DESCONHECIDO")