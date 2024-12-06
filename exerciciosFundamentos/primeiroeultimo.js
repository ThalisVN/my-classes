function primeiroUltimo(Elemento){
    const primeiroElemento =Elemento.shift()
    const UltimoElemento =Elemento.pop()
        return console.log([primeiroElemento, UltimoElemento])
}

primeiroUltimo([1,6,7,3])
primeiroUltimo([7,14, 'ola'])
primeiroUltimo([-100, 'aplicativo,', 16])