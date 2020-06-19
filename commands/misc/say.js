const {MessageEmbed} = require('discord.js')
module.exports={
    name: "say",
    category: "misc",
    description: "Laat de bot zeggen wat je ook wilt",
    usage: "<msg>",
    run: async(bot,message,args)=>{
        let MSG = message.content.split(`${bot.prefix}say `).join(" ")
        if(!MSG)return message.reply('Je hebt geen bericht opgegeven')
        const Embed = new MessageEmbed()
        .setTitle('Nieuw Bericht')
        .setDescription(MSG)
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`• ${message.author.username} is de schrijver/schrijfster van dit bericht`, message.author.displayAvatarURL())
        message.channel.send(Embed)
        MSG.delete()
    }
}