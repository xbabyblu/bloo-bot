const { Command } = require('chop-tools');

module.exports = new Command({
  name: 'Sad',
  description: 'i am here for you!',
  category: 'reactions',
  hidden: true,
  run(message) {
    message.channel.send('Do you want to talk about it?');
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
  name: 'sad',
  description: "don't cry... things will get better :frown:",
  aliases: ['hurt', 'sad', 'depressed'],
  category: 'reactions',
  usage: '[target]',
  examples: [' ', '@Lar#9547', '@Xlilblu#5239'],
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `<@${call.caller}> is crying because of ${target}. Why would you do that to them? :c`;
    } else {
      msg = `<@${call.caller}> is sad, someone should try to cheer them up.. :crying: `;
    }

    const embed = makeEmbed(msg, random(images), message);

    message.channel.send({ embed });
  },
});
*/
