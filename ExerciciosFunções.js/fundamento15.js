function concessionaria(carro){
    switch(carro){
    case 'hatch':
        console.log('Compra efetuada com sucesso')
        break
    case "sedans": case "motocicletas": case"camionetes":
        console.log('tem certeza que não prefere este modelo')
        break
    default:
        console.log('Não trabalhamos com este tipo de automovel aqui')
        break
    }
}

concessionaria('sedans')
concessionaria('motocicletas')
concessionaria('camionetes')
concessionaria('hatch')
concessionaria('jeep')
