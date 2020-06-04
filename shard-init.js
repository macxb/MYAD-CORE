/*
 The following code goes into it's own file, and you run this file
 instead of your main bot file.

 REMINDER: You do not need to worry about sharding until your bot
 hits around 2,400 guilds, YOU MUST SHARD before you hit 2,500 guilds
 as Discord are now enforcing this practice, and will prevent your bot from
 reaching the ready event.

*/

const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./bot.js');
Manager.spawn(2); // This example will spawn 2 shards (5,000 guilds);
