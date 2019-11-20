const listen = require('./util/listen');

class Listener {
  constructor({ words, cooldown }) {
    if (!words || !cooldown) throw new Error('A listener requires words and cooldown.');
    this.words = words;
    this.cooldown = cooldown;
    this.cooldowns = new Map();
  }

  listen = (message, run) => {
    const { author } = message;
    if (author.bot) return;
    // if no records for this user or if off cooldown
    if (!this.cooldowns.get(author.id) || Date.now() - this.cooldowns.get(author.id) > 0) {
      // do stuff
      if (listen(message, this.words)) {
        run(message);
        // set cooldown
        this.cooldowns.set(author.id, Date.now() + this.cooldown * 1000);
        return true;
      }
    }
  }

  toString() {
    return `Listener [${this.words.join(' ')}]`;
  }
};

Listener[Symbol.toStringTag] = 'Listener';

module.exports = Listener;