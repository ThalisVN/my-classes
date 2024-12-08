function Sorte(numero) {
    const max = 10
    const min = 1
    const numeroaleatorio = Math.floor(Math.random() * (max - min * 1) + min)
    return (numero === numeroaleatorio ? `Parabéns! o número sorteado foi o ${numeroaleatorio} ` : `Que pena! o número sorteado foi o ${numeroaleatorio}`
    )
}

console.log(Sorte(10))
console.log(Sorte(7))
console.log(Sorte(5))
console.log(Sorte(3))
console.log(Sorte(1))