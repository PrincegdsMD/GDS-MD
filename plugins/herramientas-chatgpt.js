/* -------------------------------------------------------*/
/* [❗]                      [❗]                      [❗] */
/*                                                       */
/*       |- [ ⚠ ] - CREDITOS DEL CODIGO - [ ⚠ ] -|      */
/*     —◉ DESAROLLADO POR OTOSAKA:                       */
/*     ◉ Otosaka (https://github.com/6otosaka9)          */
/*     ◉ Número: wa.me/51993966345                       */
/*                                                       */
/*     —◉ FT:                                            */
/*     ◉ BrunoSobrino (https://github.com/BrunoSobrino)  */
/*                                                       */
/* [❗]                      [❗]                      [❗] */
/* -------------------------------------------------------*/
import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text && !(m.quoted && m.quoted.text)) {
  if (usedPrefix == 'a' || usedPrefix == 'A') return    
if (!text) throw `*${lenguajeGB['smsAvisoMG']()}🧊𝙀𝙓𝘼𝙈𝙋𝙇𝙀: ${usedPrefix + command} 𝙒𝙝𝙖𝙩 𝙞𝙨 𝙄𝙨𝙡𝙖𝙢??`     
 }
  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }
  try {
        m.react('⏳')
        conn.sendPresenceUpdate('composing', m.chat);
        //let sistema1 = await fetch(`https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt`).then(v => v.text());
        let sistema1 = `Actuaras como un Bot de WhatsApp el cual fue creado por BrunoSobrino, tu seras The Mystic - Bot.`;
        async function getOpenAIChatCompletion(texto) {
        const openaiAPIKey = global.openai_key;
        let chgptdb = global.chatgpt.data.users[m.sender];
        chgptdb.push({ role: 'user', content: texto });
        const url = "https://api.openai.com/v1/chat/completions";
        const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${openaiAPIKey}` };
        const data = { "model": "gpt-3.5-turbo", "messages": [{ "role": "system", "content": sistema1 }, ...chgptdb, ]};
        const response = await fetch(url, {method: "POST", headers: headers, body: JSON.stringify(data)});
        const result = await response.json();
        const finalResponse = result.choices[0].message.content;
        return finalResponse;
        };
        let respuesta = await getOpenAIChatCompletion(text);
        if (respuesta == 'error' || respuesta == '' || !respuesta) return XD; // causar error undefined para usar otra api
        m.reply(`${respuesta}`.trim());
    m.react('✅')
    } catch {
      try {
        conn.sendPresenceUpdate('composing', m.chat);
        const botIA222 = await openaiii.createCompletion({model: 'text-davinci-003', prompt: text, temperature: 0.3, max_tokens: 4097, stop: ['Ai:', 'Human:'], top_p: 1, frequency_penalty: 0.2, presence_penalty: 0});
        if (botIA222.data.choices[0].text == 'error' || botIA222.data.choices[0].text == '' || !botIA222.data.choices[0].text) return XD; // causar error undefined para usar otra api
        m.reply(botIA222.data.choices[0].text.trim());
    } catch {
      try {
        conn.sendPresenceUpdate('composing', m.chat);
        const syms1 = `Actuaras como un Bot de WhatsApp el cual fue creado por BrunoSobrino, tu seras The Mystic - Bot.`;
        const fgapi1 = await fetch(`https://api-fgmods.ddns.net/api/info/openai?text=${text}&symsg=${syms1}&apikey=XlwAnX8d`);
        const fgjson1 = await fgapi1.json();
        if (fgjson1.result == 'error' || fgjson1.result == '' || !fgjson1.result) return XD; // causar error undefined para lanzar msg de error
        m.reply(`${fgjson1.result}`.trim());
     m.react('✅')
    } catch {
      try {
        conn.sendPresenceUpdate('composing', m.chat);
        const vihangayt1 = await fetch(`https://vihangayt.me/tools/chatgpt?q=${text}`);
        const vihangaytjson1 = await vihangayt1.json();
        if (vihangaytjson1.data == 'error' || vihangaytjson1.data == '' || !vihangaytjson1.data) return XD; // causar error undefined para usar otra api
        m.reply(`${vihangaytjson1.data}`.trim());
        m.react('✅')
    } catch {
      try {
        conn.sendPresenceUpdate('composing', m.chat);
        const vihangayt2 = await fetch(`https://vihangayt.me/tools/chatgpt2?q=${text}`);
        const vihangaytjson2 = await vihangayt2.json();
        if (vihangaytjson2.data == 'error' || vihangaytjson2.data == '' || !vihangaytjson2.data) return XD; // causar error undefined para usar otra api
        m.reply(`${vihangaytjson2.data}`.trim());
        m.react('✅')
    } catch {
      try {
        conn.sendPresenceUpdate('composing', m.chat);
        const vihangayt3 = await fetch(`https://vihangayt.me/tools/chatgpt3?q=${text}`);
        const vihangaytjson3 = await vihangayt3.json();
        if (vihangaytjson3.data == 'error' || vihangaytjson3.data == '' || !vihangaytjson3.data) return XD; // causar error undefined para usar otra api
        m.reply(`${vihangaytjson3.data}`.trim()); 
        m.react('✅')
    } catch {
      try {
        conn.sendPresenceUpdate('composing', m.chat);
        const tioress22 = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=${m.sender}`);
        const hasill22 = await tioress22.json();
        if (hasill22.result == 'error' || hasill22.result == '' || !hasill22.result) return XD; // causar error undefined para usar otra api
        const hasill22_result = await translate(`${hasill22.result}`, {to: 'ur', autoCorrect: true});
        m.reply(`${hasill22_result.text}`.trim());
        m.react('✅')
    } catch {
      try {
        conn.sendPresenceUpdate('composing', m.chat);
        const searchString2 = ' Indonesia ';
        const replacementString2 = ' español ';
        const rres = await fetch(`https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`);
        const jjson = await rres.json();
        const hahaha = await translate(`${jjson.data}`, {to: 'ur', autoCorrect: true});
        const sextS = hahaha.text;
        const replacedText = sextS.replace(searchString2, replacementString2).trim();
        m.reply(replacedText);
        m.react('✅')
    } catch {
      try {
        conn.sendPresenceUpdate('composing', m.chat);
        const akuariapi2 = await fetch(`https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`);
        const akuariapijson2 = await akuariapi2.json();
        if (akuariapijson2.respon == 'error' || akuariapijson2.respon == '' || !akuariapijson2.respon) return XD; // causar error undefined para lanzar msg de error
        const akuariapiresult2 = await translate(`${akuariapijson2.respon}`, {to: 'ur', autoCorrect: true});
        m.reply(akuariapiresult2.text.trim());
        m.react('✅')
    } catch {
      try {
        conn.sendPresenceUpdate('composing', m.chat);
        const akuariapi1 = await fetch(`https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`);
        const akuariapijson1 = await akuariapi1.json();
        if (akuariapijson1.respon == 'error' || akuariapijson1.respon == '' || !akuariapijson1.respon) return XD; // causar error undefined para usar otra api
        const akuariapiresult1 = await translate(`${akuariapijson1.respon}`, {to: 'ur', autoCorrect: true});
        m.reply(`${akuariapiresult1.text}`.trim());
        m.react('✅')
    } catch {
        throw `*error couldn't got the data from API*`;
     }}
    }}
   }}
  }}
 }}
};
handler.command = /^(openai|gpt|ia|robot|openai2|chatgpt2|ia2|robot2|Mystic|MysticBot)$/i;
export default handler;
