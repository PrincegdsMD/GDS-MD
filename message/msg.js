 const SETTING = require('../lib/validator/config')
 const keywords = require('../lib/validator/allKeywords')
  //=======================================================//
                      /* { module } */
  //=======================================================//
  let modul = SETTING['modul'];
  let getreq = SETTING['file'];
  const chalk = modul['chalk'];
  const fs = modul['fs'];
  const util = modul['util'];
  const https = modul['https'];
  const axios = modul['axios'];
  const ytsr = modul['ytsr'];
  const { spawn, exec } = modul['child'];
  const { downloadContentFromMessage, WA_DEFAULT_EPHEMERAL, getLastMessageInChat, MessageType, generateWAMessageFromContent, proto } = modul['baileys'];
  const moment = modul['time'];
  const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
  const qrcode = modul['qrcode'];
  const QrCode = modul['QrCode'];
  const qr = new QrCode();
  const ikyyClient = modul['ikyy'];
  const Ikyy = new ikyyClient();
  const { sizeFormatter } = modul['sizeFormater']
  const speed = modul['speed'];
  const request = modul['request'];
  const path = modul['path'];
  const dl = modul['bochil'];
  const ms = modul['premium'];

/*<--------------------( external function )--------------------->*/
  const { instagram } = require('.' + getreq['scrapp'])
  const _prem = require('.' + getreq['prem'])
  const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('.' + getreq['limit'])
  
   //=======================================================//
                       /* { database } */
   //=======================================================//
   
   var balance = JSON.parse(fs.readFileSync('./database/balance.json'));
   var limit = JSON.parse(fs.readFileSync('./database/limit.json'));
   var glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
   var premium = JSON.parse(fs.readFileSync('./database/premium.json'));

   //=======================================================//
                       /* { js } */
   //=======================================================//
   
  const { color, bgcolor, ConsoleLog, biocolor } = require('.' + getreq['color'])
  const { reSize, runtime, getBuffer, getRandom, pickRandom, fetchJson, isUrl, genMath, formatp} = require('.' + getreq['funct'])
  const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif, writeExifStc } = require('.' + getreq['exif'])
  
  //=======================================================//
                       /* { media } */
  //=======================================================//

  const thumb = fs.readFileSync(getreq['thumb'])
  
//=======================================================//
                       /* { exports this function } */
//=======================================================//

