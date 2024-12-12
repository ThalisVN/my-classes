/*
setTimeout(function() {
    console.log('executando callback')

    setTimeout(function() {
        console.log('executando callback')
    },2000)
}, 2000);

*/

function esperarpor(tempo = 2000) {
    return new Promise (function(resolve) {
        setTimeout(function() {
            console.log('executando Promisse')
            resolve()
        }, tempo);
    })
}

let p = esperarpor(3000).then(texto => console.log(texto))
.then(() => esperarpor())
.then(esperarpor)