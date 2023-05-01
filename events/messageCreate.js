const client = require('../index.js');
const { ActionRowBuilder, ButtonBuilder } = require('discord.js');
const r = client.apis.hentai;
const db = require('secure-db');

client.on('messageCreate', async (message) => {
  if (message.author.bot) return
  const d = db.get('config')?.find(x => x.author === message.author.id);
  const prefixo = client.config.prefix;

  if (message.content.replace('!', '').startsWith('<@' + client.user.id, '>')) {
    const cmds = client.commands.filter(x => x.nsfw).map(a => a.name);
    
    message.channel.send(`🍑・Prefixo: \`${prefixo}\`. Saia da punheta, mas caso queira, tente \`${prefixo + cmds[Math.floor(Math.random() * cmds.length)]}\``);

    return;
  };
  if (!message.content.startsWith(prefixo)) return;

  const args = message.content.slice(prefixo.length).split(' ');
  const cmdName = args.shift().toLowerCase();
  const cmd = client.commands.get(cmdName) || client.commands.find(c => c.aliases && c.aliases.includes(cmdName));

  const button = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
   .setCustomId('pornsfw')
   .setStyle('Success')
   .setEmoji('✅')
   .setLabel('Ativar NSFW no canal').setDisabled(!message.member.permissions.has('ManageChannels'))
);
  if (cmd?.nsfw && !message.channel.nsfw) return message.reply({ content: '🔞・Este comando só pode ser usado em canais NSFW.', components: [button]}).then(a => {
    const { PermissionFlagsBits } = require('discord.js');
    const collector = a.createMessageComponentCollector();

    collector.on('collect', async i => {
      if (i.user.id !== message.author.id) return i.reply({ content: `:x:・Sai daqui punhetero safado, esse botão é para ${message.author}.`, ephemeral: true });
      if (!i.guild.members.me.permissions.has(PermissionFlagsBits.ManageChannels)) return i.reply({ content: `:x:・${client.user.username} precisa da permissão \`Manage Channels\`.`, ephemeral: true });
      if (!i.member.permissions.has(PermissionFlagsBits.ManageChannels)) return i.reply({ content: '🤭・Me parece que você não possui mais a permissões \`Manage Channels\`.' });
      
      await (message.channel.edit({ nsfw: true }), i.deferUpdate());
      
      a.edit({ components: [new ActionRowBuilder().setComponents(new ButtonBuilder().setLabel('Canal NSFW').setCustomId('pinto').setStyle('Success').setEmoji('✅').setDisabled(true))], content: `😋 ・ Agora você pode gozar em paz!` });

      cmd.run(client, message, args);
    });
  });
  
  if (cmd) return cmd.run(client, message, args);
});