const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // !clear aantal

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Onvoldoende rechten!").then(msg => msg.delete({ timeout: 3000}));

    if (!args[0]) return message.reply("Geef een getal op (Maximaal 99 berichten tegelijkertijd)").then(msg => msg.delete({ timeout: 3000}));

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] <= 0) {
                message.reply("Hoe moet ik 0 berichten verwijderen?").then(msg => msg.delete({ timeout: 3000 }));
            } else if (args[0] == 1) {
                message.reply("Ik heb één bericht verwijderd.").then(msg => msg.delete({ timeout: 3000 }));            
            } else {
                message.reply(`Ik heb ${args[0]} berichten verwijderd.`).then(msg => msg.delete({ timeout: 3000 }));
            }

        })

    } else {
        message.delete()
        return message.reply("Geef een getal op.").then(msg => msg.delete({ timeout: 3000 }));
    }

}

module.exports.help = {
    name: "clear",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}