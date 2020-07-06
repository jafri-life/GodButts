const { RichEmbed } = require("discord.js");
module.exports.run = async (client, message, args, prefix) => {
  let helpEmbed = new RichEmbed()
    .setTitle("GoD Help Commands")
    .setColor("RANDOM")
    .setImage("https://cdn.glitch.com/e75c91df-b014-4b82-80a3-b0160141df41%2Fezgif-1-a2a2e7173d80.gif?v=1584859307882")
    .addField("⚒ Moderation Commands","`addrole`, `answer`, `ban`, `unban`, `kick`, `mute`, `unmute`,  `say`, `warn`, `softban`, `lockdown`, `unlockdown`, `votekick`",true)
    .addField("⚙ Utility Commands","`profi`, `botinfo`,  `ping`, `serverinfo`, `userinfo`, `icon`, `unicode`, `uptime`, `truth`, `wallpaper`, `ide`, `report`",true)
    .addField("😂 Fun Commands", "`meg`, `rate`, `meme`,`question`, `copypaste`, `spank`,`amiajoke`, `vote`, `timer`, `advice`, `cat`, `help`, `cuddle`, `feed`, `Hammer`, `shi`, `smug`,", true)
    .addField("🔞 NSFW Commands","`porn`, `asian`, `desi`, `cum`, `fb`",true)
   .setFooter(`${message.author.tag}`);
  message.channel.send(helpEmbed);
}

module.exports.help = {
  name: "help"
};
