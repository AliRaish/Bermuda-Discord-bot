const ud = require('urban-dictionary');
const Discord = require('discord.js');
// var today = new Date();

exports.run = (client, message, args) => {
  var definition = args[0];

  if (!definition) return message.channel.send('Please give a term!');

  ud.term(definition, function (error, entries) {
    if (error) {
      console.error(error.message);
      message.channel.send('No results found!');
    } else {
      let embed = new Discord.RichEmbed()
        .setAuthor(entries[0].word + ' by ' + entries[0].author)
        .setDescription(entries[0].definition)
        .setColor(4886754)
        .addField('Example(s):', entries[0].example)
        .addField('Thumbs', '👍' + entries[0].thumbs_up + ' | ' + '👎' + entries[0].thumbs_down)
        .addField('Link', '**' + entries[0].permalink + '**');

      message.channel.send({embed: embed});
    }
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'urban',
  description: 'Searches urban dictionary',
  usage: 'urban <query>'
};
