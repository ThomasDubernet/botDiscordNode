const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let memberRole = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!memberRole) {
        return message.channel.send("L'utilisateur n'existe pas !");
    }
    let roleToAdd = args.join(' ').slice(22);
    if (!roleToAdd) return message.channel.send('Spécifier un rôle');
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Vous n'avez pas les permissions pour faire cela")
    }
    if(memberRole.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Vous ne pouvez pas mute cette personne !")
    }

    let role = message.guild.roles.find(`name`, roleToAdd);
    if(!role) return message.channel.send('Rôle introuvable !');

    if(memberRole.roles.has(role.id)) message.channel.send("L'utilisateur possède déjà ce rôle !");
    await memberRole.addRole(role.id);
    try {
        await memberRole.send(`Bravo tu as reçu le rôle de ${role.name} avec succès !`);
    } catch (e) {
        message.channel.send(`Bravo tu as reçu le rôle de ${role.name}`);
    }
};

module.exports.help = {
    name: 'addrole'
};