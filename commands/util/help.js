module.exports = {
  name: "help",
  aliases: ['ajuda'],
  run: async (client, message, args) => {
    message.reply(client.commands.map(a => a).flat().filter(x => !x.type).map(a => `${a.name} (${a.aliases?.join(', ') ?? 'Sem aliases'})`).join('\n'));
  }
};