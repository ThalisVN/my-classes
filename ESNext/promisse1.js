let a = 1
console.log(a)

let p =new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p.then()
 .then(primeiro => primeiro[0])
 .then(letra => letra.toLowerCase())
 .then(letraminuscula => console.log(letraminuscula))