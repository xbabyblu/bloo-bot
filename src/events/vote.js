const Bloo = require('../models/bloo');

module.exports = client => async vote => {
  client.logger.info('[Event] New vote! ->', vote);

  // FIXME: lazy try catch
  try {
    const config = await Bloo.findOne({}).exec();

    const guild = client.guilds.get(config.logs.guild);
    const channel = guild.channels.get(config.logs.channel);

    channel
      .send('Bloo got a new vote!\n```' + JSON.stringify(vote, null, 2) + '```')
      .catch(err => client.emit('error', err));

  } catch (err) {
    client.emit('error', err);
  }
};
