module.exports.run = async (bot, message, args) => {
message.channel.send('lmao i have a better Net then u! `' + Math.floor(Math.round(bot.ping)) + '`ms')

message.undelete();

}
  module.exports.help = {
    name: "ping"
  }