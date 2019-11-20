const { Command } = require('chop-tools');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
  name: 'cuddle',
  description: 'well... it\'s what it says',
  args: ['target'],
  delete: true,
  category: 'interactions',
  run(message, args, call) {
    const target = message.mentions.members.first();
    if (!target) {
      message.channel.send("I couldn't find that person.");
      return;
    }
    if (target.user.bot) return;

    const embedData = {
      author: { name: message.author.username, iconURL: message.author.avatarURL() },
      footer: {
        text: '<3',
        icon_url: this.client.user.avatarURL(),
      },
      description: `\n${call.callerTag} has decided that they want to cuddle you. Hope I didn't make it weird o3o :hugging: `,
    };

    const embed = new MessageEmbed(embedData);
    embed.setImage('https://media1.tenor.com/images/8f8ba3baeecdf28f3e0fa7d4ce1a8586/tenor.gif?itemid=12668750');
    target.user.send({ embed });
  },
});
