
import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text, args }) => {
  if (!m.quoted) throw '🧊𝙍𝙀𝙋𝙇𝙔 𝙒𝙄𝙏𝙃 𝙎𝙏𝙄𝘾𝙆𝙀𝙍'
  let packsticker = process.env.BOTNAME
  let stickauthor = process.env.BOTNAME
  let stiker = false
       let stick = args.join(" ").split("|");
       let f = stick[0] !== "" ? stick[0] : packsticker;
       let g = typeof stick[1] !== "undefined" ? stick[1] : stickauthor;
  try {
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw '🧊𝙍𝙀𝙋𝙇𝙔 𝙒𝙄𝙏𝙃 𝙎𝙏𝙄𝘾𝙆𝙀𝙍'
    let img = await m.quoted.download()
    if (!img) throw '🧊𝙍𝙀𝙋𝙇𝙔 𝙒𝙄𝙏𝙃 𝙎𝙏𝙄𝘾𝙆𝙀𝙍!'
    stiker = await addExif(img, f, g)
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, null)
     else throw 'conversion failed'
  }
}
handler.help = ['take <name>|<author>']
handler.tags = ['sticker']
handler.command = ['take', 'wm'] 

export default handler
