function Anoebissexto(ano){
    if(ano <= 0){
        return false
    } else if(ano % 400 == 0){
        return true 
    } else if(ano % 100 == 0){
        return false
    } else if(ano % 4 == 0){
        return true
    } else {
        return false
    }
}

console.log(Anoebissexto(0))
console.log(Anoebissexto(4))
console.log(Anoebissexto(100))
console.log(Anoebissexto(400))
console.log(Anoebissexto(800))
console.log(Anoebissexto(2020))
console.log(Anoebissexto(2021))
