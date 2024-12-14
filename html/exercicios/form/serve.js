const express = require ('express')
const app = express()
const bodyParser = require('bodr-parse')

app.use(bodyParser.urlencoded({ extends:true}))

app.post('/usuarios',(req, resp) => {
        console.log(req.body)
        resp.send(<h1>'parabens Usuario incluido'</h1>)
    })

app.post('/usuarios/:id',(req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send(<h1>'parabens! Usuario alterado!'</h1>)
})
 
app.listen(3003)