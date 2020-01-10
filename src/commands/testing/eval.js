const { Command } = require("chop-tools");

const Profile = require("../../models/profile");

function sum(currentLevel) {
  let total = 0;
  for (let i = 1; i <= (currentLevel || 5); i++) {
    total += i * (10 + i);
  }
  return total;
}

module.exports = new Command({
  name: "eval",
  description: "eval stuff",
  category: "testing",
  hidden: true,
  async run(message, args, call) {
    const result = eval(call.content);
    message.channel.send("Done.");
    message.channel.send(result).catch(() => {/* meh */});
  }
});
