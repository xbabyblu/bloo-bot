const { Listener } = require("chop-tools");
const time = require("humanize-duration");

// the message.... if anyone literally says this imma smack them.
module.exports = new Listener({
  // she can only have one group of words per listener >.> ;-;
  words: ["go", "away", "bloo"], 
  category: "bloo",
  cooldown: 1,
  priority: 0,
  run(message) {
    const cId = message.channel.id;
    const duration = 0;
    // This is the magic line \/ 
    this.client.listeners.ignored.ignoreChannel(cId, duration);
    message.channel.send(
      `:c I'm sorry.... I wont look here ${duration ? 'for ' + time(duration) : 'anymore'}... :pensive:`
    );
    console.log(
      `Ignoring channel ${message.channel.name} (${cId}) for ${time(duration)}`
    );
    return true;
  }
});


//  
// How about, in other channel, Bloo listen to #themutedchannel
// TODO: !b listen here you little shit

// this.client.listeners.ignored.ignoreChannel(channelID, Duration in miliseconds);
// or you could pass 0 and its forever ( forever = until she restarts )

/* module.exports = new Listener({
  words: ["leave", "bloo"],
  category: "bloo",
  cooldown: 1,
  priority: 0,
  run(message) {
    const cId = message.channel.id;
    const duration = 0;
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
module.exports = new Listener({
  words: ["leave", "me", "alone", "bloo"],
  category: "bloo",
  cooldown: 1,
  priority: 0,
  run(message) {
    const cId = message.channel.id;
    const duration = 0;
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
*/ 
