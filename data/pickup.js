const {MessageEmbed} = require("discord.js")

const c_pickup = {
  image: "https://uploadstatic-sea.mihoyo.com/contentweb/20210807/2021080717452736570.jpg",
  duration: "2021년 08월 10일(화) 19:00 ~ 2021년 08월 31일(화) 15:59",
  fivestar: "요이미야",
  fourstar: ["사유", "디오나", "신염"]
}
const w_pickup = {
  image: "https://uploadstatic-sea.mihoyo.com/contentweb/20210807/2021080718362955769.jpg",
  duration: "2021년 8월 10일(수) 19:00 ~ 2021년 8월 31일 15:59",
  fivestar: "비뢰의 고동, 천공의 검",
  fourstar: ["제례검", "빗물 베기", "용학살창", "제례의 악장", "페보니우스 활"]
}
const g_pickup = {
  image: "https://genshin.gamedot.org/file/archive?id=702",
  duration: "2020년 9월 15일(화) ~ 영구 지속"
}

module.exports.getPickupEmbed = function (number) {
  var embed = new MessageEmbed();
  if(number == 0) {
    embed.setTitle("캐릭터 기원");
    embed.setImage(c_pickup["image"]);
    var field = `**기간:** ${c_pickup["duration"]}
**5성 픽업:** ${c_pickup["fivestar"]}
**4성 픽업:** ${c_pickup["fourstar"].join(", ")}`;
    embed.setDescription(field);
  }else if(number == 1) {
    embed.setTitle("무기 기원");
    embed.setImage(w_pickup["image"]);
    var field = `**기간**: ${w_pickup["duration"]}
**5성 픽업:** ${w_pickup["fivestar"]}
**4성 픽업:** ${w_pickup["fourstar"].join(", ")}`;
    embed.setDescription(field);
  }else if(number == 2) {
    embed.setTitle("일반 기원");
    embed.setImage(g_pickup["image"]);
    embed.setDescription(`**기간**: ${g_pickup["duration"]}`);
  }
  embed.setColor("#ffffff");
  return embed;
}
