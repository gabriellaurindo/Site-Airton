const express = require('express')
const router =  express.Router()
const auth =    require('../api/middlewares/authenticate')
const img = require('../api/models/Img')


router.post('/photos', auth, (req,res)=>{
    res.send({Situação: "Salvo"})
 })


 module.exports = router