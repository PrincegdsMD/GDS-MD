import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text && !(m.quoted && m.quoted.text)) {    
if (!text) throw `*${lenguajeGB['smsAvisoMG']()}🧊𝙀𝙓𝘼𝙈𝙋𝙇𝙀: *${usedPrefix + command}* 𝙒𝙝𝙖𝙩 𝙞𝙨 𝙄𝙨𝙡𝙖𝙢??`     
 }
  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }
try {

await m.reply(wait)
var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)

} catch (error) {
console.error(error)
throw '𝘼𝙋𝙄 𝙀𝙍𝙍𝙊𝙍'
}

}
handler.command = ['bard']
handler.help = ['bard']
handler.tags = ['herramientas']

handler.premium = false

export default handler
