const { createNormalEmbed } = require("../data/utility.js");
const { searchArtifact, createArtifactEmbed } = require("../data/artifact.js");
module.exports = {
    name: "artifact",
    find: function(text) {
        return searchArtifact(text);
    },
    description: "원신 성유물 데이터 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL'],
    execute: (message, args) => {
        var data = searchArtifact(args);
        var embed = createArtifactEmbed(data);
        message.reply({
            embeds: [embed]
        });
    },
    slashs: (interaction, args) => {
        var artifactName = args[0].value;
        var data = searchArtifact(artifactName);
        if(!data) {
            var embed = createNormalEmbed("성유물 검색 실패", "**성유물을 찾을 수 없어요.**\n\n올바르게 쓰셨는지 다시 확인해주세요.");
            interaction.reply({
                embeds: [embed]
            });
        }else {
            var embed = createArtifactEmbed(data);
            interaction.reply({
                embeds: [embed]
            })
        }
    }
}