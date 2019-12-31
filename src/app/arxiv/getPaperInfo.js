const http = require('http');
const xml_parser = require('./_xml_parser');

const options = {
  search_query: "au:Fredrikson",
  start: "0",
  sortBy: "submittedDate",
  max_results: "1"
}

let query = '';
for (key in options) {
  let tmp = key + '=' + options[key] + '&';
  query += tmp;
}

const url = 'http://export.arxiv.org/api/query?' + query;


  http.get(url, (res) => {
  const { statusCode } = res;
  console.log(statusCode);

  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  
  res.on('end', (res) => {
    console.log(xml_parser(rawData));
  })
});
