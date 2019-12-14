const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.command('start', (ctx) =>
{
    ctx.reply('Hello')
})
bot.launch()