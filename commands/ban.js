const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let bannedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!bannedUser) {
        return message.channel.send("L'utilisateur n'existe pas !");
    }
    let banReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Vous n'avez pas les permissions pour faire cela")
    }
    if(bannedUser.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Vous ne pouvez pas kicker cette personne !")
    }

    let banEmbed = new Discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#dc143c")
        .addField("Utilisateur banni", `${bannedUser} (ID: ${bannedUser.id})`)
        .addField("Utilisateur ayant banni", `${message.author} (ID: ${message.author.id})`)
        .addField("Canal", message.channel)
        .addField("Raison", banReason);

        let banChannel = message.guild.channels.find(`name`, "reports");
        if(!banChannel) {
            return message.channel.send("Canal 'Reports' introuvable. Veuillez créer ce canal")
        }

        message.guild.member(bannedUser).ban(banReason);
        banChannel.send(banEmbed);
}

module.exports.help = {
    name: "ban"
}