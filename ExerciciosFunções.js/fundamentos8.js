jogadas = '10, 20 , 20, 8, 25, 3, 0 , 30, 1'
function comparador(jogadas) {
    let pontuacoes = jogadas.split(', ')
    let recordsBatidos = 0
    let piorJogo = 1
    let pontuacaoMax = pontuacoes[0]
    let pontuacaoMin = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > pontuacaoMax) {
            pontuacaoMax = pontuacoes[i]
            recordsBatidos++
        } else if (pontuacoes[i] < pontuacaoMin) {
            pontuacaoMin = pontuacoes[i]
            piorJogo = i + 1;
        }
    }
    return [recordsBatidos, piorJogo]
}

console.log(comparador(jogadas))