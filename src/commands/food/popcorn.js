const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'popcorn',
  description: 'food?',
  category: 'food',
  run(message, args) {
    message.channel.send(
      'Did someone say...***POPCORN?*** I LOVE POPCORN *so much... that maybe.. I might shut down*',
    );
  },
});
