const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = async (client, message, args) => {
   const { body } = await superagent
  .get(`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`)

  const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Here's Your Shi")
    .setImage(body[0]) 
    .setFooter(`GoD Mod Bot by Life`);
    message.channel.send({embed});

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'shi',
    description: 'Sends a random shibe',
    usage: 'shi'
  };