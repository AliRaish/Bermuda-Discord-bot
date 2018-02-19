const chalk = require('chalk');
module.exports = client => {
  console.log(chalk.bgGreen.black('I am ready!'));
  client.user.setPresence({ game: { name: 'b.help', type: 0 } });
};
