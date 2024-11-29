function soma(a,b){
let resultado = a + b
let formatado = resultado.toFixed(2).replace('.', ',')
console.log(formatado)
}

soma(0.1, 0.2)