const { Command } = require('chop-tools');

const timedMessages = require('../../util/timedMessages');

module.exports = new Command({
  name: 'timed',
  description: 'timed messages test',
  hidden: true,
  run(message, args) {
    // [msg, time in miliseconds to delete];
    const messages = [];
    for (let i = 0; i < args.length; i++) {
      messages.push([args[i], i * 1000]);
    }
    timedMessages(message.channel, messages).catch(console.log);
  },
});
