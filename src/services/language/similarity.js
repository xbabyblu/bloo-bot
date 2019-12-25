const distance = require('natural').JaroWinklerDistance;

const sorted = arr => {
  const toSort = [...arr];
  toSort.sort((a, b) => b.distance - a.distance);
  return toSort;
};

const similarity = (subject, targets) => {
  const scores = sorted(
    targets.map(target => ({ string: target, distance: distance(subject, target) })),
  );
  return {
    input: subject,
    scores,
    bestMatch: scores[0].string,
  };
};

module.exports = similarity;
