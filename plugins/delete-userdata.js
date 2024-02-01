let handler = async (m, { conn, text }) => {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)

if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return conn.reply(m.chat, `*USER ETIQUETTE, WRITE YOUR NUMBER OR REPLY TO MESSAGE TO REDEEM DATA*`, m)
if(isNaN(number)) return conn.reply(m.chat, `*THE NUMBER YOU ENTERED IS INVALID TO RESET THE DATA*`, m)
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
  
let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
let participants = m.isGroup ? groupMetadata.participants : []
let users = m.isGroup ? participants.find(u => u.jid == user) : {}
let number = user.split('@')[0]
  
delete global.global.db.data.users[user]
conn.reply(m.chat, `*IS RESET TO @${number} DATABASE *`, null, { mentions: [user] })
}}

handler.tags = ['owner']
handler.command = ['restablecerdatos', 'borrardatos', 'deletedatauser'] 
handler.helps = ['deleteuserdata'];
handler.owner = true

export default handler
