const saudacao = 'opa'// contexto lexico 1

function exec() {
    const saudacao = 'falaaa'// contexto lexico 1
    return saudacao
}

// objeto são grupos aninhados de pares nome/valor
const cliente ={
    Nome: 'pedro',
    idade: 32,
    peso: 90,
    endereço:{
        logradouro:'rua muito legal',
        numero:123,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)