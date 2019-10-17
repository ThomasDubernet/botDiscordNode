const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    const emojiList = message.guild.emojis.map((e, x) => (x + ' = ' + e) + ' | ' +e.name).join('\n');
    return message.channel.send(emojiList);

};

module.exports.help = {
    name: 'emojilist'
}