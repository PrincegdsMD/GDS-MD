import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
const notStickerMessage = `${lenguajeGB['smsAvisoMG']()}𝙍𝙀𝙎𝙋𝙊𝙉𝘿 𝙏𝙊 𝘼 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙏𝙊 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙄𝙉𝙏𝙊 𝘼𝙉 𝙄𝙈𝘼𝙂𝙀 𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 *${usedPrefix + command}*`
if (!m.quoted) throw notStickerMessage
const q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) throw notStickerMessage
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', null, m)
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['toimg', 'img', 'jpg']
export default handler
