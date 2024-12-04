const alunos = [
    {nome: 'joão', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const todosbolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a=> a.bolsista).reduce(todosbolsistas))

const algumbolsistas = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a=> a.bolsista).reduce(algumbolsistas))
