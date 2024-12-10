const url = 'https://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(Response => {
    const funcionarios = Response.data
    console.log(funcionarios)
})