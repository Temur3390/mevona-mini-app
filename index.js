import express from "express";
import { Telegraf } from "telegraf";

const app = express();
const port = process.env.PORT || 3000;

// 🔹 Telegram bot tokenini shu yerga yoz
const bot = new Telegraf("8406803082:AAGb_eMH2RWMHTJQ2aNh1Gc4jfKt0nT73OQ");

// 🔹 /start komandasi uchun tugma chiqadi
bot.start((ctx) => {
  ctx.reply("🍒 Mevonaga xush kelibsiz!", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🌿 Mini ilovani ochish",
            url: "https://temur3390.github.io/mevona-mini-app/", // ← bu SENING URLING
          },
        ],
      ],
    },
  });
});

// 🔹 Render uchun oddiy server
app.get("/", (req, res) => {
  res.send("Mevona bot ishlayapti ✅");
});

// 🔹 Botni ishga tushirish
bot.launch();
app.listen(port, () => {
  console.log(`🚀 Server ${port}-portda ishlayapti`);
});

// 🔹 Xavfsizlik uchun to‘xtatishda signal
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
