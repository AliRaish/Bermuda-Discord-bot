const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'bermuda-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the ban!');
  if (message.mentions.users.size < 1) return message.reply('You must mention a user!').catch(console.error);

  if(!message.guild.member(user).bannable) return message.reply('I cannot ban that member');
  message.guild.ban(user, 2);
  message.channel.send('Successfully banned user!');

  const embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} | Ban`, `${message.author.avatarURL}`)
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
  name: 'ban',
  description: 'Bans the mentioned user!',
  usage: 'ban [user] [reason]'
};
