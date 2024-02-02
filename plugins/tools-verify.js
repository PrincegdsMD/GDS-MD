//CÓDIGO CREADO POR GataNina-Li : https://github.com/GataNina-Li 
import { createHash } from 'crypto'
let nombre = 0, edad = 0, genero = 0, bio = 0, identidad = 0, pasatiempo = 0, registro, _registro, fecha, hora, tiempo, registrando
let pas1 = 0, pas2 = 0, pas3 = 0, pas4 = 0, pas5 = 0  

let handler = async function (m, { conn, text, command, usedPrefix }) {
let key 
let sinDefinir = '😿 No found'
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }	
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
}) 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch((_) => gataMenu.getRandom())
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
let nombreWA = await usedPrefix + conn.getName(m.sender) //'@' + m.sender.split("@s.whatsapp.net")[0]
let user = global.db.data.users[m.sender]
let verificar = new RegExp(usedPrefix)
let biografia = await conn.fetchStatus(m.sender).catch(_ => 'undefined')
bio = biografia.status?.toString() || sinDefinir
	
let intervalId
function mensajeRegistro() {
if (edad === 0) {
clearInterval(intervalId)	
registrando = false
return
}
if (user.registered === true) {
return 
}
if (typeof genero === 'string') {
global.db.data.users[m.sender]['registroC'] = true
registrando = false
conn.reply(m.chat, `*YOUR REGISTRATION TIME IS OVER!!*\n\n_If you do not continue at this time your record will not be saved, if you save later your record will have been perdido_\n\n*To continue, type:* ${usedPrefix}complete`, fkontak, m)
}else{
clearInterval(intervalId)
global.db.data.users[m.sender]['registroR'] = true		
registrando = false
conn.reply(m.chat, `*YOUR REGISTRATION TIME IS OVER!!*\n\n_If you do not continue at this time your record will not be saved, if you save later your record will be lost_\n\n*To continue, type:* ${usedPrefix}complete`, fkontak, m)}
}
		
if (user.registered === true) return conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()}*YA ESTÁ REGISTRADO!!*\n*SI QUIERE ANULAR SU REGISTRO, USE ESTE COMANDO*\n*${usedPrefix}unreg numero de serie*\n\n*SI NO RECUERDA SU NÚMERO DE SERIE, USE ESTE COMANDO*\n*${usedPrefix}NULL*`, fkontak, m)	

if (command == 'verificar' || command == 'verify' || command == 'register' || command == 'reg' || command == 'registrar') {
await conn.reply(m.chat, `*👀 HOW YOU WANT TO REGISTER?*\n\n📑 *QUICK REGISTRATION*\n• Verification Badge\n• Unlock Commands That Require Log\n\n*Type for Quick Logging:*\n${usedPrefix}reg1 Name Age\n\n🗂️ *FULL REGISTRATION*\n• Verification Badge\n• Unlock commands that require registration\n• Free Temporal Premium\n• More options for this record\n\n*Type for the full record:*\n${usedPrefix}name\n\n\`\`\`⭐ Keep in mind that you will have some time to complete in case you register\`\`\``, fkontak, m)
}

if (command == 'reg1') {
registrando = true
if (registrando === true) {
intervalId = setInterval(mensajeRegistro, 2 * 60 * 1000) //2 min
setTimeout(() => {
clearInterval(intervalId)}, 126000) //2.1 min
}

registro = text.replace(/\s+/g, usedPrefix) 
_registro = text.split(" ",2)
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()}👉 *REGISTRY PARAMETERS:*\n${usedPrefix + command} Name Age\n\n\`\`\`EXAMPLE:\`\`\`\n${usedPrefix + command} ${gt} 20\n\n*✨ ADVICE:*\n• _Your name must not contain numbers_\n• _Age should not contain letters_\n\n⭐ *If you would like to further customize your record, type:*\n${usedPrefix}name`, fkontak, m)
//if (_registro['length'] >= 3 || isNaN(_registro[1])) return 
//conn.sendButton(m.chat, fg + '🙃 *ESTÁ INTENTANDO SEPRAR SU NOMBRE O UNIR TODO?* ', '🧐 *COINCIDE COMO EN ESTOS EJEMPLOS:*\n' + `\`\`\`${usedPrefix + command} Super${gt}20\`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super 15 ${gt} \`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super ${gt} 24 De ${author}\`\`\`\n\n` + '*Si cumple que tenga (Nombre/Frase y Edad) Autocompletaremos su Registro, de lo contraio vuelva a registrarse*\n➘ _Use el Botón de abajo_', null, [[`🌟 AUTOCOMPLETAR MI REGISTRO`, usedPrefix + 'reg1' + ' ' + text.replace(/[♧◇♡♤■□●○•°☆▪︎¤¿?¡¬¦±×÷°µ§©®™¶€¢£¥₽₹₩₱₸₪₫₮₦₴₡₭₲₼₿.,\/#!$%\^&\*;:{}@=\-_`~()\s\0-9]/gi, "") + ' ' + text.replace(/[♧◇♡♤■□●○•°☆▪︎¤¿?¡¬¦±×÷°µ§©®™¶€¢£¥₽₹₩₱₸₪₫₮₦₴₡₭₲₼₿.,\/#!$%\^&\*;:{}@=\-_`~()\s\a-z]/gi, "")], ['📑 VOLVER A REGISTRAR', command + usedPrefix]], m)
if (!_registro[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*MISSING NAME, REGISTRY PARAMETERS:*\n\`\`\`${usedPrefix + command} Name Age\`\`\``, fkontak, m)
if (_registro[0].length >= 30) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*YOUR NAME IS VERY LONG, REGISTRY PARAMETERS:*\n\`\`\`${usedPrefix + command} Name Age\`\`\``, fkontak, m)
if (_registro[0].length <= 2) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*YOUR NAME IS TOO SHORT OR MISSING, REGISTRY PARAMETERS:*\n\`\`\`${usedPrefix + command} Name Age\`\`\``, fkontak, m)
_registro[0] = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "")
user.name = _registro[0]

if (!_registro[1]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*FALTA SU EDAD, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} Name Age\`\`\``, fkontak, m)
if (_registro[1] > 90) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*YOUR AGE IS VERY OLD, PLEASE USE ANOTHER AGE*\n\n*PREGISTRY PARAMETERS:*\n\`\`\`${usedPrefix + command} Name Age\`\`\``, fkontak, m)
if (_registro[1] < 10) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*YOUR AGE IS VERY YOUNG, PLEASE USE ANOTHER AGE*\n\n*REGISTRY PARAMETERS:*\n\`\`\`${usedPrefix + command} Name Age\`\`\``, fkontak, m)
user.age = parseInt(_registro[1]) //_registro[1]	
global.db.data.users[m.sender]['registroR'] = true

let registroRapido = ` *░ 📑 CURRENT REGISTRATION 📑 ░*
 *∷∷∷∷∷∷∷∷∷∷∷∷∷∷∷*
┊ *✓ NAME*
┊ ⁘ ${user.name === 0 ? sinDefinir : user.name}
┊
┊ *✓ AGE*
┊ ⁘ ${user.age === 0 ? sinDefinir : user.age + ' años'}
╰┈┈┈┈┈┈┈┈┈┈┈┈•

❇️ \`\`\`To finalize your registration, type:\`\`\`
✪ *${usedPrefix}complete*`

