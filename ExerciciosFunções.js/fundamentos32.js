function media (vetor) {
    let soma = 0
    for(let i=0; i<vetor.length; i++) {
        soma += vetor[i]
    }

    return soma/vetor.length
}


vetor = [5, 10, 12 , 1 , 6, 12, 8, 0]
console.log(media(vetor))