const { Command } = require('chop-tools');
const Prompter = require('chop-prompter');
const { MessageEmbed } = require('discord.js');
const path = require('path');

const Pet = require('../../models/pet');
const Pets = require('../../services/pets');
const Currency = require('../../services/currency');
const format = require('../../util/format');
const { INK_EMOJI } = require('../../util/constants');

module.exports = new Command({
  name: 'pet',
  description: 'Pets uhhh idk',
  category: 'pets',
  aliases: ['p', 'pets'],
  async run(message, args, call) {
    const pets = await Pet.find({ owner: call.caller }).exec();

    // Arg === adopt
    if (args[0] && ['a', 'adopt'].includes(args[0].toLowerCase())) {
      // currency check
      const response = await Prompter.confirm({
        channel: message.channel,
        question: 'Are you sure? That will cost you **1500**' + INK_EMOJI + ' (pet will not be saved and money not be taken. still in development ❌)',
        // deleteMessage: false,
        userId: call.caller,
      });
      if (response !== true) {
        message.channel.send('Okay then.');
        return;
      }
      // pet count check
      if (pets.length >= 2) {
        message.channel.send("You can't adopt any more pets. :c");
        return;
      }
      // Create pet and save
      const petName = Pets.generateRandomName();
      const embed = new MessageEmbed({
        title: 'Pet adopted!',
        description: `Congratulations, ${message.author}!\nYou just adopted a **Slime** named **${petName}**.`,
        files: [{ name: 'slime.png', attachment: await Pets.generateImage(Pets.generateRandomImage()) }],
        thumbnail: { url: 'attachment://slime.png' },
        color: 0x009900,
      });
      await message.channel.send({ embed });
      // message.channel.send(
      //   `ToDo: remove blue ink from user and save pet to db.`,
      // );
      return;
    }

    // No args
    if (pets.length === 0) {
      message.channel.send(
        format(
          "You don't have a pet yet. Would you like to adopt one?",
          `Use **${this.client.options.prefix}pet adopt**`,
        ),
      );
    } else {
      message.channel.send('To Be Decided.');
    }
  },
});
