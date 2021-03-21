const express = require('express')
const router = express.Router()
const usuario = require("../api/models/User")
const bcrypt = require("bcrypt")

router.post('/auth', function (req, res,) {
    const {email, senha} = req.body
    usuario.findOne({email}).then(user =>{
        if(user){
            bcrypt.compare(senha, user.senha, (err, success)=>{
                if(success){
                    user.senha = null
                    res.statusCode = 200
                    res.send({Acesso:"Autorizado"})
                }else{
                    res.statusCode = 401
                    res.send({Acesso:"Negado"})
                   
                }
            })    
        }else{
            
        }
        
    }) 
})
  


module.exports = router