const express = require('express');
const cors = require ('cors');
const moongose = require('mongoose');
const path = require('path')
const routes = require('./src/routes');

const app = express();
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL

moongose.connect(MONGO_URL,{
    useNewUrlParser: true,    
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, function (err){
    if(err){
        console.log(err)
    }else{
        console.log('Conectado');
    }
})

app.use(cors()); //informar qual dominio pode consumir o dado da api

app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, 'uploads')))

app.use(routes);

const porta = process.env.PORT;

app.listen(porta);

