const format = require('../util/format');
const Alert = require('../services/alert');
const { SUPPORT_SERVER } = require('../BLOO_GLOBALS');

module.exports = client => guild => {
  const prefix = client.options.prefix;
  client.logger.info('[Event] Bloo joined a new server! ->' + guild.name);
  // Bloo just joined a server. This is what she will say.
  const msg = format(
    "Hello I'm Bloo!",
    `To learn about my commands use ${prefix}help`,
    `If you dont want me to voluntarily tune in to your conversations with responses to emotions, say **${prefix}settings** to enable/disable my listeners.`,
    "If you don't mind me listening, you can ignore the above message and I'll listen automatically until told otherwise! <3 ",
    `Feel free to join my support server! ${SUPPORT_SERVER} :blue_heart:`,
  );

  try {
    const channel = guild.channels.find(c => c.type === 'text');
    // send alert to development server
    Alert.log(
      Alert.types.invited,
      client,
      format(
        `**Server:** ${guild.name}`,
        `**Members:** ${guild.memberCount}`,
        `**Owner:** ${guild.owner.user.tag}`,
      ),
      { thumbnail: guild.iconURL() },
    ).catch(err => client.emit('error', err));

    // send introduction message to new server
    channel.send(msg).catch(err => {
      // If she can't send the message to the server, she DMs the owner of the server.
      client.emit('error', err);
      guild.owner.send(msg).catch(err2 => client.emit('error', err2));
    });
  } catch (err) {
    err.stack += `\n\nGuild: ${guild}`;
    throw err;
  }
};
