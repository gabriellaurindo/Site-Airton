//Importando módulos
const app = require("./app")
const mongoose = require("mongoose")

//Cofig banco mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/site-airton', {
    useNewUrlParser: true , 
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB Conectado...");
}).catch((err)=>{
    console.log("Houve um erro: " + err);
});


//Subir Servidor
app.listen(3000)