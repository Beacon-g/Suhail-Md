const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="benardgrozzny48@gmail.com"
global.location="Kenya,Kisumu"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "nulll";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254717758006";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2547xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2547xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254717758006,2547xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_03_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM4LFxuICAgICAgICA5NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU2LFxuICAgICAgICAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwLFxuICAgICAgICA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYzLFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDU5LFxuICAgICAgICA5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDksXG4gICAgICAgIDUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQxLFxuICAgICAgICAzMixcbiAgICAgICAgMjAwLFxuICAgICAgICA1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MSxcbiAgICAgICAgNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODYsXG4gICAgICAgIDI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUW1VVWg1VyszdTZZdm5hTzlUOTYzd0tET0E4b0tScVVZcW5NaUlFY2FXTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOFVzVUVCcXFTNzI4aFVfeDFqdU5JUVwiLFxuICBcInBob25lSWRcIjogXCI3NmIwM2Y0Ni1mMmZkLTRlNjItOTkyNS01MjM1ZmMwYTJiOGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAyMixcbiAgICAgIDEwMSxcbiAgICAgIDI1MCxcbiAgICAgIDE5NyxcbiAgICAgIDc2LFxuICAgICAgMTI0LFxuICAgICAgMjMwLFxuICAgICAgNjAsXG4gICAgICAxODQsXG4gICAgICA4OSxcbiAgICAgIDQxLFxuICAgICAgNzIsXG4gICAgICA5NSxcbiAgICAgIDExNCxcbiAgICAgIDE3LFxuICAgICAgMTA1LFxuICAgICAgMTAsXG4gICAgICAyMjcsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAzMSxcbiAgICAgIDE4MSxcbiAgICAgIDE5MixcbiAgICAgIDEyMixcbiAgICAgIDIzMyxcbiAgICAgIDIyNCxcbiAgICAgIDEzMixcbiAgICAgIDg3LFxuICAgICAgMTk0LFxuICAgICAgMjQyLFxuICAgICAgOTQsXG4gICAgICAxMDUsXG4gICAgICAxNTUsXG4gICAgICAxODcsXG4gICAgICAxNzAsXG4gICAgICAyMzAsXG4gICAgICA1NyxcbiAgICAgIDk2LFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUJGTFQ2WUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxNzc1ODAwNjo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDAyNjk3ODk5NjYzNTg6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNML3AxYmtERUxyYXRyTUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFwZHAyUHpDTjdqMVozQTM0bzQ1eUdrMFhwTkNNNVF0WEdORHY0WGgwbVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSncxZnBycGE5bE10NWZwWHpTei80SEJXMmF4N3lCc2RxWEE0WGNQKzZKK1Z4Z0tZSlFiRnVrbjFpalhyaWEzTVVXc1VGWkpESERMWXdwUWJFcms3Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaFl5aUF6bFBTUW9qTkp2Q2pQQ1NBWUlkNDdaN09Fa3NhY0NwVnJWOVBHNHNNT3pDMkRqWHloV2FFN1RET2o0NFRXN1RpcDJKakprL0JON0ZzZ0Ewanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzE3NzU4MDA2OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NDYzODA2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzZDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPNkMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMSVFQdDFHenlsU0lZRWN3SWFLT3lDeXV4NWhxR1c2YnRXdXNjYjBqN25FPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkyNjI1MDE3NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE0NzQ4Mjk4MTg1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "pazz-be",
  packname: process.env.PACK_NAME || "pazz",
  botname : process.env.BOT_NAME  || "♎ voltage",
  ownername:process.env.OWNER_NAME|| "It'x Grozzny",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
