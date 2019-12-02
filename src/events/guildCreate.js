const format = require('../util/format');

module.exports = (client) => (guild) => {
  const prefix = client.options.prefix;
  // Bloo just joined a server. This is what she will say.
  const msg = format(
    'Hello I\'m Bloo!',
    `To learn about my commands use ${prefix}help`,
    // TODO: Bruh write a real message @_@
    `If you dont want me to voluntarily tune in to your conversations with responses to emotions, say **${prefix}settings** to enable/disable my listeners.`,
    'If you don\'t mind me listening, you can ignore the above message and I\'ll listen automatically until told otherwise! <3 ',
  );

  try {
    const channel = guild.channels.find(c => c.type === 'text');
    channel.send(msg);
  } catch(err) {
    console.log('Guild:', guild);
    console.log('Error:', err);
  };
};
