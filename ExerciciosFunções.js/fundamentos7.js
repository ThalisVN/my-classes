function baskhara(a,b,c) {
let Delta = Math.pow(b,2) - 4 * a * c
    if(Delta > 0){
        let x1 = (- b + Math.sqrt(Delta)) / 2 * a
        let x2 =  (- b - Math.sqrt(Delta)) / 2 * a
        console.log(`A funçao possui duas raizes diferentes:
            x1= ${parseFloat(x1.toFixed(2))} e x2= ${parseFloat(x2.toFixed(2))}`)
    } else if(Delta == 0 ){
        console.log(`A funçao possui duas raizes iguais:
            x= ${parseFloat(x1.toFixed(2))}`)
    } else {
        console.log('A função não possui raizes dentro do campo dos números Reais')
    }
} 

baskhara(3, -5, 12)
baskhara(1, 3, -7)


