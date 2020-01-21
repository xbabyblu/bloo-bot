const { Command, Text } = require('chop-tools');



module.exports = new Command({
  name: 'xp',
  description: 'xp formula testing',
  category: 'testing',
  aliases: ['exp'],
  hidden: true,
  run(message, args) {
    const [currentLevel] = Text.numbers(message.content);

    if (args[0] && args[0].toLowerCase() === 'bruh') {
      let msg = '';
      let total = 0;
      // but i'm doing it "currentLevel" times.
      for (let i = 1; i <= (currentLevel || 5); i++) {
        // this is just ur formula
        msg += `**${i}** -> ${i * (10 + i)}\n`;
        total += i * (10 + i);
      }
      message.channel.send(msg + 'And the sum of that is ' + total, {split: true});
      return;
    }

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
