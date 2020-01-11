const { Command } = require('chop-tools');

const Bloo = require('../../models/bloo');
const getChannelsInMessage = require('../../util/getChannelsInMessage');

module.exports = new Command({
  name: 'logs',
  description: 'Set the logs channel for Bloo globally. (OWNER ONLY)',
  category: 'admin',
  aliases: ['log'],
  hidden: true,
  async run(message) {
    let [channel] = getChannelsInMessage(message);
    // configure the channel
    const blooConfig = await Bloo.findOne({}).exec();
    if (channel) {
      blooConfig.logs.channel = channel.id;
      blooConfig.logs.guild = channel.guild.id;
    } else {
      blooConfig.logs.channel = message.channel.id;
      blooConfig.logs.guild = message.guild.id;
      channel = message.channel;
    }
    await blooConfig.save()
    this.send(`Logs channel set to: ${channel}`);
  },
});
