console.log(soma(3,4))

//function declaration 
function soma(x,y){
    return x + y
}

 //function expression
 const sub = function (x,y) {
    return x - y
 }// só pode ser chamada depois de ser declarada

//named function expression
const mult = function mult(x, y) {
    return x * y
}// só pode ser chamada depois de ser declarada

console.log(sub(3,4))
console.log(mult(3,4))
