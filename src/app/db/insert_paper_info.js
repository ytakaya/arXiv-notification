require('dotenv').config();
const MongoClient = require("mongodb").MongoClient;

const insert_paper_info = async (data, db_url) => {
  return await new Promise(resolve => {
    MongoClient.connect(db_url, (error, client) => {
      const db = client.db('arxiv');

      let authors = [];
      for (let j=0; j < data.author.length; j++) {
        authors = authors.concat(data.author[j].name);
      }

      const insert_data = {
        url: String(data.id),
        published: String(data.published),
        title: String(data.title),
        authors: authors
      };
  
      db.collection("papers", (error, collection) => {
        collection.find({title: {$regex: insert_data.title}}).toArray((error, docs) => {
          if (docs.length == 0) {
            console.log("Inserted!!");
            collection.insertOne(insert_data, (error, result) => {
            })
            resolve(true);
          } else {
            console.log("Already inserted.");
            resolve(false);
          }
          client.close();
        });
      });
    });
  })
}


exports = module.exports = insert_paper_info;