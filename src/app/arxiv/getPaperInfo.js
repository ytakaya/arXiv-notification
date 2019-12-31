const http = require('http');
const xml_parser = require('./_xml_parser');

http.get('http://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=5', (res) => {
  const { statusCode } = res;
  console.log(statusCode);

  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  
  res.on('end', (res) => {
    console.log(xml_parser(rawData));
  })
});
