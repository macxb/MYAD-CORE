const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const Enmap = require("enmap");
const auth = require("../auth.json");
const config = require("../config.json");
const log = console.log;
const chalk = require("chalk");

module.exports = ('messageDelete', async (client, message) => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first())
  let user = ""
    if (entry.extra.channel.id === message.channel.id
      && (entry.target.id === message.author.id)
      && (entry.createdTimestamp > (Date.now() - 5000))
      && (entry.extra.count >= 1))
    {
    user = entry.executor.name
    }

  
  if (message.guild.id  === "YOURGUILDID1") {
  client.channels.get("MODERATIONCHANNELID").send(`**Message Deleted:** \nServer: ${message.guild}\nCanal: ${message.channel}\nUser: ${message.author}\nMessage: ${message}\n${message.createdAt}.`);
  }

  if (message.guild.id  === "YOURGUILDID2") {
  client.channels.get("MODERATIONCHANNELID").send(`**Message Deleted:** \nServer: ${message.guild}\nCanal: ${message.channel}\nUser: ${message.author}\nMessage: ${message}\n${message.createdAt}.`);
  });
