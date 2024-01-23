const handler = async (m, {conn, isROwner, text}) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js';
    // conn.readMessages([m.key])
   await m.reply('_*♻️Restarting Bot...*_\n _*Wait a moment*_')
    process.send('reset');
};
handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['restart', 'reboot'];
handler.rowner = true;
export default handler;
