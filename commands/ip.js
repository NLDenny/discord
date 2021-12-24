const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    return message.channel.send("`connect play.xlrp.nl`")

}

module.exports.help = {
    name: "ip"
}