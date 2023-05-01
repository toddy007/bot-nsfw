module.exports = {
  name: 'kitsune',
  aliases: ['kit', 'ks'],
  nsfw: true,
  run: async (client, message) => {
    require('../../functions/nightapi.js')(client, message, client.apis.nightapi + 'hkitsune', '🦊・Kitsunes.')
  }
}