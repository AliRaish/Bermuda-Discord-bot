const Discord = require('discord.js');

module.exports = (guild, user) => {

  const embed = new Discord.RichEmbed()
    .setAuthor(`${guild.client.unbanAuth.tag} | Unban`, `${guild.client.unbanAuth.avatarURL}`)
    .setColor(8311585)
    .setTimestamp()
    .setDescription(`**Target:** ${user.tag}\n**Reason:** ${guild.client.unbanReason}`)
    .setFooter(`ID: ${user.id}`, `${user.avatarURL}`);
  return guild.channels.get('414796308587741205').send({embed: embed});

};
