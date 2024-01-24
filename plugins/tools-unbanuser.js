//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ ♨ Tᴀɢ ᴏʀ ᴍᴇɴᴛɪᴏɴ ᴛʜᴇ ᴜsᴇʀ ᴛᴏ ᴜɴʙᴀɴ 🟢`
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `
*✅Hᴀs ʙᴇᴇɴ ᴜɴʙᴀɴɴᴇᴅ🟢*

───────────
@${who.split`@`[0]} Nᴏᴡ ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅs `, m, { mentions: [who] })
}
handler.help = ['unban @user']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true

export default handler
