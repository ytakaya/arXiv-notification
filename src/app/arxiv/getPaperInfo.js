const http = require('http');
const config = require('config');
const xml_parser = require('./_xml_parser');
const options2url = require('./_options2url');

const options = config.get('options').option1;
const url = options2url(options);
console.log(url);

function make_notification(data_list) {
  for (let i=0; i < data_list.length; i++) {
    data = data_list[i];
    console.log('title: ' + data.title);
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
    console.log('authors: ' + authors(data.author));
    console.log('url: ' + data.id);
  }
};


http.get(url, (res) => {
  const { statusCode } = res;
  console.log(statusCode);

  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  
  res.on('end', (res) => {
    // console.log(xml_parser(rawData));
    make_notification(xml_parser(rawData));
  })
});
