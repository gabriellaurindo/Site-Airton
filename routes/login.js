//Importando Módulos
const express = require('express')
const auth = require('../api/middlewares/authenticate')
const router = express.Router()
const login = require('../api/services/login')

//Rota Para Verificação
router.post('/login', function (req, res,) {
    login(req,res)    
})
  
//Exportando Rota de Login
module.exports = router