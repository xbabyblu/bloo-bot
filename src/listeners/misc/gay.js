const { Listener } = require('chop-tools');

module.exports = new Listener({
  words: ['{me}', '{be}', 'gay'],
  category: 'misc',
  cooldown: 15,
  priority: 0,
  run(message) {
    message.channel.send("You're gay and that's ok!");
    return true;
  },
});
