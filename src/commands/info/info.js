const { Command } = require('chop-tools');
const chopToolsVersion = require('chop-tools/package.json').version;
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
  name: 'info',
  description: 'Shows some info about Bloo.',
  category: 'info',
  aliases: ['stats'],
  run(message) {
    const guilds = this.client.guilds.size;
    const users = this.client.users.size;
    const uptime = this.client.uptime;
    const uptimeFormatted = new Date(uptime).toISOString().substr(11, 8);
    const ping = Math.trunc(this.client.ws.ping);

    const embedData = {
      color: 13044507,
      footer: {
        text: `Version ${module.require('../../../package.json').version ||
          'latest'} (chop-tools ${chopToolsVersion})`,
      },
      thumbnail: {
        url: this.client.user.avatarURL(),
      },
      author: {
        name: 'Bloo Stats',
      },
      fields: [
        {
          name: 'Servers',
          value: `${guilds}`,
          inline: true,
        },
        {
          name: 'Users',
          value: `${users}`,
          inline: true,
        },
        {
          name: 'Uptime',
          value: `${uptimeFormatted}`,
          inline: true,
        },
        {
          name: 'Ping',
          value: `${ping}ms`,
          inline: true,
        },
      ],
    };
    const embed = new MessageEmbed(embedData);
    message.channel.send({ embed });
  },
});
