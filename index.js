const config = require('./config.json');
const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if(err) console.log(err);

    let jsFile = files.filter(f => f.split('.').pop() === 'js');
    if(jsFile.length <=0) {
        console.log("Je ne trouve pas la commande");
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        bot.commands.set(props.help.name, props);
    });
});



bot.on('ready', async () => {
    console.log(`${bot.user.username} est en ligne !`);
    bot.user.setActivity('with alex !');
});
bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        };
    }

    let prefix = prefixes[message.guild.id].prefixes;

    let messageArray = message.content.split(" ");
    let command =messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(command.slice(prefix.length));
    if(commandFile) commandFile.run(bot, message, args);
});
bot.on('guildMemberAdd', member => {
    //message bienvenue 
    let memberRole = member.guild.roles.get('634160123538964531');
    
    const filter = (reaction, user) => ["✅"].includes(reaction.emoji.name) && user.id !== bot.user.id;

    const embedMemberRole = new Discord.RichEmbed()
        .setColor(3447003)
        .setTitle("Bienvenue")
        .setDescription(`Pour accéder au serveur et vérifier que n'êtes pas un **BOT**
         veuillez cliquer sur l'émoji ✅`)
        .setFooter(` -- ${bot.user.username}--`);

    member.guild.channels.get('633442105317916685').send(embedMemberRole).then( msg => {
        msg.react("✅");
        msg.awaitReactions(filter, {
            max:1,
            time: 15000,
            errors: ["time"]
        }).then(collected => {
            const reaction = collected.first();

            if(reaction.emoji.name = "✅") {
                member.addRole(memberRole).catch(err => console.log(err.message));
            }
        });
    });

});

bot.login(config.token);