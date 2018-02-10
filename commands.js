const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require("./settings.json");


client.on("message", (message) => {
  if (message.content.startsWith(`<@388739524374822912>`)) {
    message.channel.send("Hello! My current prefix is " + (prefix));
  } else

  if (message.content.startsWith(prefix + "ping")) {
  } else

  if (message.content.startsWith(prefix + "send")) {
    client.channels.get('355729472600801280').send( (argresult));
  } else

  if (message.content.startsWith(prefix + 'setgame')) {
    client.user.setPresence({ game: { name: (argresult) } });
  } else

  if (message.content.startsWith(prefix + 'setstatus')) {
    client.user.setPresence({ status: (argresult)});
  } else

  if (message.content.startsWith(prefix + 'setusername')) {
    client.user.setUsername((argresult))
  .then(user => console.log(`My new username is ${user.username}`))
  .catch(console.error);
  } else

  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar");
  }
});



var reload = (message, cmd) => {
  delete require.cache[require.resolve('./commands/' + cmd)];
  try {
    let cmdFile = require('./commands/' + cmd);
  } catch (err) {
    message.channel.send(`Problem loading ${cmd}: ${err}`).then(
      response => response.delete(1000).catch(error => console.log(error.stack))
    ).catch(error => console.log(error.stack));
  }
  message.channel.send(`${cmd} reload was a success!`).then(
    response => response.delete(1000).catch(error => console.log(error.stack))
  ).catch(error => console.log(error.stack));
};
exports.reload = reload;
