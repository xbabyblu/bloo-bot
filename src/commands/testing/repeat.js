const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'repeat',
  description: 'Repeats stuff like a robot',
  category: 'funny',
  run(message, args, call) {
    // console.log(call.callerTag, message.content);
    // console.log(Reflect.ownKeys(call));
    // message.channel.send('args: ' + args);
    message.channel.send(message.author.username + ' said ' + call.content);
  },
});
