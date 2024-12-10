const schedule = require('node-schedule')

// Tarefa 1: Executa a cada 5 segundos às 12h nas terças-feiras
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// Cancela a Tarefa 1 após 2 segundos
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 2000)

// Configuração da Regra para Tarefa 2
const regra = new schedule.RecurrenceRule() // Corrigido o nome da classe
regra.dayOfWeek = [new schedule.Range(1, 5)] // Segunda a sexta-feira
regra.hour = 12 // 12h
regra.second = 30 // No segundo 30 de cada minuto

// Tarefa 2: Executa de acordo com a regra
const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})
