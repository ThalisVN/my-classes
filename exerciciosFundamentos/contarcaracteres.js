function contarcaracteres(contarcaracteresbuscados, frase){
    return [...frase].filter(caractere => caractere === contarcaracteresbuscados).length
}

console.log(contarcaracteres("r", 'A sorte favorece os audazes'))
console.log(contarcaracteres("c", 'Conhece-te a ti mesmo'))