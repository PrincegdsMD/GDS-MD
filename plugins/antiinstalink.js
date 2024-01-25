
const linkRegex = /instagram.com/i\/(?:reels\/)?([0-9A-Za-z]{20,24})/i

export async function before(m, {conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiLinkIg = linkRegex.exec(m.text)

    if (chat.antiInstagram && isAntiLinkIg && !isAdmin) {
        if (isBotAdmin) {
           
        }
        await conn.reply(m.chat, `*≡ 🛡️Link Detected❎*
            You have violated the group rule
We do not allow links from other groups 
bye bye 👋🏻 *@${m.sender.split('@')[0]}*  you will be kicked out of the group ${isBotAdmin ? '' : '\n\nIM not an admin so I canT expel you :"v'}`, null, { mentions: [m.sender] } )
        if (isBotAdmin && chat.antiInstagram) {
        	await conn.sendMessage(m.chat, { delete: m.key })
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!chat.antiInstagram) return //m.reply('')
    }
    return !0
}
