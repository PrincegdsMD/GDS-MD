import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('Asia/Karachi')
const formatoFecha = {
weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August ', 'September', 'October', 'November', 'December']
}
lugarFecha.locale('en', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu = `${lenguajeGB['smsConfi2']()} *${user.genero === 0 ? '👤' : user.genero == 'Hidden🕶️' ? `🕶️` : user.genero == 'Woman🚺' ? `🚺` : user.genero == 'Man🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : username}*${(conn.user.jid == global.conn.user.jid ? '' : `\n*SOY SUB BOT DE: https://wa.me/${global.conn.user.jid.split`@`[0]}*`) || ''}

\`\`\`${horarioFecha}\`\`\`
⎔ *${lenguajeGB['smsTotalUsers']()}* ➺ _${Object.keys(global.db.data.users).length}_ 
⎔ *Reported »* ${rtotalreg}/${totalreg}    
⎔ *${lenguajeGB['smsUptime']()}* ➺ _${uptime}_ 
⎔ *${lenguajeGB['smsVersion']()}* ➺ _${vs}_
⎔ *${lenguajeGB['smsMode']()} ➺* _${global.opts['self'] ? `${lenguajeGB['smsModePrivate']().charAt(0).toUpperCase() + lenguajeGB['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeGB['smsModePublic']().charAt(0).toUpperCase() + lenguajeGB['smsModePublic']().slice(1).toLowerCase()}`}_
⎔ *${lenguajeGB['smsBanChats']()}* ➺ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
⎔ *${lenguajeGB['smsBanUsers']()}* ➺ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_

✨ *◜USER INFORMATION◞* ✨
⊜ *Record Type »* ${user.registered === true ? `_${user.registroC === true ? 'Full Registration 🗂️' : 'Quick Sign-Up 📑'}_` : '❌ _No Registration_'}
⊜ *My Status »* ${typeof user.miestado !== 'string' ? '❌ _' + usedPrefix + 'miestado_' : '_Me siento ' + user.miestado + '_'}
⊜ *Registered »* ${user.registered === true ? '✅' : '❌ _' + usedPrefix + 'verificar_'}
⊜ *${lenguajeGB['smsBotonM7']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM7']().slice(1).toLowerCase()} »* ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'Premium Pass_'}

⊜ *${lenguajeGB['smsBotonM5']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM5']().slice(1).toLowerCase()} »* ${role}
⊜ *${lenguajeGB['smsBotonM6']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM6']().slice(1).toLowerCase()} »* ${emoji} || ${user.exp - min}/${xp}
⊜ *${lenguajeGB['smsPareja']()}* ${pareja ? `\n*»* ${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeGB['smsResultPareja']()}`}
⊜ *Pastime(s)* ➺ ${user.pasatiempo === 0 ? '*No Registration*' : user.pasatiempo + '\n'}

⊜ *Experience ➟* ${exp} ⚡
⊜ *Diamonds ➟* ${limit} 💎
⊜ *GDSCoins ➟* ${money} 🐈
⊜ *Tokens ➟* ${joincount} 🪙
${readMore}
*╭━〔 GDS-MD INFORMATION T 〕⬣*
┃💫➺ _${usedPrefix}cuentasgatabot | cuentasgb_
┃💫➺ _${usedPrefix}gruposgb | grupos | groupgb_
┃💫➺ _${usedPrefix}donar | donate_
┃💫➺ _${usedPrefix}listagrupos | grouplist_
┃💫➺ _${usedPrefix}estado | heygata | status_
┃💫➺ _${usedPrefix}infogata | infobot_
┃💫➺ _${usedPrefix}instalarbot | installbot_
┃💫➺ _${usedPrefix}creadora | owner_
┃💫➺ _${usedPrefix}velocidad | ping_
┃💫➺ _Bot_ 
┃💫➺ _Terms & Conditions_
*╰━━━━━━━━━━━━⬣*

*╭━〔 SUB BOT FUNCTION 〕━⬣*
┃ *You can convert now*
┃ *Number in GDS-MD!! * 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💻 _${usedPrefix}serbot | jadibot_
┃💻 _${usedPrefix}serbot --code | jadibot --code_
┃💻 _${usedPrefix}bots | listjadibots_
┃💻 _${usedPrefix}detener | stop_
┃💻 _${usedPrefix}bcbot_
*╰━━━━━━━━━━━━⬣*

*╭━〔 REPORT COMMAND 〕━⬣*
┃ *Report with this haber command*
┃ *Failures to be able to Solve!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💌  _${usedPrefix}report *text*_
┃💌  _${usedPrefix}report *text*_
*╰━━━━━━━━━━━━⬣* 

*╭━〔 ÚNETE AL GRUPO 〕━⬣*
┃ *One to GDS-MD in Grupos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪅 _${usedPrefix}botemporal *enlace* *cantidad*_
┃🪅 _${usedPrefix}addbot *enlace* *cantidad*_
*╰━━━━━━━━━━━━⬣*

*╭━〔 BE PREMIUM 〕━⬣*
┃ *Becomes a*
┃ *Premium User!! *
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎟️ _${usedPrefix}listapremium | listprem_
┃🎟️ _${usedPrefix}pase premium_
┃🎟️ _${usedPrefix}pass premium_
*╰━━━━━━━━━━━━⬣*

*╭━〔 GAMES - MULTI GAMES 〕━⬣*
┃🎡➺ _${usedPrefix}mates | matemáticas | math_
┃🎡➺ _${usedPrefix}lanzar *cara* | *cruz*
┃🎡➺ _${usedPrefix}ppt *piedra : papel : tijera*_
┃🎡➺ _${usedPrefix}tictactoe | ttt *sala*_
┃🎡➺ _${usedPrefix}deltictactoe | delttt_
┃🎡➺ _${usedPrefix}topgays_
┃🎡➺ _${usedPrefix}topotakus_
┃🎡➺ _${usedPrefix}toppajer@s_
┃🎡➺ _${usedPrefix}topput@s_
┃🎡➺ _${usedPrefix}topintegrantes | topmember_
┃🎡➺ _${usedPrefix}toplagrasa | topgrease_
┃🎡➺ _${usedPrefix}toppanafrescos | Toppanafresco_
┃🎡➺ _${usedPrefix}topshiposters | Topshipost_
┃🎡➺ _${usedPrefix}toplindos | toplind@s_
┃🎡➺ _${usedPrefix}topfamosos | topfamos@s_
┃🎡➺ _${usedPrefix}topparejas | top5parejas_
┃🎡➺ _${usedPrefix}gay | gay *@tag*_
┃🎡➺ _${usedPrefix}gay2 *name : @tag*_
┃🎡➺ _${usedPrefix}lesbiana *name : @tag*_
┃🎡➺ _${usedPrefix}manca *name : @tag*_
┃🎡➺ _${usedPrefix}manco *name : @tag*_
┃🎡➺ _${usedPrefix}pajero *name : @tag*_
┃🎡➺ _${usedPrefix}pajera *name : @tag*_
┃🎡➺ _${usedPrefix}puto *name : @tag*_
┃🎡➺ _${usedPrefix}puta *name : @tag*_
┃🎡➺ _${usedPrefix}rata *name : @tag*_
┃🎡➺ _${usedPrefix}love *name : @tag*_
┃🎡➺ _${usedPrefix}doxear *name : @tag*_
┃🎡➺ _${usedPrefix}doxxeame_
┃🎡➺ _${usedPrefix}pregunta *text*_
┃🎡➺ _${usedPrefix}apostar | slot *quantity*_
┃🎡➺ _${usedPrefix}formarpareja_
┃🎡➺ _${usedPrefix}dado_
┃🎡➺ _${usedPrefix}verdad_
┃🎡➺ _${usedPrefix}reto_
┃🎡➺ _${usedPrefix}multijuegos_
┃🎡➺ _${usedPrefix}juegos_
*╰━━━━━━━━━━━━⬣*

*╭━〔 IA 〕━⬣*
┃ *You Have the Chance to*
┃ *Chat with GDS-MD!!* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪄➺ _${usedPrefix}simi | okgoogle *text*_
┃🪄➺ _${usedPrefix}alexa | siri | cortana *text*_
┃🪄➺ _${usedPrefix}simsimi | bixby *text*_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ SETTINGS - CHATS ]━━━⬣*
┃ *Configure if you are an Owner(a) and/or*
┃ *Admin!! 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚙️ _${usedPrefix}on *:* off *welcome*_
┃⚙️ _${usedPrefix}on *:* off *detect*_
┃⚙️ _${usedPrefix}on *:* off *autolevelup*_
┃⚙️ _${usedPrefix}on *:* off *restrict*_
┃⚙️ _${usedPrefix}on *:* off *anticall*_
┃⚙️ _${usedPrefix}on *:* off *public*_
┃⚙️ _${usedPrefix}on *:* off *autoread*_
┃⚙️ _${usedPrefix}on *:* off *temporal*_
┃⚙️ _${usedPrefix}on *:* off *stickers*_
┃⚙️ _${usedPrefix}on *:* off *autosticker*_
┃⚙️ _${usedPrefix}on *:* off *reaction*_
┃⚙️ _${usedPrefix}on *:* off *audios*_
┃⚙️ _${usedPrefix}on *:* off *pconly*_
┃⚙️ _${usedPrefix}on *:* off *gconly*_
┃⚙️ _${usedPrefix}on *:* off *antitoxic*_
┃⚙️ _${usedPrefix}on *:* off *antiviewonce*_
┃⚙️ _${usedPrefix}on *:* off *antifake*_
┃⚙️ _${usedPrefix}on *:* off *antilink*_
┃⚙️ _${usedPrefix}on *:* off *antilink2*_
┃⚙️ _${usedPrefix}on *:* off *antitiktok | antitk*_
┃⚙️ _${usedPrefix}on *:* off *antiyoutube | antiyt*_
┃⚙️ _${usedPrefix}on *:* off *antitelegram | antitel*_
┃⚙️ _${usedPrefix}on *:* off *antifacebook | antifb*_
┃⚙️ _${usedPrefix}on *:* off *antinstagram | antig*_
┃⚙️ _${usedPrefix}on *:* off *antitwitter | antitw*_
*╰━━━━━━━━━━━━⬣*



*╭━[ DOWNLOADS ]━⬣*
┃🚀➺ _${usedPrefix}imagen | image *texto*_
┃🚀➺ _${usedPrefix}pinterest | dlpinterest *texto*_
┃🚀➺ _${usedPrefix}wallpaper|wp *texto*_
┃🚀➺ _${usedPrefix}play | play2 *texto o link*_
┃🚀➺ _${usedPrefix}play.1 *texto o link*_
┃🚀➺ _${usedPrefix}play.2 *texto o link*_ 
┃🚀➺ _${usedPrefix}ytmp3 | yta *link*_
┃🚀➺ _${usedPrefix}ytmp4 | ytv *link*_
┃🚀➺ _${usedPrefix}pdocaudio | ytadoc *link*_
┃🚀➺ _${usedPrefix}pdocvieo | ytvdoc *link*_
┃🚀➺ _${usedPrefix}tw |twdl | twitter *link*_
┃🚀➺ _${usedPrefix}facebook | fb *link*_
┃🚀➺ _${usedPrefix}instagram *link video or image*_
┃🚀➺ _${usedPrefix}verig | igstalk *user(a)*_
┃🚀➺ _${usedPrefix}ighistoria | igstory *user(a)*_
┃🚀➺ _${usedPrefix}tiktok *link*_
┃🚀➺ _${usedPrefix}tiktokimagen | ttimagen *link*_
┃🚀➺ _${usedPrefix}tiktokfoto | tiktokphoto *user(a)*_
┃🚀➺ _${usedPrefix}vertiktok | tiktokstalk *user(a)*_
┃🚀➺ _${usedPrefix}mediafire | dlmediafire *link*_
┃🚀➺ _${usedPrefix}clonarepo | gitclone *link*_
┃🚀➺ _${usedPrefix}clima *Country City*_
┃🚀➺ _${usedPrefix}consejo_
┃🚀➺ _${usedPrefix}morse encode *text*_
┃🚀➺ _${usedPrefix}morse Decode *morse*_
┃🚀➺ _${usedPrefix}fraseromantica_
┃🚀➺ _${usedPrefix}historia_
*╰━━━━━━━━━━━━⬣*

*╭━[ ANONYMOUS CHAT ]━⬣*
┃ *Write with Someone* 
┃ *Anonymously!* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃👤➺ _${usedPrefix}chatanonimo | anonimochat_
┃👤➺ _${usedPrefix}anonimoch_
┃👤➺ _${usedPrefix}start_
┃👤➺ _${usedPrefix}next_
┃👤➺ _${usedPrefix}leave_
*╰━━━━━━━━━━━━⬣*

*╭━[ CONFIGURATION - GROUPS ]━⬣*
┃ *Upgrade your Group with GDS-MD!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌐➺ _${usedPrefix}add *numero*_
┃🌐➺ _${usedPrefix}sacar | ban | kick  *@tag*_
┃🌐➺ _${usedPrefix}grupo *abrir : cerrar*_
┃🌐➺ _${usedPrefix}group *open : close*_
┃🌐➺ _${usedPrefix}daradmin | promote *@tag*_
┃🌐➺ _${usedPrefix}quitar | demote *@tag*_
┃🌐➺ _${usedPrefix}banchat_
┃🌐➺ _${usedPrefix}unbanchat_
┃🌐➺ _${usedPrefix}banuser *@tag*_
┃🌐➺ _${usedPrefix}unbanuser *@tag*_
┃🌐➺ _${usedPrefix}admins *text*_
┃🌐➺ _${usedPrefix}invocar *text*_
┃🌐➺ _${usedPrefix}tagall *text*_
┃🌐➺ _${usedPrefix}hidetag *text*_
┃🌐➺ _${usedPrefix}infogrupo | infogroup_
┃🌐➺ _${usedPrefix}grupotiempo | grouptime *Cantidad*_
┃🌐➺ _${usedPrefix}advertencia *@tag*_
┃🌐➺ _${usedPrefix}deladvertencia *@tag*_
┃🌐➺ _${usedPrefix}delwarn *@tag*_
┃🌐➺ _${usedPrefix}crearvoto | startvoto *text*_
┃🌐➺ _${usedPrefix}sivotar | upvote_
┃🌐➺ _${usedPrefix}novotar | devote_
┃🌐➺ _${usedPrefix}vervotos | cekvoto_
┃🌐➺ _${usedPrefix}delvoto | deletevoto_
┃🌐➺ _${usedPrefix}enlace | link_
┃🌐➺ _${usedPrefix}newnombre | nuevonombre *text*_
┃🌐➺ _${usedPrefix}newdesc | descripcion *text*_
┃🌐➺ _${usedPrefix}setwelcome | bienvenida *text*_
┃🌐➺ _${usedPrefix}setbye | despedida *text*_
┃🌐➺ _${usedPrefix}nuevoenlace | resetlink_
┃🌐➺ _${usedPrefix}on_
┃🌐➺ _${usedPrefix}off_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ COUPLES 💞 ]━━⬣*
┃ *Propose to someone*
┃ *so that they are Couples!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃❤️➺ _${usedPrefix}listaparejas | listship_
┃❤️➺ _${usedPrefix}mipareja | mylove_
┃❤️➺ _${usedPrefix}pareja | couple *@tag*_
┃❤️➺ _${usedPrefix}aceptar | accept *@tag*_
┃❤️➺ _${usedPrefix}rechazar | decline *@tag*_
┃❤️➺ _${usedPrefix}terminar | finish *@tag*_
*╰━━━━━━━━━━━━⬣*

*╭━[ GROUP 📧 VOTING ]━⬣*
┃ *Now you can do*
┃ *Group Voting!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃📧➺ _${usedPrefix}crearvoto | startvoto *texto*_
┃📧➺ _${usedPrefix}sivotar | upvote_
┃📧➺ _${usedPrefix}novotar | devote_
┃📧➺ _${usedPrefix}vervotos | cekvoto_
┃📧➺ _${usedPrefix}delvoto | deletevoto_
*╰━━━━━━━━━━━━⬣*


*╭━[ CONVERTERS 🛰️ ]━⬣*
┃ *Turn sticker into image!!*
┃ *Create file link!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🛰️➺ _${usedPrefix}toimg | img | jpg *sticker*_
┃🛰️➺ _${usedPrefix}toanime | SoAnime *photo*_
┃🛰️➺ _${usedPrefix}tomp3 | mp3 *Video, Voice Note*_
┃🛰️➺ _${usedPrefix}tovn | vn *video and audio*_
┃🛰️➺ _${usedPrefix}tovideo *audio*_
┃🛰️➺ _${usedPrefix}tourl *video, image*_
┃🛰️➺ _${usedPrefix}toenlace  *video, image or audio*_
┃🛰️➺ _${usedPrefix}tts en *text*_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ LOGOS 🔆 ]━━⬣*
┃ *Create Logos or Customize*
┃ *Logo information!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔆 _${usedPrefix}logos *Text Effect*_
┃🌅 _${usedPrefix}menulogos2_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ EFFECTS ⛺ ]━━⬣*
┃⛺ _${usedPrefix}simpcard *@tag*_
┃⛺ _${usedPrefix}hornycard *@tag*_
┃⛺ _${usedPrefix}lolice *@tag*_
┃⛺ _${usedPrefix}ytcomment *texto*_
┃⛺ _${usedPrefix}itssostupid_
┃⛺ _${usedPrefix}pixelar_
┃⛺ _${usedPrefix}blur_
*╰━━━━━━━━━━━━⬣*

*╭━[ RANDOM | ANIME 🧩 ]━⬣*
┃🧩 _${usedPrefix}chica_
┃🧩 _${usedPrefix}chico_
┃🧩 _${usedPrefix}cristianoronaldo_
┃🧩 _${usedPrefix}messi_
┃🧩 _${usedPrefix}meme_
┃🧩 _${usedPrefix}meme2_
┃🧩 _${usedPrefix}itzy_
┃🧩 _${usedPrefix}blackpink_
┃🧩 _${usedPrefix}kpop *blackpink : exo : bts*_
┃🧩 _${usedPrefix}lolivid_
┃🧩 _${usedPrefix}loli_
┃🧩 _${usedPrefix}navidad_
┃🧩 _${usedPrefix}ppcouple_
┃🧩 _${usedPrefix}neko_
┃🧩 _${usedPrefix}waifu_
┃🧩 _${usedPrefix}akira_
┃🧩 _${usedPrefix}akiyama_
┃🧩 _${usedPrefix}anna_
┃🧩 _${usedPrefix}asuna_
┃🧩 _${usedPrefix}ayuzawa_
┃🧩 _${usedPrefix}boruto_
┃🧩 _${usedPrefix}chiho_
┃🧩 _${usedPrefix}chitoge_
┃🧩 _${usedPrefix}deidara_
┃🧩 _${usedPrefix}erza_
┃🧩 _${usedPrefix}elaina_
┃🧩 _${usedPrefix}eba_
┃🧩 _${usedPrefix}emilia_
┃🧩 _${usedPrefix}hestia_
┃🧩 _${usedPrefix}hinata_
┃🧩 _${usedPrefix}inori_
┃🧩 _${usedPrefix}isuzu_
┃🧩 _${usedPrefix}itachi_
┃🧩 _${usedPrefix}itori_
┃🧩 _${usedPrefix}kaga_
┃🧩 _${usedPrefix}kagura_
┃🧩 _${usedPrefix}kaori_
┃🧩 _${usedPrefix}keneki_
┃🧩 _${usedPrefix}kotori_
┃🧩 _${usedPrefix}kurumi_
┃🧩 _${usedPrefix}madara_
┃🧩 _${usedPrefix}mikasa_
┃🧩 _${usedPrefix}miku_
┃🧩 _${usedPrefix}minato_
┃🧩 _${usedPrefix}naruto_
┃🧩 _${usedPrefix}nezuko_
┃🧩 _${usedPrefix}sagiri_
┃🧩 _${usedPrefix}sasuke_
┃🧩 _${usedPrefix}sakura_
┃🧩 _${usedPrefix}cosplay_
*╰━━━━━━━━━━━━⬣*

*╭━[ MODIFY AUDIO 🧰 ]━⬣*
┃ *Make Edits*
┃ *to Audio or Voice note!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🧰 _${usedPrefix}bass_
┃🧰 _${usedPrefix}blown_
┃🧰 _${usedPrefix}deep_
┃🧰 _${usedPrefix}earrape_
┃🧰 _${usedPrefix}fast_
┃🧰 _${usedPrefix}fat_
┃🧰 _${usedPrefix}nightcore_
┃🧰 _${usedPrefix}reverse_
┃🧰 _${usedPrefix}robot_
┃🧰 _${usedPrefix}slow_
┃🧰 _${usedPrefix}smooth_
┃🧰 _${usedPrefix}tupai_
*╰━━━━━━━━━━━━⬣*

*╭━━[ SEARCHES 🔍 ]━━⬣*
┃ *Search for what you want with GDS-MD!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔍➺ _${usedPrefix}animeinfo *text*_
┃🔍➺ _${usedPrefix}mangainfo *text*_
┃🔍➺ _${usedPrefix}google *text*_
┃🔍➺ _${usedPrefix}googlelyrics *text*_
┃🔍➺ _${usedPrefix}letra | lyrics *text*_
┃🔍➺ _${usedPrefix}ytsearch | yts *text*_
┃🔍➺ _${usedPrefix}wiki | wikipedia *text*_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ AUDIOS 🔊 ]━━⬣*
┃ *Visit the Audio Menu!!*
┃ *Enjoy a Wide Variety*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➫🔊 _${usedPrefix}audios_
*╰━━━━━━━━━━━━⬣*

*╭━━[ HERRAMIENTAS 🛠️ ]━━⬣*
┃🛠️ _${usedPrefix}afk *reason*_
┃🛠️ _${usedPrefix}acortar *url*_
┃🛠️ _${usedPrefix}calc *Operation Math*_
┃🛠️ _${usedPrefix}del *Reply to Bot message*_
┃🛠️ _${usedPrefix}qrcode *text*_
┃🛠️ _${usedPrefix}readmore *text1|Text2*_
┃🛠️ _${usedPrefix}spamwa *number|text|quantity*_
┃🛠️ _${usedPrefix}styletext *text*_
┃🛠️ _${usedPrefix}traducir *text*_
┃🛠️➺ _${usedPrefix}morse codificar *text*_
┃🛠️➺ _${usedPrefix}morse decodificar *morse*_
┃🛠️➺ _${usedPrefix}encuesta | poll *Reason*_
┃🛠️➺ _${usedPrefix}horario_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ RPG FEATURE ]━━⬣*
┃ *Buy, Buy Souvenirs*
┃ *Improve Your Level & Rank!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪅 _${usedPrefix}botemporal *link* *quantity*_
┃🪅 _${usedPrefix}addbot *link* *quantity*_
┃⚗️➺ _${usedPrefix}pase premium_
┃⚗️➺ _${usedPrefix}pass premium_
┃⚗️➺ _${usedPrefix}listapremium | listprem_
┃⚗️➺ _${usedPrefix}transfer *Type Quantity @tag*_
┃⚗️➺ _${usedPrefix}dar *Type Quantity @tag*_
┃⚗️➺ _${usedPrefix}enviar *Type Quantity @tag*_
┃⚗️➺ _${usedPrefix}balance_
┃⚗️➺ _${usedPrefix}cartera | wallet_
┃⚗️➺ _${usedPrefix}experiencia | exp_
┃⚗️➺ _${usedPrefix}top | lb | leaderboard_
┃⚗️➺ _${usedPrefix}nivel | level | lvl_
┃⚗️➺ _${usedPrefix}rol | rank_
┃⚗️➺ _${usedPrefix}inventario | inventory_
┃⚗️➺ _${usedPrefix}aventura | adventure_
┃⚗️➺ _${usedPrefix}caza | hunt | hunt_
┃⚗️➺ _${usedPrefix}pescar | fishing_
┃⚗️➺ _${usedPrefix}animales_
┃⚗️➺ _${usedPrefix}alimentos_
┃⚗️➺ _${usedPrefix}curar | heal_
┃⚗️➺ _${usedPrefix}buy_
┃⚗️➺ _${usedPrefix}sell_
┃⚗️➺ _${usedPrefix}verificar | registrar_
┃⚗️➺ _${usedPrefix}perfil | profile_
┃⚗️➺ _${usedPrefix}myns_
┃⚗️➺ _${usedPrefix}unreg *Serial Number*_
┃⚗️➺ _${usedPrefix}minardiamantes | Mines_
┃⚗️➺ _${usedPrefix}minargatacoins | minarcoins_
┃⚗️➺ _${usedPrefix}minarexperiencia | Minarexp_
┃⚗️➺ _${usedPrefix}minar *:* minar2 *:* minar3_
┃⚗️➺ _${usedPrefix}reclamar | regalo | claim_
┃⚗️➺ _${usedPrefix}cadahora | hourly_
┃⚗️➺ _${usedPrefix}cadasemana | semanal | weekly_
┃⚗️➺ _${usedPrefix}cadames | mes | monthly_
┃⚗️➺ _${usedPrefix}cofre | abrircofre | coffer_
┃⚗️➺ _${usedPrefix}trabajar | work_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ TOP IN GDS-MD ]━━⬣*
┃ *Find out which Top you are in!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🏆➺ _${usedPrefix}top | lb | leaderboard_
*╰━━━━━━━━━━━━⬣*

