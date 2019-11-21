const { Command } = require('chop-tools');

const makeEmbed = require('../../util/makeEmbed');
const random = require('../../util/random');
const findPerson = require('../../util/findPerson');

const images = [
  'https://imgur.com/a/kAWAVG0',
  'https://imgur.com/a/4JpPze3',
  'https://imgur.com/a/QdtLWln',
  'https://imgur.com/a/ikpCHxg',
  'https://imgur.com/a/tayKJoY',
  'https://imgur.com/a/vdlqEtC',
  'https://imgur.com/a/2WAZupB',
  'https://imgur.com/a/zQqcfBG',
  'https://imgur.com/a/TCl95hE',
];

// cute stuff c;
module.exports = new Command({
  name: 'cute',
  aliases: ['pretty'],
  description: "Tell someone they're cute :smiling_face_with_3_hearts:",
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
      `Hey there! \n${call.callerTag} said you're cute. ;)`,
      random(images),
      message,
    )
    
    target.send({ embed });
  },
});
