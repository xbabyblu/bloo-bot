const { Command } = require('chop-tools');
const request = require('request-promise-native');

const findPerson = require('../../util/findPerson');

module.exports = new Command({
  name: 'insult',
  description: 'Insult your enemies >:)',
  category: 'other',
  delete: true,
  async run(message, args, call) {
    const url = 'https://evilinsult.com/generate_insult.php?lang=en&type=text';

    const deleteAfterDelay = (msg, delay) => {
      this.client.setTimeout(() => {
        msg.delete().catch(() => {});
      }, delay);
    };
  
    const target = await findPerson(message.mentions.members.first());
  
    if (!target) {
      const msg = await message.channel.send("I couldn't find that person.").catch(() => {});
      deleteAfterDelay(msg, 3000);
      return;
    }
  
    const insult = await request(url);
  
    target.send(`:heart: :sparkling_heart: :heart: ${insult} :heart: :sparkling_heart: :heart:`).catch(() => {
      message.channel.send('I can\'t DM that person. ;-;')
      .then((msg) => deleteAfterDelay(msg, 3000))
      .catch(() => {});
    });
  },
});
