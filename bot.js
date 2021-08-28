"use strict"
const {Client, Intents, Permissions, Collection} = require("discord.js");
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] });
const process = require("process");
const axios = require("axios");
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.commands = new Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

process.on("unhandledRejection", function(reason, promise) {
  console.log(promise, reason);
});

client.on("ready", async function(message) {
  console.log("Bot running from background"); //상태메세지
  client.user.setActivity('!페이몬');
}); 

client.on("interactionCreate", async (interaction) => {
  if(!interaction.isCommand()) return;

  var command = interaction.commandName.toLowerCase();
  var argv = interaction.options._hoistedOptions;
  var search = client.commands.get(command);

  if(search) {
    var channel = interaction.member.guild.channels.cache.get(interaction.channelId);
    var permissions = channel.permissionsFor(interaction.member.guild.me);
    var plists = permissions.serialize();
    console.log(command);
    if(permissions.has(search.requiredPermissions)) {
      await search.slashs(interaction, argv);
    }else {
      var missing = [];
      for(var i = 0; i < required.length; i++) {
        if(!plists[required[i]]) {
          missing.push(required[i]);
        }
      }

      if(permissions.has("SEND_MESSAGES") && permissions.has("EMBED_LINKS")){
        const embed = createPermissionEmbed(missing);
        interaction.reply({
          embeds: [embed]
        });
      }else if(permissions.has("SEND_MESSAGES")) {
        const text = createPermissionText(missing);
        interaction.reply({
          content: text
        });
      }
    }
    return;
  }
});

client.on("messageCreate", function(message) {
  if(message.content.startsWith("!") && message.channel.type == "GUILD_TEXT") {
    var cmd = message.content.replace("!", "").trim();
    const command = client.commands.find(x => {
      if(x["find"] != undefined) {
        return x.find(cmd);
      }
    });

    //search for permission
    if(command) {
      console.log(cmd);
      var permissions = message.channel.permissionsFor(message.guild.me);
      var plists = permissions.serialize();
      if(permissions.has(command.requiredPermissions)) {
        command.execute(message, cmd, client);
      }else {
        var missing = [];
        for(var i = 0; i < required.length; i++) {
          if(!plists[required[i]]) {
            missing.push(required[i]);
          }
        }

        if(permissions.has("SEND_MESSAGES") && permissions.has("EMBED_LINKS")){
          const embed = createPermissionEmbed(missing);
          interaction.reply({
            embeds: [embed]
          });
        }else if(permissions.has("SEND_MESSAGES")) {
          const text = createPermissionText(missing);
          interaction.reply({
            content: text
          });
        }
      }
    }
  }

});

client.login(process.env.TOKEN);
