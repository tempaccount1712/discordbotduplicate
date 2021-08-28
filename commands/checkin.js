const { MessageEmbed } = require("discord.js");
const getConnection = require('../db.js');
const { claimReward, createNormalEmbed } = require("../data/utility.js");
module.exports = {
    name: "checkin",
    cmd: "출첵",
    find: (text) => text == "출첵" || text == "출석체크",
    description: "원신 출석체크 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL'],
    execute: (message, args) => {
        getConnection(async (db) => {
            db.query(`SELECT * FROM uid WHERE discord_id = ${message.author.id} AND cookie IS NOT NULL`, async function(err, tables) {
                if(err) {
                    var embed = createNormalEmbed("DB 서버 연결 실패", "**현재 DB 서버에 연결되지 않아요.**\n\n나중에 다시 시도해주세요.");
                    message.reply({
                        embeds: [embed]
                    });
                }else if(tables.length == 0) {
                    const embed = new MessageEmbed();
                    embed.setTitle("원신 매일 출석체크 바로가기");
                    embed.setColor("#ffffff");
                    embed.setURL("https://webstatic-sea.mihoyo.com/ys/event/signin-sea/index.html?act_id=e202102251931481&lang=ko-kr");
                    message.reply({
                        embeds: [embed]
                    });
                }else {
                    var status = await claimReward(tables[0]["cookie"]);
                    if(status == -5003) {
                      var embed = createNormalEmbed("출석체크 오류", `**${message.author.username}님은 이미 출석체크 하셨어요.**\n\n내일 다시 이용해주세요.`);
                      message.reply({
                        embeds: [embed]
                      });
                    }else if(status == 0) {
                      var embed = createNormalEmbed("출석체크 성공", `**성공적으로 출석체크했어요.**`);
                      message.reply({
                        embeds: [embed]
                      });
                    }
                }
            });
            db.release();
        });
    },
    slashs: (interaction, args) => {
        getConnection(async (db) => {
            db.query(`SELECT * FROM uid WHERE discord_id = ${interaction.member.user.id} AND cookie IS NOT NULL`, async function(err, tables) {
                if(err) {
                    var embed = createNormalEmbed("DB 서버 연결 실패", "**현재 DB 서버에 연결되지 않아요.**\n\n나중에 다시 시도해주세요.");
                    interaction.reply({
                        embeds: [embed]
                    });
                }else if(tables.length == 0 && args.length > 0) {
                    var embed = createNormalEmbed("쿠키 등록 필요", `**${interaction.member.user.username}님은 아직 Hoyolab 쿠키를 등록하지 않으셨습니다.**\n\n /cookie 커맨드로 쿠키를 등록해주세요.`);
                    interaction.reply({
                        embeds: [embed]
                    });
                }else {
                    var cookie = tables[0]["cookie"];
                    if(tables[0]["cookie"] == undefined && args.length == 0) {
                        const embed = new MessageEmbed();
                        embed.setTitle("원신 매일 출석체크 바로가기");
                        embed.setURL("https://webstatic-sea.mihoyo.com/ys/event/signin-sea/index.html?act_id=e202102251931481&lang=ko-kr");
                        interaction.reply({
                            embeds: [embed]
                        });
                    }else if(tables[0]["cookie"] != undefined && args.length == 0) {
                        var status = await claimReward(cookie);
                        if(status == -5003) {
                            var embed = createNormalEmbed("출석체크 오류", `**${interaction.member.user.username}님은 이미 출석체크 하셨어요.**\n\n내일 다시 이용해주세요.`);
                            interaction.reply({
                                embeds: [embed]
                            });
                        }else if(status == 0) {
                            var embed = createNormalEmbed("출석체크 성공", `**성공적으로 출석체크했어요.**`);
                            interaction.reply({
                                embeds: [embed]
                            });
                        }
                    }else if(args.length > 0) {
                        db.query(`UPDATE uid SET autojoin = ${args[0].value} WHERE discord_id = ${interaction.member.user.id}`, function(err) {
                            if(err) {
                                var embed = createNormalEmbed("설정 업데이트 실패", `**설정 업데이트를 실패하였습니다.**\n\n나중에 다시 시도해주세요.`);
                                interaction.reply({
                                    embeds: [embed]
                                });
                            }else {
                                if(args[0].value) {
                                    var embed = createNormalEmbed("설정 업데이트 성공", `**설정이 성공적으로 업데이트되었습니다.**\n\n자동 출석체크가 활성화되었습니다.`);
                                    interaction.reply({
                                        embeds: [embed]
                                    });
                                }else {
                                    var embed = createNormalEmbed("설정 업데이트 성공", `**설정이 성공적으로 업데이트되었습니다.**\n\n자동 출석체크가 비활성화되었습니다.`);
                                    interaction.reply({
                                        embeds: [embed]
                                    });
                                }
                            }
                        });
                    }
                }
            });
            db.release();
        });
    }
}