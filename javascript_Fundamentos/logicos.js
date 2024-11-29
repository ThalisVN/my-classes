/* 
*se for e só sera falso se uma das condiçoes forem falsa
V  e  V -> V
V  e  F -> F
F  e  ? -> F

*se for ou se tiver pelomenos uma das condiçoes dando verdadeira o resultado é verdadeiro
V ou ? -> V
F ou V -> V
F ou F -> F

*as condiçoes tem que obrigatoriamente serem diferente
V xor V -> F
V xor F -> V
F xor V -> V
F xor f -> F

*negaçao logica
!V -> F
!F -> V
*/

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!trabalho1 ^ trabalho2//bitwise
    const comprarTv32 = !!trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unario

return {comprarSorvete, comprarTv32, comprarTv50, manterSaudavel}
} 

console.log(compras(true, true))