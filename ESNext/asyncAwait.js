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

/* Recurso do ES8
objetivo de simplificar o uso de promises...
*/
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}

obterAlunos()
.then(alunos => alunos.map(a => a.nome))
.then(nomes => console.log(nomes))