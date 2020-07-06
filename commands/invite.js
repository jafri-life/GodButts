const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
message.channel.send("Here's a invite link to invite the bot to your server, see you there!")
    const embed = new Discord.RichEmbed()
    .setColor(0x00A2E8)
    .setDescription(`https://top.gg/bot/701779940835590194`);
    message.channel.send({embed})
}

    module.exports.help = {
        name: "invite"
    }