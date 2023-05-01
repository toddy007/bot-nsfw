module.exports = {
  name: 'hanal',
  aliases: ['han'],
  nsfw: true,
  run: async (client, message) => {
    require('../../functions/nightapi.js')(client, message, client.apis.nightapi + 'hanal', '🍆🕳️・Hentai anal.')
  }
}