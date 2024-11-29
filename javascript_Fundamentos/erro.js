function tratarerroelancar(erro) {
    throw new error('ERRO  404')
}


function ImprimirNomeGritando(obj) {    
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarerroelancar(e)
    } finally {
        console.log('final')
    } 
}

    let obj = { nome: 'roberto' }
    ImprimirNomeGritando(obj)