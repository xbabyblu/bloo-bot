const { Listener } = require('chop-tools');
const time = require('humanize-duration');

module.exports = new Listener({
  words: ['bloo', "(no|dont|don't)", 'listen', 'here'],
  category: 'bloo',
  cooldown: 1,
  priority: 0,
  run(message) {
    const cId = message.channel.id;
    // 5 min
    const duration = 5 * 60 * 1000;
    this.client.listeners.ignored.ignoreChannel(cId, duration);
    this.send(`:c I'm sorry.... I wont look here ${duration ? 'for ' + time(duration) : 'anymore'}... :pensive:`);
    this.client.logger.info(`Ignoring channel ${message.channel.name} (${cId}) for ${time(duration)}`);
    return true;
  },
});
