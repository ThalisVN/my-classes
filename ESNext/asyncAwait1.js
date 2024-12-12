function esperarpor(tempo = 2000) {
    return new Promise (function(resolve) {
        setTimeout(() => resolve(), tempo);
    })
}

/*esperarpor(2000)    
.then(() => console.log('Executando Promisse... 1'))
.then(esperarpor)
.then(() => console.log('Executando Promisse... 2'))
.then(esperarpor)
.then(() => console.log('Executando Promisse...3'))
.then(esperarpor)
*/

async function exec() {
     await esperarpor(2000)
    console.log('async/away')
    await esperarpor(2000)
    console.log('async/away')
    await esperarpor(2000)
    console.log('async/away')
}

exec()