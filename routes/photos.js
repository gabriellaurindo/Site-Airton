//Importando Módulos
const express = require('express')
const router =  express.Router()
const auth =    require('../api/middlewares/authenticate')
const img = require('../api/models/Img')

//Rota Para Acessar Fotos
router.get('/photos', auth, function (req,res,){
    res.send({Acesso: 'Autorizado'})
  })

//Rota Para Postar Fotos
  router.post('/photos', auth, (req,res)=>{
    res.send({Situação: "Salvo"})
 })

//Exportando Rota de Fotos
module.exports = router