await conn.sendMessage(m.chat, {
text: registroRapido,
contextInfo: {
externalAdReply: {
title: wm,
body: '🌟 You can modify your registration before finalizing',
thumbnailUrl: pp, 
sourceUrl: 'https://whatsapp.com/channel/0029VaKNbWkKbYMLb61S1v11',
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}, { quoted: fkontak })
}

if (command == 'nombre' || command == 'name') {
registrando = true
if (registrando === true) {
intervalId = setInterval(mensajeRegistro, 3 * 60 * 1000) //3 min
setTimeout(() => {
clearInterval(intervalId)}, 186000) //3.1 min
}
if (verificar.test(text) == false || text.length <= 1) return conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()}👉 *CUSTOMIZE YOUR NAME TO REGISTER, EXAMPLE:*\n${usedPrefix}name ${gt}`, fkontak, m)
if (/^\d+$/.test(text)) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*YOUR NAME SHOULDN'T JUST HAVE NUMBERS, EXAMPLE:*\n${usedPrefix}nombre ${gt}\n\n🌟 _If you want to use your registered name on your WhatsApp, type:_\n*${usedPrefix}name2*`}, {quoted: fkontak})
if (text.length >= 25) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*USE A SHORTER NAME, EXAMPLE:*\n${usedPrefix}nombre ${gt}\n\n🌟 _If you want to use your registered name on your WhatsApp, type:_\n*${usedPrefix}Name2*`}, {quoted: fkontak})
if (text.length <= 2) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*MISSING OR VERY SHORT NAME, EXAMPLE:*\n${usedPrefix}nombre ${gt}\n\n🌟 _If you want to use your registered name on your WhatsApp, type ${usedPrefix}Name2_`}, {quoted: fkontak})
user.name = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "").trim()
if (user.name) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoEG']()}🌟 *THAT'S GREAT!! THE FOLLOWING HAS BEEN COMPLETED*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NAME:*\n${user.name === 0 ? sinDefinir : user.name}\n\n🔢 *YOU CAN NOW REGISTER YOUR AGE, EXAMPLE:*\n\`\`\`${usedPrefix}age 22\`\`\``}, {quoted: fkontak})
}
	
if (command == 'nombre2' || command == 'name2') {
if (/^\d+$/.test(text)) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*YOUR NAME SHOULDN'T JUST HAVE NUMBERS, EXAMPLE:*\n${usedPrefix}name ${gt}\n\n🌟 _If you want to use your registered name on your WhatsApp, type:_\n*${usedPrefix}Name2*`}, {quoted: fkontak})
if (nombreWA.slice(1).length < 2) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*YOUR WHATSAPP NAME IS TOO SHORT TO REGISTER*\n\n*Modify your WhatsApp name and try again or you can customize it 🌟 your name using:*\n*${usedPrefix}nombre ${gt}*`}, {quoted: fkontak})
if (nombreWA.slice(1).length > 25) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoFG']()}*YOUR WHATSAPP NAME IS TOO LONG TO REGISTER*\n\n*Modify your WhatsApp name and try again or you can customize it 🌟 your name using:*\n*${usedPrefix}nombre ${gt}*`}, {quoted: fkontak})
user.name = nombreWA.replace(/\s+/g, '').replace(/[0-9]+/gi, "").slice(1).trim()
if (user.name) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoEG']()}🌟 *THAT'S GREAT!! THE FOLLOWING HAS BEEN COMPLETED*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NAME:*\n${user.name === 0 ? sinDefinir : user.name}\n\n🔢 *YOU CAN NOW REGISTER YOUR AGE, EXAMPLE:*\n\`\`\`${usedPrefix}age 22\`\`\``}, {quoted: fkontak})
}
		
if (command == 'edad' || command == 'age' || command == 'edad2' || command == 'age2') {
if (verificar.test(text.slice(1)) == false && !text) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoIIG']()}*👉 I ADDED YOUR AGE TO REGISTER, EXAMPLE:*\n${usedPrefix}age 22`}, {quoted: fkontak})
if (isNaN(text)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*ENTER NUMBERS ONLY*`, fkontak, m)
if (text > 90) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*TOO OLD TO BE REGISTERED*`, fkontak, m)
if (text < 10) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*TOO MINOR TO BE SEARCHED*`, fkontak, m)
user.age = text.replace(/[.,\/#!$%\^&\*;:{}@=\-_`~()\s\a-z]/gi, "")
if (verificar.test(text) == true) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoEG']()}🌟 *THAT'S GREAT!! THE FOLLOWING HAS BEEN COMPLETED*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NAME:*\n${user.name === 0 ? sinDefinir : user.name}\n\n*❖ EDAD:*\n${user.age === 0 ? sinDefinir : user.age + ' años'}\n\n🧬 *YOU CAN NOW REGISTER YOUR GENDER, EXAMPLE:*\n\`\`\`${usedPrefix}gender\`\`\``}, {quoted: fkontak})
}
	
if (command == 'genero' || command == 'género' || command == 'gender') {
let genText = `🌟 *SELECT YOUR GENDER!!*
1️⃣ ️▸ _🚹 MALE (Male)_
2️⃣ ▸ _🚺 FEMALE (Female)_
3️⃣ ▸ _👤 HIDE GENDER (Skip)_\n
🌟 *YOU CAN USE THE NUMERIC EMOJI OR NUMERIC TEXT TO CHOOSE YOUR EXAMPLE GENDER:*
✓ \`\`\`${usedPrefix}genero 2️⃣\`\`\`
✓ \`\`\`${usedPrefix}genero 2\`\`\``
if (!text) return conn.sendMessage(m.chat, { text: genText }, { quoted: fkontak })	
function asignarGenero(text) {
if (text == 0 && text > 3) return conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*"${text}" NOT VALID TO CHOOSE, REMEMBER TO USE THE NUMERIC EMOJI, GENDER EMOJI OR NUMERIC TEXT TO SELECT YOUR GENDER, EXAMPLE*\n\n✓ \`\`\`${usedPrefix}genero 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}genero 2\`\`\``, fkontak, m) 
switch (text) {
case "1️⃣":
case "1":
case "🚹":
genero = "Man"
break
case "2️⃣":
case "2":
case "🚺":
genero = "Woman"
break
case "3️⃣":
case "3":
case "👤":
genero = "Hidden"
break
default:
return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*REMEMBER TO USE THE NUMERIC EMOJI, GENDER EMOJI, OR NUMERIC TEXT TO SELECT YOUR GENDER, EXAMPLE*\n\n✓ \`\`\`${usedPrefix}gender 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}gender 2\`\`\``, fkontak, m)
}}
asignarGenero(text)
user.genero = genero
if (user.genero) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoEG']()}🌟 *THAT'S GREAT!! THE FOLLOWING HAS BEEN COMPLETED*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NOMBRE:*\n${user.name === 0 ? sinDefinir : user.name}\n\n*❖ AGE:*\n${user.age === 0 ? sinDefinir : user.age + ' años'}\n\n*❖ GENDER:*\n${user.genero === 0 ? sinDefinir : user.genero}\n\n*🌼 YOU CAN NOW REGISTER YOUR GENDER ORIENTATION, EXAMPLE:*\n\`\`\`${usedPrefix}identity\`\`\``}, {quoted: fkontak}) 
}
	
