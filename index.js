const {MongoClient} = require('mongodb')

const uri = 'mongodb://localhost:27017/'

const dbname = "meuBanco"

async function conectar(){
    const client = new MongoClient(uri)

    try{
        await client.connect(uri)
        console.log("✅ Conectado ao MongoDB!")

        const db = client.db(dbname)
        return db
    } catch(erro){
        console.error("Erro ao conectar:", erro)
    }
}

conectar()