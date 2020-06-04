const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");

exports.run = async (client, message) => {
const clientIcon = client.user.avatarURL
const clientTag = client.user.tag
if (message.channel.type !== "dm"){
message.delete(message);
}
else;

const embed = new Discord.RichEmbed()
  .setTitle("**ESTADO DEL BOT**")
  .setAuthor(`${clientTag}`, `${clientIcon}`)
  .setColor(0x00AF46)
  //.setDescription("**¡¡Enhorabuena Claneros!!**")
  .setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/attachments/507454734139916288/564833137025089539/myad-logo-2017-150x129.png")
  .setThumbnail(`${clientIcon}`)
  .setTimestamp()
  //.setURL("http://myriad.bitcoinbetmaster.com")
  .addField("**Ping:**",`**\`${Date.now() - message.createdTimestamp} ms\` ⚡⏱**`,true)
  .addField("**Versión:**","`2.3.1`",true)
  .addField("**Comprobando...**","```Bot Activo...✓``` :robot: :wave: :blush: :white_check_mark: ",true)
  .setImage("https://cdn.discordapp.com/attachments/507454734139916288/568937135554428929/BwPBeG9.gif");
  message.channel.send({embed});
};
