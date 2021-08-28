const getConnection = require('../db.js');
module.exports = {
    name: "setting",
    cmd: "설정",
    find: (text) => text.startsWith("설정"),
    description: "봇 알림 채널을 설정하는 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL'],
    execute: (message, args) => {
        var channel = message.mentions.channels.first();
        if(channel.permissionsFor(message.author).has("MANAGE_GUILD")) {
            if(channel.type =="GUILD_TEXT") {
                getConnection(async (db) => {
                    db.query(`SELECT * FROM settings WHERE server_id = ${message.guild.id}`, function(err, tables) {
                        if(err) {
                            message.reply({
                                content: "현재 연결에 에러가 있어서 나중에 시도해주세요. "
                            });
                        } else if(tables.length == 0) {
                            db.query(`INSERT INTO settings (server_id, channel_id) VALUES (${message.guild.id}, ${channel.id})`, function(err, tables) {
                                if(err) {
                                    message.reply({
                                        content: "현재 연결에 에러가 있어서 나중에 시도해주세요. "
                                    });
                                }else {
                                    message.reply({
                                        content: "성공적으로 알림이 설정되었어요."
                                    });
                                }
                            });
                        } else {
                            db.query(`UPDATE settings SET channel_id = ${channel.id} WHERE server_id = ${message.guild.id}`, function(err, tables) {
                                if(err) {
                                    message.reply({
                                        content: "설정 업데이트에 실패하였어요"
                                    });
                                }else {
                                    message.reply({
                                        content: "성공적으로 채널이 변경되었어요."
                                    });
                                }
                            });
                        }
                    });
                    db.release();
                });
            }else {
                message.reply({
                    content: "올바르지 않은 채널입니다."
                });
            }
        }else {
            if(channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) {
                interaction.reply({
                    content: message.author.username + "님은 서버 설정을 바꿀 권한이 없습니다. "
                });
            }
        }
    },
    slashs: (interaction, args) => {
        var channel = interaction.member.guild.channels.cache.get(args[0].value);
        if(channel.permissionsFor(interaction.user).has("MANAGE_GUILD")) {
            if(channel.type =="GUILD_TEXT") {
                getConnection(async (db) => {
                    db.query(`SELECT * FROM settings WHERE server_id = ${interaction.guildId}`, function(err, tables) {
                        if(err) {
                            interaction.reply({
                                content: "현재 연결에 에러가 있어서 나중에 시도해주세요. "
                            });
                        } else if(tables.length == 0) {
                            db.query(`INSERT INTO settings (server_id, channel_id) VALUES (${interaction.guildId}, ${channel.id})`, function(err, tables) {
                                if(err) {
                                    interaction.reply({
                                        content: "현재 연결에 에러가 있어서 나중에 시도해주세요. "
                                    });
                                }else {
                                    interaction.reply({
                                        content: "성공적으로 알림이 설정되었어요."
                                    });
                                }
                            });
                        } else {
                            db.query(`UPDATE settings SET channel_id = ${channel.id} WHERE server_id = ${interaction.guildId}`, function(err, tables) {
                                if(err) {
                                    interaction.reply({
                                        content: "설정 업데이트에 실패하였어요"
                                    });
                                }else {
                                    interaction.reply({
                                        content: "성공적으로 채널이 변경되었어요."
                                    });
                                }
                            });
                        }
                    });
                    db.release();
                });
            }else {
                interaction.reply({
                    content: "올바르지 않은 채널입니다."
                });
            }
        }else {
            if(channel.permissionsFor(interaction.member.guild.me).has("SEND_MESSAGES")) {
                interaction.reply({
                    content: interaction.member.user.username + "님은 서버 설정을 바꿀 권한이 없습니다. "
                });
            }
        }
    }
}