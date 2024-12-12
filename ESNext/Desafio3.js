const fs = require('fs');
const path = require('path');

function leraquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(__, conteudo) {
            resolve(conteudo.toString());
        });
        console.log('Depois de ler'); // Este console.log será executado antes da leitura.
    });
}

const caminho = path.join(__dirname, 'dados.txt');

leraquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(",")) // Corrigi a variável para `linhas`.
    .then(conteudo => `O valor final é ${conteudo}`)
    .then(console.log);
