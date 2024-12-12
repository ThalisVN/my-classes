const http = require('http');
const { concat } = require('lodash');

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    return new Promise((resolve, reject) => {
        let resultado = '';

        http.get(url, (res) => {
            res.on('data', (dados) => {
                resultado += dados;
            });

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado)); // Resolve a Promise com os dados convertidos
                } catch (e) {
                    reject(e); // Rejeita a Promise em caso de erro no JSON.parse
                }
            });
        }).on('error', (err) => {
            reject(err); // Rejeita a Promise em caso de erro na requisição HTTP
        });
    });
};

// Exemplo usando Promises:
/* let nomes = [];
getTurma('A')
    .then((alunosA) => {
        nomes = nomes.concat(alunosA.map((a) => `A: ${a.nome}`));
        return getTurma('B');
    })
    .then((alunosB) => {
        nomes = nomes.concat(alunosB.map((b) => `B: ${b.nome}`));
        return getTurma('C');
    })
    .then((alunosC) => {
        nomes = nomes.concat(alunosC.map((c) => `C: ${c.nome}`));
        console.log(nomes);
    })
    .catch((err) => {
        console.error('Erro ao obter as turmas:', err);
    });
*/

    Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))