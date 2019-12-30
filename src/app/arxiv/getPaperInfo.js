const http = require('http');
const xml = require('xml-parse');

http.get('http://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=5', (res) => {
  const { statusCode } = res;
  console.log(statusCode);

  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  
  res.on('end', (res) => {
    parsedData = xml.parse(rawData)[2].childNodes;
    for (i in parsedData) {
      if (parsedData[i].tagName == 'entry') {
        let title = parsedData[i].childNodes[7].innerXML;
        let summary = parsedData[i].childNodes[9].innerXML;
        console.log(title);
      }
    }
  })
});
