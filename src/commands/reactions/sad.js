
const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');
const findPerson = require('../../util/findPerson');
const format = require('../../util/format');

const images = [
  'https://imgur.com/a/uGONoUP',
  'https://imgur.com/a/jZywU2t',
  'https://imgur.com/a/Qhx6F0F',
  'https://imgur.com/a/U9bvC7v',
  'https://imgur.com/a/lt7ApGG',
  'https://imgur.com/a/DyGvW9n',
  'https://imgur.com/a/tITzTR9',
  'https://imgur.com/a/Rzicel8',
  'https://imgur.com/a/QrxhdS6',
  'https://imgur.com/a/KEiX1le',
  'https://imgur.com/a/Q9KvtGd',
  'https://imgur.com/a/jz5FYkb',
  'https://imgur.com/a/4YISJ0a',
  'https://imgur.com/a/00V94WF',
  'https://imgur.com/a/kJORNI9',
  'https://imgur.com/a/JUHUwq8',
];

/*
for (let i = 0; i <= 28; i++) {
  images.push(`http://cdn.chop.coffee/happy/${i}.gif`);
}
*/
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
      msg = `<@${call.caller}> is sad, someone should try to cheer them up.. :sob: `;
    }

    const embed = makeEmbed(msg, random(images), message);

    message.channel.send({ embed });
  },
});