*╭━[ STICKERS & FILTERS ]━⬣*
┃ *Make stickers or create*
┃ *stickers with filters!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎐 _${usedPrefix}sticker | s *imagen o video*_
┃🎐 _${usedPrefix}sticker | s *JPG URL*_
┃🎐 _${usedPrefix}emojimix *😺+😆*_
┃🎐 _${usedPrefix}scircle | circle *image*_
┃🎐 _${usedPrefix}semoji | emoji *guy emoji*_
┃🎐 _${usedPrefix}attp *text*_
┃🎐 _${usedPrefix}attp2 *text*_
┃🎐 _${usedPrefix}ttp *text*_
┃🎐 _${usedPrefix}ttp2 *text*_
┃🎐 _${usedPrefix}ttp3 *text*_
┃🎐 _${usedPrefix}ttp4 *text*_
┃🎐 _${usedPrefix}ttp5 *text*_
┃🎐 _${usedPrefix}ttp6 *text*_
┃🎐 _${usedPrefix}dado_
┃🎐 _${usedPrefix}stickermarker *effect : Reply to image*_
┃🎐 _${usedPrefix}stickerfilter *effect : respond To image*_
┃🎐 _${usedPrefix}cs *:* cs2_
*╰━━━━━━━━━━━━⬣*

*╭━[ MODIFY STICKERS ]━⬣*
┃ *Customize the information on the Sticker!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💡 _${usedPrefix}wm *packname|author*_
┃💡 _${usedPrefix}wm *texto1|Text2*_
*╰━━━━━━━━━━━━⬣*