module.exports = async(msg, client, from, store) => {
    
    //=======================================================//
                          /* { detect } */  
    //=======================================================//
   const isGrouP = msg.key.remoteJid.endsWith('@g.us')
   const sender = isGrouP ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
   const pushname = msg.pushName || "No Name"
   const CMD = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'listResponseMessage') && msg.message.listResponseMessage.singleSelectReply.selectedRowId? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.xtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
   const prefix = /^[#!.,®©¥€¢£/\∆✓]/.test(CMD) ? CMD.match(/^[#!.,®©¥€¢£/\∆✓]/gi) : '#'   
	 global.prefix = prefix
   const chatmessage = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.xtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.xtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''
   const ordermessage = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text.startsWith(prefix) ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'listResponseMessage') && msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.xtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? msg.message.templateButtonReplyMessage.selectedId : ''   
   const chats = (msg.xtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.xtype == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.xtype == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (msg.xtype == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.xtype == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (msg.xtype == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.xtype == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''   	
   const args = ordermessage.trim().split(/ +/).slice(1)         
   const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
   const command = ordermessage.slice(1)
   const q = args.join(' ')   
   const fatkuns = (msg.quoted || msg)
   const quoted = (fatkuns.xtyp == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.xtyp == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.xtyp == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : msg.quoted ? msg.quoted : msg
   const isCmd = ordermessage.startsWith(prefix)   
   const content = JSON.stringify(msg.message)
   const orderPlugins = isCmd ? ordermessage.slice(1).trim().split(/ +/).shift().toLowerCase() : null
   const isGroup = from.endsWith(keywords[0]['chats'][1])
   const botNumber = client.user.id.split(':')[0] + keywords[0]['chats'][0]
   const mime = (quoted.msg || quoted).mimetype || '' 
   const isMedia = /image|video|sticker|audio/.test(mime)
   const itulho = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid  
   const isOwner = [botNumber, ...global.ownerNumber].map(jid => jid.replace(/[^0-9]/g, '') + keywords[0]['chats'][0]).includes(itulho)
   const groupMetdata = isGroup ? await client.groupMetadata(from) : ''
         client.groupMembers = isGroup ? groupMetdata.participants : ''
         client.groupName = isGroup ? await groupMetdata.subject : ''   
         client.groupAdmins = isGroup ? msg.getGroupAdmins(client.groupMembers) : ''
   const isBotGroupAdmins = client.groupAdmins.includes(botNumber) || false
   const isGroupAdmins = client.groupAdmins.includes(msg.sender)
   const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
   const gcounti = SETTING.gcount
   const gcount = isPremium ? gcounti.prem : gcounti.user
   const limitCount = SETTING.limitCount
   
   //=======================================================//
                    /* { Premium } */  
    //=======================================================//

    _prem.expiredCheck(client, premium)

   //=======================================================//
                    /* { participant mentions } */   
   //=======================================================//

   const mentionByTag = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
   const mentionByreply = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""       
   const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
          mention != undefined ? mention.push(mentionByreply) : []
   const mentionUser = mention != undefined ? mention.filter(n => n) : false 
  //=======================================================//
                          /* { function } */   
  //=======================================================//

   const sleep = async (ms) => {
       return new Promise(resolve => setTimeout(resolve, ms))
   }
                   
    const formatSize = sizeFormatter({
 	std: "JEDEC",
	decimalPlaces: "2",
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`,
   });   
   
   
   //=======================================================//      
         /* { Function Hari } */
   //=======================================================//
        
   const today = moment().tz("Asia/Jakarta")
   const day = today.format('dddd');
   const datee = today.format('D');
   const month = today.format('MMMM');
   const year = today.format('YYYY');
   const jos = '```'
   
   //=======================================================//      
         /* { Function Rp } */
   //=======================================================//
   
   function Rp(angka) {
    return "Rp. " + (angka < 0 ? "" : "") + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "";
   }
   const totaal = getBalance(sender, balance)
   const belec = await Rp(`${totaal}`)
   
   const replyNtag = (teks) => {
    client.sendMessage(from, { text: teks, mentions: parseMention(teks) }, { quoted: ftextx })
    }

   //=======================================================//
                         /* { plugins } */ 
    //=======================================================//
    
   for (let name in plugins) {
                let plugin = plugins[name]              
                if (plugin.order && plugin.order.includes(orderPlugins)) {
                    let turn = plugin.order instanceof Array
                        ? plugin.order.includes(orderPlugins)
                        : plugin.order instanceof String
                            ? plugin.order == orderPlugins
                            : false
                    if (!turn) continue
                    if (plugin.owner && !isOwner){ msg.reply(keywords[0]['message'][2])
                    continue 
                    }
                    if (plugin.group && !isGroup){ msg.reply(keywords[0]['message'][1])
                    continue
                    }
                    if (plugin.groupAdmins && !isGroupAdmins){ msg.reply(keywords[0]['message'][3])
                    continue
                    }
                    if (plugin.botGroupAdmins && !isBotGroupAdmins){ msg.reply(keywords[0]['message'][4])
                    continue
                    }
          await plugin.exec(msg, client, from, { q, args, order })
       }
   }         
   
const nay1 = { key: {fromMe: false, participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { contactMessage: { displayName: `${msg.sayingtime + msg.timoji}\n☏User: ${pushname}`, vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + `item1.TEL;waid=${sender.split("@")[0]}:+${sender.split("@")[0]}\n` + 'item1.X-ABLabel:Ponsel\n' + 'END:VCARD' }}}  


    //=======================================================//               
                                         /* { eval } */
    //=======================================================//
    
if (chatmessage.startsWith('>')) {
if (!isOwner) return 
if (!q) return msg.reply('Masukan Parameter Code!')
let kode = chatmessage.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await msg.reply(require('util').format(teks))
}
}

     if (chatmessage.startsWith('$')) {
       if (!isOwner) return 
        exec(chatmessage.slice(2), (err, stdout) => {
       if(err) return client.sendMessage(from, {text :String(err)}, {quoted:msg})
       if (stdout) return msg.reply(stdout)
       })
     } 
     
     
     //=======================================================//
                                   /* { function pplong } */
     //=======================================================//
     
     const jimp_1 = require('jimp')
      async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

   //=======================================================//
                             /* { conlog cmd } */
   //=======================================================//
   
     if (isCmd && !isGroup) {
        console.log(keywords[0]['cmd'][0], keywords[0]['cmd'][1], time, color(`#${command} [${args.length}]`, 'gray'), 'from', color(msg.pushName))
     }
     if (isCmd && isGroup) {
       console.log(keywords[0]['cmd'][0], keywords[0]['cmd'][1], time, color(`#${command} [${args.length}]`, 'gray'), 'from', color(msg.pushName), 'in', color(client.groupName, 'orange'))
     }
   
   //=======================================================//
                         /* { cases } */   
   //=======================================================//
                       
    switch(order){
     
     case prefix + ['tes'] :{
     msg.reply('_Oke sip nyala botnya_')
     }
     break
     
case prefix + ["menu"]: {
client.sendMessage(from, { text: `*List menu YanzBotz-MD*

々 *INFO USER*
• Nama Owner : YanzBotzX
• Nomer Owner : 085883359262

々 *OWNER MENU*
• ${prefix}self
• ${prefix}public

々 *MENU*
• ${prefix}alquran
• ${prefix}sticker
• ${prefix}chat

々 *DOWNLOAD MENU*
• ${prefix}tiktok
• ${prefix}instagram

々 *AI MENU*
• ${prefix}aiimg
• ${prefix}ai
• ${prefix}gptvoice
• ${prefix}simi

々 *TOOLS MENU*
• ${prefix}remini
• ${prefix}rangkum

々 *TOOLS MENU*
• ${prefix}yanz
• ${prefix}ardi
• ${prefix}janie

々 *PREMIUM MENU*
• ${prefix}tf
• ${prefix}balance
• ${prefix}buylimit
• ${prefix}buyglimit
• ${prefix}topbalance
• ${prefix}buypremium
• ${prefix}cekpremium
• ${prefix}listpremium 

々 *GROUP MENU*
• ${prefix}group
`, 
contextInfo: { externalAdReply: {
title: "YanzBotz-MD",
sourceUrl: "https://chat.whatsapp.com/KfQNICkv8CB7FgynDcbafX",
mediaUrl: "https://github.com/YanzBotz/YanzBotz-MD",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: "https://telegra.ph/file/72dac7d98b7394ce78845.jpg" }}}, {quoted: msg})
}
break  

case prefix + ['buypremium'] : case prefix + ['buyprem'] : {
	if (isPremium) return msg.reply(`Kamu Sudah User Premium `)
         if (!args[0]) return msg.reply("*Premium PerMinute:*\n1m | 2m | 3m | 4m | 5m | 6m | 7m | 9m | 10m\n\n*Premium PerHours:*\n1h | 2h | 3h | 4h | 5h | 6h | 7h | 8h | 9h | 10h\n\n*Premium Harian:*\n1d | 2d | 3d | 4d | 5d | 6d | 7d | 8d | 9d | 10d\n\n*Premium Bulanan:*\n30d | 60d\n\n*Premium Tahun:*\n365d\n\nExample : *#buypremium 1d*\nUntuk melihat harga premium silahkan ketik *#listharga*")
          let preem = args[0]   
           if (args[0] === "1d"){
               let ane = 100000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "2d"){
               let ane = 300000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "3d"){
               let ane = 300000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                 _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "4d"){
             let ane = 400000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                 _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "5d"){
             let ane = 500000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "6d"){
             let ane = 600000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "7d"){
              let ane = 700000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "8d"){
               let ane = 800000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "9d"){
               let ane = 900000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                 _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "10d"){
             let ane = 1000000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                 _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "1m"){
             let ane = 1000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "2m"){
             let ane = 2000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "3m"){
              let ane = 3000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "4m"){
             let ane = 4000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "5m"){
             let ane = 5000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "6m"){
              let ane = 6000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "7m"){
             let ane = 7000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "8m"){
             let ane = 8000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
               client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "9m"){
              let ane = 9000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "10m"){
             let ane = 10000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "1h"){
             let ane = 41000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "2h"){
             let ane = 42000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "3h"){
              let ane = 43000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "4h"){
             let ane = 44000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "5h"){
             let ane = 45000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "6h"){
              let ane = 46000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "7h"){
             let ane = 47000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "8h"){
             let ane = 48000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
              _prem.addPremiumUser(sender, args[0], premium)
                 var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "9h"){
              let ane = 49000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                  _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
           } else if (args[0] === "10h"){
             let ane = 50000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
               var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "30d"){
             let ane = 3000000000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "60d"){
             let ane = 6000000000000000
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                 var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
          } else if (args[0] === "365d"){
             let ane = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli premium_`)
                kurangBalance(sender, ane, balance)
                   _prem.addPremiumUser(sender, args[0], premium)
                    var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                var premiumnya = `${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                client.sendMessage(from, { text: `「 *TRANSAKSI BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n${jos}💌 EXPIRED : ${premiumnya}${jos}\n\n_Terimakasih telah berlangganan di premium kami_` }, {quoted: msg })
            } else msg.reply('Belum tersedia, tunggu next update')
          }
         break

case prefix + ['group'] : { 
     	if (!isGroup) return msg.reply('Khusus gc')
     	if (!isBotGroupAdmins) return msg.reply('Bot ga admin')
     	if (!isGroupAdmins) return msg.reply('Anda bukan admin')
     	if (q.toLowerCase() === "close") {
     		await client.groupSettingUpdate(from, 'announcement').then((res) => msg.reply(`Sukses Menutup Group`)).catch((err) => msg.reply(jsonformat(err)))
         } else if (q.toLowerCase() === "open") {
         	 await client.groupSettingUpdate(from, 'not_announcement').then((res) => msg.reply(`Sukses Membuka Group`)).catch((err) => msg.reply(jsonformat(err)))
          } else {	
          	 client.sendPoll(from, "Silahkan Dipilih, I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} open`,`${command.charAt(0).toUpperCase()+command.slice(1)} close`])
          }   
      }      
      break
      
   case prefix + ['limit'] :
            case prefix + ['balance'] :
            case prefix + ['ceklimit']:
            case prefix + ['cekbalance'] : {
                var Ystatus = ownerNumber.includes(sender)
                var isPrim = Ystatus ? true : _prem.checkPremiumUser(sender, premium)
                var ggcount = isPrim ? gcounti.prem : gcounti.user
                var limitMen = `${getLimit(sender, limitCount, limit)}`
                let bel = { 
                text: `\n*Name :* ${jos}${msg.pushName}${jos}\n*Limit :* ${jos}${isOwner ? 'Infinity' : isPremium ? 'Infinity' : getLimit(sender, limitCount, limit)}/${limitCount}${jos}\n*Limit Game :* ${jos}${cekGLimit(sender, ggcount, glimit)}/${ggcount}${jos}\n*Balance :* ${jos}${belec}${jos}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`,
                contextInfo: {
                    externalAdReply: {
                        title: `${day}, ${datee} ${month} ${year}`,
                        body: `${msg.sayingtime + msg.timoji}`,
                        thumbnail: fs.readFileSync('./storage/image/balance.jpg'),
                        mediaUrl: "https://www.youtube.com/@YanzBotz",
                        mentions:[sender],
                        renderLargerThumbnail: true,
                        showAdAttribution: false,
                        mediaType: 1
                    }
                }
            }
            client.sendMessage(from, bel, {
                quoted: msg
            })
            }
            break    
            
case prefix + ['tf'] :
case prefix + ['tfbalance'] :{
	if (!isGroup) return msg.reply(`\n*「 ❗ 」WARNING*\n_Fitur Hanya bisa di gunakan di dalam group silahkan masuk_\n\nhttps://chat.whatsapp.com/KfQNICkv8CB7FgynDcbafX`)
	if (isGame(sender, isOwner, gcount, glimit)) return msg.reply(`Limit game kamu Telah Habis, Beli limit game ketik #buyglimit`)
           if (!isPremium) return msg.reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
           if (args.length < 2) return msg.reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @0 1000`)
                 if (mention.length == 0) return msg.reply(`Tag orang yang ingin di transfer balance`)
                 if (!args[1]) return msg.reply(`Masukkan nominal nya!`)
                 if (isNaN(args[1])) return msg.reply(`Nominal harus berupa angka!`)
                 if (args[0].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args[1].includes("-")) return msg.reply(`Jangan menggunakan -`)
                 if (args[1].includes(",")) return msg.reply(`Jangan menggunakan ,`)
                 if (args[1].includes(".")) return msg.reply(`Jangan menggunakan .`)
                 if (args[1].includes("$")) return msg.reply(`Jangan menggunakan $`)
                 var anu = getBalance(sender, balance)
                 if (anu < args[1] || anu == 'undefined') return msg.reply(`「 *TRANSFER FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}🥷 DARI    : @${msg.sender.split("@")[0]}${jos}\n${jos}🥷 TUJUAN  : @${mention[0].split("@")[0]}${jos}\n${jos}🏷️ JUMLAH  : $${args[1]}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance Kamu Tidak Mencukupi Untuk Transfer_`)
                 kurangBalance(sender, parseInt(args[1]), balance)
                 addBalance(mention[0], parseInt(args[1]), balance)
               replyNtag(`「 *TRANSFER BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}🥷 DARI    : @${msg.sender.split("@")[0]}${jos}\n${jos}🥷 TUJUAN  : @${mention[0].split("@")[0]}${jos}\n${jos}🏷️ JUMLAH  : $${args[1]}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n\n_Sukses mentransfer, jika ada bug silahkan lapor ke owner_`)
            }
            gameAdd(sender, glimit)
       break    
       
     case prefix + ['buylimit']: {
                if (args.length < 1) return msg.reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $300 balance\nPajak $1 / $10`)
                if (args[0].includes('@')) return msg.reply(`Jangan menggunakan @tag, Masukan angka untuk membeli limit`)
                if (args[0].includes('-')) return msg.reply(`Jangan menggunakan -`)
                if (isNaN(args[0])) return msg.reply(`Harus berupa angka`)
                var ane = args[0] * 300
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🛍️ JUMLAH  : ${q}${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli limit_`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, args[0], limit)
                replyNtag(`「 *BUY LIMIT BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🛍️ JUMLAH  : ${args[0]}${jos}\n${jos}📍 LIMIT   : ${getLimit(sender, limitCount, limit)}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n\n_Sukses membli limit, jika ada bug silahkan lapor ke owner_`)
                }
            break      
            
    case prefix + ['cekprem'] :
            case prefix + ['cekpremium'] :
                if (!isPremium) return msg.reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
                var cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                var premiumnya = `*Expire :* ${cekvip.days}d : ${cekvip.hours}h : ${cekvip.minutes}m : ${cekvip.seconds}s`
                msg.reply(premiumnya)
                break

   case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                 if (args.length < 1) return msg.reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $300 balance\nPajak $1 / $10`)
                if (args[0].includes('@')) return msg.reply(`Jangan menggunakan @tag, Masukan angka untuk membeli limit`)
                if (args[0].includes('-')) return msg.reply(`Jangan menggunakan -`)
                if (isNaN(args[0])) return msg.reply(`Harus berupa angka`)
                var ane = args[0] * 300
                if (getBalance(sender, balance) < ane) return msg.reply(`「 *TRANSAKSI FAILED* 」\n\n${jos}✨ STATUS  : Fail${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}☎️ NOMOR   : ${msg.sender.split("@")[0]}${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}🛍️ JUMLAH  : ${q}${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🪙 BALANCE : ${belec}${jos}\n\n_Balance kamu tidak mencukupi untuk membeli glimit_`)
                kurangBalance(sender, ane, balance)
                givegame(sender, args[0], glimit)
                replyNtag(`「 *BUY GLIMIT BERHASIL* 」\n\n${jos}✨ STATUS  : Berhasil${jos}\n${jos}⌚ JAM     : ${moment().utcOffset('+0700').format('HH:mm')} WIB${jos}\n${jos}📆 TANGGAL : ${day}, ${datee} ${month} ${year}${jos}\n${jos}🥷 NAMA    : ${msg.pushName}${jos}\n${jos}🏷️ HARGA   : $${ane}${jos}\n${jos}🛍️ JUMLAH  : ${q}${jos}\n${jos}🕹️ GLIMIT  : ${cekGLimit(sender, gcount, glimit)}${jos}\n${jos}🪙 SISA    : ${belec}${jos}\n\n_Sukses membli glimit, jika ada bug silahkan lapor ke owner_`)
                }
                break            

case prefix + ['instagram'] : case prefix + ['ig'] :
 if (!q)return msg.reply(`Berikan Link\nExample : ${command} link`)
 if (!isUrl(q)) return msg.reply(`Link Ga Sesuai`)
 if (!q.includes('instagram.com')) return msg.reply(`Link Ga Sesuai`)
 msg.reply('_Sedang Mendownload...')
 instagram(q).then( data => {
 for ( let i of data ) {
 if (i.type === "video") {
 client.sendMessage(from, {video: {url: i.url}}, {quoted: msg })
 } else if (i.type === "image") {
 client.sendMessage(from, { caption: `Sukses, Follow Instagram : @arsrfii`, image: { url: i.url }}, {quoted: msg })
            }
     }
 }).catch(() => msg.reply(`ERORR. Postingan tidak Tersedia`))
break

case prefix + ['tiktok'] : {
if (!q) return msg.reply('Link nya mana')
msg.reply('_Tunggu sebentar sedang proses_')
 let wih = await fetchJson("https://api.yanzbotz.my.id/api/downloader/youtube?url=" + q)
client.sendMessage(from, { video: { url: wih.result.medias[1].url }, caption: `• Title : ${wih.result.title}\n• Durasi : ${wih.result.duration}` }, { quoted: msg })
}
break 
		    
case prefix + 'alquran': {
	if (!(args[0] || args[1])) return msg.reply(`contoh:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, & ayatnya 1 saja`)
    if (isNaN(args[0]) || isNaN(args[1])) msg.reply(`contoh:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
    let api = await dl.alquran()
    let mes = `
${api[args[0] - 1].ayahs[args[1] - 1].text.ar}
    
${api[args[0] - 1].ayahs[args[1] - 1].translation.id}
( Q.S ${api[args[0] - 1 ].asma.id.short} : ${api[args[0] - 1].ayahs[args[1] - 1].number.insurah} )
`.trim()
    msg.reply(mes)
    client.sendMessage(from, {audio: { url: api[args[0] - 1].ayahs[args[1] - 1].audio.url }, mimetype: 'audio/mpeg', ptt:true }, { quoted : msg })
}
break

case prefix + ['s'] : case prefix + ['stiker'] : case prefix + ['setiker'] : case prefix + ['sticker'] :{
          if ((isMedia && !msg.message.videoMessage || msg.isQuotedImage) && args.length == 0) {
             client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
             var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
             var buffer = Buffer.from([])
               for await(const chunk of stream) {
                  buffer = Buffer.concat([buffer, chunk])
               }
             let buffers = await writeExifImg(buffer, { packname: SETTING['packname'], author: SETTING['author'] })
           await client.sendMessage(from, { sticker: { url: buffers } }, { quoted: msg })
          } else if ((isMedia && msg.message.videoMessage.seconds < 11 || msg.isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
               client.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
                var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
                var buffer = Buffer.from([])
                  for await(const chunk of stream) {
                     buffer = Buffer.concat([buffer, chunk])
                  }
             let buffers = await writeExifVid(buffer, { packname: SETTING['packname'], author: SETTING['author'] })
           await client.sendMessage(from, { sticker: { url: buffers } }, { quoted: msg })
           } else { msg.reply(`Reply gambar/video/sticker dengan caption ${prefix + 'sticker'} \n*(MAKSIMAL 10 DETIK!)*`) }
         }
       break

case prefix + ['chat'] :
if(!isOwner) return
if (!args.join(" ")) return 
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
const lolh = `${pesny}`
client.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[msg.sender]}, {quoted: nay1 })
await msg.reply("_Success dikirim_")
break;

case prefix + ['public'] :{
         if(!isOwner) return
           SETTING['banchats'] = false
          msg.reply(keywords[0]['mode'][0])
         }
      break

case prefix + ['self'] :{
         if(!isOwner) return
             SETTING['banchats'] = true
          msg.reply(keywords[0]['mode'][1])
        }
      break

case prefix + ['aiimg'] :{
if (!q) return msg.reply("Input Text!")
var jadien = await Ikyy.tools.translate(q, 'en')
msg.reply("Wait...,Making...")
try {
var createAI = await openai.createImage({
    prompt: jadien.toLowerCase(),
    n: 1,
    size: "512x512"
})
client.sendMessage(from, { image: { url: createAI.data.data[0].url }, caption: '*'+q+'*' }, { quoted: msg })
} catch (e) {
msg.reply("Error!\n\n"+e)
}
}
break

case prefix + ['ardi'] : {
        if (!q) return msg.reply('Teks nya mana?')
         try {
         let ardi = await getBuffer("https://api.yanzbotz.my.id/api/tts/ardi?query=" + q)
          client.sendMessage(from, { audio: ardi, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
          } catch (e) {
          	msg.reply("Error!")
           }
        }
        break  
        
case prefix + ['yanz'] : {
        if (!q) return msg.reply('Teks nya mana?')
         try {
         let yanz = await getBuffer("https://api.yanzbotz.my.id/api/tts/yanz?query=" + q)
          client.sendMessage(from, { audio: yanz, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
          } catch (e) {
          	msg.reply("Error!")
           }
        }
        break   
        
case prefix + ['janie'] : {
        if (!q) return msg.reply('Teks nya mana?')
         try {
         let jannie = await getBuffer("https://api.yanzbotz.my.id/api/tts/janie?query=" + q)
          client.sendMessage(from, { audio: jannie, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
          } catch (e) {
          	msg.reply("Error!")
           }
        }
        break               

case prefix + ['ai'] : case prefix + ['openai'] : {
        if (!q) return msg.reply('mau tanya apa')
         try {
         let quest = await fetchJson("https://api.yanzbotz.my.id/api/ai/openai?query=" + q)
          client.sendMessage(from, {text: quest.result.choices[0].text }, { quoted: msg });
          } catch (e) {
          	msg.reply("Eror")
           }
        }
        break 
        
case prefix + ['rangkum'] : case prefix + ['ringkas'] : {
        if (!q) return msg.reply('mau tanya apa')
         try {
         let rangkum = await fetchJson("https://api.yanzbotz.my.id/api/ai/rangkum?query=" + q)
          client.sendMessage(from, {text: rangkum.result }, { quoted: msg });
          } catch (e) {
          	msg.reply("Eror")
           }
        }
        break 
        
case prefix + ['simi'] : case prefix + ['simisimi'] : {
        if (!q) return msg.reply('mau tanya apa')
         try {
         let SimSimi = await fetchJson("https://api.yanzbotz.my.id/api/ai/simi?query=woy+kontol" + q)
          client.sendMessage(from, {text: SimSimi.result }, { quoted: msg });
          } catch (e) {
          	msg.reply("Eror")
           }
        }
        break                 

case prefix + ['gptvoice'] : case prefix + ['aivn'] : {
        if (!q) return msg.reply('mau tanya apa')
         try {
         let tes = await getBuffer("https://api.akane.my.id/api/ai/gptvoice?query=" + q)
          client.sendMessage(from, { audio: tes, mimetype: 'audio/mp4', ptt: true}, {quoted: msg})
          } catch (e) {
          	msg.reply("Error!")
           }
        }
        break      


    //=============================0==========================// 
                                           /* { akhir case } */  
    //=======================================================//
  
  default:
  
   //=======================================================//
                      /* { includes } */   
   //=======================================================//


 }

}//end module exports
let file = require.resolve(__filename)
 fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.red(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})

//
