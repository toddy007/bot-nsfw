module.exports = {
  name: 'neko',
  aliases: ['nekos', 'n'],
  nsfw: true,
  run: async (client, message) => {
    require('../../functions/hentai.js')(client, message, client.apis.hentai + 'neko', '🐈・Nekos.')
  }
}