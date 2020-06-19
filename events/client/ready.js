const {prefix}= require('../../config.json')
module.exports=bot=>{
    bot.user.setActivity(`${prefix}help | Amsterdam Zuid`)
    console.log(`Hoi! ${bot.user.username} is beschikbaar voor commands!`)
}