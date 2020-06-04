const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");

exports.run = async (client, message, args, level) => {
  const ownerID = config.ownerID;
   //si no es propitario del bot salir y hacer nada
    if(message.author.id !== ownerID) return;
	message.delete((message));
    await message.reply("```Bot Apagándose...```\n:robot: :zzz: :wrench: ");
    client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });
  process.exit(1);
};
