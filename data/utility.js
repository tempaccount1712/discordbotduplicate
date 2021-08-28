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
  CREATE_INSTANT_INVITE: "초대 코드 만들기",
  KICK_MEMBERS: "멤버 추방하기",
  BAN_MEMBERS: "멤버 차단하기",
  ADMINISTRATOR: "관리자",
  MANAGE_CHANNELS: "채널 관리하기",
  MANAGE_GUILD: "서버 관리하기",
  ADD_REACTIONS: "반응 추가하기",
  VIEW_AUDIT_LOG: "감사 로그 보기",
  PRIORITY_SPEAKER: "우선 발언권",
  STREAM: "동영상",
  VIEW_CHANNEL: "채널 보기",
  SEND_MESSAGES: "메세지 보내기",
  SEND_TTS_MESSAGES: "텍스트 음성 변환 메세지 전송",
  MANAGE_MESSAGES: "메세지 관리",
  EMBED_LINKS: "링크 첨부",
  ATTACH_FILES: "파일 첨부",
  READ_MESSAGE_HISTORY: "메시지 기록 보기",
  MENTION_EVERYONE: "@everyone, @here, 모든 역할 멘션하기",
  USE_EXTERNAL_EMOJIS: "외부 이모티콘 사용",
  VIEW_GUILD_INSIGHTS: "false",
  CONNECT: "연결",
  SPEAK: "말하기",
  MUTE_MEMBERS: "멤버들의 마이크 음소거하기",
  DEAFEN_MEMBERS: "멤버의 헤드셋 음소거하기",
  MOVE_MEMBERS: "멤버 이동",
  USE_VAD: "음성 감지 사용",
  CHANGE_NICKNAME: "별명 변경하기",
  MANAGE_NICKNAMES: "별명 관리하기",
  MANAGE_ROLES: "역할 관리하기",
  MANAGE_WEBHOOKS: "웹후크 관리하기",
  MANAGE_EMOJIS: "이모티콘 및 스티커 관리"
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
    embed.setTitle("💫 " + data["nickname"] +"님의 나선비경 전적");
    embed.setColor("#ffffff");
    var val = data["actual"];
    var description = `
**이번 시즌**: ${val["total_star"]}★
**최고 기록**: ${val["max_floor"]}`;
    embed.setDescription(description);

    for(var i = 0; i < val["floors"].length; i++) {
      var title = `🔸 ${val["floors"][i]["index"]}층 (${val["floors"][i]["star"]}★)`;
      var txt = "";
      for(var j = 0; j < val["floors"][i]["levels"].length; j++) {
        var max_stars = val["floors"][i]["levels"][j]["max_star"];
        var stars = val["floors"][i]["levels"][j]["star"];
        txt += `\n${val["floors"][i]["index"]}-${val["floors"][i]["levels"][j]["index"]} ${"★".repeat(stars)}${"☆".repeat(max_stars - stars)}`;
      }
      embed.addField(title, txt, false);
    }
    return embed;
  }else if(number >= 1 && number <= 4) {
    var embed = new MessageEmbed();
    var val = data["actual"];
    var floor = val["floors"][number - 1];
    var num = floor["index"];
    embed.setTitle("💫 " + data["nickname"] +"님의 나선비경 전적");
    embed.setColor("#ffffff");
    embed.setDescription(`${num}층 (${floor["star"]}★)`);
    for(var i = 0; i < floor["levels"].length; i++) {
      var room = floor["levels"][i];
      var subnum = room["index"];
      var battle = room["battles"];
      var description = "";
      for(var j = 0; j < battle.length; j++) {
        description += "**" + ["전반", "후반"][j] + ":**\n";
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
            description += `${rarity}★ ${name} (${level}레벨)\n`;
        }
      }
      embed.addField(`🔸${num}층-${subnum}번방 (${room["star"]}★)`,description, false);
    }
    return embed;
  }

}
async function createInfoEmbed(cookie) {
  var fetch = await get_user_stats(cookie);
  var val = fetch["actual"];
  var embed = new MessageEmbed();
  embed.setTitle(fetch["nickname"] +"님의 데이터");
  var description = `**모험레벨**: ${fetch["level"]}
**활동일수:** ${val["stats"]["active_day_number"]}
**획득한 캐릭터 개수:**: ${val["avatars"].length}
**업적 달성 개수**: ${val["stats"]["achievement_number"]}

**보물상자**
화려한 보물상자: ${val["stats"]["luxurious_chest_number"]}
진귀한 보물상자: ${val["stats"]["precious_chest_number"]}
정교한 보물상자: ${val["stats"]["exquisite_chest_number"]}
평범한 보물상자: ${val["stats"]["common_chest_number"]}

**탐험**
바람 신의 눈동자: ${val["stats"]["anemoculus_number"]}
바위 신의 눈동자: ${val["stats"]["geoculus_number"]}
번개 신의 눈동자: ${val["stats"]["electroculus_number"]}
워프포인트 활성화: ${val["stats"]["way_point_number"]}
비경 개방: ${val["stats"]["domain_number"]}

**월드 탐사**
`
  for(var i = val["world_explorations"].length - 1; i >= 0; i--) {
    var explorations = val["world_explorations"][i];
    description += explorations["name"] + ": " + String(explorations["exploration_percentage"] / 10) + "% (평판 Lv." + explorations["level"] + ")";
    description += "\n";
  };
  embed.setDescription(description);
  embed.setColor("#ffffff");
  return embed;
}

