module.exports = member => {
  let guild = member.guild;
  guild.channels.get('355729472600801280').send(`Please welcome **${member.user.username}** to the server!`);
};
