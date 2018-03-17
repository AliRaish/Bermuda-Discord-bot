const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../util/caseNumber.js');
const {parseUser} = require('../util/parseUser.js');
const settings = require('../settings.json');
exports.run = async (client, message, args) => {
  const user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = client.channels.find('name', 'bermuda-log');
  const caseNum = await caseNumber(client, modlog);
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (message.mentions.users.size < 1) return message.reply('You must mention a user!').catch(console.error);
  message.guild.ban(user, 2);
  message.channel.send('Successfully banned user!');

  const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input. Use ${settings.prefix}reason ${caseNum} <reason>.`;
  const embed = new RichEmbed()
    .setAuthor(`${message.author.tag} | Ban`, `${message.author.avatarURL}`)
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
  name: 'ban',
  description: 'Bans the mentioned user!',
  usage: 'ban [user] [reason]'
};
