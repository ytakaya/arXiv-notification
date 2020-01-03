const http = require('http');
const config = require('config');
const xml_parser = require('./_xml_parser');
const options2url = require('./_options2url');
const make_notification = require('./_make_notification');


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

