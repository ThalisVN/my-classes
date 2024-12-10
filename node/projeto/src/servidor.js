const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('./body-parser')
const bancodedados = require('./bancodedados')
const { extend } = require('lodash')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancodedados.getprodutos())
})

app.get('/produtos/id', (req, res, next) =>{
    res.send(bancodedados.getprodutos(req.params.id))
})

app.post('/produtos',(req, res, next) =>{
   const produto = bancodedados.salvar({
    nome: req.body.nome,
    Preço: req.body.Preço,
   })
   res.send(produto) //json
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})
