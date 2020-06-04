const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const Enmap = require("enmap");
const config = require("../config.json");


exports.run = async (client, message, args) => {
  const prefix = config.prefix
if (message.author.id !== config.ownerID) return;
if (message.channel.type !== "dm")
  {
  message.delete(message).catch(error => console.log(error.stack));
  }
  let clientPres = args.slice(prefix).join(' ')
  client.user.setActivity(clientPres, { type: 'WATCHING' });

}
