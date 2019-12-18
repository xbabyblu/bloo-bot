/**
 * Magic Formula
 * Calculates the needed experience to level your pet.
 * 
 * Copyright © Blu 2019
 */

/**
 * Takes a level and returns how much exp you need to get from that level to the next.
 * @param {number} level The current level.
 * @returns The needed exp.
 */
function expToNextLevel(level) {
  const result = level * (10 + level);
  return result;
}

// const result = currentLevel * (10 + currentLevel);
/**
 * Takes an amount of exp and returns what level your pet should be with that amount of exp.
 * @param {number} exp How much exp the pet has.
 * @returns What level the pet should be.
 */
// function givenExpLevelShouldBe(exp) {
//   const result = 
//   return result;
// }

module.exports = {
  expToNextLevel
}