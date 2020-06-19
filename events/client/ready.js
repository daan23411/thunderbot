const {prefix}= require('../../config.json')
module.exports=bot=>{
    bot.user.setActivity(`${prefix}help | ${message.guild.name}`)
    console.log(`Hoi! ${bot.user.username} is beschikbaar voor commands!`)
}