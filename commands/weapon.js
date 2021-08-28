const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const weapons = require("../data/weapon.js");
const { createNormalEmbed } = require("../data/utility.js");

module.exports = {
    name: "weapon",
    cmd: "[무기 이름]",
    find: (text) => {
        var wFilter = text.split(" ");
        //search for subcommands and keywords
        const wOptions = ["돌파", "스탯"];
        var wArgv = [];
        var pushOk = false;
    
        for(var i = 0; i < wFilter.length; i++) {
          var curr = wFilter[i];
          if(wOptions.indexOf(curr) >= 0) {
            optionFound = true;
            pushOk = true;
          }else if(wFilter[i].indexOf("-") >= 0) {
            pushOk = true;
          }
    
          if(pushOk && wFilter[i].length > 0) {
            wArgv.push(wFilter[i]);
          }
        }
    
        const wSearch = text.replace(wArgv.join(" "), "");
        return weapons.searchWeapon(wSearch);
    },
    description: "무기 정보",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL', 'ATTACH_FILES'],
    execute: async (message, args) => {
        const wFilter = args.split(" ");
        //search for subcommands and keywords
        const wOptions = ["돌파", "스탯"];
        var wArgv = [];
        var pushOk = false;
        var subCommand;

        for(var i = 0; i < wFilter.length; i++) {
          var curr = wFilter[i];
          if(wOptions.indexOf(curr) >= 0) {
            if(subCommand != undefined) {
                return false;
            }else {
                subCommand = curr;
                pushOk = true;
            }
          }else if(pushOk && wFilter[i].length > 0 || wFilter[i].indexOf("-") >= 0) {
            wArgv.push(wFilter[i]);
          }
        }
        
        if(wArgv.length > 0) {
            wArgv = wArgv.join("").split("-");
        }
    
        var wSearch = args.replace(wArgv.join("-"), "");
        if(subCommand) {
            wSearch = wSearch.replace(subCommand, "");
        }

        var weapon = weapons.searchWeapon(wSearch);
        if(!subCommand && wArgv.length == 0) {
            var embed = weapons.createWeaponEmbed(weapon, "charMain");
        
            message.reply({
                embeds: [embed]
            });
        }else if(!subCommand && wArgv.length == 2) {
            var begin = Number(wArgv[0]);
            var end = Number(wArgv[1]);
            var ascensionEmbed;
            var statEmbed;
            
            var max = weapon["stat"][weapon["stat"].length - 1]["last"];

            if(begin < 1 || begin > max || end < 1 || end > max) {
                var embed = createNormalEmbed("캐릭터 검색 실패", `**레벨값이 올바르지 않습니다.**\n\n 레벨 범위가 1에서 ${max} 사이여야 합니다.`);
                message.reply({
                    embeds: [embed]
                });
                return;
            }

            if(weapon["ascension"]) {
                ascensionEmbed = weapons.createRequiredWeaponEmbed(weapon, begin, end, 0);
            }
    
            if(weapon["stat"]) {
                statEmbed = weapons.createRequiredWeaponEmbed(weapon, begin, end, 1);
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
                        embed = weapons.createRequiredWeaponEmbed(weapon, begin, end, 1);
                    }else if(i.customId == "rangeAscension") {
                        embed = weapons.createRequiredWeaponEmbed(weapon, begin, end, 0);
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
        }else if(subCommand == "스탯") {
            if(wArgv.length == 1) {
                var level = Number(wArgv[0]);
                var stats = weapon["stat"];
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
                    var embed = weapons.createWeaponStatEmbed(weapon, level);
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
            var ascension = weapon["ascension"];
            if(!ascension) { //error message
                var embed = createNormalEmbed("캐릭터 돌파 검색 실패", "**캐릭터 돌파 데이터가 아직 업데이트되지 않았어요.**\n\n나중에 다시 시도해주세요.");
                message.reply({
                    embeds: [embed]
                });
                return;
            }

            if(wArgv.length == 0) {
                var embed = weapons.createWeaponAscensionEmbedBrief(weapon);
                message.reply({
                    embeds: [embed]
                });
            }else if(wArgv.length == 1) {
                var level = Number(wArgv[0]);;
                var length = ascension.length;

                if(level < 1 || level > length) {
                    var embed = createNormalEmbed("캐릭터 검색 실패", `**레벨값이 올바르지 않습니다.**\n\n 레벨 범위가 1에서 ${length} 사이여야 합니다.`);
                    message.reply({
                        embeds: [embed]
                    });
                }else {
                    var embed = weapons.requiredWeaponAscensionEmbed(weapon, level, level);
                    message.reply({
                        embeds: [embed]
                    });
                }
            }
        }
    },
    slashs: async (interaction, args) => {
        var subCommand = interaction.options._subcommand;
        var search = args[0].value;
        var weapon = weapons.searchWeapon(search);
        if(subCommand == "info") {
            var embed = weapons.createWeaponEmbed(weapon);

            interaction.reply({
                embeds: [embed]
            })
        }else if(subCommand == "stat") {
            var level = args[1].value;
            var stats = weapon["stat"];
            if(!stats) {
              var embed = createNormalEmbed("무기 스탯 검색 실패", "**무기 스탯이 아직 업데이트되지 않았어요.**\n\n나중에 다시 시도해주세요.");
                interaction.reply({
                    embeds: [embed]
                })
            }else {
                var embed = weapons.createWeaponStatEmbed(weapon, level);
                interaction.reply({
                    embeds: [embed]
                })
            }
        }else if(subCommand == "ascension") {
            var ascension = weapon["ascension"];
            if(!ascension) { //error message
                var embed = createNormalEmbed("무기 돌파 검색 실패", "**무기 돌파 데이터가 아직 업데이트되지 않았어요.**\n\n나중에 다시 시도해주세요.");
                interaction.reply({
                    embeds: [embed]
                });
                return;
            }

            if(args.length == 1) {
                var embed = weapons.createWeaponAscensionEmbedBrief(weapon);
                interaction.reply({
                    embeds: [embed]
                });
            }else {
                var level = args[1].value;
                var length = ascension.length;

                if(level < 1 || level > length) {
                    var embed = createNormalEmbed("무기 검색 실패", `**레벨값이 올바르지 않습니다.**\n\n 레벨 범위가 1에서 ${length} 사이여야 합니다.`);
                    interaction.reply({
                        embeds: [embed]
                    });
                }else {
                    var embed = weapons.requiredWeaponAscensionEmbed(weapon, level, level);
                    interaction.reply({
                        embeds: [embed]
                    });
                }
            }
        }else if(subCommand == "range") {
            var begin = args[1].value;
            var end = args[2].value;
            var ascensionEmbed;
            var statEmbed;

            var max = weapon["stat"][weapon["stat"].length - 1]["last"];

            if(begin < 1 || begin > max || end < 1 || end > max) {
                var embed = createNormalEmbed("캐릭터 검색 실패", `**레벨값이 올바르지 않습니다.**\n\n 레벨 범위가 1에서 ${max} 사이여야 합니다.`);
                interaction.reply({
                    embeds: [embed]
                });
                return;
            }

            if(weapon["ascension"]) {
                ascensionEmbed = weapons.createRequiredWeaponEmbed(weapon, begin, end, 0);
            }
    
            if(weapon["stat"]) {
                statEmbed = weapons.createRequiredWeaponEmbed(weapon, begin, end, 1);
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
                        embed = weapons.createRequiredEmbed(weapon, begin, end, 1);
                    }else if(i.customId == "rangeAscension") {
                        embed = weapons.createRequiredEmbed(weapon, begin, end, 0);
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