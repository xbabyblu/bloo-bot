const { Command } = require("chop-tools");

module.exports = new Command({
  name: "eval",
  description: "eval stuff",
  category: "testing",
  hidden: true,
  async run(message, args, call) {
    // lets double check just to be sure, haha
    if (message.author.id in this.client.options.owners) {
      // eslint-disable-next-line no-eval
      const result = eval(call.content);
      message.channel.send("Done.");
      message.channel.send(result).catch(() => {/* meh */});
    }
  }
});
