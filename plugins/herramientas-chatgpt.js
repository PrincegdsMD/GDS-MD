import fetch from 'node-fetch'
import axios from 'axios'
import translate from '@vitalets/google-translate-api'
import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({ organization: global.openai_org_id, apiKey: global.openai_key });
const openaiii = new OpenAIApi(configuration);
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text && !(m.quoted && m.quoted.text)) {
  if (usedPrefix == 'a' || usedPrefix == 'A') return    
if (!text) throw `*${lenguajeGB['smsAvisoMG']()}🧊𝙀𝙓𝘼𝙈𝙋𝙇𝙀: ${usedPrefix + command} 𝙒𝙝𝙖𝙩 𝙞𝙨 𝙄𝙨𝙡𝙖𝙢??`     
 }
  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }
  try {
    m.react('⏳')
conn.sendPresenceUpdate('composing', m.chat)  
let syms = `You will act as a WhatsApp Bot which was created by PRINCE-GDS, you will be GDS-MD`
let res = await gpt.ChatGpt(text, syms)
await m.reply(res.text)
    m.react('✅')
} catch {
try {   
let ia2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`) //fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let resu2 = await ia2.json()
m.reply(resu2.response.trim()) 
  m.react('✅')
} catch {        
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())
  m.react('✅')
} catch {    
}}}}
handler.command = ['openai', 'gpt', 'ia', 'robot']
export default handler
