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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_02_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDc0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAzLFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTksXG4gICAgICAgIDc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NixcbiAgICAgICAgMTkzLFxuICAgICAgICAzMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDExNixcbiAgICAgICAgNDMsXG4gICAgICAgIDc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NyxcbiAgICAgICAgOTksXG4gICAgICAgIDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICA4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgNjQsXG4gICAgICAgIDczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhqUEJsZFJpQm5WZ3d6TkxjZ3NhenZSSE9vWWhLdWtvOGx4SWhkanVtSEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzE3NzU4MDA2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBRUYxQkU3MTc3NURDRkVDNkY2QTdFQzIzQzc4NzU1Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg1MTc3MzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MTc3NTgwMDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFBN0U0QUYyNkQ3Nzg5MDNBRkU2QzJDMDcxN0Y1NkFGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODUxNzczOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJraGxheTl1SVNwS3ZHZ0huUDhUbURnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM1ZTEyNjIwLTIzYTItNGJhMC05ZjRjLTNjZGYyZTYzZjg2MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICAyMTMsXG4gICAgICA0NyxcbiAgICAgIDIsXG4gICAgICAzMixcbiAgICAgIDE4MCxcbiAgICAgIDE0NixcbiAgICAgIDM3LFxuICAgICAgMTAyLFxuICAgICAgMjYsXG4gICAgICA2NixcbiAgICAgIDgxLFxuICAgICAgMTc5LFxuICAgICAgNTAsXG4gICAgICA1MixcbiAgICAgIDE5MixcbiAgICAgIDE1NixcbiAgICAgIDc1LFxuICAgICAgOTEsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgMyxcbiAgICAgIDc1LFxuICAgICAgNzcsXG4gICAgICA0MyxcbiAgICAgIDQ2LFxuICAgICAgMTc3LFxuICAgICAgOTQsXG4gICAgICAyNTQsXG4gICAgICAxMTIsXG4gICAgICA0NCxcbiAgICAgIDE2MyxcbiAgICAgIDg4LFxuICAgICAgODEsXG4gICAgICAxMzgsXG4gICAgICAyMjYsXG4gICAgICAxMTUsXG4gICAgICA3LFxuICAgICAgMTQyLFxuICAgICAgMTQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkw5VlJSQ1IyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MTc3NTgwMDY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MDI2OTc4OTk2NjM1ODoxM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJ+8J2UivCdlK/wnZSs8J2Ut/CdlLfwnZSr8J2UtiDwnZST8J2UnvCdlLfwnZS3fuKck1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wvcDFia0RFTmovdWJNR0dBNGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMXBkcDJQekNON2oxWjNBMzRvNDV5R2swWHBOQ001UXRYR05EdjRYaDBtUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyek11RFpwdDdadzBBYTZCMzNHSWdoQXlvdktEdGpyWERkMTJjVjRjNDdqWktnQWNJUnRXVmQ4bkZTUmRwQW9xNjJENzlBZC9rdWs3M3YwWFloMlJCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHQ0RwaGlua014QmlQall4Mk0yRnpXSnJoYnRESUduM3dQU2ZuTUNDSzNwdWt1Nk9OaENaZXBrcm1vbFRaRlBFWDJnaTk0QUFqQVE5MGh0QWs3cjVEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTc3NTgwMDY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NTE3NzMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzZHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPNkcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnZ2NkOCtDN0tvcEJGK2pONGJ6V2lNaEpaMHRXTGpOMnUyWkNFOW01WVRvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkyNjI1MDE3NSxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw1LDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
