const { Command } = require("chop-tools");

const Profile = require("../../models/profile");
const { INK_EMOJI } = require("../../BLOO_GLOBALS");

module.exports = new Command({
  name: "economy",
  description: "Info about the Bloo economy, duh~",
  category: "currency",
  aliases: ["eco"],
  async run(message, args, call) {
    const sum = await Profile.aggregate([
      { $group: { _id: "", money: { $sum: "$money" } } },
      { $project: { _id: 0, money: "$money" } }
    ]);
    const blooProfile = await Profile.findOne({
      userId: "643338599281983501"
    }).exec();
    const allMoney = sum[0]["money"];
    const blooMoney = blooProfile.money;
    this.send(
      `There is currently **${allMoney}${INK_EMOJI}** in the economy.`,
      `And I have **${blooMoney}${INK_EMOJI}** c:`,
      { split: true }
    );
  }
});
