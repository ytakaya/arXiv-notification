require('dotenv').config();
const { WebClient } = require('@slack/web-api');
const get_paper_info = require('../arxiv/getPaperInfo');

const token = process.env.OAUTH_ACCESS_TOKEN;
const channel = process.env.CHANNEL;

const web = new WebClient(token);

function slack_notify() {
  get_paper_info().then(text => {
    (async () => {
      const result = await web.chat.postMessage({
        text: text,
        channel: channel,
      });
    })();
  })
};

exports = module.exports = slack_notify;
