const express = require('express')
const router =  express.Router()
const auth =    require('../api/middlewares/authenticate')
const img = require('../api/models/Img')
const photos = require('../api/controllers/photos')


router.get('/photos', auth, function (req,res,){
    res.send({Acesso: 'Autorizado'})
  })

router.post('/photos', auth, (req,res)=>{
   const link = req.body.link 
   img({link}).save()
})


module.exports = router