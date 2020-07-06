const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const fs = require('fs')
const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const client = new Discord.Client();
bot.commands = new Discord.Collection();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcwMTc3OTk0MDgzNTU5MDE5NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTkwNDkzNTE2fQ.iYTC1UyfPRizpH7oeBrjKMKnKYaHhhw6-jst4pXujKc', client);

fs.readdir('./commands/', (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  
  if(jsfile.length <= 0){
    console.log("Couldn't find commands")
    return;
  }
  
  setTimeout(function(){ 
    console.log("Beginning startup"); 
  }, 0);
  
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`)
    console.log(`${f} loaded`);
    bot.commands.set(props.help.name, props);
  });

    setTimeout(function(){ 
      console.log("I should be up and running!"); 
    }, 1000)
});

bot.on("message", async message => {
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(command.slice(prefix.length));
  if (!message.content.startsWith(prefix)) return;
  if(commandfile) commandfile.run(bot,message,args);
  var author = message.author;
})
 
bot.login(process.env.TOKEN)

 bot.on('ready', () => {
  console.log(`Bots is ready and working in ${bot.guilds.size} servers with ${bot.users.size} users!`);
  bot.user.setActivity(`with Gods | ${bot.guilds.size} servers`, { type: 'PLAYING' });
  dbl.postStats(bot.guilds.size); 
});


  

  