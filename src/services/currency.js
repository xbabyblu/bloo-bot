const Profile = require('../models/profile');

class Currency {
  static async getBalance(userId) {
    const user = await Profile.getOrCreate(userId);
    return user.money;
  }

  static async add(userId, amount) {
    if (Number.isNaN(Number(amount))) {
      throw new TypeError('Amount must be a number.');
    }

    const user = await Profile.getOrCreate(userId);

    const newAmount = user.money + Math.floor(Number(amount));
    user.money = newAmount;
    await user.save();

    return newAmount;
  }

  static async subtract(userId, amount) {
    if (Number.isNaN(Number(amount))) {
      throw new TypeError('Amount must be a number.');
    }

    const user = await Profile.getOrCreate(userId);

    if (user.money - amount >= 0) {
      const newAmount = user.money - Math.floor(Number(amount));
      user.money = newAmount;
      await user.save();
      return newAmount;
    }
    user.money = 0;
    await user.save();
    return 0;
  }

  /**
   * Transfers money from one user to another.
   *
   * @static
   * @param {*} userIdFrom ID of the user to take the money from.
   * @param {*} userIdTo ID of the user to transfer the money to.
   * @param {*} amount The amount.
   * @returns {array<number>} [Balance1, Balance2] the new balance of both users.
   * @memberof Currency
   */
  static async transfer(userIdFrom, userIdTo, amount) {
    if (Number.isNaN(Number(amount))) {
      throw new TypeError('Amount must be a number.');
    }

    const userFrom = await Profile.getOrCreate(userIdFrom);
    const userTo = await Profile.getOrCreate(userIdTo);

    if (!userFrom) throw new Error(`Could not find user ${userFrom}`);
    if (!userTo) throw new Error(`Could not find user ${userTo}`);

    if (userFrom.money < Number(amount)) throw new Error('Insufficient funds.');

    const newAmount1 = userFrom.money - Number(amount);
    const newAmount2 = userTo.money + Number(amount);
    userFrom.money = newAmount1;
    userTo.money = newAmount2;
    await userFrom.save();
    await userTo.save();

    return [newAmount1, newAmount2];
  }
}

module.exports = Currency;
