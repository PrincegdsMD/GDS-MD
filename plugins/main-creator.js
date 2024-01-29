function handler(m) {
  let powner = process.env.ONWER_NUMBER
  let powner = process.env.OWNER_NAME
  
  const data = powner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño', 'Gowner'] 

export default handler
