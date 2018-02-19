exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = client.channels.find('name', 'bermuda-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply reason for the unban!');
  if (!user) return message.reply('You must give a user id!').catch(console.error);
  message.guild.unban(user);
  message.channel.send('Successfully unbanned user!');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Unbans the mentioned user!',
  usage: 'unban [user] [reason]'
};
