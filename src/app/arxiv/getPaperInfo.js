const http = require('http');
const xml_parser = require('./_xml_parser');
const config = require('config');

const options = config.get('options').option1;

let query = '';
for (key in options) {
  if (key=='search_query') {
    query += key + '='
    for (c in options[key]) {
      query += c + ':' + encodeURIComponent('"' + options[key][c] + '"') + '&';
    }
  } else {
    query += key + '=' + options[key] + '&';
  }
}

const url = 'http://export.arxiv.org/api/query?' + query;
console.log(url);


  http.get(url, (res) => {
  const { statusCode } = res;
  console.log(statusCode);

  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  
  res.on('end', (res) => {
    console.log(xml_parser(rawData));
  })
});
