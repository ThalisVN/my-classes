const ferrari ={
   modelo: 'F40',
   velmáx: 324 
}

const Volvo ={
    modelo: 'V40',
    velmáx: 200 
 }

 console.log(ferrari.__proto__)
 console.log(ferrari.__proto__ === Object.prototype)
 console.log(Volvo.__proto__ === Object.prototype)
 console.log(Object.prototype.__proto__)

function meuobjeto() {}
console.log(typeof Object, typeof meuobjeto)
console.log(Object.prototype, meuobjeto.prototype)