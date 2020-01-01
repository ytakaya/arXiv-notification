const http = require('http');
const config = require('config');
const xml_parser = require('./_xml_parser');
const options2url = require('./_options2url');

const options = config.get('options').option1;
const url = options2url(options);
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
