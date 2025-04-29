/*const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
  await client.connect();
  const db = client.db("meuBanco");
  const collection = db.collection("usuarios");

  await collection.insertOne({ nome: "Maria", idade: 22 });

  const resultado = await collection.find().toArray();
  console.log(resultado);

  await client.close();
}

main();*/
