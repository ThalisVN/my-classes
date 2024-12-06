function multiplicação(numero, multiplicador) {
 if (numero == 0|| multiplicador == 0) return 0
 return multiplicador === 1? numero : numero + multiplicação(numero, multiplicador - 1)
} 

console.log(multiplicação(5, 5))
console.log(multiplicação(0, 7))