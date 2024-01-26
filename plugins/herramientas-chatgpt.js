import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text && !(m.quoted && m.quoted.text)) {
  if (usedPrefix == 'a' || usedPrefix == 'A') return    
if (!text) throw `*${lenguajeGB['smsAvisoMG']()}🧊𝙀𝙓𝘼𝙈𝙋𝙇𝙀: ${usedPrefix + command} 𝙒𝙝𝙖𝙩 𝙞𝙨 𝙄𝙨𝙡𝙖𝙢??`     
 }
  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

try {
m.react('⏳')
await m.reply(wait)
var apii = await fetch(`https://www.guruapi.tech/api/chatgpt?text=${prompt}`)
var res = await apii.json()
await m.reply(res.result)
m.react('✅')
} catch (error) {
console.error(error)
throw 'ERROR'
}

}
handler.command = ['gpt', 'ai']
handler.help = ['gpt']
handler.tags = ['Ai']

handler.premium = false

export default handler
