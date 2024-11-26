function SoBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com '+ nota)
    }
}

SoBoaNoticia(8.1)
SoBoaNoticia(6.1)

function SeForVerdade(valor) {
    if(valor) {
        console.log('É Verdade '+ valor)
    }
}

SeForVerdade()
SeForVerdade(null)
SeForVerdade(undefined)
SeForVerdade(NaN)
SeForVerdade('')
SeForVerdade(0)
SeForVerdade(-1)
SeForVerdade(' ')
SeForVerdade('?')
SeForVerdade([])   
SeForVerdade([1,2])   
SeForVerdade({})   