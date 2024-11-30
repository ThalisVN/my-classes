function calculadora(a,operador, b) {
    switch(operador) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            return 'operação invalida!!'
        
    }
}

console.log(calculadora(4,"+", 2))
console.log(calculadora(4,"-", 2))
console.log(calculadora(4,"*", 2))
console.log(calculadora(4,"/", 2))
console.log(calculadora(4,">", 2))