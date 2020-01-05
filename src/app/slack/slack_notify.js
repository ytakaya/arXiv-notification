require('dotenv').config();
const { WebClient } = require('@slack/web-api');
const get_paper_info = require('../arxiv/getPaperInfo');
const papers2block = require('./_papers2block');

const token = process.env.OAUTH_ACCESS_TOKEN;
const channel = process.env.CHANNEL;

const web = new WebClient(token);

function slack_notify() {
  get_paper_info().then(papers => {
    if (papers.length != 0) {
      papers2block(papers).then(block => {
        (async () => {
          const result = await web.chat.postMessage({
            blocks: block,
            channel: channel,
          });
        })();
      })
    }
  })
};

exports = module.exports = slack_notify;
