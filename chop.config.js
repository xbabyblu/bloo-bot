const production = process.env.NODE_ENV === 'production';

module.exports = {
  prefix: production ? '!b ' : '!bd ',
  owners: ['554152090411466754', '517599684961894400'],
  bestMatch: true,
  showNotFoundMessage: true,
  // Have fun 👍
  messages: {
    commandNotFound: 'I could not find that command. Have you tried asking !b Joe?',
    bestMatch: 'Uhhh I don\'t know that command. Maybe you meant **{0}**?',
    // 0: prefix, 1: command name, 2: command usage
    usageMessage: '```{0}{1} {2}``` To learn more about the **{1}** command use `{0}help {1}`',
    missingArgument: 'You are missing the **{0}** argument.',
    missingPermissions: 'You do not have enough permissions to use the **{0}** command.',
    directMessageError: 'I cannot execute commands in DMs!',
    directMessageErrorSpecific: 'I cannot execute the **{0}** command in DMs!',
    cooldown: 'Please wait **{0}** before using the **{1}** command again.',
  },
};
