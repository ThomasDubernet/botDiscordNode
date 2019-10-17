const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let devRole = message.guild.roles.get('633496916306559030');
    let geekRole = message.guild.roles.get('634117233529847831');
    let gamerRole = message.guild.roles.get('634184814966341633');

    const filter = (reaction, user) => ["🕹", "💻", "🎮"].includes(reaction.emoji.name) && user.id === message.author.id;

    const embedRole = new Discord.RichEmbed()
        .setColor(3447003)
        .setTitle("Choix du rôle")
        .setDescription(`Pour choisir un **rôle**, veuillez cliquez sur l'emoji correspondant pour avoir accès aux différents salons :
        Programmation: 🕹
        Hardware: 💻 
        Jeux vidéos: :video_game:       
        `)
        .setFooter(` -- ${bot.user.username}--`);

    message.channel.send(embedRole).then( async msg => {
        await msg.react("🕹");
        await msg.react("💻");
        await msg.react("🎮");
        

        msg.awaitReactions(filter, {
            max: 1,
            time: 20000,
            errors: ["time"]
        }).then(collected => {

            const reaction = collected.first();

            if (reaction.emoji.name) {
                if (reaction.emoji.name = "🕹"){
                    message.member.addRole(devRole).catch(err => {
                        return message.channel.send(`Erreur sur l'ajout du role: ${err.message}`);
                    });
                    message.channel.send(`Vous avez obtenu le role de ${devRole.name}`).then(m => m.delete(3000));
                    msg.delete(15000);
                    return;
                }
                if (reaction.emoji.name = "💻"){
                    message.member.addRole(geekRole).catch(err => {
                        return message.channel.send(`Erreur sur l'ajout du role: ${err.message}`);
                    });
                    message.channel.send(`Vous avez obtenu le role de ${geekRole.name}`).then(m => m.delete(3000));
                    msg.delete(15000);
                    return;
                }
                    if (reaction.emoji.name = "🎮"){
                        message.member.addRole(gamerRole).catch(err => {
                            return message.channel.send(`Erreur sur l'ajout du role: ${err.message}`);
                        });
                        message.channel.send(`Vous avez obtenu le role de ${gamerRole.name}`).then(m => m.delete(3000));
                        msg.delete(15000);
                        return;
                    }
            }
        }).catch(collected => {
            return message.channel.send("Je ne peux pas vous donner ce rôle");
        });
    
    });    

};

module.exports.help = {
    name: "role"
};