module.exports = {
  command: "start",
  execute: (bot, msg) => {
    bot.sendMessage(msg.chat.id, "Bot hidup");
  }
};
