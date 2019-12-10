const { Command } = require('chop-tools');

const Bloo = require('../../models/bloo');

module.exports = new Command({
  name: 'loglevel',
  description: 'Set the logging level.',
  hidden: true,
  cooldown: 0,
  run(message, args) {
    const log = this.client.logger;
    const newLevel = args[0] || 'info';
    log.setLevel(newLevel);
    log.info('[Log] Logging Level set to', newLevel, 'by', message.author.tag);
    // set log level to db
    Bloo.findOne({})
      .exec()
      .then(config => {
        if (!config) return;
        config.loglevel = newLevel;
        // eslint-disable-next-line consistent-return
        return config.save();
      })
      .then(() => {
        message.channel.send('Done!');
      })
      .catch(this.client.logger.error);
  },
});
