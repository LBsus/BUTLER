const Discord = require ("discord.js")

require("dotenv").config()


const client = new Discord.Client({

 intents: [
     "GUILDS",
     "GUILD_MESSAGES"

]
})
 
client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
 })
client.on("messageCreate", (message) => {

    if (message.content == "understand ?"){
     message.reply("yes")}
     })
client.login(process.env.TOKEN)