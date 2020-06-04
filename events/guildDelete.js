const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const Enmap = require("enmap");
const auth = require("../auth.json");
const config = require("../config.json");
const log = console.log;
const chalk = require("chalk");

module.exports = ("guildDelete", guild => {
  log(chalk.red(`He sido expulsado de: ${guild.name} (id: ${guild.id}) ${guild.memberCount} miembros.`));
});
