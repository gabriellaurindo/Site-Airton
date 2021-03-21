const express = require('express')
const router =  express.Router()
const auth =    require('../api/controllers/authenticate')


router.post('/photos', auth, function (req,res,){
    res.send('Hello World!!')
  })


module.exports = router