const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const Enmap = require("enmap");
const chalk = require("chalk");
const auth = require("./auth.json");
const config = require("./config.json");
const prefix = config.prefix;
const log = console.log;


//CONSOLE-----------------------------------------------------------------------
client.on("ready", () => {
//  let msg = client.channels.get("517340362164142090").message.size();
  log(chalk.black.red(`Logged in as ${client.user.tag}`));
  log(chalk.black.red(client.guilds.size + " Servidores"));
  log(chalk.black.red(client.users.size + " Usuarios"));
  //log(chalk.green(`He procesado: ${msg} Comandos`));
  log(chalk.black.red("Actividad del BOT fijada."));
  log(chalk.black.red("Okas, todo listo, asi que Damosle!"));
  client.user.setStatus("online");
  client.user.setActivity("que haceís...", {type: "WATCHING"});

});

//COMMAND HANDLER---------------------------------------------------------------
client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;

    // Load the command file itself
    let props = require(`./commands/${file}`);

    // Get just the command name from the file name
    let commandName = file.split(".")[0];

    console.log(`Cargando Comando: ${prefix}${commandName}`);
    // Here we simply store the whole thing in the command Enmap. We're not running it right now.
    client.commands.set(commandName, props);
  });
});

//EVENTS HANDLER----------------------------------------------------------------
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Cargando Evento: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

// client.on ("debug", e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

// client.on("warn", e => {
//   console.log(chalk.bgYellow(error.replace(regToken, "that was redacted")));
// });


//pedir token del bot, el const auth de arriba le dice donde buscar el token.
client.login(auth.token);
