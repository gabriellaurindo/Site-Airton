const jwt = require('jsonwebtoken')
const EnvConfig = require('../../config/vars/env')

function auth(req,res,next){
    const authHeader = req.headers.authorization
    jwt.verify(token, EnvConfig.secret, (err, decoded)=>{
        if (err) return res.status(401).send({error: 'Token inválido'})
    })
    
    next();

}

module.exports = auth