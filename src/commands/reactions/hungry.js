const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'hungry',
  description: 'what can i get for you',
  category: 'reactions',
  hidden: true,
  run(message) {
    message.channel.send(
      'May I offer you your favorite dish? Enlighten me and tell me what it is? I will try to remember in the future.',
    );
  },
});

/*
const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');
const findPerson = require('../../util/findPerson');
const format = require('../../util/format');

const images = [];

for (let i = 0; i <= 28; i++) {
  images.push(`http://cdn.chop.coffee/happy/${i}.gif`);
}

module.exports = new Command({
  name: 'hungry',
  description: "we all get a little hungry sometimes",
  aliases: ['starving', 'famished'],
  category: 'reactions',
  usage: '[target]',
  examples: [' ', '@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `<@${call.caller}> wants to tell ${target} that they are very hungry. I suggest you feed them.`;
    } else {
      msg = `<@${call.caller}> is saying that they're hungry! : : `;
    }

    const embed = makeEmbed(msg, random(images), message);

    message.channel.send({ embed });
  },
});
*/
