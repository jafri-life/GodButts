const snekfetch = require('snekfetch')
const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "tits",
        aliases: ['boobies', 'boobs'],
        usage: "^tits",
        category: "NSFW",
        description: "NSFW pictures from the r/porn subreddit.",
        accessableby: "Users 18+"
    },

    run: async (bot, message, args) => {
      const { body } = await snekfetch
            .get('https://www.reddit.com/r/meme.json?sort=hot&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('Error: Try again later');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        let embed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .setFooter("r/meme")
        .setTimestamp()

        message.channel.send(embed)
    }    
}

module.exports.help = {
  name: "meme"
}

  
  