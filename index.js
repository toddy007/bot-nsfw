const { Client, Collection, Partials } = require('discord.js');
const { sync } = require('glob');

const client = new Client({ intents: [61987], partials: [Partials.Message, Partials.Channel] });
client.commands = new Collection();
client.config = require('./config.json');
client.apis = require('./variables.json').apis;

module.exports = client;

//client.application.commands.set(require('./commands/slashcommands/collection'));

sync('./events/*.js').forEach(event => {
  const e = require(event);
});

sync('./commands/**/*.js').forEach(command => {
  const cmd = require(command);
  client.commands.set(cmd.name, cmd);
});

client.login(process.env.TOKEN);