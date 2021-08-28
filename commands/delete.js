const { MessageEmbed} = require("discord.js");
const getConnection = require('../db.js');
const {createNormalEmbed} = require("../data/utility.js");


module.exports = {
    name: "delete",
    cmd: "삭제",
    find: (text) => text == "삭제",
    description: "DB에 저장된 유저 데이터를 삭제하는 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL', 'ATTACH_FILES'],
    execute: (message, args) => {
      getConnection(async (db) => {
        db.query(`SELECT * FROM uid WHERE discord_id = ${String(message.author.id)}`, async function(err, tables) {
        if(err) {
            var embed = createNormalEmbed("DB 서버 연결 실패", "**현재 DB 서버에 연결되지 않아요.**\n\n나중에 다시 시도해주세요.");
            message.reply({
              embeds: [embed]
            });
        }else if(tables.length == 0) {
            var embed = createNormalEmbed("유저 검색 실패", "**등록되지 않은 유저입니다.**");
            message.reply({
                embeds: [embed]
            });
        }else {
          db.query(`DELETE FROM uid WHERE discord_id = ${String(message.author.id)}`, async function(err, tables) {
            if(err) {
                var embed = createNormalEmbed("쿠키 삭제 실패", `**쿠키 삭제를 실패하였습니다.**\n\n나중에 다시 시도해주세요.`);
                message.reply({
                    embeds: [embed]
                });
            }else {
              var embed = createNormalEmbed("데이터 삭제 성공", `**성공적으로 등록된 모든 데이터를 삭제하였어요.**`);
              message.reply({
                embeds: [embed]
              })
            }
          });
        }
        });
        db.release();
    });
    },
    slashs: async (interaction, args) => {
        getConnection(async (db) => {
            db.query(`SELECT * FROM uid WHERE discord_id = ${String(interaction.member.user.id)}`, async function(err, tables) {
            if(err) {
                var embed = createNormalEmbed("DB 서버 연결 실패", "**현재 DB 서버에 연결되지 않아요.**\n\n나중에 다시 시도해주세요.");
                interaction.reply({
                  embeds: [embed]
                });
            }else if(tables.length == 0) {
                var embed = createNormalEmbed("유저 검색 실패", "**등록되지 않은 유저입니다.**");
                interaction.reply({
                    embeds: [embed]
                });
            }else {
              db.query(`DELETE FROM uid WHERE discord_id = ${String(interaction.member.user.id)}`, async function(err, tables) {
                if(err) {
                    var embed = createNormalEmbed("쿠키 삭제 실패", `**쿠키 삭제를 실패하였습니다.**\n\n나중에 다시 시도해주세요.`);
                    interaction.reply({
                        embeds: [embed]
                    });
                }else {
                  var embed = createNormalEmbed("데이터 삭제 성공", `**성공적으로 등록된 모든 데이터를 삭제하였어요.**`);
                  interaction.reply({
                    embeds: [embed]
                  })
                }
              });
            }
            });
            db.release();
        });
    }
}