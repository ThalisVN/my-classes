function classificacaodealunos(nota){
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40){
        console.log(`Aluno aprovado com ${notaCorrigida}`)
    } else {
        console.log(`Aluno reprovado com ${notaCorrigida}`)

    }
}

function arredondar(nota) {
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificacaodealunos(100)
classificacaodealunos(50)
classificacaodealunos(40)
classificacaodealunos(38)
classificacaodealunos(30)