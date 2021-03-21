function auth(req,res,next){
    if(req.body.nome === 'Gabriel' && req.body.senha ==='123'){
        res.statusCode = 200;
        res.send()
        next()
    }else{
        res.statusCode = 401
        res.send()
    }
   
}

module.exports = auth