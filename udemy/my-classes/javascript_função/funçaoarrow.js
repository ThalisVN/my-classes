let dobro = function (a) {
    return a * 2
}

dobro = (a) => {
    return a * 2
}

dobro = a => a * 2 // return implicito
console.log(dobro(Math.PI))

//outro exemplo
let ola = function () {
    return 'olá'
}

ola = () => "olá"
console.log(ola)