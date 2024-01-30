import axios from 'axios';
let handler = async (message, { text: cityName, conn }) => {
  try {
    if (!cityName) {
      throw "`*${lenguajeGB['smsAvisoMG']()}𝙋𝙧𝙤𝙫𝙞𝙙𝙚 𝙘𝙞𝙩𝙮 𝙣𝙖𝙢𝙚 𝙩𝙤 𝙜𝙚𝙩 𝙩𝙝𝙚 𝙥𝙧𝙖𝙮𝙚𝙧 𝙩𝙞𝙢𝙚\n🧊𝙀𝙓𝘼𝙈𝙋𝙇𝙀: *${usedPrefix + command}* 𝙆𝙖𝙧𝙖𝙘𝙝𝙞`";
    }

    const response = await axios.get("https://api.aladhan.com/v1/timingsByCity", {
      'params': {
        'city': cityName,
        'country': "YOUR_COUNTRY_CODE"  
      }
    });
    const prayerTimings = response.data.data.timings;
    const islamicDate = response.data.data.date.readable;
    const islamicMonth = response.data.data.date.hijri.month.en;
    const islamicYear = response.data.data.date.hijri.year;

    const prayerTimeInfo = "📅 𝗜𝗦𝗟𝗔𝗠𝗜𝗖 𝗗𝗔𝗧𝗘: " + islamicDate + "\n" +
      ("🌙 𝗜𝗦𝗟𝗔𝗠𝗜𝗖 𝗠𝗢𝗡𝗧𝗛: " + islamicMonth + "\n") +
      ("📆 𝗜𝗦𝗟𝗔𝗠𝗜𝗖 𝗬𝗘𝗔𝗥: " + islamicYear + "\n\n") +
      ("🤲 𝗣𝗥𝗔𝗬𝗘𝗥 𝗧𝗜𝗠𝗘𝗦 𝗙𝗢𝗥: " + cityName + "*\n") +
      ("🤍𝗙𝗮𝗷𝗮𝗿 *فجر*: " + prayerTimings.Fajr + "\n") +
      ("💛𝗗𝗵𝘂𝗵𝗿 *ظہر*: " + prayerTimings.Dhuhr + "\n") +
      ("🩵𝗔𝘀𝗿 *عصر*: " + prayerTimings.Asr + "\n") +
      ("💙𝗠𝗮𝗴𝗵𝗿𝗶𝗯 *مغرب*: " + prayerTimings.Maghrib + "\n") +
      ("🩶𝗜𝘀𝗵𝗮 *عشاء*: " + prayerTimings.Isha + "\n\n") +
      ("🌄 *𝗦𝘂𝗻𝗿𝗶𝘀𝗲:* " + prayerTimings.Sunrise + "\n") +
      ("🌅 *𝗦𝘂𝗻𝘀𝗲𝘁:* " + prayerTimings.Sunset + "\n") +
      ("🌌 *𝗠𝗶𝗱𝗻𝗶𝗴𝗵𝘁:* " + prayerTimings.Midnight);
  conn.reply(message.chat, prayerTimeInfo, message);
  } catch (error) {
    // Handle errors
    console.error(error);
    message.reply("𝗔𝗡 𝗘𝗥𝗥𝗢𝗥 𝗢𝗖𝗖𝗨𝗥𝗥𝗘𝗗 𝗙𝗥𝗢𝗠 𝗔𝗣𝗜");
  }
};
handler.help = ["prayertime"];
handler.tags = ['utility'];
handler.command = ['prayertime', 'waqat'];

// Export the handler as the default module export
export default handler;
