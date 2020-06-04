const Discord = require("discord.js");
const config = require("../config.json");


module.exports = async (client, message, commandName) => {
  const prefix  = config.prefix;
  if (message.author.bot) return;

// AUTOMATICALLY DELETE MESSAGES WITH OFFENSIVE WORDS
  const hdp = ["WORD1", "WORD2"];
  // const hdps = message.content.slice(prefix.length).trim().split(/ +/g);
  // const hdpss = hdps.shift().toLowerCase();
  if(hdp.some(h => message.content.includes(h)))  {

    let member = message.member
    if (message.channel.type !== "dm")
      {
      message.delete(message);
      }
    else;
      {
      client.channels.get("MODERATIONCHANNELID").send(`**SWEARWORD USED**\nServer: ${message.guild}\nCanal: ${message.channel}\nUsuario: ${message.author}\nMessage: ${message}\n${message.createdAt}.`);
      message.channel.send(`Please ` + message.author + `! \ndont use that language on our server!`).then(m => {
        m.delete(4000);
      });
     }
  }

  const palabras = ["WORD1", "WORD2", "WORD3", "WORD4, WORD5"];

  if(palabras.some(p => message.content.includes(p)))  {
if (message.author.id === config.ownerID) return;
    let member = message.member
    if (message.channel.type !== "dm")
    {
      message.delete(message);
    }
    else;
    {
      client.channels.get("MODERATIONCHANNELID").send(`**PALABROTA**\nServer: ${message.guild}\nCanal: ${message.channel}\nUsuario: ${message.author}\nMessage: ${message}\n${message.createdAt}.`);
      message.channel.send(`Dont use that language! ` + message.author + `! \nWe'll tell you mum! `).then(m => {
        m.delete(3000);
      });
    }
  }

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(config.prefix) !== 0) return;

  // standard argument/command name definition.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //const args2 = message.content.slice(3);
  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, exit and message.reply
  if (!cmd) {
    return message.reply("**That command doesn't exist... :expressionless: **\n:robot: :arrows_clockwise: :interrobang: ").then(m => {
      m.delete(4000);
    });
    }
    client.channels.get("BOTLOGCHANNELID").send(`Command: ¡${command}\nServer: ${message.guild}\n Channel: ${message.channel}\nUser: ${message.author}\n${message.createdAt}.`);
  // Run the command
  cmd.run(client, message, args);
};
