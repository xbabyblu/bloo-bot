/**
 * Joins your strings into one string and puts them one in each line.
 * @param  {...any} lines The lines of your message.
 * @returns {string} Your joined string.
 */
const format = (...lines) => {
  if (!lines || !lines.length) return '';
  if (!lines.length === 1) return String(lines[0]);
  return lines.reduce((all, current) => all + '\n' + String(current).trim(), '');
};

module.exports = format;
