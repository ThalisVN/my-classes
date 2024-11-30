let salario = 1500

function promoçao(salario, plano){
    switch(plano){
        case'A':
        return salario + salario * 0.10
        case'B':
        return salario + salario * 0.15
        case'C':
        return salario + salario * 0.20
        default: 
        return 'plano não reconhecido'
    }
}

console.log(promoçao(salario, "A"))
console.log(promoçao(salario, "B"))
console.log(promoçao(salario, "C"))
console.log(promoçao(salario, "d"))