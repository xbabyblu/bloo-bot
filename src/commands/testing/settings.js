const { Command } = require("chop-tools");

module.exports = new Command({
  name: "settings",
  description: "The settings for this server.",
  category: "testing",
  aliases: ["config", "configuration", "configurate"],
  hidden: true,
  run(message, args, call) {
    const settings = JSON.stringify(call.settings, null, 2);
    message.channel.send("The settings for this server: ```" + settings + "```");
  }
});
