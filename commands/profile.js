const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { createNormalEmbed, createInfoEmbed } = require("../data/utility.js");
const getConnection = require('../db.js');

module.exports = {
    name: "profile",
    cmd: "프로필",
    find: (el) => el == "프로필",
    description: "원신 인게임 프로필 정보 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL', 'ATTACH_FILES'],
    execute: (message, args) => {
        getConnection(async (db) => {
            db.query(`SELECT * FROM uid WHERE discord_id = ${message.author.id} AND cookie IS NOT NULL`, async function(err, tables) {
                if(err) {
                    var embed = createNormalEmbed("DB 서버 연결 실패", "**현재 DB 서버에 연결되지 않아요.**\n\n나중에 다시 시도해주세요.");
                    message.reply({
                        embeds: [embed]
                    })
                }else if(tables.length == 0) {
                    var embed = createNormalEmbed("쿠키 등록 필요", `**${message.author.username}님은 아직 Hoyolab 쿠키를 등록하지 않으셨습니다.**\n\n /cookie 커맨드로 쿠키를 등록해주세요.`);
                    message.reply({
                        embeds: [embed]
                    })
                }else {
                    var cookie = tables[0]["cookie"];
                    var embed = await createInfoEmbed(cookie);
                    message.reply({
                        embeds: [embed]
                    })
                }
            });
            db.release();
        });
    },
    slashs: async (interaction, args) => {
        getConnection(async (db) => {
            db.query(`SELECT * FROM uid WHERE discord_id = ${interaction.member.user.id} AND cookie IS NOT NULL`, async function(err, tables) {
                if(err) {
                    var embed = createNormalEmbed("DB 서버 연결 실패", "**현재 DB 서버에 연결되지 않아요.**\n\n나중에 다시 시도해주세요.");
                    interaction.reply({
                        embeds: [embed]
                    })
                }else if(tables.length == 0) {
                    var embed = createNormalEmbed("쿠키 등록 필요", `**${interaction.member.user.username}님은 아직 Hoyolab 쿠키를 등록하지 않으셨습니다.**\n\n /cookie 커맨드로 쿠키를 등록해주세요.`);
                    interaction.reply({
                        embeds: [embed]
                    })
                }else {
                    var cookie = tables[0]["cookie"];
                    var embed = await createInfoEmbed(cookie);
                    interaction.reply({
                        embeds: [embed]
                    })
                }
            });
            db.release();
        });
    }
}