const fs = require("fs");

const features = {};

fs.readdirSync(__dirname)
  .filter(f => f.endsWith(".js") && f !== "index.js")
  .forEach(file => {
    const mod = require(`./${file}`);
    features[mod.command] = mod;
  });

function register(bot) {
  Object.values(features).forEach(f => {
    bot.onText(new RegExp(`^/${f.command}`), f.execute);
  });
}

module.exports = { register };
