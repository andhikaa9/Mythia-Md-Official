import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*CIEEE LAGI NYARI SC YAKKK:V*

Nih Kakk :
https://github.com/MythiaOfc/Mythia-Md-Official

My Rest Api :
https://api-mythiaofc.herokuapp.com

Sc Hanaa Full Enc Mau No Enc Recode Sendiri`
let wibu = `https://telegra.ph/file/3238445b0b83558653806.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/-",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: '⫹⫺HanaaCanss Multi Device',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
