exports.run = async (client, message) => {
  message.delete((message));
  message.channel.send(`Ping del BOT: \`${Date.now() - message.createdTimestamp} ms\``);
};
