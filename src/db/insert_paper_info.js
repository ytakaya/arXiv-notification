require('dotenv').config();
const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGO_URL;

sample_data = {
  authors: 'takaya',
  title: 'sample_data3'
}

function insert_paper_info(data, db_url) {
  MongoClient.connect(db_url, (error, client) => {
    const db = client.db('arxiv');

    db.collection("papers", (error, collection) => {
      collection.find({title: {$regex: data.title}}).toArray((error, docs) => {
        if (docs.length == 0) {
          console.log("Inserted!!");
          collection.insertOne(data, (error, result) => {
          })
        } else {
          console.log("Already inserted.");
        }
        client.close();
      });
    });
  });
}


insert_paper_info(sample_data, url);