const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let messageTimeIcon = message.guild.iconURL;
    let messageTimeEmbed = new Discord.RichEmbed()
        .setTitle(`Bonjour je suis le bot **Techdev**`)
        .setColor('#dc143c')
        .setThumbnail(messageTimeIcon)
        .addField('Nom du serveur', message.guild.name)
        .addField('Nombre total de membres', message.guild.memberCount);

        return message.channel.send(messageTimeEmbed);
};

module.exports.help = {
    name: "messagetime"
};

