function GetInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1) {
    opcao = GetInteiroAleatorioEntre(-1, 10)
    console.log('Opçao Escolhida foi '+ opcao)
}