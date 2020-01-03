const slack_notify = require('./slack_notify');

function paper_notify_interval(hours) {
  setInterval(() => {
    slack_notify();
  }, hours * 60 * 60 * 1000);
};

exports = module.exports = paper_notify_interval;
