function segundomaior(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundomaior = numerosOrdenados[1]
    return segundomaior
}

console.log(segundomaior([12, 16, 1, 5])) 
console.log(segundomaior([8, 4, 5, 6])) 