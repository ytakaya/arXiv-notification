const parseString = require('xml2js').parseString;

function xml_parser(rawData) {
  parseString(rawData, function (err, result) {
    console.log(result.feed.entry);
  });
  return parseString;
}

exports = module.exports = xml_parser;