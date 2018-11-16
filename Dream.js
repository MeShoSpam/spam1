const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("509367668944404480")
setInterval(function() {
channel.send(`google`);
}, 25)
})
 
 
client.login('NTA4MDAyMTYzNDU3MzkyNjYw.DsIj7A.7aUX5ZI2BRz30RdoV7yG2A00yc4');