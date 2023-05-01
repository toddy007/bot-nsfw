const { ActionRowBuilder, EmbedBuilder, ButtonBuilder, Colors} = require("discord.js")
module.exports = {
  name: "eval",
  aliases: ['e', 'ev'],
  run: async (client, message, args) => {
    if(!Object.values(client.config.developer).includes(message.author.id)) return message.reply('Você não tem permissão para isso!').then(x => setTimeout(() => x.delete(), 5000));
   
    const row = new ActionRowBuilder().addComponents(new ButtonBuilder()
      .setLabel('DELETAR')
      .setStyle('Danger')
      .setCustomId('x')
    );
    
    try {
      var code = args.join(" ");
      if(!code) return message.reply('\`[PARAMETER]\`: Não está faltando nada não?');
      if(args[0].startsWith('\`\`\`js')) {
        if(!args[args.length - 1].endsWith('\`\`\`')) return message.reply('Começa com codeblock termina com codeblock :rage:');
        args[0] = args[0].replace('\`\`\`js\n','');
        args[args.length - 1] = args[args.length - 1].replace('\`\`\`','');
      };
      
      code = args.join(" ");
      if(!code) return message.reply('\`[PARAMETER]\`: Não está faltando nada não?');
      let evaled = eval(code);
      if (evaled instanceof Promise) await evaled
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
      var embed = new EmbedBuilder()
        .setDescription("\`\`\`js\n"+evaled.slice(0,4084)+ (evaled.slice(4084) ? '...' : '')+"\`\`\`")
        //.setFooter({text: `Executado em ${Date.now() - message.createdTimestamp}ms | CPU: ${cpu} | Memoria: ${memory}/1024MBs`})
        .setColor(Colors.Green);
      var msg = await message.reply({embeds: [embed], components: [row]})
    } catch (err) {
      var embed= new EmbedBuilder()
        .setDescription("\`\`\`xl\n"+err+"\`\`\`")
        .setColor("#FF0000")
        //.setFooter({text: `Executado em ${Date.now() - message.createdTimestamp}ms | CPU: ${cpu} | Memoria: ${memory}/1024MBs`})
    
      var msg = await message.reply({embeds: [embed], components: [row]});
    }
    let coletor = msg.createMessageComponentCollector({max: 1})
    coletor.on('collect', async button => {
      if(button.user.id !== message.author.id) return;
      msg.delete()
    })
  }
}