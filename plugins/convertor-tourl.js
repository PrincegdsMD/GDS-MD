/* 
# Créditos a https://github.com/Undefined17
•• @Azami19 ••
*/
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => gataImg.getRandom())
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `${mg} ʀᴇᴘʟʏ ᴡɪᴛʜ ɪᴍᴀɢᴇ ᴏʀ ᴠɪᴅᴇᴏ ᴛᴏ ɢᴇᴛ ᴛʜᴇ ᴜʀʟ`
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let caption = `🛑 𝙇𝙄𝙉𝙆:\n${link}\n🥏 𝙎𝙄𝙕𝙀: ${media.length}\n🚀 𝑬𝑿𝑷𝑰𝑹𝑨𝑻𝑰𝑶𝑵: ${isTele ? '𝙉𝙊 𝙀𝙓𝙋𝙄𝙍𝘼𝙏𝙄𝙊𝙉' : '𝙐𝙉𝙆𝙉𝙊𝙒𝙉'}\n🔰 𝙎𝙃𝙊𝙍𝙏𝙀𝙉𝙀𝘿: ${await shortUrl(link)}`
conn.reply(m.chat, caption, m, { contextInfo: {externalAdReply :{mediaUrl: md, mediaType: 2, title: wm, body: botdate, thumbnail: await(await fetch(link)).buffer(), sourceUrl: link }}})}
handler.help = ['tourl']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i
export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()
}
