const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry you can't do this.");

    var seperator = "|";

    var argsList = args.join(" ").split(seperator);

    if (argsList[2] === undefined) argsList[2] = "unknown";
    if (argsList[3] === undefined) argsList[3] = "💭・lounge";

    var options = {

        titel: argsList[0],
        bericht: argsList[1] || "?",
        kanaal: argsList[3].trim()

    }

    var statusEmbed = new discord.MessageEmbed()
        .setTitle(`Bug report`)
        .setColor("#ff0000")
        .setDescription(`In this channel you can submit a bug. After sending the message, it will be immediately forwarded to the staff team. \n\n Make sure everything is clearly described. If you want to add photos or videos, make sure you do this via a link. For example via https://imgur.com/upload.`)
        .setFooter(`© 2021 Outlaws&Bikers`)

    var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
    if (!channel) return message.reply("Dit kanaal bestaat niet");

    message.delete()
    channel.send(statusEmbed);

}

module.exports.help = {
    name: "indienen",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}