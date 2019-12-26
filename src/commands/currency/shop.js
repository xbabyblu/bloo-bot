const { Command, Text } = require("chop-tools");
const { MessageEmbed } = require("discord.js");

const { INK_EMOJI } = require("../../BLOO_GLOBALS");
const Currency = require("../../services/currency");

/* ideas:
    1.pet food (1000 bloo ink, gives 60 xp)
    2.pet treats(5000 bloo ink, gives 350 xp)
    3.???
    4. profit
    5.pet toy (cost 500, grants 40 xp)

*/

class ShopItem {
  constructor(name, price, description, emoji) {
    this.name = name || "Item Name Goes Here";
    this.price = price || 100;
    this.description = description || "Item Description Goes Here";
    this.emoji = emoji || "🧩";
  }
}

module.exports = new Command({
  name: "shop",
  description: "buy things with bloo ink" + INK_EMOJI,
  category: "currency",
  aliases: ["buy"],
  async run(message, args, call) {
    const shopItems = [
      new ShopItem("Pet Food", 1000, "Gives your pet 60 exp.", "🥯"),
      new ShopItem("Pet Treat", 5000, "Gives your pet 350 exp.", "🥨"),
      new ShopItem("Pet Toy", 500, "Gives your pet 40 exp.", "🎾"),
      new ShopItem(
        "Kaffe's Feet Pics",
        9999,
        "Exquisite pictures of Kaffe's feet.",
        "🦶🏻"
      ),
      new ShopItem(
        "Hug Coupon",
        2000,
        "Buy this coupon and Bloo will hug you.",
        "🥰"
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

    msg.awaitReactions((reaction, user) => {
      return (
        shopItems.find(item => item.emoji === reaction.emoji.name) &&
        user.id === call.caller
      );
    });
  }
});
