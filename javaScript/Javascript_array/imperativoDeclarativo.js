const aluno = [
    {nome: 'joao', nota: 7.9},
    {nome: 'maria', nota: 9.2}
]

// Imperativo
let total1 = 0;
for (let i = 0; i < aluno.length; i++) { 
    total1 += aluno[i].nota;
}

console.log(total1 / aluno.length)

// Declarativo
const getnota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = aluno.map(getnota).reduce(soma)
console.log(total2 / aluno.length)
