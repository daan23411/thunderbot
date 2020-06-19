const {prefix}= require('../../config.json')
const { MessageEmbed } = require('discord.js')
module.exports=bot=>{
    bot.user.setActivity(`${prefix}help | ${message.guild.name}`)
    console.log(`Hoi! ${bot.user.username} is beschikbaar voor commands!`)
}