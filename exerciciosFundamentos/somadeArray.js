function SomarNumero(Numero){
    const soma = Numero.reduce((acumulador, Numero) => acumulador + Numero, 0)
    return soma
}

console.log(SomarNumero([10, 10, 10]))
console.log(SomarNumero([15, 15, 15, 15]))