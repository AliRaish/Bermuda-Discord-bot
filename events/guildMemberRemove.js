const Discord = require('discord.js');

module.exports = member => {
  let guild = member.guild;
  
    const embed = new Discord.RichEmbed()
    .setAuthor('Member Left', `${member.user.avatarURL}`)
    .setColor(13632027)
    .setTimestamp()
    .setThumbnail(`${member.user.avatarURL}`)
    .setDescription(`<@${member.user.id}> ${member.user.tag}`)
    .setFooter(`ID: ${member.user.id}`);
  return guild.channels.get('414796308587741205').send({embed: embed});
};
