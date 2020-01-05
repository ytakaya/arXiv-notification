require('dotenv').config();
const { WebClient } = require('@slack/web-api');
const get_paper_info = require('../arxiv/getPaperInfo');

const token = process.env.OAUTH_ACCESS_TOKEN;
const channel = process.env.CHANNEL;

const web = new WebClient(token);

function slack_notify() {
  get_paper_info().then(papers => {
    if (papers.length != 0) {
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

      (async () => {
        const result = await web.chat.postMessage({
          blocks: block,
          channel: channel,
        });
      })();
    }
  })
};

exports = module.exports = slack_notify;
