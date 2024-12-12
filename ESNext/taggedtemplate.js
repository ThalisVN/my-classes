//tagged templates - processa o template dentro de uma funçao
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'gui'
const situaçao = 'Aprovado'
console.log(tag `${aluno} está ${situaçao}.`)
