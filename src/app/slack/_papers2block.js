const papers2block = async(papers) => {
  let component = [];
    for (i=0; i<papers.length; i++) {
      component = component.concat([{
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*" + papers[i].title + "*\n" + papers[i].authors + "\n" + papers[i].url
        }
      }])
    }

  const block = [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "新しい論文が投稿されました。"
      }
    },
    {
      "type": "divider"
    },
    ...component
  ];
  return block;
};

exports = module.exports = papers2block;