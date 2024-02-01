import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*⚠️ ENTER A TIKTOK LINK CONTAINING IMAGES.*`
if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
if (!text.includes('tiktok.com')) return m.reply(`*⚠️ URL INVALIDATES.*`)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${global.lolkeysapi}&url=${text}`)
let anu = await res.json()
if (anu.status != '200') throw Error(anu.message)
anu = anu.result
if (anu.length == 0) throw Error('Error : no data')
let c = 0
for (let x of anu) {
if (c == 0) await conn.sendMessage(m.chat, { image: { url: x }, caption: `✅ *1 of ${anu.length} imagery.* ✅\n_The rest will be visible in the bot's private chat_ 😸` }, { quoted : m })
else await conn.sendMessage(m.sender, { image: { url: x } }, { quoted : m })
c += 1
}
} catch (e) {
console.log(e)
throw `*⚠️ ERROR, TRY AGAIN.*`
}}

handler.menu = ['tiktokslide <url>']
handler.tags = ['search']
handler.command = /^((tt|tiktok)img)$/i

handler.premium = true
handler.limit = true

export default handler
