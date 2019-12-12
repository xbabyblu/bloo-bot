const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'popcorn',
  description: 'someone woke up one morning and said "I\'m going to put corn in a pan and see what happens..." and **BOOM** We have popcorn.',
  category: 'food',
  run(message) {
    this.send(
      'Did someone say...***POPCORN?*** I LOVE POPCORN *so much... that maybe.. I might shut down*',
    );
  },
});
