const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const getConnection = require('../db.js');
const { getPickupEmbed } = require("../data/pickup.js");
const { IntegrationApplication } = require("discord.js");
const wait = require('util').promisify(setTimeout);

module.exports = {
    name: "pickup",
    cmd: "기원",
    find: (text) => text == "픽업",
    description: "원신 픽업 관련 정보 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL'],
    execute: async (message, args) => {
        const row = new MessageActionRow().addComponents(
            new MessageButton().setCustomId('charPickup').setLabel('캐릭터 픽업 기원').setStyle('PRIMARY'),
            new MessageButton().setCustomId('wpPickup').setLabel('무기 픽업 기원').setStyle('SECONDARY'),
            new MessageButton().setCustomId('normalPickup').setLabel('일반 기원').setStyle('SECONDARY'),
		); //buttons

        var embed = getPickupEmbed(0); //default embed

        var msg = await message.reply({
            embeds: [embed],
            components: [row]
        });

        const filter = (i) => { //valid input 
            console.log(i);
            i.deferUpdate();
            return ["charPickup", "wpPickup", "normalPickup"].includes(i.customId) && i.member.user.id == message.author.id;
        }

        const collector = msg.createMessageComponentCollector({ filter, componentType: 'BUTTON', time: 60000 });

        collector.on('collect', async (i) => {
            console.log(i);
            if(i.customId == "charPickup") {
                embed = getPickupEmbed(0);
            }else if(i.customId == "wpPickup") {
                embed = getPickupEmbed(1);
            }else if(i.customId == "normalPickup") {
                embed = getPickupEmbed(2);
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
    },
    slashs: async (interaction, args) => {
		const row = new MessageActionRow().addComponents(
            new MessageButton().setCustomId('charPickup').setLabel('캐릭터 픽업 기원').setStyle('PRIMARY'),
            new MessageButton().setCustomId('wpPickup').setLabel('무기 픽업 기원').setStyle('SECONDARY'),
            new MessageButton().setCustomId('normalPickup').setLabel('일반 기원').setStyle('SECONDARY'),
		); //buttons

        var embed = getPickupEmbed(0); //default embed

        interaction.reply({
            embeds: [embed],
            components: [row]
        });

        var msg = await interaction.fetchReply();

        const filter = (i) => { //valid input 
            i.deferUpdate();
            return ["charPickup", "wpPickup", "normalPickup"].includes(i.customId) && i.member.user.id == interaction.member.user.id;
        }

        const collector = msg.createMessageComponentCollector({ filter, componentType: 'BUTTON', time: 60000 });

        collector.on('collect', async (i) => {
            if(i.customId == "charPickup") {
                embed = getPickupEmbed(0);
            }else if(i.customId == "wpPickup") {
                embed = getPickupEmbed(1);
            }else if(i.customId == "normalPickup") {
                embed = getPickupEmbed(2);
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
    }
}