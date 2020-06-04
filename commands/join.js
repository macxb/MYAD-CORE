const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
require("ffmpeg");
require("opusscript");

exports.run = async (client, message) => {
  const ownerID = config.ownerID;

  if(message.author.id !== ownerID) return;

  let voiceChan = message.member.voiceChannel;
  if (!voiceChan || voiceChan.type !== "voice") {
    message.channel.send(" ```No estas conectado a un canal de voz.``` ").catch(error => message.channel.send(error));
    } else if (message.guild.voiceConnection) {
    message.channel.send(" ```Ya estoy en el canal de voz.``` ").catch(error => message.channel.send(error));
  } else {
    message.channel.send(" ```Conectando al canal de voz...``` ").then(() => {
      voiceChan.join();
    }).catch(error => message.channel.send(error));
  }
}