*╭━[ DYNAMIC STICKERS ]━⬣*
┃ *Perform actions with Stickers*
┃ *Tagging someone!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⛱️ _${usedPrefix}palmaditas | pat *@tag*_
┃⛱️ _${usedPrefix}bofetada | slap *@tag*_
┃⛱️ _${usedPrefix}golpear *@tag*_
┃⛱️ _${usedPrefix}besar | kiss *@tag*_
┃⛱️ _${usedPrefix}alimentar | food *@tag*_
*╰━━━━━━━━━━━━⬣*

*╭━[ MENU FOR OWNER ]━⬣*
┃ *Commands only for Owner/A!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💎 _${usedPrefix}join *link*_
┃💎 _${usedPrefix}unete *link*_
┃💎➺ _${usedPrefix}dardiamantes *quantity*_
┃💎➺ _${usedPrefix}darxp *quantity*_
┃💎➺ _${usedPrefix}dargatacoins *quantity*_
┃💎➺ _${usedPrefix}addprem | userpremium *@tag* *quantity*_
┃💎➺ _${usedPrefix}addprem2 | userpremium2 *@tag* *quantity*_
┃💎➺ _${usedPrefix}addprem3 | userpremium3 *@tag* *quantity*_
┃💎➺ _${usedPrefix}addprem4 | userpremium4 *@tag* *quantity*_
┃💎➺ _${usedPrefix}idioma | language_
┃💎➺ _${usedPrefix}cajafuerte_
┃💎➺ _${usedPrefix}comunicar | broadcastall | bc *text*_
┃💎➺ _${usedPrefix}broadcastchats | bcc *text*_
┃💎➺ _${usedPrefix}comunicarpv *text*_
┃💎➺ _${usedPrefix}broadcastgc *text*_
┃💎➺ _${usedPrefix}comunicargrupos *text*_
┃💎➺ _${usedPrefix}borrartmp | cleartmp_
┃💎➺ _${usedPrefix}delexp *@tag*_
┃💎➺ _${usedPrefix}delgatacoins *@tag*_
┃💎➺ _${usedPrefix}deldiamantes *@tag*_
┃💎➺ _${usedPrefix}reiniciar | restart_
┃💎➺ _${usedPrefix}ctualizar | update_
┃💎➺ _${usedPrefix}addprem | +prem *@tag*_
┃💎➺ _${usedPrefix}delprem | -prem *@tag*_
┃💎➺ _${usedPrefix}listapremium | listprem_
┃💎➺ _${usedPrefix}añadirdiamantes *@tag quantity*_
┃💎➺ _${usedPrefix}añadirxp *@tag quantity*_
┃💎➺ _${usedPrefix}añadirgatacoins *@tag quantity*_
*╰━━━━━━━━━━━━⬣*`.trim()
await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.mp4', menu, fkontak)
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
