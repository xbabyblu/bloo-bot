const { Text } = require('chop-tools');

const Task = require('./_TaskWrapper');

module.exports = Task({
  name: 'Log Memory',
  type: 'repeat',
  time: '*/30 * * * *',
  async run() {
    const memory = process.memoryUsage().rss;
    // FIXME: At midnight, 23 goes to 00.
    const uptime = new Date(this.client.uptime).toISOString().substr(11, 8);
    this.client.logger.info(Text.filesize(`[Log] Memory Usage: {filesize:${memory}} | Uptime: ${uptime}`));
  },
});
