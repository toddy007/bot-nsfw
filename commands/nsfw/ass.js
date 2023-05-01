module.exports = {
  name: 'ass',
  aliases: ['a', 'bundas', 'bunda'],
  nsfw: true,
  run: async (client, message) => {
    require('../../functions/nightapi.js')(client, message, client.apis.nightapi + 'ass', '🍑・Bundas.')
  }
}