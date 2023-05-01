module.exports = {
  name: 'waifu',
  aliases: ['waifus', 'w', 'wf'],
  nsfw: true,
  run: async (client, message) => {
    require('../../functions/hentai.js')(client, message, client.apis.hentai + 'waifu', '👱‍♀️・Waifus.')
  }
}