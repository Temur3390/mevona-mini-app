const { Telegraf, Markup } = require('telegraf');

// Bot tokenini shu yerga yoz
const bot = new Telegraf('8406803082:AAGb_eMH2RWMHTJQ2aNh1Gc4jfKt0nT73OQ');

bot.start((ctx) => {
  const text = `
Salom, ${ctx.from.first_name} 👋
🍏 <b>MEVONA</b> ga xush kelibsiz!

🤯 Haqiqiy pul uchun yangi Telegram tapalkasi!
💳 Qulay to'ldirish
💰 Tez to'lovlar
👥 Ro'yxatdan o'tish shart emas — shunchaki <b>«O‘ynash»</b> tugmasini bosing!
👨‍💻 24/7 qo'llab-quvvatlash
`;

  ctx.replyWithHTML(
    text,
    Markup.inlineKeyboard([
      [
        Markup.button.url('📢 Telegram kanal', 'https://t.me/mevona_community'),
        Markup.button.webApp('🍏 Pul ishlash', 'https://t.me/Mevaxona_bot/mevona_app')
      ]
    ])
  );
});

// Optional — foydalanuvchi mini ilovadan chiqqanda
bot.on('message', (ctx) => {
  if (ctx.webAppData) {
    console.log('Mini ilovadan maʼlumot keldi:', ctx.webAppData);
  }
});

bot.launch();

console.log("🍏 MEVONA bot ishga tushdi!");