const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");

exports.run = async (client, message) => {
  const ownerID = config.ownerID;

  //si no es propitario del bot salir y hacer nada
  if(message.author.id !== ownerID) {
    return message.reply("```No tienes permisos para utilzar ese comando.```\n:robot::no_entry: :exclamation: ").catch(error => message.channel.send(error));
  }

  let clientVcheck = !message.guild.voiceConnection;
  let voiceChan = message.member.voiceChannel;
  if (!voiceChan || voiceChan.type !== "voice") {
    message.channel.send("```No estas conectado a un canal de voz.```").catch(error => message.channel.send(error));
  } else if (clientVcheck) {
      message.channel.send("```No estoy conectado a un canal de voz.```").catch(error => message.channel.send(error));
    } else {
    message.channel.send("```Desconectando del canal de voz...```").then(() => {
      message.channel.send("```Desconectado con exito...✓```").then(() => {
        voiceChan.leave().catch(error => message.channel.send(error));
      }).catch(error => message.channel.send(error));
    }).catch(error => message.channel.send(error));
  }
}
