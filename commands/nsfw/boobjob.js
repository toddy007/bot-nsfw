module.exports = {
  name: 'boobjob',
  aliases: ['bj'],
  nsfw: true,
  run: async (client, message) => {
    require('../../functions/nightapi.js')(client, message, client.apis.nightapi + 'paizuri', '🍒🍆・Blowjobs.')
  }
}