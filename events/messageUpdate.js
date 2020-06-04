const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const Enmap = require("enmap");

const config = require("../config.json");


module.exports = ('messageUpdate', async (client, oldMessage, newMessage) => {
if (newMessage.channel.type === "dm") return;
if (newMessage.author.bot) return;
  if(newMessage != "ew") {
    client.channels.get("529039594336026634").send(`**User:** ${newMessage.author}\n**Server:** ${newMessage.guild}\n**Channel: **${newMessage.channel}\n**Original message:** ${oldMessage}\n**Edited message: **${newMessage}`).catch(error => console.log(error.stack));
  }
});
