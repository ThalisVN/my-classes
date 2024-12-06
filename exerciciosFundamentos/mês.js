function mes(numero) {
    mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'junlho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--numero]
} 

console.log(mes(1))
console.log(mes(4))
console.log(mes(12))