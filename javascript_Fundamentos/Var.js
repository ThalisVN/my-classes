{ 
    { 
        {
             { var sera = "sera???" 
                console.log(sera)
             } 
        } 
    } 
}


console.log(sera)

function teste() {
    var local= 123
    console.log(local)

}

teste()
//console.log(local) não funciona pq a variael foi definida dentro de uma função 

var numero = 1
{
    var numero = 2
    console.log("dentro", numero)// so existe escorpo dentro de funções 
}
console.log("fora", numero)// vai retornar o valor 2 pq só temos um escorpo