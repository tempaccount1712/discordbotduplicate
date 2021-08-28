const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { createNormalEmbed, get_abyss, returnAbyssEmbed } = require("../data/utility.js");
const getConnection = require('../db.js');

module.exports = {
    name: "abyss",
    cmd: "나선비경",
    find: (text) => text == "나선" || text == "나선비경",
    description: "원신 나선비경 데이터 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL', 'ATTACH_FILES'],
    execute: (message, args) => {
        getConnection(async (db) => {
            db.query(`SELECT cookie FROM uid WHERE discord_id = ${message.author.id} AND cookie IS NOT NULL`, async function(err, tables) {
                if(err) {
                    var embed = createNormalEmbed("DB 서버 연결 실패", "**현재 DB 서버에 연결되지 않아요.**\n\n나중에 다시 시도해주세요.");
                    message.reply({
                        embeds: [embed]
                    });
                }else if(tables.length == 0) {
                    var embed = createNormalEmbed("쿠키 등록 필요", `**${message.author.username}님은 아직 Hoyolab 쿠키를 등록하지 않으셨습니다.**\n\n /cookie 커맨드로 쿠키를 등록해주세요.`);
                    message.reply({
                        embeds: [embed]
                    });
                }else {
                    var cookie = tables[0]["cookie"];
                    var fetch = await get_abyss(cookie);
                    var val = fetch["actual"];
                    var row = new MessageActionRow();
                    
                    row.addComponents(new MessageButton().setStyle("SUCCESS").setLabel("요약").setCustomId("floor_summary"));
                    
                    for(var i = 0; i < val["floors"].length; i++) {
                        var btn = new MessageButton();
                        for(var j = 0; j < val["floors"][i]["levels"].length; j++) {
                            if(val["floors"][i]["index"] == 9) {
                                btn.setStyle("SECONDARY").setLabel("9층").setCustomId("nine_floor");
                            }else if(val["floors"][i]["index"] == 10) {
                                btn.setStyle("SECONDARY").setLabel("10층").setCustomId("ten_floor");
                            }else if(val["floors"][i]["index"] == 11) {
                                btn.setStyle("SECONDARY").setLabel("11층").setCustomId("eleven_floor");
                            }else if(val["floors"][i]["index"] == 12) {
                                btn.setStyle("SECONDARY").setLabel("12층").setCustomId("twelve_floor");
                            }
                        }
                        row.addComponents(btn);
                    }
        
                    var embed = await returnAbyssEmbed(fetch, 0);
                    
                    if(val["floors"].length > 0) {
                        var msg = await message.reply({
                            embeds: [embed],
                            components: [row]
                        });

                        const filter = (i) => { //valid input 
                            i.deferUpdate();
                            return ["floor_summary", "nine_floor", "ten_floor", "eleven_floor", "twelve_floor"].includes(i.customId) && i.user.id == message.author.id;
                        }
                
                        const collector = message.channel.createMessageComponentCollector({ filter, time: 60000 });

                        collector.on('collect', async (i) => {
                            if(i.customId == "floor_summary") {
                                embed = await returnAbyssEmbed(fetch, 0);
                            }else if(i.customId == "nine_floor") {
                                embed = await returnAbyssEmbed(fetch, 1);
                            }else if(i.customId == "ten_floor") {
                                embed = await returnAbyssEmbed(fetch, 2);
                            }else if(i.customId == "eleven_floor") {
                                embed = await returnAbyssEmbed(fetch, 3);
                            }else if(i.customId == "twelve_floor") {
                                embed = await returnAbyssEmbed(fetch, 4);
                            }
                            
                            msg.edit({
                                embeds: [embed],
                            })
                        });
                  
                        collector.on('end', function() {
                          msg.edit({
                            embeds: [embed],
                            components: []
                          })
                        });

                    } else { // if didn't played spiral abyss
                        message.reply({
                            embeds: [embed]
                        });
                    }

                }
            });
            db.release();
        });
    },
    slashs: async (interaction, args) => {
        getConnection(async (db) => {
            db.query(`SELECT cookie FROM uid WHERE discord_id = ${interaction.member.user.id} AND cookie IS NOT NULL`, async function(err, tables) {
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
                    var cookie = tables[0]["cookie"];
                    var fetch = await get_abyss(cookie);
                    var val = fetch["actual"];
                    var row = new MessageActionRow();
                    
                    row.addComponents(new MessageButton().setStyle("SUCCESS").setLabel("요약").setCustomId("floor_summary"));
                    
                    for(var i = 0; i < val["floors"].length; i++) {
                        var btn = new MessageButton();
                        for(var j = 0; j < val["floors"][i]["levels"].length; j++) {
                            if(val["floors"][i]["index"] == 9) {
                                btn.setStyle("SECONDARY").setLabel("9층").setCustomId("nine_floor");
                            }else if(val["floors"][i]["index"] == 10) {
                                btn.setStyle("SECONDARY").setLabel("10층").setCustomId("ten_floor");
                            }else if(val["floors"][i]["index"] == 11) {
                                btn.setStyle("SECONDARY").setLabel("11층").setCustomId("eleven_floor");
                            }else if(val["floors"][i]["index"] == 12) {
                                btn.setStyle("SECONDARY").setLabel("12층").setCustomId("twelve_floor");
                            }
                        }
                        row.addComponents(btn);
                    }
        
                    var embed = await returnAbyssEmbed(fetch, 0);
                    
                    if(val["floors"].length > 0) {
                        await interaction.reply({
                            embeds: [embed],
                            components: [row]
                        });

                        const filter = (i) => { //valid input 
                            i.deferUpdate();
                            return ["floor_summary", "nine_floor", "ten_floor", "eleven_floor", "twelve_floor"].includes(i.customId) && i.member.user.id == interaction.member.user.id;
                        }
                
                        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60000 });

                        collector.on('collect', async (i) => {
                            if(i.customId == "floor_summary") {
                                embed = await returnAbyssEmbed(fetch, 0);
                            }else if(i.customId == "nine_floor") {
                                embed = await returnAbyssEmbed(fetch, 1);
                            }else if(i.customId == "ten_floor") {
                                embed = await returnAbyssEmbed(fetch, 2);
                            }else if(i.customId == "eleven_floor") {
                                embed = await returnAbyssEmbed(fetch, 3);
                            }else if(i.customId == "twelve_floor") {
                                embed = await returnAbyssEmbed(fetch, 4);
                            }
                            
                            interaction.editReply({
                                embeds: [embed],
                            })
                        });
                  
                        collector.on('end', function() {
                          interaction.editReply({
                            embeds: [embed],
                            components: []
                          })
                        });

                    } else { // if didn't played spiral abyss
                        interaction.reply({
                            embeds: [embed]
                        });
                    }

                }
            });
            db.release();
        });
    }
}