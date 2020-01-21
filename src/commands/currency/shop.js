const { Command } = require("chop-tools");
const { MessageEmbed } = require("discord.js");

const { INK_EMOJI } = require("../../BLOO_GLOBALS");
const Currency = require("../../services/currency");
const Gifs = require("../../services/gifs");
const Pet = require("../../models/pet");

/* ideas:
    1.pet food (1000 bloo ink, gives 60 xp)
    2.pet treats(5000 bloo ink, gives 350 xp)
    3.???
    4. profit
    5.pet toy (cost 500, grants 40 xp)

    TODO: Note for future Kaffe: Yes. You wrote this crap. Deal with it or I'll kill you. -Kaffe

*/

// /////////////////////////////////////////////////////////////////////////
// ! ATTENTION!
// The code bellow this comment is CURSED.
// Proceed with caution.
// /////////////////////////////////////////////////////////////////////////

class ShopItem {
  constructor(
    name,
    price,
    description = "Item Description Goes Here",
    emoji = "🧩",
    run = () => {}
  ) {
    this.name = name || "Item Name Goes Here";
    this.price = price || 100;
    this.description = description;
    this.emoji = emoji;
    this.run = run;
  }
}

module.exports = new Command({
  name: "shop",
  description: "buy things with bloo ink" + INK_EMOJI,
  category: "currency",
  aliases: ["buy"],
  async run(message, args, call) {
    const shopItems = [
      new ShopItem(
        "Pet Food",
        1000,
        "Gives your pet 60 exp.",
        "🥯",
        async () => {
          const pets = await Pet.find({ owner: call.caller });
          if (!pets.length || pets.length > 1) {
            return;
          }
          const [pet] = pets;
          await pet.giveExp(60);

          await Currency.subtract(call.caller, 1000);
        }
      ),
      new ShopItem(
        "Pet Treat",
        5000,
        "Gives your pet 350 exp.",
        "🥨",
        async () => {
          const pets = await Pet.find({ owner: call.caller });
          if (!pets.length || pets.length > 1) {
            return;
          }
          const [pet] = pets;
          await pet.giveExp(350);

          await Currency.subtract(call.caller, 5000);
        }
      ),
      new ShopItem("Pet Toy", 500, "Gives your pet 40 exp.", "🎾", async () => {
        const pets = await Pet.find({ owner: call.caller });
        if (!pets.length || pets.length > 1) {
          return;
        }

        const [pet] = pets;
        await pet.giveExp(40);

        await Currency.subtract(call.caller, 500);
      }),
      new ShopItem(
        "Hug Coupon",
        2000,
        "Buy this coupon and Bloo will hug you.",
        "🥰",
        async () => {
          const gif = await Gifs.random("hug");
          const embed = new MessageEmbed({
            title: "Hug!",
            description: "*Bloo Hugs You!* :blue_heart:\nHuggie for you~  >u<",
            image: gif
          });
          embed.setImage(gif);
          embed.setThumbnail(this.client.user.avatarURL());
          this.send({
            embed
          });
          await Currency.subtract(call.caller, 2000);
        }
      )
    ];

    shopItems.sort((a, b) => a.money - b.money);

    const embed = new MessageEmbed({ title: "Bloo Shop" });

    shopItems.forEach(item => {
      embed.addField(
        `${item.emoji} **| ${"" + item.price} | ${item.name}**`,
        item.description,
        true
      );
    });

    const msg = await this.send({ embed });

    for (const item of shopItems) {
      // eslint-disable-next-line
      await msg.react(item.emoji);
    }

    let shopping = true;

    while (shopping) {
      // eslint-disable-next-line
      const collected = await msg.awaitReactions(
        (reaction, user) => {
          const shouldAllow =
            shopItems.find(item => item.emoji === reaction.emoji.name) &&
            user.id === call.caller;
          return shouldAllow;
        },
        { max: 1, time: 30000 }
      );

      const itemEmoji = collected ? collected.first() : null;

      if (itemEmoji) {
        const item = shopItems.find(
          i => itemEmoji.emoji && i.emoji === itemEmoji.emoji.name
        );
        if (item) {
          const balance = await Currency.getBalance(call.caller);
          if (balance > item.price) {
            item.run();
            if (/pet/gi.test(item.name)) {
              const pets = await Pet.find({ owner: call.caller });
              if (pets.length === 1) {
                this.send(
                  `You just bought a **${item.name}** for **${item.price}${INK_EMOJI}**!`
                );
              }
            } else {
              this.send(
                `You just bought a **${item.name}** for **${item.price}${INK_EMOJI}**!`
              );
            }
          } else {
            this.send(`You can't afford **${item.name}**. :c`);
          }
        }
      } else {
        try {
          // eslint-disable-next-line
          await msg.reactions.removeAll();
        } catch {
          /* its okay */
        }
        shopping = false;
      }
    }
  }
});
