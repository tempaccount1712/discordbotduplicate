const { MessageEmbed } = require("discord.js");
const getConnection = require('../db.js');
const { redeemCode, createNormalEmbed, createRedeemMessage } = require("../data/utility.js");
const {createRedeemEmbed} = require("../data/redeem.js");
module.exports = {
    name: "redeem",
    cmd: "리딤",
    find: (text) => text.startsWith("리딤") || text.startsWith("리딤코드"),
    description: "공식 리딤코드를 리딤하거나 보여주는 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL'],
    find: (text) => text.startsWith("리딤"),
    execute: (message, args) => {
        message.lineReply("a");
    },
    slashs: (interaction, args) => {
        if(args.length == 0) {
            const embed = createRedeemEmbed();
            interaction.reply({
                embeds: [embed]
            });
        }else if(args.length == 1) {
            var code = args[0].value;
            getConnection(async (db) => {
                db.query(`SELECT * FROM uid WHERE discord_id = ${interaction.member.user.id} AND cookie IS NOT NULL`, async function(err, tables) {
                    if(err) {
                        var embed = createNormalEmbed("DB 서버 연결 실패", "**현재 DB 서버에 연결되지 않아요.**\n\n나중에 다시 시도해주세요.");
                        interaction.reply({
                            embeds: [embed]
                        });
                    }else if(tables.length == 0) {
                        var embed = createNormalEmbed("쿠키 등록 필요", `**${interaction.member.user.username}님은 아직 Hoyolab 쿠키를 등록하지 않으셨습니다.**\n\n /cookie 커맨드로 쿠키를 등록해주세요.`);
                        interaction.reply({
                            embeds: [embed]
                        });
                    } else {
                        var cookie = tables[0]["cookie"];
                        var redeem = await redeemCode(cookie, code);
                        var embed = createRedeemMessage(redeem);
                        interaction.reply({
                            embeds: [embed]
                        });
                    }
                });
                db.release();
            });
        }
    }
}