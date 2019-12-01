const { Listener } = require("chop-tools");
const time = require("humanize-duration");

// the message.... if anyone literally says this imma smack them.
module.exports = new Listener({
  words: ["go", "away", "bloo"],
  category: "bloo",
  cooldown: 1,
  priority: 0,
  run(message) {
    const cId = message.channel.id;
    const duration = 30000;
    this.client.listeners.ignored.ignoreChannel(cId, duration);
    message.channel.send(
      `:c I'm sorry.... I wont look here for __${time(
        duration
      )}__... :pensive:`
    );
    console.log(
      `Ignoring channel ${message.channel.name} (${cId}) for ${time(duration)}`
    );
    return true;
  }
});
