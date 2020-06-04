const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");

exports.run = (client, message, args) => {
  message.delete((message));
  const ownerID = config.ownerID;

  //si no es propitario del bot salir y hacer nada
  if(message.author.id !== ownerID) {
    return message.reply("No tienes permisos para utilzar ese comando.\n:robot::no_entry: :exclamation: ");
  }

  if(!args || args.size < 1) {
    return message.reply("Must provide a command name to reload.\n:robot::arrows_clockwise::x:");
  }
  const commandName = args[0];
  // Check if the command exists and is valid
  if(!client.commands.has(commandName)) {
    return message.channel.send("**That command does not exist.**\n:robot: :arrows_clockwise: :interrobang: ");
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the client.commands Enmap
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`**The command '¡${commandName}' has been reloaded.**\n:robot::arrows_clockwise: :white_check_mark: `);
};
