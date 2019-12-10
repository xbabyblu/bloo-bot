const production = process.env.NODE_ENV === 'production';

const prefix = production ? '!b ' : '💙 ';

// https://chop-bot.github.io/chop-tools/latest/global.html#ChopOptions
module.exports = {
  prefix,
  owners: ['554152090411466754', '517599684961894400'],
  bestMatch: true,
  showNotFoundMessage: true,
  dmHelp: true,
  // ignore, allow, error
  dmCommands: 'ignore',
  findBestMatch: true,
  defaultCooldown: 3,
  // Have fun 👍
  messages: {
    commandNotFound: 'I could not find that command. Have you tried asking ' + prefix + 'Joe?',
    bestMatch: 'Maybe you meant **{0}**?',
    // 0: prefix, 1: command name, 2: command usage
    usageMessage: '```{0}{1} {2}``` To learn more about the **{1}** command use `{0}help {1}`',
    missingArgument: 'You are missing the **{0}** argument.',
    missingPermissions: 'You do not have enough permissions to use the **{0}** command.',
    directMessageError: 'I cannot execute commands in DMs!',
    directMessageErrorSpecific: 'I cannot execute the **{0}** command in DMs!',
    cooldown: 'Please wait **{0}** before using the **{1}** command again.',
  },
};
