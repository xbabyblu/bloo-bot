const { Listener } = require('chop-tools');

const Prompter = require('chop-prompter');

module.exports = new Listener({
  words: 'knock knock',
  category: 'misc',
  cooldown: 1,
  priority: 5,
  async run(message) {
    const responseList1 = await Prompter.message({
      channel: message.channel,
      question: 'Who\'s there?',
      userId: message.author.id,
      max: 1,
      timeout: 10000,
    });

    // If no responses, the time ran out
    if (!responseList1) {
      // i sure hope its not Joe lmfao xD || this is a cry for help
      message.channel.send('....*Who\'s there?*');
      return true;
    }
    
    const response1 = responseList1.first();

    const responseList2 = await Prompter.message({
      channel: message.channel,
      question: `${response1} who? :nerd:`,
      userId: message.author.id,
      max: 1,
      timeout: 10000,
    });
    // i didn't think this far
    if (!responseList2) {
      await message.channel.send('***bruh***');
      return true;
    }

    const response2 = responseList2.first();

    await message.channel.send(`*${response2}*... the heck!?`);
    
    return true;
  },
});
