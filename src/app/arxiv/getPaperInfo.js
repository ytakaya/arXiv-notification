const http = require('http');
const config = require('config');
const xml_parser = require('./_xml_parser');
const options2url = require('./_options2url');

function make_notification(data_list) {
  let result = '';
  for (let i=0; i < data_list.length; i++) {
    data = data_list[i];
    result += `title:  ${data.title}\n`;
    const authors = (authors_list) => {
      let authors = '';
      for (let j=0; j < authors_list.length; j++) {
        authors += authors_list[i].name;
        if (j != authors_list.length - 1) {
          authors += ', ';
        }
      }
      return authors;
    };
    result += `auhors: ${authors(data.author)}\n`;
    result += `url: ${data.id}\n`;
    if (i != data_list.length - 1) {
      result += '\n ---------- \n';
    }
  }
  return result;
};


const get_paper_info = async () => {
  const options = config.get('options').option1;
  const url = options2url(options);
  console.log(url);

  return await new Promise(resolve => {
    http.get(url, (res) => {
      const { statusCode } = res;
      console.log(statusCode);
    
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      
      res.on('end', (res) => {
        const text = make_notification(xml_parser(rawData));
        resolve(text);
      })
    });
  });
};


exports = module.exports = get_paper_info;

