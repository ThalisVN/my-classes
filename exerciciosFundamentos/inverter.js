function inverter(objeto) {
const objetoinvertido = Object.entries(objeto).map(parchavevalor => parchavevalor.reverse())
return Object.fromEntries(objetoinvertido)
}

console.log(inverter({a:1, b:2, c: 3, d: 4}))