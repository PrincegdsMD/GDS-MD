import {addExif} from '../lib/sticker.js';
const handler = async (m, {conn, text}) => {
  if (!m.quoted) throw '🧊𝙍𝙀𝙋𝙇𝙔 𝙒𝙄𝙏𝙃 𝙎𝙏𝙄𝘾𝙆𝙀𝙍';
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) throw '🧊𝙍𝙀𝙋𝙇𝙔 𝙒𝙄𝙏𝙃 𝙎𝙏𝙄𝘾𝙆𝙀𝙍';
    const img = await m.quoted.download();
    if (!img) throw '🧊𝙍𝙀𝙋𝙇𝙔 𝙒𝙄𝙏𝙃 𝙎𝙏𝙄𝘾𝙆𝙀𝙍';
    stiker = await addExif(img, packname || global.packname, author || global.author);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {asSticker: true});
    else throw '[❗INFO❗] SORRY, SOMETHING WENT WRONG.. CHECK THAT YOU HAVE REPLIED TO A STICKER AND HAVE ADDED A PACKNAME AND USERNAME';
  }
};
handler.help = ['take <packname>|<author>'];
handler.tags = ['sticker'];
handler.command = /^take|robar|wm$/i;
export default handler;
