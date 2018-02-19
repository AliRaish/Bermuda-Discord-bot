const Discord = require('discord.js');

module.exports = (guild, user) => {
  
    const embed = new Discord.RichEmbed()
    .setAuthor('Member Unbanned', `${user.avatarURL}`)
    .setColor(8311585)
    .setTimestamp()
    .setThumbnail(`${user.avatarURL}`)
    .setDescription(`<@${user.id}> ${user.tag}`)
    .setFooter(`ID: ${user.id}`);
  return guild.channels.get('414796308587741205').send({embed: embed});
};
