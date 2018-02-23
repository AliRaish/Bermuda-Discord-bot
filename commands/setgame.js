exports.run = (client, message, args) => {
  var game = args[0];
  client.user.setPresence({ game: { name: game, type: 0 } });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setgame',
  description: 'Sets current playing status',
  usage: 'setgame [game]'
};
