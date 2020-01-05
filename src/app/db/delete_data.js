require('dotenv').config();
const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGO_URL;

function delete_all_data(db_url) {
  MongoClient.connect(db_url, (error, client) => {
    const db = client.db('arxiv');
    let delete_n = 0;

    db.collection("papers", (error, collection) => {    
      collection.find({}).toArray((error, docs) => {
      for (let doc of docs) {
          collection.deleteMany(
            { title: doc.title },
            (error, obj) => {
            }
          );
      }
      client.close();
      });
    });
  });
}


delete_all_data(url);