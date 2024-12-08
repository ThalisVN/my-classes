function Contarpalavras(frase){
    const palavras = frase.split(" ")
    return palavras.length
}

console.log(Contarpalavras("Sou uma Frase"))
console.log(Contarpalavras("Conhece-te a ti mesmo"))