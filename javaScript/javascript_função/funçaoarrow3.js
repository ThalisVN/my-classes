let comparaComThis = function (param) {
    console.log(this === this)
}

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisarrow = param => console.log(this === param)
comparaComThisarrow(global)
comparaComThisarrow(module.exports)

comparaComThisarrow = comparaComThisarrow.bind(obj)
comparaComThisarrow(obj)
comparaComThisarrow(module.exports)