module.exports = member => {
  let guild = member.guild;
  guild.channels.get('355729472600801280').send(`Please say goodbye to **${member.user.username}** , we will miss you!`);
};
