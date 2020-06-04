const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");


exports.run = async (client, message) => {

  // const ownerID = config.ownerID;
  //
  // //si no es propitario del bot salir y hacer nada
  // if(message.author.id !== ownerID) {
  //   return message.reply("```No tienes permisos para utilzar ese comando.```\n:robot::no_entry: :exclamation: ").catch(error => message.channel.send(error));
  // }

  const prefix  = config.prefix;
  //SERVER-ONLY-------------------------------------------------
  // salir y parar si el canal es un md.
  if (!message.content.startsWith(prefix) || message.channel.type === "dm") return;

  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  //message.channel.send(emojiList).catch(error => message.channel.send(error));
  let msg = await message.channel.send(emojiList);

    msg.react('👍').then(() => msg.react('👎'));

const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
            message.reply('¡Te gusto!');
        }
        else {
            message.reply('¡¿No moló mucho eh?!');
        }
    })
}
