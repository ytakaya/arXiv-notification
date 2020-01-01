function options2url(options) {
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
  return url;
}

exports = module.exports = options2url;