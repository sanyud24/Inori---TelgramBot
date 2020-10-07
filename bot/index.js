var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("Your bot token", { polling: true });

telegram.on("text", (message) => {
  telegram.sendMessage(message.chat.id, "Hi i'm inori");
});
