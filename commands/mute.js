const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const reason = args.slice(1).join(' ');
  const user = message.mentions.users.first();
  const modlog = client.channels.find('name', 'bermuda-log');
  const muteRole = client.guilds.get(message.guild.id).roles.find('name', '🔇Muted');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (!muteRole) return message.reply('I cannot find a mute role');
  if (reason.length < 1) return message.reply('You must supply a reason for the mute!');
  if (message.mentions.users.size < 1) return message.reply('You must mention a user!').catch(console.error);

  const embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} | Mute/Unmute`, `${message.author.avatarURL}`)
    .setColor(16312092)
    .setTimestamp()
    .setDescription(`**Target:** ${user.tag}\n**Reason:** ${reason}`)
    .setFooter(`ID: ${user.id}`, `${user.avatarURL}`);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have the correct permissions.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(()=>{
      client.channels.get(modlog.id).send({embed: embed});
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(()=>{
      client.channels.get(modlog.id).send({embed: embed});
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unmute'],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Mutes or unmutes a user for whatever reason!',
  usage: 'un/mute [user] [reason]'
};
