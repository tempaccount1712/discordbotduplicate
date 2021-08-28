const { MessageEmbed } = require("discord.js");
const { filterMaterial } = require("../data/material.js");
const { createNormalEmbed } = require("../data/utility.js");
module.exports = {
    name: "about",
    cmd: "페이몬",
    find: (text) => text == "페이몬",
    description: "페이몬 봇의 관한 정보 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL', 'ATTACH_FILES'],
    execute: async (message, args, client) => {
        const numbers = [
            await client.shard.fetchClientValues('guilds.cache.size'),
            await client.shard.broadcastEval(c => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
        ];
       
        var guilds = numbers[0].reduce((a, b) => a + b, 0);
        var users = numbers[1].reduce((a, b) => a + b, 0);
        var embed = new MessageEmbed();
        embed.setTitle("페이몬 봇 정보");
        embed.setColor("#ffffff");
        embed.setDescription(`이 봇은 원신 (Genshin Impact)의 정보를 제공하는 봇입니다. 
이 봇에는 전반적인 빌드, 자동 출석 체크 및 게임 데이터를 제공하고 있습니다.
커맨드의 리스트를 확인하실려면 /commands나 !커맨드로 확인하여 주시기 바랍니다.

**사용자 통계**
이 봇은 ${guilds}의 서버에서 ${users}의 사용자가 이용하고 있습니다.

**개발 정보**
이 봇은 \`coffee hour#4407\`이 개발하였습니다. 문의하실것이 있으면 DM을 보내거나 서포트 서버를 통해 문의를 넣어주시기 바랍니다. 

**후원 정보**
이 봇은 후원을 통해 서버비를 충당하고 있습니다. 
https://www.patreon.com/coffeehour 를 통해 후원을 해드리면 감사드리겠습니다. 

**면책 사항**
이 봇은 miHoyo와 아무런 관련이 없습니다.
원신과 그 콘텐츠에 대한 모든 권리는 miHoyo가 소유합니다.

자세한 정보 및 문의는 [서포트 서버](https://discord.gg/rYngeM3VDY)에서 해주시기 바랍니다. 
`);

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
