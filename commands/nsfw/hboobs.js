module.exports = {
  name: 'hboobs',
  aliases: ['hpeitos', 'hp', 'hb'],
  nsfw: true,
  run: async (client, message) => {
    require('../../functions/nightapi.js')(client, message, client.apis.nightapi + 'hboobs', '🍒・Peitos hentai.')
  }
}