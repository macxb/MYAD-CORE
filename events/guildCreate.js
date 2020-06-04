const Discord = require("discord.js");
const chalk = require("chalk");


module.exports = ("guildCreate", guild => {
  const log = console.log;
  log(chalk.green(`Nuevos Servidores: ${guild.name} (id: ${guild.id}). Este servidor tiene ${guild.memberCount} miembros.`));
});
