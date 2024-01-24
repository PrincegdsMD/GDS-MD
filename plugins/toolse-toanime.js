import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || q.mediaType || '';
if (!/image/g.test(mime)) throw `${lenguajeGB.smsAvisoMG()}𝙍𝙚𝙥𝙡𝙮 𝙬𝙞𝙩𝙝 𝙖 𝙥𝙞𝙘𝙩𝙪𝙧𝙚 𝙩𝙤 𝙢𝙖𝙠𝙚 𝙩𝙝𝙚 𝙥𝙞𝙘𝙩𝙪𝙧𝙚 𝙞𝙣𝙩𝙤 𝘼𝙣𝙞𝙢𝙚`
  m.reply(`${lenguajeGB.smsAvisoIIG()}𝙋𝙇𝙀𝘼𝙎𝙀 𝙒𝘼𝙄𝙏 𝙄 𝘼𝙈 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙉𝙂 𝙔𝙊𝙐𝙍 𝙄𝙈𝘼𝙂𝙀 𝙄𝙉𝙏𝙊 𝘼𝙉𝙄𝙈𝙀 𝘿𝙀𝙎𝙄𝙂𝙉, 𝘽𝙀 𝙋𝘼𝙏𝙄𝙀𝙉𝙏 𝙏𝙄𝙇𝙇 𝙄 𝙎𝙀𝙉𝘿 𝙔𝙊𝙐 𝙏𝙃𝙀 𝙍𝙀𝙎𝙐𝙇𝙏`);
const data = await q.download?.();
const image = await uploadImage(data);
try {
const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
} catch (i) {
try {
const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
} catch (a) {
try {
const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
} catch (e) {
throw `${lenguajeGB.smsAvisoFG()}𝙀𝙧𝙧𝙤𝙧 𝙫𝙚𝙧𝙞𝙛𝙮 𝙩𝙝𝙖𝙩 𝙩𝙝𝙚 𝙞𝙢𝙖𝙜𝙚 𝙝𝙖𝙨 𝙖 𝙛𝙖𝙘𝙚 𝙤𝙛 𝙖 𝙥𝙚𝙧𝙨𝙤𝙣`
}}}}
handler.help = ['toanime'];
handler.tags = ['tools'];
handler.command = /^(picanime|toanime)$/i;
export default handler;
