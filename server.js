const express = require('express');
const cors = require ('cors');
const moongose = require('mongoose');
const routes = require('./src/routes');
const cookieParser = require('cookie-parser');
const path = require('path')

const app = express();
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL
console.log("MONGO_URL:", MONGO_URL)

moongose.connect(MONGO_URL,{
    useNewUrlParser:true,    
    useUnifiedTopology:true,
}, function (err){
    if(err){
        console.log(err)
    }else{
        console.log('Conectado');
    }
})

app.use(cors()); //informar qual dominio pode consumir o dado da api

app.use(cookieParser());

app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, 'uploads')))

app.use(routes);

var porta = process.env.PORT || 3333;

app.listen(porta);

