const { Command } = require('chop-tools');

const Alert = require('../../services/alert');
const Bloo = require('../../models/bloo');
const getChannelsInMessage = require('../../util/getChannelsInMessage');

module.exports = new Command({
  name: 'alert',
  description: 'Alerts!!!!!!!!!!!',
  category: 'testing',
  // delete: true,
  hidden: true,
  async run(message, args, call) {
    let [channel] = getChannelsInMessage(message);
    // send a test alert
    if (args[0] && ['send', 'test', 'testing'].includes(args[0].toLowerCase())) {
      Alert.critical(Alert.types.feedback, this.client, '***Yeehaw!***')
        .catch(err => this.client.emit('error', err));
      return;
    }
    // configure the channel
    const blooConfig = await Bloo.findOne({}).exec();
    if (channel) {
      blooConfig.alerts.channel = channel.id;
      blooConfig.alerts.guild = channel.guild.id;
    } else {
      blooConfig.alerts.channel = message.channel.id;
      blooConfig.alerts.guild = message.guild.id;
      channel = message.channel;
    }
    await blooConfig.save()
    message.channel.send(`Alerts channel set to: ${channel}`);
  },
});