if (command == 'identidad' || command == 'identity') {
var generos = [
"Agender", "Androgynous", "Androgynous", "Asexual", "Bigender", "Bisexual",
"Cisgender", "CrossDresser", "Demigender", "Gay", "Gender Fluid", "Gender Neutral",
"Genderqueer", "Heterosexual", "Heteroflexible", "Homoflexible", "Homosexual",
"Intersex", "Lesbian", "Pansexual", "Pangender", "Questioning", "Queer",
"Sapiosexual", "Transgender", "Trigender", "Variant/Gender Expansive"
]
var emojiANumero = { "0️⃣": "0", "1️⃣": "1", "2️⃣": "2", "3️⃣": "3", "4️⃣": "4", "5️⃣": "5", "6️⃣": "6", "7️⃣": "7", "8️⃣": "8", "9️⃣": "9" }
function asignarIdentidad(text) {
text = text.replace(/[\d️⃣]/g, function(match) {
return emojiANumero[match] || match
})
var numero = parseInt(text.replace(/[^\d]/g, ''))	
if (!isNaN(numero) && Number(numero) > 0 && Number(numero) <= generos.length) {
return generos[numero - 1]
} else if (!text) {
return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*REMEMBER TO USE THE NUMERIC EMOJI, GENDER EMOJI, OR NUMERIC TEXT TO SELECT YOUR SEXUAL ORIENTATION, EXAMPLE*\n\n✓ \`\`\`${usedPrefix}identity 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}identity 2\`\`\``, fkontak, m)
}else{
conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}*ESTÁ ELECCIÓN "${numero}" NOT PART OF THE LIST OF ORIENTATIONS, PLEASE CHOOSE ONE FROM THE LIST, EXAMPLE:*\n\n✓ \`\`\`${usedPrefix}identity 2️⃣\`\`\`\n✓ \`\`\`${usedPrefix}identity 2\`\`\``, fkontak, m)
}}
let yyr = ''
yyr += `*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•*
*┊ 🌟 SELECT YOUR GENDER ORIENTATION!!*
*┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•*\n`
generos.forEach(function (identidad, index) {
yyr += `*┊* \`\`\`[${index + 1}]\`\`\` » _${identidad}_\n`
})
yyr += `*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*`
if (!text) {
const { key } = await conn.sendMessage(m.chat, { text: yyr }, {quoted: fkontak})	
await delay(1000)
await conn.sendMessage(m.chat, { text: yyr + `\n\n✨ *HERE'S AN EXAMPLE OF HOW TO SELECT:*\n\`\`\`${usedPrefix}identity 4️⃣\`\`\`\n\`\`\`${usedPrefix}identity 4\`\`\``, edit: key }, {quoted: fkontak}) 
} 
var identidadAsignada = asignarIdentidad(text)
user.identidad = identidadAsignada
if (user.identidad && text < generos.length && text != 0) return conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoEG']()}🌟 *THAT'S GREAT!! THE FOLLOWING HAS BEEN COMPLETED*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*❖ NAME:*\n${!user.name ? sinDefinir : user.name}\n\n*❖ AGE:*\n${!user.age ? sinDefinir : user.age + ' years'}\n\n*❖ GENDER:*\n${!user.genero ? sinDefinir : user.genero}\n\n*❖ GENDER PREFERENCE:*\n${!user.identidad ? sinDefinir : user.identidad}\n\n❇️ *YOU CAN NOW RECORD YOUR HOBBIES, EXAMPLE:*\n\`\`\`${usedPrefix}hobby\`\`\``}, {quoted: fkontak})
}
	
