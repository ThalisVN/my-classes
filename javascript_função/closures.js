/* clousere é o escorpo criado quando uma função é declarada
esse escorpo permite a funçao acessar e manipular variaveis externas à função
*/

const x = 'global'

function fora() {
    const x = 'local'
    function dentro() {
        return x 
    }
    return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())