//Importar Módulos
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//Config body parser
app.use(bodyParser.json())

//Importar Rotas
const index =          require('../routes/index')
const login =          require('../routes/login')
const photos =         require('../routes/photos')
const photo =          require('../routes/photo')

//Usar Rotas
app.use('/',index)
app.use('/',login)
app.use('/',photos)
app.use('/',photo)

//Importando Banco
require("../config/database")

module.exports = app