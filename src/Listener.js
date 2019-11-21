const listen = require('./util/listen');

/**
 * A listener will watch messages and trigger a piece of code when it detects a
 * message that matches the words it was configured with.
 *
 * @class Listener
 * @property {string[]} words Words to watch for. (regex syntax)
 * @property {number} cooldown Listener will not trigger for a user based on this cooldown.
 * @property {number} [globalCooldown] Cooldown that applies to all users.
 */
class Listener {
  constructor({ words, cooldown, globalCooldown }) {
    if (!words || !cooldown) throw new Error('A listener requires words and cooldown.');
    this.words = words;
    this.cooldown = cooldown;
    this.cooldowns = new Map();
    this.globalCooldown = globalCooldown || null;
  }

  listen = (message, run) => {
    const { author } = message;
    if (author.bot) return;
    // Global cooldown for this listener.
    if (this.globalCooldown && Date.now() - this.cooldowns.get('GLOBAL') < 0) return;
    // if no records for this user or if off cooldown
    if (!this.cooldowns.get(author.id) || Date.now() - this.cooldowns.get(author.id) > 0) {
      // do stuff
      if (listen(message, this.words)) {
        run(message);
        // set cooldown
        this.cooldowns.set(author.id, Date.now() + this.cooldown * 1000);
        if (this.globalCooldown) {
          this.cooldowns.set('GLOBAL', Date.now() + this.globalCooldown * 1000);
        }
        // eslint-disable-next-line consistent-return
        return true;
      }
    }
  }

  toString() {
    return `Listener [${this.words.join(' ')}]`;
  }
}

Listener[Symbol.toStringTag] = 'Listener';

module.exports = Listener;
