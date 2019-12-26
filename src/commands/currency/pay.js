const { Command } = require('chop-tools');

const Currency = require('../../services/currency');
const format = require('../../util/format');
const { INK_EMOJI } = require('../../util/constants');

module.exports = new Command({
  name: 'pay',
  description: 'Pays someone the specified amount of Blue Ink' + INK_EMOJI,
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
      const msg = await this.send(":no_entry_sign: You didn't tag a person to pay.");
      deleteIn(msg, 4000);
      return;
    }

    if (Number.isNaN(amount) || amount < 1) {
      const msg = await this.send(':no_entry_sign: That amount is not a valid number!');
      deleteIn(msg, 4000);
      return;
    }

    if (call.profile.money < amount) {
      const msg = await this.send(":no_entry_sign: You don't have enough funds to do that!");
      deleteIn(msg, 4000);
      return;
    }

    if (userMention === message.author) {
      const msg = await this.send(':no_entry_sign: Bruh... Are you fookin serious?');
      deleteIn(msg, 4000);
      return;
    }

    try {
      const [bal] = await Currency.transfer(call.caller, userMention.id, amount);
      this.send(
        `**${message.author.username}**, you sent **${amount}**${INK_EMOJI} to **${userMention.username}**.`,
        `Your new balance is **${bal}**`,
      );
    } catch (err) {
      this.client.logger.error(
        `Failed to transfer ${amount} currency from ${call.callerTag} to ${userMention.tag}. Reason:`,
        err,
      );
    }
  },
});
