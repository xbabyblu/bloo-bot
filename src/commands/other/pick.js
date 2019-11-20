const { Command } = require('chop-tools');

const pickFrom = require('../../util/pickFrom');
const wait = require('../../util/wait');

module.exports = new Command({
  name: 'pick',
  description:
    'Pick something from a set. Separate your options with a comma or every word will be a choice.',
  category: 'other',
  args: ['choice'],
  usage: '[what to pick from]',
  aliases: ['choice'],
  async run(message, args) {
    let result;
    if (message.content.includes(',')) {
      result = pickFrom(args.join(' ').split(','));
    } else {
      result = pickFrom(args);
    }
    let msg = await message.channel.send(
      `:page_facing_up: **| ${message.author.username}** asked me to pick something.\n:1234: And I pick`,
    );
    await wait(200);
    msg = await msg.edit(`${msg.content}.`);
    await wait(200);
    msg = await msg.edit(`${msg.content}.`);
    await wait(200);
    msg = await msg.edit(`${msg.content}.`);
    await wait(200);
    msg = await msg.edit(`${msg.content} **${result}**!!!`);
  },
});
