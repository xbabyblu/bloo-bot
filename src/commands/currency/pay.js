const { Command } = require('chop-tools');

const Currency = require('../../services/currency');
const format = require('../../util/format');
// const { BEAN_EMOJI } = require('../../config/constants');

module.exports = new Command({
  name: 'pay',
  description: 'Pays someone the specified amount of [CURRENCY NAME HERE].',
  category: 'currency',
  usage: '{@mention} {amount}',
  args: ['mention', 'amount'],
  example: '@Lar#9547 200',
  async run(message, args, call) {
    const deleteIn = (msg, delay) => {
      this.client.setTimeout(() => {
        msg.delete().catch(() => {});
      }, delay);
    };

    const userMention = message.mentions.users.first();
    const amount = Math.floor(Number(args[1]));

    if (!userMention) {
      const msg = await message.channel.send(":no_entry_sign: You didn't tag a person to pay.");
      deleteIn(msg, 4000);
      return;
    }

    if (Number.isNaN(amount)) {
      const msg = await message.channel.send(':no_entry_sign: That amount is not a valid number!');
      deleteIn(msg, 4000);
      return;
    }

    if (call.profile.money < amount) {
      const msg = await message.channel.send(":no_entry_sign: You don't have enough funds to do that!");
      deleteIn(msg, 4000);
      return;
    }

    try {
      const [bal] = await Currency.transfer(call.caller, userMention.id, amount);
      message.channel.send(
        format(
          `**${message.author.username}**, you sent **${amount}**[EMOJI HERE] to **${userMention.username}**.`,
          `Your new balance is **${bal}**`,
        ),
      );
    } catch (err) {
      console.log(`Failed to transfer ${amount} currency from ${call.callerTag} to ${userMention.tag}. Reason:`, err);
    }
  },
});
