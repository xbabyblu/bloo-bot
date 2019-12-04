const format = require('../util/format');
const Alert = require('../services/alert');

module.exports = client => guild => {
  const prefix = client.options.prefix;
  // Bloo just joined a server. This is what she will say.
  const msg = format(
    "Hello I'm Bloo!",
    `To learn about my commands use ${prefix}help`,
    `If you dont want me to voluntarily tune in to your conversations with responses to emotions, say **${prefix}settings** to enable/disable my listeners.`,
    "If you don't mind me listening, you can ignore the above message and I'll listen automatically until told otherwise! <3 ",
  );

  try {
    const channel = guild.channels.find(c => c.type === 'text');
    // send alert to development server
    Alert.log(
      Alert.types.invited,
      client,
      format(`**Server:** ${guild.name}`, `**Members:** ${guild.memberCount}`, `**Owner:** ${guild.owner.user.tag}`),
      { thumbnail: guild.iconURL() },
    ).catch(err => client.emit('error', err));
    
    // send introduction message to new server
    channel.send(msg);
  } catch (err) {
    console.log('Guild:', guild);
    console.log('Error:', err);
  }
};
