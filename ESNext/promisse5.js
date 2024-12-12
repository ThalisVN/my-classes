function funcionarounão(valor, chanceErro) {
    return new Promise((res, rej) => {
        if(Math.random() < chanceErro) {
            rej("ocorreu um erro")
        } else {
            res(valor)
        }
    })
}

funcionarounão('testando...', 0.5)
.then( v => `valor: ${v}`)
.then( consol.log(v)),
err => console.log(`erro Esp.: ${err}`
)
.catch(err => console.log(`erro: ${err}`))
.then(() => console.log('fim!'))