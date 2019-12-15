const { Text } = require('chop-tools');

const Task = require('./_TaskWrapper');

module.exports = Task({
  // this is the log memory task
  name: 'Log Memory',
  // it will repeat in a set interval
  type: 'repeat',
  // which is every 30 minutes.
  time: '*/30 * * * *',
  // it logs to the console how much memory bloo is using.
  async run() {
    console.log('memory task')
    const memory = process.memoryUsage().rss;
    // FIXME: At midnight, 23 goes to 00.
    const uptime = new Date(this.client.uptime).toISOString().substr(11, 8);
    this.client.logger.info(Text.filesize(`[Log] Memory Usage: {filesize:${memory}} | Uptime: ${uptime}`));
  },
});
/* c:
bruh what is the "purpose" of this ??what does it do
To let us know how much memory Bloo is using.
Heroku free plan only lets you use 512MB.
right??

*/