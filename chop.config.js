const production = process.env.NODE_ENV === 'production';

module.exports = {
  prefix: production ? '!b ' : '!bd ',
  owners: ['554152090411466754', '517599684961894400'],
  bestMatch: true,
  showNotFoundMessage: true,
};
