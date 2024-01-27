export default async function displayLoadingScreen(conn, from) {
    const loadingStages = [
      "ʟᴏᴀᴅɪɴɢ 《 █▒▒▒▒▒▒▒▒▒▒▒》10%,",
      "ʟᴏᴀᴅɪɴɢ 《 ████▒▒▒▒▒▒▒▒》30%,",
      "ʟᴏᴀᴅɪɴɢ 《 ███████▒▒▒▒▒》50%,",
      "ʟᴏᴀᴅɪɴɢ 《 ██████████▒▒》80%,",
      "ʟᴏᴀᴅɪɴɢ 《 ████████████》100%,",
      "🟢𝘽𝙤𝙤𝙢 𝙃𝙚𝙧𝙚 𝙞𝙨 𝙮𝙤𝙪𝙧 𝙖𝙣𝙨𝙬𝙚𝙧👇"
    ];
  
    try {
      const { key } = await conn.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' });
  
      for (let i = 0; i < loadingStages.length; i++) {
        await conn.relayMessage(from, {
          protocolMessage: {
            key: key,
            type: 14,
            editedMessage: {
              conversation: loadingStages[i]
            }
          }
        }, {});
      }
    } catch (error) {
      console.error('Error displaying loading screen:', error);
    }
  }
  
