/*              Codigo Creado Por Bruno Sobrino 
      (https://github.com/BrunoSobrino/TheMystic-Bot-MD) 
*/

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`${lenguajeGB['smsAvisoMG']()}ᴇɴᴛᴇʀ ᴀ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ ᴏғ ᴀ ɴᴜᴍʙᴇʀ ᴛᴏ ʀᴇᴍᴏᴠᴇ ᴛʜᴏsᴇ ɴᴜᴍʙᴇʀs ғʀᴏᴍ ᴛʜɪs ɢʀᴏᴜᴘ ᴇxᴀᴍᴘʟᴇ: ${usedPrefix + command} 92*`) 
if (isNaN(args[0])) return m.reply(`${lenguajeGB['smsAvisoMG']()}ᴇɴᴛᴇʀ ᴀ ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ ᴏғ ᴀ ɴᴜᴍʙᴇʀ ᴛᴏ ʀᴇᴍᴏᴠᴇ ᴛʜᴏsᴇ ɴᴜᴍʙᴇʀs ғʀᴏᴍ ᴛʜɪs ɢʀᴏᴜᴘ ᴇxᴀᴍᴘʟᴇ: ${usedPrefix + command} 92*`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`${lenguajeGB['smsAvisoAG']()}*ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ ᴛʜᴇʀᴇ ɪs ɴᴏ ɴᴜᴍʙᴇʀ ᴡɪᴛʜ ᴛʜɪs ᴀʀᴇᴀ ᴄᴏᴅᴇ +${lol}*`)
let numeros = ps.map(v=> '➥ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "listnum": 
conn.reply(m.chat, `⚠️ ʟɪsᴛ ᴏғ ɴᴜᴍʙᴇʀs ᴡɪᴛʜ ᴛʜɪs ᴀʀᴇᴀ ᴄᴏᴅᴇ +${lol}ᴡʜᴏ ᴀʀᴇ ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ⚠️\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "kicknum":  
if (!bot.restrict) return m.reply(`${lenguajeGB['smsAvisoAG']()} ${lenguajeGB['smsSoloOwner']()}`) 
if (!isBotAdmin) return m.reply(`${lenguajeGB['smsAvisoAG']()} ${lenguajeGB['smsAllAdmin']()}`)          
conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()}sᴛᴀʀᴛɪɴɢ ɴᴜᴍʙᴇʀs ᴇʟɪᴍɪɴᴀᴛɪᴏɴ ᴡɪᴛʜ ᴛʜɪs ᴀʀᴇᴀ ᴄᴏᴅᴇ +${lol}, ᴀғᴛᴇʀ ᴇᴠᴇʀʏ 𝟷𝟶 sᴇᴄᴏɴᴅs ᴀ ᴜsᴇʀ ᴡɪʟʟ ʙᴇ ᴇʟɪᴍɪɴᴀᴛᴇᴅ`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]} ʏᴏᴜ ʜᴀᴠᴇ ᴀʟʀᴇᴀᴅʏ ʙᴇᴇɴ ʀᴇᴍᴏᴠᴇᴅ ᴏʀ ʜᴀᴠᴇ ʟᴇғᴛ ᴛʜᴇ ɢʀᴏᴜᴘ`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply(`${lenguajeGB['smsAvisoFG']()}`)}
break            
}}
handler.command = /^(listnum|kicknum)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
