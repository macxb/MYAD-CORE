const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");

exports.run = async (client, message, args) => {
  const ownerID = config.ownerID;

  //si no es propitario del bot salir y hacer nada
  if(message.author.id !== ownerID) {
    return message.reply("```No tienes permisos para utilzar ese comando.```\n:robot::no_entry: :exclamation: ").catch(error => message.channel.send(error));
  }

  {
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    member.kick(reason).then(client.channels.get("569100632657494016").send(`**USER KICK**\n**SERVER: ${message.guild} ** \n**CHANNEL: ${message.channel} ** \n**USER: ${member} ** \n**Reason: ${reason}  ** `).catch(error => console.log(error.stack)));
  }
};
