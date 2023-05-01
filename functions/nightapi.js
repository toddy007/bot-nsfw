const { request } = require('axios')
const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js')
const button = new ActionRowBuilder()
  .addComponents(new ButtonBuilder().setCustomId('último').setStyle('Secondary').setEmoji('⏪').setDisabled(true))
  .addComponents(new ButtonBuilder().setCustomId('próximo').setStyle('Secondary').setEmoji('⏩'))
  .addComponents(new ButtonBuilder().setCustomId('deletar').setStyle('Success').setEmoji('💦').setLabel('Deletar'))

module.exports = async (client, message, api, content) => {
    let porno = [await request(api, {
      headers: {
        authorization: process.env.NIGHTAPIKEY
      }
    })]
    let index = 0

    message.reply({content: content, embeds: [new EmbedBuilder().setImage(porno[0].data.content.url).setColor('Random')], components: [button]}).then(m => {
      let collector = m.createMessageComponentCollector({time: 60000})
    
      collector.on('collect', async (int) => {
        if (int.user.id !== message.author.id) return int.reply({content: '❌・Essa punheta não é sua.', ephemeral: true})
        if (int.customId === 'próximo') {
          button.components[0].setDisabled(false)
          if (porno.length - 1 === index) {
            index++
            let req = await request(api, {
              headers: {
                authorization: process.env.NIGHTAPIKEY
              }
            })
            porno.push(req)
            m.edit({embeds: [new EmbedBuilder().setImage(req.data.content.url).setColor('Random')], components: [button]})
          } else {
            index++
            m.edit({embeds: [new EmbedBuilder().setImage(porno[index].data.content.url).setColor('Random')], components: [button]})
          }
        } else if (int.customId === 'último') {
          index = index > 0 ? --index : 0
          button.components[0].setDisabled(index === 0)
          m.edit({embeds: [new EmbedBuilder().setImage(porno[index].data.content.url).setColor('Random')], components: [button]})
        } else {
          m.delete() 
           m.guild.members.me.permissions.has('ManageMessages') || m.channel.permissionsFor(client.user.id).has('ManageMessages') ? message.delete().catch(e => {}) : null
        }
      int.deferUpdate()
      })
    })
  }