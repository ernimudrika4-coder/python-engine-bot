const TelegramBot = require("node-telegram-bot-api");
const features = require("../features");

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!TOKEN) {
  console.error("TELEGRAM_BOT_TOKEN missing");
}

const bot = new TelegramBot(TOKEN);

// register commands
features.register(bot);

module.exports = async (req, res) => {
  try {
    if (req.method === "POST") {
      await bot.processUpdate(req.body);
      return res.status(200).send("OK");
    }

    return res.status(200).send("Bot is alive");
  } catch (err) {
    console.error("Webhook error:", err.message);
    return res.status(200).send("OK");
  }
};
