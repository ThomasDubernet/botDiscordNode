const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les permissions pour faire cela");
    let messageEmoji =args[0];
    console.log(messageEmoji);
    const  enteredEmoji  =  message.clint.emojis.find( emoji  =>  emoji.name  ===  `${messageEmoji}` );
    message.delete().catch();
    if(!enteredEmoji) return message.channel.send(`L'émoji entré n'existe pas !`);
    if(enteredEmoji) return 
    message.channel.send({embed: {
        color: 3447003,
        title: `Commande permettant de récupérer l'ID d'un émoji`,
        fields: [{
            name: `Identifiant de ${messageEmoji}:`,
            value: `\\${enteredEmoji}`
        }]
    }});

};

module.exports.help = {
    name: 'emoji'
}