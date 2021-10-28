const TelegramBot = require('node-telegram-bot-api');
const token = '2056349890:AAH8ol_28UwEtU5rPDXyd6taAbbJH5zn4Ts';

const bot = new TelegramBot(token, {polling: true});

console.log('sending...');
bot.sendMessage('-1001242131071', 'Received your message');
console.log('finish!');
