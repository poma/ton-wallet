require('dotenv').config()
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')

const bot = new Telegraf(process.env.BOT_TOKEN)

const inlineMenu = Telegraf.Extra
    .markdown()
    .markup((m) => m.inlineKeyboard([
        m.callbackButton('👛 Create wallet', '/wallet'),
        m.callbackButton('✉️ Send transaction', '/transaction'),
        m.callbackButton('🔑 Recover key', '/key')
    ]).resize())

const mainMenu = Telegraf.Extra
    .markdown()
    .markup((m) => m.keyboard([
        m.callbackButton('💰 Get more money', '/money'),
    ]).resize())

bot.command('start', (ctx) => {
    //ctx.reply('', mainMenu)
    ctx.reply('Hello, select an action', inlineMenu)
})

bot.command('create', (ctx) => {
    ctx.replyWithMarkdown(`*To:* 0x00dead00beef\n*Amount:* 10 nanoGrams\n*Tx:* 0x00dead00beef`)
})

bot.launch()