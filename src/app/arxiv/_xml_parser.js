const parseString = require('xml2js').parseString;

function xml_parser(rawData) {
  let ret;
  parseString(rawData, function (err, result) {
    ret = result.feed.entry;
  });
  return ret;
}

exports = module.exports = xml_parser;