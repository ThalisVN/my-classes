const imprimirResultado = function(nota) {
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('quadro de Honra')
            break// se não colocar o break vai ser execultado todos os codigos
        case 8: case 7:
            console.log('aprovado')
             break
         case 6 : case 5: case 4:
            console.log('Recuperaçao')
           break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('nota inválida')
    }
}
imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(0)
// não relacional