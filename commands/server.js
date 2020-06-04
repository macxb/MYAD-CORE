const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");


exports.run = async (client, message) => {
  if (message.channel.type === "dm") return;
  const clientIcon = client.user.avatarURL
  const clientTag = client.user.tag

  if (message.channel.type !== "dm"){
  message.delete(message);
  }
  else;

  const embed = new Discord.RichEmbed()
		.setTitle("**Estadisticas del Servidor**")
		 .setAuthor(`${clientTag}`, `${clientIcon}`)
		.setColor(0x00AF46)
		.setDescription("**Comprobando...**")
		.setFooter("MYAD TECHNOLOGIES S.L.E.","https://cdn.discordapp.com/attachments/507454734139916288/564833137025089539/myad-logo-2017-150x129.png")
		.setThumbnail(message.guild.iconURL)
		.setTimestamp()
		.setURL("http://myriad.bitcoinbetmaster.com/")
		.addField("Nombre:", message.guild.name, true)
		.addField("Creado:", message.guild.createdAt, true)
		.addField("Region:", message.guild.region, true)
		.addField("Uniste:", message.member.joinedAt, true)
		.addField("Usuarios:", message.guild.memberCount, true)
		.addField("Admin:", message.guild.owner, true)
    .setImage("https://cdn.discordapp.com/attachments/507454734139916288/568937135554428929/BwPBeG9.gif");
	message.channel.send({embed}).catch(error => console.log(error.stack));
};
