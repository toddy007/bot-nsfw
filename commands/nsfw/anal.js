module.exports = {
  name: 'anal',
  aliases: ['an'],
  nsfw: true,
  run: async (client, message) => {
    require('../../functions/nightapi.js')(client, message, client.apis.nightapi + 'anal', '🍆🕳️・Anal.')
  }
}