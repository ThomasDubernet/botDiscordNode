const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {
    let { body } = await superagent.get(`http://random.dog/woof.json`);
    let dogEmbed = new Discord.RichEmbed()
        .setColor('#dc143c')
        .setTitle('Chat')
        .setImage(body.url);

    message.channel.send(dogEmbed);
};

module.exports.help = {
    name: "dog"
}
