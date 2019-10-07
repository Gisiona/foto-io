const express = require('express');
const routes = require('./routers');
const mongoose = require('mongoose');

const app = express();

const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };


mongoose.connect(URL, options);
mongoose.set('useCreateIndex', true);


mongoose.connection.on('error', (erro) => {
    console.log('ERRO NA CONEXÃO COM O BANCO DE DADOS ' + erro);
});

mongoose.connection.on('connected', () => {
    console.log('APLICAÇÃO CONECTADA COM SUCESSO DO BANCO DE DADOS ');
});

mongoose.connection.on('disconnected', () => {
    console.log('APLICAÇÃO DISCONECTADA COM SUCESSO DO BANCO DE DADOS ');
});

console.log("passei aqui");

app.use(express.json());

app.use(routes);

app.listen(5000);