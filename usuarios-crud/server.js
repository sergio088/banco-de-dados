const { MongoClient, ObjectId } = require('mongodb')
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')


const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url)

async function conectar(){
 await client.connect()
 const db = client.db('Meu-banco')
 const collection = db.collection('usuarios')
 
}
console.log('conectado ao banco')
conectar()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/Cadastrar-se', (req, res)=>{
    res.sendFile(path.join(__dirname,'public','cadastro.html'))
})

app.post('/Cadastrar-se', async (req, res) =>{
    const {email, password, username, contry} = req.body;
    const db = client.db('Meu-banco')
    const collection = db.collection('usuarios')

    collection.insertOne({email, password, username, contry})
})

app.post('/', async (req, res)=>{
    const {user, pass} = req.body
    const db = client.db('Meu-banco')
    const collection = db.collection('usuarios')

    const foundUser = await collection.findOne({
        $or: [{username: user},{email: user}],
        password: pass
    })
    
    if(foundUser){
        res.status(200).send("logado")
    }else{
        res.status(401).send('erro')
    }
})


app.listen(3000, () =>{
    console.log('server aberto')
})
