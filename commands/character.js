const { MessageActionRow, MessageButton } = require("discord.js");
const char = require("../data/character.js");
const { createNormalEmbed } = require("../data/utility.js");

module.exports = {
    name: "character",
    cmd: "[캐릭터 이름]",
    find: function(text) {
        const cFilter = text.split(" ");
        //search for subcommands and keywords
        const cOptions = ["돌파", "스탯", "특성", "빌드"];
        var cArgv = [];
        var pushOk = false;
    
        for(var i = 0; i < cFilter.length; i++) {
          var curr = cFilter[i];
          if(cOptions.indexOf(curr) >= 0) {
            optionFound = true;
            pushOk = true;
          }else if(cFilter[i].indexOf("-") >= 0) {
            pushOk = true;
          }
    
          if(pushOk && cFilter[i].length > 0) {
            cArgv.push(cFilter[i]);
          }
        }
    
        const cSearch = text.replace(cArgv.join(" "), "");
        return char.searchCharacter(cSearch);
    
    },
    description: "캐릭터 정보",
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL', 'MANAGE_MESSAGES'],
    execute: async (message, args) => {
        const cFilter = args.split(" ");
        //search for subcommands and keywords
        const cOptions = ["돌파", "스탯", "특성", "빌드"];
        var cArgv = [];
        var pushOk = false;
        var subCommand;

        for(var i = 0; i < cFilter.length; i++) {
          var curr = cFilter[i];
          if(cOptions.indexOf(curr) >= 0) {
            if(subCommand != undefined) {
                return false;
            }else {
                subCommand = curr;
                pushOk = true;
            }
          }else if(pushOk && cFilter[i].length > 0 || cFilter[i].indexOf("-") >= 0) {
            cArgv.push(cFilter[i]);
          }
        }
        
        if(cArgv.length > 0) {
            cArgv = cArgv.join("").split("-");
        }
    
        var cSearch = args.replace(cArgv.join("-"), "");
        if(subCommand) {
            cSearch = cSearch.replace(subCommand, "");
        }

        var character = char.searchCharacter(cSearch);
        if(!subCommand && cArgv.length == 0) {
            var embed = char.createCharacterEmbedInfo(character, "charMain");
            const row = new MessageActionRow().addComponents(
                new MessageButton().setCustomId('charMain').setLabel('메인 정보').setStyle('PRIMARY'),
                new MessageButton().setCustomId('charPassive').setLabel('패시브').setStyle('SECONDARY'),
                new MessageButton().setCustomId('charSkill').setLabel('스킬').setStyle('SECONDARY'),
                new MessageButton().setCustomId('charConstellation').setLabel('운명의 자리').setStyle('SECONDARY')
            ); //buttons

            var msg = await message.reply({
                embeds: [embed],
                components: [row]
            })

            const filter = (i) => { //valid input 
                i.deferUpdate();
                return ["charMain", "charPassive", "charSkill", "charConstellation"].includes(i.customId) && i.member.user.id == message.author.id;
            }
    
            const collector = msg.createMessageComponentCollector({ filter, time: 60000 });
    
            collector.on('collect', async (i) => {
                embed = char.createCharacterEmbedInfo(character, i.customId);
                
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
        }else if(!subCommand && cArgv.length == 2) {
            var begin = Number(cArgv[0]);
            var end = Number(cArgv[1]);
            var ascensionEmbed;
            var statEmbed;
            
            var max = character["stat"][character["stat"].length - 1]["last"];

            if(begin < 1 || begin > max || end < 1 || end > max) {
                var embed = createNormalEmbed("캐릭터 검색 실패", `**레벨값이 올바르지 않습니다.**\n\n 레벨 범위가 1에서 ${max} 사이여야 합니다.`);
                message.reply({
                    embeds: [embed]
                });
                return;
            }

            if(character["ascension"]) {
                ascensionEmbed = char.createRequiredEmbed(character, begin, end, 0);
            }
    
            if(character["stat"]) {
                statEmbed = char.createRequiredEmbed(character, begin, end, 1);
            }
    
            embed = statEmbed;

            var row = new MessageActionRow();
            row.addComponents(
                new MessageButton().setCustomId("rangeInfo").setLabel("기본 정보").setStyle("PRIMARY"),
                new MessageButton().setCustomId("rangeAscension").setLabel("돌파 정보").setStyle("SECONDARY"),
            );
            
            if(ascensionEmbed && statEmbed) {
                var msg = await message.reply({
                    embeds: [embed],
                    components: [row]
                });

                const filter = (i) => { //valid input 
                    i.deferUpdate();
                    return ["rangeInfo", "rangeAscension"].includes(i.customId) && i.member.user.id == message.author.id;
                }
        
                const collector = msg.createMessageComponentCollector({ filter, time: 60000 });
        
                collector.on('collect', async (i) => {
                    if(i.customId == "rangeInfo") {
                        embed = char.createRequiredEmbed(character, begin, end, 1);
                    }else if(i.customId == "rangeAscension") {
                        embed = char.createRequiredEmbed(character, begin, end, 0);
                    }
                    
                    msg.edit({
                        embeds: [embed],
                    })
                });
        
                collector.on('end', function() {
                    msg.edit({
                        embeds: [embed],
                        components: []
                    });
                });
            }else {
                message.reply({
                    embeds: [embed]
                });
            }
        }else if(subCommand == "빌드") { 
            var build = character["build"];
            if(!build) {
                var embed = createNormalEmbed("캐릭터 빌드 검색 실패", "**캐릭터 추천 빌드 데이터가 아직 업데이트되지 않았어요.**\n\n나중에 다시 시도해주세요.");
                message.reply({
                    embeds: [embed]
                });
                return;
            }

            var embed = char.createBuildEmbed(character, 0);
            var row = new MessageActionRow();

            for(var i = 0; i < build.length; i++) { 
                var button = new MessageButton();
                button.setStyle("SECONDARY").setCustomId("charBuild" + String(i)).setLabel(build[i]["type"]);
                row.addComponents(button);
            }

            if(build.length > 1) {
                var msg = await message.reply({
                    embeds: [embed],
                    components: [row]
                });

                const filter = (i) => { //valid input 
                    i.deferUpdate();
                    return i.customId.indexOf("charBuild") >= 0 && i.member.user.id == message.author.id;
                }

                const collector = msg.createMessageComponentCollector({ filter, time: 60000 });

                collector.on("collect", async (i) => {
                    embed = char.createBuildEmbed(character, Number(i.customId.replace("charBuild", "")));

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
            } else {
                message.reply({
                    embeds: [embed]
                });
            }
        }else if(subCommand == "스탯") {
            if(cArgv.length == 1) {
                var level = Number(cArgv[0]);
                var stats = character["stat"];
                if(!stats) {
                    var embed = createNormalEmbed("캐릭터 스탯 검색 실패", "**캐릭터 스탯이 아직 업데이트되지 않았어요.**\n\n나중에 다시 시도해주세요.");
                    message.reply({
                        embeds: [embed]
                    })
                }else if(level < 1 || level > 90) {
                    var embed = createNormalEmbed("캐릭터 검색 실패", `**레벨값이 올바르지 않습니다.**\n\n 레벨 범위가 1에서 90 사이여야 합니다.`);
                    message.reply({
                        embeds: [embed]
                    });
                }else {
                    var embed = char.createStatEmbed(character, level);
                    message.reply({
                        embeds: [embed]
                    });
                }
            } else {
                var embed = createNormalEmbed("캐릭터 스탯 검색 실패", "**레벨을 입력해주세요.**");
                message.reply({
                    embeds: [embed]
                });
            }
        }else if(subCommand == "돌파") {
            var ascension = character["ascension"];
            if(!ascension) { //error message
                var embed = createNormalEmbed("캐릭터 돌파 검색 실패", "**캐릭터 돌파 데이터가 아직 업데이트되지 않았어요.**\n\n나중에 다시 시도해주세요.");
                message.reply({
                    embeds: [embed]
                });
                return;
            }

            if(cArgv.length == 0) {
                var embed = char.createAscensionEmbedBrief(character);
                message.reply({
                    embeds: [embed]
                });
            }else if(cArgv.length == 1) {
                var level = Number(cArgv[0]);;
                var length = ascension.length;

                if(level < 1 || level > length) {
                    var embed = createNormalEmbed("캐릭터 검색 실패", `**레벨값이 올바르지 않습니다.**\n\n 레벨 범위가 1에서 ${length} 사이여야 합니다.`);
                    message.reply({
                        embeds: [embed]
                    });
                }else {
                    var embed = char.requiredAscensionEmbed(character, level, level);
                    message.reply({
                        embeds: [embed]
                    });
                }
            }
        }else if(subCommand == "특성") {
            var talent = character["talent"];
            if(!talent) { //error message
                var embed = createNormalEmbed("캐릭터 특성 검색 실패", "**캐릭터 특성 데이터가 아직 업데이트되지 않았어요.**\n\n나중에 다시 시도해주세요.");
                message.reply({
                    embeds: [embed]
                });
                return;
            }
            var row = new MessageActionRow();

            if(talent.length > 1) {
                for(var i = 0; i < talent.length; i++) { 
                    row.addComponents(
                        new MessageButton().setCustomId("charTalent" + String(i)).setStyle("SECONDARY").setLabel(talent[i]["type"]) 
                    );
                }
            }

            if(cArgv.length == 0) {
                var embed = char.createTalentEmbedBrief(character, 0);
                if(talent.length > 1) {
                    var msg = await message.reply({
                        embeds: [embed],
                        components: [row]
                    });
                    
                    const filter = (i) => { //valid input 
                        i.deferUpdate();
                        return i.customId.indexOf("charTalent") >= 0 && i.member.user.id == message.author.id;
                    }

                    const collector = msg.createMessageComponentCollector({ filter, time: 60000 });

                    collector.on("collect", i => {
                        embed = char.createTalentEmbedBrief(character, Number(i.customId.replace("charTalent", "")));

                        msg.edit({
                            embeds: [embed],
                        })
                    })

                    collector.on('end', function() {
                        msg.edit({
                          embeds: [embed],
                          components: []
                        })
                    });

                }else {
                    message.reply({
                        embeds: [embed]
                    });
                }
            }else if(cArgv.length == 1){
                var level = Number(cArgv[0]);
                var length = talent[0]["items"].length;
                //input test
                if(level < 1 || level > length + 1) {
                    var embed = createNormalEmbed("캐릭터 검색 실패", `**레벨값이 올바르지 않습니다.**\n\n 레벨 범위가 1에서 ${length + 1} 사이여야 합니다.`);
                    message.reply({
                        embeds: [embed]
                    });
                }else {
                    var embed = char.requiredTalentEmbed(character, level, level, 0);
                    if(talent.length > 1) {
                        var msg = await message.reply({
                            embeds: [embed],
                            components: [row]
                        });

                        const filter = (i) => { //valid input 
                            i.deferUpdate();
                            return i.customId.indexOf("charTalent") >= 0 && i.member.user.id == message.author.id;
                        }

                        const collector = msg.createMessageComponentCollector({ filter, time: 60000 });

                        collector.on("collect", async (i) => {
                            embed = char.requiredTalentEmbed(character, level, level, Number(i.customId.replace("charTalent", "")));

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

                    }else {
                        message.reply({
                            embeds: [embed]
                        });
                    }
                }
            }

        }

    },
    slashs: async (interaction, args) => {
        var subCommand = interaction.options._subcommand;
        var search = args[0].value;
        var character = char.searchCharacter(search);
        if(subCommand == "info") {
            var embed = char.createCharacterEmbedInfo(character, "charMain");
            const row = new MessageActionRow().addComponents(
                new MessageButton().setCustomId('charMain').setLabel('메인 정보').setStyle('PRIMARY'),
                new MessageButton().setCustomId('charPassive').setLabel('패시브').setStyle('SECONDARY'),
                new MessageButton().setCustomId('charSkill').setLabel('스킬').setStyle('SECONDARY'),
                new MessageButton().setCustomId('charConstellation').setLabel('운명의 자리').setStyle('SECONDARY')
            ); //buttons

            interaction.reply({
                embeds: [embed],
                components: [row]
            })

            const filter = (i) => { //valid input 
                i.deferUpdate();
                return ["charMain", "charPassive", "charSkill", "charConstellation"].includes(i.customId) && i.member.user.id == interaction.member.user.id;
            }

            var msg = await interaction.fetchReply();
    
            const collector = msg.createMessageComponentCollector({ filter, time: 60000 });
    
            collector.on('collect', async (i) => {
                embed = char.createCharacterEmbedInfo(character, i.customId);
                
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
        }else if(subCommand == "build") { 
            var build = character["build"];
            if(!build) {
                var embed = createNormalEmbed("캐릭터 빌드 검색 실패", "**캐릭터 추천 빌드 데이터가 아직 업데이트되지 않았어요.**\n\n나중에 다시 시도해주세요.");
                interaction.reply({
                    embeds: [embed]
                });
                return;
            }

            var embed = char.createBuildEmbed(character, 0);
            var row = new MessageActionRow();

            for(var i = 0; i < build.length; i++) { 
                var button = new MessageButton();
                button.setStyle("SECONDARY").setCustomId("charBuild" + String(i)).setLabel(build[i]["type"]);
                row.addComponents(button);
            }

            if(build.length > 1) {
                interaction.reply({
                    embeds: [embed],
                    components: [row]
                });

                const filter = (i) => { //valid input 
                    i.deferUpdate();
                    return i.customId.indexOf("charBuild") >= 0 && i.member.user.id == interaction.member.user.id;
                }

                var msg = await interaction.fetchReply();

                const collector = msg.createMessageComponentCollector({ filter, time: 60000 });

                collector.on("collect", async (i) => {
                    embed = char.createBuildEmbed(character, Number(i.customId.replace("charBuild", "")));

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
            } else {
                interaction.reply({
                    embeds: [embed]
                });
            }
        }else if(subCommand == "stat") {
            var level = args[1].value;
            var stats = character["stat"];
            if(!stats) {
              var embed = createNormalEmbed("캐릭터 스탯 검색 실패", "**캐릭터 스탯이 아직 업데이트되지 않았어요.**\n\n나중에 다시 시도해주세요.");
                interaction.reply({
                    embeds: [embed]
                })
            }else if(level < 1 || level > 90) {
                var embed = createNormalEmbed("캐릭터 검색 실패", `**레벨값이 올바르지 않습니다.**\n\n 레벨 범위가 1에서 90 사이여야 합니다.`);
                interaction.reply({
                    embeds: [embed]
                });
            }else {
                var embed = char.createStatEmbed(character, level);
                interaction.reply({
                    embeds: [embed]
                })
            }
        }else if(subCommand == "ascension") {
            var ascension = character["ascension"];
            if(!ascension) { //error message
                var embed = createNormalEmbed("캐릭터 돌파 검색 실패", "**캐릭터 돌파 데이터가 아직 업데이트되지 않았어요.**\n\n나중에 다시 시도해주세요.");
                interaction.reply({
                    embeds: [embed]
                });
                return;
            }

            if(args.length == 1) {
                var embed = char.createAscensionEmbedBrief(character);
                interaction.reply({
                    embeds: [embed]
                });
            }else {
                var level = args[1].value;
                var length = ascension.length;

                if(level < 1 || level > length) {
                    var embed = createNormalEmbed("캐릭터 검색 실패", `**레벨값이 올바르지 않습니다.**\n\n 레벨 범위가 1에서 ${length} 사이여야 합니다.`);
                    interaction.reply({
                        embeds: [embed]
                    });
                }else {
                    var embed = char.requiredAscensionEmbed(character, level, level);
                    interaction.reply({
                        embeds: [embed]
                    });
                }
            }
        }else if(subCommand == "talent") {
            var talent = character["talent"];
            if(!talent) { //error message
                var embed = createNormalEmbed("캐릭터 특성 검색 실패", "**캐릭터 특성 데이터가 아직 업데이트되지 않았어요.**\n\n나중에 다시 시도해주세요.");
                interaction.reply({
                    embeds: [embed]
                });
                return;
            }
            var row = new MessageActionRow();

            if(talent.length > 1) {
                for(var i = 0; i < talent.length; i++) { 
                    row.addComponents(
                        new MessageButton().setCustomId("charTalent" + String(i)).setStyle("SECONDARY").setLabel(talent[i]["type"]) 
                    );
                }
            }

            if(args.length == 1) {
                var embed = char.createTalentEmbedBrief(character, 0);
                if(talent.length > 1) {
                    interaction.reply({
                        embeds: [embed],
                        components: [row]
                    });
                    
                    const filter = (i) => { //valid input 
                        i.deferUpdate();
                        return i.customId.indexOf("charTalent") >= 0 && i.member.user.id == interaction.member.user.id;
                    }

                    var msg = await interaction.fetchReply();

                    const collector = msg.createMessageComponentCollector({ filter, time: 60000 });

                    collector.on("collect", i => {
                        embed = char.createTalentEmbedBrief(character, Number(i.customId.replace("charTalent", "")));

                        interaction.editReply({
                            embeds: [embed],
                        })
                    })

                    collector.on('end', function() {
                        interaction.editReply({
                          embeds: [embed],
                          components: []
                        })
                    });

                }else {
                    interaction.reply({
                        embeds: [embed]
                    });
                }
            }else {
                var level = args[1].value;
                var length = talent[0]["items"].length;
                //input test
                if(level < 1 || level > length + 1) {
                    var embed = createNormalEmbed("캐릭터 검색 실패", `**레벨값이 올바르지 않습니다.**\n\n 레벨 범위가 1에서 ${length + 1} 사이여야 합니다.`);
                    interaction.reply({
                        embeds: [embed]
                    });
                }else {
                    var embed = char.requiredTalentEmbed(character, level, level, 0);
                    if(talent.length > 1) {
                        interaction.reply({
                            embeds: [embed],
                            components: [row]
                        });

                        const filter = (i) => { //valid input 
                            i.deferUpdate();
                            return i.customId.indexOf("charTalent") >= 0 && i.member.user.id == interaction.member.user.id;
                        }
                        
                        var msg = await interaction.fetchReply();

                        const collector = msg.createMessageComponentCollector({ filter, time: 60000 });

                        collector.on("collect", async (i) => {
                            embed = char.requiredTalentEmbed(character, level, level, Number(i.customId.replace("charTalent", "")));

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

                    }else {
                        interaction.reply({
                            embeds: [embed]
                        });
                    }
                }
            }

        }else if(subCommand == "range") {
            var begin = args[1].value;
            var end = args[2].value;
            var ascensionEmbed;
            var statEmbed;

            if(begin < 1 || begin > 90 || end < 1 || end > 90) {
                var embed = createNormalEmbed("캐릭터 검색 실패", `**레벨값이 올바르지 않습니다.**\n\n 레벨 범위가 1에서 90 사이여야 합니다.`);
                interaction.reply({
                    embeds: [embed]
                });
                return;
            }

            if(character["ascension"]) {
                ascensionEmbed = char.createRequiredEmbed(character, begin, end, 0);
            }
    
            if(character["stat"]) {
                statEmbed = char.createRequiredEmbed(character, begin, end, 1);
            }
    
            embed = statEmbed;

            var row = new MessageActionRow();
            row.addComponents(
                new MessageButton().setCustomId("rangeInfo").setLabel("기본 정보").setStyle("PRIMARY"),
                new MessageButton().setCustomId("rangeAscension").setLabel("돌파 정보").setStyle("SECONDARY"),
            );
            
            if(ascensionEmbed && statEmbed) {
                interaction.reply({
                    embeds: [embed],
                    components: [row]
                });

                const filter = (i) => { //valid input 
                    i.deferUpdate();
                    return ["rangeInfo", "rangeAscension"].includes(i.customId) && i.member.user.id == interaction.member.user.id;
                }

                var msg = await interaction.fetchReply();
        
                const collector = msg.createMessageComponentCollector({ filter, time: 60000 });
        
                collector.on('collect', async (i) => {
                    if(i.customId == "rangeInfo") {
                        embed = char.createRequiredEmbed(character, begin, end, 1);
                    }else if(i.customId == "rangeAscension") {
                        embed = char.createRequiredEmbed(character, begin, end, 0);
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
            }else {
                interaction.reply({
                    embeds: [embed]
                });
            }
        }
    } 
}