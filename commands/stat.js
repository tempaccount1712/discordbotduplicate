const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { createNormalEmbed, getCharactersAllEmbed, getCharacterEmbed } = require("../data/utility.js");
const getConnection = require('../db.js');

module.exports = {
    name: "stat",
    cmd: "스탯",
    find: (text) => text.startsWith("스탯"),
    description: "원신 픽업 관련 정보 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL', 'ATTACH_FILES'],
    execute: (message, args) => {
        getConnection(async (db) => {
            db.query(`SELECT * FROM uid WHERE discord_id = ${message.author.id} AND cookie IS NOT NULL`, async function(err, tables) {
                if(tables.length == 0) {
                    var embed = createNormalEmbed("쿠키 등록 필요", `**${message.author.username}님은 아직 Hoyolab 쿠키를 등록하지 않으셨습니다.**\n\n /cookie 커맨드로 쿠키를 등록해주세요.`);
                    message.reply({
                        embeds: [embed]
                    });
                }else if(err) {
                    var embed = createNormalEmbed("DB 서버 연결 실패", "**현재 DB 서버에 연결되지 않아요.**\n\n나중에 다시 시도해주세요.");
                    message.reply({
                        embeds: [embed]
                    });
                }else {
                    if(args.length == 0) {
                        var cookie = tables[0]["cookie"];
                        const embed = await getCharactersAllEmbed(cookie);
                        if(embed) {
                            message.reply({
                                embeds: [embed]
                            });
                        }else {
                            var msg = createNormalEmbed("캐릭터를 소유하지 않음", `**${message.author.username}님은 어떤 캐릭터도 소유하고 있지 않아요.**\n\n`);
                            message.reply({
                                embeds: [msg]
                            });
                        }
                    }else {
                        var search = args[0].value;
                        var cookie = tables[0]["cookie"];
                        const embed = await getCharacterEmbed(cookie, search);
                        if(embed) {
                            message.reply({
                                embeds: [embed]
                            });
                        }else {
                            var msg = createNormalEmbed("캐릭터 검색 실패", "**캐릭터를 찾을 수 없어요.**\n\n올바르게 쓰셨는지 다시 확인해주세요.");
                            message.reply({
                                embeds: [msg]
                            });
                        }
                    }
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
                    });
                }else if(tables.length == 0) {
                    var embed = createNormalEmbed("쿠키 등록 필요", `**${interaction.member.user.username}님은 아직 Hoyolab 쿠키를 등록하지 않으셨습니다.**\n\n /cookie 커맨드로 쿠키를 등록해주세요.`);
                    interaction.reply({
                        embeds: [embed]
                    });
                }else {
                    if(args.length == 0) {
                        var cookie = tables[0]["cookie"];
                        const embed = await getCharactersAllEmbed(cookie);
                        if(embed) {
                            interaction.reply({
                                embeds: [embed]
                            });
                        }else {
                            var msg = createNormalEmbed("캐릭터를 소유하지 않음", `**${interaction.member.user.username}님은 어떤 캐릭터도 소유하고 있지 않아요.**\n\n`);
                            interaction.reply({
                                embeds: [msg]
                            });
                        }
                    }else {
                        var search = args[0].value;
                        var cookie = tables[0]["cookie"];
                        const embed = await getCharacterEmbed(cookie, search);
                        if(embed) {
                            interaction.reply({
                                embeds: [embed]
                            });
                        }else {
                            var msg = createNormalEmbed("캐릭터 검색 실패", "**캐릭터를 찾을 수 없어요.**\n\n올바르게 쓰셨는지 다시 확인해주세요.");
                            interaction.reply({
                                embeds: [msg]
                            });
                        }
                    }
                }
            });
            db.release();
        });
    }
}