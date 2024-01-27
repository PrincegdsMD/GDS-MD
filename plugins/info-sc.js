let { generateWAMessageFromContent } = (await import(global.baileys)).default 
import { performance } from 'perf_hooks'
import fs from 'fs'
import moment from 'moment-timezone';
import fetch from 'node-fetch';
let handler  = async (m, { conn, usedPrefix: _p }) => {
const res = await fetch('https://api.github.com/repos/PRINCE-GDS/GDS-MD');
const json = await res.json();
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var days = Math.floor(seconds / (24 * 60 * 60 * 1000));
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `❇️🩵 𝙂𝘿𝙎-𝙈𝘿 𝘽𝙊𝙏-𝙎𝘾𝙍𝙄𝙋𝙏 🩵❇️\n\n*🧊𝙉𝘼𝙈𝙀:* *${json?.name || 'GDS-MD'}*\n*🧊𝙎𝙏𝘼𝙍𝙎:* *${json?.watchers_count || '-'}*\n*🧊𝙁𝙊𝙍𝙆𝙎:* *${json?.forks_count || '-'}*\n*🧊𝘿𝘼𝙏𝙀:* *${moment(json?.updated_at).format('DD/MM/YY - HH:mm:ss') || '-'}*\n*🧊𝙍𝙀𝙋𝙊-𝙐𝙍𝙇:* *${json?.html_url || 'https://github.com/PRINCE-GDS/GDS-MD'}*\n\n\n*⏰𝘽𝙊𝙏 𝘼𝘾𝙏𝙄𝙑𝙀 𝘿𝙐𝙍𝘼𝙏𝙄𝙊𝙉⏰*\n🧊𝘿𝙖𝙮𝙨 \t*${pad(days)}*\n🧊𝙃𝙤𝙪𝙧𝙨 \t*${pad(hours)}*\n🧊𝙈𝙞𝙣𝙪𝙩𝙚𝙨 *${pad(minutes)}* \n🧊𝙎𝙚𝙘𝙤𝙣𝙙𝙨 *${pad(seconds)}* \t\n`
}
					const runtime = process.uptime()
		            const teks = `${kyun(runtime)}`
					const itsme = `0@s.whatsapp.net`
					const split = `uwu >//<`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
				    text: split
									}
								}
							}
					}

	let pp = gataImg.getRandom()
						  let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: -10062007, status: 500,
surface: 999,
message: teks,
description: '^^',
orderTitle: 'Hi bruh',
token: '9',
curreyCode: 'PKR',
totalCurrencyCode: '>Rs<',
totalAmount1000: '1000000',
sellerJid: 'https://github.com/PRINCE-GDS/GDS-MD',
thumbnail: pp,
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)
//conn.sendMessage(m.chat, `${teks}`, MessageType.text, rtimebro)
}
handler.help = ['runtime', 'script']
handler.tags = ['info']
handler.command = /^(runtime|sc|active|git|script|github|repo|repository)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null 

export default handler
