function gerarNúmeroEntre(min, max, tempo) {
    if (min > max) { [max, min] = [min, max] }
    return new Promise (resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator + min) 
        resolve(aleatorio)
    }, tempo)
}

function gerarvariosnumros() {
    return Promise.all([
        gerarNúmeroEntre(1,60,4000),
        gerarNúmeroEntre(1,60,1000),
        gerarNúmeroEntre(1,60,500),
        gerarNúmeroEntre(1,60,3000),
        gerarNúmeroEntre(1,60,100),
        gerarNúmeroEntre(1,60,1500),
    ])
}

gerarvariosnumros().then(numeros => console.log(numeros))