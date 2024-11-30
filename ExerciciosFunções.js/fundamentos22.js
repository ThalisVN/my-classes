function calcularmulta(mes, valor){
    if(mes > 0 && mes < 13){
        atraso = mes - 1
        return(valor *((1 + 0.05))**atraso).toFixed(2) 
    } else {
        return 'mês inválido.'
    }
}

console.log(calcularmulta(4,100))