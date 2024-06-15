const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_08_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc3LFxuICAgICAgICAzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDc4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgODcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDYyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYyLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0LFxuICAgICAgICA0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMzLFxuICAgICAgICA3OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY2LFxuICAgICAgICAxLFxuICAgICAgICA4MixcbiAgICAgICAgMjM3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMzksXG4gICAgICAgIDI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDk1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDcwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJZYUR4T2FRR3hpNjhRQVkzTzdlME54QkpIY3I0bDZuREZBMWpkTTluaWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZXR2pHSHNuVE5lWWJkLVIySWlZZ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjhiYzMyODMtYzhlOC00MDQ3LTlhMTAtNjE1MjE0ODY3MTBkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMjUyLFxuICAgICAgNjMsXG4gICAgICA0NCxcbiAgICAgIDM2LFxuICAgICAgMjEsXG4gICAgICAxMDMsXG4gICAgICAxOTgsXG4gICAgICAxMyxcbiAgICAgIDI5LFxuICAgICAgMTAxLFxuICAgICAgMjgsXG4gICAgICAxMDcsXG4gICAgICAwLFxuICAgICAgNzIsXG4gICAgICAxNjQsXG4gICAgICA5NyxcbiAgICAgIDczLFxuICAgICAgMjA4LFxuICAgICAgMTAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMjM4LFxuICAgICAgMTMsXG4gICAgICAzNSxcbiAgICAgIDI0NixcbiAgICAgIDE5OSxcbiAgICAgIDIzOSxcbiAgICAgIDExNCxcbiAgICAgIDE0NCxcbiAgICAgIDI0MyxcbiAgICAgIDE1NSxcbiAgICAgIDI2LFxuICAgICAgNTIsXG4gICAgICAyMjQsXG4gICAgICA1NyxcbiAgICAgIDI3LFxuICAgICAgODYsXG4gICAgICA0OSxcbiAgICAgIDE1LFxuICAgICAgMTExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZDQzc4NlZCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MTc3NTgwMDY6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQwMjY5Nzg5OTY2MzU4OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTC9wMWJrREVNaUl0ck1HR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxcGRwMlB6Q043ajFaM0EzNG80NXlHazBYcE5DTTVRdFhHTkR2NFhoMG1RPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndsdkpwRzlBYVpvK3plOUNvR0RZdjJoUDVXMEFac01scHdFTVVXYU9pc0dsdVlQb2JTS1dHN1NOaFR6NWg5ZUpReStNbmJwKzlOTFVhdTV2VzZhTURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZzQmEwWldTd0Qyendqam81Vk43WXJqUDA0c0lhSFY5dXNnaW5mSEFib2V3aWVqQkZVMGVGcGt1b2E3SCtGaXZWcmJ0UjJxYkJwd1piQXpXRW80MkRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxNzc1ODAwNjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODQ1MzMyNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
