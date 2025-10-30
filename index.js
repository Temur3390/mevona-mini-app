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
        Markup.button.url('📢 Telegram kanal', 'https://t.me/mevona_community'), // 🔗 bu yerga kanal havolasini yoz
        Markup.button.callback('🍏 Pul ishlash', 'pul_ishlash')
      ]
    ])
  );
});

// "🍏 Pul ishlash" tugmasi bosilganda javob
bot.action('pul_ishlash', (ctx) => {
  ctx.reply("💰 Pul ishlash bo‘limiga xush kelibsiz!");
});

bot.launch();

console.log("🍏 MEVONA bot ishga tushdi!");