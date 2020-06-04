const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");

exports.run = async (client, message, user) => {
  const ownerID = config.ownerID;
  if(message.author.id !== ownerID) {
    return message.reply("```No tienes permisos para utilzar ese comando.```\n:robot::no_entry: :exclamation: ").catch(error => message.channel.send(error));
  }
  else;
  let guild = message.member.guild;
  // Make sure the bot user has permissions to make channels and move members in the guild:
  if (!message.guild.me.hasPermission(['MANAGE_CHANNELS', 'MOVE_MEMBERS'])) return message.reply('Missing the required `Manage Channels` and `Move Members` permissions.');
  // Get the mentioned user/bot and check if they're in a voice channel:
  const member = message.mentions.members.first();
  if (!member) return message.reply('You need to @mention a user/bot to kick from the voice channel.');
  if (!member.voiceChannel) return message.reply('That user/bot isn\'t in a voice channel.');
  // Now we make a temporary voice channel, move the user/bot into the channel, and delete it:
  const temp_channel = await message.guild.createChannel(user.id, 'voice', [
    { id: guild.id,
      deny: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK'], },
    { id: member.id,
      deny: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK'] }
  ]);
  await member.setVoiceChannel(temp_channel);
  await temp_channel.delete();
  // Finally, pass some user response to show it all worked out:
  msg.react('👌');
  /* or just "message.reply", etc.. up to you! */
}
