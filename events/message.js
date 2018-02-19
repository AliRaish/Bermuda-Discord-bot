module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if (message.content.match((`<@388739524374822912>`))) {
      return message.channel.send(`The prefix is \`${process.env.PREFIX}\``);
}
  if (!message.content.startsWith(process.env.PREFIX)) return;
  let command = message.content.split(' ')[0].slice(process.env.PREFIX.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};
