function filtrarNumeros(array){
    return array.filter(item => typeof item === "number")
}

console.log(filtrarNumeros(["javascript", 1, "3", "web", 20]))
console.log(filtrarNumeros(["a", "c"]))