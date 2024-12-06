function Pares(numeros) { 
    return numeros.filter((numero, indice) => { 
    const numeroPar = numero % 2 === 0 
    const indicePar = indice % 2 === 0 
    return numeroPar && indicePar 
    }) 
    }

    console.log(Pares([1,2,3,4]))
    console.log(Pares([10,70,22,43]))