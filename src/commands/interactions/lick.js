const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');
const findPerson = require('../../util/findPerson');

const images = [
  'https://imgur.com/a/KEhFwBS',
  'https://imgur.com/a/xlJZd4J',
  'https://imgur.com/a/rb5jYTt',
  'https://imgur.com/a/M3ldxNu',
  'https://imgur.com/a/LhshDAb',
  'https://imgur.com/a/hCYdtb1',
]

module.exports = new Command({
  name: 'lick',
  description: 'okay.. this is pretty self explanatory',
  args: ['target'],
  delete: true,
  category: 'interactions',
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());
    
    if (!target) {
      message.channel.send("I couldn't find that person.");
      return;
    }

    const embed = makeEmbed(
      `Well.. How do I say this..\n \n${call.callerTag} has licked you. And now, I will proceed to walk away... :zany_face: `,
      random(images),
      message,
    );

    target.send({ embed });
  },
});
