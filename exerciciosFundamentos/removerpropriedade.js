function removepropriedade(obj, prop) {
    const copia = Object.assign({}, obj); 
    delete copia[prop];
    return copia; 
}

console.log(removepropriedade({ a: 1, b: 2 }, 'a'));

console.log(removepropriedade({
    id: 20,
    nome: 'caneta',
    descricao: null 
}, 'descricao'))