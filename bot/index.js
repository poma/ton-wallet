require('dotenv').config()
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')

const bot = new Telegraf(process.env.BOT_TOKEN)

const messages = {}

bot.command('start', (ctx) => {
    ctx.reply('Hello, my public key is XXX, add it to your new wallet deployment', Telegraf.Extra
    .markdown()
    .markup((m) => m.keyboard([
        m.callbackButton('🔑 Recover key'),
        m.callbackButton('👛 Register new wallet'),
    ]).resize()))
})

bot.hears('🔑 Recover key', ctx => {
    ctx.reply('This option allows you to replace the public key on your wallet in case you lost your private key, but ' +
        'you\'ll be required to wait 1 month. Reply to this message with your new public key to proceed')
    // todo: send recover key transaction, print instructions to the user
})

bot.hears('👛 Register wallet', ctx => {
    ctx.reply('Reply to this message with your wallet address')
    // todo: register address -> ctx.message.chat.id mapping on reply, set up TON listener to new address
})

bot.on('callback_query', ctx => {
    const command = ctx.update.callback_query.data;
    const userId = ctx.update.callback_query.from.id;
    console.log('Received command:', userId, command)

    // todo fix markdown in responses
    if (command.startsWith('confirm-')) {
        tx_id = command.replace('confirm-', '')
        ctx.editMessageText(ctx.update.callback_query.message.text + "\n✅ Confirmed")
        ctx.editMessageReplyMarkup()

        // todo: call confirm command
    } else if (command.startsWith('reject-')) {
        tx_id = command.replace('reject-', '')
        ctx.editMessageText(ctx.update.callback_query.message.text + "\n❌ Rejected")
        ctx.editMessageReplyMarkup()

        // todo: call reject command
    }
})

// todo: call this function on new tx in a wallet
function confirm(chatId, txId, recipient, amount, txHash) {
    const text = `*To:* ${recipient}\n*Amount:* ${amount} nanoGrams\n*Tx:* ${txHash}`
    bot.telegram.sendMessage(chatId, text, Telegraf.Extra
    .markdown()
    .markup((m) => m.inlineKeyboard([
        m.callbackButton('✅ Confirm', 'confirm-' + txId),
        m.callbackButton('❌ Reject', 'reject-' + txId)
    ]).resize()))
}

bot.command('test', (ctx) => {
    confirm(ctx.message.chat.id, 'qss', 'q', 'w', 'e');
})

bot.launch()
console.log('Started')