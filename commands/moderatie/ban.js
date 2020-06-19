const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "ban",
  description: "ban de gegeven ID van de server.",
  category: "moderatie",
  usage: "<user id> <reason>",
  run: async (bot, message, args) => {
    if (!args[0])
      return message.channel.send(
        `Geef een gebruiker op die je wilt bannen.`
      );
    let User = message.guild.members.cache.get(args[0]);
    if (!User)
      return message.channel.send(
        `Die gebruiker zit niet in de server of bestaat niet. Geef een geldige naam op`
      );
    let Reason = message.content.split(`!ban ${User.id} `);
    if (!args[1])
      return message.channel.send(
        `Geef een reden op`
      );
    if (!Reason)
      return message.channel.send(
        `Geef een reden op`
      );
    if (!User.banable)
      return message.channel.send(
        `Je kan deze gebruiker niet bannen, ze hebben waarschijnlijk een hogere of dezelfde rol als mij.`
      );
    if (!message.member.permissions.has("BAN_MEMBERS"))
      return message.channel.send(
        `Je hebt geen permissie om dit te doen`
      );
    User.ban(Reason);
    const Embed = new MessageEmbed()
      .setTitle(`You have kicked a member!`)
      .setDescription(
        `Je hebt ${bot.users.cache.get(User.id).username} gebanned van deze server!`
      )
      .setColor(`RANDOM`);
    message.channel.send(Embed);
  },
};