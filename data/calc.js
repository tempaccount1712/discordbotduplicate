const weights = {
  "HP": 0,
  "공격력": 0.5,
  "공격력%": 1,
  "원소 충전 효율%": 0.5,
  "원소 마스터리": 0.5,
  "물리 피해 보너스%": 1,
  "치명타 확률%": 1,
  "치명타 피해%": 1,
  "원소 피해 보너스%": 1,
  "HP%": 0,
  "방어력%": 0,
  "방어력": 0,
  "치유 보너스%": 0
}

const min_main = {
  "HP": 717.0,
  "공격력": 47.0,
  "공격력%": 7.0,
  "원소 충전 효율%": 7.8,
  "원소 마스터리": 28.0,
  "물리 피해 보너스%": 8.7,
  "치명타 확률%": 4.7,
  "치명타 피해%": 9.3,
  "원소 피해 보너스%": 7.0,
  "HP%": 7.0,
  "방어력%": 8.7,
  "치유 보너스%": 5.4
}

const max_main = {
  "HP": 4780.0,
  "공격력": 311.0,
  "공격력%": 46.6,
  "원소 충전 효율%": 51.8,
  "원소 마스터리": 187.0,
  "물리 피해 보너스%": 58.3,
  "치명타 확률%": 31.1,
  "치명타 피해%": 62.2,
  "원소 피해 보너스%": 46.6,
  "HP%": 46.6,
  "방어력%": 58.3,
  "치유 보너스%": 35.9
}

const substats = {
  "공격력": 19.0,
  "원소 마스터리": 23.0,
  "원소 충전 효율%": 6.5,
  "공격력%": 5.8,
  "치명타 확률%": 3.9,
  "치명타 피해%": 7.8,
  "방어력": 23.0,
  "HP": 299.0,
  "방어력%": 7.3,
  "HP%": 5.8
}

var opt = ['HP', '공격력', '원소 충전 효율', '원소 마스터리', '물리 피해 보너스', '치명타 확률', '치명타 피해', 'HP', '방어력', '치유 보너스'];

var rateColor = {
  "bad": "#3498db",
  "good": "#9c59b6",
  "great": "#e67e22"
}

var elements = ["불", "물", "바람", "번개", "풀", "얼음", "바위"];

function SortW(weightsS, lvl, kk){
  var newArr = [];

  var w1 = []; // weight = 1
  var w2 = []; // weight = 0.5
  var w3 = []; // weight = 0

  var items = ['HP', '공격력', '공격력%', '원소 충전 효율%', '원소 마스터리', '치명타 확률%', '치명타 피해%', 'HP%', '방어력%', '방어력'];

  for (var q=0;q<items.length;q++){
    if(weightsS[items[q]] == 1){
      w1.push([ items[q] , weightsS[items[q]] ]);

    }else if (weightsS[items[q]] == 0.5){

      w2.push([ items[q] , weightsS[items[q]] ]);
    }else if (weightsS[items[q]] == 0){

      w3.push([ items[q] , weightsS[items[q]] ]);
    }
  }

  newArr = w1.concat(w2);
  newArr = newArr.concat(w3);
  var _sub_weight = 0.0;

  var count = 0;
  for(var z=0;z<newArr.length;z++){
    if (newArr[z][0]==kk)
      continue;

    if (count == 0){
      _sub_weight += newArr[z][1] * (1 + lvl / 4);
    }else{
      _sub_weight += newArr[z][1];

    }
    count += 1;

    if (count == 4)
        break;

  }
  return _sub_weight;

}

function rateArtifact(level, re, wr) {
  var main = false;
  var main_score = 0.0;
  var sub_score = 0.0;
  var sub_weight = 0;
  var main_weight = 3 + level / 4;

  var sorted = Object.entries(weights)
      .sort(([,a],[,b]) => b-a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  for(var i in weights) {
    if(!wr[i]) {
      wr[i] = weights[i];
    }
  }

  for(var i in re) {
    var stat = i;
    var value = re[i];
    var key = stat.split(" ").join("").indexOf("원소피해보너스%") >= 0  ? "원소 피해 보너스%" : stat

    if(main == false) {
      main = true;
      var mxmain = max_main[key] - (max_main[key] - min_main[key]) * (1 - level / 20.0);
      main_score = value / mxmain * wr[key] * main_weight;

      if (key == "공격력" || key == "HP") {
        main_weight *= wr[key];
      }
      sub_weight = SortW(wr, level, key)
    }else {
      //console.log(key, substats[key], weights[key]);
      sub_score += value / substats[key] * wr[key];
      //console.log(sub_score);
    }
  }



  var main_score_p = (main_weight>0)? main_score / main_weight * 100 : 100;
  var main_score_p = (main_score_p > 99)? 100 : main_score_p;
  var sub_score_p = (sub_weight>0)? sub_score / sub_weight * 100 : 100;
  var score = parseInt(main_score + sub_score);
  var score_p= (main_score + sub_score) / (main_weight + sub_weight) * 100;

  return [score_p, main_score_p, main_weight, sub_score_p, sub_weight];
}

module.exports.opt = opt;
module.exports.rateColor = rateColor;
module.exports.rateArtifact = rateArtifact;
