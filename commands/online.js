const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry you can't do this.").then(msg => msg.delete({ timeout: 3000}));

    var seperator = "|";

    var argsList = args.join(" ").split(seperator);

    if (argsList[2] === undefined) argsList[2] = "#eeeeee";
    if (argsList[3] === undefined) argsList[3] = "💭・lounge";

    var options = {

        titel: argsList[0],
        bericht: argsList[1] || "Geen inhoud meegegeven",
        kanaal: argsList[3].trim()

    }

    const online = `@here \n Server is back online!`

    var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
    if (!channel) return message.reply("Dit kanaal bestaat niet").then(msg => msg.delete({ timeout: 3000}));

    message.delete()
    channel.send(online).then(msg => msg.delete({ timeout: 450000}));

}

module.exports.help = {
    name: "online",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}