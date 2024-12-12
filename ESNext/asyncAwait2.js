function gerarNúmeroEntre(min, max, numerosProibidos) {
    if (min > max) { [max, min] = [min, max]; }
    
    return new Promise((resolve, reject) => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator + min);

        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido');
        } else {
            resolve(aleatorio);
        }
    });
}

async function gerarMegasena(qtdeNumeros, tentativas = 1) {
    if (qtdeNumeros > 60) {
        throw new Error('Não é possível gerar mais de 60 números únicos dentro do intervalo de 1 a 60.');
    }

    try {
        const numeros = [];
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNúmeroEntre(1, 60, numeros));
        }
        return numeros;
    } catch (e) {
        if (tentativas >= 10) {
            throw "Não foi possível gerar os números únicos após 10 tentativas.";
        } else {
            console.log(`Tentativa ${tentativas} falhou, tentando novamente...`);
            return gerarMegasena(qtdeNumeros, tentativas + 1);
        }
    }
}

gerarMegasena(15)
    .then(console.log)
    .catch(console.error);
