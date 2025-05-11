const express = require('express')
const app = express()
const fs = require('fs')
const { MongoClient } = require('mongodb')
const path = require('path')
const livereload = require('livereload')
const connectLivereload = require('connect-livereload')

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'views', '.ejs'))
liveReloadServer.watch(path.join(__dirname, 'views'))
liveReloadServer.watch(path.join(__dirname, 'public'))


app.set('view engine', 'ejs')
app.set('views','./X/views')

app.use(connectLivereload())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

const url = 'mongodb://localhost:27017/'
const mongodb = new MongoClient(url)

async function conectar() {
    try {
        await mongodb.connect();
        const db = mongodb.db('Banco-X');
        const collection = db.collection('Usuarios');
        console.log('Conectado ao MongoDB!');
    } catch (erro) {
        console.error('Erro ao conectar ao MongoDB:', erro.message);
    }
}

conectar()
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views', 'homepage.html'))
})

app.get('/Criarconta',(req,res)=>{
    res.render('cadastro')
})
app.get('/Entrar',(req,res)=>{
    res.render('logar')
})

app.post('/Criarconta', (req,res)=>{
    const {nome,celular,email ,senha ,nascdata} = req.body

    const db = mongodb.db('Banco-X')
    const collection = db.collection('Usuarios')
    collection.insertOne({nome: nome ,celular: celular, email: email, senha: senha, datanascimento: nascdata})
    res.send('Usuario salvo com sucesso')
})

liveReloadServer.server.once('connection', ()=>{
    setTimeout(()=>{
        liveReloadServer.refresh('/')
        liveReloadServer.refresh( '/Criarconta')
        liveReloadServer.refresh('/Entrar')
    })
})

app.listen(3000, ()=>{
    console.log('server aberto')
})