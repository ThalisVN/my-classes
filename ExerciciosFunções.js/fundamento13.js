function diadasemana(dia) {
    switch (dia) {
        case 1:
            return "Fim de semana"
        case 2: case 3: case 4: case 5: case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia inválido"
    }
}

console.log(diadasemana(1));
console.log(diadasemana(2));
console.log(diadasemana(3));
console.log(diadasemana(4));
console.log(diadasemana(5));
console.log(diadasemana(6));
console.log(diadasemana(7));
console.log(diadasemana('a'));