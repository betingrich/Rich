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
global.caption = process.env.CAPTION || global.caption || "King Marisel " 


global.devs = "254740007567" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "354740007567";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_03_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDksXG4gICAgICAgIDM5LFxuICAgICAgICA4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1LFxuICAgICAgICAxMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5LFxuICAgICAgICA1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2LFxuICAgICAgICA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDUwLFxuICAgICAgICAyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI4LFxuICAgICAgICAxMixcbiAgICAgICAgNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMixcbiAgICAgICAgMjQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU1LFxuICAgICAgICA5MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMixcbiAgICAgICAgNTksXG4gICAgICAgIDQsXG4gICAgICAgIDg1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiLzRSL2NmS0gyY2NBZk0vcTV4WVk5ZUd0bWowQ1Y3Z09hT1hQdUxwbFdndz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaXBDWS0tOHJTeEN4a182aTJ0SG1hZ1wiLFxuICBcInBob25lSWRcIjogXCJhZjMwZDU2My00MWI0LTRmOTYtYTg1ZS04NTFhNjU5MDA3NmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAxNjMsXG4gICAgICAxOTIsXG4gICAgICAyNTQsXG4gICAgICAyMyxcbiAgICAgIDI1MyxcbiAgICAgIDIyMyxcbiAgICAgIDI0MixcbiAgICAgIDc2LFxuICAgICAgMTkyLFxuICAgICAgMjE0LFxuICAgICAgNzQsXG4gICAgICA0MSxcbiAgICAgIDQ5LFxuICAgICAgMjM4LFxuICAgICAgMTkwLFxuICAgICAgMTYzLFxuICAgICAgMjQ0LFxuICAgICAgMjIsXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAyMzgsXG4gICAgICAyNDMsXG4gICAgICAyMjAsXG4gICAgICAyNDQsXG4gICAgICAxOTYsXG4gICAgICA1MyxcbiAgICAgIDE5NSxcbiAgICAgIDE3MixcbiAgICAgIDcxLFxuICAgICAgMTE0LFxuICAgICAgNzUsXG4gICAgICAxNzAsXG4gICAgICAyNDMsXG4gICAgICAxOTAsXG4gICAgICAyMzUsXG4gICAgICA0MSxcbiAgICAgIDEwMixcbiAgICAgIDI0MixcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCMVpUOFdOS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQwMDA3NTY3OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzY3MTE4NTc5OTU3ODc6NTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUdCenJNR0VQK3J1TFFHR0NFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGZ3ROQjhxTFJOMGg1VWdEVVU3UlY4am9KTFJKaWJldmpCa3M2RTNlN0J3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBHRVVRUm1kc3ZabmVWL3hlTUlDVFBmdVREa2FtVWoyYlZic05laStnT05LQktqUUp3THRnRTRESTJpVUo5ZlB4UjU3RDAxdE41cWVMYkN6bURZV0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVhZ2ZNRnFqVzZIZXV2ckN6K3d6QXAwc1NGZnYwRlB6cWVJa054M1F3bU04UTIxVmVtWllWcE9XWUhPREdkK1Y5MTU3ZGZVWFNaUElOdlYvSzZvc2hnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0MDAwNzU2Nzo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTg3Nzc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkZKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGRkouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUTXN4OVNNdjlMdStjZEIrOE9HeFRKcVpIWDF1M0dKMzBQUVlrZGlEeVNFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MTg4NDU2MzMsXCJjdXJyZW50SW5kZXhcIjoxNSxcImRldmljZUluZGV4ZXNcIjpbMCw1LDEzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 King Marisel 』```", //*『King Marisel』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "King Marisel",
  ownername:process.env.OWNER_NAME|| "Marisel",


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
