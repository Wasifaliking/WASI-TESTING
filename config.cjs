// config.js
/**
credits sid for plugins 
**/

const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEhicTVRNFFpRjRKVEpLSEcrRS9YaEl4djVNaWc5M1Y1a25rUWEzaUJFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1NJNVVzR0hmMzYvd3QrbUpadGJIRWZzQjZTTHFXQmdtRGxadFZxdnhHcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQkltSVdQZktGUk51ckNxd2NBalhyRnpQdzBaRmt0bmM0NnQ4R3I0ejBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrOVpTdG5OWS9XSnpGR3dYejh2V28xWmpvYlNwcFNRZjl2bzhOYm4rdkJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNGS2N3Z3JNTUlEUEpVM3FIZit6Sm1yRnhMcUZVai92RlMwbDNQU09sSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJpbWl4bmRMQW5HYXZZQkI2Qmx5NnlZblVIWTVhQ3RUNWorQmRmczV1WFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1BGTDhhV0tvQ2doWkcyRTJuSVRSMDUybmhKdUliOG5vMzJrYmJ1ejBVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWwyTFhzTFJnRmFuallQVWZKekFBQW5lUDVyNnpwTzdrMUNnY2UxWnNnRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwyeTc5c09tY0pJNTBlWXdEUVFqNFhwLyt1TURVUjZSZVZjclpjSDl3OG1PcnB0QzRxemF5QUFHdzRHQVcxK2VTaEhrNkVhZHZvbkNFNjQ0MU0xRmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6IjBPcW9uaE92QlFiLzE3U080Mit0WUtQcWJCSTlJdVBxQUYvaTR2RVdrMVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDM5MTA3OTU4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVEQkUwNjc4RjMzQzlENjA3MTJDOTZDQzExRTVBNTIxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg1ODQxNDR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImZ6Ykd4Q3REU0FDenMyWGVFRXBobkEiLCJwaG9uZUlkIjoiNGQ2MWJkYWItZDFmOC00YzU0LWJjY2QtMDM1ZTZjYTJhZmFhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikg1U3Z0bDV0Qm5wZXQ5T2NQbFBndXFLRysyMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6a2daaEJoSUJ1RkpvMnZzMDZNajdrQi9LSFU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSDhBU0pUTVciLCJtZSI6eyJpZCI6IjkyMzAzOTEwNzk1ODozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKM2t5YllIRUwrem9MZ0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjS1BoenllZXg0V0RkWDFkWkptbUhhYnQrSEVpckVMNncvL2I5enhmbEhvPSIsImFjY291bnRTaWduYXR1cmUiOiJMeEJ6NktLaDRPNktTZ21JcDg1Wk5ydFRVNkd5VHBxSnFBdDdYRkpWQ1ZKTHN1dWtIWjJkd0ZmNHR5aVNxNDRyT1pXUGZZYkNidzlDVzVwdi9Pb1ZCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicFQ2RDc0RVRyWVMrNzhLMENKN3cwdXpTOHNSY3dnN0diYTN1UnRLL2JRYjZQREp6R09ydnZLeVp1MWNwWSs3aW5mdDIwWmlNTmt2RFlPVXU1OXp0amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwMzkxMDc5NTg6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYQ2o0YzhubnNlRmczVjlYV1NacGgybTdmaHhJcXhDK3NQLzIvYzhYNVI2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4NTg0MTM5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9RQSJ9",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "MR WASI DEV",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "919142294671",
  GEMINI_KEY: process.env.GEMINI_KEY || "",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
  YTDL_NO_UPDATE: process.env.YTDL_NO_UPDATE !== undefined ? process.env.YTDL_NO_UPDATE === 'true' : true,
};


module.exports = config;
