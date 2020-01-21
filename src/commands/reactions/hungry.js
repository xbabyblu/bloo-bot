const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');
const findPerson = require('../../util/findPerson');

const images = [
  'https://imgur.com/a/mbOwLaV',
  'https://imgur.com/a/UsnYZUB',
  'https://imgur.com/a/SHjH6F1',
  'https://imgur.com/a/LJUq87Z',
  'https://imgur.com/a/VyjRofS',
  'https://imgur.com/a/Jw1ExQH',
  'https://imgur.com/a/mY5moYJ',
  'https://imgur.com/a/2WueSAZ',
  'https://imgur.com/a/vUfApVP',
  'https://imgur.com/a/dskRVOr',
  'https://imgur.com/a/sQ3dSE9',
  'https://imgur.com/a/XVcMvkr',
  'https://imgur.com/a/tHaj7hw',
  'https://imgur.com/a/Oya0HbY',
  'https://imgur.com/a/qqSS9rk',
  'https://imgur.com/a/fZjUJ6c',
  'https://imgur.com/a/Y9jeMRN',
];

module.exports = new Command({
  name: 'hungry',
  description: "we all get a little hungry sometimes",
  aliases: ['starving', 'famished'],
  category: 'reactions',
  usage: '[target]',
  examples: [' ', '@Lar#9547', '@Xlilblu#5239'],
  hidden: true,
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `<@${call.caller}> wants to tell ${target} that they are very hungry. I suggest you feed them.`;
    } else {
      msg = `<@${call.caller}> is saying that they're hungry! :fork_knife_plate: `;
    }

    const embed = makeEmbed(msg, random(images), message);

    this.send({ embed });
  },
});