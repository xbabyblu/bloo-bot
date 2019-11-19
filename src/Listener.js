const listen = require('./util/listen');

module.exports = class Listener {
  constructor({ client, words, cooldown, run }) {
    if (!client || !words || !cooldown) throw new Error('A listener requires a client, words and cooldown.');
    this.client = client;
    this.words = words;
    this.cooldown = cooldown;
    this.cooldowns = new Map();
    this.run = run;

    this.client.on('message', this.listen);
  }

  listen = (message) => {
    const { author } = message;
    if (author.bot) return;
    // if no records for this user or if off cooldown
    if (!this.cooldowns.get(author.id) || Date.now() - this.cooldowns.get(author.id) > 0) {
      // do stuff
      if (listen(message, this.words)) {
        this.run(message);
        // set cooldown
        this.cooldowns.set(author.id, Date.now() + this.cooldown * 1000);
      }
    }
  }
};
