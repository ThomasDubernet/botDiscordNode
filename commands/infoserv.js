const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    console.log(message.guild.members.get('434183296339935235').user.username);
    let servIcon = message.guild.iconURL;
    let servEmbed = new Discord.RichEmbed()
        .setDescription('Informations sur le serveur')
        .setColor('#dc143c')
        .setThumbnail(servIcon)
        .addField('Nom du serveur', message.guild.name)
        .addField('Nombre total de membres', message.guild.memberCount)
        .addField('Crée le', message.guild.createdAt)
        .addField('Vous avez rejoind le', message.member.joinedAt);

        return message.channel.send(servEmbed);
}

module.exports.help = {
    name: "infoserv"
}