const { Command } = require('chop-tools');

const LETTERS = {
  a: ':regional_indicator_a:',
  b: ':regional_indicator_b:',
  c: ':regional_indicator_c:',
  d: ':regional_indicator_d:',
  e: ':regional_indicator_e:',
  f: ':regional_indicator_f:',
  g: ':regional_indicator_g:',
  h: ':regional_indicator_h:',
  i: ':regional_indicator_i:',
  j: ':regional_indicator_j:',
  k: ':regional_indicator_k:',
  l: ':regional_indicator_l:',
  m: ':regional_indicator_m:',
  n: ':regional_indicator_n:',
  o: ':regional_indicator_o:',
  p: ':regional_indicator_p:',
  q: ':regional_indicator_q:',
  r: ':regional_indicator_r:',
  s: ':regional_indicator_s:',
  t: ':regional_indicator_t:',
  u: ':regional_indicator_u:',
  v: ':regional_indicator_v:',
  w: ':regional_indicator_w:',
  x: ':regional_indicator_x:',
  y: ':regional_indicator_y:',
  z: ':regional_indicator_z:',
  0: '0⃣',
  1: '1⃣',
  2: '2⃣',
  3: '3⃣',
  4: '4⃣',
  5: '5⃣',
  6: '6⃣',
  7: '7⃣',
  8: '8⃣',
  9: '9⃣',
  10: '🔟',
  '#': '#⃣',
  '*': '*⃣',
  '!': ':heart_exclamation:',
  '.': ':radio_button:',
  '?': ':grey_question:',
};

const userRegex = /(?<=<@)[!]{0,1}(\d+?)(?=>)/g;
const channelRegex = /(?<=<#)(\d+?)(?=>)/g;

module.exports = new Command({
  name: 'yell',
  description: 'YELL STUFF!',
  category: 'funny',
  aliases: ['scream'],
  delete: true,
  run(message, args) {
    if (!args[0]) return;
    const content =
      '' +
      message.content
        .substr(message.content.indexOf(args[0]))
        .toLowerCase()
        .replace(channelRegex, id => {
          const channel = message.guild.channels.get(id);
          return channel.name.toLowerCase();
        })
        .replace(userRegex, id => {
          id = id.replace('!', '');
          const member = message.guild.members.get(id);
          return (member.nickname || member.user.username).toLowerCase();
        })
        .replace(/\s+/, ' ')
        // eslint-disable-next-line no-useless-escape
        .replace(/[^a-zA-Z0-9#*\s!\.\?]/g, '');

    if (content.length < 1) return;

    const theYELL = content
      .split('')
      .map(l => LETTERS[l] || ' ')
      .join('');

    if (theYELL.length > 1999) {
      this.send('That is too long to yell. :c');
      return;
    }

    this.send(
      content
        .split('')
        .map(l => LETTERS[l] || ' ')
        .join(''),
    );
  },
});
