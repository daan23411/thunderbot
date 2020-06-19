const {calculator} = require('../../functions');
module.exports={
    name:'rekenmachine',
    category: 'misc',
    aliases: ['reken', 'bereken'],
    description: 'Doet je reken huiswerk voor je.',
    usage: '<num1> <type> <num2>',
    run: async(bot,message,args)=>{
        if(!args[0]) return message.reply('Geen eerste getal opgegeven')
        if(!args[1]) return message.reply('Geen type opgegeven')
        if(!args[2]) return message.reply('Geen tweede getal opgegeven')
        message.channel.send(calculator(args[0],args[1],args[2]))
    }
}