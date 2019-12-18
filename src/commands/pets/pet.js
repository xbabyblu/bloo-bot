const { Command, Text } = require('chop-tools');
const Prompter = require('chop-prompter');
const { MessageEmbed } = require('discord.js');
const Filter = require('bad-words');

const Pet = require('../../models/pet');
const Pets = require('../../services/pets');
const Currency = require('../../services/currency');
const format = require('../../util/format');
const {
  INK_EMOJI,
  PET_PRICE,
  MAX_PET_COUNT,
  PET_ABANDON_RETURN_MONEY,
  PET_PAT_COOLDOWN,
} = require('../../BLOO_GLOBALS');
const flatSeconds = require('../../util/flatSeconds');
const xp = require('../../util/magicformula');

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

    // Arg === abandon/yeet/delete
    if (args[0] && ['abandon', 'yeet', 'delete'].includes(args[0].toLowerCase())) {
      // abandon pet
      const whichPetToAbandonMessage = format(
        'Which pet would you like to throw away forever? **{0}**?',
        "I can't believe I have to be the bearer of bad news and tell them their master doesn't love them anymore.",
        "Please don't do this :frowning:",
      );
      const areYouSureMessage =
        "Are you sure you would like to do this? There isn't a possibility of getting the same pet back. And you may hurt their *feelings* :c \n**Please confirm that you would like to do this.**";
      const petAbandonedMessage =
        'You have gotten rid of your pet **{0}**. \n \nI bet you feel bad now.. *How could you?* :frowning:'; // << undefined
      const youHaveNoPetsMessage =
        "I hate to see this... You really don't like pets to the point... That you tried... To get rid.. Of a pet, that __***doesn't exist***__.";
      const userEnteredAPetNameThatTheyDontOwnMessage =
        "I do not see a pet under that name, maybe see if you are spelling it correctly? Or.... maybe you shouldn't get rid of your pet :smile: \nBut if you are serious about wanting to abandon your pet, please check your spelling and try again!";

      // 0 pets
      if (pets.length < 1) {
        this.send(youHaveNoPetsMessage);
        return;
      }

      let petToDelete = null;

      // more than 1 pet
      if (pets.length > 1) {
        const res = await Prompter.message({
          channel: message.channel,
          question: whichPetToAbandonMessage.replace(/\{0\}/g, pets.map(p => p.name).join(', ')),
          userId: call.caller,
          max: 1,
          deleteMessage: false,
        });

        if (res) {
          const chosenPetName = res
            .first()
            .content.trim()
            .toLowerCase();
          petToDelete = pets.find(p => p.name.toLowerCase() === chosenPetName);
        }

        if (!petToDelete) {
          this.send(userEnteredAPetNameThatTheyDontOwnMessage);
          return;
        }
        // only 1 pet
      } else {
        petToDelete = pets[0];
      }

      const shouldDeletePet = await Prompter.confirm({
        channel: message.channel,
        question: areYouSureMessage,
        userId: call.caller,
      });
      if (shouldDeletePet !== true) {
        // ✅ ✖ -> user chose no.... KAFFE
        this.send('**Phew.** Thank goodness you decided not to! Thank you for having a heart.');
        return;
      }

      // eslint-disable-next-line
      await Pet.deleteOne({ _id: petToDelete._id }).exec();
      await Currency.add(call.caller, PET_ABANDON_RETURN_MONEY);
      this.send(petAbandonedMessage.replace(/\{0\}/g, petToDelete.name));
      return;
    }

    // Arg === pat 💕
    if (args[0] && ['pat', 'pet', 'loveon', 'givelove'].includes(args[0].toLowerCase())) {
      const petGotPatD = 'You have pat your pet {0}!';
      await this.send(`You can pat your pets every **${PET_PAT_COOLDOWN}** minutes.`);
      pets.forEach(pet => {
        const lastPatDate = pet.pats.time;
        if (Date.now() - lastPatDate.getTime() < 1800000) return;
        Prompter.confirm({
          channel: message.channel,
          question: {
            embed: new MessageEmbed({
              title: pet.name,
              description: Text.lines(
                `⭐ **Level:** __${pet.level}__`,
                `✨ **Experience:** __${pet.experience}/${xp.expToNextLevel(pet.level)}__`,
                `💕 **Pats:** __${pet.pats.count}__`,
                Text.duration(`**Last pat:** __{duration:${flatSeconds(Date.now() - lastPatDate.getTime())}}__ ago.`),
              ),
              files: [{ name: 'pet.png', attachment: pet.image }],
              thumbnail: { url: 'attachment://pet.png' },
            }),
          },
          userId: call.caller,
          confirmEmoji: '🥰',
          cancelEmoji: '🦴',
          // deleteMessage: false,
        }).then(res => {
          if (res !== true) return;
          pet
            .givePat()
            .then(() => {
              this.send(petGotPatD.replace(/\{0\}/g, pet.name));
            })
            .catch(() => {
              /* bruh */
            });
        });
      });
      return;
    }

    // arg === rename
    if (args[0] && ['rename', 'changename', 'idk', 'helpmebluLOL'].includes(args[0].toLowerCase())) {
      // Name Restrictions
      // const characters = [14]ig
      const filter = new Filter();
      // we'll use filter.isProfane();
    }

    // No pets
    if (pets.length === 0) {
      this.send(
        "You don't have a pet yet. Would you like to adopt one?",
        `Use **${this.client.options.prefix}pet adopt**`,
      );
      return;
    }

    // No args, show pets
    pets.forEach(pet => {
      const lastPatDate = pet.pats.time;
      this.send({
        embed: new MessageEmbed({
          title: pet.name,
          description: Text.lines(
            `⭐ **Level:** __${pet.level}__`,
            `✨ **Experience:** __${pet.experience}/${xp.expToNextLevel(pet.level)}__`,
            `💕 **Pats:** __${pet.pats.count}__`,
            Text.duration(`**Last pat:** __{duration:${flatSeconds(Date.now() - lastPatDate.getTime())}}__ ago.`),
          ),
          files: [{ name: 'pet.png', attachment: pet.image }],
          thumbnail: { url: 'attachment://pet.png' },
        }),
      });
    });
  },
});
