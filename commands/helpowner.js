
const { RichEmbed } = require("discord.js");
module.exports.run = async (client, message, args, prefix) => {
let reply = new RichEmbed()
.setDescription("LoL no u cant")
.setColor("RANDOM")

if (message.author.id !=='659634151657570314') return message.channel.send(reply);  
let helpEmbed = new RichEmbed()
  .setTitle("GoD Owner Help Commands")
  .setColor("RANDOM")
  .setImage("https://cdn.glitch.com/e75c91df-b014-4b82-80a3-b0160141df41%2Fezgif-1-a2a2e7173d80.gif?v=1584859307882")  
  .addField("⚒ Owner Commands"," `god`, `shutdown`, `setgame`, `leave`",true)

   .setFooter(`${message.author.tag}`);
  message.channel.send(helpEmbed);
};

module.exports.help = {
  name: "helpowner"
};
