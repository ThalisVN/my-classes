function Inverso(valor) {
    const tipo = typeof valor;
    if (tipo === "boolean") {
        return !valor;
    } else if (tipo === "number") {
        return -valor;
    } else {
        return `Booleano ou Número esperados, mas o parâmetro é do tipo ${tipo}`;
    }
}
 console.log(Inverso(true))
 console.log(Inverso('6'))
 console.log(Inverso(-2000))
 console.log(Inverso('programaçao'))
 console.log(Inverso(null))