if (command == 'pastime' || command == 'hobby') {
pasatiempo = 0
pas1 = ''
pas2 = ''
pas3 = ''
pas4 = ''
pas5 = ''  
var seleccion = text
var todosLosPasatiempos = [
"👟 Acroyoga", "Acting", "Aikido", "Airsoft", "🎯 🎭 🥋 ♟️ Chess",
    "🏔️ Mountaineering", "Animation", "Team Animator", "Anime Drawings", "✏️ 🖥️ 🎉 🐝 Beekeeping",
    "💻 Learn to code", "Learn a language", "Flower arranging", "Art", "🎨 🌐 💐 🥋 Martial arts",
    "🥋 Mixed Martial Arts", "Astrophotography", "Astrology", "Athletics", "👟 🔭 🔮 🩰 Ballet",
    "💄 Beauty", "Canyoning", "Blog", "Sketches", "✏️ 🏔️ 💻 🎳 Bowling",
    "🥊 Boxing", "🏸 Badminton",
    "👋 Be on YouTube", "Be on TikTok", "Be on Facebook", "👋 👋 👋 Be on Facebook Messenger",
    "👋 Be on Whatsapp", "Be on Instagram", "Be on Twitter", "👋 👋 👋 Be on Pinterest",
    "👋 Be on Telegram", "Be on WeChat", "Be on Snapchat", "👋 👋 👋 Be on Reddit",
    "📝 Escritura creativa", "🎧 Escuchar música", "📘 Estudiar", "👻 Fantasmas y/o apariciones",
    "👟 Fitness", "📸 Fotografía", "📸 Fotogénico/a", "📸 Fotografía de moda", "📸 Fotografía de juegos",
    "📸 Fotografía de animales", "📸 Fotografía de paisajes", "📸 Fotografía blanco y negro", "⚽ Fútbol",
    "🏈 Fútbol americano", "🎮 Gamer", "🏊 Gimnasia acuática", "🏒 Hockey", "✏️ Ilustración",
    "🎤 Ir a conciertos", "👟 Ir al gimnasio", "🛍️ Ir de compras", "🎮 Juegos VR/AR",
    "🎮 Juegos de rol", "🎮 Juegos de acción", "🎮 Juegos de pelea", "🎮 Juegos de arcade",
    "🎮 Juegos de aventura", "🎮 Juegos de estrategia", "🎮 Juegos de simulación", "🎮 Juegos de deportes",
    "🎮 Juegos de carreras", "🎮 Juegos de battle royale", "🎮 Juegos clásicos", "🃏 Juegos de cartas",
    "🎲 Juegos de mesa", "📖 Leer", "👟 Lucha libre", "💄 Maquillaje artístico", "😆 Memes",
    "💭 Meditación", "🖥️ Modelado 3D", "✨ Observación de estrellas", "🌕 Observación de la luna",
    "☁ Observación de las nubes", "📄 Origami", "🎣 Pesca", "🎨 Pintura", "🎙️ Podcasts",
    "📝 Poesía", "🎾 Tenis", "🏓 Tenis de mesa", "🎵 Toco un instrumento", "🎹 Tocar el piano",
    "🎸 Tocar la guitarra", "🎻 Tocar el violín", "🎷 Tocar el saxofón", "🎺 Tocar la trompeta",
    "🪘 Tocar el tamboril", "🥁 Tocar el tambor", "📺 Ver televisión", "🌎 Viajar",
    "🎒 Viajar de mochilero/a", "🫂 Visitar amigos", "📹 Vlog", "🏐 Voleibol", "👟 Yoga", "🎼 Ópera",
    "🚁 Aeromodelismo", "🚤 Navegación", "🎤 Beatboxing", "🎭 Burlesque", "🎳 Bolos", "🧩 Crucigramas",
    "🏹 Tiro con arco", "🎣 Pesca deportiva", "🎯 Dardos", "🎻 Danza del vientre", "🎮 eSports",
    "🤹 Malabares", "🛹 Skateboarding", "🎪 Circo", "🧘 Yoga acuático", "🏋️ Levantamiento de pesas",
    "🚴 Ciclismo de montaña", "🚣 Remo", "🏄 Surf", "🧗 Escalada en roca", "🎢 Parques de atracciones",
    "🎬 Producción de videos", "🎤 Presentaciones en vivo", "🎫 Coleccionar entradas", "🍹 Coctelería",
    "🎨 Body painting", "🌱 Jardinería", "🧶 Tejer", "📚 Club de lectura", "🎼 Componer música",
    "🎤 Karaoke", "🎭 Improvisación teatral", "🎭 Teatro", "🎤 Presentaciones de stand-up",
    "📸 Fotografía de bodas", "🚁 Vuelo en helicóptero", "🏇 Hípica", "🛫 Paracaidismo",
    "🏹 Tiro con arco", "🚣 Kayak", "🎮 Juegos de mesa modernos", "🏰 LARP (Rol en vivo)", "🎣 Pesca con mosca",
    "🛹 Patinaje", "🍳 Cocina internacional", "🌋 Exploración de volcanes",
    "🎻 Música clásica", "🏹 Tiro al blanco", "🧗 Escalada en hielo", "🎭 Actuación de voz",
    "🎬 Edición de videos", "🎤 Rap", "🎻 Música folk", "🎵 Música electrónica",
    "🎞️ Cine en casa", "📚 Escritura de poesía", "🏰 Visitar castillos", "🎵 Creación de remixes", "🎭 Comedia de improvisación",
    "🧩 Crucigramas", "🎻 Danza del vientre", "🎮 eSports", "🤹 Malabares",
    "🛹 Skateboarding", "🎪 Circo", "🧘 Yoga acuático", "🏋️ Levantamiento de pesas", "🚴 Ciclismo de montaña",
    "🚣 Remo", "🏄 Surf", "🤿 Buceo", "🧗 Escalada en roca", "🎢 Parques de atracciones",
    "🎬 Producción de videos", "🎤 Presentaciones en vivo", "🎫 Coleccionar entradas", "🍹 Coctelería",
    "🌱 Jardinería", "🧶 Tejer", "📚 Club de lectura", "🎼 Componer música",
    "🎤 Karaoke", "🎭 Improvisación teatral", "🎭 Teatro", "🎤 Presentaciones de stand-up", "🖌️ Arte callejero",
    "📝 Blog de viajes", "📸 Fotografía de bodas", "🚁 Vuelo en helicóptero", "🏇 Hípica", "🛫 Paracaidismo",
    "🚣 Kayak", "🚗 Carreras de go-karts", "🌋 Exploración de volcanes", "🌌 Astronomía", "🎻 Música clásica",
    "🏹 Tiro al blanco", "🧗 Escalada en hielo", "🎬 Edición de videos", "🎤 Rap",
    "🎻 Música folk", "🎵 Música electrónica", "🎞️ Cine en casa", "📚 Escritura de poesía",
    "🏰 Visitar castillos", "🎵 Creación de remixes", "🎭 Comedia de improvisación",
    "🏹 Tiro con arco", "🎭 Teatro improvisado", "🎻 Violonchelo", "🎺 Trombón", "🎷 Saxofón",
    "🎵 Composición de bandas sonoras", "📚 Encuadernación de libros", "🎤 Narración de historias", "🎨 Esculpir", "🏰 Juegos de rol en vivo",
    "🧳 Empacar para viajes", "🎨 Pintura abstracta", "🎭 Comedia de situación", "🍵 Ceremonia del té", "🎨 Hacer murales", "🍳 Cocina gourmet", "🎣 Pesca en alta mar", "🎮 Diseño de videojuegos", "🏰 Creación de mapas para juegos de rol",
    "🎮 Speedrunning en videojuegos", "📷 Fotografía de retratos", "🎭 Marionetas", "🧵 Costura creativa", "🎭 Maquillaje de efectos especiales",
    "🚴 Ciclismo de carretera", "🛴 Patinaje en línea", "🏹 Tiro con ballesta", "🎤 Presentación de radio", "🎙️ Locución",
    "🎨 Cerámica", "🏸 Bádminton de playa", "🚣 Rafting", "🚵 Descenso de montaña en bicicleta",
    "🎮 Creación de mods para videojuegos", "🎨 Hacer grafitis", "🧘 Yoga aéreo", "🧘 Yoga caliente",
    "🚴 Ciclismo acrobático", "🎨 Hacer joyas", "🎭 Comedia musical", "🎮 Crear tu propia página web", "📚 Bibliofilia",
    "🎨 Tatuajes", "🚤 Esquí acuático", "🏄 Kitesurf", "🏂 Snowboard", "🛥️ Navegar",
    "🏹 Tiro con arco en globo", "🏇 Carreras de camellos", "🎭 Teatro de sombras", "🎨 Restauración de arte", "🎮 Programar videojuegos",
    "🎨 Pirograbado", "🧶 Tejer amigurumis", "🏹 Tiro con arco en trineo", "🎭 Clowning",
    "🧳 Excursiones a lugares abandonados", "🏄 Paddleboarding", "🏹 Tiro con arco en bicicleta",
    "🚴 Ciclismo de montaña nocturno", "🧘 Yoga facial", "🎭 Teatro de improvisación musical", "🎨 Realidad aumentada en arte", "🎮 Speedcubing",
    "🎮 Creación de juegos de mesa", "🎭 Mimo", "🧘 Yoga para niños", "🚴 Ciclismo con manos libres",
    "🎮 Torneos de videojuegos", "🧶 Hacer mantas de ganchillo", "🎭 Teatro de marionetas", "🎨 Pintura con los dedos", "🎭 Teatro de calle",
    "🎨 Graffiti en 3D", "🎤 Narración oral", "🎮 Creación de mundos virtuales", "🚴 Ciclismo en tandem",
    "🎨 Escultura en hielo", "🎭 Teatro en el agua", "🎭 Teatro para bebés", "🚴 Ciclismo con obstáculos",
    "🎮 Creación de avatares", "🎭 Comedia de stand-up para niños", "🧶 Hacer muñecas de trapo", "🎨 Pintura con esponjas", "🎭 Comedia de improvisación para niños",
    "🎨 Origami 3D", "🎮 Juegos de escape en vivo", "🚴 Ciclismo sin manos",
    "🎭 Comedia de situación en radio", "🧘 Yoga para embarazadas", "🎨 Dibujar con tinta", "🎮 Creación de mods para juegos de mesa", "🚴 Ciclismo en grupo",
    "🎨 Pintura al óleo", "🎭 Teatro de títeres con sombras", "🎭 Comedia de vaudeville", "🚴 Ciclismo en solitario",
    "🎮 Creación de videojuegos para móviles", "🧶 Hacer peluches", "🎨 Collage", "🎭 Improvisación teatral para niños",
    "🎭 Teatro experimental", "🚴 Ciclismo en invierno", "🎨 Dibujo digital", "🎮 Creación de juegos de mesa para niños",
    "🚴 Ciclismo con mascotas", "🎭 Comedia romántica", "🎨 Pintura acrílica", "🎭 Comedia absurda",
    "🚴 Ciclismo con sidecar", "🚣 Canoa de aguas bravas", "🎮 Creación de videojuegos de realidad virtual", "🧶 Hacer amigurumis", "🎨 Dibujo a lápiz",
    "🎮 Torneos de eSports", "🚴 Ciclismo con remolque", "🎭 Comedia de sketch", "🎨 Pintura con pinceles chinos",
    "🚴 Ciclismo con remolque para niños", "🎮 Creación de videojuegos de simulación", "🧶 Hacer bufandas", "🎨 Dibujo a pluma",
    "🎭 Teatro en lenguaje de señas", "🚴 Ciclismo con remolque para mascotas", "🚣 Canoa de río de aguas tranquilas", "🎮 Creación de videojuegos de estrategia", "🎨 Pintura en acuarela",
    "🚴 Ciclismo con remolque para carga", "🎭 Comedia de enredo", "🧶 Hacer mantas de lana", "🎨 Dibujo a carboncillo",
    "🚴 Ciclismo con remolque para picnic", "🚣 Canoa de río de aguas rápidas", "🎮 Creación de videojuegos de acción", "🎭 Comedia de sátira", "🎨 Pintura en tempera",
    "🚴 Ciclismo con remolque para camping", "🎮 Creación de videojuegos de aventuras", "🧶 Hacer guantes de ganchillo", "🎨 Dibujo a tiza",
    "🚴 Ciclismo con remolque para compras", "🎭 Comedia de melodrama", "🎨 Pintura en gouache",
    "🏄 Surf", "🚴 Ciclismo de montaña", "🎭 Teatro clásico", "🏇 Equitación", "🎨 Escultura",
    "🎮 Videojuegos retro", "🚣 Remo", "🎤 Karaoke", "🧶 Tejer", "🎮 Juegos de mesa modernos",
    "🏹 Tiro con arco", "🎭 Teatro improvisado", "🎻 Violonchelo", "🎺 Trombón", "🎷 Saxofón",
    "🎵 Composición de bandas sonoras", "📚 Encuadernación de libros", "🎤 Narración de historias", "🎨 Esculpir", "🏰 Juegos de rol en vivo",
    "🧳 Empacar para viajes", "🎨 Pintura abstracta", "🎭 Comedia de situación", "🍵 Ceremonia del té", "🎨 Hacer murales",
    "🎨 Caligrafía japonesa", "🍳 Cocina gourmet", "🎣 Pesca en alta mar", "🎮 Diseño de videojuegos", "🏰 Creación de mapas para juegos de rol",
    "🎮 Speedrunning en videojuegos", "📷 Fotografía de retratos", "🎭 Marionetas", "🧵 Costura creativa", "🎭 Maquillaje de efectos especiales",
    "🚴 Ciclismo de carretera", "🛴 Patinaje en línea", "🏹 Tiro con ballesta", "🎤 Presentación de radio", "🎙️ Locución",
    "🎨 Cerámica", "🏄 Bodyboard", "🚣 Rafting", "🚵 Descenso de montaña en bicicleta",
    "🎮 Creación de mods para videojuegos", "🎨 Hacer grafitis", "🎳 Bolos cósmicos", "🧘 Yoga aéreo", "🧘 Yoga caliente",
    "🚴 Ciclismo acrobático", "🎨 Hacer joyas", "🎭 Comedia musical", "🎮 Crear tu propia página web",
    "🎨 Tatuajes", "🚤 Esquí acuático", "🏄 Kitesurf", "🏂 Snowboard", "🛥️ Navegar",
    "🏹 Tiro con arco en globo", "🎭 Teatro de sombras", "🎨 Restauración de arte", "🎮 Programar videojuegos",
    "🎨 Pirograbado", "🧶 Tejer amigurumis", "🎳 Bolos duckpin", "🏹 Tiro con arco en trineo", "🎭 Clowning",
    "🧳 Excursiones a lugares abandonados", "🏸 Bádminton de mesa", "🏄 Paddleboarding", "🏹 Tiro con arco en bicicleta", "🚣 Canoa polo",
    "🚴 Ciclismo de montaña nocturno", "🧘 Yoga facial", "🎭 Teatro de improvisación musical", "🎨 Realidad aumentada en arte", "🎮 Speedcubing",
    "🎮 Creación de juegos de mesa", "🎭 Mimo", "🧘 Yoga para niños", "🚴 Ciclismo con manos libres",
    "🎮 Torneos de videojuegos", "🧶 Hacer mantas de ganchillo", "🎭 Teatro de marionetas", "🎨 Pintura con los dedos", "🎭 Teatro de calle",
    "🎨 Graffiti en 3D", "🎤 Narración oral", "🎮 Creación de mundos virtuales", "🚴 Ciclismo en tandem", "🚣 Canoa hawaiana",
    "🎨 Escultura en hielo", "🎭 Teatro en el agua", "🎭 Teatro para bebés", "🚴 Ciclismo con obstáculos", "🚣 Canoa australiana",
    "🎮 Creación de avatares", "🎭 Comedia de stand-up para niños", "🧶 Hacer muñecas de trapo", "🎨 Pintura con esponjas", "🎭 Comedia de improvisación para niños",
    "🎨 Origami 3D", "🎤 Canto en karaoke", "🎮 Juegos de escape en vivo", "🚴 Ciclismo sin manos", "🚣 Canoa india",
    "🎭 Comedia de situación en radio", "🧘 Yoga para embarazadas", "🎨 Dibujar con tinta", "🎮 Creación de mods para juegos de mesa", "🚴 Ciclismo en grupo",
    "🚣 Canoa polinesia", "🎨 Pintura al óleo", "🎭 Teatro de títeres con sombras", "🎭 Comedia de vaudeville", "🚴 Ciclismo en solitario",
    "🚣 Canoa de travesía", "🎮 Creación de videojuegos para móviles", "🧶 Hacer peluches", "🎨 Collage", "🎭 Improvisación teatral para niños",
    "🎭 Teatro experimental", "🚴 Ciclismo en invierno", "🚣 Canoa de mar", "🎨 Dibujo digital", "🎮 Creación de juegos de mesa para niños",
    "🚴 Ciclismo con mascotas", "🚣 Canoa de río", "🎭 Comedia romántica", "🎨 Pintura acrílica", "🎭 Comedia absurda",
    "🚴 Ciclismo con sidecar", "🎮 Creación de videojuegos de realidad virtual", "🧶 Hacer amigurumis", "🎨 Dibujo a lápiz",
    "🎮 Torneos de eSports", "🚴 Ciclismo con remolque", "🎭 Comedia de enredo", "🧶 Hacer mantas de lana", "🎨 Dibujo a carboncillo",
    "🚴 Ciclismo con remolque para picnic", "🎮 Creación de videojuegos de acción", "🎭 Comedia de sátira", "🎨 Pintura en tempera",
    "🚴 Ciclismo con remolque para camping", "🎮 Creación de videojuegos de aventuras", "🧶 Hacer guantes de ganchillo", "🎨 Dibujo a tiza",
    "🚴 Ciclismo con remolque para compras", "🎭 Comedia de melodrama", "🎨 Pintura en gouache",
    "🎨 Esculpir",
  "🍵 Ceremonia del té", "🍵 Ceremonia del té", "👋 Estar en Pinterest", "🏂 Snowboard",
  "🎵 Composición de bandas sonoras",
  "🚴 Ciclismo de montaña", "🚣 Rafting", "🎨 Hacer murales",
  "🏹 Tiro con arco en globo",
  "🎮 Creación de mundos virtuales", "🏄 Surf", "🏄 Paddleboarding", "🎭 Clowning",
  "🚤 Esquí acuático", "🎸 Tocar la guitarra", "🚣 Canoa de río de aguas bravas",
  "🎭 Comedia de enredo", "🎭 Teatro en lenguaje de señas",
  "🧵 Costura creativa", "🎨 Dibujar con tinta", "🎮 Creación de mods para juegos de mesa",
  "🎮 Torneos de videojuegos", "🎮 Creación de videojuegos de realidad virtual",
  "🚣 Canoa de río de aguas serenas", "🎤 Narración de historias", "🎮 Creación de videojuegos de estrategia",
  "🚴 Ciclismo con manos libres", "🎮 Creación de videojuegos para móviles",
  "🎨 Dibujo digital", "🎮 Creación de videojuegos de simulación", "🚴 Ciclismo en invierno",
  "🚣 Canoa de mar", "🎮 Creación de mods para videojuegos", "🎮 Speedrunning en videojuegos",
  "🧶 Hacer bufandas", "🎨 Dibujo a carboncillo",
  "🧶 Hacer mantas de lana", "🎨 Dibujo a tiza",
  "🚣 Canoa de aguas rápidas", "🧶 Hacer peluches", "🎨 Collage",
  "🚣 Canoa de río", "🧶 Hacer amigurumis", "🎨 Escultura en hielo",
  "🚴 Ciclismo con remolque para picnic", "🧶 Hacer guantes de ganchillo", "🎨 Hacer joyas",
  "🚣 Canoa de río de aguas lentas", "🚴 Ciclismo con remolque para camping", "🧶 Hacer mantas de ganchillo",
  "🚣 Canoa de río de aguas onduladas", "🚴 Ciclismo con remolque para compras",
  "🚴 Ciclismo con remolque", "🚣 Canoa de aguas tranquilas",
  "🚴 Ciclismo con sidecar",
  "🚴 Ciclismo con remolque para picnic", "🚴 Ciclismo con remolque para camping",
  "🚴 Ciclismo con remolque para compras",
  "🎮 Juegos en línea", "🕹️ Gaming en streaming", "🎧 Podcasting", "🎥 Streaming de video en vivo",
  "📱 Desarrollo de aplicaciones móviles", "🎬 Creación de contenido en YouTube", "📸 Fotografía de redes sociales",
  "🕺 TikTok", "🐦 Twitter", "📷 Instagram", "📽️ Producción de videos cortos",
  "🎙️ Creación de podcasts", "🎨 Diseño gráfico digital", "💻 Programación de software", "🎵 Creación de música digital",
  "🎤 Creación de contenido en redes sociales", "🎲 Juegos de mesa en línea", "🎮 Juegos de consola", "🕹️ Realidad virtual",
  "🚀 Desarrollo de software", "📱 Desarrollo de aplicaciones web", "🎮 eSports", "🎞️ Edición de videos",
  "📹 Vlogging", "🎤 Creación de contenido de ASMR", "🎮 Creación de mods para videojuegos", "👾 Creación de videojuegos indie",
  "🎥 Producción de cortometrajes", "🎭 Actuación en videojuegos", "🖥️ Diseño de sitios web", "👩‍💻 Desarrollo de aplicaciones para redes sociales",
  "🕵️‍♂️ Juegos de detectives en línea", "🎮 Videojuegos de mundo abierto", "🚗 Juegos de carreras en línea", "📚 Clubes de lectura en línea",
  "🎤 Entrevistas en vivo en redes sociales", "🖌️ Ilustración digital", "🧙‍♂️ Juegos de rol en línea", "🔍 Búsqueda del tesoro en línea",
  "🎮 Juegos de aventuras en línea", "🎭 Teatro en línea", "🎨 Pintura digital", "🎮 Creación de contenido de Minecraft",
  "🎵 Producción de música electrónica", "🕹️ Emuladores de videojuegos", "🎥 Producción de documentales", "📚 Audiolibros",
  "🎤 Stand-up comedy en línea", "🎮 Creación de videojuegos educativos", "📸 Fotografía de alimentos para redes sociales", "🎭 Improvisación teatral en línea",
  "📱 Desarrollo de aplicaciones de realidad aumentada", "🧪 Experimentos científicos en línea", "🎮 Juegos de mesa digitales", "🎤 Podcasts de comedia",
  "🎶 Creación de listas de reproducción en streaming", "📸 Fotografía de viajes para redes sociales", "🚀 Simulación de vuelo en línea", "📸 Fotografía de moda para redes sociales",
  "🎮 Videojuegos de terror", "📚 Clubes de lectura de cómics en línea", "🎤 Karaoke en línea", "📸 Fotografía de paisajes para redes sociales",
  "🎮 Juegos de estrategia en línea", "🎤 Presentaciones de poesía en línea", "📸 Fotografía de mascotas para redes sociales", "🎮 Juegos de cartas en línea",
  "🏛️ Visitas virtuales a museos", "🎨 Creación de memes", "🎮 Juegos de lógica en línea", "📸 Fotografía de naturaleza para redes sociales",
  "🎮 Juegos de rompecabezas en línea", "🎤 Open mic en línea", "📸 Fotografía de arquitectura para redes sociales", "🎮 Juegos de simulación en línea",
  "📸 Fotografía de retratos para redes sociales", "🎮 Juegos de deportes en línea", "🎤 Entrevistas en línea", "📸 Fotografía de eventos para redes sociales",
  "🎮 Juegos de mesa modernos en línea", "🎶 Composición de música para videojuegos", "📸 Fotografía de bodas para redes sociales", "🎮 Videojuegos de mundo abierto en línea",
  "🎮 Juegos de rol en vivo en línea", "📸 Fotografía de productos para redes sociales", "🎤 Entrevistas de trabajo en línea", "🎮 Juegos de terror en línea",
  "🎮 Videojuegos de supervivencia en línea", "📸 Fotografía de vehículos para redes sociales", "🎶 Composición de música para películas", "🎮 Juegos de construcción en línea",
  "🎮 Juegos de música en línea", "🎮 Juegos de baile en línea", "🎤 Entrevistas de celebridades en línea", "🎮 Juegos de cocina en línea",
  "🎮 Juegos de moda en línea", "🎮 Juegos de maquillaje en línea", "🎤 Entrevistas de expertos en línea", "🎮 Juegos de jardinería en línea",
  "🎮 Juegos de arquitectura en línea", "🎮 Juegos de decoración en línea", "🎮 Juegos de cocina en línea", "🎤 Entrevistas de música en línea",
  "🎮 Juegos de peluquería en línea", "🎤 Entrevistas de cine en línea", "🎮 Juegos de coctelería en línea", "🎮 Juegos de repostería en línea",
  "🎮 Juegos de deportes extremos en línea", "🎮 Juegos de viajes en línea", "🎤 Entrevistas de tecnología en línea", "🎤 Entrevistas de ciencia en línea",
  "🎮 Juegos de ciencia en línea", "🎮 Juegos de historia en línea", "🎤 Entrevistas de historia en línea", "🎮 Juegos de arte en línea",
  "🎮 Juegos de diseño en línea", "🎤 Entrevistas de diseño en línea", "🎮 Juegos de tecnología en línea", "🎮 Juegos de robótica en línea",
  "🎤 Entrevistas de robótica en línea", "🎮 Juegos de inteligencia artificial en línea", "🎮 Juegos de realidad virtual en línea", "🎮 Juegos de realidad aumentada en línea",
  "🎤 Entrevistas de realidad virtual en línea", "🎮 Juegos de drones en línea", "🎮 Juegos de vehículos autónomos en línea", "🎤 Entrevistas de vehículos autónomos en línea",
  "🎮 Juegos de exploración espacial en línea", "🎮 Juegos de astronomía en línea", "🎤 Entrevistas de exploración espacial en línea", "🎤 Entrevistas de astronomía en línea",
  "🎮 Juegos de biología en línea", "🎤 Entrevistas de biología en línea", "🎮 Juegos de química en línea", "🎤 Entrevistas de química en línea",
  "🎮 Juegos de física en línea", "🎤 Entrevistas de física en línea", "🎮 Juegos de matemáticas en línea", "🎤 Entrevistas de matemáticas en línea",
  "🎮 Juegos de historia del arte en línea", "🎤 Entrevistas de historia del arte en línea", "🎮 Juegos de música en línea", "🎤 Entrevistas de música en línea",
  "🎮 Juegos de literatura en línea", "🎤 Entrevistas de literatura en línea", "🎮 Juegos de filosofía en línea", "🎤 Entrevistas de filosofía en línea",
  "🎮 Juegos de psicología en línea", "🎤 Entrevistas de psicología en línea", "🎮 Juegos de sociología en línea", "🎤 Entrevistas de sociología en línea",
  "🎮 Juegos de antropología en línea", "🎤 Entrevistas de antropología en línea", "🎮 Juegos de arqueología en línea", "🎤 Entrevistas de arqueología en línea",
  "🎮 Juegos de política en línea", "🎤 Entrevistas de política en línea", "🎮 Juegos de economía en línea", "🎤 Entrevistas de economía en línea",
  "🎮 Juegos de ciencias políticas en línea", "🎤 Entrevistas de ciencias políticas en línea", "🎮 Juegos de derecho en línea", "🎤 Entrevistas de derecho en línea",
  "🎮 Juegos de medicina en línea", "🎤 Entrevistas de medicina en línea", "🎮 Juegos de enfermería en línea", "🎤 Entrevistas de enfermería en línea",
  "🎮 Juegos de odontología en línea", "🎤 Entrevistas de odontología en línea", "🎮 Juegos de veterinaria en línea", "🎤 Entrevistas de veterinaria en línea",
  "🎮 Juegos de ingeniería en línea", "🎤 Entrevistas de ingeniería en línea", "🎮 Juegos de arquitectura en línea", "🎤 Entrevistas de arquitectura en línea",
  "🎮 Juegos de informática en línea", "🎤 Entrevistas de informática en línea", "🎮 Juegos de ciencias de la computación en línea", "🎤 Entrevistas de ciencias de la computación en línea",
  "🎮 Juegos de matemáticas aplicadas en línea", "🎤 Entrevistas de matemáticas aplicadas en línea", "🎮 Juegos de estadísticas en línea", "🎤 Entrevistas de estadísticas en línea",
  "🎮 Juegos de física aplicada en línea", "🎤 Entrevistas de física aplicada en línea", "🎮 Juegos de química aplicada en línea", "🎤 Entrevistas de química aplicada en línea",
  "🎮 Juegos de biología aplicada en línea", "🎤 Entrevistas de biología aplicada en línea", "🎮 Juegos de tecnología de alimentos en línea", "🎤 Entrevistas de tecnología de alimentos en línea",
  "🎮 Juegos de tecnología ambiental en línea", "🎤 Entrevistas de tecnología ambiental en línea", "🎮 Juegos de tecnología energética en línea", "🎤 Entrevistas de tecnología energética en línea",
  "🎮 Juegos de tecnología de materiales en línea", "🎤 Entrevistas de tecnología de materiales en línea", "🎮 Juegos de tecnología de la información en línea",
  "💄 Maquillaje Artístico", "🌸 Cuidado de la Piel", "👗 Diseño de Moda", "💇 Peluquería", "💅 Manicura y Pedicura", 
  "🌿 Aromaterapia", "🧘 Yoga", "🧘‍♀️ Meditación", "🎭 Cosplay", "✍️ Escritura Creativa", 
  "🎨 Arte Digital", "📸 Fotografía", "🌱 Jardinería", "🍳 Cocina Gourmet", "🍹 Mixología", 
  "🏺 Cerámica", "🗿 Escultura", "🧵 Bordado", "🔨 Restauración de Muebles", "💍 Joyas Artesanales", 
  "🐬 Biología Marítima", "⛏️ Arqueología", "💻 Programación", "🎮 Desarrollo de Videojuegos", 
  "🤖 Robótica", "🧠 Inteligencia Artificial", "📚 Estudio de Filosofía", "🎨 Historia del Arte", "🔤 Lingüística", 
  "🏛️ Arquitectura", "🧠 Psicología", "📖 Crítica Literaria", "⚛️ Física Cuántica", "🧪 Química Orgánica", 
  "🌿 Medicina Alternativa", "🪂 Paracaidismo", "🤺 Esgrima", 
  "🏃 Parkour", "🏙️ Exploración Urbana", "🐞 Colecta de Insectos", "🔭 Astronomía Amateur", "🦅 Observación de Aves", 
  "🎈 Viajes en Globo Aerostático", "🕵️ Caza de Tesoros con Detector de Metales", "🐉 Criptozoología", "🦴 Taxidermia", 
  "🏺 Coleccionismo de Artefactos Antiguos", "🦊 Rescate de Animales", "🧀 Elaboración de Quesos", "🍺 Fermentación Casera", 
  "🌳 Entrenamiento de Bonsái", "📝 Escritura de Haikus", "🌸 Reproducción de Orquídeas", "🔬 Experimentos Culinarios", "🌿 Estudio de Plantas Medicinales", 
  "🕯️ Elaboración de Velas", "✒️ Escritura en Caligrafía", "📜 Fabricación de Papel Artesanal", "🌀 Diseño de Laberintos", "🏗️ Construcción de Maquetas", 
  "🤖 Creación de Robots de Combate", "📚 Maratón de Lectura de Libros Clásicos", "🎥 Realización de Documentales de Naturaleza", "🔍 Estudio de Mitología Comparada",
  "🎮 Streaming de Videojuegos en Vivo", "🎲 Organizar Noches de Juegos de Mesa", "🎧 Descubrir Nueva Música", "📸 Fotografía de Street Style", "📚 Club de Lectura de Ciencia Ficción",
  "🏹 Tiro con Arco Recreativo", "🎥 Realizar Cortometrajes", "🧪 Experimentos de Ciencias Caseros", "🚲 Ciclismo de Montaña Extremo", "🏋️ Levantamiento de Pesas Olímpico",
  "🍔 Catador de Comida Rápida", "🎤 Karaoke en Casa", "🌍 Voluntariado Internacional", "🖥️ Creación de Animaciones", "🍹 Mixólogo de Cócteles Locos",
  "🧘 Yoga Acrobático", "🌲 Excursiones de Senderismo Nocturnas", "🎨 Pintura Corporal", "🎭 Actuación de Improvisación", "🧩 Resolver Cubos de Rubik",
  "🎸 Tocar en una Banda de Garaje", "🚴 Ciclismo de Acrobacias", "🎻 Tocar Música Clásica en un Conjunto", "🌳 Arboricultura", "📜 Escribir Poemas Cómicos",
  "🎣 Pesca de Competición", "🌌 Observación de Estrellas", "🚀 Construcción de Cohetes Caseros", "🎯 Lanzamiento de Hachas", "🧚 Participación en Reinos de Rol en Vivo (LARP)",
  "🎭 Actuar en una Obra de Teatro Comunitaria", "🤹 Malabares de Fuego", "🎨 Pintura en Spray de Grafitis", "🦸 Cosplay de Personajes Famosos", "🏍️ Motocross en el Barro",
  "🧙 Juegos de Rol de Magia", "🎮 Diseño de Mods para Videojuegos", "🦄 Montar a Caballo de Fantasía", "🏰 Construcción de Castillos de Arena Épicos", "🎲 Creación de Juegos de Mesa Personalizados",
  "🎩 Aprender Trucos de Magia", "🚴 Ciclismo en un Parque de BMX", "🎭 Teatro de Marionetas", "🎳 Bolos Cósmicos Nocturnos", "🦆 Observación de Aves Acuáticas",
  "🚵 Ciclismo de Montaña en la Nieve", "🎪 Aprender Acrobacias de Circo", "🎶 Componer Música Electrónica", "🎸 Tocar Guitarra en una Banda de Rock", "🎻 Tocar Violín en una Orquesta Sinfónica",
  "🎮 Participar en Torneos de eSports", "📷 Fotografía de Naturaleza en Macro", "🎭 Actuar en Comedias de Situación Radiofónicas", "🎧 DJ en Fiestas Locales", "🧘 Yoga en el Parque con la Comunidad",
  "🎤 Stand-Up Comedy en Micrófono Abierto", "🚣 Kayak de Aguas Bravas", "🛹 Skateboard en Parques Especializados", "🎥 Realizar Parodias de Películas", "🚴 Ciclismo de Montaña en Cuevas",
  "🦠 Experimentos de Ciencias de la Vida", "🎮 Creación de Juegos de Rol en Línea (RPG)", "🎨 Pintura en Lienzos Gigantes", "🌱 Creación de Jardines Verticales", "🎭 Actuar en un Circo Ambulante",
  "🦸 Cosplay de Personajes de Series de TV", "🏄 Surf Nocturno con Luces LED", "🎶 Tocar Instrumentos Musicales Inusuales", "🔍 Búsqueda de Huevos de Pascua para Adultos", "🛹 Skateboard de Downhill Extremo",
  "🎳 Participar en Torneos de Bolos", "🔬 Experimentos de Química Divertidos", "🚴 Ciclismo Extremo por la Ciudad", "🎥 Realizar Parodias de Videos Musicales", "🎤 Karaoke en un Bar Local",
  "🎮 Organizar Torneos de Juegos de Cartas Coleccionables", "🎨 Pintura en la Oscuridad con Pintura Fluorescente", "🧚 Participar en Competencias de Cometas Gigantes", "🎹 Tocar el Piano en una Banda de Jazz", "🚣 Kayak en Aguas de Mar Abierto"
]

var emojiANumero = {
"0️⃣": "0", "1️⃣": "1", "2️⃣": "2", "3️⃣": "3", "4️⃣": "4",
"5️⃣": "5", "6️⃣": "6", "7️⃣": "7", "8️⃣": "8", "9️⃣": "9"
}
var todosLosPasatiemposOrdenados = todosLosPasatiempos.sort(function(a, b) {
return a.slice(2).localeCompare(b.slice(2), undefined, { sensitivity: 'base' })
})
function asignarPasatiempo(text) {
var numero = parseInt(text.replace(/\D/g, ''))
if (numero >= 1 && numero <= todosLosPasatiemposOrdenados.length) {
return todosLosPasatiemposOrdenados[numero - 1]
} else if (text.trim() !== "") {
var pasatiempoIngresado = text.replace(/\D/g, '')
conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*THE HOBBY"${!pasatiempoIngresado ? 'WITH LETTERS 🔡' : pasatiempoIngresado === undefined ? 'FROM SOME POSITION' :  pasatiempoIngresado}" NOT PART OF THE LIST OF HOBBIES*`, fkontak, m)
return
}}	
var pasatiemposSet = new Set(todosLosPasatiempos)
var todosLosPasatiemposOrdenados = Array.from(pasatiemposSet).sort(function(a, b) {
return a.slice(2).localeCompare(b.slice(2), undefined, { sensitivity: 'base' })
})
let yyr = ''
yyr += `*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮*
*┊ 🎉 SELECT YOUR HOBBY!!*
*┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯*\n`;
todosLosPasatiemposOrdenados.forEach(function (pasatiempo, index) {
yyr += ` [ ${index + 1} ] » ${pasatiempo}\n`
});
yyr += `*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*`
var maximoIndice = todosLosPasatiemposOrdenados.length - 0
function seleccionarPasatiempos(texto) {
var seleccionados = texto.split(',').map(function(item) {
return item.trim()
})
var pasatiemposSet = new Set()
for (var i = 0; i < seleccionados.length; i++) {
var pasatiempoSeleccionado = asignarPasatiempo(seleccionados[i])
if (pasatiempoSeleccionado !== undefined) {
pasatiemposSet.add(pasatiempoSeleccionado)
if (!pas1) {
pas1 = pasatiempoSeleccionado
} else if (!pas2) {
pas2 = pasatiempoSeleccionado
} else if (!pas3) {
pas3 = pasatiempoSeleccionado
} else if (!pas4) {
pas4 = pasatiempoSeleccionado
} else if (!pas5) {
pas5 = pasatiempoSeleccionado
}}}
var pasatiemposUnicos = Array.from(pasatiemposSet)
var resultado = pasatiemposUnicos.join(', ')
var pasatiemposSeleccionados = [pas1, pas2, pas3, pas4, pas5].filter(pasatiempo => pasatiempo !== "");
var posicionesSet = new Set(pasatiemposSeleccionados)
if (pasatiemposUnicos.length >= 1 && pasatiemposUnicos.length <= 5) {
if (pasatiemposSeleccionados.length >= 1 && pasatiemposSeleccionados.length <= 5 && pasatiemposSeleccionados.length === posicionesSet.size) {
//console.log("Pasatiempos seleccionados:", resultado)
user.pasatiempo = resultado
global.db.data.users[m.sender]['registroC'] = true
conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoEG']()}*THAT'S GREAT!! ADDED HOBBIES*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*${user.pasatiempo === 0 ? sinDefinir : user.pasatiempo}*\n\n🌟 *TO SAVE YOUR RECORD, TYPE:*\n\`\`\`${usedPrefix}complete\`\`\``}, {quoted: fkontak})	
//console.log("Pasatiempos por separado:", pas1, pas2, pas3, pas4, pas5)
}else{
conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*THE HOBBY "${pasatiempoSeleccionado === undefined ? 'FROM SOME POSITION' : pasatiempoSeleccionado }"*HAS ALREADY BEEN SELECTED*`, fkontak, m)
}} else {
conn.reply(m.chat, `🌟 *SELECT A MINIMUM OF ONE HOBBY AND A MAXIMUM OF FIVE HOBBIES *\n\n*To select multiple hobbies, separate by commas (,), and you can also use numbers or numeric emojis, example:*\n\n✪ *(1 pastime)*\n✓ \`\`\`${usedPrefix}Pastime 2️⃣\`\`\`\n\n✪ *(2 Hobbies)*\n✓ \`\`\`${usedPrefix}genero 45, 65\`\`\`\n\n✪ *(3 Hobbies)*\n✓ \`\`\`${usedPrefix}Gender 2️⃣4️⃣, 1️⃣5️⃣6️⃣, 8️⃣9️⃣\`\`\`\n\n✪ *(4 Hobbies)*\n✓ \`\`\`${usedPrefix}gender 223, 456, 6, 4\`\`\`\n\n✪ *(5 Hobbies)*\n✓ \`\`\`${usedPrefix}gender 56, 5️⃣1️⃣6️⃣, 345, 2️⃣4️⃣, 200\`\`\`\n\n${yyr}`, fkontak, m)
}}
seleccionarPasatiempos(seleccion)
}	
	
