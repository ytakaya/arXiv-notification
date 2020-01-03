function make_notification(paper_list) {
  let result = '';
  for (let i=0; i < paper_list.length; i++) {
    data = paper_list[i];
    result += `title:  ${data.title}\n`;
    const authors = (authors_list) => {
      let authors = '';
      for (let j=0; j < authors_list.length; j++) {
        authors += authors_list[i].name;
        if (j != authors_list.length - 1) {
          authors += ', ';
        }
      }
      return authors;
    };
    result += `auhors: ${authors(data.author)}\n`;
    result += `url: ${data.id}\n`;
    if (i != paper_list.length - 1) {
      result += '\n ---------- \n';
    }
  }
  return result;
};

exports = module.exports = make_notification;