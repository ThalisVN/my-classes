function quitanda(frutas){
    switch(frutas){
    case 'maça':
        console.log('Não vendemos essa fruta aqui')
        break
    case "kiwi":
        console.log('Estamos com escasses de kiwi')
        break
    case "melancia":
        console.log('Aqui esta, são 3 reais o quilo')
        break
     default:
        console.log('erro')
        break
    }
}

quitanda('maça')
quitanda('kiwi')
quitanda('melancia')
quitanda('Uva')