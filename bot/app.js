import {Telegraf, Markup} from 'telegraf'

const token = '7920861097:AAHFUW9mvmeBaa44JsPeUYMm4QOaTuQBtfo'
const webAppUrl = 'https://elf-game-pro.web.app' 

const bot = new Telegraf(token)

bot.command('start', (ctx) =>{

ctx.reply('Hi! Press to start this app', Markup.inlineKeyboard([
    Markup.button.webApp(
        'Open mini app',
        `${webAppUrl}?ref=${ctx.payload}`
    ),
]))
})

bot.launch()