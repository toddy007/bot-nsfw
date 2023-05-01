module.exports = {
  name: 'boobs',
  aliases: ['peitos', 'b', 'p'],
  nsfw: true,
  run: async (client, message) => {
    require('../../functions/nightapi.js')(client, message, client.apis.nightapi + 'boobs', '🍒・Peitos.')
  }
}