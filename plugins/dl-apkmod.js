import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝙀𝙓𝘼𝙈𝙋𝙇𝙀: 𝙀𝙉𝙏𝙀𝙍 𝘼𝙋𝙆 𝙉𝘼𝙈𝙀.*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = ` 𓆩 𓅓 𓆪 *𝘼𝙋𝙋𝙏𝙊𝙄𝘿 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍*  𓆩 𓅓 𓆪 \n\n💌𓅓 *𝙉𝘼𝙈𝙀:* ${data5.name}\n📦𓅓 *Package:* ${data5.package}\n🕒𓅓 *𝙇𝘼𝙎𝙏 𝙐𝙋𝘿𝘼𝙏𝙀𝘿:* ${data5.lastup}\n🧮𓅓 *𝙎𝙄𝙕𝙀:* ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*𝙏𝙃𝙀 𝙁𝙄𝙇𝙀 𝙎𝙄𝙕𝙀 𝙄𝙎 𝙇𝘼𝙍𝙂𝙀 𝘾𝘼𝙉'𝙏 𝙎𝙀𝙉𝘿...*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*𝙉𝙤𝙩 𝙛𝙤𝙪𝙣𝙙...*`;
  }    
};
handler.command = /^(app|apk|apkmod|modapk|dapk2|aptoide|aptoidedl)$/i;
handler.register = false
export default handler;
