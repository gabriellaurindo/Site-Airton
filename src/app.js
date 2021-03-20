//Importar Módulos
const express = require('express')
const app = express()


//Importar Rotas
const index = require('../routes/index');


//Usar Rotas
app.use('/',index)


module.exports = app