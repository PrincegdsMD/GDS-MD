var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = `*🩵𝙂𝘿𝙎-𝘽𝙊𝙏-𝙈𝘿🩵*

𝙉𝘼𝙈𝙀: 𝙋𝙍𝙄𝙉𝘾𝙀💗
*_—◉ ɢᴅs-ᴍᴅ ʙᴏᴛ ᴏᴡɴᴇʀ 𝟷 wa.me/923092668108_*


𝙉𝘼𝙈𝙀: 𝙋𝙍𝙄𝙉𝘾𝙀💗
*_—◉ ɢᴅs-ᴍᴅ ʙᴏᴛ ᴏᴡɴᴇʀ 2 wa.me/92Your second number here_*
*---------------------*


*_ᴛʜᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ_*
*${asistencia}*`

await conn.sendFile(m.chat, pp, 'menuvid', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
