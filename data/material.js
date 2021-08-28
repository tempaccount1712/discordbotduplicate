const materials = {
  "방랑자의 경험": {
    name: "방랑자의 경험",
    class: "육성 소재",
    type: "캐릭터 경험치 소재",
    description: "캐릭터 경험치 소재, 경험치를 1000PT 획득할 수 있다.",
    level: 2,
    drop: ["지맥의 꽃", "보물상자"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/60/Item_Wanderer%27s_Advice.png/revision/latest/scale-to-width-down/256?cb=20201116222406"
  },
  "모험가의 경험": {
    name: "방랑자의 경험",
    class: "육성 소재",
    type: "캐릭터 경험치 소재",
    description: "캐릭터 경험치 소재, 경험치를 5000PT 획득할 수 있다.",
    level: 3,
    drop: ["지맥의 꽃", "보물상자"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/07/Item_Adventurer%27s_Experience.png/revision/latest/scale-to-width-down/256?cb=20201116222310"
  },
  "영웅의 경험": {
    name: "영웅의 경험",
    class: "육성 소재",
    type: "캐릭터 경험치 소재",
    description: "캐릭터 경험치 소재, 경험치를 20000PT 획득할 수 있다.",
    level: 4,
    drop: ["지맥의 꽃", "임무"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/26/Item_Hero%27s_Wit.png/revision/latest/scale-to-width-down/256?cb=20201116222208"
  },
  //특성 육성 소재
  //몬드
  "지식의 왕관": {
    name: "지식의 왕관",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 5,
    drop: "기간 한정 이벤트 보상",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/04/Item_Crown_of_Insight.png/revision/latest/scale-to-width-down/256?cb=20201115225803",
  },
  "자유의 가르침": {
    name: "「자유」의 가르침",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 2,
    drop: "숙달 비경: 서리 제단",
    day: ["월요일", "목요일", "일요일"],
    keyword: ["자유"],
    union: "자유",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Item_Teachings_of_Freedom.png/revision/latest/scale-to-width-down/256?cb=20210106071838",
  },
  "자유의 인도": {
    name: "「자유」의 인도",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 3,
    drop: "숙달 비경: 서리 제단",
    day: ["월요일", "목요일", "일요일"],
    combination: [{
      name: "자유의 가르침",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "자유",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/1a/Item_Guide_to_Freedom.png/revision/latest/scale-to-width-down/74?cb=20210106071929",
  },
  "자유의 철학": {
    name: "「자유」의 철학",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 4,
    drop: "숙달 비경: 서리제단",
    day: ["월요일", "목요일", "일요일"],
    combination:[{
      name: "자유의 인도",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "자유",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/c4/Item_Philosophies_of_Freedom.png/revision/latest/scale-to-width-down/74?cb=20210106071940",
  },
  "투쟁의 가르침": {
    name: "「투쟁」의 가르침",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 2,
    drop: "숙달 비경: 얼음에 봉인된 심연의 폐허",
    day: ["화요일", "금요일", "일요일"],
    keyword: ["투쟁"],
    union: "투쟁",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Teachings_of_Resistance.png/revision/latest/scale-to-width-down/74?cb=20210106072033",
  },
  "투쟁의 인도": {
    name: "「투쟁」의 인도",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 3,
    drop: "숙달 비경: 얼음에 봉인된 심연의 폐허",
    day: ["화요일", "금요일", "일요일"],
    combination: [{
      name: "투쟁의 가르침",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "투쟁",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Guide_to_Resistance.png/revision/latest/scale-to-width-down/74?cb=20210106072046",
  },
  "투쟁의 철학": {
    name: "「투쟁」의 철학",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 4,
    drop: "숙달 비경: 얼음에 봉인된 심연의 폐허",
    day: ["화요일", "금요일", "일요일"],
    combination: [{
      name: "투쟁의 인도",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "투쟁",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Philosophies_of_Resistance.png/revision/latest/scale-to-width-down/74?cb=20210106072058",
  },
  "시문의 가르침": {
    name: "「시문」의 가르침",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 2,
    drop: "숙달 비경: 잠들어 있는 나라",
    day: ["수요일", "토요일", "일요일"],
    keyword: ["시문"],
    union: "시문",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Item_Teachings_of_Ballad.png/revision/latest/scale-to-width-down/256?cb=20210106065412",
  },
  "시문의 인도": {
    name: "「시문」의 인도",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 3,
    drop: "숙달 비경: 잠들어 있는 나라",
    day: ["수요일", "토요일", "일요일"],
    combination: [{
      name: "시문의 가르침",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "시문",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Guide_to_Ballad.png/revision/latest/scale-to-width-down/74?cb=20210106065423",
  },
  "시문의 철학": {
    name: "「시문」의 철학",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 4,
    drop: "숙달 비경: 잠들어 있는 나라",
    day: ["수요일", "토요일", "일요일"],
    combination: [{
      name: "시문의 인도",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "시문",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_Philosophies_of_Ballad.png/revision/latest/scale-to-width-down/74?cb=20210106065347",
  },
  //리월
  "번영의 가르침": {
    name: "「번영」의 가르침",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 2,
    drop: "숙달 비경: 뜨거운 화염의 제단",
    day: ["월요일", "목요일", "일요일"],
    keyword: ["번영"],
    union: "번영",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/9e/Item_Teachings_of_Prosperity.png/revision/latest/scale-to-width-down/256?cb=20210106072137",
  },
  "번영의 인도": {
    name: "「번영」의 인도",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 3,
    drop: "숙달 비경: 뜨거운 화염의 제단",
    day: ["월요일", "목요일", "일요일"],
    combination: [{
      name: "번영의 가르침",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "번영",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/67/Item_Guide_to_Prosperity.png/revision/latest/scale-to-width-down/74?cb=20210106072143",
  },
  "번영의 철학": {
    name: "「번영」의 철학",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 4,
    drop: "숙달 비경: 뜨거운 화염의 제단",
    day: ["월요일", "목요일", "일요일"],
    combination: [{
      name: "번영의 인도",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "번영",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/bd/Item_Philosophies_of_Prosperity.png/revision/latest/scale-to-width-down/74?cb=20210106072155",
  },
  "근면의 가르침": {
    name: "「근면」의 가르침",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 2,
    drop: "숙달 비경: 깊은 화염의 끝",
    day: ["화요일", "금요일", "일요일"],
    keyword: ["근면"],
    union: "근면",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/a7/Item_Teachings_of_Diligence.png/revision/latest/scale-to-width-down/256?cb=20210106072237",
  },
  "근면의 인도": {
    name: "「근면」의 인도",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 3,
    drop: "숙달 비경: 깊은 화염의 끝",
    day: ["화요일", "금요일", "일요일"],
    combination: [{
      name: "근면의 가르침",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "근면",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/9f/Item_Guide_to_Diligence.png/revision/latest/scale-to-width-down/74?cb=20210106072243",
  },
  "근면의 철학": {
    name: "「근면」의 철학",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 4,
    drop: "숙달 비경: 깊은 화염의 끝",
    day: ["화요일", "금요일", "일요일"],
    combination: [{
      name: "근면의 인도",
      amount: 3
    }],
    union: "근면",
    combinationType: "합성 획득",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Item_Philosophies_of_Diligence.png/revision/latest/scale-to-width-down/74?cb=20210106072255",
  },
  "황금의 가르침": {
    name: "「황금」의 가르침",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 2,
    drop: "숙달 비경: 불사른 고리",
    day: ["수요일", "토요일", "일요일"],
    keyword: ["황금"],
    union: "황금",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Item_Teachings_of_Gold.png/revision/latest/scale-to-width-down/256?cb=20210106072309",
  },
  "황금의 인도": {
    name: "「황금」의 인도",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 3,
    drop: "숙달 비경: 불사른 고리",
    day: ["수요일", "토요일", "일요일"],
    combination: [{
      name: "황금의 가르침",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "황금",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/43/Item_Guide_to_Gold.png/revision/latest/scale-to-width-down/74?cb=20210106072319",
  },
  "황금의 철학": {
    name: "「황금」의 철학",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 4,
    drop: "숙달 비경: 불사른 고리",
    day: ["수요일", "토요일", "일요일"],
    combination: [{
      name: "황금의 인도",
      amount: 3
    }],
    union: "황금",
    combinationType: "합성 획득",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Item_Philosophies_of_Gold.png/revision/latest/scale-to-width-down/74?cb=20210106064435",
  },
  //이나즈마
  "부세의 가르침": {
    name: "「부세」의 가르침",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 2,
    drop: "숙달 비경: 보랏빛으로 물든 나라",
    day: ["월요일", "목요일", "일요일"],
    keyword: ["부세"],
    union: "부세",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/4e/Item_Teachings_of_Transience.png/revision/latest/scale-to-width-down/74?cb=20210721030231",
  },
  "부세의 인도": {
    name: "「부세」의 인도",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 3,
    drop: "숙달 비경: 보랏빛으로 물든 나라",
    day: ["월요일", "목요일", "일요일"],
    combination: [{
      name: "부세의 가르침",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "부세",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/b0/Item_Guide_to_Transience.png/revision/latest/scale-to-width-down/74?cb=20210721030109",
  },
  "부세의 철학": {
    name: "「부세」의 철학",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 4,
    drop: "숙달 비경: 보랏빛으로 물든 나라",
    day: ["월요일", "목요일", "일요일"],
    combination: [{
      name: "부세의 인도",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "부세",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/27/Item_Philosophies_of_Transience.png/revision/latest/scale-to-width-down/74?cb=20210721030201",
  },
  "풍아의 가르침": {
    name: "「풍아」의 가르침",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 2,
    drop: "숙달 비경: 보랏빛으로 물든 나라",
    day: ["화요일", "금요일", "일요일"],
    keyword: ["풍아"],
    union: "풍아",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f2/Item_Teachings_of_Elegance.png/revision/latest/scale-to-width-down/74?cb=20210721030228",
  },
  "풍아의 인도": {
    name: "「풍아」의 인도",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 3,
    drop: "숙달 비경: 보랏빛으로 물든 나라",
    day: ["화요일", "금요일", "일요일"],
    combination: [{
      name: "풍아의 가르침",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "풍아",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/d/df/Item_Guide_to_Elegance.png/revision/latest/scale-to-width-down/74?cb=20210721030105",
  },
  "풍아의 철학": {
    name: "「풍아」의 철학",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 4,
    drop: "숙달 비경: 보랏빛으로 물든 나라",
    day: ["화요일", "금요일", "일요일"],
    combination: [{
      name: "풍아의 인도",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "풍아",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/6f/Item_Philosophies_of_Elegance.png/revision/latest/scale-to-width-down/74?cb=20210721030157",
  },
  "천광의 가르침": {
    name: "「천광」의 가르침",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 2,
    drop: "숙달 비경: 보랏빛으로 물든 나라",
    day: ["수요일", "토요일", "일요일"],
    keyword: ["천광"],
    union: "천광",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/5e/Item_Teachings_of_Light.png/revision/latest/scale-to-width-down/74?cb=20210721030230",
  },
  "천광의 인도": {
    name: "「천광」의 인도",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 3,
    drop: "숙달 비경: 보랏빛으로 물든 나라",
    day: ["수요일", "토요일", "일요일"],
    combination: [{
      name: "천광의 가르침",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "천광",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/fe/Item_Guide_to_Light.png/revision/latest/scale-to-width-down/74?cb=20210721030107",
  },
  "천광의 철학": {
    name: "「천광」의 철학",
    class: "육성 소재",
    type: "특성 육성 소재",
    level: 4,
    drop: "숙달 비경: 보랏빛으로 물든 나라",
    day: ["수요일", "토요일", "일요일"],
    combination: [{
      name: "천광의 인도",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    union: "천광",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/95/Item_Philosophies_of_Light.png/revision/latest/scale-to-width-down/74?cb=20210721030159",
  },

  //무기 소재
  "고탑 왕의 잔해": {
    name: "고탑 왕의 잔해",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 2,
    drop: ["연무 비경: 물과 빛의 성", "몬드 기념품 상점 교환"],
    day: ["월요일", "목요일", "일요일"],
    keyword: ["고탑왕"],
    union: "고탑 왕",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/d/d7/Item_Tile_of_Decarabian%27s_Tower.png/revision/latest/scale-to-width-down/256?cb=20210109220205",
  },
  "고탑 왕의 절망": {
    name: "고탑 왕의 조각",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 3,
    combination: [{
      name: "고탑 왕의 잔해",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["월요일", "목요일", "일요일"],
    keyword: [],
    union: "고탑 왕",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/96/Item_Debris_of_Decarabian%27s_City.png/revision/latest/scale-to-width-down/74?cb=20210109220117",
  },
  "고탑 왕의 조각": {
    name: "고탑 왕의 조각",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 4,
    drop: "연무 비경: 물과 빛의 성",
    combination: [{
      name: "고탑 왕의 절망",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["월요일", "목요일", "일요일"],
    keyword: [],
    union: "고탑 왕",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/8/8a/Item_Fragment_of_Decarabian%27s_Epic.png/revision/latest/scale-to-width-down/74?cb=20210109220101",
  },
  "고탑 왕의 깨진 꿈": {
    name: "고탑 왕의 깨진 꿈",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 5,
    drop: "연무 비경: 물과 빛의 성",
    combination: [{
      name: "고탑 왕의 조각",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["월요일", "목요일", "일요일"],
    keyword: [],
    union: "고탑 왕",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Item_Scattered_Piece_of_Decarabian%27s_Dream.png/revision/latest/scale-to-width-down/74?cb=20210109220111",
  },
  "칼바람 울프의 젖니": {
    name: "칼바람 울프의 젖니",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 2,
    drop: ["연무 비경: 깊은 골짜기", "몬드 기념품 상점 교환"],
    day: ["화요일", "금요일", "일요일"],
    keyword: ["칼바람", "울프","칼바람 울프"],
    union: "칼바람 울프",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Boreal_Wolf%27s_Milk_Tooth.png/revision/latest/scale-to-width-down/256?cb=20210109220042",
  },
  "칼바람 울프의 이빨": {
    name: "칼바람 울프의 이빨",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 3,
    drop: "연무 비경: 깊은 골짜기",
    combination: [{
      name: "칼바람 울프의 젖니",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["화요일", "금요일", "일요일"],
    keyword: [],
    union: "칼바람 울프",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Boreal_Wolf%27s_Cracked_Tooth.png/revision/latest/scale-to-width-down/74?cb=20210109220038",
  },
  "칼바람 울프의 부서진 이빨": {
    name: "칼바람 울프의 부서진 이빨",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 4,
    drop: "연무 비경: 깊은 골짜기",
    combination: [{
        name: "칼바람 울프의 이빨",
        amount: 3
    }],
    combinationType: "합성 획득",
    day: ["화요일", "금요일", "일요일"],
    keyword: [],
    union: "칼바람 울프",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/98/Item_Boreal_Wolf%27s_Broken_Fang.png/revision/latest/scale-to-width-down/74?cb=20210109220033",
  },
  "칼바람 울프의 그리운 고향": {
    name: "칼바람 울프의 그리운 고향",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 5,
    drop: "연무 비경: 깊은 골짜기",
    combination: [{
      name: "칼바람 울프의 부서진 이빨",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["화요일", "금요일", "일요일"],
    keyword: [],
    union: "칼바람 울프",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Item_Boreal_Wolf%27s_Nostalgia.png/revision/latest/scale-to-width-down/74?cb=20210109220049",
  },
  "라이언 투사의 족쇄": {
    name: "라이언 투사의 족쇄",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 2,
    drop: ["연무 비경: 갈증의 폐도시", "몬드 기념품 상점 교환"],
    day: ["수요일", "토요일", "일요일"],
    keyword: ["라이언 투사"],
    union: "라이언 투사",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/05/Item_Fetters_of_the_Dandelion_Gladiator.png/revision/latest/scale-to-width-down/256?cb=20210109220002",
  },
  "라이언 투사의 쇠사슬": {
    name: "라이언 투사의 쇠사슬",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 3,
    drop: "연무 비경: 갈증의 폐도시",
    combination: [{
      name: "라이언 투사의 족쇄",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["수요일", "토요일", "일요일"],
    keyword: [],
    union: "라이언 투사",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/ad/Item_Chains_of_the_Dandelion_Gladiator.png/revision/latest/scale-to-width-down/74?cb=20210109215957",
  },
  "라이언 투사의 수갑": {
    name: "라이언 투사의 수갑",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 4,
    drop: "연무 비경: 갈증의 폐도시",
    combination: [{
      name: "라이언 투사의 쇠사슬",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["수요일", "토요일", "일요일"],
    keyword: [],
    union: "라이언 투사",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/40/Item_Shackles_of_the_Dandelion_Gladiator.png/revision/latest/scale-to-width-down/74?cb=20210109215939",
  },
  "라이언 투사의 이념": {
    name: "라이언 투사의 이념",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 5,
    drop: "연무 비경: 갈증의 폐도시",
    combination: [{
      name: "라이언 투사의 수갑",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["수요일", "토요일", "일요일"],
    keyword: [],
    union: "라이언 투사",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/b4/Item_Dream_of_the_Dandelion_Gladiator.png/revision/latest/scale-to-width-down/74?cb=20210109215951",
  },
  "고운한림의 매끄러운 모래": {
    name: "고운한림의 매끄러운 모래",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 2,
    drop: ["연무 비경: 뇌운 제단",  "리월 기념품 상점 교환"],
    day: ["월요일", "목요일", "일요일"],
    keyword: ["고운한림"],
    union: "고운한림",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Item_Luminous_Sands_from_Guyun.png/revision/latest/scale-to-width-down/256?cb=20210109215929",
  },
  "고운한림의 휘암": {
    name: "고운한림의 휘암",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 3,
    drop: "연무 비경: 뇌운 제단",
    combination: [{
      name: "고운한림의 매끄러운 모래",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["월요일", "목요일", "일요일"],
    keyword: [],
    union: "고운한림",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/cb/Item_Lustrous_Stone_from_Guyun.png/revision/latest/scale-to-width-down/74?cb=20210109220136",
  },
  "고운한림의 해골": {
    name: "고운한림의 해골",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 4,
    drop: "연무 비경: 뇌운 제단",
    combination: [{
      name: "고운한림의 휘암",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["월요일", "목요일", "일요일"],
    keyword: [],
    union: "고운한림",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Item_Luminous_Sands_from_Guyun.png/revision/latest/scale-to-width-down/256?cb=20210109215929",
  },
  "고운한림의 신체": {
    name: "고운한림의 신체",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 5,
    drop: "연무 비경: 뇌운 제단",
    combination: [{
      name: "고운한림의 해골",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["월요일", "목요일", "일요일"],
    keyword: [],
    union: "고운한림",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Item_Divine_Body_from_Guyun.png/revision/latest/scale-to-width-down/74?cb=20210109215920",
  },
  "안개구름 속의 흑연단": {
    name: "안개구름 속의 흑연단",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 2,
    drop: ["연무 비경: 뇌명 폐허", "리월 기념품 상점 교환"],
    day: ["화요일", "금요일", "일요일"],
    keyword: ["안개구름"],
    union: "안개구름",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Item_Mist_Veiled_Lead_Elixir.png/revision/latest/scale-to-width-down/256?cb=20210109215901",
  },
  "안개구름 속의 수은단": {
    name: "안개구름 속의 수은단",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 3,
    drop: "연무 비경: 뇌명 폐허",
    combination: [{
      name: "안개구름 속의 흑연단",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["화요일", "금요일", "일요일"],
    keyword: [],
    union: "안개구름",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Item_Mist_Veiled_Mercury_Elixir.png/revision/latest/scale-to-width-down/74?cb=20210109215853",
  },
  "안개구름 속의 금단": {
    name: "안개구름 속의 금단",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 4,
    drop: "연무 비경: 뇌명 폐허",
    combination: [{
      name: "안개구름 속의 수은단",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["화요일", "금요일", "일요일"],
    keyword: [],
    union: "안개구름",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Item_Mist_Veiled_Gold_Elixir.png/revision/latest/scale-to-width-down/74?cb=20210109215906",
  },
  "안개구름 속의 전환": {
    name: "안개구름 속의 전환",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 5,
    drop: "연무 비경: 뇌명 폐허",
    combination: [{
      name: "안개구름 속의 금단",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["화요일", "금요일", "일요일"],
    keyword: [],
    union: "안개구름",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/a3/Item_Mist_Veiled_Primo_Elixir.png/revision/latest/scale-to-width-down/74?cb=20210109215849",
  },
  "흑운철 한 알": {
    name: "흑운철 한 알",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 2,
    drop: ["연무 비경: 고대 뇌전 시련장", "리월 기념품 상점 교환"],
    day: ["수요일", "토요일", "일요일"],
    keyword: ["흑운철"],
    union: "흑운철",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/47/Item_Grain_of_Aerosiderite.png/revision/latest/scale-to-width-down/74?cb=20210109220930",
  },
  "흑운철 조각": {
    name: "흑운철 조각",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 3,
    drop: "연무 비경: 고대 뇌전 시련장",
    combination: [{
      name: "흑운철 한알",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["수요일", "토요일", "일요일"],
    keyword: [],
    union: "흑운철",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Piece_of_Aerosiderite.png/revision/latest/scale-to-width-down/74?cb=20210109215813",
  },
  "흑운철 일각": {
    name: "흑운철 일각",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 4,
    drop: "연무 비경: 고대 뇌전 시련장",
    combination: [{
      name: "흑운철 조각",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["수요일", "토요일", "일요일"],
    keyword: [],
    union: "흑운철",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/48/Item_Chunk_of_Aerosiderite.png/revision/latest/scale-to-width-down/74?cb=20210109215819",
  },
  "흑운철 덩이": {
    name: "흑운철 덩이",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 5,
    drop: "연무 비경: 고대 뇌전 시련장",
    combination: [{
      name: "흑운철 일각",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["수요일", "토요일", "일요일"],
    keyword: [],
    union: "흑운철",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/48/Item_Chunk_of_Aerosiderite.png/revision/latest/scale-to-width-down/74?cb=20210109215819",
  },
  "먼바다의 산호 가지": {
    name: "먼바다의 산호 가지",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 2,
    drop: ["연무 비경: 모래의 심연", "이나즈마 기념품 상점 교환"],
    day: ["월요일", "목요일", "일요일"],
    keyword: ["먼바다"],
    union: "먼바다",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/a6/Item_Coral_Branch_of_a_Distant_Sea.png/revision/latest/scale-to-width-down/74?cb=20210721030051",
  },
  "먼바다의 옥빛 가지": {
    name: "먼바다의 옥빛 가지",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 3,
    drop: "연무 비경: 모래의 심연",
    combination: [{
      name: "먼바다의 산호 가지",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["월요일", "목요일", "일요일"],
    keyword: [],
    union: "먼바다",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/19/Item_Jeweled_Branch_of_a_Distant_Sea.png/revision/latest/scale-to-width-down/74?cb=20210721030118",
  },
  "먼바다의 마노 가지": {
    name: "먼바다의 마노 가지",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 4,
    drop: "연무 비경: 모래의 심연",
    combination: [{
      name: "먼바다의 옥빛 가지",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["월요일", "목요일", "일요일"],
    keyword: [],
    union: "먼바다",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/29/Item_Jade_Branch_of_a_Distant_Sea.png/revision/latest/scale-to-width-down/74?cb=20210721030116",
  },
  "먼바다의 금빛 가지": {
    name: "먼바다의 금빛 가지",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 5,
    drop: "연무 비경: 모래의 심연",
    combination: [{
      name: "먼바다의 마노 가지",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["월요일", "목요일", "일요일"],
    keyword: [],
    union: "먼바다",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/ee/Item_Golden_Branch_of_a_Distant_Sea.png/revision/latest/scale-to-width-down/74?cb=20210721030103",
  },
  "나루카미 어령의 은혜": {
    name: "나루카미 어령의 은혜",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 2,
    drop: ["연무 비경: 모래 제단", "이나즈마 기념품 상점 교환"],
    day: ["화요일", "금요일", "일요일"],
    keyword: ["나루카미"],
    union: "나루카미",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/40/Item_Narukami%27s_Wisdom.png/revision/latest/scale-to-width-down/74?cb=20210721030149",
  },
  "나루카미 어령의 환희": {
    name: "나루카미 어령의 환희",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 3,
    drop: "연무 비경: 모래 제단",
    combination: [{
      name: "나루카미 어령의 은혜",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["화요일", "금요일", "일요일"],
    keyword: [],
    union: "나루카미",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Item_Narukami%27s_Joy.png/revision/latest/scale-to-width-down/74?cb=20210721030145",
  },
  "나루카미 어령의 친애": {
    name: "나루카미 어령의 친애",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 4,
    drop: "연무 비경: 모래 제단",
    combination: [{
      name: "나루카미 어령의 환희",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["화요일", "금요일", "일요일"],
    keyword: [],
    union: "나루카미",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f5/Item_Narukami%27s_Affection.png/revision/latest/scale-to-width-down/74?cb=20210721030143",
  },
  "나루카미 어령의 용맹": {
    name: "나루카미 어령의 용맹",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 5,
    drop: "연무 비경: 모래 제단",
    combination: [{
      name: "나루카미 어령의 친애",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["화요일", "금요일", "일요일"],
    keyword: [],
    union: "나루카미",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/98/Item_Narukami%27s_Valor.png/revision/latest/scale-to-width-down/74?cb=20210721030147",
  },
  "금석극화의 가면": {
    name: "금석극화의 가면",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 2,
    drop: ["연무 비경: 유사의 매장", "이나즈마 기념품 상점 교환"],
    day: ["수요일", "토요일", "일요일"],
    keyword: ["금석극화"],
    union: "금석극화",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/34/Item_Mask_of_the_Wicked_Lieutenant.png/revision/latest/scale-to-width-down/74?cb=20210721030133",
  },
  "금석극화의 호교": {
    name: "금석극화의 호교",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 3,
    drop: "연무 비경: 유사의 매장",
    combination: [{
      name: "금석극화의 가면",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["수요일", "토요일", "일요일"],
    keyword: [],
    union: "금석극화",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Item_Mask_of_the_Tiger%27s_Bite.png/revision/latest/scale-to-width-down/74?cb=20210721030131",
  },
  "금석극화의 일각": {
    name: "금석극화의 일각",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 4,
    drop: "연무 비경: 유사의 매장",
    combination: [{
      name: "금석극화의 호교",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["수요일", "토요일", "일요일"],
    keyword: [],
    union: "금석극화",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/a9/Item_Mask_of_the_One-Horned.png/revision/latest/scale-to-width-down/74?cb=20210721030130",
  },
  "금석극화의 귀인": {
    name: "금석극화의 귀인",
    class: "육성 소재",
    type: "무기 돌파 소재",
    level: 5,
    drop: "연무 비경: 유사의 매장",
    combination: [{
      name: "금석극화의 일각",
      amount: 3
    }],
    combinationType: "합성 획득",
    day: ["수요일", "토요일", "일요일"],
    keyword: [],
    union: "금석극화",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/54/Item_Mask_of_the_Kijin.png/revision/latest/scale-to-width-down/74?cb=20210721030128",
  },

  //소재
  "슬라임 응축액": {
    name: "슬라임 응축액",
    class: "육성 소재",
    type: "필드 토벌",
    level: 1,
    drop: "슬라임 드랍",
    keyword: ["슬라임"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=59",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Item_Slime_Condensate.png/revision/latest/scale-to-width-down/256?cb=20210109220914",
  },
  "슬라임청": {
    name: "슬라임청",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: "Lv.40 이상 슬라임 드랍",
    combination: [{
      name: "슬라임 응축액",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=59",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Item_Slime_Secretions.png/revision/latest/scale-to-width-down/74?cb=20210109220910",
  },
  "슬라임 원액": {
    name: "슬라임 원액",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: "Lv.60 이상 슬라임 드랍",
    combination: [{
      name: "슬라임청",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=59",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/d/d8/Item_Slime_Concentrate.png/revision/latest/scale-to-width-down/74?cb=20210109220909",
  },
  "부서진 가면": {
    name: "부서진 가면",
    class: "육성 소재",
    type: "필드 토벌",
    level: 1,
    drop: ["츄츄족 드랍", "츄츄 궁수 소량 드랍", "츄츄 샤먼 소량 드랍", "건장한 츄츄족 소량 드랍"],
    keyword: ["가면"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=55",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/69/Item_Damaged_Mask.png/revision/latest/scale-to-width-down/256?cb=20210109220851",
  },
  "오염된 가면": {
    name: "오염된 가면",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: ["Lv.40 이상 츄츄족 드랍", "Lv.40 이상 츄츄 궁수 소량 드랍", "Lv.40 이상 츄츄 샤먼 소량 드랍", "Lv.40 이상 건장한 츄츄족 소량 드랍"],
    combination: [{
      name: " 부서진 가면",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=55",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Stained_Mask.png/revision/latest/scale-to-width-down/74?cb=20210109220849",
  },
  "불길한 가면": {
    name: "불길한 가면",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: ["Lv.60 이상 츄츄족 드랍", "Lv.60 이상 츄츄 궁수 소량 드랍", "Lv.60 이상 츄츄 샤먼 소량 드랍", "Lv.60 이상 건장한 츄츄족 소량 드랍"],
    combination: [{
      name: "오염된 가면",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=55",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/91/Item_Ominous_Mask.png/revision/latest/scale-to-width-down/74?cb=20210110031519",
  },
  "이능 두루마리": {
    name: "이능 두루마리",
    class: "육성 소재",
    type: "필드 토벌",
    level: 1,
    drop: "츄츄 샤먼 드랍",
    keyword: ["두루마리"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=57",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/74/Item_Divining_Scroll.png/revision/latest/scale-to-width-down/256?cb=20210106065506",
  },
  "봉마의 두루마리": {
    name: "봉마의 두루마리",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: "Lv.40 이상 츄츄 샤먼 드랍",
    combination: [{
      name: "이능 두루마리",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=57",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/91/Item_Sealed_Scroll.png/revision/latest/scale-to-width-down/74?cb=20210106065518",
  },
  "금주의 두루마리": {
    name: "금주의 두루마리",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: "Lv.60 이상 츄츄 샤먼 드랍",
    combination: [{
      name: "봉마의 두루마리",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=57",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f0/Item_Forbidden_Curse_Scroll.png/revision/latest/scale-to-width-down/74?cb=20210106065540",
  },
  "견고한 화살촉": {
    name: "견고한 화살촉",
    class: "육성 소재",
    type: "필드 토벌",
    level: 1,
    drop: "츄츄 궁수 드랍",
    keyword: ["화살촉"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=56",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Item_Firm_Arrowhead.png/revision/latest/scale-to-width-down/256?cb=20201210052906",
  },
  "날카로운 화살촉": {
    name: "날카로운 화살촉",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: "Lv.40 이상 츄츄 궁수 드랍",
    combination: [{
      name: "견고한 화살촉",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=56",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Sharp_Arrowhead.png/revision/latest/scale-to-width-down/74?cb=20201210053042",
  },
  "역전의 화살촉": {
    name: "역전의 화살촉",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: "Lv.60 이상 츄츄 궁수 드랍",
    combination: [{
      name: "날카로운 화살촉",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=56",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/22/Item_Weathered_Arrowhead.png/revision/latest/scale-to-width-down/74?cb=20201210053107",
  },
  "신병의 휘장": {
    name: "신병의 휘장",
    class: "육성 소재",
    type: "필드 토벌",
    level: 1,
    drop: "우인단 드랍",
    keyword: ["휘장"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=54",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/b2/Item_Recruit%27s_Insignia.png/revision/latest/scale-to-width-down/256?cb=20210109220719",
  },
  "사관의 휘장": {
    name: "사관의 휘장",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: "Lv.40 이상 우인단 드랍",
    combination: [{
      name: "신병의 휘장",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=54",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Item_Sergeant%27s_Insignia.png/revision/latest/scale-to-width-down/74?cb=20210109220720",
  },
  "위관의 휘장": {
    name: "위관의 휘장",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: "Lv.60 이상 우인단 드랍",
    combination: [{
      name: "사관의 휘장",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=54",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/d/db/Item_Lieutenant%27s_Insignia.png/revision/latest/scale-to-width-down/74?cb=20210109220723",
  },
  "구라구라 꽃꿀": {
    name: "구라구라 꽃꿀",
    class: "육성 소재",
    type: "필드 토벌",
    level: 1,
    drop: "구라구라꽃 드랍",
    keyword: ["꽃꿀"],
    location:"https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=47,48",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/8/8b/Item_Whopperflower_Nectar.png/revision/latest/scale-to-width-down/256?cb=20210109215225",
  },
  "반짝반짝 꽃꿀": {
    name: "반짝반짝 꽃꿀",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: "Lv.40 이상 구라구라꽃 드랍",
    combination: [{
      name: "구라구라 꽃꿀",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location:"https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=47,48",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/46/Item_Shimmering_Nectar.png/revision/latest/scale-to-width-down/74?cb=20210112155006",
  },
  "원소 꽃꿀": {
    name: "구라구라 꽃꿀",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: "Lv.60 이상 구라구라꽃 드랍",
    combination: [{
      name: "반짝반짝 꽃꿀",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location:"https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=47,48",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Energy_Nectar.png/revision/latest/scale-to-width-down/74?cb=20210112155010",
  },
  "보물찾기 까마귀 휘장": {
    name: "보물찾기 까마귀 휘장",
    class: "육성 소재",
    type: "필드 토벌",
    level: 1,
    drop: "보물 사냥단 단원 드랍",
    keyword: ["까마귀 휘장"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=58",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/c9/Item_Treasure_Hoarder_Insignia.png/revision/latest/scale-to-width-down/256?cb=20210109220643",
  },
  "실버 까마귀 휘장": {
    name: "실버 까마귀 휘장",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: "보물 사냥단 단원 드랍",
    combination: [{
      name: "보물찾기 까마귀 휘장",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=58",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/44/Item_Silver_Raven_Insignia.png/revision/latest/scale-to-width-down/74?cb=20210109220650",
  },
  "골드 까마귀 휘장": {
    name: "보물찾기 까마귀 휘장",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: "Lv.60 이상 보물 사냥단 단원 드랍",
    combination: [{
      name: "실버 까마귀 휘장",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=58",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Golden_Raven_Insignia.png/revision/latest/scale-to-width-down/74?cb=20210109220636",
  },
  "오래된 코등이": {
    name: "오래된 코등이",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: "노부시패 드랍",
    keyword: ["코등이"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=209",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/e2/Item_Old_Handguard.png/revision/latest/scale-to-width-down/256?cb=20210721030150",
  },
  "카게우치 코등이": {
    name: "카게우치 코등이",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: "노부시패 드랍",
    combination: [{
      name: "오래된 코등이",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=209",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Kageuchi_Handguard.png/revision/latest/scale-to-width-down/256?cb=20210721030121",
  },
  "명검 코등이": {
    name: "명검 코등이",
    class: "육성 소재",
    type: "필드 토벌",
    level: 4,
    drop: "노부시패 드랍",
    combination: [{
      name: "카게우치 코등이",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=209",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/4e/Item_Famed_Handguard.png/revision/latest/scale-to-width-down/256?cb=20210721030100",
  },
  "약한 뼛조각": {
    name: "약한 뼛조각",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: "새끼 바위 용 도마뱀 드랍",
    keyword: ["뼛조각"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=169",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/e5/Item_Fragile_Bone_Shard.png/revision/latest/scale-to-width-down/256?cb=20210109215139",
  },
  "단단한 뼛조각": {
    name: "단단한 뼛조각",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: "Lv.40 이상 새끼 바위 용 도마뱀 드랍",
    combination: [{
      name: "약한 뼛조각",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=169",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Item_Sturdy_Bone_Shard.png/revision/latest/scale-to-width-down/74?cb=20210109215136",
  },
  "석화한 뼛조각": {
    name: "석화한 뼛조각",
    class: "육성 소재",
    type: "필드 토벌",
    level: 4,
    drop: "Lv.60 이상 새끼 바위 용 도마뱀 드랍",
    combination: [{
      name: "단단한 뼛조각",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=169",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/60/Item_Fossilized_Bone_Shard.png/revision/latest/scale-to-width-down/74?cb=20210109215145",
  },
  "무거운 나팔": {
    name: "무거운 나팔",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: "대형 츄츄족 드랍",
    keyword: ["나팔"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=21,20,19,149,53,152",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/c0/Item_Heavy_Horn.png/revision/latest/scale-to-width-down/256?cb=20210109220828",
  },
  "흑동 나팔": {
    name: "흑동 나팔",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: "Lv.40 이상 대형 츄츄족 드랍",
    combination: [{
      name: "무거운 나팔",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=21,20,19,149,53,152",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/42/Item_Black_Bronze_Horn.png/revision/latest/scale-to-width-down/74?cb=20210109220825",
  },
  "흑수정 나팔": {
    name: "흑수정 나팔",
    class: "육성 소재",
    type: "필드 토벌",
    level: 4,
    drop: "Lv.60 이상 대형 츄츄족 드랍",
    combination: [{
      name: "흑동 나팔",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=21,20,19,149,53,152",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/64/Item_Black_Crystal_Horn.png/revision/latest/scale-to-width-down/74?cb=20210109220822",
  },
  "사냥꾼의 제도": {
    name: "사냥꾼의 제도",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: "채무 처리인 드랍",
    keyword: ["제도"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=25",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/28/Item_Hunter%27s_Sacrificial_Knife.png/revision/latest/scale-to-width-down/256?cb=20210109223410",
  },
  "특수 요원의 제도": {
    name: "특수 요원의 제도",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: "Lv.40 이상 채무 처리인 드랍",
    combination: [{
      name: "사냥꾼의 제도",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=25",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/55/Item_Agent%27s_Sacrificial_Knife.png/revision/latest/scale-to-width-down/74?cb=20210109220745",
  },
  "검사관의 제도": {
    name: "검사관의 제도",
    class: "육성 소재",
    type: "필드 토벌",
    level: 4,
    drop: "Lv.60 이상 채무 처리인 드랍",
    combination: [{
      name: "특수 요원의 제도",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=25",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/53/Item_Inspector%27s_Sacrificial_Knife.png/revision/latest/scale-to-width-down/74?cb=20210109220747",
  },
  "안개꽃 가루": {
    name: "안개꽃 가루",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: "번개 치친 술사 드랍",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=26",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Item_Mist_Grass_Pollen.png/revision/latest/scale-to-width-down/256?cb=20201210053615",
  },
  "안개풀 주머니": {
    name: "안개꽃 가루",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: "Lv.40 이상 번개 치친 술사 드랍",
    combination: [{
      name: "안개꽃 가루",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=26",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/73/Item_Mist_Grass.png/revision/latest/scale-to-width-down/74?cb=20201210053537",
  },
  "안개 등심": {
    name: "안개 등심",
    class: "육성 소재",
    type: "필드 토벌",
    level: 4,
    drop: "Lv.60 이상 번개 치친 술사 드랍",
    combination: [{
      name: "안개풀 주머니",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=26",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/90/Item_Mist_Grass_Wick.png/revision/latest/scale-to-width-down/74?cb=20201210053456",
  },
  "지맥의 낡은 가지": {
    name: "지맥의 낡은 가지",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: "심연 메이지 드랍",
    keyword: ["지맥"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=22,24,23",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/77/Item_Dead_Ley_Line_Branch.png/revision/latest/scale-to-width-down/256?cb=20210106071133",
  },
  "지맥의 마른 잎": {
    name: "지맥의 마른 잎",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: "Lv.40 이상 심연 메이지 드랍",
    combination: [{
      name: "지맥의 낡은 가지",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=22,24,23",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/d/d2/Item_Dead_Ley_Line_Leaves.png/revision/latest/scale-to-width-down/74?cb=20210106071145",
  },
  "지맥의 새싹": {
    name: "지맥의 새싹",
    class: "육성 소재",
    type: "필드 토벌",
    level: 4,
    drop: "Lv.60 이상 심연 메이지 드랍",
    combination: [{
      name: "지맥의 마른 잎",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=22,24,23",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/22/Item_Ley_Line_Sprouts.png/revision/latest/scale-to-width-down/74?cb=20210106071202",
  },
  "혼돈의 장치": {
    name: "혼돈의 장치",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: ["유적 가디언 드랍", "유적 헌터 드랍"],
    keyword: ["혼돈"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=150,27,28",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/47/Item_Chaos_Device.png/revision/latest/scale-to-width-down/256?cb=20210106072737",
  },
  "혼돈의 회로": {
    name: "혼돈의 회로",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: ["Lv.40 이상 유적 가디언 드랍", "Lv.40 이상 유적 헌터 드랍"],
    combination: [{
      name: "혼돈의 장치",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=150,27,28",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/1f/Item_Chaos_Circuit.png/revision/latest/scale-to-width-down/74?cb=20201202043130",
  },
  "혼돈의 노심": {
    name: "혼돈의 노심",
    class: "육성 소재",
    type: "필드 토벌",
    level: 4,
    drop: ["Lv.60 이상 유적 가디언 드랍", "Lv.60 이상 유적 헌터 드랍"],
    combination: [{
      name: "혼돈의 회로",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=150,27,28",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/3e/Item_Chaos_Core.png/revision/latest/scale-to-width-down/74?cb=20210106072654",
  },
  "어두운 프리즘": {
    name: "어두운 프리즘",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: "우인단 · 겨울 나라의 여인 드랍",
    keyword: ["프리즘"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=210",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/3d/Item_Dismal_Prism.png/revision/latest/scale-to-width-down/256?cb=20210721030055",
  },
  "수정 프리즘": {
    name: "수정 프리즘",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: "Lv.40 이상 우인단 · 겨울 나라의 여인 드랍",
    combination: [{
      name: "어두운 프리즘",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=210",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/fe/Item_Crystal_Prism.png/revision/latest/scale-to-width-down/256?cb=20210721030053",
  },
  "편광 프리즘": {
    name: "편광 프리즘",
    class: "육성 소재",
    type: "필드 토벌",
    level: 4,
    drop: "Lv.60 이상 우인단 · 겨울 나라의 여인 드랍",
    combination: [{
      name: "수정 프리즘",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=210",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Item_Polarizing_Prism.png/revision/latest/scale-to-width-down/74?cb=20210721030203",
  },
  "혼돈의 기관": {
    name: "혼돈의 기관",
    class: "육성 소재",
    type: "필드 토벌",
    level: 2,
    drop: "유적 기계 병사 드랍",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=215",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/17/Item_Chaos_Gear.png/revision/latest/scale-to-width-down/256?cb=20210721030048",
  },
  "혼돈의 중추": {
    name: "혼돈의 중추",
    class: "육성 소재",
    type: "필드 토벌",
    level: 3,
    drop: "Lv.40 이상 유적 기계 병사 드랍",
    combination: [{
      name: "혼돈의 기관",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=215",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Item_Chaos_Axis.png/revision/latest/scale-to-width-down/256?cb=20210721030046",
  },
  "혼돈의 눈동자": {
    name: "혼돈의 눈동자",
    class: "육성 소재",
    type: "필드 토벌",
    level: 4,
    drop: "Lv.60 이상 유적 기계 병사 드랍",
    combination: [{
      name: "혼돈의 중추",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=215",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Chaos_Oculus.png/revision/latest/scale-to-width-down/256?cb=20210721030050",
  },
  //정예토벌
  "꺼지지 않는 불씨": {
    name: "꺼지지 않는 불씨",
    class: "육성 소재",
    type: "정예 토벌",
    level: 4,
    drop: "Lv.30 이상 폭염 나무 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/b2/Item_Everflame_Seed.png/revision/latest/scale-to-width-down/74?cb=20210106071447"
  },
  "물처럼 맑은 마음": {
    name: "물처럼 맑은 마음",
    class: "육성 소재",
    type: "정예 토벌",
    level: 4,
    drop: "Lv.30 이상 물의 정령 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/02/Item_Cleansing_Heart.png/revision/latest/scale-to-width-down/74?cb=20210106071434"
  },
  "서리의 핵": {
    name: "서리의 핵",
    class: "육성 소재",
    type: "정예 토벌",
    level: 4,
    drop: "Lv.30 이상 얼음 나무 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/b5/Item_Hoarfrost_Core.png/revision/latest/scale-to-width-down/74?cb=20210106071540"
  },
  "뇌광 프리즘": {
    name: "뇌광 프리즘",
    class: "육성 소재",
    type: "정예 토벌",
    level: 4,
    drop: "Lv.30 이상 무상의 뇌전 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/ee/Item_Lightning_Prism.png/revision/latest/scale-to-width-down/74?cb=20201210053008"
  },
  "폭풍의 씨앗": {
    name: "폭풍의 씨앗",
    class: "육성 소재",
    type: "정예 토벌",
    level: 4,
    drop: "Lv.30 이상 무상의 바람 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/5e/Item_Hurricane_Seed.png/revision/latest/scale-to-width-down/74?cb=20210106075440"
  },
  "현암의 탑": {
    name: "현암의 탑",
    class: "육성 소재",
    type: "정예 토벌",
    level: 4,
    drop: "Lv.30 이상 무상의 바위 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/bc/Item_Basalt_Pillar.png/revision/latest/scale-to-width-down/74?cb=20210106071417"
  },
  "설익은 옥": {
    name: "설익은 옥",
    class: "육성 소재",
    type: "정예 토벌",
    level: 4,
    drop: "Lv.30 이상 고대 바위 용 도마뱀 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f1/Item_Juvenile_Jade.png/revision/latest/scale-to-width-down/74?cb=20210208142600"
  },
  "응결의 꽃": {
    name: "응결의 꽃",
    class: "육성 소재",
    type: "정예 토벌",
    level: 4,
    drop: "	Lv.30 이상 무상의 얼음 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f1/Item_Juvenile_Jade.png/revision/latest/scale-to-width-down/74?cb=20210208142600"
  },
  "영구 장치의 코어": {
    name: "영구 장치의 코어",
    class: "육성 소재",
    type: "정예 토벌",
    level: 4,
    drop: "Lv.30 이상 영구 장치 진영 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/c1/Item_Perpetual_Heart.png/revision/latest/scale-to-width-down/256?cb=20210721030155"
  },
  "무형의 불 구슬": {
    name: "무형의 불 구슬",
    class: "육성 소재",
    type: "정예 토벌",
    level: 4,
    drop: "Lv.30 이상 무상의 불 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/ad/Item_Smoldering_Pearl.png/revision/latest/scale-to-width-down/256?cb=20210721030219"
  },
  "꼭두각시 부품": {
    name: "꼭두각시 부품",
    class: "육성 소재",
    type: "정예 토벌",
    level: 4,
    drop: "Lv.30 이상 꼭두각시 검귀 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/1d/Item_Marionette_Core.png/revision/latest/scale-to-width-down/74?cb=20210614024202"
  },
  //주간 보스 토벌
  "동풍의 깃털": {
    name: "동풍의 깃털",
    class: "육성 소재",
    type: "주간 보스 토벌",
    level: 5,
    drop: "Lv.70 이상 풍마룡 도전 보상",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Item_Dvalin%27s_Plume.png/revision/latest/scale-to-width-down/74?cb=20210106070312"
  },
  "동풍의 발톱": {
    name: "동풍의 발톱",
    class: "육성 소재",
    type: "주간 보스 토벌",
    level: 5,
    drop: "Lv.70 이상 풍마룡 도전 보상",
    keyword: [],
    image: "https://w.namu.la/s/4cc4677e9e5cd721f1c5b68524a0c4b17c1f25f118f25e622a8f35d044bdb94a9f4500f13953a6f21ebfaabf5404d868bd9e33dc49ed7bcd5041701b8537518f8006dfa7a75ccff0279a818129783a1032c247ea9ce0ae7eaa2a399e8aa3c595"
  },
  "동풍의 숨결": {
    name: "동풍의 발톱",
    class: "육성 소재",
    type: "주간 보스 토벌",
    level: 5,
    drop: "Lv.70 이상 풍마룡 도전 보상",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/07/Item_Dvalin%27s_Sigh.png/revision/latest/scale-to-width-down/74?cb=20210106070339"
  },
  "북풍의 꼬리": {
    name: "북풍의 꼬리",
    class: "육성 소재",
    type: "주간 보스 토벌",
    level: 5,
    drop: "Lv.70 이상 풍마룡 도전 보상",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/66/Item_Tail_of_Boreas.png/revision/latest/scale-to-width-down/74?cb=20210106070608"
  },
  "북풍의 고리": {
    name: "북풍의 고리",
    class: "육성 소재",
    type: "주간 보스 토벌",
    level: 5,
    drop: "Lv.70 이상 풍마룡 도전 보상",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Item_Ring_of_Boreas.png/revision/latest/scale-to-width-down/74?cb=20210106070626"
  },
  "북풍의 영혼상자": {
    name: "북풍의 영혼상",
    class: "육성 소재",
    type: "주간 보스 토벌",
    level: 5,
    drop: "Lv.70 이상 풍마룡 도전 보상",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Item_Ring_of_Boreas.png/revision/latest/scale-to-width-down/74?cb=20210106070626   "
  },
  "하늘을 삼킨 고래뿔": {
    name: "하늘을 삼킨 고래·뿔",
    class: "육성 소재",
    type: "주간 보스 토벌",
    level: 5,
    drop: "Lv.70 이상 타르탈리아 도전 보상",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Item_Tusk_of_Monoceros_Caeli.png/revision/latest/scale-to-width-down/74?cb=20210106065134"
  },
  "마왕의 칼날 조각": {
    name: "마왕의 칼날·조각",
    class: "육성 소재",
    type: "주간 보스 토벌",
    level: 5,
    drop: "Lv.70 이상 타르탈리아 도전 보상",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/48/Item_Shard_of_a_Foul_Legacy.png/revision/latest/scale-to-width-down/74?cb=20210106065904"
  },
  "무예의 혼 고영": {
    name: "무예의 혼·고영",
    class: "육성 소재",
    type: "주간 보스 토벌",
    level: 5,
    drop: "Lv.70 이상 타르탈리아 도전 보상",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/5d/Item_Shadow_of_the_Warrior.png/revision/latest/scale-to-width-down/74?cb=20210106065852"
  },
  "용왕의 면류관": {
    name: "용왕의 면류관",
    class: "육성 소재",
    type: "주간 보스 토벌",
    level: 5,
    drop: "Lv.70 이상 야타용왕 도전 보상",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/02/Item_Dragon_Lord%27s_Crown.png/revision/latest/scale-to-width-down/74?cb=20210428025402"
  },
  "혈옥의 가지": {
    name: "혈옥의 가지",
    class: "육성 소재",
    type: "주간 보스 토벌",
    level: 5,
    drop: "Lv.70 이상 야타용왕 도전 보상",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/b1/Item_Bloodjade_Branch.png/revision/latest/scale-to-width-down/74?cb=20210428025400"
  },
  "순금의 비늘": {
    name: "순금의 비늘",
    class: "육성 소재",
    type: "주간 보스 토벌",
    level: 5,
    drop: "Lv.70 이상 야타용왕 도전 보상",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Item_Gilded_Scale.png/revision/latest/scale-to-width-down/74?cb=20210428025411"
  },
  //캐릭터 돌파
  "불타오르는 마노 가루": {
    name: "불타오르는 마노 가루",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    drop: ["폭염 나무 드랍", "기념품 상점 교환"],
    level: 2,
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/51/Item_Agnidus_Agate_Sliver.png/revision/latest/scale-to-width-down/74?cb=20210106074509"
  },
  "불타오르는 마노 조각": {
    name: "불타오르는 마노 조각",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    drop: "Lv.40 이상 폭염 나무 드랍",
    combination: [{
      name: "불타오르는 마노 가루",
      amount: 3
    }],
    combinationType: "합성 획득",
    level: 3,
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Item_Agnidus_Agate_Fragment.png/revision/latest/scale-to-width-down/74?cb=20210106074515"
  },
  "불타오르는 마노 덩이": {
    name: "불타오르는 마노 덩이",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    drop: "Lv.60 이상 폭염 나무 드랍",
    level: 4,
    combination: [{
      name: "불타오르는 마노 조각",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Item_Agnidus_Agate_Fragment.png/revision/latest/scale-to-width-down/74?cb=20210106074515"
  },
  "불타오르는 마노": {
    name: "불타오르는 마노",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    drop: "Lv.75 이상 폭염 나무 드랍",
    level: 5,
    combination: [{
      name: "불타오르는 마노 덩이",
      amount: 3
    }],
    combinationType: "합성 획득",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Agnidus_Agate_Gemstone.png/revision/latest/scale-to-width-down/74?cb=20210106074644"
  },
  "순수한 청금석 가루": {
    name: "순수한 청금석 가루",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 2,
    drop: ["물의 정령 드랍", "기념품 상점 교환"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Item_Varunada_Lazurite_Sliver.png/revision/latest/scale-to-width-down/74?cb=20210106074826"
  },
  "순수한 청금석 조각": {
    name: "순수한 청금석 조각",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 3,
    combination: [{
      name: "순수한 청금석 가루",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "Lv. 40 이상 물의 정령 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Item_Varunada_Lazurite_Fragment.png/revision/latest/scale-to-width-down/74?cb=20210106074829"
  },
  "순수한 청금석 덩이": {
    name: "순수한 청금석 덩이",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 4,
    combination: [{
      name: "순수한 청금석 조각",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "Lv. 60 이상 물의 정령 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Item_Varunada_Lazurite_Chunk.png/revision/latest/scale-to-width-down/74?cb=20210106074837"
  },
  "순수한 청금석": {
    name: "순수한 청금석",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 5,
    combination: [{
      name: "순수한 청금석 덩이",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "Lv. 75 이상 물의 정령 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Item_Varunada_Lazurite_Gemstone.png/revision/latest/scale-to-width-down/74?cb=20210106074842"
  },
  "승리의 자수정 가루": {
    name: "승리의 자수정 가루",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 2,
    drop: ["무상의 뇌전 드랍", "기념품 상점 교환"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/39/Item_Vajrada_Amethyst_Sliver.png/revision/latest/scale-to-width-down/74?cb=20210106074806"
  },
  "승리의 자수정 조각": {
    name: "승리의 자수정 조각",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 3,
    combination: [{
      name: "승리의 자수정 가루",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "Lv.40 이상 무상의 뇌전 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/cb/Item_Vajrada_Amethyst_Fragment.png/revision/latest/scale-to-width-down/74?cb=20210106074813"
  },
  "승리의 자수정 덩이": {
    name: "승리의 자수정 덩이",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 4,
    combination: [{
      name: "승리의 자수정 조각",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "Lv.60 이상 무상의 뇌전 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/c1/Item_Vajrada_Amethyst_Chunk.png/revision/latest/scale-to-width-down/74?cb=20210106074817"
  },
  "승리의 자수정": {
    name: "승리의 자수정",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 5,
    combination: [{
      name: "승리의 자수정 덩이",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "Lv.75 이상 무상의 뇌전 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Vajrada_Amethyst_Gemstone.png/revision/latest/scale-to-width-down/74?cb=20210106074821"
  },
  "자유로운 터키석 가루": {
    name: "자유로운 터키석 가루",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 2,
    drop: ["무상의 바람 드랍", "기념품 상점 교환"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/93/Item_Vayuda_Turquoise_Sliver.png/revision/latest/scale-to-width-down/74?cb=20210106074904"
  },
  "자유로운 터키석 조각": {
    name: "자유로운 터키석 조각",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 3,
    combination: [{
      name: "자유로운 터키석 가루",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "Lv.40 이상 무상의 바람 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Vayuda_Turquoise_Fragment.png/revision/latest/scale-to-width-down/74?cb=20210106074908"
  },
  "자유로운 터키석 덩이": {
    name: "자유로운 터키석 덩이",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 4,
    combination: [{
      name: "자유로운 터키석 조각",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "Lv.60 이상 무상의 바람 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Vayuda_Turquoise_Chunk.png/revision/latest/scale-to-width-down/74?cb=20210106074913"
  },
  "자유로운 터키석": {
    name: "자유로운 터키석",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 5,
    combination: [{
      name: "자유로운 터키석 덩이",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "Lv.75 이상 무상의 바람 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Item_Vayuda_Turquoise_Gemstone.png/revision/latest/scale-to-width-down/74?cb=20210106074919"
  },
  "서늘한 빙옥 가루": {
    name: "서늘한 빙옥 가루",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 2,
    drop: ["얼음 나무 드랍", "기념품 상점 교환"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/8/87/Item_Shivada_Jade_Sliver.png/revision/latest/scale-to-width-down/74?cb=20210106074748"
  },
  "서늘한 빙옥 조각": {
    name: "서늘한 빙옥 조각",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 3,
    combination: [{
      name: "서늘한 빙옥 가루",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "Lv.40 이상 얼음 나무 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Item_Shivada_Jade_Fragment.png/revision/latest/scale-to-width-down/74?cb=20210106074754"
  },
  "서늘한 빙옥 덩이": {
    name: "서늘한 빙옥 덩이",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 4,
    combination: [{
      name: "서늘한 빙옥 조각",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "Lv.60 이상 얼음 나무 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/41/Item_Shivada_Jade_Chunk.png/revision/latest/scale-to-width-down/74?cb=20210106074758"
  },
  "서늘한 빙옥": {
    name: "서늘한 빙옥",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 5,
    combination: [{
      name: "서늘한 빙옥 덩이",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "Lv.75 이상 얼음 나무 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/e9/Item_Shivada_Jade_Gemstone.png/revision/latest/scale-to-width-down/74?cb=20210106074802"
  },
  "단단한 황옥 가루": {
    name: "단단한 황옥 가루",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 2,
    drop: ["무상의 바위 드랍", "기념품 상점 교환"],
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Item_Prithiva_Topaz_Sliver.png/revision/latest/scale-to-width-down/74?cb=20210106074650"
  },
  "단단한 황옥 조각": {
    name: "단단한 황옥 조각",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 3,
    combination: [{
      name: "단단한 황옥 가루",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "Lv.40 이상 무상의 바위 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/3e/Item_Prithiva_Topaz_Fragment.png/revision/latest/scale-to-width-down/74?cb=20210106074703"
  },
  "단단한 황옥 덩이": {
    name: "단단한 황옥 덩이",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 4,
    combination: [{
      name: "단단한 황옥 조각",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "Lv.60 이상 무상의 바위 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Item_Prithiva_Topaz_Chunk.png/revision/latest/scale-to-width-down/74?cb=20210106074708"
  },
  "단단한 황옥": {
    name: "단단한 황옥",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 5,
    combination: [{
      name: "단단한 황옥 덩이",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "Lv.75 이상 무상의 바위 드랍",
    keyword: [],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/eb/Item_Prithiva_Topaz_Gemstone.png/revision/latest/scale-to-width-down/74?cb=20210106074712"
  },
  "휘황찬란한 다이아몬드 파편": {
    name: "휘황찬란한 다이아몬드 파편",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 2,
    keyword: [],
    drop: "모험 등급 보상",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Item_Brilliant_Diamond_Sliver.png/revision/latest/scale-to-width-down/74?cb=20210106075046"
  },
  "휘황찬란한 다이아몬드 단편": {
    name: "휘황찬란한 다이아몬드 단편",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 3,
    keyword: [],
    combination: [{
      name: "휘황찬란한 다이아몬드 파편",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "모험 등급 보상",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/3d/Item_Brilliant_Diamond_Fragment.png/revision/latest/scale-to-width-down/74?cb=20210106074737"
  },
  "휘황찬란한 다이아몬드 덩어리": {
    name: "휘황찬란한 다이아몬드 덩어리",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 4,
    keyword: [],
    combination: [{
      name: "휘황찬란한 다이아몬드 단편",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "모험 등급 보상",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/74/Item_Brilliant_Diamond_Chunk.png/revision/latest/scale-to-width-down/74?cb=20210106075044"
  },
  "휘황찬란한 다이아몬드": {
    name: "휘황찬란한 다이아몬드",
    class: "육성 소재",
    type: "캐릭터 돌파 소재",
    level: 5,
    keyword: [],
    combination: [{
      name: "휘황찬란한 다이아몬드 덩어리",
      amount: 3
    }],
    combinationType: "합성 획득",
    drop: "모험 등급 보상",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Brilliant_Diamond_Gemstone.png/revision/latest/scale-to-width-down/74?cb=20210106074742"
  },
  //광물
  "철광": {
    name: "철광",
    class: "재료",
    type: "단조 재료",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=172",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f0/Item_Iron_Chunk.png/revision/latest/scale-to-width-down/512?cb=20201117072515"
  },
  "백철": {
    name: "백철",
    class: "재료",
    type: "단조 재료",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=15",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/d/d5/Item_White_Iron_Chunk.png/revision/latest/scale-to-width-down/512?cb=20201117072609"
  },
  "수정덩이": {
    name: "수정덩이",
    class: "재료",
    type: "단조 재료",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=16",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/6e/Item_Crystal_Chunk.png/revision/latest/scale-to-width-down/512?cb=20201117072628"
  },
  "마법 수정석 조각": {
    name: "마법 수정석 조각",
    class: "재료",
    type: "단조 재료",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=80",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/8/85/Item_Magical_Crystal_Chunk.png/revision/latest/scale-to-width-down/512?cb=20201117072711"
  },
  "성은 광석": {
    name: "성은 광석",
    class: "재료",
    type: "단조 재료",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=139",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/19/Item_Starsilver.png/revision/latest/scale-to-width-down/512?cb=20201223021658"
  },
  "적색의 돌": {
    name: "적색의 돌",
    class: "재료",
    type: "단조 재료",
    level: 1,
    keyword: [],
    drop: "드래곤 스파인 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=142",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Item_Scarlet_Quartz_Wild.png/revision/latest/scale-to-width-down/700?cb=20201227155132"
  },
  "자수정 덩이": {
    name: "자수정 덩이",
    class: "재료",
    type: "단조 재료",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=202",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/7d/Item_Amethyst_Lump.png/revision/latest/scale-to-width-down/512?cb=20210722011826"
  },
  "생명력을 흡수한 용의 이빨": {
    name: "생명력을 흡수한 용의 이빨",
    class: "재료",
    type: "단조 재료",
    level: 1,
    keyword: [],
    combination: [{
      name: "기이한 이빨",
      amount: 4
    }],
    drop: "변환",
    combinationType: "드래곤 코어에서 생명력 흡수하기",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/8/8c/Item_Vitalized_Dragontooth.png/revision/latest/scale-to-width-down/512?cb=20201225180707"
  },
  //무기 강화 소재
  "정제용 하급 광물": {
    name: "정제용 하급 광물",
    class: "육성 소재",
    type: "무기 강화 소재",
    level: 1,
    description: "무기 경험치 소재, 경험치를 400pt 흭득할 수 있다.",
    combinationOptions: [
      [{
        name: "철광",
        amount: 2
      }]
    ],
    combinationType: "단조 재료",
    drop: ["단조", "월드 이벤트 보상", "상자"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/4f/Item_Enhancement_Ore.png/revision/latest/scale-to-width-down/512?cb=20210106074027"
  },
  "정제용 광물": {
    name: "정제용 광물",
    class: "육성 소재",
    type: "무기 강화 소재",
    level: 2,
    description: "무기 경험치 소재, 경험치를 2000pt 흭득할 수 있다.",
    combinationOptions: [
      [{
        name: "백철",
        amount: 2
      }],
      [{
        name: "성은 광석",
        amount: 3
      }]
    ],
    combinationType: "단조 재료",
    drop: ["단조", "월드 이벤트 보상", "상자"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/23/Item_Fine_Enhancement_Ore.png/revision/latest/scale-to-width-down/512?cb=20210106073916"
  },
  "정제용 마법 광물": {
    name: "정제용 마법 광물",
    class: "육성 소재",
    type: "무기 강화 소재",
    level: 3,
    description: "무기 경험치 소재, 경험치를 10000pt 흭득할 수 있다.",
    combinationOptions: [
      [{
        name: "수정덩이",
        amount: 4
      }],
      [{
        name: "마법 수정석 조각",
        amount: 3
      },
      {
        name: "퓨어 레진",
        amount: 10
      }]
    ],
    combinationType: "단조 재료",
    drop: ["단조", "월드 이벤트 보상", "상자"],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/55/Item_Mystic_Enhancement_Ore.png/revision/latest/scale-to-width-down/512?cb=20210106073921"
  },

  //무기 원형
  "북대륙의 한손검 원형": {
    name: "북대륙의 한손검 원형",
    class: "재료",
    type: "무기 원형",
    level: 4,
    keyword: [],
    drop: ["주간 보스 드랍", "몬드 기념품 상점 교환"],
    image: "https://genshin.gamedot.org/file/archive?id=680"
  },
  "북대륙의 활 원형": {
    name: "북대륙의 활 원형",
    class: "재료",
    type: "무기 원형",
    level: 4,
    keyword: [],
    drop: ["주간 보스 드랍", "리월 기념품 상점 교환"],
    image: "https://genshin.gamedot.org/file/archive?id=682"
  },
  "북대륙의 양손검 원형": {
    name: "북대륙의 양손검 원형",
    class: "재료",
    type: "무기 원형",
    level: 4,
    keyword: [],
    drop: ["주간 보스 드랍", "리월 기념품 상점 교환"],
    image: "https://genshin.gamedot.org/file/archive?id=681"
  },
  "북대륙의 법구 원형": {
    name: "북대륙의 법구 원형",
    class: "재료",
    type: "무기 원형",
    level: 4,
    keyword: [],
    drop: ["주간 보스 드랍", "리월 기념품 상점 교환"],
    image: "https://genshin.gamedot.org/file/archive?id=683"
  },
  "북대륙의 장병기 원형": {
    name: "북대륙의 장병기 원형",
    class: "재료",
    type: "무기 원형",
    level: 4,
    keyword: [],
    drop: ["주간 보스 드랍", "리월 기념품 상점 교환"],
    image: "https://genshin.gamedot.org/file/archive?id=684"
  },
  //일반 소재
  "서리꽃 꽃술": {
    name: "서리꽃 꽃술",
    class: "재료",
    type: "일반 소재",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=61",
    image: "https://genshin.gamedot.org/file/archive?id=394"
  },
  "화염꽃 꽃술": {
    name: "화염꽃 꽃술",
    class: "재료",
    type: "일반 소재",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=62",
    image: "https://genshin.gamedot.org/file/archive?id=421"
  },
  "전기 수정": {
    name: "전기 수정",
    class: "재료",
    type: "일반 소재",
    level: 1,
    keyword: [],
    drop: "절벽 아래 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=63",
    image: "https://genshin.gamedot.org/file/archive?id=409"
  },
  "나비 날개": {
    name: "나비 날개",
    class: "재료",
    type: "일반 소재",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=91",
    image: "https://genshin.gamedot.org/file/archive?id=365"
  },
  "청개구리": {
    name: "청개구리",
    class: "재료",
    type: "일반 소재",
    level: 1,
    keyword: [],
    drop: "담수 수역 채집",
    location:"https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=94",
    image: "https://genshin.gamedot.org/file/archive?id=413"
  },
  "반딧불 정수": {
    name: "반딧불 정수",
    class: "재료",
    type: "일반 소재",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=195",
    image: "https://genshin.gamedot.org/file/archive?id=383"
  },
  "도마뱀 꼬리": {
    name: "도마뱀 꼬리",
    class: "재료",
    type: "일반 소재",
    level: 1,
    keyword: [],
    drop: "도마뱀을 포획하여 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=115",
    image: "https://genshin.gamedot.org/file/archive?id=376"
  },
  "수정 코어": {
    name: "수정코어",
    class: "재료",
    type: "일반 소재",
    level: 1,
    keyword: [],
    drop: "수정 나비를 포획하여 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=90",
    image: "https://genshin.gamedot.org/file/archive?id=401"
  },
  "말총": {
    name: "말총",
    class: "재료",
    type: "일반 소재",
    level: 1,
    keyword: [],
    drop: "물억새밭 습지 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=93",
    image: "https://genshin.gamedot.org/file/archive?id=380"
  },
  "추추 보옥": {
    name: "추추 보옥",
    class: "재료",
    type: "일반 소재",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=82",
    image: "https://genshin.gamedot.org/file/archive?id=414"
  },
  "기이한 이빨": {
    name: "기이한 「이빨」",
    class: "재료",
    type: "일반 소재",
    level: 1,
    keyword: [],
    drop: "드래곤 스파인 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=140",
    image: "https://genshin.gamedot.org/file/archive?id=370"
  },
  //식자재 (원재료)
  "버섯": {
    name: "버섯",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: ["야외 채집", "잡화점 구매"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=162",
    image: "https://genshin.gamedot.org/file/archive?id=384"
  },
  "달콤달콤 꽃": {
    name: "달콤달콤 꽃",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=160",
    image: "https://genshin.gamedot.org/file/archive?id=384"
  },
  "당근": {
    name: "당근",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: ["야외 채집", "만민당 구매"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=167",
    image: "https://genshin.gamedot.org/file/archive?id=375"
  },
  "흰 무": {
    name: "흰 무",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: ["야외 채집", "잡화점 구매"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=168",
    image: "https://genshin.gamedot.org/file/archive?id=424"
  },
  "금어초": {
    name: "금어초",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "강가와 호수 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=92",
    image: "https://genshin.gamedot.org/file/archive?id=369"
  },
  "허브": {
    name: "허브",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=161",
    image: "https://genshin.gamedot.org/file/archive?id=420"
  },
  "밀": {
    name: "밀",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: ["야외 채집", "잡화점 구매"],
    image: "https://genshin.gamedot.org/file/archive?id=381"
  },
  "양배추": {
    name: "양배추",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: ["야외 채집", "잡화점 구매"],
    image: "https://genshin.gamedot.org/file/archive?id=404"
  },
  "솔방울": {
    name: "솔방울",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=125",
    image: "https://genshin.gamedot.org/file/archive?id=399"
  },
  "라즈베리": {
    name: "라즈베리",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=163",
    image: "https://genshin.gamedot.org/file/archive?id=378"
  },
  "짐승고기": {
    name: "짐승고기",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "동물 드랍",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=121",
    image: "https://genshin.gamedot.org/file/archive?id=411"
  },
  "새알": {
    name: "새알",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=126",
    image: "https://genshin.gamedot.org/file/archive?id=390"
  },
  "송이버섯": {
    name: "송이버섯",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=124",
    image: "https://genshin.gamedot.org/file/archive?id=400"
  },
  "새고기": {
    name: "새고기",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "동물 드랍",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=123",
    image: "https://genshin.gamedot.org/file/archive?id=389"
  },
  "꽃게": {
    name: "꽃게",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "강가 호수 해안 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=116",
    image: "https://genshin.gamedot.org/file/archive?id=371"
  },
  "소금": {
    name: "소금",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    image: "https://genshin.gamedot.org/file/archive?id=397"
  },
  "양파": {
    name: "양파",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    image: "https://genshin.gamedot.org/file/archive?id=405"
  },
  "후추": {
    name: "후추",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    image: "https://genshin.gamedot.org/file/archive?id=422"
  },
  "우유": {
    name: "우유",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    image: "https://genshin.gamedot.org/file/archive?id=407"
  },
  "토마토": {
    name: "토마토",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    image: "https://genshin.gamedot.org/file/archive?id=417"
  },
  "감자": {
    name: "감자",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    image: "https://genshin.gamedot.org/file/archive?id=366"
  },
  "생선 살코기": {
    name: "생선 살코기",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "어류를 포획하여 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=122",
    image: "https://genshin.gamedot.org/file/archive?id=393"
  },
  "두부": {
    name: "두부",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "리월 잡화점 구매",
    image: "https://genshin.gamedot.org/file/archive?id=377"
  },
  "행인": {
    name: "행인",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "리월 잡화점 구매",
    image: "https://genshin.gamedot.org/file/archive?id=419"
  },
  "쌀": {
    name: "쌀",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "리월 잡화점 구매",
    image: "https://genshin.gamedot.org/file/archive?id=403"
  },
  "생새우살": {
    name: "생새우살",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "리월 잡화점 구매",
    image: "https://genshin.gamedot.org/file/archive?id=392"
  },
  "연꽃받침": {
    name: "연꽃받침",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "강가와 호수 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=166",
    image: "https://genshin.gamedot.org/file/archive?id=406"
  },
  "죽순": {
    name: "죽순",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=81",
    image: "https://genshin.gamedot.org/file/archive?id=410"
  },
  "냉동 생고기": {
    name: "냉동 생고기",
    class: "재료",
    type: "원재료",
    level: 1,
    keyword: [],
    drop: "동물 드랍",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=153",
    image: "https://genshin.gamedot.org/file/archive?id=373"
  },
  //가공품
  "밀가루": {
    name: "밀가루",
    class: "재료",
    type: "가공품",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    combination: [{
      name: "밀",
      amount: 1
    }],
    combinationType: "재료",
    image: "https://genshin.gamedot.org/file/archive?id=382"
  },
  "크림": {
    name: "크림",
    class: "재료",
    type: "가공품",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    combination: [{
      name: "우유",
      amount: 1
    }],
    combinationType: "재료",
    image: "https://genshin.gamedot.org/file/archive?id=416"
  },
  "훈제 새고기": {
    name: "훈제 새고기",
    class: "재료",
    type: "가공품",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    combination: [
      {
        name: "새고기",
        amount: 3
      },
      {
        name: "소금",
        amount: 1
      }
    ],
    combinationType: "재료",
    image: "https://genshin.gamedot.org/file/archive?id=423"
  },
  "햄": {
    name: "햄",
    class: "재료",
    type: "가공품",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    combination: [
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "소금",
        amount: 1
      }
    ],
    combinationType: "재료",
    image: "https://genshin.gamedot.org/file/archive?id=418"
  },
  "설탕": {
    name: "설탕",
    class: "재료",
    type: "가공품",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    combination: [
      {
        name: "달콤달콤 꽃",
        amount: 2
      }
    ],
    combinationType: "재료",
    image: "https://genshin.gamedot.org/file/archive?id=395"
  },
  "과일잼": {
    name: "과일잼",
    class: "재료",
    type: "가공품",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    combination: [
      {
        name: "일몰 열매",
        amount: 3
      },
      {
        name: "라즈베리",
        amount: 2
      },
      {
        name: "설탕",
        amount: 1
      }
    ],
    combinationType: "재료",
    image: "https://genshin.gamedot.org/file/archive?id=368"
  },
  "베이컨": {
    name: "베이컨",
    class: "재료",
    type: "가공품",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    combination: [
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "소금",
        amount: 2
      }
    ],
    combinationType: "재료",
    image: "https://genshin.gamedot.org/file/archive?id=388"
  },
  "소시지": {
    name: "소시지",
    class: "재료",
    type: "가공품",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    combination: [
      {
        name: "짐승고기",
        amount: 3
      }
    ],
    combinationType: "재료",
    image: "https://genshin.gamedot.org/file/archive?id=398"
  },
  "버터": {
    name: "버터",
    class: "재료",
    type: "가공품",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    combination: [
      {
        name: "우유",
        amount: 2
      }
    ],
    combinationType: "재료",
    image: "https://genshin.gamedot.org/file/archive?id=387"
  },
  "꽃게알": {
    name: "꽃게알",
    class: "재료",
    type: "가공품",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    combination: [
      {
        name: "꽃게",
        amount: 4
      }
    ],
    combinationType: "재료",
    image: "https://genshin.gamedot.org/file/archive?id=372"
  },
  "치즈": {
    name: "치즈",
    class: "재료",
    type: "가공품",
    level: 1,
    keyword: [],
    drop: "잡화점 구매",
    combination: [
      {
        name: "우유",
        amount: 3
      }
    ],
    combinationType: "재료",
    image: "https://genshin.gamedot.org/file/archive?id=415"
  },
  //특산물
  //몬드
  "통통 연꽃": {
    name: "통통 연꽃",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "호수 물가 채집",
    store: "몬드성 꽃말 점주 플로라",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=31",
    image: "https://genshin.gamedot.org/file/archive?id=194"
  },
  "고리고리 열매": {
    name: "고리고리 열매",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "야외 채집",
    store: "몬드성 식물학자 클로리스",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=41",
    image: "https://genshin.gamedot.org/file/archive?id=181"
  },
  "낙락베리": {
    name: "통통 연꽃",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "야외 채집",
    store: "몬드성 식물학자 클로리스",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=29",
    image: "https://genshin.gamedot.org/file/archive?id=182"
  },
  "세실리아꽃": {
    name: "세실리아꽃",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "야외 채집",
    store: "몬드성 꽃말 점주 플로라",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=35",
    image: "https://genshin.gamedot.org/file/archive?id=187"
  },
  "풍차 국화": {
    name: "풍차 국화",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: ["바람이 시작하는 곳의 일곱신상 근처 채집", "야외 나무 및 채집"],
    store: "몬드성 꽃말 점주 플로라",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=43",
    image: "https://genshin.gamedot.org/file/archive?id=195"
  },
  "바람버섯": {
    name: "바람버섯",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "지붕 밑 채집",
    store: "몬드성 식물학자 클로리스",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=39",
    image: "https://genshin.gamedot.org/file/archive?id=185"
  },
  "등불꽃": {
    name: "등불꽃",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "야외 야간 채집",
    store: "몬드성 꽃말 점주 플로라",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=33",
    image: "https://genshin.gamedot.org/file/archive?id=183"
  },
  "민들레 씨앗": {
    name: "민들레 씨앗",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=37",
    image: "https://genshin.gamedot.org/file/archive?id=184"
  },
  //리월
  "절운고추": {
    name: "절운고추",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "야외 채집",
    store: ["망서객잔 사장 베르 고데트", "만인당 사장 묘 사부"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=30",
    image: "https://genshin.gamedot.org/file/archive?id=192"
  },
  "야박석": {
    name: "야박석",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "리월 동굴 속 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=42",
    store: "해취항 사장 석두",
    image: "https://genshin.gamedot.org/file/archive?id=188"
  },
  "예상꽃": {
    name: "예상꽃",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: ["리월항의 옥경대 근처 채집", "망서 객잔 근처 채집"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=36",
    store: ["경책산장 방앗간 주인 소백", "망서객잔 사장 베르 고데트"],
    image: "https://genshin.gamedot.org/file/archive?id=189"
  },
  "유리백합": {
    name: "유리백합",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=38",
    store: "경책산장 방앗간 주인 소백",
    image: "https://genshin.gamedot.org/file/archive?id=190"
  },
  "청심": {
    name: "청심",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "석림 꼭대기 채집",
    store: "리월항 불복려 약사 아규",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=32",
    image: "https://genshin.gamedot.org/file/archive?id=180"
  },
  "유리주머니": {
    name: "유리주머니",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "리월 절벽 채집",
    store: ["리월항 불복려 약사 아규", "망서객잔 사장 베르 고데트"],
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=34",
    image: "https://genshin.gamedot.org/file/archive?id=191"
  },
  "콜 라피스": {
    name: "콜 라피스",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "리월 절벽 아래 채집",
    store: "상인 창순",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=40",
    image: "https://genshin.gamedot.org/file/archive?id=193"
  },
  "별소라": {
    name: "별소라",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "리월 해안 채집",
    store: "해취향 사장 석두",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=78",
    image: "https://genshin.gamedot.org/file/archive?id=186"
  },
  //이나즈마
  "바다 불로초": {
    name: "바다 불로초",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=185&center=5240.50,2614.00&zoom=-2.00",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/6d/Item_Sea_Ganoderma.png/revision/latest/scale-to-width-down/256?cb=20210610205502"
  },
  "귀신 풍뎅이": {
    name: "귀신 풍뎅이",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=196&center=5240.50,2614.00&zoom=-2.00",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Item_Onikabuto.png/revision/latest/scale-to-width-down/256?cb=20210721030840"
  },
  "혈곡": {
    name: "혈곡",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=198&center=5240.50,2614.00&zoom=-2.00",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/d/d7/Item_Dendrobium.png/revision/latest/scale-to-width-down/256?cb=20210721030829"
  },
  "벚꽃 수구": {
    name: "벚꽃 수구",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=199&center=5240.50,2614.00&zoom=-2.00",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/3d/Item_Sakura_Bloom.png/revision/latest/scale-to-width-down/256?cb=20210721030842"
  },
  "수정 골수": {
    name: "수정 골수",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=211&center=5240.50,2614.00&zoom=-2.00",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Item_Crystal_Marrow.png/revision/latest/scale-to-width-down/256?cb=20210721030827"
  },
  "울림풀": {
    name: "울림풀",
    class: "재료",
    level: 1,
    type: "특산물",
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=197&center=5240.50,2614.00&zoom=-2.00",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Item_Naku_Weed.png/revision/latest/scale-to-width-down/256?cb=20210721030833"
  },

  //음식 데이터
  //즉시 회복계
  "이상한 버섯 닭꼬치": {
    name: "이상한 버섯 닭꼬치",
    class: "음식",
    group: "버섯 닭꼬치",
    level: 1,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 8%를 회복하고 추가로 HP를 800pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "버섯",
        amount: 1
      },
      {
        name: "새고기",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1234"
  },
  "버섯 닭꼬치": {
    name: "버섯 닭꼬치",
    class: "음식",
    group: "버섯 닭꼬치",
    level: 1,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 9%를 회복하고 추가로 HP를 1000pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "버섯",
        amount: 1
      },
      {
        name: "새고기",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1235"
  },
  "맛있는 버섯 닭꼬치": {
    name: "맛있는 버섯 닭꼬치",
    class: "음식",
    group: "버섯 닭꼬치",
    level: 1,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 10%를 회복하고 추가로 HP를 1200pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "버섯",
        amount: 1
      },
      {
        name: "새고기",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1236"
  },
  "과일맛 꼬치": {
    name: "과일맛 꼬치",
    class: "음식",
    group: "버섯 닭꼬치",
    level: 1,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 16%를 회복하고 추가로 HP를 1350pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "버섯",
        amount: 1
      },
      {
        name: "새고기",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1237"
  },
  "이상한 쌀 찐빵": {
    name: "이상한 쌀 찐빵",
    class: "음식",
    group: "쌀 찐빵",
    level: 1,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 8%를 회복하고 추가로 HP를 800pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "쌀",
        amount: 1
      },
      {
        name: "말총",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 10 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=2113"
  },
  "쌀 찐빵": {
    name: "쌀 찐빵",
    class: "음식",
    group: "쌀 찐빵",
    level: 1,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 9%를 회복하고 추가로 HP를 1000pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "쌀",
        amount: 1
      },
      {
        name: "말총",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 10 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=2108"
  },
  "맛있는 쌀 찐빵": {
    name: "맛있는 쌀 찐빵",
    class: "음식",
    group: "쌀 찐빵",
    level: 1,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 10%를 회복하고 추가로 HP를 1200pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "쌀",
        amount: 1
      },
      {
        name: "말총",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 10 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=2114"
  },
  "이상한 허브 젤리": {
    name: "이상한 허브 젤리",
    class: "음식",
    group: "허브 젤리",
    level: 1,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 8%를 회복하고 추가로 HP를 800pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "허브",
        amount: 1
      },
      {
        name: "설탕",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 15 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1184"
  },
  "허브 젤리": {
    name: "허브 젤리",
    class: "음식",
    group: "허브 젤리",
    level: 1,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 9%를 회복하고 추가로 HP를 1000pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "허브",
        amount: 1
      },
      {
        name: "설탕",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 15 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1185"
  },
  "맛있는 허브 젤리": {
    name: "맛있는 허브 젤리",
    class: "음식",
    group: "허브 젤리",
    level: 1,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 10%를 회복하고 추가로 HP를 1200pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "허브",
        amount: 1
      },
      {
        name: "설탕",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 15 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1186"
  },
  "이상한 흘호어 구이": {
    name: "이상한 흘호어 구이",
    class: "음식",
    group: "흘호어 구이",
    level: 1,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 8%를 회복하고 추가로 HP를 800pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 10 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1253"
  },
  "흘호어 구이": {
    name: "흘호어 구이",
    class: "음식",
    group: "흘호어 구이",
    level: 1,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 9%를 회복하고 추가로 HP를 1000pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 10 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1254"
  },
  "맛있는 흘호어 구이": {
    name: "맛있는 흘호어 구이",
    class: "음식",
    group: "흘호어 구이",
    level: 1,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 10%를 회복하고 추가로 HP를 1200pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 10 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1255"
  },
  "절체절명 생선구이": {
    name: "절체절명 생선구이",
    class: "음식",
    group: "흘호어 구이",
    level: 1,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 16%를 회복하고 추가로 HP를 1350pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 10 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1256"
  },
  "이상한 달콤달콤 닭고기 스튜": {
    name: "이상한 달콤달콤 닭고기 스튜",
    class: "음식",
    group: "달콤달콤 닭고기 스튜",
    level: 2,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 20%를 회복하고 추가로 HP를 900pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 2
      },
      {
        name: "달콤달콤 꽃",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1217"
  },
  "달콤달콤 닭고기 스튜": {
    name: "달콤달콤 닭고기 스튜",
    class: "음식",
    group: "달콤달콤 닭고기 스튜",
    level: 2,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 22%를 회복하고 추가로 HP를 1200pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 2
      },
      {
        name: "달콤달콤 꽃",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1218"
  },
  "맛있는 달콤달콤 닭고기 스튜": {
    name: "맛있는 달콤달콤 닭고기 스튜",
    class: "음식",
    group: "달콤달콤 닭고기 스튜",
    level: 2,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 24%를 회복하고 추가로 HP를 1500pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 2
      },
      {
        name: "달콤달콤 꽃",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1219"
  },
  "심판의 만찬": {
    name: "심판의 만찬",
    class: "음식",
    group: "달콤달콤 닭고기 스튜",
    level: 2,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 30%를 회복하고 추가로 HP를 1750pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 2
      },
      {
        name: "달콤달콤 꽃",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1220"
  },
  "이상한 버섯고기말이": {
    name: "이상한 버섯고기말이",
    class: "음식",
    group: "버섯고기말이",
    level: 2,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 20%를 회복하고 추가로 HP를 900pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "송이버섯",
        amount: 2
      },
      {
        name: "짐승고기",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "마신 의뢰 제1장 제1막 진행 중 오장산에서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1109"
  },
  "버섯고기말이": {
    name: "버섯고기말이",
    class: "음식",
    group: "버섯고기말이",
    level: 2,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 22%를 회복하고 추가로 HP를 1200pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "송이버섯",
        amount: 2
      },
      {
        name: "짐승고기",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "마신 의뢰 제1장 제1막 진행 중 오장산에서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1110"
  },
  "맛있는 버섯고기말이": {
    name: "맛있는 버섯고기말이",
    class: "음식",
    group: "버섯고기말이",
    level: 2,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 24%를 회복하고 추가로 HP를 1500pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "송이버섯",
        amount: 2
      },
      {
        name: "짐승고기",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "마신 의뢰 제1장 제1막 진행 중 오장산에서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1111"
  },
  "이상한 몬드 감자전": {
    name: "이상한 몬드 감자전",
    class: "음식",
    group: "몬드 감자전",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 30%를 회복하고 추가로 HP를 600pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "솔방울",
        amount: 2
      },
      {
        name: "감자",
        amount: 1
      },
      {
        name: "과일잼",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "북풍 늑대의 사당 던전 최초 클리어 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1080"
  },
  "몬드 감자전": {
    name: "몬드 감자전",
    class: "음식",
    group: "몬드 감자전",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 32%를 회복하고 추가로 HP룰 1250pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "솔방울",
        amount: 2
      },
      {
        name: "감자",
        amount: 1
      },
      {
        name: "과일잼",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "북풍 늑대의 사당 던전 최초 클리어 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1081"
  },
  "맛있는 몬드 감자전": {
    name: "맛있는 몬드 감자전",
    class: "음식",
    group: "몬드 감자전",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 34%를 회복하고 추가로 HP를 1900pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "솔방울",
        amount: 2
      },
      {
        name: "감자",
        amount: 1
      },
      {
        name: "과일잼",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "북풍 늑대의 사당 던전 최초 클리어 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1082"
  },
  "와구와구 감자전": {
    name: "와구와구 감자전",
    class: "음식",
    group: "몬드 감자전",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 40%를 회복하고 추가로 HP를 2350pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "솔방울",
        amount: 2
      },
      {
        name: "감자",
        amount: 1
      },
      {
        name: "과일잼",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "북풍 늑대의 사당 던전 최초 클리어 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1083"
  },
  "이상한 바삭바삭 치킨버거": {
    name: "이상한 바삭바삭 치킨버거",
    class: "음식",
    group: "바삭바삭 치킨버거",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 30%를 회복하고 추가로 HP를 600pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "양배추",
        amount: 2
      },
      {
        name: "버터",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "식도락 여행기 이벤트 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1098"
  },
  "바삭바삭 치킨버거": {
    name: "바삭바삭 치킨버거",
    class: "음식",
    group: "바삭바삭 치킨버거",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 32%를 회복하고 추가로 HP룰 1250pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "양배추",
        amount: 2
      },
      {
        name: "버터",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "식도락 여행기 이벤트 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1099"
  },
  "맛있는 바삭바삭 치킨버거": {
    name: "맛있는 바삭바삭 치킨버거",
    class: "음식",
    group: "바삭바삭 치킨버거",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 34%를 회복하고 추가로 HP를 1900pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "양배추",
        amount: 2
      },
      {
        name: "버터",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "식도락 여행기 이벤트 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1100"
  },
  "이상한 북극 사과고기찜": {
    name: "이상한 북극 사과고기찜",
    class: "음식",
    group: "북극 사과고기찜",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 30%를 회복하고 추가로 HP를 600pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "사과",
        amount: 3
      },
      {
        name: "버터",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드의 평판 1레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1113"
  },
  "북극 사과고기찜": {
    name: "북극 사과고기찜",
    class: "음식",
    group: "북극 사과고기찜",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 32%를 회복하고 추가로 HP룰 1250pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "사과",
        amount: 3
      },
      {
        name: "버터",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드의 평판 1레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1114"
  },
  "맛있는 북극 사과고기찜": {
    name: "맛있는 북극 사과고기찜",
    class: "음식",
    group: "북극 사과고기찜",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 34%를 회복하고 추가로 HP를 1900pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "사과",
        amount: 3
      },
      {
        name: "버터",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드의 평판 1레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1115"
  },
  "이상한 세계 평화": {
    name: "이상한 세계 평화",
    class: "음식",
    group: "세계 평화",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 30%를 회복하고 추가로 HP를 600pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "쌀",
        amount: 4
      },
      {
        name: "연꽃받침",
        amount: 2
      },
      {
        name: "당근",
        amount: 2
      },
      {
        name: "라즈베리",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 30 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1129"
  },
  "세계 평화": {
    name: "세계 평화",
    class: "음식",
    group: "세계 평화",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 32%를 회복하고 추가로 HP를 1250pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "쌀",
        amount: 4
      },
      {
        name: "연꽃받침",
        amount: 2
      },
      {
        name: "당근",
        amount: 2
      },
      {
        name: "라즈베리",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 30 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1130"
  },
  "맛있는 세계 평화": {
    name: "맛있는 세계 평화",
    class: "음식",
    group: "세계 평화",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 34%를 회복하고 추가로 HP를 1900pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "쌀",
        amount: 4
      },
      {
        name: "연꽃받침",
        amount: 2
      },
      {
        name: "당근",
        amount: 2
      },
      {
        name: "라즈베리",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 30 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1131"
  },
  "태평성대": {
    name: "태평성대",
    class: "음식",
    group: "세계 평화",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 40%를 회복하고 추가로 HP를 2350pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "쌀",
        amount: 4
      },
      {
        name: "연꽃받침",
        amount: 2
      },
      {
        name: "당근",
        amount: 2
      },
      {
        name: "라즈베리",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 30 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1132"
  },
  "이상한 탕수어": {
    name: "이상한 탕수어",
    class: "음식",
    group: "탕수어",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 30%를 회복하고 추가로 HP를 600pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 4
      },
      {
        name: "토마토",
        amount: 2
      },
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "설탕",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 35 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1171"
  },
  "탕수어": {
    name: "탕수어",
    class: "음식",
    group: "탕수어",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 32%를 회복하고 추가로 HP를 1250pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 4
      },
      {
        name: "토마토",
        amount: 2
      },
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "설탕",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 35 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1172"
  },
  "맛있는 탕수어": {
    name: "맛있는 탕수어",
    class: "음식",
    group: "탕수어",
    level: 3,
    type: "즉시 회복계",
    description: "선택한 캐릭터 HP 최대치의 34%를 회복하고 추가로 HP를 1900pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 4
      },
      {
        name: "토마토",
        amount: 2
      },
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "설탕",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 35 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1173"
  },
  //지속 회복계
  "대왕차": {
    name: "사과주",
    class: "음식",
    level: 2,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 14%를 즉시 회복하고 30초 동안 5초마다 HP를 350pt씩 회복한다.",
    keyword: [],
    drop: "리월 찻집 노점상에서 판매",
    image: "https://genshin.gamedot.org/file/archive?id=1052"
  },
  "이상한 무 수프": {
    name: "이상한 무 수프",
    class: "음식",
    group: "무 수프",
    level: 1,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 8%를 즉시 회복하고 30초 동안 5초마다 HP를 210pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "흰 무",
        amount: 1
      },
      {
        name: "허브",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1088"
  },
  "무 수프": {
    name: "무 수프",
    class: "음식",
    group: "무 수프",
    level: 1,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 9%를 즉시 회복하고 30초 동안 5초마다 HP를 250pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "흰 무",
        amount: 1
      },
      {
        name: "허브",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1089"
  },
  "맛있는 무 수프": {
    name: "맛있는 무 수프",
    class: "음식",
    group: "무 수프",
    level: 1,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 10%를 즉시 회복하고 30초 동안 5초마다 HP를 300pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "흰 무",
        amount: 1
      },
      {
        name: "허브",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1090"
  },
  "이상한 불꽃 미트 스파게티": {
    name: "이상한 불꽃 미트 스파게티",
    class: "음식",
    group: "불꽃 미트 스파게티",
    level: 2,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 18%를 즉시 회복하고 30초 동안 5초마다 HP를 300pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "토마토",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1061"
  },
  "불꽃 미트 스파게티": {
    name: "불꽃 미트 스파게티",
    class: "음식",
    group: "불꽃 미트 스파게티",
    level: 2,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 20%를 즉시 회복하고 30초 동안 5초마다 HP를 380pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "토마토",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1062"
  },
  "맛있는 불꽃 미트 스파게티": {
    name: "맛있는 불꽃 미트 스파게티",
    class: "음식",
    group: "불꽃 미트 스파게티",
    level: 2,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 22%를 즉시 회복하고 30초 동안 5초마다 HP를 470pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "토마토",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1063"
  },
  "마법 스파게티": {
    name: "마법 스파게티",
    class: "음식",
    group: "불꽃 미트 스파게티",
    level: 2,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 26%를 즉시 회복하고 30초 동안 5초마다 HP를 570pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "토마토",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1064"
  },
  "사과주": {
    name: "사과주",
    class: "음식",
    level: 2,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 26%를 즉시 회복하고 30초 동안 5초마다 HP를 570pt씩 회복한다.",
    keyword: [],
    drop: "몬드성 '천사의 몫' 주점에 위치한 NPC 찰스로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1122"
  },
  "이상한 생선 볶음면": {
    name: "이상한 생선 볶음면",
    class: "음식",
    group: "생선 볶음면",
    level: 2,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 18%를 즉시 회복하고 30초 동안 5초마다 HP를 300pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 2
      },
      {
        name: "쌀",
        amount: 3
      },
      {
        name: "금어초",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 신월헌 앞에 위치한 NPC 월소로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=879"
  },
  "생선 볶음면": {
    name: "생선 볶음면",
    class: "음식",
    group: "생선 볶음면",
    level: 2,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 20%를 즉시 회복하고 30초 동안 5초마다 HP를 380pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 2
      },
      {
        name: "쌀",
        amount: 3
      },
      {
        name: "금어초",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 신월헌 앞에 위치한 NPC 월소로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=878"
  },
  "맛있는 생선 볶음면": {
    name: "맛있는 생선 볶음면",
    class: "음식",
    group: "생선 볶음면",
    level: 2,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 22%를 즉시 회복하고 30초 동안 5초마다 HP를 470pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 2
      },
      {
        name: "쌀",
        amount: 3
      },
      {
        name: "금어초",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 신월헌 앞에 위치한 NPC 월소로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=880"
  },
  "이상한 수정 새우딤섬": {
    name: "이상한 수정 새우딤섬",
    class: "음식",
    group: "수정 새우딤섬",
    level: 2,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 18%를 즉시 회복하고 30초 동안 5초마다 HP를 300pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "쌀",
        amount: 3
      },
      {
        name: "생새우살",
        amount: 3
      },
      {
        name: "당근",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1020"
  },
  "수정 새우딤섬": {
    name: "수정 새우딤섬",
    class: "음식",
    group: "수정 새우딤섬",
    level: 2,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 20%를 즉시 회복하고 30초 동안 5초마다 HP를 380pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "쌀",
        amount: 3
      },
      {
        name: "생새우살",
        amount: 3
      },
      {
        name: "당근",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1021"
  },
  "맛있는 수정 새우딤섬": {
    name: "맛있는 수정 새우딤섬",
    class: "음식",
    group: "수정 새우딤섬",
    level: 2,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 22%를 즉시 회복하고 30초 동안 5초마다 HP를 470pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "쌀",
        amount: 3
      },
      {
        name: "생새우살",
        amount: 3
      },
      {
        name: "당근",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1022"
  },
  "강호백미": {
    name: "강호백미",
    class: "음식",
    group: "수정 새우딤섬",
    level: 2,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 26%를 즉시 회복하고 30초 동안 5초마다 HP를 570pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "쌀",
        amount: 3
      },
      {
        name: "생새우살",
        amount: 3
      },
      {
        name: "당근",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1023"
  },
  "이상한 바삭 쉬림프 카나페": {
    name: "이상한 바삭 쉬림프 카나페",
    class: "음식",
    group: "바삭 쉬림프 카나페",
    level: 3,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 26%를 즉시 회복하고 30초 동안 5초마다 HP를 450pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "허브",
        amount: 4
      },
      {
        name: "생새우살",
        amount: 3
      },
      {
        name: "감자",
        amount: 3
      },
      {
        name: "라즈베리",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 30 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1095"
  },
  "바삭 쉬림프 카나페": {
    name: "바삭 쉬림프 카나페",
    class: "음식",
    group: "바삭 쉬림프 카나페",
    level: 3,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 28%를 즉시 회복하고 30초 동안 5초마다 HP를 620pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "허브",
        amount: 4
      },
      {
        name: "생새우살",
        amount: 3
      },
      {
        name: "감자",
        amount: 3
      },
      {
        name: "라즈베리",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 30 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1096"
  },
  "맛있는 바삭 쉬림프 카나페": {
    name: "맛있는 바삭 쉬림프 카나페",
    class: "음식",
    group: "바삭 쉬림프 카나페",
    level: 3,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 30%를 즉시 회복하고 30초 동안 5초마다 HP를 790pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "허브",
        amount: 4
      },
      {
        name: "생새우살",
        amount: 3
      },
      {
        name: "감자",
        amount: 3
      },
      {
        name: "라즈베리",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 30 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1097"
  },
  "이상한 버섯피자": {
    name: "이상한 버섯피자",
    class: "음식",
    group: "버섯피자",
    level: 3,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 26%를 즉시 회복하고 30초 동안 5초마다 HP를 450pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "버섯",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "양배추",
        amount: 2
      },
      {
        name: "치즈",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "바람 드래곤의 폐허 중앙탑의 바람장벽의 바로 북쪽에 있는 츄츄족 군락지의 진귀한 보물 상자에서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1238"
  },
  "버섯피자": {
    name: "버섯피자",
    class: "음식",
    group: "버섯피자",
    level: 3,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 28%를 즉시 회복하고 30초 동안 5초마다 HP를 620pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "버섯",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "양배추",
        amount: 2
      },
      {
        name: "치즈",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "바람 드래곤의 폐허 중앙탑의 바람장벽의 바로 북쪽에 있는 츄츄족 군락지의 진귀한 보물 상자에서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1239"
  },
  "맛있는 버섯피자": {
    name: "맛있는 버섯피자",
    class: "음식",
    group: "버섯피자",
    level: 3,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 30%를 즉시 회복하고 30초 동안 5초마다 HP를 790pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "버섯",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "양배추",
        amount: 2
      },
      {
        name: "치즈",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "바람 드래곤의 폐허 중앙탑의 바람장벽의 바로 북쪽에 있는 츄츄족 군락지의 진귀한 보물 상자에서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1240"
  },
  "정신번쩍 피자": {
    name: "정신번쩍 피자",
    class: "음식",
    group: "버섯피자",
    level: 3,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 34%를 즉시 회복하고 30초 동안 5초마다 HP를 980pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "버섯",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "양배추",
        amount: 2
      },
      {
        name: "치즈",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "바람 드래곤의 폐허 중앙탑의 바람장벽의 바로 북쪽에 있는 츄츄족 군락지의 진귀한 보물 상자에서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1112"
  },
  "이상한 삶은 검정 농어": {
    name: "이상한 삶은 검정 농어",
    class: "음식",
    group: "삶은 검정 농어",
    level: 3,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 26%를 즉시 회복하고 30초 동안 5초마다 HP를 450pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 3
      },
      {
        name: "절운고추",
        amount: 1
      },
      {
        name: "소금",
        amount: 1
      },
      {
        name: "유리주머니",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 30 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1065"
  },
  "삶은 검정 농어": {
    name: "삶은 검정 농어",
    class: "음식",
    group: "삶은 검정 농어",
    level: 3,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 28%를 즉시 회복하고 30초 동안 5초마다 HP를 620pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 3
      },
      {
        name: "절운고추",
        amount: 1
      },
      {
        name: "소금",
        amount: 1
      },
      {
        name: "유리주머니",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 30 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1066"
  },
  "맛있는 삶은 검정 농어": {
    name: "맛있는 삶은 검정 농어",
    class: "음식",
    group: "삶은 검정 농어",
    level: 3,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 30%를 즉시 회복하고 30초 동안 5초마다 HP를 790pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 3
      },
      {
        name: "절운고추",
        amount: 1
      },
      {
        name: "소금",
        amount: 1
      },
      {
        name: "유리주머니",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 30 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1067"
  },
  "만민당 생선전골": {
    name: "만민당 생선전골",
    class: "음식",
    group: "삶은 검정 농어",
    level: 3,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 34%를 즉시 회복하고 30초 동안 5초마다 HP를 980pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 3
      },
      {
        name: "절운고추",
        amount: 1
      },
      {
        name: "소금",
        amount: 1
      },
      {
        name: "유리주머니",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 30 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1068"
  },
  "이상한 죽순 수프": {
    name: "이상한 죽순 수프",
    class: "음식",
    group: "죽순 수프",
    level: 3,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 26%를 즉시 회복하고 30초 동안 5초마다 HP를 450pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "햄",
        amount: 2
      },
      {
        name: "죽순",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서 객잔에 위치한 NPC 베르 고데트로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1137"
  },
  "죽순 수프": {
    name: "죽순 수프",
    class: "음식",
    group: "죽순 수프",
    level: 3,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 28%를 즉시 회복하고 30초 동안 5초마다 HP를 620pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "햄",
        amount: 2
      },
      {
        name: "죽순",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서 객잔에 위치한 NPC 베르 고데트로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1138"
  },
  "맛있는 죽순 수프": {
    name: "맛있는 죽순 수프",
    class: "음식",
    group: "죽순 수프",
    level: 3,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 30%를 즉시 회복하고 30초 동안 5초마다 HP를 790pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "햄",
        amount: 2
      },
      {
        name: "죽순",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서 객잔에 위치한 NPC 베르 고데트로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1139"
  },
  "약불로 천천히 끓인 죽순 수프": {
    name: "약불로 천천히 끓인 죽순 수프",
    class: "음식",
    group: "죽순 수프",
    level: 3,
    type: "지속 회복계",
    description: "선택한 캐릭터 HP 최대치의 34%를 즉시 회복하고 30초 동안 5초마다 HP를 980pt씩 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "햄",
        amount: 2
      },
      {
        name: "죽순",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서 객잔에 위치한 NPC 베르 고데트로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1140"
  },
  //부활 회복계
  "이상한 고기볶음": {
    name: "이상한 고기볶음",
    class: "음식",
    group: "고기볶음",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 50pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 1
      },
      {
        name: "절운고추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "천형산 위쪽 하늘 징검다리 위 상자 조사",
    image: "https://genshin.gamedot.org/file/archive?id=1033"
  },
  "고기볶음": {
    name: "고기볶음",
    class: "음식",
    group: "고기볶음",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 100pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 1
      },
      {
        name: "절운고추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "천형산 위쪽 하늘 징검다리 위 상자 조사",
    image: "https://genshin.gamedot.org/file/archive?id=1034"
  },
  "맛있는 고기볶음": {
    name: "맛있는 고기볶음",
    class: "음식",
    group: "고기볶음",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 150pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 1
      },
      {
        name: "절운고추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "천형산 위쪽 하늘 징검다리 위 상자 조사",
    image: "https://genshin.gamedot.org/file/archive?id=1035"
  },
  "데친 고기볶음": {
    name: "데친 고기볶음",
    class: "음식",
    group: "고기볶음",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키며 HP 최대치의 10%를 회복하고 추가로 150pt 더 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 1
      },
      {
        name: "절운고추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "천형산 위쪽 하늘 징검다리 위 상자 조사",
    image: "https://genshin.gamedot.org/file/archive?id=1036"
  },
  "이상한 모라육": {
    name: "이상한 모라육",
    class: "음식",
    group: "모라육",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 50pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 1
      },
      {
        name: "밀가루",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "절운간 워프 북동쪽에 있는 전기 슬라임 무리를 잡고 해금된 보물상자에서 획득 / 마신 의뢰 제1장 제1막 진행 중 오장산에서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1024"
  },
  "모라육": {
    name: "모라육",
    class: "음식",
    group: "모라육",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 100pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 1
      },
      {
        name: "밀가루",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "절운간 워프 북동쪽에 있는 전기 슬라임 무리를 잡고 해금된 보물상자에서 획득 / 마신 의뢰 제1장 제1막 진행 중 오장산에서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1025"
  },
  "맛있는 모라육": {
    name: "맛있는 모라육",
    class: "음식",
    group: "모라육",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 150pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 1
      },
      {
        name: "밀가루",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "절운간 워프 북동쪽에 있는 전기 슬라임 무리를 잡고 해금된 보물상자에서 획득 / 마신 의뢰 제1장 제1막 진행 중 오장산에서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1026"
  },
  "건곤모라육": {
    name: "건곤모라육",
    class: "음식",
    group: "모라육",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키며 HP 최대치의 10%를 회복하고 추가로 150pt 더 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 1
      },
      {
        name: "밀가루",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "절운간 워프 북동쪽에 있는 전기 슬라임 무리를 잡고 해금된 보물상자에서 획득 / 마신 의뢰 제1장 제1막 진행 중 오장산에서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1027"
  },
  "이상한 몬드 생선구이": {
    name: "이상한 몬드 생선구이",
    class: "음식",
    group: "몬드 생선구이",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 50pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1084"
  },
  "몬드 생선구이": {
    name: "몬드 생선구이",
    class: "음식",
    group: "몬드 생선구이",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 100pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1085"
  },
  "맛있는 몬드 생선구이": {
    name: "맛있는 몬드 생선구이",
    class: "음식",
    group: "몬드 생선구이",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 150pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1086"
  },
  "술안주 절대 아님": {
    name: "술안주 절대 아님",
    class: "음식",
    group: "몬드 생선구이",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키며 HP 최대치의 10%를 회복하고 추가로 150pt 더 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1087"
  },
  "이상한 스테이크": {
    name: "이상한 스테이크",
    class: "음식",
    group: "스테이크",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 50pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1257"
  },
  "스테이크": {
    name: "스테이크",
    class: "음식",
    group: "스테이크",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 100pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1258"
  },
  "맛있는 스테이크": {
    name: "맛있는 스테이크",
    class: "음식",
    group: "스테이크",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 150pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1259"
  },
  "정찰 기사 바비큐!": {
    name: "정찰 기사 바비큐!",
    class: "음식",
    group: "스테이크",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키며 HP 최대치의 10%를 회복하고 추가로 150pt 더 회복한다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1260"
  },
  "이상한 티바트 달걀 프라이": {
    name: "이상한 티바트 달걀 프라이",
    class: "음식",
    group: "티바트 달걀 프라이",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 50pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "새알",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1174"
  },
  "티바트 달걀 프라이": {
    name: "티바트 달걀 프라이",
    class: "음식",
    group: "티바트 달걀 프라이",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 100pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "새알",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1175"
  },
  "맛있는 티바트 달걀 프라이": {
    name: "맛있는 티바트 달걀 프라이",
    class: "음식",
    group: "티바트 달걀 프라이",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 150pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "새알",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1176"
  },
  "티바트 바삭 프라이": {
    name: "티바트 바삭 프라이",
    class: "음식",
    group: "티바트 달걀 프라이",
    level: 1,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키며 HP 최대치의 10%를 회복하고 추가로 150pt 더 회복한다.",
    keyword: [],
    combination: [
      {
        name: "새알",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1177"
  },
  "이상한 꽃게알 두부": {
    name: "이상한 꽃게알 두부",
    class: "음식",
    group: "꽃게알 두부",
    level: 2,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 250pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "꽃게알",
        amount: 1
      },
      {
        name: "두부",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=886"
  },
  "꽃게알 두부": {
    name: "꽃게알 두부",
    class: "음식",
    group: "꽃게알 두부",
    level: 2,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 400pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "꽃게알",
        amount: 1
      },
      {
        name: "두부",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=884"
  },
  "맛있는 꽃게알 두부": {
    name: "맛있는 꽃게알 두부",
    class: "음식",
    group: "꽃게알 두부",
    level: 2,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 550pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "꽃게알",
        amount: 1
      },
      {
        name: "두부",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=885"
  },
  "나름의 규칙": {
    name: "나름의 규칙",
    class: "음식",
    group: "꽃게알 두부",
    level: 2,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP 최대치의 15%를 회복하고 추가로 550pt 더 회복한다.",
    keyword: [],
    combination: [
      {
        name: "꽃게알",
        amount: 1
      },
      {
        name: "두부",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=887"
  },
  "이상한 장원 팬케익": {
    name: "이상한 장원 팬케익",
    class: "음식",
    group: "장원 팬케익",
    level: 2,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 250pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "라즈베리",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "새알",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 15 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1227"
  },
  "장원 팬케익": {
    name: "장원 팬케익",
    class: "음식",
    group: "장원 팬케익",
    level: 2,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 400pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "라즈베리",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "새알",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 15 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1228"
  },
  "맛있는 장원 팬케익": {
    name: "맛있는 장원 팬케익",
    class: "음식",
    group: "장원 팬케익",
    level: 2,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 550pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "라즈베리",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "새알",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 15 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1229"
  },
  "뭉게구름 팬케익": {
    name: "뭉게구름 팬케익",
    class: "음식",
    group: "장원 팬케익",
    level: 2,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP 최대치의 15%를 회복하고 추가로 550pt 더 회복한다.",
    keyword: [],
    combination: [
      {
        name: "라즈베리",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "새알",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 15 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1230"
  },
  "이상한 채식 전복": {
    name: "이상한 채식 전복",
    class: "음식",
    group: "채식 전복",
    level: 2,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 250pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "송이버섯",
        amount: 2
      },
      {
        name: "금어초",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서 객잔에 위치한 NPC 베르 고데트로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1149"
  },
  "채식 전복": {
    name: "채식 전복",
    class: "음식",
    group: "채식 전복",
    level: 2,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 400pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "송이버섯",
        amount: 2
      },
      {
        name: "금어초",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서 객잔에 위치한 NPC 베르 고데트로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1150"
  },
  "맛있는 채식 전복": {
    name: "맛있는 채식 전복",
    class: "음식",
    group: "채식 전복",
    level: 2,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 550pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "송이버섯",
        amount: 2
      },
      {
        name: "금어초",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서 객잔에 위치한 NPC 베르 고데트로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1151"
  },
  "유령 대행군": {
    name: "유령 대행군",
    class: "음식",
    group: "채식 전복",
    level: 2,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP 최대치의 15%를 회복하고 추가로 550pt 더 회복한다.",
    keyword: [],
    combination: [
      {
        name: "송이버섯",
        amount: 2
      },
      {
        name: "금어초",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서 객잔에 위치한 NPC 베르 고데트로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1152"
  },
  "이상한 꽃게알 야채찜": {
    name: "이상한 꽃게알 야채찜",
    class: "음식",
    group: "꽃게알 야채찜",
    level: 3,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 900pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "꽃게알",
        amount: 1
      },
      {
        name: "햄",
        amount: 1
      },
      {
        name: "크림",
        amount: 1
      },
      {
        name: "양배추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "'음식 주문서' 일일 의뢰 완료 보상 (활기찬 오를레앙 버전)",
    image: "https://genshin.gamedot.org/file/archive?id=1042"
  },
  "꽃게알 야채찜": {
    name: "꽃게알 야채찜",
    class: "음식",
    group: "꽃게알 야채찜",
    level: 3,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 1200pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "꽃게알",
        amount: 1
      },
      {
        name: "햄",
        amount: 1
      },
      {
        name: "크림",
        amount: 1
      },
      {
        name: "양배추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "'음식 주문서' 일일 의뢰 완료 보상 (활기찬 오를레앙 버전)",
    image: "https://genshin.gamedot.org/file/archive?id=1043"
  },
  "맛있는 꽃게알 야채찜": {
    name: "맛있는 꽃게알 야채찜",
    class: "음식",
    group: "꽃게알 야채찜",
    level: 3,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 1500pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "꽃게알",
        amount: 1
      },
      {
        name: "햄",
        amount: 1
      },
      {
        name: "크림",
        amount: 1
      },
      {
        name: "양배추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "'음식 주문서' 일일 의뢰 완료 보상 (활기찬 오를레앙 버전)",
    image: "https://genshin.gamedot.org/file/archive?id=1044"
  },
  "오구삼식 보양식": {
    name: "오구삼식 보양식",
    class: "음식",
    group: "꽃게알 야채찜",
    level: 3,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키며 HP 최대치의 20%를 회복하고 추가로 1500pt 더 회복한다.",
    keyword: [],
    combination: [
      {
        name: "꽃게알",
        amount: 1
      },
      {
        name: "햄",
        amount: 1
      },
      {
        name: "크림",
        amount: 1
      },
      {
        name: "양배추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "'음식 주문서' 일일 의뢰 완료 보상 (활기찬 오를레앙 버전)",
    image: "https://genshin.gamedot.org/file/archive?id=1045"
  },
  "이상한 명월 딤섬": {
    name: "이상한 명월 딤섬",
    class: "음식",
    group: "명월 딤섬",
    level: 3,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 900pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 4
      },
      {
        name: "생새우살",
        amount: 2
      },
      {
        name: "새알",
        amount: 2
      },
      {
        name: "밀가루",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 신월헌 앞에 위치한 NPC 월소로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1221"
  },
  "명월 딤섬": {
    name: "명월 딤섬",
    class: "음식",
    group: "명월 딤섬",
    level: 3,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 1200pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 4
      },
      {
        name: "생새우살",
        amount: 2
      },
      {
        name: "새알",
        amount: 2
      },
      {
        name: "밀가루",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 신월헌 앞에 위치한 NPC 월소로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1222"
  },
  "맛있는 명월 딤섬": {
    name: "맛있는 명월 딤섬",
    class: "음식",
    group: "명월 딤섬",
    level: 3,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 1500pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 4
      },
      {
        name: "생새우살",
        amount: 2
      },
      {
        name: "새알",
        amount: 2
      },
      {
        name: "밀가루",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 신월헌 앞에 위치한 NPC 월소로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1223"
  },
  "이상한 황금 새우볼": {
    name: "이상한 황금 새우볼",
    class: "음식",
    group: "황금 새우볼",
    level: 3,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 900pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생새우살",
        amount: 5
      },
      {
        name: "감자",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월의 평판 1레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1187"
  },
  "황금 새우볼": {
    name: "황금 새우볼",
    class: "음식",
    group: "황금 새우볼",
    level: 3,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 1200pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생새우살",
        amount: 5
      },
      {
        name: "감자",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월의 평판 1레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1188"
  },
  "맛있는 황금 새우볼": {
    name: "맛있는 황금 새우볼",
    class: "음식",
    group: "황금 새우볼",
    level: 3,
    type: "부활 회복계",
    description: "선택한 캐릭터를 부활시키고 HP를 1500pt 회복한다.",
    keyword: [],
    combination: [
      {
        name: "생새우살",
        amount: 5
      },
      {
        name: "감자",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월의 평판 1레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1189"
  },
  //공격력 강화계
  "고리고리 쥬스": {
    name: "고리고리 쥬스",
    class: "음식",
    level: 2,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 114pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    recipe: "몬드성 '천사의 몫' 주점에 위치한 NPC 찰스로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1040"
  },
  "이상한 무완자 튀김": {
    name: "이상한 무완자 튀김",
    class: "음식",
    group: "무완자 튀김",
    level: 2,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 66pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "흰 무",
        amount: 2
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1224"
  },
  "무완자 튀김": {
    name: "무완자 튀김",
    class: "음식",
    group: "무완자 튀김",
    level: 2,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 81pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "흰 무",
        amount: 2
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1225"
  },
  "맛있는 무완자 튀김": {
    name: "맛있는 무완자 튀김",
    class: "음식",
    group: "무완자 튀김",
    level: 2,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 95pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "흰 무",
        amount: 2
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1226"
  },
  "이상한 행인두부": {
    name: "이상한 행인두부",
    class: "음식",
    group: "행인두부",
    level: 2,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 66pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "우유",
        amount: 3
      },
      {
        name: "설탕",
        amount: 1
      },
      {
        name: "행인",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서 객잔 내부의 요리실 조사",
    image: "https://genshin.gamedot.org/file/archive?id=1201"
  },
  "행인두부": {
    name: "행인두부",
    class: "음식",
    group: "행인두부",
    level: 2,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 81pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "우유",
        amount: 3
      },
      {
        name: "설탕",
        amount: 1
      },
      {
        name: "행인",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서 객잔 내부의 요리실 조사",
    image: "https://genshin.gamedot.org/file/archive?id=1202"
  },
  "맛있는 행인두부": {
    name: "맛있는 행인두부",
    class: "음식",
    group: "행인두부",
    level: 2,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 95pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "우유",
        amount: 3
      },
      {
        name: "설탕",
        amount: 1
      },
      {
        name: "행인",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서 객잔 내부의 요리실 조사",
    image: "https://genshin.gamedot.org/file/archive?id=1203"
  },
  "아름다운 꿈": {
    name: "「아름다운 꿈」",
    class: "음식",
    group: "행인두부",
    level: 2,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 114pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "우유",
        amount: 3
      },
      {
        name: "설탕",
        amount: 1
      },
      {
        name: "행인",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서 객잔 내부의 요리실 조사",
    image: "https://genshin.gamedot.org/file/archive?id=1204"
  },
  "이상한 허브냉채": {
    name: "이상한 허브냉채",
    class: "음식",
    group: "허브냉채",
    level: 2,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 66pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "허브",
        amount: 4
      },
      {
        name: "절운고추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1250"
  },
  "허브냉채": {
    name: "허브냉채",
    class: "음식",
    group: "허브냉채",
    level: 2,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 81pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "허브",
        amount: 4
      },
      {
        name: "절운고추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1251"
  },
  "맛있는 허브냉채": {
    name: "맛있는 허브냉채",
    class: "음식",
    group: "허브냉채",
    level: 2,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 95pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "허브",
        amount: 4
      },
      {
        name: "절운고추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1252"
  },
  "이상한 경책 가정식": {
    name: "이상한 경책 가정식",
    class: "음식",
    group: "경책 가정식",
    level: 3,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 160pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "버섯",
        amount: 3
      },
      {
        name: "연꽃받침",
        amount: 2
      },
      {
        name: "절운고추",
        amount: 1
      },
      {
        name: "양배추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "경책산장에 위치한 NPC 소백으로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1030"
  },
  "경책 가정식": {
    name: "경책 가정식",
    class: "음식",
    group: "경책 가정식",
    level: 3,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 194pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "버섯",
        amount: 3
      },
      {
        name: "연꽃받침",
        amount: 2
      },
      {
        name: "절운고추",
        amount: 1
      },
      {
        name: "양배추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "경책산장에 위치한 NPC 소백으로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1031"
  },
  "맛있는 경책 가정식": {
    name: "맛있는 경책 가정식",
    class: "음식",
    group: "경책 가정식",
    level: 3,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 228pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "버섯",
        amount: 3
      },
      {
        name: "연꽃받침",
        amount: 2
      },
      {
        name: "절운고추",
        amount: 1
      },
      {
        name: "양배추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "경책산장에 위치한 NPC 소백으로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1032"
  },
  "이상한 모험가 계란빵": {
    name: "이상한 모험가 계란빵",
    class: "음식",
    group: "모험가 계란빵",
    level: 3,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 160pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새알",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "햄",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드의 평판 4레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1077"
  },
  "모험가 계란빵": {
    name: "모험가 계란빵",
    class: "음식",
    group: "모험가 계란빵",
    level: 3,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 194pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새알",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "햄",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드의 평판 4레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1078"
  },
  "맛있는 모험가 계란빵": {
    name: "맛있는 모험가 계란빵",
    class: "음식",
    group: "모험가 계란빵",
    level: 3,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 228pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새알",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "햄",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드의 평판 4레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1079"
  },
  "이상한 버터 송이구이": {
    name: "이상한 버터 송이구이",
    class: "음식",
    group: "버터 송이구이",
    level: 3,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 160pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "송이버섯",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "솔방울",
        amount: 2
      },
      {
        name: "버터",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 35 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1241"
  },
  "버터 송이구이": {
    name: "버터 송이구이",
    class: "음식",
    group: "버터 송이구이",
    level: 3,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 194pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "송이버섯",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "솔방울",
        amount: 2
      },
      {
        name: "버터",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 35 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1242"
  },
  "맛있는 버터 송이구이": {
    name: "맛있는 버터 송이구이",
    class: "음식",
    group: "버터 송이구이",
    level: 3,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 228pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "송이버섯",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "솔방울",
        amount: 2
      },
      {
        name: "버터",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 35 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1243"
  },
  "이상한 촉촉 으깬 감자": {
    name: "이상한 촉촉 으깬 감자",
    class: "음식",
    group: "촉촉 으깬 감자",
    level: 3,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 160pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "감자",
        amount: 6
      },
      {
        name: "크림",
        amount: 4
      },
      {
        name: "후추",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    recipe: "식도락 여행기 이벤트 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1168"
  },
  "촉촉 으깬 감자": {
    name: "촉촉 으깬 감자",
    class: "음식",
    group: "촉촉 으깬 감자",
    level: 3,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 194pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "감자",
        amount: 6
      },
      {
        name: "크림",
        amount: 4
      },
      {
        name: "후추",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    recipe: "식도락 여행기 이벤트 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1169"
  },
  "맛있는 촉촉 으깬 감자": {
    name: "맛있는 촉촉 으깬 감자",
    class: "음식",
    group: "촉촉 으깬 감자",
    level: 3,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 228pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "감자",
        amount: 6
      },
      {
        name: "크림",
        amount: 4
      },
      {
        name: "후추",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    recipe: "식도락 여행기 이벤트 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1170"
  },
  "이상한 꼬꼬 연두부": {
    name: "이상한 꼬꼬 연두부",
    class: "음식",
    group: "꼬꼬 연두부",
    level: 4,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 224pt, 치명타 확률이 6% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 4
      },
      {
        name: "햄",
        amount: 2
      },
      {
        name: "새알",
        amount: 2
      },
      {
        name: "금어초",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서객잔에 위치한 NPC 언소가 주는 '속세를 뛰어넘는 요리' 월드 임무 보상",
    image: "https://genshin.gamedot.org/file/archive?id=2109"
  },
  "꼬꼬 연두부": {
    name: "꼬꼬 연두부",
    class: "음식",
    group: "꼬꼬 연두부",
    level: 4,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 272pt, 치명타 확률이 8% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 4
      },
      {
        name: "햄",
        amount: 2
      },
      {
        name: "새알",
        amount: 2
      },
      {
        name: "금어초",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서객잔에 위치한 NPC 언소가 주는 '속세를 뛰어넘는 요리' 월드 임무 보상",
    image: "https://genshin.gamedot.org/file/archive?id=2107"
  },
  "맛있는 꼬꼬 연두부": {
    name: "맛있는 꼬꼬 연두부",
    class: "음식",
    group: "꼬꼬 연두부",
    level: 4,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 320pt, 치명타 확률이 10% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 4
      },
      {
        name: "햄",
        amount: 2
      },
      {
        name: "새알",
        amount: 2
      },
      {
        name: "금어초",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서객잔에 위치한 NPC 언소가 주는 '속세를 뛰어넘는 요리' 월드 임무 보상",
    image: "https://genshin.gamedot.org/file/archive?id=2110"
  },
  "이상한 비옥야채쌈": {
    name: "이상한 비옥야채쌈",
    class: "음식",
    group: "비옥야채쌈",
    level: 4,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 224pt, 치명타 확률이 6% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "연꽃받침",
        amount: 3
      },
      {
        name: "절운고추",
        amount: 2
      },
      {
        name: "양배추",
        amount: 2
      },
      {
        name: "햄",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "국자의 장 제1막 진행 중 향릉에게서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1119"
  },
  "비옥야채쌈": {
    name: "비옥야채쌈",
    class: "음식",
    group: "비옥야채쌈",
    level: 4,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 272pt, 치명타 확률이 8% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "연꽃받침",
        amount: 3
      },
      {
        name: "절운고추",
        amount: 2
      },
      {
        name: "양배추",
        amount: 2
      },
      {
        name: "햄",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "국자의 장 제1막 진행 중 향릉에게서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1120"
  },
  "맛있는 비옥야채쌈": {
    name: "맛있는 비옥야채쌈",
    class: "음식",
    group: "비옥야채쌈",
    level: 4,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 320pt, 치명타 확률이 10% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "연꽃받침",
        amount: 3
      },
      {
        name: "절운고추",
        amount: 2
      },
      {
        name: "양배추",
        amount: 2
      },
      {
        name: "햄",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "국자의 장 제1막 진행 중 향릉에게서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1121"
  },
  "이상한 황금 크리스피 치킨": {
    name: "이상한 황금 크리스피 치킨",
    class: "음식",
    group: "황금 크리스피 치킨",
    level: 4,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 224pt, 치명타 확률이 6% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 4
      },
      {
        name: "버터",
        amount: 4
      },
      {
        name: "후추",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    recipe: "식도락 여행기 이벤트 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1190"
  },
  "황금 크리스피 치킨": {
    name: "황금 크리스피 치킨",
    class: "음식",
    group: "황금 크리스피 치킨",
    level: 4,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 272pt, 치명타 확률이 8% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 4
      },
      {
        name: "버터",
        amount: 4
      },
      {
        name: "후추",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    recipe: "식도락 여행기 이벤트 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1191"
  },
  "맛있는 황금 크리스피 치킨": {
    name: "맛있는 황금 크리스피 치킨",
    class: "음식",
    group: "황금 크리스피 치킨",
    level: 4,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 320pt, 치명타 확률이 10% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 4
      },
      {
        name: "버터",
        amount: 4
      },
      {
        name: "후추",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    recipe: "식도락 여행기 이벤트 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1192"
  },
  "이상한 선도장": {
    name: "이상한 선도장",
    class: "음식",
    group: "선도장",
    level: 5,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 260pt, 치명타 확률이 8% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "햄",
        amount: 4
      },
      {
        name: "꽃게",
        amount: 3
      },
      {
        name: "생새우살",
        amount: 3
      },
      {
        name: "송이버섯",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    recipe: "경운봉 하늘섬 등반을 통해 레시피 습득",
    image: "https://genshin.gamedot.org/file/archive?id=1244"
  },
  "선도장": {
    name: "선도장",
    class: "음식",
    group: "선도장",
    level: 5,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 316pt, 치명타 확률이 10% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "햄",
        amount: 4
      },
      {
        name: "꽃게",
        amount: 3
      },
      {
        name: "생새우살",
        amount: 3
      },
      {
        name: "송이버섯",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    recipe: "경운봉 하늘섬 등반을 통해 레시피 습득",
    image: "https://genshin.gamedot.org/file/archive?id=1245"
  },
  "맛있는 선도장": {
    name: "맛있는 선도장",
    class: "음식",
    group: "선도장",
    level: 5,
    type: "공격력 강화계",
    description: "파티 내 모든 캐릭터의 공격력이 372pt, 치명타 확률이 12% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "햄",
        amount: 4
      },
      {
        name: "꽃게",
        amount: 3
      },
      {
        name: "생새우살",
        amount: 3
      },
      {
        name: "송이버섯",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    recipe: "경운봉 하늘섬 등반을 통해 레시피 습득",
    image: "https://genshin.gamedot.org/file/archive?id=1246"
  },
  //치명타 강화계
  "라즈베리 허브 쥬스": {
    name: "라즈베리 허브 쥬스",
    class: "음식",
    level: 2,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 16% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    drop: "몬드성 '천사의 몫' 주점에 위치한 NPC 찰스로부터 구입"
  },
  "이상한 만족 샐러드": {
    name: "이상한 만족 샐러드",
    class: "음식",
    group: "만족 샐러드",
    level: 2,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 6% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "양배추",
        amount: 2
      },
      {
        name: "사과",
        amount: 2
      },
      {
        name: "새알",
        amount: 1
      },
      {
        name: "감자",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1069"
  },
  "만족 샐러드": {
    name: "만족 샐러드",
    class: "음식",
    group: "만족 샐러드",
    level: 2,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 9% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "양배추",
        amount: 2
      },
      {
        name: "사과",
        amount: 2
      },
      {
        name: "새알",
        amount: 1
      },
      {
        name: "감자",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1070"
  },
  "맛있는 만족 샐러드": {
    name: "맛있는 만족 샐러드",
    class: "음식",
    group: "만족 샐러드",
    level: 2,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 12% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "양배추",
        amount: 2
      },
      {
        name: "사과",
        amount: 2
      },
      {
        name: "새알",
        amount: 1
      },
      {
        name: "감자",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1071"
  },
  "지고한 지혜": {
    name: "지고한 지혜 (라이프)",
    class: "음식",
    group: "만족 샐러드",
    level: 2,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 16% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "양배추",
        amount: 2
      },
      {
        name: "사과",
        amount: 2
      },
      {
        name: "새알",
        amount: 1
      },
      {
        name: "감자",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1072"
  },
  "이상한 바위항 지삼선": {
    name: "이상한 바위항 지삼선",
    class: "음식",
    group: "바위항 지삼선",
    level: 2,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 6% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "감자",
        amount: 2
      },
      {
        name: "유리주머니",
        amount: 1
      },
      {
        name: "송이버섯",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 유리정 앞에 위치한 NPC 리채로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1231"
  },
  "바위항 지삼선": {
    name: "바위항 지삼선",
    class: "음식",
    group: "바위항 지삼선",
    level: 2,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 9% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "감자",
        amount: 2
      },
      {
        name: "유리주머니",
        amount: 1
      },
      {
        name: "송이버섯",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 유리정 앞에 위치한 NPC 리채로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1232"
  },
  "맛있는 바위항 지삼선": {
    name: "맛있는 바위항 지삼선",
    class: "음식",
    group: "바위항 지삼선",
    level: 2,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 12% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "감자",
        amount: 2
      },
      {
        name: "유리주머니",
        amount: 1
      },
      {
        name: "송이버섯",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 유리정 앞에 위치한 NPC 리채로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1233"
  },
  "이상한 절운고추 치킨": {
    name: "이상한 절운고추 치킨",
    class: "음식",
    group: "절운고추 치킨",
    level: 2,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 6% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 2
      },
      {
        name: "절운고추",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 15 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1057"
  },
  "절운고추 치킨": {
    name: "절운고추 치킨",
    class: "음식",
    group: "절운고추 치킨",
    level: 2,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 9% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 2
      },
      {
        name: "절운고추",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 15 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1058"
  },
  "맛있는 절운고추 치킨": {
    name: "맛있는 절운고추 치킨",
    class: "음식",
    group: "절운고추 치킨",
    level: 2,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 12% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 2
      },
      {
        name: "절운고추",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 15 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1059"
  },
  "로큰닭": {
    name: "로·큰·닭!",
    class: "음식",
    group: "절운고추 치킨",
    level: 2,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 16% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새고기",
        amount: 2
      },
      {
        name: "절운고추",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 15 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1060"
  },
  "이상한 높이 쌓기": {
    name: "이상한 「높이 쌓기」",
    class: "음식",
    group: "「높이 쌓기」",
    level: 3,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 10% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "감자",
        amount: 3
      },
      {
        name: "등불꽃",
        amount: 1
      },
      {
        name: "치즈",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 40 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1193"
  },
  "높이 쌓기": {
    name: "「높이 쌓기」",
    class: "음식",
    group: "「높이 쌓기」",
    level: 3,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 15% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "감자",
        amount: 3
      },
      {
        name: "등불꽃",
        amount: 1
      },
      {
        name: "치즈",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 40 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1194"
  },
  "맛있는 높이 쌓기": {
    name: "맛있는 「높이 쌓기」",
    class: "음식",
    group: "「높이 쌓기」",
    level: 3,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 20% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "감자",
        amount: 3
      },
      {
        name: "등불꽃",
        amount: 1
      },
      {
        name: "치즈",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 40 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1195"
  },
  "몬드의 과거": {
    name: "「몬드의 과거」",
    class: "음식",
    group: "「높이 쌓기」",
    level: 3,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 20%, 치명타 피해가 20% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "감자",
        amount: 3
      },
      {
        name: "등불꽃",
        amount: 1
      },
      {
        name: "치즈",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 40 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1196"
  },
  "이상한 훈제고기 볶음": {
    name: "이상한 훈제고기 볶음",
    class: "음식",
    group: "훈제고기 볶음",
    level: 3,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 10% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "햄",
        amount: 2
      },
      {
        name: "송이버섯",
        amount: 2
      },
      {
        name: "금어초",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 유리정 앞에 위치한 NPC 리채로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=882"
  },
  "훈제고기 볶음": {
    name: "훈제고기 볶음",
    class: "음식",
    group: "훈제고기 볶음",
    level: 3,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 15% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "햄",
        amount: 2
      },
      {
        name: "송이버섯",
        amount: 2
      },
      {
        name: "금어초",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 유리정 앞에 위치한 NPC 리채로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=881"
  },
  "맛있는 훈제고기 볶음": {
    name: "맛있는 훈제고기 볶음",
    class: "음식",
    group: "훈제고기 볶음",
    level: 3,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 20% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "햄",
        amount: 2
      },
      {
        name: "송이버섯",
        amount: 2
      },
      {
        name: "금어초",
        amount: 1
      },
      {
        name: "후추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 유리정 앞에 위치한 NPC 리채로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=883"
  },
  "이상한 흥얼채": {
    name: "이상한 흥얼채",
    class: "음식",
    group: "흥얼채",
    level: 3,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 10% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 3
      },
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "쌀",
        amount:3
      },
      {
        name: "두부",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 40 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1133"
  },
  "흥얼채": {
    name: "흥얼채",
    class: "음식",
    group: "흥얼채",
    level: 3,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 15% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 3
      },
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "쌀",
        amount:3
      },
      {
        name: "두부",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 40 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1134"
  },
  "맛있는 흥얼채": {
    name: "맛있는 흥얼채",
    class: "음식",
    group: "흥얼채",
    level: 3,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 20% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 3
      },
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "쌀",
        amount:3
      },
      {
        name: "두부",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 40 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1135"
  },
  "암울한 미래": {
    name: "암울한 미래",
    class: "음식",
    group: "흥얼채",
    level: 3,
    type: "치명타 강화계",
    description: "파티 내 모든 캐릭터의 치명타 확률이 20%, 치명타 피해가 20% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "생선 살코기",
        amount: 3
      },
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "쌀",
        amount:3
      },
      {
        name: "두부",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 40 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1136"
  },
  //물리 피해 강화계
  "이상한 냉채수육": {
    name: "이상한 냉채수육",
    class: "음식",
    group: "냉채수육",
    level: 3,
    type: "물리 피해 강화계",
    description: "파티 내 모든 캐릭터의 물리 피해가 20% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "햄",
        amount: 1
      },
      {
        name: "베이컨",
        amount: 1
      },
      {
        name: "소시지",
        amount:1
      },
      {
        name: "허브",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "'매의 문' 비경 최초 클리어 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1213"
  },
  "냉채수육": {
    name: "냉채수육",
    class: "음식",
    group: "냉채수육",
    level: 3,
    type: "물리 피해 강화계",
    description: "파티 내 모든 캐릭터의 물리 피해가 30% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "햄",
        amount: 1
      },
      {
        name: "베이컨",
        amount: 1
      },
      {
        name: "소시지",
        amount:1
      },
      {
        name: "허브",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "'매의 문' 비경 최초 클리어 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1214"
  },
  "맛있는 냉채수육": {
    name: "맛있는 냉채수육",
    class: "음식",
    group: "냉채수육",
    level: 3,
    type: "물리 피해 강화계",
    description: "파티 내 모든 캐릭터의 물리 피해가 40% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "햄",
        amount: 1
      },
      {
        name: "베이컨",
        amount: 1
      },
      {
        name: "소시지",
        amount:1
      },
      {
        name: "허브",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "'매의 문' 비경 최초 클리어 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1215"
  },
  "축복의 교향곡": {
    name: "축복의 교향곡",
    class: "음식",
    group: "냉채수육",
    level: 3,
    type: "물리 피해 강화계",
    description: "파티 내 모든 캐릭터의 물리 피해가 55% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "햄",
        amount: 1
      },
      {
        name: "베이컨",
        amount: 1
      },
      {
        name: "소시지",
        amount:1
      },
      {
        name: "허브",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "'매의 문' 비경 최초 클리어 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1216"
  },
  "이상한 절운 누룽지": {
    name: "이상한 절운 누룽지",
    class: "음식",
    group: "절운 누룽지",
    level: 3,
    type: "물리 피해 강화계",
    description: "파티 내 모든 캐릭터의 물리 피해가 20% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "말총",
        amount: 2
      },
      {
        name: "쌀",
        amount: 2
      },
      {
        name: "햄",
        amount:1
      },
      {
        name: "절운고추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "경책산장에 위치한 NPC 소백으로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1157"
  },
  "절운 누룽지": {
    name: "절운 누룽지",
    class: "음식",
    group: "절운 누룽지",
    level: 3,
    type: "물리 피해 강화계",
    description: "파티 내 모든 캐릭터의 물리 피해가 30% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "말총",
        amount: 2
      },
      {
        name: "쌀",
        amount: 2
      },
      {
        name: "햄",
        amount:1
      },
      {
        name: "절운고추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "경책산장에 위치한 NPC 소백으로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1156"
  },
  "맛있는 절운 누룽지": {
    name: "맛있는 절운 누룽지",
    class: "음식",
    group: "절운 누룽지",
    level: 3,
    type: "물리 피해 강화계",
    description: "파티 내 모든 캐릭터의 물리 피해가 40% 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "말총",
        amount: 2
      },
      {
        name: "쌀",
        amount: 2
      },
      {
        name: "햄",
        amount:1
      },
      {
        name: "절운고추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "경책산장에 위치한 NPC 소백으로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1158"
  },
  "이상한 천추육": {
    name: "이상한 천추육",
    class: "음식",
    group: "천추육",
    level: 4,
    type: "물리 피해 강화계",
    description: "파티 내 모든 캐릭터의 물리 피해가 25%, 치명타 확률이 6% 증가한다. 지속 시간:300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 4
      },
      {
        name: "설탕",
        amount: 2
      },
      {
        name: "청심",
        amount:1
      },
      {
        name: "송이버섯",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월의 평판 7레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1165"
  },
  "천추육": {
    name: "천추육",
    class: "음식",
    group: "천추육",
    level: 4,
    type: "물리 피해 강화계",
    description: "파티 내 모든 캐릭터의 물리 피해가 35%, 치명타 확률이 8% 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 4
      },
      {
        name: "설탕",
        amount: 2
      },
      {
        name: "청심",
        amount:1
      },
      {
        name: "송이버섯",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월의 평판 7레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1166"
  },
  "맛있는 천추육": {
    name: "맛있는 천추육",
    class: "음식",
    group: "천추육",
    level: 4,
    type: "물리 피해 강화계",
    description: "파티 내 모든 캐릭터의 물리 피해가 45%, 치명타 확률이 10% 증가한다. 지속 시간 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 4
      },
      {
        name: "설탕",
        amount: 2
      },
      {
        name: "청심",
        amount:1
      },
      {
        name: "송이버섯",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월의 평판 7레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1167"
  },
  //스태미나 회복계
  "이상한 북극 훈제 닭": {
    name: "이상한 북극 훈제 닭",
    class: "음식",
    group: "북극 훈제 닭",
    level: 2,
    type: "스태미나 회복계",
    description: "스태미나 40pt 회복.",
    keyword: [],
    combination: [
      {
        name: "훈제 새고기",
        amount: 1
      },
      {
        name: "양파",
        amount: 1
      },
      {
        name: "양배추",
        amount:1
      }
    ],
    combinationType: "요리 재료",
    recipe: "바람 드래곤의 폐허 중앙 탑의 상자에서 획득",
    drop: "샘물 마을에 위치한 NPC 브룩이 판매 (모험 등급 15 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1116"
  },
  "북극 훈제 닭": {
    name: "북극 훈제 닭",
    class: "음식",
    group: "북극 훈제 닭",
    level: 2,
    type: "스태미나 회복계",
    description: "스태미나 50pt 회복.",
    keyword: [],
    combination: [
      {
        name: "훈제 새고기",
        amount: 1
      },
      {
        name: "양파",
        amount: 1
      },
      {
        name: "양배추",
        amount:1
      }
    ],
    combinationType: "요리 재료",
    recipe: "바람 드래곤의 폐허 중앙 탑의 상자에서 획득",
    drop: "샘물 마을에 위치한 NPC 브룩이 판매 (모험 등급 15 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1117"
  },
  "맛있는 북극 훈제 닭": {
    name: "맛있는 북극 훈제 닭",
    class: "음식",
    group: "북극 훈제 닭",
    level: 2,
    type: "스태미나 회복계",
    description: "스태미나 60pt 회복.",
    keyword: [],
    combination: [
      {
        name: "훈제 새고기",
        amount: 1
      },
      {
        name: "양파",
        amount: 1
      },
      {
        name: "양배추",
        amount:1
      }
    ],
    combinationType: "요리 재료",
    recipe: "바람 드래곤의 폐허 중앙 탑의 상자에서 획득",
    drop: "샘물 마을에 위치한 NPC 브룩이 판매 (모험 등급 15 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1118"
  },
  "이상한 산미 울면": {
    name: "이상한 산미 울면",
    class: "음식",
    group: "산미 울면",
    level: 2,
    type: "스태미나 회복계",
    description: "스태미나 40pt 회복.",
    keyword: [],
    combination: [
      {
        name: "버섯",
        amount: 3
      },
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "밀가루",
        amount:2
      }
    ],
    combinationType: "요리 재료",
    recipe: "경책산장에 위치한 NPC 소백으로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1123"
  },
  "산미 울면": {
    name: "산미 울면",
    class: "음식",
    group: "산미 울면",
    level: 2,
    type: "스태미나 회복계",
    description: "스태미나 50pt 회복.",
    keyword: [],
    combination: [
      {
        name: "버섯",
        amount: 3
      },
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "밀가루",
        amount:2
      }
    ],
    combinationType: "요리 재료",
    recipe: "경책산장에 위치한 NPC 소백으로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1124"
  },
  "맛있는 산미 울면": {
    name: "맛있는 산미 울면",
    class: "음식",
    group: "산미 울면",
    level: 2,
    type: "스태미나 회복계",
    description: "스태미나 60pt 회복.",
    keyword: [],
    combination: [
      {
        name: "버섯",
        amount: 3
      },
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "밀가루",
        amount:2
      }
    ],
    combinationType: "요리 재료",
    recipe: "경책산장에 위치한 NPC 소백으로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1125"
  },
  "산미 냉면": {
    name: "산미 냉면",
    class: "음식",
    group: "산미 울면",
    level: 2,
    type: "스태미나 회복계",
    description: "스태미나 80pt 회복.",
    keyword: [],
    combination: [
      {
        name: "버섯",
        amount: 3
      },
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "밀가루",
        amount:2
      }
    ],
    combinationType: "요리 재료",
    recipe: "경책산장에 위치한 NPC 소백으로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1126"
  },
  //스테미나 버프계
  "이상한 연밥 계란찜": {
    name: "이상한 연밥 계란찜",
    class: "음식",
    group: "연밥 계란찜",
    level: 2,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 대시 시 소모하는 스태미나가 15% 감소한다. 지속시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "연꽃받침",
        amount: 1
      },
      {
        name: "새알",
        amount: 1
      },
      {
        name: "설탕",
        amount:1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 복불려에 위치한 NPC 약사 아규로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1145"
  },
  "연밥 계란찜": {
    name: "연밥 계란찜",
    class: "음식",
    group: "연밥 계란찜",
    level: 2,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 대시 시 소모하는 스태미나가 20% 감소한다. 지속시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "연꽃받침",
        amount: 1
      },
      {
        name: "새알",
        amount: 1
      },
      {
        name: "설탕",
        amount:1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 복불려에 위치한 NPC 약사 아규로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1146"
  },
  "맛있는 연밥 계란찜": {
    name: "맛있는 연밥 계란찜",
    class: "음식",
    group: "연밥 계란찜",
    level: 2,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 대시 시 소모하는 스태미나가 25% 감소한다. 지속시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "연꽃받침",
        amount: 1
      },
      {
        name: "새알",
        amount: 1
      },
      {
        name: "설탕",
        amount:1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 복불려에 위치한 NPC 약사 아규로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=1147"
  },
  "이상한 크림 스튜": {
    name: "이상한 크림 스튜",
    class: "음식",
    group: "크림 스튜",
    level: 2,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 대시 시 소모하는 스태미나가 15% 감소한다. 지속시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "크림",
        amount: 2
      },
      {
        name: "금어초",
        amount:1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 25 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1073"
  },
  "크림 스튜": {
    name: "크림 스튜",
    class: "음식",
    group: "크림 스튜",
    level: 2,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 대시 시 소모하는 스태미나가 20% 감소한다. 지속시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "크림",
        amount: 2
      },
      {
        name: "금어초",
        amount:1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 25 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1074"
  },
  "맛있는 크림 스튜": {
    name: "맛있는 크림 스튜",
    class: "음식",
    group: "크림 스튜",
    level: 2,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 대시 시 소모하는 스태미나가 25% 감소한다. 지속시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "크림",
        amount: 2
      },
      {
        name: "금어초",
        amount:1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 25 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1075"
  },
  "매운맛 스튜": {
    name: "매운맛 스튜",
    class: "음식",
    group: "크림 스튜",
    level: 2,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 대시 시 소모하는 스태미나가 25% 감소한다. 지속시간: 1500초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 2
      },
      {
        name: "크림",
        amount: 2
      },
      {
        name: "금어초",
        amount:1
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 25 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1076"
  },
  "이상한 바람신의 잡채": {
    name: "이상한 바람신의 잡채",
    class: "음식",
    group: "바람신의 잡채",
    level: 3,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 활강/대시 시 소모하는 스태미나가 15% 감소한다. 지속 시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "당근",
        amount: 4
      },
      {
        name: "감자",
        amount: 4
      },
      {
        name: "양파",
        amount: 4
      }
    ],
    combinationType: "요리 재료",
    recipe: "바람맞이 봉우리에 위치한 NPC 핀더와 대화",
    image: "https://genshin.gamedot.org/file/archive?id=1091"
  },
  "바람신의 잡채": {
    name: "바람신의 잡채",
    class: "음식",
    group: "바람신의 잡채",
    level: 3,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 활강/대시 시 소모하는 스태미나가 20% 감소한다. 지속 시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "당근",
        amount: 4
      },
      {
        name: "감자",
        amount: 4
      },
      {
        name: "양파",
        amount: 4
      }
    ],
    combinationType: "요리 재료",
    recipe: "바람맞이 봉우리에 위치한 NPC 핀더와 대화",
    image: "https://genshin.gamedot.org/file/archive?id=1092"
  },
  "맛있는 바람신의 잡채": {
    name: "맛있는 바람신의 잡채",
    class: "음식",
    group: "바람신의 잡채",
    level: 3,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 활강/대시 시 소모하는 스태미나가 25% 감소한다. 지속 시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "당근",
        amount: 4
      },
      {
        name: "감자",
        amount: 4
      },
      {
        name: "양파",
        amount: 4
      }
    ],
    combinationType: "요리 재료",
    recipe: "바람맞이 봉우리에 위치한 NPC 핀더와 대화",
    image: "https://genshin.gamedot.org/file/archive?id=1093"
  },
  "찐 바람신의 잡채": {
    name: "찐·바람신의 잡채",
    class: "음식",
    group: "바람신의 잡채",
    level: 3,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 활강/대시 시 소모하는 스태미나가 25% 감소한다. 지속 시간: 1800초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "당근",
        amount: 4
      },
      {
        name: "감자",
        amount: 4
      },
      {
        name: "양파",
        amount: 4
      }
    ],
    combinationType: "요리 재료",
    recipe: "바람맞이 봉우리에 위치한 NPC 핀더와 대화",
    image: "https://genshin.gamedot.org/file/archive?id=1094"
  },
  "이상한 중원 내장꼬치": {
    name: "이상한 중원 내장꼬치",
    class: "음식",
    group: "중원 내장꼬치",
    level: 3,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 활강/대시 시 소모하는 스태미나가 15% 감소한다. 지속 시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "생선 살코기",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "소금",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "취결언덕에 위치한 NPC 주 사장이 주는 월드 임무 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1159"
  },
  "중원 내장꼬치": {
    name: "중원 내장꼬치",
    class: "음식",
    group: "중원 내장꼬치",
    level: 3,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 활강/대시 시 소모하는 스태미나가 20% 감소한다. 지속 시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "생선 살코기",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "소금",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "취결언덕에 위치한 NPC 주 사장이 주는 월드 임무 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1160"
  },
  "맛있는 중원 내장꼬치": {
    name: "맛있는 중원 내장꼬치",
    class: "음식",
    group: "중원 내장꼬치",
    level: 3,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 활강/대시 시 소모하는 스태미나가 25% 감소한다. 지속 시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "생선 살코기",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "소금",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "취결언덕에 위치한 NPC 주 사장이 주는 월드 임무 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1161"
  },
  "이상한 허니캐럿그릴": {
    name: "이상한 허니캐럿그릴",
    class: "음식",
    group: "허니캐럿그릴",
    level: 3,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 활강/대시 시 소모하는 스태미나가 15% 감소한다. 지속 시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "당근",
        amount: 2
      },
      {
        name: "설탕",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: ["진(원신) 전설 임무를 통해 레시피 획득", "'음식 주문서' 일일 의뢰 완료 보상 (다운 와이너리 버전)"],
    image: "https://genshin.gamedot.org/file/archive?id=1178"
  },
  "허니캐럿그릴": {
    name: "허니캐럿그릴",
    class: "음식",
    group: "허니캐럿그릴",
    level: 3,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 활강/대시 시 소모하는 스태미나가 20% 감소한다. 지속 시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "당근",
        amount: 2
      },
      {
        name: "설탕",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: ["진(원신) 전설 임무를 통해 레시피 획득", "'음식 주문서' 일일 의뢰 완료 보상 (다운 와이너리 버전)"],
    image: "https://genshin.gamedot.org/file/archive?id=1179"
  },
  "맛있는 허니캐럿그릴": {
    name: "맛있는 허니캐럿그릴",
    class: "음식",
    group: "허니캐럿그릴",
    level: 3,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 활강/대시 시 소모하는 스태미나가 25% 감소한다. 지속 시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "당근",
        amount: 2
      },
      {
        name: "설탕",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: ["진(원신) 전설 임무를 통해 레시피 획득", "'음식 주문서' 일일 의뢰 완료 보상 (다운 와이너리 버전)"],
    image: "https://genshin.gamedot.org/file/archive?id=1180"
  },
  "이상한 허브 고기말이": {
    name: "이상한 허브 고기말이",
    class: "음식",
    group: "허브 고기말이",
    level: 3,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 활강/대시 시 소모하는 스태미나가 15% 감소한다. 지속 시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "허브",
        amount: 4
      },
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "절운고추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1181"
  },
  "허브 고기말이": {
    name: "허브 고기말이",
    class: "음식",
    group: "허브 고기말이",
    level: 3,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 활강/대시 시 소모하는 스태미나가 20% 감소한다. 지속 시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "허브",
        amount: 4
      },
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "절운고추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1182"
  },
  "맛있는 허브 고기말이": {
    name: "맛있는 허브 고기말이",
    class: "음식",
    group: "허브 고기말이",
    level: 3,
    type: "스태미나 버프계",
    description: "파티 내 모든 캐릭터의 활강/대시 시 소모하는 스태미나가 25% 감소한다. 지속 시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "허브",
        amount: 4
      },
      {
        name: "짐승고기",
        amount: 3
      },
      {
        name: "절운고추",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 20 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1183"
  },
  //방어력 강화계
  "이상한 어부 토스트": {
    name: "이상한 어부 토스트",
    class: "음식",
    group: "어부 토스트",
    level: 2,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 88pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "토마토",
        amount: 2
      },
      {
        name: "양파",
        amount: 1
      },
      {
        name: "우유",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1141"
  },
  "어부 토스트": {
    name: "어부 토스트",
    class: "음식",
    group: "어부 토스트",
    level: 2,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 107pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "토마토",
        amount: 2
      },
      {
        name: "양파",
        amount: 1
      },
      {
        name: "우유",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1142"
  },
  "맛있는 어부 토스트": {
    name: "맛있는 어부 토스트",
    class: "음식",
    group: "어부 토스트",
    level: 2,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 126pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "토마토",
        amount: 2
      },
      {
        name: "양파",
        amount: 1
      },
      {
        name: "우유",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1143"
  },
  "어향 토스트": {
    name: "어향 토스트",
    class: "음식",
    group: "어부 토스트",
    level: 2,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 151pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "토마토",
        amount: 2
      },
      {
        name: "양파",
        amount: 1
      },
      {
        name: "우유",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1144"
  },
  "이상한 진주비취백옥탕": {
    name: "이상한 진주비취백옥탕",
    class: "음식",
    group: "진주비취백옥탕",
    level: 2,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 88pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "금어초",
        amount: 2
      },
      {
        name: "두부",
        amount: 2
      },
      {
        name: "연꽃받침",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "마신 의뢰 제1장 제1막 진행 중 오장산에서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1162"
  },
  "진주비취백옥탕": {
    name: "진주비취백옥탕",
    class: "음식",
    group: "진주비취백옥탕",
    level: 2,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 107pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "금어초",
        amount: 2
      },
      {
        name: "두부",
        amount: 2
      },
      {
        name: "연꽃받침",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "마신 의뢰 제1장 제1막 진행 중 오장산에서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1163"
  },
  "맛있는 진주비취백옥탕": {
    name: "맛있는 진주비취백옥탕",
    class: "음식",
    group: "진주비취백옥탕",
    level: 2,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 126pt 증가한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "금어초",
        amount: 2
      },
      {
        name: "두부",
        amount: 2
      },
      {
        name: "연꽃받침",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "마신 의뢰 제1장 제1막 진행 중 오장산에서 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1164"
  },
  "이상한 연꽃 파이": {
    name: "이상한 연꽃 파이",
    class: "음식",
    group: "연꽃 파이",
    level: 3,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 165pt 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "행인",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "버터",
        amount: 2
      },
      {
        name: "설탕",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월의 평판 4레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1247"
  },
  "연꽃 파이": {
    name: "연꽃 파이",
    class: "음식",
    group: "연꽃 파이",
    level: 3,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 200pt 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "행인",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "버터",
        amount: 2
      },
      {
        name: "설탕",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월의 평판 4레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1248"
  },
  "맛있는 연꽃 파이": {
    name: "맛있는 연꽃 파이",
    class: "음식",
    group: "연꽃 파이",
    level: 3,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 235pt 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "행인",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 2
      },
      {
        name: "버터",
        amount: 2
      },
      {
        name: "설탕",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월의 평판 4레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1249"
  },
  "이상한 연꽃 해산물 수프": {
    name: "이상한 연꽃 해산물 수프",
    class: "음식",
    group: "연꽃 해산물 수프",
    level: 3,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 165pt 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "꽃게",
        amount: 4
      },
      {
        name: "통통 연꽃",
        amount: 1
      },
      {
        name: "허브",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 30 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1046"
  },
  "연꽃 해산물 수프": {
    name: "연꽃 해산물 수프",
    class: "음식",
    group: "연꽃 해산물 수프",
    level: 3,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 200pt 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "꽃게",
        amount: 4
      },
      {
        name: "통통 연꽃",
        amount: 1
      },
      {
        name: "허브",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 30 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1047"
  },
  "맛있는 연꽃 해산물 수프": {
    name: "맛있는 연꽃 해산물 수프",
    class: "음식",
    group: "연꽃 해산물 수프",
    level: 3,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 235pt 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "꽃게",
        amount: 4
      },
      {
        name: "통통 연꽃",
        amount: 1
      },
      {
        name: "허브",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 30 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1048"
  },
  "낚시의 극치": {
    name: "낚시의 극치",
    class: "음식",
    group: "연꽃 해산물 수프",
    level: 3,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 282pt 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "꽃게",
        amount: 4
      },
      {
        name: "통통 연꽃",
        amount: 1
      },
      {
        name: "허브",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드성 디어 헌터에 위치한 NPC 사라로부터 구입 (모험 등급 30 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1049"
  },
  "이상한 골든크랩": {
    name: "이상한 골든크랩",
    class: "음식",
    group: "골든크랩",
    level: 4,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 215pt 증가하고 치유 효과가 6% 상승한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새알",
        amount: 5
      },
      {
        name: "밀가루",
        amount: 5
      },
      {
        name: "꽃게",
        amount: 4
      },
      {
        name: "소금",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "모나(원신) 전설 임무를 통해 레시피 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1208"
  },
  "골든크랩": {
    name: "골든크랩",
    class: "음식",
    group: "골든크랩",
    level: 4,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 261pt 증가하고 치유 효과가 8% 상승한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새알",
        amount: 5
      },
      {
        name: "밀가루",
        amount: 5
      },
      {
        name: "꽃게",
        amount: 4
      },
      {
        name: "소금",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "모나(원신) 전설 임무를 통해 레시피 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1209"
  },
  "맛있는 골든크랩": {
    name: "맛있는 골든크랩",
    class: "음식",
    group: "골든크랩",
    level: 4,
    type: "방어력 강화계",
    description: "파티 내 모든 캐릭터의 방어력이 308pt 증가하고 치유 효과가 10% 상승한다. 지속시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "새알",
        amount: 5
      },
      {
        name: "밀가루",
        amount: 5
      },
      {
        name: "꽃게",
        amount: 4
      },
      {
        name: "소금",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "모나(원신) 전설 임무를 통해 레시피 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1210"
  },
  //보호막 강화계
  "이상한 고기죽순데침": {
    name: "이상한 고기죽순데침",
    class: "음식",
    group: "고기죽순데침",
    level: 3,
    type: "보호막 강화계",
    description: "파티 내 모든 캐릭터의 보호막 강화 효과가 20% 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "햄",
        amount: 2
      },
      {
        name: "새고기",
        amount: 2
      },
      {
        name: "죽순",
        amount: 1
      },
      {
        name: "버섯",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 40 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1037"
  },
  "고기죽순데침": {
    name: "고기죽순데침",
    class: "음식",
    group: "고기죽순데침",
    level: 3,
    type: "보호막 강화계",
    description: "파티 내 모든 캐릭터의 보호막 강화 효과가 25% 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "햄",
        amount: 2
      },
      {
        name: "새고기",
        amount: 2
      },
      {
        name: "죽순",
        amount: 1
      },
      {
        name: "버섯",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 40 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1038"
  },
  "맛있는 고기죽순데침": {
    name: "맛있는 고기죽순데침",
    class: "음식",
    group: "고기죽순데침",
    level: 3,
    type: "보호막 강화계",
    description: "파티 내 모든 캐릭터의 보호막 강화 효과가 30% 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "햄",
        amount: 2
      },
      {
        name: "새고기",
        amount: 2
      },
      {
        name: "죽순",
        amount: 1
      },
      {
        name: "버섯",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "리월항 만민당에 위치한 NPC 묘 사부로부터 구입 (모험 등급 40 이상)",
    image: "https://genshin.gamedot.org/file/archive?id=1039"
  },
  "이상한 버터 생선 구이": {
    name: "이상한 버터 생선 구이",
    class: "음식",
    group: "버터 생선 구이",
    level: 3,
    type: "보호막 강화계",
    description: "파티 내 모든 캐릭터의 보호막 강화 효과가 20% 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "버터",
        amount: 3
      },
      {
        name: "생선 살코기",
        amount: 3
      },
      {
        name: "소금",
        amount: 1
      },
      {
        name: "등불꽃",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "백악의 장 제1막 진행 중 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1197"
  },
  "버터 생선 구이": {
    name: "버터 생선 구이",
    class: "음식",
    group: "버터 생선 구이",
    level: 3,
    type: "보호막 강화계",
    description: "파티 내 모든 캐릭터의 보호막 강화 효과가 25% 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "버터",
        amount: 3
      },
      {
        name: "생선 살코기",
        amount: 3
      },
      {
        name: "소금",
        amount: 1
      },
      {
        name: "등불꽃",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "백악의 장 제1막 진행 중 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1198"
  },
  "맛있는 버터 생선 구이": {
    name: "맛있는 버터 생선 구이",
    class: "음식",
    group: "버터 생선 구이",
    level: 3,
    type: "보호막 강화계",
    description: "파티 내 모든 캐릭터의 보호막 강화 효과가 30% 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "버터",
        amount: 3
      },
      {
        name: "생선 살코기",
        amount: 3
      },
      {
        name: "소금",
        amount: 1
      },
      {
        name: "등불꽃",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "백악의 장 제1막 진행 중 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1199"
  },
  "숲의 꿈": {
    name: "「숲의 꿈」",
    class: "음식",
    group: "버터 생선 구이",
    level: 3,
    type: "보호막 강화계",
    description: "파티 내 모든 캐릭터의 보호막 강화 효과가 35% 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "버터",
        amount: 3
      },
      {
        name: "생선 살코기",
        amount: 3
      },
      {
        name: "소금",
        amount: 1
      },
      {
        name: "등불꽃",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "백악의 장 제1막 진행 중 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1200"
  },
  "이상한 새우살 볶음": {
    name: "이상한 새우살 볶음",
    class: "음식",
    group: "새우살 볶음",
    level: 3,
    type: "보호막 강화계",
    description: "파티 내 모든 캐릭터의 보호막 강화 효과가 20% 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "생새우살",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "금어초",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서 객잔에 위치한 NPC 베르 고데트로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=2111"
  },
  "새우살 볶음": {
    name: "새우살 볶음",
    class: "음식",
    group: "새우살 볶음",
    level: 3,
    type: "보호막 강화계",
    description: "파티 내 모든 캐릭터의 보호막 강화 효과가 25% 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "생새우살",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "금어초",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서 객잔에 위치한 NPC 베르 고데트로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=2106"
  },
  "맛있는 새우살 볶음": {
    name: "맛있는 새우살 볶음",
    class: "음식",
    group: "새우살 볶음",
    level: 3,
    type: "보호막 강화계",
    description: "파티 내 모든 캐릭터의 보호막 강화 효과가 30% 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "생새우살",
        amount: 4
      },
      {
        name: "밀가루",
        amount: 3
      },
      {
        name: "금어초",
        amount: 3
      }
    ],
    combinationType: "요리 재료",
    recipe: "망서 객잔에 위치한 NPC 베르 고데트로부터 구입",
    image: "https://genshin.gamedot.org/file/archive?id=2112"
  },
  "이상한 달빛 파이": {
    name: "이상한 달빛 파이",
    class: "음식",
    group: "달빛 파이",
    level: 4,
    type: "보호막 강화계",
    description: "파티 내 모든 캐릭터의 보호막 강화 효과가 25%, 방어력이 165pt 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 4
      },
      {
        name: "새알",
        amount: 4
      },
      {
        name: "버터",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드의 평판 7레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1205"
  },
  "달빛 파이": {
    name: "달빛 파이",
    class: "음식",
    group: "달빛 파이",
    level: 4,
    type: "보호막 강화계",
    description: "파티 내 모든 캐릭터의 보호막 강화 효과가 30%, 방어력이 200pt 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 4
      },
      {
        name: "새알",
        amount: 4
      },
      {
        name: "버터",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드의 평판 7레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1206"
  },
  "맛있는 달빛 파이": {
    name: "맛있는 달빛 파이",
    class: "음식",
    group: "달빛 파이",
    level: 4,
    type: "보호막 강화계",
    description: "파티 내 모든 캐릭터의 보호막 강화 효과가 35%, 방어력이 235pt 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 4
      },
      {
        name: "새알",
        amount: 4
      },
      {
        name: "버터",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드의 평판 7레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1207"
  },
  "격랑 파이": {
    name: "격랑 파이",
    class: "음식",
    group: "달빛 파이",
    level: 4,
    type: "보호막 강화계",
    description: "파티 내 모든 캐릭터의 보호막 강화 효과가 40%, 방어력이 282pt 증가한다. 지속 시간: 300초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "짐승고기",
        amount: 4
      },
      {
        name: "새알",
        amount: 4
      },
      {
        name: "버터",
        amount: 3
      },
      {
        name: "밀가루",
        amount: 2
      }
    ],
    combinationType: "요리 재료",
    recipe: "몬드의 평판 7레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1028"
  },
  //기타
  "이상한 뜨끈 야채 스튜": {
    name: "이상한 뜨끈 야채 스튜",
    class: "음식",
    group: "뜨끈 야채 스튜",
    level: 2,
    type: "상태이상 저항",
    description: "파티 내 모든 캐릭터의 추위 피로 누적 속도가 조금 감소한다. 지속시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "냉동 생고기",
        amount: 2
      },
      {
        name: "당근",
        amount: 2
      },
      {
        name: "토마토",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "눈 덮인 길 입구 캠프에 있는 해리스의 「아, 신선한 고기!」 의뢰 중 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1053"
  },
  "뜨끈 야채 스튜": {
    name: "뜨끈 야채 스튜",
    class: "음식",
    group: "뜨끈 야채 스튜",
    level: 2,
    type: "상태이상 저항",
    description: "파티 내 모든 캐릭터의 추위 피로 누적 속도가 소폭 감소한다. 지속시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "냉동 생고기",
        amount: 2
      },
      {
        name: "당근",
        amount: 2
      },
      {
        name: "토마토",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "눈 덮인 길 입구 캠프에 있는 해리스의 「아, 신선한 고기!」 의뢰 중 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1054"
  },
  "맛있는 뜨끈 야채 스튜": {
    name: "맛있는 뜨끈 야채 스튜",
    class: "음식",
    group: "뜨끈 야채 스튜",
    level: 2,
    type: "상태이상 저항",
    description: "파티 내 모든 캐릭터의 추위 피로 누적 속도가 감소한다. 지속시간: 900초. 다인모드 시 자신의 캐릭터에만 적용된다.",
    keyword: [],
    combination: [
      {
        name: "냉동 생고기",
        amount: 2
      },
      {
        name: "당근",
        amount: 2
      },
      {
        name: "토마토",
        amount: 1
      }
    ],
    combinationType: "요리 재료",
    recipe: "눈 덮인 길 입구 캠프에 있는 해리스의 「아, 신선한 고기!」 의뢰 중 획득",
    image: "https://genshin.gamedot.org/file/archive?id=1055"
  },
  "사과": {
    name: "사과",
    class: "재료",
    type: "원재료",
    level: 1,
    description: "선택한 캐릭터의 HP를 300pt 회복한다",
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=165",
    image: "https://genshin.gamedot.org/file/archive?id=903"
  },
  "일몰 열매": {
    name: "일몰 열매",
    class: "재료",
    type: "원재료",
    level: 1,
    description: "선택한 캐릭터의 HP를 300pt 회복한다",
    keyword: [],
    drop: "야외 채집",
    location: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=ko-kr#/map/2?shown_types=164",
    image: "https://genshin.gamedot.org/file/archive?id=408"
  },
  //포션
  "반석의 오일": {
    name: "반석의 오일",
    class: "음식",
    type: "포션",
    level: 3,
    description: "파티 내 모든 캐릭터의 바위 원소 피해가 25% 증가한다. 지속 시간: 300초",
    keyword: [],
    combination: [
      {
        name: "청개구리",
        amount: 1
      },
      {
        name: "콜 라피스",
        amount: 1
      }
    ],
    combinationType: "합성 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1102"
  },
  "방진 포션": {
    name: "방진 포션",
    class: "음식",
    type: "포션",
    level: 3,
    description: "파티 내 모든 캐릭터의 바위 원소 내성이 25% 증가한다. 지속 시간: 300초",
    keyword: [],
    combination: [
      {
        name: "나비 날개",
        amount: 1
      },
      {
        name: "콜 라피스",
        amount: 1
      }
    ],
    combinationType: "합성 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1104"
  },
  "열화의 오일": {
    name: "열화의 오일",
    class: "음식",
    type: "포션",
    level: 3,
    description: "파티 내 모든 캐릭터의 불 원소 피해가 25% 증가한다. 지속 시간: 300초",
    keyword: [],
    combination: [
      {
        name: "청개구리",
        amount: 1
      },
      {
        name: "화염꽃 꽃술",
        amount: 1
      }
    ],
    combinationType: "합성 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1148"
  },
  "내열 포션": {
    name: "내열 포션",
    class: "음식",
    type: "포션",
    level: 3,
    description: "파티 내 모든 캐릭터의 불 원소 내성이 25% 증가한다. 지속 시간: 300초",
    keyword: [],
    combination: [
      {
        name: "나비 날개",
        amount: 1
      },
      {
        name: "화염꽃 꽃술",
        amount: 1
      }
    ],
    combinationType: "합성 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1211"
  },
  "격류의 오일": {
    name: "격류의 오일",
    class: "음식",
    type: "포션",
    level: 3,
    description: "파티 내 모든 캐릭터의 물 원소 피해가 25% 증가한다. 지속 시간: 300초",
    keyword: [],
    combination: [
      {
        name: "청개구리",
        amount: 1
      },
      {
        name: "연꽃받침",
        amount: 1
      }
    ],
    combinationType: "합성 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1029"
  },
  "방습 포션": {
    name: "방습 포션",
    class: "음식",
    type: "포션",
    level: 3,
    description: "파티 내 모든 캐릭터의 물 원소 내성이 25% 증가한다. 지속 시간: 300초",
    keyword: [],
    combination: [
      {
        name: "나비 날개",
        amount: 1
      },
      {
        name: "연꽃받침",
        amount: 1
      }
    ],
    combinationType: "합성 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1103"
  },
  "서리의 오일": {
    name: "서리의 오일",
    class: "음식",
    type: "포션",
    level: 3,
    description: "파티 내 모든 캐릭터의 얼음 원소 피해가 25% 증가한다. 지속 시간: 300초",
    keyword: [],
    combination: [
      {
        name: "도마뱀 꼬리",
        amount: 1
      },
      {
        name: "서리꽃 꽃술",
        amount: 1
      }
    ],
    combinationType: "합성 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1127"
  },
  "내한 포션": {
    name: "내한 포션",
    class: "음식",
    type: "포션",
    level: 3,
    description: "파티 내 모든 캐릭터의 얼음 원소 내성이 25% 증가한다. 지속 시간: 300초",
    keyword: [],
    combination: [
      {
        name: "수정 코어",
        amount: 1
      },
      {
        name: "서리꽃 꽃술",
        amount: 1
      }
    ],
    combinationType: "합성 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1212"
  },
  "광풍의 오일": {
    name: "광풍의 오일",
    class: "음식",
    type: "포션",
    level: 3,
    description: "파티 내 모든 캐릭터의 바람 원소 피해가 25% 증가한다. 지속 시간: 300초",
    keyword: [],
    combination: [
      {
        name: "도마뱀 꼬리",
        amount: 1
      },
      {
        name: "민들레 씨앗",
        amount: 1
      }
    ],
    combinationType: "합성 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1041"
  },
  "방풍 포션": {
    name: "방풍 포션",
    class: "음식",
    type: "포션",
    level: 3,
    description: "파티 내 모든 캐릭터의 바람 원소 내성이 25% 증가한다. 지속 시간: 300초",
    keyword: [],
    combination: [
      {
        name: "수정 코어",
        amount: 1
      },
      {
        name: "민들레 씨앗",
        amount: 1
      }
    ],
    combinationType: "합성 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1105"
  },
  "천둥의 오일": {
    name: "천둥의 오일",
    class: "음식",
    type: "포션",
    level: 3,
    description: "파티 내 모든 캐릭터의 번개 원소 피해가 25% 증가한다. 지속 시간: 300초",
    keyword: [],
    combination: [
      {
        name: "청개구리",
        amount: 1
      },
      {
        name: "전기수정",
        amount: 1
      }
    ],
    combinationType: "합성 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1154"
  },
  "절연 포션": {
    name: "절연 포션",
    class: "음식",
    type: "포션",
    level: 3,
    description: "파티 내 모든 캐릭터의 번개 원소 내성이 25% 증가한다. 지속 시간: 300초",
    keyword: [],
    combination: [
      {
        name: "나비 날개",
        amount: 1
      },
      {
        name: "전기 수정",
        amount: 1
      }
    ],
    combinationType: "합성 재료",
    image: "https://genshin.gamedot.org/file/archive?id=1153"
  },

  //간편 아이템
  "바람 잡는 병": {
    name: "바람 잡는 병",
    class: "아이템",
    type: "간편 아이템",
    description: "바람의 씨앗을 담아 그 에너지를 이용해 윈드 필드를 생성시킬 수 있는 실용적인 아이템.",
    level: 4,
    combination: [
      {
        name: "폭풍의 씨앗",
        amount: 10
      },
      {
        name: "풍차 국화",
        amount: 30
      },
      {
        name: "수정덩이",
        amount: 50
      }
    ],
    combinationType: "합성",
    recipe: "몬드의 평판 3레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1588"
  },
  "삼공식 영양키트": {
    name: "삼공식·영양키트",
    class: "아이템",
    type: "간편 아이템",
    level: 4,
    combination: [
      {
        name: "도마뱀 꼬리",
        amount: 20
      },
      {
        name: "혼돈의 회로",
        amount: 20
      },
      {
        name: "전기 수정",
        amount: 50
      }
    ],
    combinationType: "단조",
    recipe: "몬드의 평판 5레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1589"
  },
  "바람의 보물찾기 나침반": {
    name: "바람의 보물찾기 나침반",
    class: "아이템",
    type: "간편 아이템",
    level: 4,
    combination: [
      {
        name: "골드 까마귀 휘장",
        amount: 10
      },
      {
        name: "바람버섯",
        amount: 30
      },
      {
        name: "수정덩이",
        amount: 50
      }
    ],
    combinationType: "단조",
    recipe: "몬드의 평판 6레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1590"
  },
  "바위의 보물찾기 나침반": {
    name: "바위의 보물찾기 나침반",
    class: "아이템",
    type: "간편 아이템",
    level: 4,
    combination: [
      {
        name: "골드 까마귀 휘장",
        amount: 10
      },
      {
        name: "콜 라피스",
        amount: 30
      },
      {
        name: "수정덩이",
        amount: 50
      }
    ],
    combinationType: "단조",
    recipe: "리월의 평판 6레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1586"
  },
  "사진기": {
    name: "바위의 보물찾기 나침반",
    class: "아이템",
    type: "간편 아이템",
    level: 4,
    drop: "비운상회의 욱이가 주는 「순간 포착」 의뢰 완료 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1581"
  },
  "특제 「사진기」": {
    name: "특제 「사진기」",
    class: "아이템",
    type: "간편 아이템",
    level: 4,
    drop: "리월항 동식이 주는 「완벽한 기념 사진」 의뢰 완료 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1582"
  },
  "매개 변수 변환기": {
    name: "매개 변수 변환기",
    class: "아이템",
    type: "간편 아이템",
    level: 4,
    drop: "리월항 동식이 주는 「완벽한 기념 사진」 의뢰 완료 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1583"
  },
  "포켓 워프 포인트": {
    name: "포켓 워프 포인트",
    class: "아이템",
    type: "소모품",
    level: 4,
    combination: [
      {
        name: "수정덩이",
        amount: 5
      },
      {
        name: "반딧불 정수",
        amount: 2
      },
      {
        name: "지맥의 마른 잎",
        amount: 1
      }
    ],
    combinationType: "합성",
    recipe: "몬드의 평판 6레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1591"
  },
  "선인 찾는 미식가": {
    name: "선인 찾는 미식가",
    class: "아이템",
    type: "소모품",
    level: 3,
    combination: [
      {
        name: "열화의 오일",
        amount: 1
      },
      {
        name: "수정 코어",
        amount: 2
      },
      {
        name: "철광",
        amount: 2
      }
    ],
    combinationType: "단조",
    recipe: "리월의 평판 5레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1585"
  },
  "바람 신의 눈동자 공명석": {
    name: "바람 신의 눈동자 공명석",
    class: "아이템",
    type: "소모품",
    level: 3,
    combination: [
      {
        name: "민들레 씨앗",
        amount: 5
      },
      {
        name: "세실리아꽃",
        amount: 5
      },
      {
        name: "수정덩이",
        amount: 1
      }
    ],
    combinationType: "단조",
    recipe: "몬드의 평판 5레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1587"
  },
  "바위 신의 눈동자 공명석": {
    name: "바위 신의 눈동자 공명석",
    class: "아이템",
    type: "소모품",
    level: 3,
    combination: [
      {
        name: "콜 라피스",
        amount: 5
      },
      {
        name: "유리백합",
        amount: 5
      },
      {
        name: "수정덩이",
        amount: 1
      }
    ],
    combinationType: "단조",
    recipe: "리월의 평판 2레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1584"
  },
  "발열병": {
    name: "발열병",
    class: "아이템",
    type: "소모품",
    level: 3,
    combination: [
      {
        name: "화염꽃 꽃술",
        amount: 2
      },
      {
        name: "성은 광석",
        amount: 2
      }
    ],
    combinationType: "단조",
    recipe: "인동의 나무 4레벨 보상",
    image: "https://genshin.gamedot.org/file/archive?id=1592"
  },
}

function searchMaterial(string) {
  string = string.replace(/\s/g, "");
  for(var i in materials) {
    var name = i.replace(/\s/g, "");
    var nameData = materials[i]["name"].replace(/\s/g, "");
    var keywords = materials[i]["keyword"] ? materials[i]["keyword"].map(x => x.replace(/\s/g, "")): [];
    if(string == name || string == nameData || keywords.indexOf(string) >= 0) {
      return materials[i];
    }
  }
}

module.exports.searchMaterial = searchMaterial;

const {chars} = require("../data/character.js");
const {wp} = require("../data/weapon.js");
const {MessageEmbed} = require("discord.js");

function getMaterial(material) {
  var key = Object.keys(materials).filter(key => materials[key] == material)[0].replace(/\s/g, "");
  var name = material["name"].replace(/\s/g, "");

  var result = {};
  result["character"] = [];
  result["weapon"] = [];
  result["recipe"] = [];

  for(var i in chars) {
    var character = chars[i];

    if(character["ascension"]) {
      var ascension = character["ascension"].map(x => x["items"].map(y => y["name"].replace(/\s/g, "")));
      for(var j = 0; j < ascension.length; j++) {
        if((ascension[j].indexOf(name) >= 0 || ascension[j].indexOf(key) >= 0) && result["character"].indexOf(character) == -1) {
          result["character"].push(character);
        }
      }
    }

    if(character["talent"]) {
      var talent = [];
      for(var j = 0; j < character["talent"].length; j++) {
        var t = character["talent"][j]["items"].map(x => x["items"].map(y => y["name"].replace(/\s/g, "")));
        talent = talent.concat(t);
      }

      for(var j = 0; j < talent.length; j++) {
        if((talent[j].indexOf(name) >= 0 || talent[j].indexOf(key) >= 0) && result["character"].indexOf(character) == -1) {
          result["character"].push(character);
        }
      }
    }
  }

  //weapon
  for(var i in wp) {
    var weapon = wp[i];
    if(weapon["ascension"]) {
      var ascension = weapon["ascension"].map(x => x["items"].map(y => y["name"].replace(/\s/g, "")));

      for(var j = 0; j < ascension.length; j++) {
        if((ascension[j].indexOf(name) >= 0 || ascension[j].indexOf(key) >= 0) && result["weapon"].indexOf(weapon) == -1) {
          result["weapon"].push(weapon);
          break;
        }
      }
    }
    if(weapon["forge"]) {
      var forge = weapon["forge"];
      for(var j = 0; j < forge.length; j++) {
        var fname = forge[j]["name"].replace(/\s/g, "");
        if((name == fname || key == fname) && result["recipe"].indexOf(weapon) == -1) {
          result["recipe"].push(weapon);
        }
      }
    }
  }

  //recipe
  for(var i in materials) {
    var material = materials[i];
    if(material["combination"]) {
      var combinations = materials[i]["combination"].map(x => x.name.replace(/\s/g, ""));
      if(material["group"]) {
        material = searchMaterial(material["group"]);
      }
      if((combinations.indexOf(name) >= 0 || combinations.indexOf(key) >= 0) && result["recipe"].indexOf(material) == -1) {
        result["recipe"].push(material);
      }
    }
    if(material["combinationOptions"]) {
      var options = material["combinationOptions"];
      for(var j = 0; j < options.length; j++) {
        var grouper = options[j].map(x => x.name.replace(/\s/g, ""));
        if((grouper.indexOf(name) >= 0 || grouper.indexOf(key) >= 0) && result["recipe"].indexOf(material) == -1) {
          result["recipe"].push(material);
        }
      }
    }
  }

  return result;
};

function createMaterialEmbed(material) {
  const embed = new MessageEmbed();
  var search = getMaterial(material);
  var character = search["character"];
  var weapon = search["weapon"];
  var recipe = search["recipe"];
  var wFilter = {};
  var rFilter = {};

  for(var i in weapon) {
    var type = weapon[i]["type"];
    if(wFilter[type] == undefined) {
      wFilter[type] = [];
    }

    wFilter[type].push(weapon[i]["name"]);
  }
  for(var i = 0; i < recipe.length; i++) {
    var item = recipe[i];
    var c = recipe[i]["class"];
    if(item["forge"]) {
      c = "무기류";
    }else if(recipe[i]["class"] == "아이템") {
      c = "간편 아이템";
    }else if(recipe[i]["type"] == "무기 강화 소재") {
      c = "무기 강화 소재";
    }else if(recipe[i]["class"] == "육성 소재" && recipe[i]["type"] != "무기 강화 소재") {
      continue;
    }

    if(!rFilter[c]) {
      rFilter[c] = [];
    }
    rFilter[c].push(item);
  }

  var description = "";
  var type = material["type"];

  if(material["description"]) {
    description += "**" + material["description"] + "**";
    description += "\n\n";
  }

  if(character.length > 0) {
    description += "**사용 캐릭터:** " + character.map(x => "`" + x["name"] + "`").join(", ");
    description += "\n";
  }

  if(wFilter["한손검"]) {
    description += "**사용 한손검:** " + wFilter["한손검"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  if(wFilter["양손검"]) {
    description += "**사용 양손검:** " + wFilter["양손검"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  if(wFilter["장병기"]) {
    description += "**사용 장병기:** " + wFilter["장병기"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  if(wFilter["활"]) {
    description += "**사용 활:** " + wFilter["활"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  if(wFilter["법구"]) {
    description += "**사용 법구:** " + wFilter["법구"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }

  if(material["recipe"]) {
    if(typeof material["recipe"] == "object") {
      description += "**레시피 출처:** " + material["recipe"].map(x => "`" + x + "`").join(", ");
    }else {
      description += "**레시피 출처:** `" + material["recipe"] + "`";
    }
    description += "\n";
  }

  if(material["combination"]) {
    var combinations = material["combination"];
    var clist = [];
    for(var i = 0; i < combinations.length; i++) {
      var cName = combinations[i]["name"];
      var cMaterial = searchMaterial(cName);
      clist.push({
        name: cMaterial["name"],
        amount: combinations[i]["amount"]
      });
    }

    var txt = material["combinationType"];

    description += `**${txt}:** ` + clist.map(x => "`" + x["name"] + " x " + x["amount"] + "`").join(", ");
    description += "\n";
  }

  if(material["combinationOptions"]) {
    var options = material["combinationOptions"];
    description += "**합성 획득:** " + options.map(x => x.map(y => "`" + y["name"] + " x " + y["amount"] + "`")).join(" OR ");
    description += "\n";
  }

  if(recipe.length > 0) {
    for(var i in rFilter) {
      description += `**사용 레시피 (${i})**: ` + rFilter[i].map(x => x["name"]).map(x => "`" + x + "`").join(", ");
      description += "\n";
    }
  }

  if(material["drop"]) {
    if(typeof material["drop"] == "object") {
      description += "**획득처:** " + material["drop"].map(x => "`" + x + "`").join(", ");
    }else {
      description += "**획득처:** `" + material["drop"] + "`";
    }
    description += "\n";
  }

  if(material["day"]) {
    description += "**날짜:** " + material["day"].map(x => "`" + x + "`").join(", ");
    description += "\n";
  }
  if(material["location"]) {
    description += "**맵 주소:** [링크](" + material["location"] + ")";
  }

  embed.setThumbnail(material["image"]);
  embed.setTitle(material["name"]+ " (" + material["level"] + "★ " + material["type"] + ")");
  embed.setColor("#ffffff");
  embed.setDescription(description);
  return embed;
}

function filterMaterial(level, target, day) {
  if(target) {
    target = target.split(" ").join("").trim();
  }
  var arr = [];
  for(var i in materials) {
    var lists = [];
    var l = level == undefined || level == materials[i]["level"];
    var t = target == undefined;
    t = t || (materials[i]["use_char"] && materials[i]["use_char"].indexOf(target) >= 0);
    t = t || (materials[i]["use_sword"] && materials[i]["use_sword"].map(x => x.split(" ").join("")).indexOf(target) >= 0);
    t = t || (materials[i]["use_claymore"] && materials[i]["use_claymore"].map(x => x.split(" ").join("")).indexOf(target) >= 0);
    t = t || (materials[i]["use_catalyst"] && materials[i]["use_catalyst"].map(x => x.split(" ").join("")).indexOf(target) >= 0);
    t = t || (materials[i]["use_polearm"] && materials[i]["use_polearm"].map(x => x.split(" ").join("")).indexOf(target) >= 0);
    var d = day == undefined || (materials[i]["day"] && materials[i]["day"].indexOf(day) >= 0);
    //console.log(l &&t);
    if(l && t && d) {
      arr.push(materials[i]);
    }
  }
  return arr;
}

module.exports.filterMaterial = filterMaterial;
module.exports.createMaterialEmbed = createMaterialEmbed;
