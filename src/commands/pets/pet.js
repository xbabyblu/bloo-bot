const { Command, Text } = require('chop-tools');
const Prompter = require('chop-prompter');
const { MessageEmbed } = require('discord.js');

const Pet = require('../../models/pet');
const Pets = require('../../services/pets');
const Currency = require('../../services/currency');
const { INK_EMOJI, PET_PRICE, MAX_PET_COUNT } = require('../../BLOO_GLOBALS');

module.exports = new Command({
  name: 'pet',
  description: 'Trade your bloo ink for a pet that you can earn xp and feed!',
  category: 'pets',
  aliases: ['p', 'pets'],
  hidden: true,
  async run(message, args, call) {
    const pets = await Pet.find({ owner: call.caller }).exec();

    // Arg === adopt
    if (args[0] && ['a', 'adopt'].includes(args[0].toLowerCase())) {
      const response = await Prompter.confirm({
        channel: message.channel,
        question: `Are you sure? That will cost you **${PET_PRICE}${INK_EMOJI}**`,
        userId: call.caller,
      });
      if (response !== true) {
        this.send('Okay then.');
        return;
      }

      // monie check
      if (call.profile.money < PET_PRICE) {
        this.send(`You don't have enough Bloo Ink${INK_EMOJI} to adopt a pet. :c`);
        return;
      }

      // pet count check
      if (pets.length >= MAX_PET_COUNT) {
        this.send("You can't adopt any more pets. :c");
        return;
      }

      // create the pet
      const petName = Pets.generateRandomName();
      const petImage = await Pets.buildImage(Pets.generateImageRecipe());
      const pet = new Pet({
        name: petName,
        owner: call.caller,
        image: petImage,
      });

      // remove the monies
      await Currency.subtract(call.caller, PET_PRICE);

      // save pet
      await pet.save();

      // if we got to here there were no errors! \o/

      // response
      const embed = new MessageEmbed({
        title: 'Pet adopted!',
        description: `Congratulations, ${message.author}!\nYou just adopted an adorable pet named **${petName}**.`,
        files: [{ name: 'pet.png', attachment: petImage }],
        thumbnail: { url: 'attachment://pet.png' },
        color: 0x009900,
      });
      this.send({ embed });
      return;
    }

    // No args
    if (pets.length === 0) {
      this.send(
        "You don't have a pet yet. Would you like to adopt one?",
        `Use **${this.client.options.prefix}pet adopt**`,
      );
      return;
    }

    // Show pets
    pets.forEach(pet => {
      this.send({
        embed: new MessageEmbed({
          title: pet.name,
          description: Text.lines(
            `⭐ **Level:** __${pet.level}__`,
            `✨ **Experience:** __${pet.experience}__`,
            `💕 **Pats:** __${pet.pats.count}__`
          ),
          files: [{ name: 'pet.png', attachment: pet.image }],
          thumbnail: { url: 'attachment://pet.png' },
        })
      })
    });
  },
});
