module.exports = {
  name: 'porngif',
  aliases: ['pornogif', 'pg'],
  nsfw: true,
  run: async (client, message) => {
    require('../../functions/nightapi.js')(client, message, client.apis.nightapi + 'pgif', '🍆🌺・Gif porno.')
  }
}