const findPerson = require('./findPerson');
const makeEmbed = require('./makeEmbed');
const random = require('./random');

module.exports = (text, images, message) => async () => {
  const deleteAfterDelay = (msg, delay) => {
    message.client.setTimeout(() => {
      msg.delete().catch(() => {});
    }, delay);
  };

  const target = await findPerson(message.mentions.members.first());

  if (!target) {
    const msg = await message.channel.send("I couldn't find that person.");
    deleteAfterDelay(msg, 3000);
    return;
  }

  const image = Array.isArray(images) ? random(images) : images;

  const embed = makeEmbed(text, image, message);

  target.send({ embed });
};
