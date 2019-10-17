const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!args[1]) return message.reply("Entrez une question !");

    let replies = ["Oui", "Non", "Peut-être"];
    let question = args.slice(0).join(" ");
    let res = Math.floor((Math.random() * replies.length));

    let askEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#dc143c")
        .addField("Question", question)
        .addField("Réponse", replies[res]);

    message.channel.send(askEmbed);
    
};

module.exports.help = {
    name: 'ask'
};