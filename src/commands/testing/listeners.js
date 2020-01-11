const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'listeners',
  description: 'Shows the loaded listeners.',
  category: 'testing',
  aliases: ['list'],
  // delete: true,
  hidden: true,
  run() {
    const list = [...this.client.listeners.values()].map(l => l.toString());
    // console.log(list);
    this.send("```" + JSON.stringify(list, null, 2) + "```", true);
  },
});
