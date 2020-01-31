const { Listener, Text } = require('chop-tools');
const {SUPPORT_SERVER} = require('../../BLOO_GLOBALS.js');

module.exports = new Listener({
  words: ['bloo', '(support|help)', '(server|guild|link)'],
  category: 'bloo',
  cooldown: 450000,
  priority: 0,
  run(message) {
    const { prefix } = this.client.options;
    message.channel.send(
      Text.lines(
        `Do you need help? Or maybe you want to learn more about me?`,
        `Join my support server, there are useful infomation there and people to help you. :)`,
        SUPPORT_SERVER,
      ),
    );
    return true;
  },
});
