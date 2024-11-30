function planodesaude(idade){
    if(idade < 10){
        return 180
    } else if(idade < 30 && idade < 60) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(planodesaude(10))
console.log(planodesaude(30))
console.log(planodesaude(60))
console.log(planodesaude(80))
