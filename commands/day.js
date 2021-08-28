const { filterMaterial } = require("../data/material.js");
const { createNormalEmbed } = require("../data/utility.js");
module.exports = {
    name: "day",
    cmd: "[요일]",
    find: (text) => {
        var days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        return days.indexOf(text) >= 0;
    },
    description: "원신 픽업 관련 정보 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL', 'ATTACH_FILES'],
    execute: (message, args) => {
        var lists = Array.from(new Set(filterMaterial(undefined, undefined, args).map(x => x["union"])));
        var embed = createNormalEmbed(args + "의 드랍 재료", lists.map(x => "`" + x + "`").join("\n"));
        message.reply({
            embeds: [embed]
        })
    },
    slashs: async (interaction, args) => {
        var week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        var date = new Date();
        const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
        var today = new Date(utc + 9 * 60 * 60 * 1000).getDay();
        var tString = week[today];
        var day = args.length == 1 ? args[0].value: tString;
        var lists = Array.from(new Set(filterMaterial(undefined, undefined, day).map(x => x["union"])));
        var embed = createNormalEmbed(tString + "의 드랍 재료", lists.map(x => "`" + x + "`").join("\n"));
        interaction.reply({
            embeds: [embed]
        })
    }
}