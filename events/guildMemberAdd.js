const Discord = require('discord.js');

module.exports = (member, message, client) => {
  let guild = member.guild;
  
    const embed = new Discord.RichEmbed()
    .setAuthor('Member Joined', `${member.user.avatarURL}`)
    .setColor(8311585)
    .setTimestamp()
    .setThumbnail(`${member.user.avatarURL}`)
    .setDescription(`<@${member.user.id}> ${member.user.tag}`)
    .setFooter(`ID: ${member.user.id}`);
  return guild.channels.get('414796308587741205').send({embed: embed});
};
