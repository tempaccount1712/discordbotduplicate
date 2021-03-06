const {Client, MessageEmbed, Collection } = require("discord.js");
const {searchCharacter, calculateLevelStat} = require("../data/character.js");
const https = require("https");
const axios = require("axios");

const httpsAgent= new https.Agent({
  rejectUnauthorized: false,
  keepAlive: true
})

var md5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

var permissions = {
  CREATE_INSTANT_INVITE: "?????? ?????? ?????????",
  KICK_MEMBERS: "?????? ????????????",
  BAN_MEMBERS: "?????? ????????????",
  ADMINISTRATOR: "?????????",
  MANAGE_CHANNELS: "?????? ????????????",
  MANAGE_GUILD: "?????? ????????????",
  ADD_REACTIONS: "?????? ????????????",
  VIEW_AUDIT_LOG: "?????? ?????? ??????",
  PRIORITY_SPEAKER: "?????? ?????????",
  STREAM: "?????????",
  VIEW_CHANNEL: "?????? ??????",
  SEND_MESSAGES: "????????? ?????????",
  SEND_TTS_MESSAGES: "????????? ?????? ?????? ????????? ??????",
  MANAGE_MESSAGES: "????????? ??????",
  EMBED_LINKS: "?????? ??????",
  ATTACH_FILES: "?????? ??????",
  READ_MESSAGE_HISTORY: "????????? ?????? ??????",
  MENTION_EVERYONE: "@everyone, @here, ?????? ?????? ????????????",
  USE_EXTERNAL_EMOJIS: "?????? ???????????? ??????",
  VIEW_GUILD_INSIGHTS: "false",
  CONNECT: "??????",
  SPEAK: "?????????",
  MUTE_MEMBERS: "???????????? ????????? ???????????????",
  DEAFEN_MEMBERS: "????????? ????????? ???????????????",
  MOVE_MEMBERS: "?????? ??????",
  USE_VAD: "?????? ?????? ??????",
  CHANGE_NICKNAME: "?????? ????????????",
  MANAGE_NICKNAMES: "?????? ????????????",
  MANAGE_ROLES: "?????? ????????????",
  MANAGE_WEBHOOKS: "????????? ????????????",
  MANAGE_EMOJIS: "???????????? ??? ????????? ??????"
};

