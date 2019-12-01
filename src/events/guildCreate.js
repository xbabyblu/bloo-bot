const format = require('../util/format');

module.exports = (client) => (guild) => {
  const prefix = client.options.prefix;
  // Bloo just joined a server. This is what she will say.
  const msg = format(
    'Hello I\'m Bloo.',
    `To learn about my commands use ${prefix}help`,
    // TODO: Bruh write a real message @_@
    `DO YOU LIKE EMOTIONS? If u dont **${prefix}settings** to enable/disable my listeners. >.>`,
    'c:',
  );

  try {
    const channel = guild.channels.find(c => c.type === 'text');
    channel.send(msg);
  } catch(err) {
    console.log('Guild:', guild);
    console.log('Error:', err);
  };
};
