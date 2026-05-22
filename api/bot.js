const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
const features = require("../features");

const app = express();
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

features.register(bot);

app.use(express.json());

app.post("/api/bot", (req, res) => {
  bot.processUpdate(req.body);
  res.send("OK");
});

module.exports = app;
