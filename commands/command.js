const { MessageEmbed } = require("discord.js");
const fs = require("fs");

module.exports = {
    name: "commands",
    cmd: "커맨드",
    find: (text) => text == "커맨드",
    description: "커맨드를 보여주는 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL'],
    execute: (message, args) => {
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        var embed = new MessageEmbed();
        for(var i in commandFiles) {
            var command = require("../commands/" + commandFiles[i]);
            if(!command.cmd && command.name) {
                embed.addField("/" + command.name, command.description, false);
            }else if(command.cmd && !command.name) {
                embed.addField("!" + command.cmd, command.description, false);
            }else {
                embed.addField("/" + command.name + ", !" + command.cmd, command.description, false);

            }
        }
        embed.setColor("#ffffff");
        message.reply({
            embeds: [embed]
        })
    },
    slashs: (interaction, args) => {
        interaction.reply({
            content: "a"
        })
    }
}