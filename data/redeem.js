const {MessageEmbed} = require("discord.js");

var redeem = [
  ["50원석 영웅의 경험x3", "genshingift"],
]

module.exports.createRedeemEmbed = function() {
  const embed = new MessageEmbed();
  embed.setTitle("리딤코드");
  for(var i = 0; i < redeem.length; i++) {
    if(typeof(redeem[i][1] == "string")) {
      embed.addField("**"+redeem[i][0]+"**", "`" + redeem[i][1] + "`");
    }else {
      embed.addField("**"+redeem[i][0]+"**", redeem[i][1].map(x => "`" + x + "`").join("\n"));
    }
  }
  embed.addField("리딤코드 입력하는 곳", "https://genshin.mihoyo.com/m/ko/gift");
  embed.setColor("#ffffff");
  return embed;
}