function parseCookie(cookies) {
  cookies = cookies.replace(/\"/gi, "");
  const output = {};
  cookies.split(/\s*;\s*/).forEach((pair) => {
    pair = pair.split(/\s*=\s*/);
    output[pair[0]] = pair.splice(1).join('=');
  });
  return output;
}
function createCode(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
function generate_ds_token() {
    var salt = "6cqshh5dhw73bzxn20oexa9k516chk7s";
    var d = new Date();
    var t = Math.floor(d.getTime()/1000);
    var r = createCode(6);
    var key = `salt=${salt}&t=${t}&r=${r}`
    var h = md5(encodeURI(key));
    return `${t},${r},${h}`;
}
async function fetch_endpoint(method, url, cookie, extra) {
  if(url.indexOf("http") == -1) {
    url = "https://bbs-api-os.hoyolab.com/" + url;
  }

  var config = {
    url: url,
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      "x-rpc-app_version": "1.5.0",
      "x-rpc-client_type": "4",
      "x-rpc-language": "ko-kr",
      'ds': generate_ds_token(),
      Cookie: cookie
    },
    method: method,
    httpsAgent : httpsAgent,
  };

  config = Object.assign({}, config, extra);

  var val = await axios.request(config);
  return val;
}
async function check_user_data(cookie) {
  var parse = parseCookie(cookie);
  if(parse["ltuid"] && parse["ltoken"]) {
    var test = await get_user_stats(cookie);
    if(!test["actual"]) {
      return -1;
    } else {
      return 0;
    }
  }else {
    return -2;
  }
}

async function get_user_data(cookie) {
  var gid = parseCookie(cookie)["ltuid"];
  var val = await fetch_endpoint("get", "game_record/card/wapi/getGameRecordCard", cookie, {
    params: {
      "uid": gid,
      "gids": 2
    }
  });

  if(val.data.data && val.data.data["list"]) {
    return val.data.data["list"][0];
  }
}
async function get_userid(cookie) {
  var val = await get_user_data(cookie);
  return val["game_role_id"];
}
async function get_region(cookie) {
  var fetch = await get_user_data(cookie);
  if(!fetch["game_role_id"]) {
    console.log(fetch);
    console.log(cookie);
  }

  var uid = fetch["game_role_id"];
  var nickname = fetch["nickname"];
  var level = fetch["level"];
  var server = {
        1:'cn_gf01',
        5:'cn_qd01',
        6:'os_usa',
        7:'os_euro',
        8:'os_asia',
        9:'os_cht',
  };
  return {
    "actual": server[Number(String(uid)[0])],
    "id": uid,
    "nickname": nickname,
    "level": level
  }
}
async function get_user_stats(cookie) {
  var fetch = await get_region(cookie);
  var region = fetch["actual"];
  var id = fetch["id"];
  var nickname = fetch["nickname"];
  var level = fetch["level"];

  var val = await fetch_endpoint("get", "game_record/genshin/api/index", cookie, {
    params: {
      "server": region,
      "role_id": id
    }
  });
  return {
    "actual":val.data.data,
    "id": id,
    "nickname": nickname,
    "region": region,
    "level": level
  }
}

async function redeemCode(cookie, code) {
  var fetch = await get_region(cookie);
  var id = fetch["id"];
  var region = fetch["actual"];

  var val = await fetch_endpoint("get", "https://hk4e-api-os.mihoyo.com/common/apicdkey/api/webExchangeCdkey", cookie, {
    params: {
      "uid": id,
      "region": region,
      "cdkey": code,
      "game_biz": "hk4e_global",
      "lang": "ko"
    }
  });

  return val.data;
}

async function get_characters(cookie) {
  var fetch = await get_user_stats(cookie);
  var region = fetch["region"];
  var id = fetch["id"];
  var data = fetch["actual"];
  var nickname = fetch["nickname"];
  var level = fetch["level"];
  var character_ids = [];
  for(var i = 0; i < data["avatars"].length; i++) {

    character_ids.push(data["avatars"][i]["id"]);
  }


  var val = await fetch_endpoint("post", "game_record/genshin/api/character", cookie, {
    "data": {
      "character_ids": character_ids,
      "role_id": id,
      "server": region
    }
  });

  return {
    "actual": val.data.data["avatars"],
    "id": id,
    "nickname": nickname,
    "region": region,
    "level": level
  }
}
async function get_abyss(cookie) {
  var fetch = await get_user_stats(cookie);
  var region = fetch["region"];
  var id = fetch["id"];
  var nickname = fetch["nickname"];
  var level = fetch["level"];
  var avatars = fetch["actual"]["avatars"];

  var val = await fetch_endpoint("get", "game_record/genshin/api/spiralAbyss", cookie, {
    "data": {
      "server": region,
      "role_id": id,
      "schedule_type": 1
    }
  });

  return {
    "actual": val.data.data,
    "id": id,
    "nickname": nickname,
    "region": region,
    "level": level,
    "avatars": avatars
  }
}
async function claimReward(cookie) {
  var fetch = await get_region(cookie);
  var id = fetch["id"];
  var region = fetch["actual"];

  var val = await fetch_endpoint("post", "https://hk4e-api-os.mihoyo.com/event/sol/sign", cookie, {
    "data": {
      "uid": id,
      "region": region,
      "act_id":"e202102251931481",
      "lang": "ko-kr"
    }
  });
  return val.data.retcode;
}
async function returnAbyssEmbed(data, number) {
  var avatars = data["avatars"];
  if(number == 0) {
    var embed = new MessageEmbed();
    embed.setTitle("???? " + data["nickname"] +"?????? ???????????? ??????");
    embed.setColor("#ffffff");
    var val = data["actual"];
    var description = `
**?????? ??????**: ${val["total_star"]}???
**?????? ??????**: ${val["max_floor"]}`;
    embed.setDescription(description);

    for(var i = 0; i < val["floors"].length; i++) {
      var title = `???? ${val["floors"][i]["index"]}??? (${val["floors"][i]["star"]}???)`;
      var txt = "";
      for(var j = 0; j < val["floors"][i]["levels"].length; j++) {
        var max_stars = val["floors"][i]["levels"][j]["max_star"];
        var stars = val["floors"][i]["levels"][j]["star"];
        txt += `\n${val["floors"][i]["index"]}-${val["floors"][i]["levels"][j]["index"]} ${"???".repeat(stars)}${"???".repeat(max_stars - stars)}`;
      }
      embed.addField(title, txt, false);
    }
    return embed;
  }else if(number >= 1 && number <= 4) {
    var embed = new MessageEmbed();
    var val = data["actual"];
    var floor = val["floors"][number - 1];
    var num = floor["index"];
    embed.setTitle("???? " + data["nickname"] +"?????? ???????????? ??????");
    embed.setColor("#ffffff");
    embed.setDescription(`${num}??? (${floor["star"]}???)`);
    for(var i = 0; i < floor["levels"].length; i++) {
      var room = floor["levels"][i];
      var subnum = room["index"];
      var battle = room["battles"];
      var description = "";
      for(var j = 0; j < battle.length; j++) {
        description += "**" + ["??????", "??????"][j] + ":**\n";
        var chars = battle[j]["avatars"]
        for(var k = 0; k < chars.length; k++) {
            var name;
            var level = chars[k]["level"];
            var rarity = chars[k]["rarity"];
            var id = chars[k]["id"];
            for(var s = 0; s < avatars.length; s++) { 
              var aId = avatars[s]["id"];
              if(id == aId) {
                name = avatars[s]["name"];
              }
            }
            description += `${rarity}??? ${name} (${level}??????)\n`;
        }
      }
      embed.addField(`????${num}???-${subnum}?????? (${room["star"]}???)`,description, false);
    }
    return embed;
  }

}
async function createInfoEmbed(cookie) {
  var fetch = await get_user_stats(cookie);
  var val = fetch["actual"];
  var embed = new MessageEmbed();
  embed.setTitle(fetch["nickname"] +"?????? ?????????");
  var description = `**????????????**: ${fetch["level"]}
**????????????:** ${val["stats"]["active_day_number"]}
**????????? ????????? ??????:**: ${val["avatars"].length}
**?????? ?????? ??????**: ${val["stats"]["achievement_number"]}

**????????????**
????????? ????????????: ${val["stats"]["luxurious_chest_number"]}
????????? ????????????: ${val["stats"]["precious_chest_number"]}
????????? ????????????: ${val["stats"]["exquisite_chest_number"]}
????????? ????????????: ${val["stats"]["common_chest_number"]}

**??????**
?????? ?????? ?????????: ${val["stats"]["anemoculus_number"]}
?????? ?????? ?????????: ${val["stats"]["geoculus_number"]}
?????? ?????? ?????????: ${val["stats"]["electroculus_number"]}
??????????????? ?????????: ${val["stats"]["way_point_number"]}
?????? ??????: ${val["stats"]["domain_number"]}

**?????? ??????**
`
  for(var i = val["world_explorations"].length - 1; i >= 0; i--) {
    var explorations = val["world_explorations"][i];
    description += explorations["name"] + ": " + String(explorations["exploration_percentage"] / 10) + "% (?????? Lv." + explorations["level"] + ")";
    description += "\n";
  };
  embed.setDescription(description);
  embed.setColor("#ffffff");
  return embed;
}

function getCharacter(val) {
  var char = val["name"];
  var charEl = val["element"];
  if(char == "?????????") {
    if(charEl == "Anemo") {
      char = "????????????";
    }else if(charEl == "Geo") {
      char = "????????????";
    }else if(charEl == "Electro") {
      char = "????????????";
    }
  }
  return char;
}

async function getCharactersAllEmbed(cookie) {
  var fetch = await get_characters(cookie);
  var val = fetch["actual"];
  var lists = {};
  const embed = new MessageEmbed();
  for(var i = 0; i < val.length; i++) {
    var char = val[i]["name"];
    var type = val[i]["element"];
    if(lists[type] == undefined) {
      lists[type] = [];
    }
    lists[type].push(char);
  }
  embed.setTitle(fetch["nickname"] + "?????? ????????? ??????");
  embed.setColor("#ffffff");
  var description = "";
  if(lists["Pyro"]) {
    description += "**???: **" + lists["Pyro"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  if(lists["Hydro"]) {
    description += "**???: **" + lists["Hydro"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  if(lists["Anemo"]) {
    description += "**??????: **" + lists["Anemo"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  if(lists["Electro"]) {
    description += "**??????: **" + lists["Electro"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  if(lists["Cryo"]) {
    description += "**??????: **" + lists["Cryo"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  if(lists["Geo"]) {
    description += "**??????: **" + lists["Geo"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  embed.setDescription(description);
  return embed;
}

async function getCharacterEmbed(cookie, character) {
  var fetch = await get_characters(cookie);
  var val = fetch["actual"];
  var target;
  var targetData;
  const embed = new MessageEmbed();
  for(var i = 0; i < val.length; i++) {
    var name = val[i]["name"];
    var char = searchCharacter(name);
    if(name == "?????????" && character == "?????????") {
      name = getCharacter(val[i]);
      target = searchCharacter(name);
      targetData = val[i];
    }else if(searchCharacter(character) == searchCharacter(name)) {
      target = char;
      targetData = val[i];
    }
  }

  if(!target) return;

  var stat = calculateLevelStat(target, target["level"]);
  if(stat.length == 3) {
    stat = stat[1];
  }

  var sets = {};
  var options = [];
  for(var i = 0; i < targetData["reliquaries"].length; i++) {
    var key = targetData["reliquaries"][i]["set"]["name"];
    if(sets[key] == undefined) {
      sets[key] = 1;
    }else {
      sets[key] += 1;
    }
  }
  for(var i in sets) {
    if(sets[i] == 2 || sets[i] == 4) {
      options.push({
        name: i,
        amount: sets[i]
      });
    }
  };

  embed.setTitle(fetch["nickname"] + "?????? " + target["name"] + " ?????????");
  embed.setThumbnail(target["icon"]);
  embed.setColor("#ffffff");
  var description = "";
  description += `**??????:** \`${targetData["level"]}\``;
  description += "\n";
  description += `**?????????:** \`${targetData["fetter"]}??????\``;
  description += "\n";
  description += `**??????:** \`${targetData["weapon"]["name"]} ${targetData["weapon"]["rarity"]}??? (${targetData["weapon"]["level"]}?????? ${targetData["weapon"]["affix_level"]}??????)\``;
  description += "\n";
  description += `**?????? ??????:** ${options.length == 0 ? "`??????`": options.map(x => "`" + x["name"] + " (" + x["amount"] + ")`").join(", ")}`;
  description += "\n\n";
  description += "**????????????**";
  description += "\n";
  description += `HP: \`${stat[0]}\``;
  description += "\n";
  description += `?????????: \`${stat[1]}\``;
  description += "\n";
  description += `?????????: \`${stat[2]}\``;
  description += "\n";
  description += `${target["bonus"]}: \`${stat[3] + ((target["bonusType"] == "percent") ? "%":"")}\``;
  embed.setDescription(description);
  embed.setFooter("*?????????, ?????? ?????????");
  return embed;
}

function createNormalEmbed(title, text) {
  const embed = new MessageEmbed();
  embed.setTitle(title);
  embed.setDescription(text);
  embed.setColor("#ffffff");
  return embed;
}

function createPermissionEmbed(required) {
  var embed = new MessageEmbed();
  embed.setTitle("?????? ??????");
  embed.setColor("#ffffff");
  var txt = "????????? ???????????????.";
  txt += "\n\n";
  txt += "?????? ????????? ????????? " + required.map(x => "`" + permissions[x] + "(" + x + ")" + "`").join(", ") + "??? ????????? ????????????.";
  embed.setDescription(txt);
  return embed;
};

function createPermissionText(required) {
  var txt = "????????? ???????????????.";
  txt += "\n\n";
  txt += "?????? (????????? ??????) ????????? ????????? " + required.map(x => "`" + permissions[x] + "(" + x + ")" + "`").join(", ") + "??? ????????? ????????????.";
  return txt;
}

function createRedeemMessage(obj) {
  const embed = new MessageEmbed();
  if(obj.retcode == 0) {
    embed.setTitle("???????????? ?????? ??????");
    embed.setDescription("??????????????? ??????????????? ??????????????????.");
  }else {
    embed.setTitle("???????????? ?????? ??????");
    embed.setDescription("???????????? ????????? ??????????????????.\n\n" + "`" + obj.message + "`");
  }

  embed.setColor("#ffffff");
  return embed;
}

module.exports.parseCookie = parseCookie;
module.exports.check_user_data = check_user_data;
module.exports.get_user_data = get_user_data;
module.exports.get_userid = get_userid;
module.exports.get_region = get_region;
module.exports.get_user_stats = get_user_stats;
module.exports.get_characters = get_characters;
module.exports.get_abyss = get_abyss;
module.exports.claimReward = claimReward;
module.exports.returnAbyssEmbed = returnAbyssEmbed;
module.exports.createNormalEmbed = createNormalEmbed;
module.exports.createInfoEmbed = createInfoEmbed;
module.exports.getCharactersAllEmbed = getCharactersAllEmbed;
module.exports.getCharacterEmbed = getCharacterEmbed;
module.exports.createPermissionEmbed = createPermissionEmbed;
module.exports.createPermissionText = createPermissionText;
module.exports.redeemCode = redeemCode;
module.exports.createRedeemMessage = createRedeemMessage;