function getCharacter(val) {
  var char = val["name"];
  var charEl = val["element"];
  if(char == "여행자") {
    if(charEl == "Anemo") {
      char = "바람행자";
    }else if(charEl == "Geo") {
      char = "바위행자";
    }else if(charEl == "Electro") {
      char = "번개행자";
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
  embed.setTitle(fetch["nickname"] + "님의 캐릭터 목록");
  embed.setColor("#ffffff");
  var description = "";
  if(lists["Pyro"]) {
    description += "**불: **" + lists["Pyro"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  if(lists["Hydro"]) {
    description += "**물: **" + lists["Hydro"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  if(lists["Anemo"]) {
    description += "**바람: **" + lists["Anemo"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  if(lists["Electro"]) {
    description += "**번개: **" + lists["Electro"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  if(lists["Cryo"]) {
    description += "**얼음: **" + lists["Cryo"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  if(lists["Geo"]) {
    description += "**바위: **" + lists["Geo"].map(x => "`" + x + "`").join(", ");
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
    if(name == "여행자" && character == "여행자") {
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

  embed.setTitle(fetch["nickname"] + "님의 " + target["name"] + " 데이터");
  embed.setThumbnail(target["icon"]);
  embed.setColor("#ffffff");
  var description = "";
  description += `**레벨:** \`${targetData["level"]}\``;
  description += "\n";
  description += `**호감도:** \`${targetData["fetter"]}레벨\``;
  description += "\n";
  description += `**무기:** \`${targetData["weapon"]["name"]} ${targetData["weapon"]["rarity"]}★ (${targetData["weapon"]["level"]}레벨 ${targetData["weapon"]["affix_level"]}제련)\``;
  description += "\n";
  description += `**세트 옵션:** ${options.length == 0 ? "`없음`": options.map(x => "`" + x["name"] + " (" + x["amount"] + ")`").join(", ")}`;
  description += "\n\n";
  description += "**기초스탯**";
  description += "\n";
  description += `HP: \`${stat[0]}\``;
  description += "\n";
  description += `공격력: \`${stat[1]}\``;
  description += "\n";
  description += `방어력: \`${stat[2]}\``;
  description += "\n";
  description += `${target["bonus"]}: \`${stat[3] + ((target["bonusType"] == "percent") ? "%":"")}\``;
  embed.setDescription(description);
  embed.setFooter("*성유물, 무기 미착용");
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
  embed.setTitle("권한 에러");
  embed.setColor("#ffffff");
  var txt = "권한이 부족합니다.";
  txt += "\n\n";
  txt += "서버 설정에 들어가 " + required.map(x => "`" + permissions[x] + "(" + x + ")" + "`").join(", ") + "를 활성화 해주세요.";
  embed.setDescription(txt);
  return embed;
};

function createPermissionText(required) {
  var txt = "권한이 부족합니다.";
  txt += "\n\n";
  txt += "서버 (아니면 채널) 설정에 들어가 " + required.map(x => "`" + permissions[x] + "(" + x + ")" + "`").join(", ") + "를 활성화 해주세요.";
  return txt;
}

function createRedeemMessage(obj) {
  const embed = new MessageEmbed();
  if(obj.retcode == 0) {
    embed.setTitle("리딤코드 입력 성공");
    embed.setDescription("성공적으로 리딤코드를 사용하였어요.");
  }else {
    embed.setTitle("리딤코드 입력 실패");
    embed.setDescription("리딤코드 입력에 실패하였어요.\n\n" + "`" + obj.message + "`");
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
