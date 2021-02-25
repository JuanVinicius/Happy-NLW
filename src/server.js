//Importar uma dependencia
const express = require('express');
const path = require('path')
const pages = require('./pages.js')
//iniciar o expressjs
const server = express();
server
//Utilizando arquivos estaticos
.use(express.static('public'))
//config do template
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
//criar uma rota 
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)


//ligar o servidor
server.listen(5500)

