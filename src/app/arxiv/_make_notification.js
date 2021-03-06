require('dotenv');
const insert_paper_info = require('../db/insert_paper_info');
const db_url = process.env.MONGO_URL;

const make_notification = async(paper_list) => {
  return await new Promise(resolve => {
    let result = [];

    (async () => {
      for (let i=0; i < paper_list.length; i++) {
        data = paper_list[i];
    
        const _authors = (authors_list) => {
          let authors = '';
          for (let j=0; j < authors_list.length; j++) {
            authors += authors_list[i].name;
            if (j != authors_list.length - 1) {
              authors += ', ';
            }
          }
          return authors;
        };
    
        await insert_paper_info(data, db_url).then(inserted => {
          if (inserted) {
            result = result.concat([
              {
                title: String(data.title).replace("\n", ""),
                authors: _authors(data.author),
                url: String(data.id)
              }
            ]);
          }
        })
      }
      resolve(result);
    })().then(result => {
      resolve(result);
    })
  });
};

exports = module.exports = make_notification;