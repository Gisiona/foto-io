

const express = require('express');

const app = express();

app.get('/',  (req, res) => {
    return res.json({mensagem: 'Olá seja bem vindo a plataforma de venda e distribuição de fotos,  foto.io'});
});

app.listen(5000);