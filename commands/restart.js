const Discord = require("discord.js");
const auth = require("../auth.json");
const config = require("../config.json");

exports.run = async (client, message) => {
  const ownerID = config.ownerID;

  //si no es propitario del bot salir y hacer nada
  if (message.author.id !== ownerID) {
    return message.reply("No tienes permisos para utilzar ese comando.\n:robot::no_entry: :exclamation: ");
  }

  message.delete((message));
  client.channels.get("570186844709453844").send("```Resetting...```")
    .then(message => client.destroy())
    .then(() => client.login(auth.token));
}
