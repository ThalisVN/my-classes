// funçao em JS é fist-class object (Citizens)
//higher-order function

//criar forma literal
function fun1() { }

//Armazenar uma variavel
const fun2= function() { }

//Armazenar uma array
const array =[function (a,b) {return a + b}, fun1, fun2]
 
console.log(array[1](2, 3))

// amarzenar atributo de objeto
const obj = {};
obj.falar() = {return: opa }
console.log(obj.falar());

//passar uma funçao como parametro
function run(fun) {
    fun()
}
run(function () {console.log('execultando...')})