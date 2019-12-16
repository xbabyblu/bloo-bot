const { Command, Text } = require('chop-tools');

module.exports = new Command({
  name: 'xp',
  description: 'xp formula testing',
  category: 'testing',
  aliases: ['exp'],
  hidden: true,
  run(message, args, call) {
    const [currentLevel] = Text.numbers(message.content);

    if (currentLevel === undefined) {
      message.channel.send('Bruh \'-\'');
      return;
    }
    
    // blu's magic formula
    const result = currentLevel * (10 + currentLevel);

    // message.channel.send(currentLevel + ' -> ' + result);
    message.channel.send(`To go from level **${currentLevel}** to **${currentLevel + 1}** it will take **${result}** exp.`);
  },
});
