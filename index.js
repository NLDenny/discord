const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const channelId = '894008509878902794'
const targetChannelId = '894004070594011176' 

const fs = require("fs");

const client = new discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f,i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);

    })
});

client.login(process.env.token);

client.on('guildMemberAdd', async guildMember => {
    var i = "894003439145738303";   
    let role = guildMember.guild.roles.cache.find(r => r.id === i);
    guildMember.roles.add(role);
});


client.on('guildMemberAdd', (member) => {
    console.log(member)

    const message = `Welcome <@${member.id}> to Outlaws&Bikers! Please read ${member.guild.channels.cache.get(targetChannelId).toString()} and we hope you have a great time.`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
});

client.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return; 

    var prefix = botConfig.prefix; 

    var messageArray = message.content.split(" "); 

    let cmd = messageArray[0];

    var command = messageArray[0]; 

    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client, message, arguments);

//    if(cmd === `${prefix}reactions`){
//        message.delete()
//        let embed = new discord.MessageEmbed()
//        .setTitle('Reaction Roles')
//        .setDescription('React to gain the role!')
//        .setColor('GREEN')
//        let msgEmbed = await message.channel.send(embed)
//        msgEmbed.react('💯')
//        msgEmbed.react('😁')
//    }
});

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch(); 
    if (reaction.partial) await reaction.fetch();
    
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "894008358212878356") {
        if (reaction.emoji.name === '💯'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("895775339630952549")
        }        
    }
    if (reaction.message.channel.id === "894008358212878356") {
        if (reaction.emoji.name === '😁'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("895775339630952549")
        }        
    }
})

client.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch(); 
    if (reaction.partial) await reaction.fetch();
    
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "894008358212878356") {
        if (reaction.emoji.name === '💯'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("895775339630952549")
        }        
    }
    if (reaction.message.channel.id === "894008358212878356") {
        if (reaction.emoji.name === '😁'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("895775339630952549")
        }        
    }
})

const fivereborn = require('fivereborn-query'); // Defines the npm library we use to get data from our fivem server

function activity(){ // Defines the function
    setTimeout(() => { // Starts a loop
        fivereborn.query(botConfig.SERVER_IP,botConfig.SERVER_PORT, (err, data) => { // Starts a function that allowes us to retrive data from our fivem server
            if (err) { // Checks for errors
                return console.log(err); // If a error is true then this will log that error and then stop it from going by
            } else { // If a error is not true then 
                client.user.setActivity(`${data.clients}/64 players`, { type: "WATCHING" }); // Serts the Status
            }
        });
        activity(); // Runs the function we defined at line 15
    }, 1000); // Waits 1 second
}
activity(); // Runs the function again