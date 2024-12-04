const quasearry = {0: 'Rafael', 1: 'Ana', 2: "Bia"}
console.log(quasearry)
Object.defineProperty(quasearry, 'tostring', {
    value:function() {return Object.values(this)}, 
    enumerable: false
})

console.log(quasearry[0])

const meuArray =['Rafael', 'Ana', "Bia"]
console.log(quasearry.toString(), meuArray)