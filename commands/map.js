const { MessageEmbed } = require("discord.js");
const { searchMaterial } = require("../data/material.js");
module.exports = {
    name: "map",
    cmd: "맵",
    find: (text) => text.startsWith("맵"),
    description: "원신 인게임 맵 링크를 주는 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL'],
    execute: (message, args) => {
        const embed = new MessageEmbed();
        args = args.replace("맵", "");
        if(args.length == 0) {
            embed.setTitle("공식 맵 바로가기");
            embed.setColor("#ffffff");
            embed.setURL("https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=");
            message.reply({
                embeds: [embed]
            });
        }else {
            var material = searchMaterial(args);
            if(material && material["location"]) {
                embed.setTitle(material["name"] + " 위치 공식맵");
                embed.setColor("#ffffff");
                embed.setURL(material["location"]);
            }else {
                embed.setColor("#ffffff");
                embed.setDescription(args + "의 위치는 등록되어 있지 않습니다.");
            }
            message.reply({
                embeds: [embed]
            });
        }
    },
    slashs: (interaction, args) => {
        const embed = new MessageEmbed();
        if(args.length == 0) {
            embed.setTitle("공식 맵 바로가기");
            embed.setColor("#ffffff");
            embed.setURL("https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=");
            interaction.reply({
                embeds: [embed]
            });
        }else {
            var search = args[0].value;
            console.log(search);
            var material = searchMaterial(search);
            if(material && material["location"]) {
                embed.setTitle(material["name"] + " 위치 공식맵");
                embed.setColor("#ffffff");
                embed.setURL(material["location"]);
            }else {
                embed.setDescription(search + "의 위치는 등록되어 있지 않습니다.");
            }
            interaction.reply({
                embeds: [embed]
            });
        }
    }
}