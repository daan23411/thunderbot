const {MessageEmbed} = require('discord.js')
const ms = require('ms')
module.exports={
    name: 'giveaway',
    description: 'Maak een giveaway!',
    usage: '<time> <prize>',
    category: 'fun',
    run: async(bot,message,args)=>{
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Je hebt geen permissie om dit te doen")
        let timev = message.content.slice(bot.prefix.length+9)
        if(!timev) return message.reply('Geen tijd opgegeven in MS.')
        let time = parseInt(timev,10)
        if(time<= 15000){
            return message.reply('Je tijd is minder dan 15s. Maak de tijd groter')
        }
        let prize = message.content.split(`${time}`).join("").split(`${bot.prefix}giveaway `).join("")
        if(!prize) return message.reply("Geen prijs opgegeven.")
        const Embed = new MessageEmbed()
        .setTitle('Nieuwe Giveaway')
        .setDescription(prize)
        .setColor('RANDOM')
        .setFooter(`Deze giveaway duurt ${ms(time)}!`)
        let msg = await message.channel.send(Embed)
        await msg.react('🎉')
        setTimeout(() => {
           let winner = msg.reactions.cache.get("🎉").users.cache.random().id
           message.channel.send(`De winnaar is <@${winner}> \nBedankt voor het meedoen @everyone!`)
        }, time);
    }
}