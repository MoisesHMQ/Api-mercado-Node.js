const { request, response } = require('express');
const express = require('express')
const app = express();
var uuid = require('uuid');

const Produtos = [];

app.post('/Produtos/cadastro', (request, response) => {
    const validar = Produtos.find((validacao) => validacao.Produto == request.body.Produto)
        if (validar){
            return response.send("Status: Produto já foi Cadastrado.")}
            
        Produtos.push({
            id: uuid.v4(),
            Produto: request.body.Produto
        })
        return response.send("Status: Produto Cadastrado com Sucesso")
    })

app.get('/Produtos', (request, response) => {
    console.log(request.body);
    return response.json(Produtos)
})

app.delete('/excluir/Produtos', (request,response) => {
    const id = Produtos.indexOf('id');
    const excluirProdutos = Produtos.splice(id,1)
            
    return response.send(excluirProdutos)
    })

const cliente = [];

app.post('/cliente/cadastro', (request, response) => {
    const validar = cliente.find((validar) => validar.cpf == request.body.cpf)
        if (validar){
            return response.send("Status: Cpf já Existe.")}
            
        cliente.push({
            id: uuid.v4(),
            cpf: request.body.cpf,
            senha: request.bory.senha
        })
        return response.send("Status: Cliente Cadastrado")
    })

app.post('/login/cliente', (request, response) => {
    const logincliente = cliente.find((clientes) => clientes.cpf == request.body.cpf && clientes.senha == request.body.senha)
    if(logincliente){
        return response.send("status: Seja bem vindo")
    }
    else{
        return response.send("erro: cpf ou Senha incorretos")
    }
})