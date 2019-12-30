require('dotenv').config();
const { WebClient } = require('@slack/web-api');

const token = process.env.OAUTH_ACCESS_TOKEN;
const channel = process.env.CHANNEL;

const web = new WebClient(token);

(async () => {
  const result = await web.chat.postMessage({
    text: 'Hello world!',
    channel: channel,
  });
})();