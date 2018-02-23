const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const settings = require('../settings.json');
exports.run = async (client, message, args) => {
  const user = message.mentions.users.first();
  const modlog = client.channels.find('name', 'mod-log');
  const caseNum = await caseNumber(client, modlog);
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);

  // message.guild.member(user).kick();
  message.channel.send('Successfully kicked user!');

  const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input. Use ${settings.prefix}reason ${caseNum} <reason>.`;
  const embed = new RichEmbed()
    .setAuthor(`${message.author.tag} | Kick`, `${message.author.avatarURL}`)
    .setColor(16312092)
    .setTimestamp()
    .setDescription(`**Target:** ${user.tag}\n**Reason:** ${reason}\n**ID:** ${user.id}`)
    .setFooter(`Case ${caseNum}`, `${user.avatarURL}`);
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Kicks the mentioned user!',
  usage: 'kick [user] [reason]'
};
