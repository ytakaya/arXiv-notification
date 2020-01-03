require('dotenv').config();
const MongoClient = require("mongodb").MongoClient;

const url = process.env.MONGO_URL;

MongoClient.connect(url, (error, client) => {
  var db = client.db('sample');
  db.createCollection("test", (error, collection) => {
    client.close();
  })
});