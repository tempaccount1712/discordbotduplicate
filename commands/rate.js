const { MessageEmbed } = require("discord.js");
const axios = require("axios");
const {opt, rateArtifact, rateColor} = require("../data/calc.js");
module.exports = {
    cmd: "평가",
    find: (text) => text.startsWith("평가"),
    description: "원신 성유물을 평가하는 커맨드",
    requireCookie: false,
    requiredPermissions: ['SEND_MESSAGES', 'EMBED_LINKS', 'VIEW_CHANNEL'],
    execute: (message, args) => {
        var url;
        var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);
        var type = false;
        var weight_replace;
        var weight_obj = {};
        args = args.replace("평가", "").trim();
        
        if(args.length > 0) {
            args = args.split(" ");
        }else {
            args = [];
        }
        if(message.attachments.size == 1) {
          url = message.attachments.first().proxyURL;
        }else if(args.length > 0 && args[0].match(regex) && message.attachments.size == 0) {
          url = args[0]
          type = true;
        }

        //change weight
        if(!type && args.length > 0) {
          weight_replace = args.join(" ").split(",");
        }else if(type && args.length > 1) {
          weight_replace = args.slice(1).join(" ").split(",");
        }

        if(weight_replace) {
          for(var i = 0; i < weight_replace.length; i++) {
            var split = weight_replace[i].split("=");
            var key;
            var check = split[0].replace(/\s/g, "").toLowerCase();
            if(check == "hp") {
              key = "HP";
            }else if(check == "hp%") {
              key = "HP%";
            }else if(check == "방어력") {
              key = "방어력";
            }else if(check == "방어력%") {
              key = "방어력%";
            }else if(check == "공격력") {
              key = "공격력";
            }else if(check == "공격력%") {
              key = "공격력%";
            }else if(check == "원소충전효율") {
              key = "원소 충전 효율%";
            }else if(check == "원소마스터리") {
              key = "원소 마스터리";
            }else if(check == "물리피해보너스") {
              key = "물리 피해 보너스%";
            }else if(check == "원소피해보너스") {
              key = "원소 피해 보너스%";
            }else if(check == "치명타확률") {
              key = "치명타 확률%";
            }else if(check == "치명타피해") {
              key = "치명타 피해%";
            }else if(check == "치유보너스") {
              key = "치유 보너스%";
            }
            if(check) {
              weight_obj[key]=Number(split[1]);
            }else {
              message.reply("존재하지 않는 스탯입니다.");
              return;
            }
          }
        }

        if(url) {
          url = url.replace("cdn.discordapp.com", "media.discordapp.net")

          axios.post("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBjMlLsA06uvRty3oPRXFZbScfvg4ffdRk", {
            "requests":[
              {
                "image":{
                  "source":{
                    "imageUri":url
                  }
                },
                "features":[
                  {
                    "type":"TEXT_DETECTION",
                    "maxResults":1
                  }
                ]
              }
            ]
          }).then(function(result) {
            var txt = result["data"]["responses"][0]["fullTextAnnotation"]["text"]
            txt = txt.split("\n");

            for(var i = 0; i < txt.length; i++) {
              txt[i] = txt[i].replace(/[^가-힣|H|P|%|0-9|+|.|\s]/g, "").trim();
              if(txt[i].startsWith(".")) {
                txt[i] = txt[i].substring(1);
              }

              if(txt[i].endsWith(".")) {
                txt[i] = txt[i].substring(0, txt[i].length - 1);
              }
            }


            var level;
            var options = {};
            var holder;
            for(var i = 0; i < txt.length; i++) {
              var key = txt[i];
              for(var j = 0; j < opt.length; j++) {
                var replace_key = key.replace(/\s/g, "");
                var opt_key = opt[j].replace(/\s/g, "");
                if(replace_key == opt_key) {
                  key = opt[j];
                }
              };

              if(txt[i].indexOf("세트") >= 0) {
                break;
              }

              if(key.startsWith("+") && !isNaN(txt[i].substring(1, key.length))) { //level
                level = Number(txt[i].replace("+", ""));
              }else if(opt.indexOf(key) >= 0) {
                holder = key;
              }else if(i < txt[i].length - 1 && txt[i].replace(/\s/g, "").indexOf("원소피해") >= 0 && txt[i+1].replace(/\s/g, "").indexOf("보너스") >= 0) {
                holder = txt[i].split(" ")[0] + " 원소 피해 보너스";
              }else if(txt[i].replace(/\s/g, "").indexOf("원소피해보너스") >= 0) {
                holder = txt[i];
              }else if(holder != undefined && !isNaN(key.replace("%", ""))) {
                if(key.indexOf("%") >= 0) {
                  options[holder + "%"] = Number(key.replace("%", ""));
                }else {
                  options[holder] = Number(key);
                }
                holder = undefined;
              }else if(key.indexOf("+") > 0) {
                var dicts = key.split("+");
                var k = dicts[0];
                var v = dicts[1];
                for(var j = 0; j < opt.length; j++) {
                  var replace_key = k.replace(/\s/g, "");
                  var opt_key = opt[j].replace(/\s/g, "");
                  if(replace_key == opt_key) {
                    k = opt[j];
                  }
                }

                if(v.indexOf("%") >= 0 && !isNaN(v.replace("%", ""))) {
                  options[k + "%"] = Number(v.replace("%", ""));
                }else {
                  options[k] = Number(v);
                }
              }
            }

            var res = rateArtifact(level, options, weight_obj);
            var score = res[0];
            var main_score = res[1];
            var main_weight = res[2];
            var sub_score = res[3];
            var sub_weight = res[4];

            console.log(res);

            if(!isNaN(score) && !isNaN(main_score) && !isNaN(main_weight) && !isNaN(sub_score) && !isNaN(sub_weight)) {
              const embed = new MessageEmbed();
              embed.setTitle("성유물 평가 결과");
              var description = "";
              description += "**성유물 레벨: " + level + "**\n";

              var m = true;
              for(var i in options) {
                if(m) {
                  description += "**";
                }
                if(i.charAt(i.length - 1) == "%") {
                  description += i.substring(0, i.length - 1) + ": " + options[i] + "%";
                  if(m) {
                    description += "** (주 스탯)";
                  }
                  description += "\n";
                }else {
                  description += i + ": " + options[i];
                  if(m) {
                    description += "** (주 스탯)";
                  }
                  description += "\n";
                }
                m = false;
              }

              description += "\n";
              description += "**최종 스코어: " + Math.floor(score * (main_weight + sub_weight)) + " (" + score.toFixed(2) + "%)**\n";
              description += "메인 스탯 레이팅: " + Math.floor(main_score * main_weight) + " (" + main_score.toFixed(2) + "%)\n";
              description += "서브 스탯 레이팅: " + Math.floor(sub_score + sub_weight) + " (" + sub_score.toFixed(2) + "%)";

              if(score <= 50) {
                description = "**성유물 상태: 나쁨**\n\n" + description;
                embed.setColor(rateColor["bad"]);
              }else if(score > 50 && score <= 75) {
                description = "**성유물 상태: 좋음**\n\n" + description;
                embed.setColor(rateColor["good"]);
              }else {
                description = "**성유물 상태: 최상**\n\n" + description;
                embed.setColor(rateColor["great"]);
              }

              embed.setDescription(description);

              message.reply({
                  embeds: [embed]
              });
            }else {
              message.reply("사진을 읽는데 실패했습니다.");
            }
          });
        }
    },
    slashs: (interaction, args) => {
        interaction.reply({
            content: "a"
        })
    }
}