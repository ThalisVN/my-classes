const http = require('http');

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    http.get(url, (res) => {
        let resultado = '';

        // Coleta os dados conforme chegam
        res.on('data', (dados) => {
            resultado += dados;
        });

        // Quando todos os dados foram recebidos
        res.on('end', () => {
            try {
                // Converte o resultado para JSON e passa para o callback
                callback(null, JSON.parse(resultado));
            } catch (error) {
                callback(error, null); // Trata erros de parsing
            }
        });
    }).on('error', (err) => {
        // Trata erros de requisição HTTP
        callback(err, null);
    });
};

// Exemplo de uso com turmas A, B e C
let nomes = [];

getTurma('A', (err, alunosA) => {
    if (err) {
        return console.error('Erro ao obter a turma A:', err);
    }
    nomes = nomes.concat(alunosA.map(a => `A: ${a.nome}`));

    getTurma('B', (err, alunosB) => {
        if (err) {
            return console.error('Erro ao obter a turma B:', err);
        }
        nomes = nomes.concat(alunosB.map(b => `B: ${b.nome}`));

        getTurma('C', (err, alunosC) => {
            if (err) {
                return console.error('Erro ao obter a turma C:', err);
            }
            nomes = nomes.concat(alunosC.map(c => `C: ${c.nome}`));

            // Exibe os nomes de todas as turmas
            console.log(nomes);
        });
    });
});
