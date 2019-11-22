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
<<<<<<< HEAD
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '0': ':zero:',
  '!': ':heart_exclamation:',
  '.': ':radio_button:',
  '?':':grey_question:',
=======
  1: ':one:',
  2: ':two:',
  3: ':three:',
  4: ':four:',
  5: ':five:',
  6: ':six:',
  7: ':seven:',
  8: ':eight:',
  9: ':nine:',
  0: ':zero:',
>>>>>>> 48682b5a5f152e39985abd1fcec0f9993f11d9f9
};

module.exports = new Command({
  name: 'yell',
  description: 'YELL STUFF!',
  category: 'funny',
  aliases: ['scream'],
  delete: true,
  run(message, args, call) {
    if (!args[0]) return;
    const content =
      '' +
      message.content
        .substr(message.content.indexOf(args[0]))
        .replace(/\s+/, ' ')
        .replace(/[^a-zA-Z0-9\s]/g, '');
    if (content.length < 1) return;
    message.channel.send(
      content
        .split('')
        .map(l => LETTERS[l] || ' ')
        .join(''),
    ).catch(() => {});
  },
});
