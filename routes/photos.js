const express = require('express')
const router =  express.Router()
const auth =    require('../api/middlewares/authenticate')
const img = require('../api/models/Img')

router.get('/photos', auth, function (req,res,){
  photos = img.find();
  photos = photos.json  
  res.send(photos)
  })


module.exports = router