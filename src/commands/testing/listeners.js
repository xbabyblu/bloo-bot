const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'listeners',
  description: 'Shows the loaded listeners.',
  category: 'testing',
  aliases: ['list'],
  // delete: true,
  hidden: true,
  run(message, args, call) {
    const list = [...this.client.listeners.values()].map(l => l.toString());
    // console.log(list);
    message.channel.send("```" + JSON.stringify(list, null, 2) + "```", true);
  },
});
