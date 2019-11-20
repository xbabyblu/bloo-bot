module.exports = (milliseconds) => {
  if (Number.isNaN(Number(milliseconds))) return Promise.resolve();
  return new Promise(resolve => setTimeout(resolve, Number(milliseconds)));
};
