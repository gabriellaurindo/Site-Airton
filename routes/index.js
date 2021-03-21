const express = require('express')
const router = express.Router()
const usuario = require('../api/models/User')
const bcrypt = require('bcrypt')



router.get('/', function (req, res,) {
   res.send({Descrição:'API REST Privada!', Version: '1.0.0'})
})
   


module.exports = router