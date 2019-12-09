const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'loglevel',
  description: 'Set the logging level.',
  hidden: true,
  cooldown: 0,
  run(message, args) {
    const log = this.client.logger;
    log.setLevel(args[0]);
    log.info('[Log] Logging Level set to', args[0], 'by', message.author.tag);
    message.channel.send('Done!');
  },
});
