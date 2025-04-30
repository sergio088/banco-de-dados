const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'homepage.html'))
})

app.listen(3000, ()=>{
    console.log('server aberto')
})