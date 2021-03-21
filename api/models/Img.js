//Importando Módulos
const mongoose = require('mongoose')

//Definindo Schema
const Schema = mongoose.Schema

//Criando e configurando um novo Schema
const imgSchema = new Schema({
    link:{
        type:String,
        require:true
    }
})

//Definindo modelo de imagem baseado no Schema
const img = mongoose.model("img", imgSchema)

//Exportando Módulo
module.exports = img

