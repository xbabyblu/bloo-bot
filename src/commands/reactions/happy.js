
const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');
const findPerson = require('../../util/findPerson');
const format = require('../../util/format');

const images = [
  'https://imgur.com/a/LORGHXP', 
  'https://imgur.com/a/Pk7glNs', 
  'https://imgur.com/a/1iRHU0a', 
  'https://imgur.com/a/aNcjpmg',
  'https://imgur.com/a/4VkbcSS',
  'https://imgur.com/a/adh0lkn',
  'https://imgur.com/a/PDD8Vj8',
  'https://imgur.com/a/y1UoP9W', 
  'https://imgur.com/a/4ycqOx3', 
  'https://imgur.com/a/pmIYu1G', 
  'https://imgur.com/a/76SIRE0'];
/*
for (let i = 0; i <= 28; i++) {
  images.push(`http://cdn.chop.coffee/happy/${i}.gif`);
}
*/

module.exports = new Command({
  name: 'happy',
  description: "show that you're happy!",
  aliases: ['joy', 'content'],
  category: 'reactions',
  usage: '[target]',
  examples: [' ', '@Lar#9547', '@Xlilblu#5239'],
  hidden: true,
  async run(message, args, call) {
    const target = await findPerson(message.mentions.members.first());

    let msg;
    if (target) {
      msg = `${target} has made <@${call.caller}> happy!`;
    } else {
      msg = `<@${call.caller}> seems to be really happy!`;
    }

    const embed = makeEmbed(msg, random(images), message);

    this.send({ embed });
  },
});
