const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let mentionnedUser = message.guild.member(message.mentions.users.first());
    if (!mentionnedUser) {
        return message.channel.send("L'utilisateur n'existe pas");
    }

    let homeChannel = message.guild.channels.get("633442105317916687");
    if(homeChannel) {
        mentionnedUser = member;
        movedUser = member.voice;
        movedUser.setVoiceChannel(homeChannel);
    }

    // message.member.setVoiceChannel('633442105317916687')
    //         .then( connection => {
    //             console.log("Success");
    //         });

};

module.exports.help = {
    name: 'move'
};