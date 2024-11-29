function tipodetriangulo(a,b,c){
    if (a == b && b == c) {
        return 'equilatero' 
    } else if(a == b||a == c||b == c){
        return 'isoceles'
    } else 
    return 'escaleno'
}
console.log(tipodetriangulo(2,2,2))
console.log(tipodetriangulo(2,2,3))
console.log(tipodetriangulo(2,3,4))