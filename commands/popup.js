const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les permissions pour faire cela");

    let messageToBot = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor('#dc143c')
        .setTitle("***IMPORTANT***")
        .setDescription(args.join(" "))
        .setFooter("@Administrateur");
    // let messageToBot =args.join(" ");
    message.delete().catch();
    message.channel.send(messageToBot);

};

module.exports.help = {
    name: 'popup'
}