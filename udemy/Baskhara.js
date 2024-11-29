let a = 1
let b = 3
let c = -7
let Delta = Math.pow(b,2) - 4 * a * c
let x1 = (-b + Math.sqrt(Delta))/(2*a)
let x2 = (-b - Math.sqrt(Delta))/(2*a)


if (Delta > 0) {
    console.log('A funçao possui 2 raizes diferentes')
    console.log('X1= '+ parseFloat(x1.toFixed(2)) +' X2= '+ parseFloat(x2.toFixed(2)))
} else if (Delta == 0) {
    console.log('A funçao possui 2 raizes iguais')
    console.log('X = '+ parseFloat(x1.toFixed(2)))
} else /*caso delta < 0 */{
    console.log('A funçao não possui raizes no campo dos números reais.')
}

