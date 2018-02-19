const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'bermuda-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the kick!');
  if (message.mentions.users.size < 1) return message.reply('You must mention a user!').catch(console.error);

  if(!message.guild.member(user).kickable) return message.reply('I cannot kick that member');
  message.guild.member(user).kick();
  message.channel.send('Successfully kicked user!');

  const embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} | Kick`, `${message.author.avatarURL}`)
    .setColor(13632027)
    .setTimestamp()
    .setDescription(`**Target:** ${user.tag}\n**Reason:** ${reason}`)
    .setFooter(`ID: ${user.id}`, `${user.avatarURL}`);
  return client.channels.get(modlog.id).send({embed: embed});
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
