function anobissexto(ano) {
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

console.log(anobissexto(2020))
console.log(anobissexto(2100))
console.log(anobissexto(4))
console.log(anobissexto(1))