let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `${ag}𝙎𝙄 𝙉𝙊 𝙀𝙎 𝙎𝙐𝘽 𝘽𝙊𝙏, 𝘾𝙊𝙈𝙐𝙉𝙄𝙌𝙐𝙀𝙎𝙀 𝘼𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇 𝙋𝘼𝙍𝘼 𝙎𝙀𝙍 𝘽𝙊𝙏\n\n𝙄𝙁 𝙔𝙊𝙐 𝘼𝙍𝙀 𝙉𝙊𝙏 𝘼 𝙎𝙐𝘽 𝘽𝙊𝙏, 𝘾𝙊𝙉𝙏𝘼𝘾𝙏 𝙏𝙃𝙀 𝙈𝘼𝙄𝙉 𝙉𝙐𝙈𝘽𝙀𝙍 𝙏𝙊 𝘽𝙀𝘾𝙊𝙈𝙀 𝘼 𝘽𝙊𝙏`, m)
else {
await conn.reply(m.chat, `${rg}𝙐𝙎𝙏𝙀𝘿 𝙃𝘼 𝘾𝙀𝙍𝙍𝘼𝘿𝙊 𝙎𝙀𝙎𝙄𝙊𝙉 𝘾𝙊𝙉𝙈𝙄𝙂𝙊 🙀\n\n𝙔𝙊𝙐 𝙃𝘼𝙑𝙀 𝙇𝙊𝙂𝙂𝙀𝘿 𝙊𝙐𝙏 𝙒𝙄𝙏𝙃 𝙈𝙀 😯`, m)
conn.ws.close()}}
handler.command = /^(berhenti|stop|detener)$/i
handler.owner = true  
handler.fail = null
export default handler
