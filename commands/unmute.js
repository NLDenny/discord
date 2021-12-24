const discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You are not allowed to run this command");

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        let role = message.guild.roles.cache.find(x => x.name === "Muted");

        let roles = message.guild.roles.cache.find(x => x.name === "Member");

        if(user.roles.cache.has(role)) return message.channel.send("This member isn't muted");

        user.roles.remove(role);
        user.roles.add(roles);

        message.delete()
        message.channel.send(`Player has been unmuted!`).then(msg => msg.delete({ timeout: 3000 }));
}

module.exports.help = {
    name: "unmute",
    description: "Unmute a member from your server"
}