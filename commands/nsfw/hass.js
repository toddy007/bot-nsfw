module.exports = {
  name: 'hass',
  aliases: ['hbundas', 'hbunda', 'ha'],
  nsfw: true,
  run: async (client, message) => {
    require('../../functions/nightapi.js')(client, message, client.apis.nightapi + 'hass', '🍑・Bundas hentai.')
  }
}