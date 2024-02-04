var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = `*🩵𝙂𝘿𝙎-𝘽𝙊𝙏-𝙈𝘿🩵*

𝙉𝘼𝙈𝙀: *gdpdf* to download pdf from gdrive link
*—◉* https://gist.github.com/PRINCE-GDS/91dfd12f7d463c30d26311258f30adb3


𝙉𝘼𝙈𝙀:
*—◉*
*---------------------*


*_ᴛʜᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ_*
*${asistencia}*`

await conn.sendFile(m.chat, pp, 'menuvid', cat, fkontak)
}
handler.help = ['plugins', 'pluginslist']
handler.tags = ['plugins', 'pluginalist']
handler.command = /^(plugins|pluginslist|plist|listplugins|listp)$/i

export default handler
