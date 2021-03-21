//Importar Módulos
const express = require('express')
const app = express()
const bodyParser = require('body-parser')



//Config body parser
app.use(bodyParser.json())

//Importar Rotas
const index =          require('../routes/index');
const auth =          require('../routes/auth')
const photos =         require('../routes/photos')

//Usar Rotas
app.use('/',index)
app.use('/',auth)
app.use('/',photos)


module.exports = app