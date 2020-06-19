const {prefix}= require('../../config.json')
const { MessageEmbed } = require('discord.js')
module.exports=bot=>{
    bot.user.setActivity(`${prefix}help | ThunderNetwork`)
    console.log(`Hoi! ${bot.user.username} is beschikbaar voor commands!`)
}