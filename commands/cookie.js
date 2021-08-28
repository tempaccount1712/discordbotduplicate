const getConnection = require('../db.js');
const {check_user_data, createNormalEmbed} = require("../data/utility.js");
module.exports = {
    name: "cookie",
    description: "원신 HoyoLab 쿠키를 등록하는 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL'],
    slashs: (interaction, args) => {
        var cookie = args[0].value;
        getConnection(async (db) => {
            db.query(`SELECT * FROM uid WHERE discord_id = ${String(interaction.member.user.id)}`, async function(err, tables) {
                if(err) {
                    var embed = createNormalEmbed("DB 서버 연결 실패", "**현재 DB 서버에 연결되지 않아요.**\n\n나중에 다시 시도해주세요.");
                    interaction.reply({
                        embeds: [embed],
                        ephemeral: true
                    })
                }else {
                    //계정 로그인 테스트
                    var test = await check_user_data(cookie);
                    if(test == 0) {
                        if(tables.length == 1) {
                            db.query(`UPDATE uid SET cookie="${cookie}" WHERE discord_id = ${interaction.member.user.id}`);
                            if(tables[0]["cookie"] == null) {
                                var embed = createNormalEmbed("쿠키 등록 성공", `**쿠키가 성공적으로 등록되었습니다.**\n\n쿠키를 삭제하실려면 /delete나 !삭제 커맨드를 사용해주세요.`);
                                interaction.reply({
                                    embeds: [embed],
                                    ephemeral: true
                                })
                            }else {
                                var embed = createNormalEmbed("쿠키 업데이트 성공", `**쿠키가 성공적으로 업데이트되었습니다.**\n\n쿠키를 삭제하실려면 /delete나 !삭제 커맨드를 사용해주세요.`);
                                interaction.reply({
                                    embeds: [embed],
                                    ephemeral: true
                                })
                            }
                        }else if(tables.length == 0){
                            db.query(`INSERT INTO uid (discord_id, cookie) VALUES(${interaction.member.user.id}, "${db.escape(cookie)}")`, function(err, tables) {
                                if(err) {
                                    console.log(err);
                                    var embed = createNormalEmbed("쿠키 등록 실패", `**쿠키 등록을 실패하였습니다.**\n\n나중에 다시 시도해주세요.`);
                                    interaction.reply({
                                        embeds: [embed],
                                        ephemeral: true
                                    });
                                }else {
                                    var embed = createNormalEmbed("쿠키 등록 성공", `**쿠키가 성공적으로 등록되었습니다.**\n\n쿠키를 삭제하실려면 /delete나 !삭제 커맨드를 사용해주세요.`);
                                    interaction.reply({
                                        embeds: [embed],
                                        ephemeral: true
                                    });
                                }
                            });
                        }
                    }else {
                        if(test == -2) {
                            var embed = createNormalEmbed("쿠키 등록 실패", `**이 쿠키는 올바르지 않습니다.**\n\n올바르게 쓰셨는지 다시 확인해주세요.`);
                            interaction.reply({
                                embeds: [embed],
                                ephemeral: true
                            })
                        }else if(test == -1) {
                            var embed = createNormalEmbed("쿠키 등록 실패", `**HoyoLab 프로필이 존재하지 않습니다.**\n\nHoyoLab에 로그인하여 프로필을 만들고 다시 시도해주세요.`);
                            interaction.reply({
                                embeds: [embed],
                                ephemeral: true
                            })
                        }
                    }
                }
            });
            db.release();
        });
    }
}