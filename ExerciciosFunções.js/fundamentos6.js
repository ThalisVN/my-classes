function Juros_simples(c,i,t){
    let Montante = c + (c * i * t) 
    console.log(`O montante no juros simples é ${Montante}`)
}

function Juros_Compostos(c,i,t){
    let Montante = c * Math.pow((1 + i), t)
    console.log(`O montante no juros Compostos é ${Montante}`)
}

/*function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

*/
Juros_simples(100,0.05,12)
Juros_Compostos(100,0.05,12)