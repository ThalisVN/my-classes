/* Operador ... rest(juntar)/spread(espalhar)
usar rest com paramentro de funçao
*/

//Usar spreas com Objeto
const Funcionario = {nome: 'Maria', Salario: 1412.00}
const clone = {ativo: true, ...Funcionario}
console.log(clone)

// uasr spread com array
const grupoA =['João', 'Pedro', 'GLoria']
const grupoFInal= ['Maria','Rafaela', ...grupoA]

console.log(grupoFInal)