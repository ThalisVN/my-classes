class Lancamento {
    constructor(nome = 'generico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamento = [];
    }

    addLancamento(...lancamento) {
        lancamento.forEach(l => this.lancamento.push(l));
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamento.forEach(l => {
            valorConsolidado += l.valor; 
        });
        return valorConsolidado;
    }
}

const salario = new Lancamento('salario', 45000);
const contadeluz = new Lancamento('luz', -220);

const contas = new CicloFinanceiro(6, 2020);
contas.addLancamento(salario, contadeluz);

console.log(contas.sumario()); 
