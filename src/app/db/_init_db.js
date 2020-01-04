require('dotenv').config();
const MongoClient = require("mongodb").MongoClient;

const url = process.env.MONGO_URL;

MongoClient.connect(url, (error, client) => {
  const db = client.db('arxiv');
  db.createCollection("papers", (error, collection) => {
    client.close();
  })
});