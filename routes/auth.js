//Importando Módulos
const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt")
const usuario = require("../api/models/User")
const jwt = require('jsonwebtoken')
const EnvConfig = require ('../config/env.json')

//Rota para verificação
router.post('/auth', function (req, res,) {
    const {email, senha} = req.body
    usuario.findOne({email}).then(user =>{
        if(user){
            bcrypt.compare(senha, user.senha, (err, success)=>{
                if(success){
                    user.senha = null
                    res.statusCode = 200
                    const token = jwt.sign({id : user.id}, EnvConfig.secret, {
                        expiresIn : 86400
                    })
                    res.send({Acesso:"Autorizado", user, token})
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