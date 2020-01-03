const express = require("express");
const app = express();
const paper_notify_interval = require('./app/slack/logics');

paper_notify_interval(24);

app.get("/", (req, res) => {
  res.status(200).send("Hello from express.");
});

app.listen(3000);
