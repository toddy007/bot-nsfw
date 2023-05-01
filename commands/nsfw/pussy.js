module.exports = {
  name: 'pussy',
  aliases: ['pussys', 'pssy', 'ps'],
  nsfw: true,
  run: async (client, message) => {
    require('../../functions/nightapi.js')(client, message, client.apis.nightapi + 'pussy', '🌺・Bucetas.')
  }
}