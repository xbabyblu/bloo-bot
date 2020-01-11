const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'off',
  description: 'fair',
  category: 'admin',
  hidden: true,
  delete: true,
  run() {
    this.send(
      'Hi, offing my self, i\'m dad.',
    );
  },
});
