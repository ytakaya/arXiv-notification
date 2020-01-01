function options2url(options) {
  let query = '';

  for (key in options) {
    if (key=='search_query') {
      query += key + '='
      prefixes = Object.keys(options[key]);
      for (let i=0; i<prefixes.length; i++) {
        prefix = prefixes[i]
        query += prefix + ':' + encodeURIComponent('"' + options[key][prefix] + '"');
        if (i == prefixes.length - 1) {
          query += '&';
        } else {
          query += '+AND+';
        }
      }
    } else {
      query += key + '=' + options[key] + '&';
    }
  }

  const url = 'http://export.arxiv.org/api/query?' + query;
  return url;
}

exports = module.exports = options2url;