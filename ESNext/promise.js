 function Falardeposde(segundos, frase){
    return  new Promise((resolve) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
 }

 Falardeposde(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outrafrase => console.log(outrafrase))
    