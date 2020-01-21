const { Listener } = require('chop-tools');

const GuildSettings = require('../../models/guildSettings');
const send = require('../../services/safeSend');

// the message.... if anyone literally says this imma smack them.
module.exports = new Listener({
  words: ['go', 'away', 'bloo',],
  category: 'bloo',
  cooldown: 1,
  priority: 0,
  async run(message) {
    let settings = await GuildSettings.findOne({ guildId: message.guild.id }).exec();

    if (!settings) {
      settings = new GuildSettings({ guildId: message.guild.id });
    }

    if (settings.listenerSettings.ignored.indexOf(message.channel.id) === -1) {
      settings.listenerSettings.ignored.push(message.channel.id);
    }

    await settings.save();

    this.client.listeners.ignored.ignoreChannel(message.channel.id, 0);
    send(message)(`:c I'm sorry.... I wont look here anymore... :pensive:`);
    return true;
  },
});
