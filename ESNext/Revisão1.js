//let e const
{
    var a =2 //escorpo global
    let b =3 // só dentro de escorpo
    console.log(b)
}
console.log(a)


//template String
const produto = 'IPad'
console.log(`${produto} é caro`)

//destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e,tras)

const [x, y] = [1,2]
console.log(x, y)

const {idade, nome} = {nome:"ana", idade: 9}
console.log(idade, nome)