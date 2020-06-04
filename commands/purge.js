const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");

exports.run = async (client, message) => {

  const ownerID = config.ownerID;

  //si no es propitario del bot salir y hacer nada
  if(message.author.id !== ownerID) {
    return message.reply("No tienes permisos para utilzar ese comando.\n:robot::no_entry: :exclamation: ");
  }
  message.delete((message));
const user = message.mentions.users.first();
// Parse Amount
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if (!amount) return message.reply('Must specify an amount to delete!');
if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
// Fetch 100 messages (will be filtered and lowered up to max amount requested)
message.channel.fetchMessages({
 limit: 100,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : Client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
}