if (command == 'complete' || command == 'end') {
if (global.db.data.users[m.sender]['registroC'] == true) {
if (user.premLimit === 0) {	
tiempo = user.premLimit === 1 ? 0 : 36000000 //10 horas
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
}
fecha = `${week}, ${date} *||* `
hora = `${time}`
user.tiempo = fecha + hora
user.name = user.name === 0 ? sinDefinir : user.name + 'ͧͧͧͦꙶͣͤ✓ᚲɢᴅs-ᴍᴅ'
user.descripcion = bio
user.age = user.age === 0 ? sinDefinir : user.age >= 18 ? user.age += ' Years *||* ' + '(Adult)' : user.age += ' Years *||* ' + '(Young Person)'
user.genero = user.genero === 0 ? sinDefinir : user.genero == 'Hidden' ? `${user.genero} 🕶️` : user.genero == 'Woman' ? `${user.genero} 🚺` : user.genero == 'Man' ? `${user.genero} 🚹` : sinDefinir
user.identidad = user.identidad === 0 ? sinDefinir : user.identidad
user.pasatiempo = user.pasatiempo === 0 ? sinDefinir : user.pasatiempo
}else{
fecha = `${week}, ${date} || `
hora = `${time}`
user.tiempo = fecha + hora
user.name = user.name === 0 ? sinDefinir : user.name + 'ͧͧͧͦꙶͣͤ✓ᚲɢᴅs-ᴍᴅ'
user.age = user.age === 0 ? sinDefinir : user.age >= 18 ? user.age += ' Years *||* ' + '(Adult)' : user.age += ' Years *||* ' + '(Young Person)'
user.descripcion = bio	
}
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
registrando = false
clearInterval(intervalId)	
await conn.sendMessage(m.chat, {
text: `🍃 \`\`\`SUCCESSFUL VERIFICATION\`\`\` 🍃
*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n
😼 *REGISTERED BY*
❱❱ ${wm}\n
📑 *RECORD TYPE* 
❱❱ ${user.registroC === true ? 'Full Registration' : 'Quick Sign-Up'}\n
⌛ *DATE/HOUR*
❱❱ ${user.tiempo}\n
🛅 *REGISTRATION CODE*
❱❱ ${sn}\n
✅ *VERIFICATION BADGE*
❱❱   *${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓ᚲɢᴅs-ᴍᴅ' : ''}*\n
✨ *NAME* 
❱❱ ${user.name}\n
👀 *DESCRIPTION*
❱❱ ${user.descripcion}\n
🔢 *AGE* 
❱❱ ${user.age}\n
${user.registroC === true ? `☘️ *GENDER*
❱❱ ${user.genero}\n
🌱 *GENDER PREFERENCE*
❱❱ ${user.identidad}\n
❇️ *HOBBY(S)*
❱❱ ${user.pasatiempo}\n
${user.premLimit === 1 ? '' : `🎟️ *PREMIUM*
❱❱ ${user.premLimit === 1 ? '' : `${user.premiumTime > 0 ? '✅' : '❌'} +10 HOURS || ${user.premiumTime - now} ms`}`}   ` : ''}${user.registroC === true ? `\n🌟 *If it is your first time registering, you will receive premium hours for free as an exclusive bonus for your first registration, you can cancel and delete your registration at any time. Thank you for signing up✨*` : ''}`.trim(),
contextInfo: {
externalAdReply: {
title: wm,
body: user.name,
thumbnailUrl: pp, 
sourceUrl: 'https://whatsapp.com/channel/0029VaKNbWkKbYMLb61S1v11',
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}, { quoted: fkontak })
await m.reply(`${sn}`)	
}}
handler.command = ['verify', 'verificar', 'register', 'registrar', 'reg', 'reg1', 'nombre', 'name', 'nombre2', 'name2', 'edad', 'age', 'edad2', 'age2', 'genero', 'género', 'gender', 'identidad', 'pasatiempo', 'hobby', 'identity', 'finalizar', 'pas2', 'pas3', 'pas4', 'pas5']  ///^(verify|verificar|reg(ister)?)$/i
export default handler

function pickRandom(list) { 
return list[Math.floor(Math.random() * list.length)]} 
  
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
