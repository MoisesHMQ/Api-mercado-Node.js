const { request, response } = require('express');
const express = require('express')
const app = express();
var uuid = require('uuid');

const Produtos = [];

app.post('/Produtos/cadastro', (request, response) => {
    const validar = Produtos.find((validacao) => validacao.Produto == request.body.Produto)
        if (validar){
            return response.send("Status: leitura já Existe.")}
            
        Produtos.push({
            id: uuid.v4(),
            Produto: request.body.Produto
        })
        return response.send("Status: Livro Cadastrado")
    })

