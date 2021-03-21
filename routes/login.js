//Importando Módulos
const express = require('express')
const auth = require('../api/middlewares/authenticate')
const router = express.Router()
const login = require('../api/services/login')

//Rota para verificação
router.post('/login', function (req, res,) {
    login(req,res)    
})
  


module.exports = router