console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Escola Cod3er'.reverse())

Array.prototype.fist = function() {
    return this[0]
}

console.log([1 ,2 ,3 ,4 ,5 ].fist())
console.log([a ,b ,c ,d ,e ].fist())

String.prototype.toString = function(){
    return 'lascou tudo'
}

console.log('Escola Cod3er'.reverse())
