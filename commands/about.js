const Discord = require('discord.js');

exports.run = (client, msg, args) => {
  msg.delete();
  const embed = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .addField('About The Bot', `GoD is a bot created by {Life}, made for any discord server that needs moderatingAnd fun.`)
 
 msg.channel.send({embed});
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
 
module.exports.help = {
  name: "about"
}