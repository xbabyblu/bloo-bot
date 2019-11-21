const { Command } = require('chop-tools');

const timedMessages = require('../../util/timedMessages');

module.exports = new Command({
  name: 'timed',
  description: 'timed messages test',
  hidden: true,
  run(message) {
    // [msg, time in miliseconds to delete];
    const m = [
      ['hello', 2000],
      ['woo woo woo', 5000]
    ];
    timedMessages(message.channel, m).catch(console.log);
  },
});
