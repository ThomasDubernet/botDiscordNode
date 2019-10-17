const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
        .setDescription('Informations sur les commandes')
        .setColor('#dc143c')
        .setThumbnail(botIcon)
        .addField('Nom du bot', bot.user.username)
        .addField('Crée le', bot.user.createdAt)
        .addField(`Commandes d'informations`, '----------------')
        .addField('!infocommand', 'Renvoie les informations des commandes')
        .addField('!infoserv', 'Renvoie les informations du serveur')
        .addField(`Commandes d'administration`, '----------------')
        .addField('!report', 'Reporter un utilisateur avec une raison')
        .addField('!kick', 'Kick un utilisateur avec une raison')
        .addField('!ban', 'Ban un utilisateur avec une raison')
        .addField('!mute', 'Mute un utilisateur avec un timer')
        .addField('!addrole', 'Ajouter un rôle à un utilisateur')
        .addField('!removerole', 'Supprimer le rôle à un utilisateur')
        .addField('!cat', 'Montre une image chat aléatoirement')
        .addField('!dog', 'Montre une image chien aléatoirement')
        .addField('!clear', 'Supprime un nombre de message')
        .setFooter(`${bot.user.username} : *Développé par : __${message.guild.members.members.get('434183296339935235').user.username}__*`);

    return message.channel.send(embed); 
};

module.exports.help = {
    name: "infocommand"
}