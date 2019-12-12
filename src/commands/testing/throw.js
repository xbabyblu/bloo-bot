const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'throw',
  description: 'Throws an error.',
  category: 'testing',
  args: ['type'],
  hidden: true,
  usage: '{type}',
  examples: ['exception', 'rejection'],
  run(message, args, call) {
    const arg = args[0].toLowerCase();

    if (arg === 'exception') {
      be.cool.about.it();
    }

    if (arg === 'rejection') {
      Promise.reject('Throw command was used by ' + call.callerTag).then(() => {});
      return;
    }

    this.send('The **type** argument must be either **exception** or **rejection**.');
  },
});
