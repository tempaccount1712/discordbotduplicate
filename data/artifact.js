const {MessageEmbed} = require("discord.js");

const artifacts = {
  //5성
  "검투사의 피날레": {
    name: "검투사의 피날레",
    level: [4, 5],
    set2: "공격력 +18%",
    set4: "해당 성유물 세트를 장착한 캐릭터가 한손검, 양손검, 장병기를 사용 시 캐릭터의 일반공격으로 가하는 피해가 35% 증가한다.",
    get: ["안드리우스, 풍마룡 드발린, 타르탈리아(보스), 필드보스, 나선비경 보상"],
    keyword: ["검투"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/b1/Item_Gladiator%27s_Nostalgia.png/revision/latest/scale-to-width-down/256?cb=20201120063313",
  },
  "절연의 기치": {
    name: "절연의 기치",
    level: [4, 5],
    set2: "원소 충전 효율+20%",
    set4: "원소 폭발로 가하는 피해가 원소 충전 효율의 25%만큼 증가한다. 해당 방식으로 최대 75%까지 증가할 수 있다.",
    get: ["비경: 단풍의 정원"],
    keyword: ["절연","기치"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/53/Item_Magnificent_Tsuba.png/revision/latest/scale-to-width-down/256?cb=20210721030125",
  },
  "추억의 시메카자리": {
    name: "추억의 시메카자리",
    level: [4, 5],
    set2: "공격력 +18%",
    set4: "원소 전투 스킬 발동 후, 캐릭터의 원소 에너지가 15pt와 같거나 높을 경우, 15pt의 원소 에너지를 잃는다. 그 후 10초 동안 일반 공격, 강공격, 낙하 공격으로 가하는 피해가 50% 증가한다.",
    get: ["비경: 단풍의 정원"],
    keyword: ["추억","시메","시메카자리","시메자카리"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Item_Entangling_Bloom.png/revision/latest/scale-to-width-down/256?cb=20210721030058",
  },
  "대지를 유랑하는 악단": {
    name: "대지를 유랑하는 악단",
    level: [4, 5],
    set2: "원소 마스터리+80pt",
    set4: "해당 성유물 세트를 장착한 캐릭터가 법구 또는 활을 사용시 캐릭터의 강공격으로 가하는 피해가 35% 증가한다.",
    get: ["안드리우스, 풍마룡 드발린, 타르탈리아(보스), 필드보스, 나선비경 보상"],
    keyword: ["악단"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/ad/Item_Troupe%27s_Dawnlight.png/revision/latest/scale-to-width-down/256?cb=20201120063930",
  },
  "번개 같은 분노": {
    name: "번개 같은 분노",
    level: [4, 5],
    set2: "번개 원소 피해 15%",
    set4: "과부하, 감전, 초전도 반응이 주는 피해가 40% 증가한다. 원소 반응 발동 시 원소 스킬의 재사용 대기시간이 1초 줄어든다. 해당 효과는 0.8초마다 1번 발동한다.",
    get: ["비경: 한 여름의 정원"],
    keyword: ["번분"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/57/Item_Thunderbird%27s_Mercy.png/revision/latest/scale-to-width-down/256?cb=20201120064634",
  },
  "뇌명을 평정한 존자": {
    name: "뇌명을 평정한 존자",
    level: [4, 5],
    set2: "번개 원소 내성 +40%",
    set4: "번개 원소의 영향을 받은 적에게 가하는 피해가 35% 증가한다.",
    get: ["비경: 한 여름의 정원"],
    keyword: ["뇌명"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/ef/Item_Thundersoother%27s_Heart.png/revision/latest/scale-to-width-down/256?cb=20201120065517",
  },
  "청록색 그림자": {
    name: "청록색 그림자",
    level: [4, 5],
    set2: "바람 원소 피해 +15%",
    set4: "확산 반응이 가하는 피해가 60% 증가한다. 확산되는 원소 타입에 따라 피해 범위 내 적의 해당 원소의 내성이 40% 감소한다. 지속 시간: 10초.",
    get: ["비경: 각인의 골짜기"],
    keyword: ["청록"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/90/Item_In_Remembrance_of_Viridescent_Fields.png/revision/latest/scale-to-width-down/256?cb=20201120064508",
  },
  "사랑받는 소녀": {
    name: "사랑받는 소녀",
    level: [4, 5],
    set2: "캐릭터가 주는 치유 효과 +15%",
    set4: "원소 전투 스킬 또는 원소폭발 발동 후 10초 동안 파티 내 모든 캐릭터가 받는 치유 효과가 20% 증가한다.",
    get: ["비경: 각인의 골짜기"],
    keyword: ["소녀"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/d/dc/Item_Maiden%27s_Distant_Love.png/revision/latest/scale-to-width-down/256?cb=20201120063428",
  },
  "유구한 반암": {
    name: "유구한 반암",
    level: [4, 5],
    set2: "바위 원소 피해 보너스를 15% 획득한다",
    set4: "바위 원소 반응으로 만들어진 결정을 획득 시 파티 내 모든 캐릭터는 해당 원소 피해 보너스를 35% 획득한다. 지속 시간: 10초. 이러한 효과로 1가지의 원소 피해 보너스만 획득할 수 있다.",
    get: ["비경: 하늘을 찌르는 땅"],
    keyword: ["반암"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/9f/Item_Flower_of_Creviced_Cliff.png/revision/latest/scale-to-width-down/256?cb=20201120064841",
  },
  "날아오르는 유성": {
    name: "날아오르는 유성",
    level: [4, 5],
    set2: "보호막 강화 효과가 35% 상승한다",
    set4: "보호막이 존재 시 추가로 일반 공격과 강공격 보너스를 40% 획득한다.",
    get: ["비경: 하늘을 찌르는 땅"],
    keyword: ["유성"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/a6/Item_Summer_Night%27s_Bloom.png/revision/latest/scale-to-width-down/256?cb=20201120064133",
  },
  "불타오르는 화염의 마녀": {
    name: "불타오르는 화염의 마녀",
    level: [4, 5],
    set2: "불 원소 피해 +15%",
    set4: "과부하, 연소 반응이 적에게 주는 피해가 40% 증가하고 증발, 융해 반응의 보너스 계수가 15% 증가한다. 원소 전투 스킬 발동 후 10초 동안 2세트의 효과가 50% 증가한다. 최대 중첩수: 3회.",
    get: ["비경: 무망 인구 밀궁"],
    keyword: ["마녀"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Item_Witch%27s_Flower_of_Blaze.png/revision/latest/scale-to-width-down/256?cb=20201120065356",
  },
  "불 위를 걷는 현인": {
    name: "불 위를 걷는 현인",
    level: [4, 5],
    set2: "불 원소 내성 +40%",
    set4: "불 원소의 영향을 받은 적에게 가하는 피해가 35% 증가한다.",
    get: ["비경: 무망 인구 밀궁"],
    keyword: ["현인"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/b5/Item_Lavawalker%27s_Resolution.png/revision/latest/scale-to-width-down/256?cb=20201120065116",
  },
  "피에 물든 기사도": {
    name: "피에 물든 기사도",
    level: [4, 5],
    set2: "가하는 물리 피해가 25% 증가한다",
    set4: "적을 처치한 후 10초 동안 강공격 사용 시 스태미나를 소모하지 않고 강공격으로 가하는 피해가 50% 증가한다.",
    get: ["비경: 화지 산굴"],
    keyword: ["기사","기사도"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/5b/Item_Bloodstained_Flower_of_Iron.png/revision/latest/scale-to-width-down/256?cb=20201120063726",
  },
  "옛 왕실의 의식": {
    name: "옛 왕실의 의식",
    level: [4, 5],
    set2: "원소폭발로 가하는 피해가 20% 증가한다",
    set4: "원소폭발 발동 후 파티 내 모든 캐릭터의 공격력이 20% 증가한다. 지속 시간: 12초. 해당 효과는 중첩되지 않는다.",
    get: ["비경: 화지 산굴"],
    keyword: ["왕실"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Royal_Flora.png/revision/latest/scale-to-width-down/256?cb=20201120063610",
  },
  "얼음바람 속에서 길잃은 용사": {
    name: "얼음바람 속에서 길잃은 용사",
    level: [4, 5],
    set2: "얼음 원소 피해 보너스+15%",
    set4: "얼음 원소의 영향을 받은 적을 공격 시 치명타 확률이 20% 증가한다. 만약 적이 빙결 상태라면 치명타 확률이 추가로 20% 증가한다.",
    get: ["비경: 빈다그니르의 정상"],
    keyword: ["얼음"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/69/Item_Snowswept_Memory.png/revision/latest/scale-to-width-down/256?cb=20201225230245",
  },
  "몰락한 마음": {
    name: "몰락한 마음",
    level: [4, 5],
    set2: "물 원소 피해+15%",
    set4: "원소전투 스킬 발동 후 15초 동안 일반 공격과 강공격으로 가하는 피해가 30% 증가한다.",
    get: ["비경: 빈다그니르의 정상"],
    keyword: ["몰락"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/40/Item_Gilded_Corsage.png/revision/latest/scale-to-width-down/256?cb=20201225230417",
  },
  "견고한 천암": {
    name: "견고한 천암",
    level: [4, 5],
    set2: "HP +20%",
    set4: "원소 전투 스킬로 적 명중 시 파티 내 주변 모든 캐릭터의 공격력이 20% 증가하고 보호막 강화 효과가 30% 증가한다. 지속 시간 3초. 이 효과는 0.5초마다 최대 1번 발동한다. 해당 성유물을 장착한 캐릭터가 대기 상태일 때도 효과가 발동된다.",
    get: ["비경: 산등성이의 파수꾼"],
    keyword: ["천암"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/51/Item_Flower_of_Accolades.png/revision/latest/scale-to-width-down/256?cb=20210416205617",
  },
  "창백의 화염": {
    name: "창백의 화염",
    level: [4, 5],
    set2: "가하는 물리 피해가 25% 증가한다",
    set4: "원소 전투 스킬로 적 명중 시 공격력이 9% 증가한다. 지속 시간: 7초, 최대 중첩 수: 2회. 해당 효과는 0.3초마다 1번 발동한다. 최대 중첩 시 2세트 효과가 100% 상승한다.",
    get: ["비경: 산등성이의 파수꾼"],
    keyword: ["창백"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/e7/Item_Stainless_Bloom.png/revision/latest/scale-to-width-down/256?cb=20210416205644",
  },
  //3-4성
  "행자의 마음": {
    name: "행자의 마음",
    level: [3, 4],
    set2: "공격력 +18%",
    set4: "강공격의 치명타 확률 +30%",
    get: ["비경: 한 여름의 정원"],
    keyword: ["행자"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/fc/Item_Heart_of_Comradeship.png/revision/latest/scale-to-width-down/256?cb=20201120055604",
  },
  "기적": {
    name: "기적",
    level: [3, 4],
    set2: "모든 원소 내성 +20%",
    set4: "받은 원소 공격에 대응하는 원소의 내성이 30% 증가한다. 지속 시간: 10초. 해당 효과는 10초마다 1번 발동한다",
    get: ["비경: 각인의 골짜기"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/68/Item_Tiny_Miracle%27s_Flower.png/revision/latest/scale-to-width-down/256?cb=20201120060259",
  },
  "전쟁광": {
    name: "전쟁광",
    level: [3, 4],
    set2: "치명타 확률 +12%",
    set4: "HP 70% 미만 시 치명타 확률이 추가로 24% 증가한다.",
    get: ["안드리우스, 풍마룡 드발린, 타르탈리아(보스), 필드보스, 나선비경 보상"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/c1/Item_Berserker%27s_Rose.png/revision/latest/scale-to-width-down/256?cb=20201120053934",
  },
  "교관": {
    name: "교관",
    level: [3, 4],
    set2: "원소 마스터리 +80pt",
    set4: "원소 반응 후 파티 내 모든 캐릭터의 원소 마스터리가 120pt 증가한다. 지속 시간: 8초.",
    get: ["안드리우스, 풍마룡 드발린, 타르탈리아(보스), 필드보스, 나선비경 보상"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/35/Item_Instructor%27s_Brooch.png/revision/latest/scale-to-width-down/256?cb=20201120053706",
  },
  "유배자": {
    name: "유배자",
    level: [3, 4],
    set2: "원소 충전 효율 +20%",
    set4: "원소폭발 발동 후 2초마다 파티 내 기타 캐릭터의 원소 에너지를 2pt 회복한다. 해당 효과는 6초간 지속하며 중첩되지 않는다.",
    get: ["안드리우스, 풍마룡 드발린, 타르탈리아(보스), 필드보스, 나선비경 보상"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f9/Item_Exile%27s_Flower.png/revision/latest/scale-to-width-down/256?cb=20201120054137",
  },
  "수호자의 마음": {
    name: "수호자의 마음",
    level: [3, 4],
    set2: "방어력 +30%",
    set4: "파티 내에 다른 원소 타입의 캐릭터가 1명 존재할 때마다 대응하는 원소의 내성을 30% 획득한다.",
    get: ["비경: 무망 인구 밀궁"],
    keyword: ["수호자"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/63/Item_Guardian%27s_Flower.png/revision/latest/scale-to-width-down/256?cb=20201120055924",
  },
  "용사의 마음": {
    name: "용사의 마음",
    level: [3, 4],
    set2: "공격력 +18%",
    set4: "HP가 50%를 초과하는 적에게 가하는 피해가 30% 증가한다.",
    get: ["비경: 하늘을 찌르는 땅"],
    keyword: ["용사"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/9e/Item_Medal_of_the_Brave.png/revision/latest/scale-to-width-down/256?cb=20201120062546",
  },
  "무인": {
    name: "무인",
    level: [3, 4],
    set2: "일반 공격과 강공격으로 주는 피해가 15% 증가한다",
    set4: "원소 전투 스킬 발동 후 8초 동안 일반 공격과 강공격으로 가하는 피해가 25% 증가한다.",
    get: ["비경: 무망 인구 밀궁"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/a7/Item_Martial_Artist%27s_Red_Flower.png/revision/latest/scale-to-width-down/256?cb=20201120055759",
  },
  "노름꾼": {
    name: "노름꾼",
    level: [3, 4],
    set2: "원소 전투 스킬로 주는 피해가 20% 증가한다",
    set4: "적을 처치하면 100%의 확률로 원소 전투 스킬의 재사용 대기시간이 초기화된다. 해당 효과는 15초마다 1번 발동한다.",
    get: ["비경: 화지 산굴"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/39/Item_Gambler%27s_Brooch.png/revision/latest/scale-to-width-down/256?cb=20201120062914",
  },
  "학사": {
    name: "학사",
    level: [3, 4],
    set2: "원소 충전 효율 +20%",
    set4: "원소 에너지 획득 시 파티 내 모든 활과 법구를 사용하는 캐릭터는 원소 에너지를 추가로 +3pt 회복한다. 해당 효과는 3초마다 1번 발동한다.",
    get: ["비경: 화지 산굴"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/e5/Item_Scholar%27s_Bookmark.png/revision/latest/scale-to-width-down/256?cb=20201120063103",
  },
  "불을 모시는 자": {
    name: "불을 모시는 자",
    level: [3, 4],
    set1: "받는 불 원소 부여 효과 지속 시간이 40% 감소한다.",
    get: ["토벌: 폭염 나무"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/18/Item_Tiara_of_Flame.png/revision/latest/scale-to-width-down/256?cb=20201120054540",
  },
  "물을 모시는 자": {
    name: "물을 모시는 자",
    level: [3, 4],
    set1: "받는 물 원소 부여 효과 지속 시간이 40% 감소한다.",
    get: ["토벌: 물의 정령"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/0a/Item_Tiara_of_Torrents.png/revision/latest/scale-to-width-down/256?cb=20201120054713",
  },
  "뇌명을 모시는 자": {
    name: "뇌명을 모시는 자",
    level: [3, 4],
    set1: "받는 번개 원소 부여 효과 지속 시간이 40% 감소한다.",
    get: ["토벌: 무상의 뇌전"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Item_Tiara_of_Thunder.png/revision/latest/scale-to-width-down/256?cb=20201120054405",
  },
  "얼음을 모시는 자": {
    name: "얼음을 모시는 자",
    level: [3, 4],
    set1: "받는 얼음 원소 부여 효과 지속 시간이 40% 감소한다.",
    get: ["토벌: 얼음 나무, 무상의 얼음"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/14/Item_Tiara_of_Frost.png/revision/latest/scale-to-width-down/256?cb=20201120054507",
  }
}

function searchArtifact(string) {
  string = string.replace(/\s/g, "");

  for(var i in artifacts) {
    var name = i.replace(/\s/g, "");
    var keyword = artifacts[i]["keyword"] ? artifacts[i]["keyword"].map(x => x.replace(/\s/g, "")) : [];
    if(string == name || keyword.indexOf(string) >= 0) {
      return artifacts[i];
    }
  }
  return false;
}

function createArtifactEmbed(data) {
  var embed = new MessageEmbed();
  embed.setTitle(data["name"] + " [" + data["level"].map(x => x + "성").join(", ") + "]");
  embed.setThumbnail(data["image"]);
  var description = "**2세트 옵션**\n"
  description += data["set2"] + "\n";
  description += "\n**4세트 옵션\n**";
  description += data["set4"] + "\n";
  description += "\n";
  description += "**획득처**: " + data["get"].join(", ");
  embed.setDescription(description);
  embed.setColor("#ffffff");
  return embed;
}

module.exports.artifacts = artifacts;
module.exports.searchArtifact = searchArtifact;
module.exports.createArtifactEmbed = createArtifactEmbed;
