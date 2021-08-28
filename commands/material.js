const { searchMaterial, createMaterialEmbed } = require("../data/material.js");
const { createNormalEmbed } = require("../data/utility.js");

module.exports = {
    name: "material",
    cmd: "[재료 이름]",
    find: (text) => searchMaterial(text),
    description: "원신 재료 데이터 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL', 'ATTACH_FILES'],
    execute: (message, args) => {
        var data = searchMaterial(args);
        var embed = createMaterialEmbed(data);
        message.reply({
            embeds: [embed]
        });
    },
    slashs: async (interaction, args) => {
        var materialName = args[0].value;
        var data = searchMaterial(materialName);
        if(!data) {
            var embed = createNormalEmbed("재료 검색 실패", "**재료를 찾을 수 없어요.**\n\n올바르게 쓰셨는지 다시 확인해주세요.");
            interaction.reply({
                embeds: [embed]
            });
        }else {
            var embed = createMaterialEmbed(data);
            interaction.reply({
                embeds: [embed]
            })
        }
    }
}
