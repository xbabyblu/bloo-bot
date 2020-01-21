const { Command } = require("chop-tools");

const Profile = require("../../models/profile");
const { INK_EMOJI } = require("../../BLOO_GLOBALS");

module.exports = new Command({
  name: "economy",
  description: "Info about the Bloo economy, duh~",
  category: "currency",
  aliases: ["eco"],
  async run() {
    const [{ money }] = await Profile.aggregate([
      { $group: { _id: "", money: { $sum: "$money" } } },
      { $project: { _id: 0, money: "$money" } }
    ]);

    const top5Profiles = await Profile.find({})
      .limit(5)
      .sort({ money: -1 })
      .exec();

    const blooProfile = await Profile.findOne({
      userId: "643338599281983501"
    }).exec();

    const blooMoney = blooProfile.money;

    const top5 = top5Profiles.map((p, i) => {
      const medals = {
        "0": ":first_place:",
        "1": ":second_place:",
        "2": ":third_place:",
        "3": ":small_blue_diamond:",
        "4": ":small_blue_diamond:"
      };
      // if !u this user does not share a server with Bloo.
      // TODO: Check profiles database for this user.
      const u = this.client.users.get(p.userId);
      return `${medals["" + i]}**${u ? u.tag : 'Anonymous Bloo Baby'}:** ${p.money}`;
    });

    const msg = [];

    msg.push(`__There is currently **${money}${INK_EMOJI}** in the economy.__`);
    top5.forEach(top5Person => msg.push(top5Person));
    msg.push(`:blue_heart: And I have **${blooMoney}${INK_EMOJI}** :smiling_face_with_3_hearts:`);

    this.send(...msg, { split: true });
  }
});
