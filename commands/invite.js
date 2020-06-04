const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");

exports.run = async (client, message) => {
  
  // const ownerID = config.ownerID;
  //  //si no es propitario del bot salir y hacer nada
  //   if(message.author.id !== ownerID) return;
  
const prefix  = config.prefix;
const clientIcon = client.user.avatarURL
const clientTag = client.user.tag

if (message.channel.type !== "dm"){
message.delete(message);
}
else;
  message.channel.createInvite().then(invite =>
      message.author.send(`${invite}`));
};
