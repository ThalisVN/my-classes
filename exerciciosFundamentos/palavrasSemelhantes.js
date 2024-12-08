function buscarpalavrasSemelhantes(inicio, palavras){
    return palavras.filter(palavra => palavra.includes(inicio))
}

console.log(buscarpalavrasSemelhantes('pro',["programaçao", "mobile", "Profissional"]))
console.log(buscarpalavrasSemelhantes('python',["javascript", "java", "C++"]))