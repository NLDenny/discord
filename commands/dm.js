const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    message.delete()
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("Onvoldoende rechten!").then(msg => msg.delete({ timeout: 3000}))
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.channel.send(`Geen of ongeldige gebruiker opgegeven.`).then(msg => msg.delete({ timeout: 3000}));
    if(!args.slice(1).join(" ")) return message.channel.send("U hebt uw bericht niet gespecificeerd.").then(msg => msg.delete({ timeout: 3000}));
    user.user.send(args.slice(1).join(" ")).catch(() => message.channel.send("Deze gebruiker heeft zijn DM uitgeschakeld.")).then(() => message.channel.send(`Bericht naar ${user.user.tag} verstuurd.`)).then(msg => msg.delete({ timeout: 3000}))
}

module.exports.help = {
    name: "dm"
}