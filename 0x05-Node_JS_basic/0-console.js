/* print Hello NodeJS with stdout */

function displayMessage(message) {
  process.stdout.write(`${message}\n`);
}

module.exports = displayMessage;
