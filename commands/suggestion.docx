const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry you can't do this.");

    var seperator = "|";

    var argsList = args.join(" ").split(seperator);

    if (argsList[2] === undefined) argsList[2] = "unknown";
    if (argsList[3] === undefined) argsList[3] = "suggestions";

    var options = {

        titel: argsList[0],
        bericht: argsList[1] || "?",
        kanaal: argsList[3].trim()

    }

    var statusEmbed = new discord.MessageEmbed()
        .setTitle(`Suggestions`)
        .setColor("#ff0000")
        .setDescription(`In this channel you can submit a suggestion. \n\nRules: \n• Use this channel for suggestions only \n• Make sure your suggestion is as clear as possible \n• Not serious suggestions will be deleted \n\nPeople who can't abide by the above rules can no longer submit suggestions.`)
        .setFooter(`© 2021 Outlaws&Bikers`)

    var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
    if (!channel) return message.reply("Dit kanaal bestaat niet");

    message.delete()
    channel.send(statusEmbed);

}

module.exports.help = {
    name: "kaasplank",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}