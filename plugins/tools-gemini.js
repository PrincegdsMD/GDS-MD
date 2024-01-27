import {GoogleGenerativeAI} from '@google/generative-ai'
import displayLoadingScreen from '../lib/loading.js'
const genAI = new GoogleGenerativeAI('AIzaSyDJC5a882ruaC4XL6ejY1yhgRkN-JNQKg8');


let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text && !(m.quoted && m.quoted.text)) {
    if (!text) throw `𝙃𝙚𝙮👋🏻.. 𝙄 𝙖𝙢 𝙜𝙚𝙢𝙞𝙣𝙞 𝙂𝙤𝙤𝙜𝙡𝙚'𝙨 𝙖𝙙𝙫𝙖𝙣𝙘𝙚 𝙖𝙞, 𝙃𝙤𝙬 𝙢𝙖𝙮 𝙄 𝙝𝙚𝙡𝙥 𝙮𝙤𝙪?`
     }
  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }
      m.react('📃')
    await displayLoadingScreen(conn, m.chat)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = text

    const result = await model.generateContent(prompt);
    const response = result.response;
    const textt = response.text();
    m.reply(textt)
  } catch (error) {
    console.error(error);
  }
}
handler.help = ['gemini <text>']
handler.tags = ['tools']
handler.command = ['gemini', 'gm'];

export default handler
