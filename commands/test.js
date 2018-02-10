exports.run = (client, message) => {
  message.channel.send({embed: {
    title: 'test',
    description: 'testing',
    url: 'https://discordapp.com',
    color: 6702296,
  }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'test',
  description: 'embed test',
  usage: 'test'
};
