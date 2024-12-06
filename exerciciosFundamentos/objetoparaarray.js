function objetoparaarry(objeto){
    const resultado = []
    for (let chave in objeto)
        resultado.push([chave, objeto[chave]])
    return resultado
}
    

console.log(objetoparaarry({
        nome: 'Maria',
        profissao: 'dev. Junior'
    }))

    console.log(objetoparaarry({
        codigo: '1111',
        preço: '1000'
    }))