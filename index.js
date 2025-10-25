import express from "express";
import { Telegraf } from "telegraf";

const app = express();

// Telegram botni ishga tushiramiz
const bot = new Telegraf(process.env.BOT_TOKEN);

// Boshlash komandasi
bot.start((ctx) => ctx.reply("🍒 Mevona mini ilovasiga xush kelibsiz!"));

// Botni ishga tushiramiz
bot.launch();

// Web server (Render uchun)
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("🍒 Mevona mini ilovasi Render’da ishlayapti!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server ${PORT}-portda ishga tushdi`);
});
