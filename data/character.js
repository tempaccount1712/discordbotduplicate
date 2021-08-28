
const { elements }= require("../data/elements.js");
const {MessageEmbed} = require("discord.js");
//const {searchMaterial} = require("../data/material.js");
const chars = {
  "엠버": {
    name: "엠버",
    keyword: ["amber"],
    quotes: `「정찰 기사 엠버, 준비 완료!」`,
    icon: "https://paimon.moe/images/characters/amber.png",
    gender: "여성",
    birth: "08/10",
    affiliation: "페보니우스 기사단",
    star: "토끼자리",
    level: 4,
    weapon: "활",
    element: "불",
    build: [
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": ["공격력%", "원소 마스터리"],
          "잔": "불 원소 피해",
          "모자": "치명타 피해"
        },
        sub_stats: [
          "치명타 피해",
          "공격력%", 
          "원소 마스터리", 
          "원소 충전 효율",
          "공격력"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["아모스의 활", "담월 프로토타입", "천공의 날개", "신궁의 서약 (재련 5레벨)", "흑암 배틀 보우", "파마궁", "청록의 사냥활"],
        artifacts: [
          "대지를 유랑하는 악단", 
          "불타오르는 화염의 마녀", 
          ["불타오르는 화염의 마녀", "대지를 유랑하는 악단"], 
          ["불타오르는 화염의 마녀", "공격력 +18% 세트"],
          ["공격력 +18% 세트", "무인"]
        ]
      },
      {
        type: "서포터", 
        main_stats: {
          "시계": ["원소 충전 효율", "공격력%"],
          "잔": "불 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "원소 충전 효율",
          "치명타 확률 / 피해", 
          "공격력%", 
          "원소 마스터리",
          "공격력"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["종말 탄식의 노래", "페보니우스 활", "제례활", "천공의 날개", "뒷골목 사냥꾼", "절현", "청록의 사냥활"],
        artifacts: [
          "옛 왕실의 의식", 
          "교관", 
          ["유배자", "절연의 기치"],
          ["학사", "절연의 기치"],
          ["절연의 기치"],
          "유배자"
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "불타오르는 마노 가루",
            amount: 1
          },
          {
            name: "등불꽃",
            amount: 3
          },
          {
            name: "견고한 화살촉",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 3
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 2
          },
          {
            name: "등불꽃",
            amount: 10
          },
          {
            name: "견고한 화살촉",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 4
          },
          {
            name: "등불꽃",
            amount: 20
          },
          {
            name: "날카로운 화살촉",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 3
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 8
          },
          {
            name: "등불꽃",
            amount: 30
          },
          {
            name: "날카로운 화살촉",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 12
          },
          {
            name: "등불꽃",
            amount: 45
          },
          {
            name: "역전의 화살촉",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "불타오르는 마노",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 20
          },
          {
            name: "등불꽃",
            amount: 60
          },
          {
            name: "역전의 화살촉",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 가르침",
            amount: 3
          },
          {
            name: "견고한 화살촉",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 인도",
            amount: 2
          },
          {
            name: "날카로운 화살촉",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "자유의 인도",
            amount: 4
          },
          {
            name: "날카로운 화살촉",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 인도",
            amount: 6
          },
          {
            name: "날카로운 화살촉",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "자유의 인도",
            amount: 9
          },
          {
            name: "날카로운 화살촉",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 철학",
            amount: 4
          },
          {
            name: "역전의 화살촉",
            amount: 4
          },
          {
            name: "동풍의 숨결",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "자유의 철학",
            amount: 6
          },
          {
            name: "역전의 화살촉",
            amount: 6
          },
          {
            name: "동풍의 숨결",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 철학",
            amount: 12
          },
          {
            name: "역전의 화살촉",
            amount: 9
          },
          {
            name: "동풍의 숨결",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "자유의 철학",
            amount: 16
          },
          {
            name: "역전의 화살촉",
            amount: 12
          },
          {
            name: "동풍의 숨결",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
      {
        start: 1,
        last: 20,
        begin: {
          hp: 793,
          atk: 19,
          def: 50,
          bonus: 0
        },
        end: {
          hp: 2038,
          atk: 48,
          def: 129,
          bonus: 0
        }
      },
      {
        start: 20,
        last: 40,
        begin: {
          hp: 2630,
          atk: 62,
          def: 167,
          bonus: 0
        },
        end: {
          hp: 3940,
          atk: 93,
          def: 250,
          bonus: 0
        }
      },
      {
        start: 40,
        last: 50,
        begin: {
          hp: 4361,
          atk: 103,
          def: 277,
          bonus: 6
        },
        end: {
          hp: 5016,
          atk: 118,
          def: 318,
          bonus: 6
        }
      },
      {
        start: 50,
        last: 60,
        begin: {
          hp: 5578,
          atk: 131,
          def: 354,
          bonus: 12
        },
        end: {
          hp: 6233,
          atk: 147,
          def: 396,
          bonus: 12
        }
      },
      {
        start: 60,
        last: 70,
        begin: {
          hp: 6654,
          atk: 157,
          def: 422,
          bonus: 12
        },
        end: {
          hp: 7309,
          atk: 172,
          def: 464,
          bonus: 12
        }
      },
      {
        start: 70,
        last: 80,
        begin: {
          hp: 7730,
          atk: 182,
          def: 491,
          bonus: 18
        },
        end: {
          hp: 8385,
          atk: 198,
          def: 532,
          bonus: 18
        }
      },
      {
        start: 80,
        last: 90,
        begin: {
          hp: 8806,
          atk: 208,
          def: 559,
          bonus: 24
        },
        end: {
          hp: 9461,
          atk: 223,
          def: 601,
          bonus: 24
        }
      },
    ],
    bonus: "공격력",
    bonusType: "percent",
    skills: [
      {
        name: "신궁",
        type: "일반공격",
        description: `
일반공격
활로 최대 5번 공격한다.
(1단:36.1%,2단:36.1%,3단:46.4%,4단:47.3%,5단:59.3%)

강공격
피해가 더 크고 정확한 조준 사격을 한다.
조준 시 뜨거운 화염이 화살 끝에 계속해서 모인다. 화염의 힘이 가득 찬 화살은 불 원소 피해를 준다.
(조준사격:43.9%,풀차지조준사격:124%)

낙하 공격
공중에서 화살비를 쏜 후 빠른 속도로 땅에 착지한다. 땅에 닿으면 범위 피해를 준다.
(낙하기간피해:56.8%,저공/고공 추락충격피해:114%/142%)
        `
      },
      {
        name: "폭탄인형",
        type: "원소스킬",
        description: `
믿음직한 토끼 백작을 전장에 모신다.

토끼백작
⊙주변의 적을 도발하여 공격을 유도한다.
⊙토끼 백작은 엠버의 HP 최대치를 일정 비율 계승한다.
⊙파괴당하거나 지속 시간이 끝나면 폭발하여 불 원소 범위 피해를 준다.

홀드
던지는 방향을 조정한다.
투척 거리는 누르는 시간에 따라 늘어난다.

(HP계승 41.4%/폭발피해123%/재사용대기시간15.0초)
        `
      },
      {
        name: "화살비",
        type: "원소폭발(필살기)",
        description: `
전방에 화염 화살비를 쏴 적에게 불 원소 범위 피해를 계속 준다.

(화살비 단일 피해 : 28.1%, 화살비 총 피해 : 505%, 지속시간 :2.0초, 재사용 대기시간 : 12.0초, 원소 에너지 40)
      `
      }
    ],
    passive: [
      {
        name: "백발백중!",
        ascension: 1,
        description: "화살비의 치명타 확률이 10% 증가하고 영향 범위가 30% 확대된다."
      },
      {
        name: "제압 사격",
        ascension: 4,
        description: "조준 사격이 약점에 명중하면 기초 공격력이 15% 증가한다. 지속시간 : 10초"
      },
      {
        name: "비행 챔피언",
        ascension: -1,
        description: "파티 내 모든 캐릭터의 활강 시 소모하는 스태미나가 20% 감소한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "일석이츄츄!",
        description: "조준 사격 시 연속으로 2개의 화살을 쏜다. 두 번째 화살로 가하는 피해는 첫 번째 화살의 20%이다."
      },
      {
        id: 2,
        name: "일촉즉발",
        description: `토끼 백작 완전 업그레이드! 풀차지의 조준 사격을 토끼 백작의 발에 명중하면 토끼 백작을 바로 폭발시킬 수 있다...
이러한 방식으로 폭발시키면 200%의 추가 피해를 준다.`
      },
      {
        id: 3,
        name: "타오르기 시작했어!",
        description: `화살비의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "보통 봉제 인형일 리가 없잖아",
        description: "폭탄 인형의 재사용 대기시간이 20% 감소하고 사용 가능 횟수가 1회 추가된다."
      },
      {
        id: 5,
        name: "토끼 백작이야!",
        description: `폭탄 인형의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "맹렬한 불길",
        description: "화살비 발동 후 10초 동안 파티 내 모든 캐릭터의 이동속도가 15%, 공격력이 15% 증가한다."
      }
    ]
  },
  "향릉": {
    name: "향릉",
    keyword: ["xiangling"],
    icon: "https://paimon.moe/images/characters/xiangling.png",
    playurl: "https://www.youtube.com/playlist?list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA",
    gender: "여성",
    birth: "11/02",
    affiliation: "만민당",
    star: "국자자리",
    level: 4,
    weapon: "장병기",
    element: "불",
    build: [
      {
        type: "서브 딜러", 
        main_stats: {
          "시계": ["원소 충전 효율", "공격력%", "원소 마스터리"],
          "잔": "불 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "원소 충전 효율",
          ["치명타 확률", "피해"], 
          "공격력%", 
          "원소 마스터리",
          "공격력"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["호마의 지팡이", "화박연", "관홍의 창", "천공의 마루", "용학살창", "결투의 창", "천암장창", "페보니우스 장창", "키타인 십자창", "미늘창"],
        artifacts: [
          "절연의 기치",
          "불타오르는 화염의 마녀",
          ["옛 왕실의 의식", "불타오르는 화염의 마녀"],
          ["옛 왕실의 의식", "불타오르는 화염의 마녀", "공격력 +18% 세트", "대지를 유랑하는 악단", "절연의 기치"],
          "옛 왕실의 의식",
          ["유배자", "학사"]
        ]
      },
      {
        type: "물리 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "물리 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%", 
          "원소 충전 효율", 
          "원소 마스터리",
          "공격력"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["화박연", "유월창", "관홍의 창", "호마의 지팡이", "용의 척추", "흑암창", "미늘창"]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "불타오르는 마노 가루",
            amount: 1
          },
          {
            name: "절운고추",
            amount: 3
          },
          {
            name: "슬라임 응축액",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 3
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 2
          },
          {
            name: "절운고추",
            amount: 10
          },
          {
            name: "슬라임 응축액",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 4
          },
          {
            name: "절운고추",
            amount: 20
          },
          {
            name: "슬라임청",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 3
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 8
          },
          {
            name: "절운고추",
            amount: 30
          },
          {
            name: "슬라임청",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 12
          },
          {
            name: "절운고추",
            amount: 45
          },
          {
            name: "슬라임 원액",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "불타오르는 마노",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 20
          },
          {
            name: "절운고추",
            amount: 60
          },
          {
            name: "슬라임 원액",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 가르침",
            amount: 3
          },
          {
            name: "슬라임 응축액",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 인도",
            amount: 2
          },
          {
            name: "슬라임청",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "근면의 인도",
            amount: 4
          },
          {
            name: "슬라임청",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 인도",
            amount: 6
          },
          {
            name: "슬라임청",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "근면의 인도",
            amount: 9
          },
          {
            name: "슬라임청",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 철학",
            amount: 4
          },
          {
            name: "슬라임 원액",
            amount: 4
          },
          {
            name: "동풍의 발톱",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "근면의 철학",
            amount: 6
          },
          {
            name: "슬라임 원액",
            amount: 6
          },
          {
            name: "동풍의 발톱",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 철학",
            amount: 12
          },
          {
            name: "슬라임 원액",
            amount: 9
          },
          {
            name: "동풍의 발톱",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "근면의 철학",
            amount: 16
          },
          {
            name: "슬라임 원액",
            amount: 12
          },
          {
            name: "동풍의 발톱",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
      {
        start: 1,
        last: 20,
        begin: {
          hp: 912,
          atk: 19,
          def: 56,
          bonus: 0
        },
        end: {
          hp: 2342,
          atk: 48,
          def: 144,
          bonus: 0
        }
      },
      {
        start: 20,
        last: 40,
        begin: {
          hp: 3024,
          atk: 63,
          def: 186,
          bonus: 0
        },
        end: {
          hp: 4529,
          atk: 94,
          def: 279,
          bonus: 0
        }
      },
      {
        start: 40,
        last: 50,
        begin: {
          hp: 5013,
          atk: 104,
          def: 308,
          bonus: 24
        },
        end: {
          hp: 5766,
          atk: 119,
          def: 355,
          bonus: 24
        }
      },
      {
        start: 50,
        last: 60,
        begin: {
          hp: 6411,
          atk: 133,
          def: 394,
          bonus: 48
        },
        end: {
          hp: 7164,
          atk: 148,
          def: 441,
          bonus: 48
        }
      },
      {
        start: 60,
        last: 70,
        begin: {
          hp: 7648,
          atk: 158,
          def: 470,
          bonus: 48
        },
        end: {
          hp: 8401,
          atk: 174,
          def: 517,
          bonus: 48
        }
      },
      {
        start: 70,
        last: 80,
        begin: {
          hp: 8885,
          atk: 184,
          def: 546,
          bonus: 72
        },
        end: {
          hp: 9638,
          atk: 200,
          def: 593,
          bonus: 72
        }
      },
      {
        start: 80,
        last: 90,
        begin: {
          hp: 10122,
          atk: 210,
          def: 623,
          bonus: 96
        },
        end: {
          hp: 10875,
          atk: 225,
          def: 669,
          bonus: 96
        }
      },
    ],
    bonus: "원소 마스터리",
    bonusType: "number",
    skills: [
      {
        name: "밀가루음식솜씨",
        type: "일반공격",
        description: `
일반공격
창으로 최대 5번 공격한다.
(1단:42.1%,2단:42.1%,3단:26.1%+26.1%,4단:14.1%*4,5단:71%)

강공격
일정 스태미나를 소모해 전방으로 돌진하며 경로상의 적에게 피해를 준다.
(강공격 피해:122%,강공격 스태미나 소모:25.0pt)

낙하 공격
공중에서 땅을 내리찍어 경로상의 적을 공격하고 땅에 닿으면 범위 피해를 준다.
(낙하 기간 피해:63.9%, 저공/고공 추락 충격 피해:128%,160%)
        `
      },
      {
        name: "누룽지출격",
        type: "원소스킬",
        description: "불을 뿜는 누룽지를 소환해 전방의 적을 향해 끊임없이 불을 뿜어 불 원소 범위 피해를 준다. \n(불 뿜기피해:111%,쿨타임:12.0초)"
      },
      {
        name: "화륜",
        type: "원소폭발(필살기)",
        description: `
불의 세기와 창술을 컨트롤하는 뛰어난 기교로 자신을 둘러싸고 빠른 속도로 회전하는 화륜을 만들어낸다. 지속 기간 동안 화륜은 캐릭터를 따라다니며 경로상의 적에게 불 원소 피해를 준다.
(1단:72.0%,2단:88.0%,3단:110%,화륜피해:112%,지속시간:10.0초,쿨타임:20.0초,원소에너지:80)
        `
      }
    ],
    passive: [
      {
        name: "교차 화력",
        ascension: 1,
        description: "누룽지가 불을 뿜는 거리가 20% 증가한다"
      },
      {
        name: "절운차오톈자오",
        ascension: 4,
        description: "누룽지 출격 효과 종료 후 누룽지는 사라진 위치에 고추를 하나 남긴다. 고추를 주우면 공격력이 10% 증가한다. 지속시간:10초."
      },
      {
        name: "만민당 주방장",
        ascension: -1,
        description: "공격류 요리를 완벽 요리 시 12%의 확률로 생산량이 2배로 늘어난다. "
      }
    ],
    constellation: [
      {
        id: 1,
        name: "겉은 바삭, 속은 촉촉",
        description: "누룽지의 공격에 피격된 적은 불 원소 내성이 15% 감소한다. 지속 시간: 6초"
      },
      {
        id: 2,
        name: "큰불에 기름 붓기",
        description: `일반 공격의 최후의 일격은 적에게 2초 동안 지속적인 내폭 효과를 부여한다. 효과 종료 시 폭발하여 주변의 적에게 공격력 75%의 불 원소 범위 피해를 준다.`
      },
      {
        id: 3,
        name: "센 불로 조리하기",
        description: `화륜의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "약불로 천천히 삶기",
        description: "화륜의 지속 시간을 40% 연장한다."
      },
      {
        id: 5,
        name: "흉포한 누룽지",
        description: `누룽지 출격의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "토네이도 화륜",
        description: "화륜이 지속되는 동안 파티 내 모든 캐릭터는 불 원소 피해 보너스를 15% 획득한다."
      }
    ]
  },
  "베넷": {
    name: "베넷",
    keyword: ["bennett"],
    icon: "https://paimon.moe/images/characters/bennett.png",
    gender: "남성",
    birth: "02/29",
    affiliation: "모험자 길드",
    star: "험로자리",
    gender: "남성",
    level: 4,
    weapon: "한손검",
    element: "불",
    build: [
      {
        type: "서브 딜러", 
        main_stats: {
          "시계": ["공격력%", "원소 충전 효율"],
          "잔": "불 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%", 
          "원소 충전 효율",
          "원소 마스터리"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["안개를 가르는 회광", "매의 검", "천공의 검", "오래된 자유의 서약", "뒷골목의 섬광", "부식의 검", "참암 프로토타입", "페보니우스 검", "제례검", "비천어검"],
        artifacts: [
          "옛 왕실의 의식", 
          "불타오르는 화염의 마녀",
          ["옛 왕실의 의식", "불타오르는 화염의 마녀", "공격력 +18% 세트", "대지를 유랑하는 악단", "절연의 기치"]
        ]
      },
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": ["공격력%", "원소 마스터리"],
          "잔": "불 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "원소 마스터리", 
          "공격력%", 
          "원소 충전 효율"
        ],
        priority: ["원소 스킬", "필살기", "일반 공격"],
        weapons: ["안개를 가르는 회광", 
          "반암결록", 
          "오래된 자유의 서약", 
          "참봉의 칼날", 
          "매의 검", 
          "강철 벌침 (재련 5레벨)", 
          "부식의 검", 
          "천공의 검", 
          "뒷골목의 섬광", 
          "흑암 장검", 
          "칠흑검", 
          "강철 벌침 (재련 1-4레벨)", 
          "용의 포효"
        ],
        artifacts: [
          "불타오르는 화염의 마녀",
          ["불타오르는 화염의 마녀", "공격력 +18% 세트"],
          ["불타오르는 화염의 마녀", "옛 왕실의 의식"],
          ["불타오르는 화염의 마녀", "대지를 유랑하는 악단"],
          "번개 같은 분노"
        ]
      },
      {
        type: "서포터", 
        main_stats: {
          "시계": ["공격력%", "원소 마스터리"],
          "잔": "HP%",
          "모자": ["치유 보너스", "HP%"]
        },
        sub_stats: [
          "원소 충전 효율",
          "HP%", 
          "HP"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["안개를 가르는 회광", "매의 검", "오래된 자유의 서약", "뒷골목의 섬광", "천공의 검", "참암 프로토타입", "부식의 검", "페보니우스 검", "제례검", "비천어검"],
        artifacts: [
          "옛 왕실의 의식", 
          ["유배자", "학사"],
          ["견고한 천암", "사랑받는 소녀"],
          "교관"
        ]
      },
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "불타오르는 마노 가루",
            amount: 1
          },
          {
            name: "풍차 국화",
            amount: 3
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 3
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 2
          },
          {
            name: "풍차 국화",
            amount: 10
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 4
          },
          {
            name: "풍차 국화",
            amount: 20
          },
          {
            name: "실버 까마귀 휘장",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 3
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 8
          },
          {
            name: "풍차 국화",
            amount: 30
          },
          {
            name: "실버 까마귀 휘장",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 12
          },
          {
            name: "풍차 국화",
            amount: 45
          },
          {
            name: "골드 까마귀 휘장",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "불타오르는 마노",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 20
          },
          {
            name: "풍차 국화",
            amount: 60
          },
          {
            name: "골드 까마귀 휘장",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 가르침",
            amount: 3
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 2
          },
          {
            name: "실버 까마귀 휘장",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 4
          },
          {
            name: "실버 까마귀 휘장",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 6
          },
          {
            name: "실버 까마귀 휘장",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 9
          },
          {
            name: "실버 까마귀 휘장",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 4
          },
          {
            name: "골드 까마귀 휘장",
            amount: 4
          },
          {
            name: "동풍의 깃털",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 6
          },
          {
            name: "골드 까마귀 휘장",
            amount: 6
          },
          {
            name: "동풍의 깃털",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 12
          },
          {
            name: "골드 까마귀 휘장",
            amount: 9
          },
          {
            name: "동풍의 깃털",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 16
          },
          {
            name: "골드 까마귀 휘장",
            amount: 12
          },
          {
            name: "동풍의 깃털",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
      {
        start: 1,
        last: 20,
        begin: {
          hp: 1039,
          atk: 16,
          def: 65,
          bonus: 0
        },
        end: {
          hp: 2670,
          atk: 41,
          def: 166,
          bonus: 0
        }
      },
      {
        start: 20,
        last: 40,
        begin: {
          hp: 3447,
          atk: 53,
          def: 214,
          bonus: 0
        },
        end: {
          hp: 5163,
          atk: 80,
          def: 321,
          bonus: 0
        }
      },
      {
        start: 40,
        last: 50,
        begin: {
          hp: 5715,
          atk: 88,
          def: 356,
          bonus: 6.7
        },
        end: {
          hp: 6573,
          atk: 101,
          def: 409,
          bonus: 6.7
        }
      },
      {
        start: 50,
        last: 60,
        begin: {
          hp: 7309,
          atk: 113,
          def: 455,
          bonus: 13.3
        },
        end: {
          hp: 8168,
          atk: 126,
          def: 508,
          bonus: 13.3
        }
      },
      {
        start: 60,
        last: 70,
        begin: {
          hp: 8719,
          atk: 134,
          def: 542,
          bonus: 13.3
        },
        end: {
          hp: 9577,
          atk: 148,
          def: 596,
          bonus: 13.3
        }
      },
      {
        start: 70,
        last: 80,
        begin: {
          hp: 10129,
          atk: 156,
          def: 630,
          bonus: 20.0
        },
        end: {
          hp: 10987,
          atk: 169,
          def: 684,
          bonus: 20.0
        }
      },
      {
        start: 80,
        last: 90,
        begin: {
          hp: 11539,
          atk: 178,
          def: 718,
          bonus: 26.7
        },
        end: {
          hp: 12397,
          atk: 191,
          def: 771,
          bonus: 26.7
        }
      },
    ],
    bonus: "원소 충전 효율",
    bonusType: "percent",
    skills: [
      {
        name: "행운의 검",
        type: "일반공격",
        description: `
일반공격
검으로 최대 5번 공격한다.
(1단:44.5%,2단:42.7%,3단:54.6%,4단:59.7%,5단:71.9%)

강공격
일정 스태미나를 소모해 순간적으로 전방을 향해 검을 2번 휘두른다.
(강공격피해 55.9%+60.7%,강공격 스태미나 소모:20.0pt)

낙하공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 땅에 닿으면 범위 피해를 준다.
(낙하 기간 피해:63.9%, 저공/고공 추락 충격 피해:128%/160%)
        `
      },
      {
        name: "열정 과부하",
        type: "원소스킬",
        description: `
베넷이 불 원소와 모험의 열정을 검의 끝에 모은다. 열정이 모인 정도에 따라 다른 일이 발생할지도 모른다...

짧은 터치
빠른 속도로 전방을 향해 화염의 일격을 가해 불 원소 피해를 준다.
(짧은 터치 피해 : 138%)

홀드
길게 차지하며 차지 단수에 시간에 따라 다른 효과가 발동된다.
º1단 차지:2단 공격을 발동해 불 원소 피해를 가하고 적을 공중에 띄운다.
(1단 차지 피해:84.0%+92.0%)

º2단 차지:3단 공격을 발동해 대량의 불 원소 피해를 준다. 최후의 일격은 폭발을 일으키며 베넷과 적을 동시에 공중에 띄운다. 이때 베넷은 피해를 받지 않는다.
(2단 차지 피해:88.0%+96.0%,폭발피해:132%,재사용 대기시간 5.0/7.5/10.0초)
        `
      },
      {
          name: "아름다운 여정",
          type: "원소폭발(필살기)",
          description: `
베넷이 적을 향해 뛰어올라 낙하 공격을 가하며 불 원소 피해를 주고 고무 영역을 만들어 낸다.
(스킬피해:233%,지속치유:초당 hp 최대치의 6.00%+577,공격 보너스 비율:56%,지속시간:12.0초,재사용 대기시간:15.0초,원소 에너지:60)

고무 영역
º영역 내의 캐릭터 HP가 70% 이하일 시 HP를 지속해서 회복한다. 회복량은 베넷 HP 최대치의 영향을 받는다.
º영역 내 캐릭터의 HP가 70% 초과 시 베넷의 기초 공격력에 기반하여 일정 비율의 공격력 보너스를 획득한다.
º영역 내의 캐릭터에게 불 원소를 부여한다.
          `
      }
    ],
    passive: [
      {
        name: "되살아난 열정",
        ascension: 1,
        description: "열정 과부하의 재사용 대기시간이 20% 감소한다."
      },
      {
        name: "두려운 없는 뜨거운 피",
        ascension: 4,
        description: `
아름다운 여정의 영역 내에서 열정 과부하는 아래의 효과가 발동한다
º재사용 대기시간이 50% 감소한다.
º2단 차지로 인해 자신이 날려지지 않는다.
        `
      },
      {
        name: "안전하겠지",
        ascension: -1,
        description: "몬드에서 탐색 임무 수행 시 소모하는 시간이 25% 감소한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "모험 동경",
        description: "아름다운 여정의 공격력 증가 효과는 더이상 HP의 제한을 받지 않고 공격력 수치에 베넷 기초 공격력의 20%가 추가된다."
      },
      {
        id: 2,
        name: "궁지 돌파",
        description: `베넷의 HP가 70% 미만일 때 원소 충전 효율이 30% 상승한다.`
      },
      {
        id: 3,
        name: "타오르는 열정",
        description: `열정 과부하의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "사그러들지 않는 열정",
        description: `1단 차지로 열정 과부하 발동 시 스킬의 2단 공격 중 일반 공격을 발동하면 추가 공격을 할 수 있다.
추가 공격 피해는 2단 공격의 135%이다.`
      },
      {
        id: 5,
        name: "넓어진 마음",
        description: `아름다운 여정의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "열화와 용기",
        description: "아름다운 여정 영역 내에 있는 한손검, 양손검, 장병기 무기 캐릭터는 불 원소 피해 보너스를 15% 획득하고 불 원소 부여 효과를 얻는다."
      }
    ]
  },
  "다이루크": {
    name: "다이루크",
    keyword: ["diluc"],
    icon: "https://paimon.moe/images/characters/diluc.png",
    expurl: "https://www.youtube.com/watch?v=SgDfMIgK6-k&list=PLQBypYmxS6LSoV-ZMcPmyG0qur5jcMcQv&index=14&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "남성",
    birth: "04/30",
    affiliation: "다운 와이너리",
    star: "밤올뺴미자리",
    level: 5,
    weapon: "양손검",
    element: "불",
    build: [
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": ["공격력%", "원소 마스터리"],
          "잔": "불 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%", 
          "원소 마스터리",
          "원소 충전 효율"
        ],
        priority: ["일반 공격", "원소 스킬", "필살기"],
        weapons: ["늑대의 말로", "무공의 검", "이무기 검", "송뢰가 울릴 무렵", "천공의 긍지", "흑암참도", "빗물 베기", "천암고검", "고화 프로토타입", "훌륭한 대화수단"],
        artifacts: [
          "불타오르는 화염의 마녀",
          ["불타오르는 화염의 마녀", "공격력 +18% 세트"],
          ["불타오르는 화염의 마녀", "대지를 유랑하는 악단"],
          "검투사의 피날레",
          ["공격력 +18% 세트", "무인"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "불타오르는 마노 가루",
            amount: 1
          },
          {
            name: "등불꽃",
            amount: 3
          },
          {
            name: "신병의 휘장",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 3
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 2
          },
          {
            name: "등불꽃",
            amount: 10
          },
          {
            name: "신병의 휘장",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 4
          },
          {
            name: "등불꽃",
            amount: 20
          },
          {
            name: "사관의 휘장",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 3
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 8
          },
          {
            name: "등불꽃",
            amount: 30
          },
          {
            name: "사관의 휘장",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 12
          },
          {
            name: "등불꽃",
            amount: 45
          },
          {
            name: "위관의 휘장",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "불타오르는 마노",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 20
          },
          {
            name: "등불꽃",
            amount: 60
          },
          {
            name: "위관의 휘장",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 가르침",
            amount: 3
          },
          {
            name: "신병의 휘장",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 2
          },
          {
            name: "사관의 휘장",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 4
          },
          {
            name: "사관의 휘장",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 6
          },
          {
            name: "사관의 휘장",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 9
          },
          {
            name: "사관의 휘장",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 4
          },
          {
            name: "위관의 휘장",
            amount: 4
          },
          {
            name: "동풍의 깃털",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 6
          },
          {
            name: "위관의 휘장",
            amount: 6
          },
          {
            name: "동풍의 깃털",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 12
          },
          {
            name: "위관의 휘장",
            amount: 9
          },
          {
            name: "동풍의 깃털",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 16
          },
          {
            name: "위관의 휘장",
            amount: 12
          },
          {
            name: "동풍의 깃털",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
      {
        start: 1,
        last: 20,
        begin: {
          hp: 1011,
          atk: 26,
          def: 61,
          bonus: 5
        },
        end: {
          hp: 2621,
          atk: 67,
          def: 158,
          bonus: 5
        }
      },
      {
        start: 20,
        last: 40,
        begin: {
          hp: 3488,
          atk: 90,
          def: 211,
          bonus: 5
        },
        end: {
          hp: 5219,
          atk: 134,
          def: 315,
          bonus: 5
        }
      },
      {
        start: 40,
        last: 50,
        begin: {
          hp: 5834,
          atk: 150,
          def: 352,
          bonus: 9.8
        },
        end: {
          hp: 6712,
          atk: 173,
          def: 405,
          bonus: 9.8
        }
      },
      {
        start: 50,
        last: 60,
        begin: {
          hp: 7533,
          atk: 194,
          def: 455,
          bonus: 14.6
        },
        end: {
          hp: 8421,
          atk: 217,
          def: 509,
          bonus: 14.6
        }
      },
      {
        start: 60,
        last: 70,
        begin: {
          hp: 9036,
          atk: 233,
          def: 546,
          bonus: 14.6
        },
        end: {
          hp: 9932,
          atk: 256,
          def: 600,
          bonus: 14.6
        }
      },
      {
        start: 70,
        last: 80,
        begin: {
          hp: 10547,
          atk: 272,
          def: 637,
          bonus: 19.4
        },
        end: {
          hp: 11453,
          atk: 295,
          def: 692,
          bonus: 19.4
        }
      },
      {
        start: 80,
        last: 90,
        begin: {
          hp: 12068,
          atk: 311,
          def: 729,
          bonus: 24.2
        },
        end: {
          hp: 12981,
          atk: 335,
          def: 784,
          bonus: 24.2
        }
      },
    ],
    bonus: "치명타 확률",
    bonusType: "percent",
    skills: [
      {
        name: "단련의 검",
        type: "일반공격",
        description: `
일반공격
검으로 최대 4번 공격한다.
(1단:89.7%,2단:87.6%,3단:98.8%,4단:134%)

강공격
스태미나를 지속해서 소모해 빠른 속도로 연속 베기를 발동한다. 강공격 종료 시 추가로 한 번 더 강력하게 휘두른다.
(강공격 순환 피해 :68.8%,강공격 종결피해:125%,강공격 스태미나 소모:초당40.0pt,최대지속시간:5.0초)

낙하 공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 땅에 닿으면 범위 피해를 준다.
(낙하기간피해:89.5%, 저공/고공 추락 충격피해:179%/224%)
        `
      },
      {
        name: "역날의화염",
        type: "원소스킬",
        description: `
대검을 휘둘러 불 원소 피해를 준다.

연속으로 3회까지 사용할 수 있다.
만약 일정 시간 내에 계속 사용하지 않으면 재사용 대기시간에 진입한다.
(1단:94.4%,2단:97.6%,3단:129%,재사용대기시간:10.0초)
        `
      },
      {
        name: "여명",
        type: "원소폭발(필살기)",
        description: `
뜨거운 화염의 힘을 폭발 시켜 주변의 적을 넉백시키고 불 원소 피해를 준다. 그리고 대검에 뜨거운 화염을 응집시킨 후 휘둘러 전방을 향해 나아가는 불새를 소환해 경로상의 적에게 대량의 불 원소 피해를 입히고 불새가 사라지기 전에 폭발해 대량의 불 원소 범위 피해를 준다.
무기에 응집된 뜨거운 화염은 다이루크의 일반공격과 강공격 피해를 일정 시간 동안 불 원소 피해로 전환시킨다.

(참격피해:204%,지속피해:60.0%,폭렬피해:204%,재사용대기시간:12.0초,마법부여지속시간:8.0초,원소에너지:40)
        `
      }
    ],
    passive: [
      {
        name: "끊임없는 정진",
        ascension: 1,
        description: "다이루크의 강공격 스태미나 소모량이 50% 감소하고 최대 지속시간이 3초 늘어난다."
      },
      {
        name: "융해의 날개",
        ascension: 4,
        description: "여명이 제공하는 불 원소 마법 부여의 지속 시간이 4초 연장된다. 또한 효과가 지속하는 동안 다이루크는 불 원소 피해 보너스를 20% 획득한다."
      },
      {
        name: "새벽의 전통",
        ascension: -1,
        description: "양손검 무기 단조 시 소모한 광석을 15% 반환한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "죄악 징벌",
        description: "HP가 50%를 초과하는 적에게 다이루크가 가하는 피해가 15% 증가한다."
      },
      {
        id: 2,
        name: "뜨거운 잿더미",
        description: `다이루크가 피격 시 공격력이 10%, 공격속도가 5% 증가한다. 지속 시간: 10초
해당 효과는 최대 3회 중첩되며 1.5초마다 1번 발동한다.`
      },
      {
        id: 3,
        name: "강철의 불꽃",
        description: `역날의 화염의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "유화의 화상",
        description: `역날의 화염을 차례대로 방출하면 가하는 피해가 대폭 증가한다.
역날의 화염 발동 후 2초가 지나면 다음 역날의 화염 피해가 40% 증가한다. 지속 시간: 2초`
      },
      {
        id: 5,
        name: "여명을 알리는 불새",
        description: `여명의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "어둠을 가르는 화염의 검",
        description: `역날의 화염 발동 후 6초 동안 일반 공격 2회의 공격속도가 30% 증가하고 가하는 피해가 30% 증가한다.
또한 역날의 화염은 일반 공격의 연격을 끊지 않는다.
`
      }
    ]
  },
  "클레": {
    name: "클레",
    keyword: ["klee"],
    icon: "https://paimon.moe/images/characters/klee.png",
    expurl: "https://www.youtube.com/watch?v=lEA9Lw-7V-Y&list=PLQBypYmxS6LSoV-ZMcPmyG0qur5jcMcQv&index=9&ab_channel=%EC%9B%90%EC%8B%A0",
    pvurl: "https://www.youtube.com/watch?v=XVTMRe5zAsY&list=PLQBypYmxS6LReK6-H2wUKs0geDHMGMpSp&index=6&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "여성",
    birth: "07/27",
    affiliation: "페보니우스 기사단",
    star: "네잎클로버자리",
    level: 5,
    weapon: "법구",
    element: "불",
    build: [
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": ["공격력%", "원소 마스터리"],
          "잔": "불 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%", 
          "원소 마스터리",
          "원소 충전 효율", 
          "공격력"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["천공의 두루마리", "속세의 자물쇠", "사풍 원서", "도도코 이야기집 (재련 5레벨)", "일월의 정수", "음유시인의 악장", "흑암 홍옥", "만국 항해용해도", "마도 서론"],
        artifacts: [
          ["불타오르는 화염의 마녀", "공격력 +18% 세트"],
          "불 위를 걷는 현인",
          "불타오르는 화염의 마녀",
          ["불타오르는 화염의 마녀", "옛 왕실의 의식"],
          "옛 왕실의 의식"
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "불타오르는 마노 가루",
            amount: 1
          },
          {
            name: "바람버섯",
            amount: 3
          },
          {
            name: "이능 두루마리",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 3
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 2
          },
          {
            name: "바람버섯",
            amount: 10
          },
          {
            name: "이능 두루마리",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 4
          },
          {
            name: "바람버섯",
            amount: 20
          },
          {
            name: "봉마의 두루마리",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 3
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 8
          },
          {
            name: "바람버섯",
            amount: 30
          },
          {
            name: "봉마의 두루마리",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 12
          },
          {
            name: "바람버섯",
            amount: 45
          },
          {
            name: "금주의 두루마리",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "불타오르는 마노",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 20
          },
          {
            name: "바람버섯",
            amount: 60
          },
          {
            name: "금주의 두루마리",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 가르침",
            amount: 3
          },
          {
            name: "이능 두루마리",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 인도",
            amount: 2
          },
          {
            name: "봉마의 두루마리",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "자유의 인도",
            amount: 4
          },
          {
            name: "봉마의 두루마리",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 인도",
            amount: 6
          },
          {
            name: "봉마의 두루마리",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "자유의 인도",
            amount: 9
          },
          {
            name: "봉마의 두루마리",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 철학",
            amount: 4
          },
          {
            name: "금주의 두루마리",
            amount: 4
          },
          {
            name: "북풍의 고리",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "자유의 철학",
            amount: 6
          },
          {
            name: "금주의 두루마리",
            amount: 6
          },
          {
            name: "북풍의 고리",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 철학",
            amount: 12
          },
          {
            name: "금주의 두루마리",
            amount: 9
          },
          {
            name: "북풍의 고리",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "자유의 철학",
            amount: 16
          },
          {
            name: "금주의 두루마리",
            amount: 12
          },
          {
            name: "북풍의 고리",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
      {
        start: 1,
        last: 20,
        begin: {
          hp: 801,
          atk: 24,
          def: 48,
          bonus: 0
        },
        end: {
          hp: 2077,
          atk: 63,
          def: 124,
          bonus: 0
        }
      },
      {
        start: 20,
        last: 40,
        begin: {
          hp: 2764,
          atk: 84,
          def: 165,
          bonus: 0
        },
        end: {
          hp: 4136,
          atk: 125,
          def: 247,
          bonus: 0
        }
      },
      {
        start: 40,
        last: 50,
        begin: {
          hp: 4623,
          atk: 140,
          def: 276,
          bonus: 7.2
        },
        end: {
          hp: 5319,
          atk: 161,
          def: 318,
          bonus: 7.2
        }
      },
      {
        start: 50,
        last: 60,
        begin: {
          hp: 5970,
          atk: 180,
          def: 357,
          bonus: 14.4
        },
        end: {
          hp: 6673,
          atk: 202,
          def: 399,
          bonus: 14.4
        }
      },
      {
        start: 60,
        last: 70,
        begin: {
          hp: 7161,
          atk: 216,
          def: 428,
          bonus: 14.4
        },
        end: {
          hp: 7870,
          atk: 238,
          def: 470,
          bonus: 14.4
        }
      },
      {
        start: 70,
        last: 80,
        begin: {
          hp: 8358,
          atk: 253,
          def: 500,
          bonus: 21.6
        },
        end: {
          hp: 9076,
          atk: 274,
          def: 542,
          bonus: 21.6
        }
      },
      {
        start: 80,
        last: 90,
        begin: {
          hp: 9563,
          atk: 289,
          def: 572,
          bonus: 28.8
        },
        end: {
          hp: 10287,
          atk: 311,
          def: 615,
          bonus: 28.8
        }
      },
    ],
    bonus: "불 원소 피해 보너스",
    bonusType: "percent",
    skills: [
      {
        name: "펑펑",
        type: "일반공격",
        description: `
일반 공격
무언가에 부딪히면 펑하고 폭발하는 물건을 던진다! 폭발 공격을 최대 3회까지 발동해 불 원소 범위 피해를 준다.

강공격
일정 스태미나를 소모해 짧은 영창 후 적을 폭격하여 불 원소 범위 피해를 준다.

낙하 공격
공중에서 열염의 힘을 모은 후 지면을 강타해 경로상의 적을 공격하고 땅에 닿으면 불 원소 범위 피해를 준다.
        `
      },
      {
        name: "통통 폭탄",
        type: "원소스킬",
        description: `
끝없는 즐거움을 가져다주는 통통 폭탄을 던진다! 통통 폭탄은 연속으로 3회 튕기며 튕길 때마다 폭발을 일으켜 불 원소 범위 피해를 준다.

3번 튕긴 후 폭탄은 수많은 부비트랩으로 분열된다. 적이 밟거나 일정 시간이 지나면 부비트랩은 폭발하여 불 원소 범위 피해를 준다.

초기 사용 가능 횟수 : 2회
        `
      },
      {
        name: "쾅쾅 불꽃",
        type: "원소폭발(필살기)",
        description: "클레 최대 화력! 스킬을 발동하는 동안 쾅쾅 불꽃을 끊임없이 소환해 주변의 적에게 불 원소 범위 피해를 준다. "
      }
    ],
    passive: [
      {
        name: "펑펑 선물",
        ascension: 1,
        description: "통통 폭탄과 일반 공격으로 피해를 줄 때 50%의 확률로 클레에게 폭렬 불꽃을 1송이 부여한다. 강공격 발동 시 소모되는 스태미나를 대신해 폭렬 불꽃을 소모하며 가하는 피해가 50% 증가한다. "
      },
      {
        name: "무한 스파크",
        ascension: 4,
        description: "강공격 시 치명타가 발생하면 파티 내 모든 캐릭터의 원소 에너지를 2pt 회복한다."
      },
      {
        name: "전부 보물이야",
        ascension: -1,
        description: "미니맵에 주위의 몬드 지역 특산물 위치가 나타난다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "연쇄 폭발",
        description: "공격과 스킬 발동 시 일정 확률로 불꽃을 소환해 적을 폭격하여 쾅쾅 불꽃으로 가하는 피해의 120%만큼 피해를 준다."
      },
      {
        id: 2,
        name: "퍄퍄 포탄 파편",
        description: `통통 폭탄의 부비트랩은 적의 방어력을 23% 감소시킨다. 지속시간: 10초`
      },
      {
        id: 3,
        name: "클레 특제",
        description: `통통 폭탄의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "일촉즉발",
        description: "쾅쾅 불꽃이 지속되는 동안 퇴장하면 폭발을 일으켜 공격력 555%의 불 원소 범위 피해를 준다."
      },
      {
        id: 5,
        name: "포격 천재",
        description: `쾅쾅 불꽃의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "화력 전개",
        description: `쾅쾅 불꽃 상태에서 클레는 3초마다 파티 내 모든 캐릭터(클레 자신을 포함하지 않음)의 원소 에너지 3pt를 지속해서 회복시킨다.
쾅쾅 불꽃 발동 후 25초 동안 파티 내 모든 캐릭터는 불 원소 피해 보너스를 10% 획득한다.`
      }
    ]
  },
  "신염": {
    name: "신염",
    keyword: ["xinyan"],
    icon: "https://paimon.moe/images/characters/xinyan.png",
    gender: "여성",
    birth: "10/16",
    affiliation: "리월항",
    star: "홍단사현자리",
    level: 4,
    weapon: "양손검",
    element: "불",
    build: [
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "물리 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%", 
          "원소 충전 효율",
          "공격력", 
          "방어력%"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["천공의 긍지", "무공의 검", "늑대의 말로", "송뢰가 울릴 무렵", "이무기 검", "설장의 성은", "고화 프로토타입", "천암고검", "흑암참도", "비천대어검 (재련 5레벨)"],
        artifacts: [
          ["창백의 화염", "피에 물든 기사도"], 
          "날아오르는 유성",
          ["피에 물든 기사도", "공격력 +18% 세트"],
          "검투사의 피날레",
          "피에 물든 기사도"
        ]
      },
      {
        type: "서포터", 
        main_stats: {
          "시계": ["방어력%", "공격력%", "원소 충전 효율"],
          "잔": ["물리 피해", "방어력%"],
          "모자": ["방어력%", "치명타 확률", "치명타 피해"]
        },
        sub_stats: [
          ["방어력%", "공격력%"],
          "치명타 확률 / 피해",
          "원소 충전 효율"
        ],
        priority: ["원소 스킬", "필살기", "일반 공격"],
        weapons: ["제례 대검", "고화 프로토타입", "백영검", "천공의 긍지", "페보니우스 대검"],
        artifacts: [
          "옛 왕실의 의식",
          ["피에 물든 기사도", "옛 왕실의 의식"],
          ["옛 왕실의 의식", "공격력 +18% 세트"],
          ["피에 물든 기사도", "공격력 +18% 세트"],
          "견고한 천암",
          ["수호자의 마음", "옛 왕실의 의식"],
          "유배자"
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "불타오르는 마노 가루",
            amount: 1
          },
          {
            name: "유리주머니",
            amount: 3
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 3
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 2
          },
          {
            name: "유리주머니",
            amount: 10
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 4
          },
          {
            name: "유리주머니",
            amount: 20
          },
          {
            name: "실버 까마귀 휘장",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 3
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 8
          },
          {
            name: "유리주머니",
            amount: 30
          },
          {
            name: "실버 까마귀 휘장",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 12
          },
          {
            name: "유리주머니",
            amount: 45
          },
          {
            name: "골드 까마귀 휘장",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "불타오르는 마노",
            amount: 6
          },
          {
            name: "꺼지지 않는 불씨",
            amount: 20
          },
          {
            name: "유리주머니",
            amount: 60
          },
          {
            name: "골드 까마귀 휘장",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 가르침",
            amount: 3
          },
          {
            name: "신병의 휘장",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 2
          },
          {
            name: "사관의 휘장",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 4
          },
          {
            name: "사관의 휘장",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 6
          },
          {
            name: "사관의 휘장",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 9
          },
          {
            name: "사관의 휘장",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 4
          },
          {
            name: "위관의 휘장",
            amount: 4
          },
          {
            name: "동풍의 깃털",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 6
          },
          {
            name: "위관의 휘장",
            amount: 6
          },
          {
            name: "동풍의 깃털",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 12
          },
          {
            name: "위관의 휘장",
            amount: 9
          },
          {
            name: "동풍의 깃털",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 16
          },
          {
            name: "위관의 휘장",
            amount: 12
          },
          {
            name: "동풍의 깃털",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
      {
        start: 1,
        last: 20,
        begin: {
          hp: 939,
          atk: 21,
          def: 67,
          bonus: 0
        },
        end: {
          hp: 2413,
          atk: 54,
          def: 172,
          bonus: 0
        }
      },
      {
        start: 20,
        last: 40,
        begin: {
          hp: 3114,
          atk: 69,
          def: 222,
          bonus: 0
        },
        end: {
          hp: 4665,
          atk: 104,
          def: 333,
          bonus: 0
        }
      },
      {
        start: 40,
        last: 50,
        begin: {
          hp: 5163,
          atk: 115,
          def: 368,
          bonus: 6
        },
        end: {
          hp: 5939,
          atk: 132,
          def: 423,
          bonus: 6
        }
      },
      {
        start: 50,
        last: 60,
        begin: {
          hp: 6604,
          atk: 147,
          def: 471,
          bonus: 12
        },
        end: {
          hp: 7379,
          atk: 164,
          def: 526,
          bonus: 12
        }
      },
      {
        start: 60,
        last: 70,
        begin: {
          hp: 7878,
          atk: 175,
          def: 562,
          bonus: 12
        },
        end: {
          hp: 8653,
          atk: 192,
          def: 617,
          bonus: 12
        }
      },
      {
        start: 70,
        last: 80,
        begin: {
          hp: 9151,
          atk: 203,
          def: 652,
          bonus: 18
        },
        end: {
          hp: 9927,
          atk: 220,
          def: 708,
          bonus: 18
        }
      },
      {
        start: 80,
        last: 90,
        begin: {
          hp: 10425,
          atk: 231,
          def: 743,
          bonus: 24
        },
        end: {
          hp: 11201,
          atk: 249,
          def: 799,
          bonus: 24
        }
      },
    ],
    bonus: "공격력",
    bonusType: "percent",
    skills: [
      {
        name: "염무",
        type: "일반공격",
        description: `
일반 공격
검으로 최대 4번 공격한다.
(1단:76.5%,2단:74.0%,3단:95.5%,4단:115.8%)

강공격
스태미나를 지속해서 소모해 검을 휘두르며 주변의 적을 공격한다. 회전 종료 시 추가로 한 번 더 강력하게 휘두른다.
(강공격 순환 피해 : 62.5%, 강공격 종결 피해 : 113%, 강공격 스태미나 소모 : 초당 40.0pt,최대 지속 시간 : 5.0초)

낙하공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 땅에 닿으면 범위 피해를 준다.
(낙하 기간 피해 : 74.6%, 저공/고공 추락 충격 피해:149%/186%)
        `
      },
      {
        name: "정열의 연주",
        type: "원소스킬",
        description: `
신염이 악기를 휘둘러 주변의 적에게 불 원소 피해를 주고 관중의 열정을 빌려 보호막을 생성한다.
보호막의 피해 흡수량은 신염의 방어력과 명중한 적의 숫자에 영향을 받는다.
º적을 명중하지 못하거나 1명 명중 : 1급보호막·변칙리듬
º적 2명 명중 : 2급보호막·선창 리듬
º적 3명 이상 명중 : 3급 보호막·댄스 리듬을 생성하며, 피해 흡수뿐만 아니라 간헐적으로 주변의 적에게 불 원소 피해를 준다.
보호막은 아래의 특성을 가진다 :
º발동하는 순간 신염에게 불 원소를 부착한다.
º불 원소 피해에 대해 250%의 흡수 효과가 있다.

(휘두르기 피해 : 170%, 1급 보호막 흡수량 : 방어력의 104.0%+501, 2급 보호막 흡수량 : 방어력의 122.4%+589, 3급 보호막 흡수량 : 방어력의 144.0%+693, 지속 피해 33.6%, 보호막 지속 시간: 12.0초, 재사용 대기시간:18초)

신염은 이 불꽃들은 자신의 연주 스킬이 극한에 도달하여 생긴 물리 현상으로 신의 눈과는 관련이 없다고 주장한다.
        `
      },
      {
        name: "반항의 피치카토",
        type: "원소폭발(필살기)",
        description: `
빠른 피치카토로 생긴 음파로 적을 넉백시키고 주변의 적에게 물리 피해를 주며 [무대] 분위기를 띄운다.
뜨거운 분위기로 인해 생긴 화염은 주변의 적에게 불 원소 지속 피해를 준다.

(스킬피해:341%, 불원소지속피해:40%, 지속시간:2.0초, 재사용 대기시간 : 15.0초, 원소에너지:60)
        `
      }
    ],
    passive: [
      {
        name: "청중이 없어도 연주해야 돼···",
        ascension: 1,
        description: `
정열의 연주의 보호막에 필요한 적 명중 수량 감소 :
º2급 보호막·선창리듬 : 적 1명 명중
º3급 보호막·댄스리듬 : 적 2명 이상 명중
        `
      },
      {
        name: "···이것이 로큰롤!!",
        ascension: 4,
        description: "정열의 연주 보호막의 보호를 받고 있는 캐릭터가 가하는 물리 피해가 15% 증가한다."
      },
      {
        name: "로큰롤 레시피",
        ascension: -1,
        description: "방어류 요리를 완벽 조리하면 12% 확률로 요리량의 2배를 획득한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "절명의 가속",
        description: `신염이 치명타를 입히면 5초 동안 일반 공격과 강공격의 공격 속도가 12% 증가한다.
해당 효과는 5초마다 1회 발동한다.`
      },
      {
        id: 2,
        name: "오프닝 즉흥연주",
        description: `반항의 피치카토로 가하는 물리 피해 치명타 확률이 100% 증가하고 발동 시 3급 보호막 · 댄스 리듬을 생성한다.`
      },
      {
        id: 3,
        name: "더블 스탑",
        description: `정열의 연주의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "리듬의 전염",
        description: "정열의 연주의 휘두르기 피해는 적의 물리 내성을 15% 감소시킨다. 지속 시간: 12초"
      },
      {
        id: 5,
        name: "앵콜의 함성",
        description: `반항의 피치카토의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "지옥의 연주",
        description: "신염의 강공격의 스태미나 소모량이 30% 감소한다. 강공격 시 공격력 보너스를 방어력의 50%만큼 획득한다."
      }
    ]
  },
  "호두": {
    name: "호두",
    keyword: ["hutao"],
    quotes: `호두——「왕생당」의 77대 당주, 리월의 장례를 주관하는 중요한 인물이다.
최선을 다해 사람들의 장례를 치러주고 세상의 음양 간의 균형을 지킨다.
이 외에도 신기한 시인으로서 수많은 「걸작」이 리월 사람들에 의해 전해지고 있다.`,
    icon: "https://paimon.moe/images/characters/hu_tao.png",
    expurl: "https://www.youtube.com/watch?v=MUsqrsCi-ME&list=PLQBypYmxS6LSoV-ZMcPmyG0qur5jcMcQv&index=3&ab_channel=%EC%9B%90%EC%8B%A0",
    pvurl: "https://www.youtube.com/watch?v=gXUxlhY_uQ8&list=PLQBypYmxS6LReK6-H2wUKs0geDHMGMpSp&index=1&ab_channel=%EC%9B%90%EC%8B%A0",
    playurl: "https://www.youtube.com/watch?v=kMIweyKSoqI&list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA&index=3&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "여성",
    birth: "07/15",
    affiliation: "왕생당",
    star: "나비 자리",
    level: 5,
    weapon: "장병기",
    element: "불",
    build: [
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": ["HP%", "원소 마스터리"],
          "잔": "불 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "HP%", 
          "원소 마스터리", 
          "공격력%",
          "원소 충전 효율"
        ],
        priority: ["일반 공격", "원소 스킬", "필살기"],
        weapons: ["호마의 지팡이", "용학살창", "화박연", "결투의 창", "흑암창", "관홍의 창", "천공의 마루", "백술창", "천암장창"],
        artifacts: [
          "불타오르는 화염의 마녀", 
          "추억의 시메카자리", 
          ["불타오르는 화염의 마녀", "대지를 유랑하는 악단"],
          ["불타오르는 화염의 마녀", "견고한 천암"],  
          "날아오르는 유성"
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "불타오르는 마노 가루",
            amount: 1
          },
          {
            name: "예상꽃",
            amount: 3
          },
          {
            name: "구라구라 꽃꿀",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 3
          },
          {
            name: "설익은 옥",
            amount: 2
          },
          {
            name: "예상꽃",
            amount: 10
          },
          {
            name: "구라구라 꽃꿀",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 6
          },
          {
            name: "설익은 옥",
            amount: 4
          },
          {
            name: "예상꽃",
            amount: 20
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 3
          },
          {
            name: "설익은 옥",
            amount: 8
          },
          {
            name: "예상꽃",
            amount: 30
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 6
          },
          {
            name: "설익은 옥",
            amount: 12
          },
          {
            name: "예상꽃",
            amount: 45
          },
          {
            name: "원소 꽃꿀",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "불타오르는 마노",
            amount: 6
          },
          {
            name: "설익은 옥",
            amount: 20
          },
          {
            name: "예상꽃",
            amount: 60
          },
          {
            name: "원소 꽃꿀",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 가르침",
            amount: 3
          },
          {
            name: "구라구라 꽃꿀",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 인도",
            amount: 2
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "근면의 인도",
            amount: 4
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 인도",
            amount: 6
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "근면의 인도",
            amount: 9
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 철학",
            amount: 4
          },
          {
            name: "원소 꽃꿀",
            amount: 4
          },
          {
            name: "마왕의 칼날 조각",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "근면의 철학",
            amount: 6
          },
          {
            name: "원소 꽃꿀",
            amount: 6
          },
          {
            name: "마왕의 칼날 조각",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 철학",
            amount: 12
          },
          {
            name: "원소 꽃꿀",
            amount: 9
          },
          {
            name: "마왕의 칼날 조각",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "근면의 철학",
            amount: 16
          },
          {
            name: "원소 꽃꿀",
            amount: 12
          },
          {
            name: "마왕의 칼날 조각",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
      {
        start: 1,
        last: 20,
        begin: {
          hp: 1211,
          atk: 8,
          def: 68,
          bonus: 50
        },
        end: {
          hp: 3141,
          atk: 21,
          def: 177,
          bonus: 50
        }
      },
      {
        start: 20,
        last: 40,
        begin: {
          hp: 4179,
          atk: 29,
          def: 235,
          bonus: 50
        },
        end: {
          hp: 6253,
          atk: 43,
          def: 352,
          bonus: 50
        }
      },
      {
        start: 40,
        last: 50,
        begin: {
          hp: 6990,
          atk: 48,
          def: 394,
          bonus: 59.6
        },
        end: {
          hp: 8042,
          atk: 55,
          def: 453,
          bonus: 59.6
        }
      },
      {
        start: 50,
        last: 60,
        begin: {
          hp: 9026,
          atk: 62,
          def: 508,
          bonus: 69.2
        },
        end: {
          hp: 10089,
          atk: 69,
          def: 568,
          bonus: 69.2
        }
      },
      {
        start: 60,
        last: 70,
        begin: {
          hp: 10826,
          atk: 74,
          def: 610,
          bonus: 69.2
        },
        end: {
          hp: 11899,
          atk: 81,
          def: 670,
          bonus: 69.2
        }
      },
      {
        start: 70,
        last: 80,
        begin: {
          hp: 12637,
          atk: 86,
          def: 712,
          bonus: 78.8
        },
        end: {
          hp: 13721,
          atk: 94,
          def: 773,
          bonus: 78.8
        }
      },
      {
        start: 80,
        last: 90,
        begin: {
          hp: 14459,
          atk: 99,
          def: 815,
          bonus: 88.4
        },
        end: {
          hp: 15552,
          atk: 106,
          def: 876,
          bonus: 88.4
        }
      },
    ],
    bonus: "치명타 피해",
    bonusType: "percent",
    skills: [
      {
        name: "왕생비 법창술",
        type: "일반공격",
        description: `
일반공격
창으로 최대 6번 공격한다

강공격
일정 스태미나를 소모해 전방으로 돌진하며 경로상의 적에게 피해를 준다.

낙하 공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다.
        `
      },
      {
        name: "나비의 서",
        type: "원소스킬",
        description: `
소멸하지 않는 화염만이 세상의 불길한 것을 정화할 수 있다. 호두는 일정량의 HP를 소모해 주변의 적을 넉백시키고 피안접무 상태로 들어간다.

피안접무
·상태 진입 시 호두의 HP 최대치에 기반하여 공격력이 증가한다. 이러한 공격력 증가는 호두 기초 공격력의 400%를 넘을 수 없다.
·공격이 불 원소 피해로 전환되며, 해당 원소 전환은 다른 원소 부여 효과로 대체 될 수 없다.
·강공격은 명중된 적에게 혈매향 효과를 부여한다.
·호두의 경직 저항력이 상승한다.

혈매향
혈매향 상태의 적은 4초마다 한 번씩 불 원소 피해를 받는다. 해당 피해는 원소전투 스킬 피해로 취급한다. 타깃 하나당 혈매향 효과는 1개만 존재할 수 있고, 효과의 지속 시간은 호두에 의해서만 리셋된다.

피안접무의 효과는 지속 시간이 끝나거나, 호두가 퇴장 혹은 전투 불능 상태가 되었을 때 사라진다.
        `
      },
      {
        name: "평안의 서",
        type: "원소폭발(필살기)",
        description: "타오르는 유령을 휘둘러 넓은 범위의 불 원소 피해를 준다. 적에게 명중 시 호두의 HP최대치에 기반하여 호두의 HP를 회복한다. 해당 효과는 최대 5명의 명중된 적에게서 효과를 볼 수 있다. 스킬 명중 시 호두의 HP가 50% 이하라면, 가하는 피해와 치유량이 더 높아진다"
      }
    ],
    passive: [
      {
        name: "모습을 감춘 나비",
        ascension: 1,
        description: "나비의 서가 부여하는 피안접무 상태가 끝난 후, 파티 내 모든 캐릭터(호두 자신은 제외)의 치명타 확률이 12% 증가한다. 지속시간 : 8초"
      },
      {
        name: "핏빛 분장",
        ascension: 4,
        description: "호두의 HP가 50% 이하일 때, 33%의 불 원소 피해 보너스를 획득한다."
      },
      {
        name: "다다익선",
        ascension: -1,
        description: "요리를 완벽 조리하면 18%의 확률로 같은 종류의 [이상한] 품질의 요리를 1개 획득한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "진홍의 꽃다발",
        description: "나비의 서가 부여한 피안접무 상태일 때, 호두의 강공격은 스태미나를 소모하지 않는다."
      },
      {
        id: 2,
        name: "비처럼 내리는 불안",
        description: `혈매향이 가하는 피해가 증가한다. 피해 증가량은 효과 부여 시, 호두 HP 최대치의 10%만큼 증가한다.
또한 평안의 서는 명중 시 적에게 혈매향 효과를 부여한다.`
      },
      {
        id: 3,
        name: "적색 피의 의식",
        description: `나비의 서의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "영원한 안식의 정원",
        description: "호두가 부여한 혈매향 효과 상태의 적 처치 시, 주변의 파티 내 캐릭터(호두 자신은 제외)의 치명타 확률이 12% 증가한다. 지속시간: 15초"
      },
      {
        id: 5,
        name: "꽃잎 향초의 기도",
        description: `평안의 서의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "나비 잔향",
        description: `호두의 HP가 25% 이하로 떨어지거나 전투 불능이 될 정도의 피해를 입으면 아래 효과가 발동한다:
호두는 해당 피해로 전투 불능 상태에 빠지지 않고 다음 10초 동안 호두의 모든 원소 내성과 물리 내성이 200% 증가한다. 동시에 치명타 확률이 100% 증가하고, 경직 저항력이 대폭 상승한다. 해당 효과는 호두의 HP가 1일 때 자동으로 발동된다.
해당 효과는 60초마다 1번 발동한다.`
      }
    ]
  },
  "연비": {
    name: "연비",
    keyword: ["yanfei"],
    icon: "https://paimon.moe/images/characters/yanfei.png",
    expurl: "https://www.youtube.com/watch?v=iaYELU-w-gs&list=PLQBypYmxS6LSoV-ZMcPmyG0qur5jcMcQv&index=1&ab_channel=%EC%9B%90%EC%8B%A0",
    playurl: "https://www.youtube.com/watch?v=VkMX7bLI63A&list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA&index=1&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "여성",
    birth: "07/28",
    affiliation: "리월항",
    star: "법수자리",
    level: 4,
    weapon: "법구",
    element: "불",
    build: [
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "불 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%", 
          "원소 충전 효율",
          "원소 마스터리", 
          "공격력"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["천공의 두루마리", "사풍 원서", "음유시인의 악장 (재련 5레벨)", "도도코 이야기집 (재련 5레벨)", "일월의 정수", "음유시인의 악장 (재련 1-4레벨)", "흑암 홍옥", "만국 항해용해도"],
        artifacts: [
          "불타오르는 화염의 마녀", 
          "대지를 유랑하는 악단", 
          ["불타오르는 화염의 마녀", "공격력 +18% 세트"],
          ["불타오르는 화염의 마녀", "대지를 유랑하는 악단"],  
          "날아오르는 유성"
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "불타오르는 마노 가루",
            amount: 1
          },
          {
            name: "야박석",
            amount: 3
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 3
          },
          {
            name: "설익은 옥",
            amount: 2
          },
          {
            name: "야박석",
            amount: 10
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 6
          },
          {
            name: "설익은 옥",
            amount: 4
          },
          {
            name: "야박석",
            amount: 20
          },
          {
            name: "실버 까마귀 휘장",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 3
          },
          {
            name: "설익은 옥",
            amount: 8
          },
          {
            name: "야박석",
            amount: 30
          },
          {
            name: "실버 까마귀 휘장",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 6
          },
          {
            name: "설익은 옥",
            amount: 12
          },
          {
            name: "야박석",
            amount: 45
          },
          {
            name: "골드 까마귀 휘장",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "불타오르는 마노",
            amount: 6
          },
          {
            name: "설익은 옥",
            amount: 20
          },
          {
            name: "야박석",
            amount: 60
          },
          {
            name: "골드 까마귀 휘장",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 가르침",
            amount: 3
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 인도",
            amount: 2
          },
          {
            name: "실버 까마귀 휘장",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "황금의 인도",
            amount: 4
          },
          {
            name: "실버 까마귀 휘장",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 인도",
            amount: 6
          },
          {
            name: "실버 까마귀 휘장",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "황금의 인도",
            amount: 9
          },
          {
            name: "실버 까마귀 휘장",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 철학",
            amount: 4
          },
          {
            name: "골드 까마귀 휘장",
            amount: 4
          },
          {
            name: "혈옥의 가지",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "황금의 철학",
            amount: 6
          },
          {
            name: "골드 까마귀 휘장",
            amount: 6
          },
          {
            name: "혈옥의 가지",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 철학",
            amount: 12
          },
          {
            name: "골드 까마귀 휘장",
            amount: 9
          },
          {
            name: "혈옥의 가지",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "황금의 철학",
            amount: 16
          },
          {
            name: "골드 까마귀 휘장",
            amount: 12
          },
          {
            name: "혈옥의 가지",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
      {
        start: 1,
        last: 20,
        begin: {
          hp: 784,
          atk: 20,
          def: 49,
          bonus: 0
        },
        end: {
          hp: 2014,
          atk: 52,
          def: 126,
          bonus: 0
        }
      },
      {
        start: 20,
        last: 40,
        begin: {
          hp: 2600,
          atk: 67,
          def: 163,
          bonus: 0
        },
        end: {
          hp: 3895,
          atk: 100,
          def: 244,
          bonus: 0
        }
      },
      {
        start: 40,
        last: 50,
        begin: {
          hp: 4311,
          atk: 111,
          def: 271,
          bonus: 6
        },
        end: {
          hp: 4959,
          atk: 127,
          def: 311,
          bonus: 6
        }
      },
      {
        start: 50,
        last: 60,
        begin: {
          hp: 5514,
          atk: 141,
          def: 346,
          bonus: 12
        },
        end: {
          hp: 6161,
          atk: 158,
          def: 387,
          bonus: 12
        }
      },
      {
        start: 60,
        last: 70,
        begin: {
          hp: 6578,
          atk: 169,
          def: 413,
          bonus: 12
        },
        end: {
          hp: 7225,
          atk: 185,
          def: 453,
          bonus: 12
        }
      },
      {
        start: 70,
        last: 80,
        begin: {
          hp: 7641,
          atk: 196,
          def: 480,
          bonus: 18
        },
        end: {
          hp: 8289,
          atk: 213,
          def: 520,
          bonus: 18
        }
      },
      {
        start: 80,
        last: 90,
        begin: {
          hp: 8705,
          atk: 223,
          def: 546,
          bonus: 24
        },
        end: {
          hp: 9352,
          atk: 240,
          def: 587,
          bonus: 24
        }
      },
    ],
    bonus: "불 원소 피해 보너스",
    bonusType: "percent",
    skills: [
      {
        name: "봉랍 인장",
        type: "일반공격",
        description: `
  일반 공격
  연속으로 불덩이를 발사하여 최대 3단의 불 원소 피해를 준다.
  일반 공격으로 적을 명중하면 연비에게 단화인 1개가 부여된다. 단화인은 처음에 최대 3개까지 보유할 수 있으며, 효과가 발동될 때마다 기존의 단화인 지속 시간이 리셋된다.
  각각의 단화인은 연비의 스태미나 소모를 감소시키고, 연비가 퇴장할 때 사라진다.

  강공격
  스태미나를 소모해 짧은 영창 후, 모든 단화인을 소모해 전방에 불 원소 범위 피해를 준다.
  소모된 단화인의 개수에 따라 이번 강공격의 범위와 피해가 강화된다.

  낙하 공격
  불 원소의 힘을 모아 공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지시 불 원소 범위 피해를 준다.
  `
      },
      {
        name: "계약 성립",
        type: "원소스킬",
        description: "사나운 불길을 폭발 시켜 주변의 적에게 충격을 가해 불 원소 범위 피해를 주고, 연비에게 최대 수량의 단화인과 이글이글 효과를 부여한다."
      },
      {
        name: "이글이글",
        type: "원소폭발(필살기)",
        description: `
  이글이글 효과:
  · 일정 시간마다 연비에게 단화인을 1개 부여한다.
  · 강공격으로 가하는 피해가 증가한다.
  이글이글 효과는 연비가 퇴장하거나 전투 불능 상태가 되었을 때 사라진다.
        `
      }
    ],
    passive: [
      {
        name: "관련 조항",
        ascension: 1,
        description: "연비가 강공격으로 단화인을 소모할 때 단화인 1개당 연비의 불 원소 피해 보너스를 5% 증가시킨다. 지속시간: 6초. 해당 효과의 지속 시간 내에 다시 강공격을 발동하면 기존의 효과는 사라진다."
      },
      {
        name: "법수의 눈",
        ascension: 4,
        description: "연비가 발동한 강공격이 적에게 치명타를 입힐 시, 추가로 공격력의 80%에 해당하는 불 원소 범위 피해를 준다. 해당 피해는 강공격 피해로 간주한다."
      },
      {
        name: "박문강기",
        ascension: -1,
        description: "미니맵에 주위의 리월 지역 특산물 위치가 나타난다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "법의 심판자",
        description: "연비가 강공격시 단화인을 1개 보유할 때마다 영창 기간 동안 연비의 경직 저항력이 상승하고, 이번 강공격의 스태미나 소모가 추가로 10% 감소한다."
      },
      {
        id: 2,
        name: "최종 해석권",
        description: `연비가 강공격으로 HP 50% 미만인 적을 공격 시 치명타 확률이 20% 증가한다.`
      },
      {
        id: 3,
        name: "진리의 화염 인장",
        description: `단홍의 계약의 스킬 레벨+3
  최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "단서금철권",
        description: `계약 성립 발동 시:
  HP 최대치의 45%에 해당하는 피해를 흡수하는 보호막을 생성한다. 지속시간: 15초.
  이 보호막은 불 원소 피해에 대해 250%의 흡수 효과가 있다.`
      },
      {
        id: 5,
        name: "준버 서약서",
        description: `계약 성립의 스킬 레벨+3
  최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "추가 조항",
        description: "연비가 가질 수 있는 단화인의 최대 수량이 1개 증가한다."
      }
    ]
  },
  "요이미야": {
    name: "나가노하라 요이미야",
    icon: "https://paimon.moe/images/characters/yoimiya.png",
    expurl: "https://www.youtube.com/watch?v=6XLBVgGeM8g",
    pvurl: "https://youtu.be/5gl9aE4_al4",
    playurl: "https://youtu.be/IgIDWSo_hLQ",
    gender: "여성",
    birth: "6/21",
    affiliation: "나가노하라 폭죽가게 점장",
    star: "유금자리",
    level: 5,
    weapon: "활",
    element: "불",
    build: [
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "불 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%", 
          "원소 마스터리",
          "원소 충전 효율", 
          "공격력"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["비뢰의 고동", "아모스의 활", "천공의 날개", "녹슨 활", "담월 프로토타입", "파마궁", "탄궁"],
        artifacts: [ 
          ["불타오르는 화염의 마녀", "공격력 +18% 세트"],
          "추억의 시메카자리",
          "불타오르는 화염의 마녀",
          "불 위를 걷는 현인"
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "불타오르는 마노 가루",
            amount: 1
          },
          {
            name: "울림풀",
            amount: 3
          },
          {
            name: "이능 두루마리",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 3
          },
          {
            name: "무형의 불 구슬",
            amount: 2
          },
          {
            name: "울림풀",
            amount: 10
          },
          {
            name: "이능 두루마리",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "불타오르는 마노 조각",
            amount: 6
          },
          {
            name: "무형의 불 구슬",
            amount: 4
          },
          {
            name: "울림풀",
            amount: 20
          },
          {
            name: "봉마의 두루마리",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 3
          },
          {
            name: "무형의 불 구슬",
            amount: 8
          },
          {
            name: "울림풀",
            amount: 30
          },
          {
            name: "봉마의 두루마리",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "불타오르는 마노 덩이",
            amount: 6
          },
          {
            name: "무형의 불 구슬",
            amount: 12
          },
          {
            name: "울림풀",
            amount: 45
          },
          {
            name: "금주의 두루마리",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "불타오르는 마노",
            amount: 6
          },
          {
            name: "무형의 불 구슬",
            amount: 20
          },
          {
            name: "울림풀",
            amount: 60
          },
          {
            name: "금주의 두루마리",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
          {
            prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
            items: [
              {
                name: "부세의 가르침",
                amount: 3
              },
              {
                name: "이능 두루마리",
                amount: 6
              }
            ],
            price: 12500
          },
          {
            prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
            items: [
              {
                name: "부세의 인도",
                amount: 2
              },
              {
                name: "봉마의 두루마리",
                amount: 3
              }
            ],
            price: 17500
          },
          {
            items: [
              {
                name: "부세의 인도",
                amount: 4
              },
              {
                name: "봉마의 두루마리",
                amount: 4
              }
            ],
            price: 25000
          },
          {
            prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
            items: [
              {
                name: "부세의 인도",
                amount: 6
              },
              {
                name: "봉마의 두루마리",
                amount: 6
              }
            ],
            price: 30000
          },
          {
            items: [
              {
                name: "부세의 인도",
                amount: 9
              },
              {
                name: "봉마의 두루마리",
                amount: 9
              }
            ],
            price: 37500
          },
          {
            prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
            items: [
              {
                name: "부세의 철학",
                amount: 4
              },
              {
                name: "금주의 두루마리",
                amount: 4
              },
              {
                name: "용왕의 면류관",
                amount: 1
              }
            ],
            price: 120000
          },
          {
            items: [
              {
                name: "부세의 철학",
                amount: 6
              },
              {
                name: "금주의 두루마리",
                amount: 6
              },
              {
                name: "용왕의 면류관",
                amount: 1
              }
            ],
            price: 260000
          },
          {
            prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
            items: [
              {
                name: "부세의 철학",
                amount: 12
              },
              {
                name: "금주의 두루마리",
                amount: 9
              },
              {
                name: "용왕의 면류관",
                amount: 2
              }
            ],
            price: 450000
          },
          {
            items: [
              {
                name: "부세의 철학",
                amount: 16
              },
              {
                name: "금주의 두루마리",
                amount: 12
              },
              {
                name: "용왕의 면류관",
                amount: 2
              },
              {
                name: "지식의 왕관",
                amount: 1
              }
            ],
            price: 700000
          },
        ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 791,
                atk: 25,
                def: 48,
                bonus: 5
            },
            end: {
                hp: 2053,
                atk: 65,
                def: 124,
                bonus: 5
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 2731,
                atk: 87,
                def: 165,
                bonus: 5
            },
            end: {
                hp: 4086,
                atk: 130,
                def: 247,
                bonus: 5
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 4568,
                atk: 145,
                def: 276,
                bonus: 9.8
            },
            end: {
                hp: 5256,
                atk: 167,
                def: 318,
                bonus: 9.8
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 5899,
                atk: 187,
                def: 357,
                bonus: 14.6
            },
            end: {
                hp: 6593,
                atk: 209,
                def: 399,
                bonus: 14.6
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 7075,
                atk: 225,
                def: 428,
                bonus: 14.6
            },
            end: {
                hp: 7777,
                atk: 247,
                def: 470,
                bonus: 14.6
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 8259,
                atk: 262,
                def: 500,
                bonus: 19.4
            },
            end: {
                hp: 8968,
                atk: 285,
                def: 542,
                bonus: 19.4
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 9450,
                atk: 300,
                def: 572,
                bonus: 24.2
            },
            end: {
                hp: 10164,
                atk: 323,
                def: 615,
                bonus: 24.2
            }
        }
    ],
    bonus: "치명타 확률",
    bonusType: "percent",
    skills: [
      {
        name: "불꽃놀이 점화",
        type: "일반공격",
        description: `
  일반 공격
  활로 최대 5번 공격한다.
  강공격
  피해가 더 크고 정확한 조준 사격을 한다.
  조준 시 불 원소 피해를 준다.
  차지의 시간에 따라 다른 효과가 발동한다:
  · 1단 차지: 불 원소 피해를 주는 화살을 발사한다.
  · 2단 차지: 불 원소 피해를 주는 유도 화살을 조준 시간에 따라 최대 3개 발사한다.
  낙하 공격
  공중에서 화살비를 쏜 후 빠른 속도로 땅에 착지한다. 착지 시 범위 피해를 준다.
        `
      },
      {
        name: "염초 정화의 춤",
        type: "원소스킬",
        description: `
  타오르는 불꽃이 요이미야를 둘러싼다.
  테이카 엔쇼
  지속 시간 동안 요이미야의 일반 공격은 불 원소 피해로 전환되고, 그 피해가 증가한다.
  강공격의 2단 차지로 유도 화살이 생성되지 않는다.
  이 효과는 요이미야가 퇴장하거나 전투 불능 상태가 되었을 때 사라진다.
        `
      },
      {
        name: "유금 운간초",
        type: "원소폭발(필살기)",
        description: `
  요이미야의 창작물인 "유금 운간초"와 함께 하늘로 도약하고 폭발하며 타오르는 로켓을 발사해 불 원소 범위 피해를 가하고, 그 피해를 받은 적 중 하나에게 황금의 화염 효과를 부여한다.
  황금의 화염
  황금의 화염 상태의 적에게 파티 내 캐릭터(요이미야 제외)가 공격을 가하면 폭발을 일으켜 불 원소 범위 피해를 가한다. 이 효과로 적이 처치되면 남은 지속 시간 그대로 주변의 다른 적에게 이 효과를 옮긴다.
  황금의 화염의 폭발은 최대 2초에 1번 발동할 수 있다.
  요이미야가 전투 불능 상태가 되면 황금의 화염 효과가 사라진다.
      `
      }
    ],
    passive: [
      {
        name: "말썽꾸러기의 장난",
        ascension: 1,
        description: `염초 정화의 춤의 지속 시간 동안, 요이미야가 적에게 일반 공격을 명중하면 불 원소 피해 보너스 2%를 얻는다. 지속 시간: 3초. 최대 중첩수: 10회.`
      },
      {
        name: "여름의 그을림",
        ascension: 4,
        description: `유금 운간초 발동시 주변의 파티원(요이미야 제외)의 공격력이 10% 증가한다. 요이미야가 말썽꾸러기의 장난의 스택을 가지고 있을 경우, 추가로 스택 1개당 위 수치가 1%씩 증가한다. 지속 시간: 15초.`
      },
      {
        name: "타오르는 조합",
        ascension: -1,
        description: "요이미야는 가구, 장식품, 조경형 가구를 제작할 때 100%의 확률로 일부 재료를 반환한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "마노 류킨",
        description: `황금의 화염의 지속 시간이 4초 증가한다.
  황금의 화염 효과를 받은 적이 지속 시간 내에 사망하면 요이미야의 공격력이 20% 증가한다. 지속 시간: 20초.`
      },
      {
        id: 2,
        name: "모닥불 행렬",
        description: `요이미야가 불 원소 치명타 피해를 가했을 경우, 요이미야는 불 원소 피해 보너스 25%를 얻는다. 이 효과는 요이미야가 필드에 없더라도 적용될 수 있다. 지속 시간: 6초.`
      },
      {
        id: 3,
        name: "말썽꾸러기의 화염",
        description: `염초 정화의 춤의 스킬 레벨+3
  최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "불꽃 전문가",
        description: "요이미야의 황금의 화염 효과로 폭발이 일어나면 염초 정화의 춤의 재사용 대기 시간이 1.2초 감소한다."
      },
      {
        id: 5,
        name: "여름 축제 전야",
        description: `유금 운간초의 스킬 레벨+3
  최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "나가노하라 유성군",
        description: `염초 정화의 춤의 지속 시간 동안, 요이미야의 일반 공격은 50%의 확률로 원래 피해의 60%의 피해를 가하는 유도 불 화살을 발사한다. 이 피해는 일반 공격 피해로 간주한다.`
      }
    ]
  },
  "바바라": {
    name: "바바라",
    keyword: ["barbara"],
    icon: "https://paimon.moe/images/characters/barbara.png",
    gender: "여성",
    birth: "07/05",
    affiliation: "페보니우스 성당",
    star: "황금잔자리",
    level: 4,
    weapon: "법구",
    element: "물",
    build: [
      {
        type: "서포터", 
        main_stats: {
          "시계": ["원소 충전 효율", "HP%"],
          "잔": "HP%",
          "모자": "치유 보너스"
        },
        sub_stats: [
          "HP%",
          "원소 충전 효율",
          "HP"
        ],
        priority: ["원소 스킬", "필살기", "일반 공격"],
        weapons: ["드래곤 슬레이어 영웅담", "황금 호박 프로토타입", "페보니우스 비전", "뒷골목의 술과 시"],
        artifacts: [ 
          "사랑받는 소녀", 
          ["사랑받는 소녀", "견고한 천암"],
          "옛 왕실의 의식",
          ["사랑받는 소녀", "유배자"],
          ["사랑받는 소녀", "학사"]
        ]
      },
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "물 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%",
          "원소 마스터리",
          "공격력"
        ],
        priority: ["일반 공격", "원소 스킬", "필살기"],
        weapons: ["천공의 두루마리", "사풍 원서", "음유시인의 악장", "도도코 이야기집", "속세의 자물쇠", "일월의 정수", "흑암 홍옥", "만국 항해용해도", "인동의 열매", "마도 서론"],
        artifacts: [
          "추억의 시메카자리",
          "몰락한 마음",
          "대지를 유랑하는 악단",
          ["몰락한 마음", "공격력 +18% 세트", "대지를 유랑하는 악단"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "순수한 청금석 가루",
            amount: 1
          },
          {
            name: "바람버섯",
            amount: 3
          },
          {
            name: "이능 두루마리",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "순수한 청금석 조각",
            amount: 3
          },
          {
            name: "물처럼 맑은 마음",
            amount: 2
          },
          {
            name: "바람버섯",
            amount: 10
          },
          {
            name: "이능 두루마리",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "순수한 청금석 조각",
            amount: 6
          },
          {
            name: "물처럼 맑은 마음",
            amount: 4
          },
          {
            name: "바람버섯",
            amount: 20
          },
          {
            name: "봉마의 두루마리",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "순수한 청금석 덩이",
            amount: 3
          },
          {
            name: "물처럼 맑은 마음",
            amount: 8
          },
          {
            name: "바람버섯",
            amount: 30
          },
          {
            name: "봉마의 두루마리",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "순수한 청금석 덩이",
            amount: 6
          },
          {
            name: "물처럼 맑은 마음",
            amount: 12
          },
          {
            name: "바람버섯",
            amount: 45
          },
          {
            name: "금주의 두루마리",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "순수한 청금석",
            amount: 6
          },
          {
            name: "물처럼 맑은 마음",
            amount: 20
          },
          {
            name: "바람버섯",
            amount: 60
          },
          {
            name: "금주의 두루마리",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 가르침",
            amount: 3
          },
          {
            name: "이능 두루마리",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 인도",
            amount: 2
          },
          {
            name: "봉마의 두루마리",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "자유의 인도",
            amount: 4
          },
          {
            name: "봉마의 두루마리",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 인도",
            amount: 6
          },
          {
            name: "봉마의 두루마리",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "자유의 인도",
            amount: 9
          },
          {
            name: "봉마의 두루마리",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 철학",
            amount: 4
          },
          {
            name: "금주의 두루마리",
            amount: 4
          },
          {
            name: "북풍의 고리",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "자유의 철학",
            amount: 6
          },
          {
            name: "금주의 두루마리",
            amount: 6
          },
          {
            name: "북풍의 고리",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 철학",
            amount: 12
          },
          {
            name: "금주의 두루마리",
            amount: 9
          },
          {
            name: "북풍의 고리",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "자유의 철학",
            amount: 16
          },
          {
            name: "금주의 두루마리",
            amount: 12
          },
          {
            name: "북풍의 고리",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
      {
        start: 1,
        last: 20,
        begin: {
          hp: 821,
          atk: 13,
          def: 56,
          bonus: 0
        },
        end: {
          hp: 2108,
          atk: 34,
          def: 144,
          bonus: 0
        }
      },
      {
        start: 20,
        last: 40,
        begin: {
          hp: 2721,
          atk: 44,
          def: 186,
          bonus: 0
        },
        end: {
          hp: 4076,
          atk: 66,
          def: 279,
          bonus: 0
        }
      },
      {
        start: 40,
        last: 50,
        begin: {
          hp: 4512,
          atk: 73,
          def: 308,
          bonus: 6
        },
        end: {
          hp: 5189,
          atk: 84,
          def: 355,
          bonus: 6
        }
      },
      {
        start: 50,
        last: 60,
        begin: {
          hp: 5770,
          atk: 94,
          def: 394,
          bonus: 12
        },
        end: {
          hp: 6448,
          atk: 105,
          def: 441,
          bonus: 12
        }
      },
      {
        start: 60,
        last: 70,
        begin: {
          hp: 6884,
          atk: 112,
          def: 470,
          bonus: 12
        },
        end: {
          hp: 7561,
          atk: 123,
          def: 517,
          bonus: 12
        }
      },
      {
        start: 70,
        last: 80,
        begin: {
          hp: 7996,
          atk: 130,
          def: 546,
          bonus: 18
        },
        end: {
          hp: 8674,
          atk: 141,
          def: 593,
          bonus: 18
        }
      },
      {
        start: 80,
        last: 90,
        begin: {
          hp: 9110,
          atk: 148,
          def: 623,
          bonus: 24
        },
        end: {
          hp: 9787,
          atk: 159,
          def: 669,
          bonus: 24
        }
      },
    ],
    bonus: "hp",
    bonusType: "percent",
    skills: [
      {
        name: "물의노래",
        type: "일반공격",
        description: `
일반공격 - 물보라로 최대 4번 공격해 물 원소 피해를 준다.
(1단:37.8%,2단:35.5%,3단:41.0%,4단:55.2%)

강공격 - 일정 스태미나를 소모해, 짧은 영창 후 물 원소 범위 피해를 준다.
(강공격 피해:166%,강공격 스태미나 소모:50.0pt)

낙하공격 - 공중에서 물의 힘을 모은 후 지면을 강타해 경로상의 적을 공격하고 땅에 닿으면 물 원소 범위 피해를 준다.
(낙하 기간 피해:56.8%,저공/고공 추락충격피해:114%/142%)
        `
      },
      {
        name: "공연,시작",
        type: "원소스킬",
        description: `
노래처럼 약동하는 물방울을 소환해 노래의 고리를 생성해 주변의 적에게 물 원소 피해를 주고 습기 효과를 부여한다.

노래의고리
*바바라의 일반 공격이 명중 시 파티 내 모든 캐릭터 및 근처의 아군 캐릭터의 HP를 회복한다. 회복량은 바바라 HP 최대치의 영향을 받는다.
*강공격 명중 시 회복량이 4배가 된다.
*일정 시간이 지날 때마다 현재 캐릭터의 HP를 회복한다.
*캐릭터 및 닿은 적에게 습기 효과를 부여한다.

명중치유랑:HP최대치의 0.75%+72
지속치유량:HP최대치의 4.00%+385
물방울피해:58.4%
지속시간:15초
재사용 대기시간:32초
        `
      },
      {
        name: "빛나는 기적",
        type: "원소폭발(필살기)",
        description: `
근처 아군과 파티 내 모든 캐릭터의 HP를 대량 회복한다. 회복량은 바바라 HP 최대치의 영향을 받는다.
치유랑:HP최대치의 17.6% + 1.694
재사용 대기시간:20초
원소에너지:80
        `
      }
    ],
    passive: [
      {
        name: "광휘의 계절",
        ascension: 1,
        description: "캐릭터가 공연,시작의 노래의 고리 안에 있으면 스태미나 소모량이 12% 감소한다."
      },
      {
        name: "앵콜",
        ascension: 4,
        description: "캐릭터가 원소 구슬 혹은 원소 입자 획득 시 공연,시작의 노래의 고리 지속 시간이 1초 증가한다. 이러한 방식으로 최대 5초 증가할 수 있다."
      },
      {
        name: "정성듬뿍",
        ascension: -1,
        description: "회복류 요리를 완벽 요리 시 12%의 확률로 생산량이 2배로 늘어난다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "무지개의 노래",
        description: "바바라는 10초마다 원소 에너지를 1pt 회복한다."
      },
      {
        id: 2,
        name: "원기 분출",
        description: `공연, 시작♪의 재사용 대기시간이 15% 감소한다.
스킬이 지속되는 동안 현재 필드 위에 있는 자신의 캐릭터는 물 원소 피해 보너스를 15% 획득한다.`
      },
      {
        id: 3,
        name: "내일의 스타",
        description: `빛나는 기적♪의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "노력이 곧 마법",
        description: `바바라가 강공격 사용 시 적을 1명 명중할 때마다 원소 에너지를 1pt 회복한다.
이러한 방식을 통해 한번에 원소 에너지를 최대 5pt까지 회복할 수 있다.`
      },
      {
        id: 5,
        name: "순수한 유대",
        description: `공연, 시작♪의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "이 세상의 아름다움을",
        description: `바바라가 대기 상태일 때 파티 내 자신의 캐릭터가 전투불능이 되면 즉시:
· 해당 캐릭터를 부활시키고
· 해당 캐릭터의 HP를 100% 회복한다.
해당 효과는 15분마다 1번만 발동한다.`
      }
    ]
  },
  "행추": {
    name: "행추",
    keyword: ["xingqiu"],
    icon: "https://paimon.moe/images/characters/xingqiu.png",
    gender: "남성",
    birth: "10/09",
    affiliation: "비운 상회",
    star: "금직자리",
    level: 4,
    weapon: "한손검",
    element: "물",
    build: [
      {
        type: "서브 딜러", 
        main_stats: {
          "시계": ["원소 충전 효율", "공격력%"],
          "잔": "물 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%",
          "원소 충전 효율",
          "원소 마스터리",
          "공격력"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["제례검", "반암결록", "안개를 가르는 회광", "천공의 검", "참봉의 칼날", "페보니우스 검", "부식의 검 (재련 5레벨)", "비천어검", "여명신검"],
        artifacts: [
          "절연의 기치",
          ["옛 왕실의 의식", "몰락한 마음"],
          ["옛 왕실의 의식", "몰락한 마음", "공격력 +18% 세트", "절연의 기치"],
          "옛 왕실의 의식",
          "뇌명을 평정한 존자",
          "얼음바람 속에서 길잃은 용사",
          ["유배자", "학사"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "순수한 청금석 가루",
            amount: 1
          },
          {
            name: "예상꽃",
            amount: 3
          },
          {
            name: "부서진 가면",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "순수한 청금석 조각",
            amount: 3
          },
          {
            name: "물처럼 맑은 마음",
            amount: 2
          },
          {
            name: "예상꽃",
            amount: 10
          },
          {
            name: "부서진 가면",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "순수한 청금석 조각",
            amount: 6
          },
          {
            name: "물처럼 맑은 마음",
            amount: 4
          },
          {
            name: "예상꽃",
            amount: 20
          },
          {
            name: "오염된 가면",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "순수한 청금석 덩이",
            amount: 3
          },
          {
            name: "물처럼 맑은 마음",
            amount: 8
          },
          {
            name: "예상꽃",
            amount: 30
          },
          {
            name: "오염된 가면",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "순수한 청금석 덩이",
            amount: 6
          },
          {
            name: "물처럼 맑은 마음",
            amount: 12
          },
          {
            name: "예상꽃",
            amount: 45
          },
          {
            name: "불길한 가면",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "순수한 청금석",
            amount: 6
          },
          {
            name: "물처럼 맑은 마음",
            amount: 20
          },
          {
            name: "예상꽃",
            amount: 60
          },
          {
            name: "불길한 가면",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 가르침",
            amount: 3
          },
          {
            name: "부서진 가면",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 인도",
            amount: 2
          },
          {
            name: "오염된 가면",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "황금의 인도",
            amount: 4
          },
          {
            name: "오염된 가면",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 인도",
            amount: 6
          },
          {
            name: "오염된 가면",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "황금의 인도",
            amount: 9
          },
          {
            name: "오염된 가면",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 철학",
            amount: 4
          },
          {
            name: "불길한 가면",
            amount: 4
          },
          {
            name: "북풍의 꼬리",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "황금의 철학",
            amount: 6
          },
          {
            name: "불길한 가면",
            amount: 6
          },
          {
            name: "북풍의 꼬리",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 철학",
            amount: 12
          },
          {
            name: "불길한 가면",
            amount: 9
          },
          {
            name: "북풍의 꼬리",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "황금의 철학",
            amount: 16
          },
          {
            name: "불길한 가면",
            amount: 12
          },
          {
            name: "북풍의 꼬리",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat:[
      {
        start: 1,
        last: 20,
        begin: {
          hp: 857,
          atk: 17,
          def: 64,
          bonus: 0
        },
        end: {
          hp:2202,
          atk:43,
          def:163,
          bonus:0
        }
      },
      {
        start:20,
        last:40,
        begin:{
          hp:2842,
          atk:56,
          def:211,
          bonus:0
        },
        end:{
          hp:4257,
          atk:84,
          def:316,
          bonus:0
        }
      },
      {
        start:40,
        last:50,
        begin:{
          hp:4712,
          atk:93,
          def:349,
          bonus:6
        },
        end:{
          hp:5420,
          atk:107,
          def:402,
          bonus:6
        }
      },
      {
        start:50,
        last:60,
        begin:{
          hp:6027,
          atk:119,
          def:447,
          bonus:12
        },
        end:{
          hp:6735,
          atk:133,
          def:499,
          bonus:12
        }
      },
      {
        start:60,
        last:70,
        begin:{
          hp:7190,
          atk:142,
          def:533,
          bonus:12
        },
        end:{
          hp:7897,
          atk:156,
          def:585,
          bonus:12
        }
      },
      {
        start:70,
        last:80,
        begin:{
          hp:8352,
          atk:165,
          def:619,
          bonus:18
        },
        end:{
          hp:9060,
          atk:179,
          def:671,
          bonus:18
        }
      },
      {
        start:80,
        last:90,
        begin:{
          hp:9515,
          atk:188,
          def:705,
          bonus:24
        },
        end:{
          hp:10223,
          atk:202,
          def:758,
          bonus:24
        }
      }
    ],
    bonus: "공격력",
    bonusType: "percent",
    skills: [
      {
        name: "고화 검법",
        type: "일반공격",
        description: `
일반 공격
검으로 최대 5번 공격한다.
(1단:46.6%,2단:47.6%,3단:28.6%+28.6%,4단:56.0%,5단:35.9%+35.9%)

강공격
일정 스태미나를 소모해 순간적으로 전방을 향해 검을 2번 휘두른다.
(강공격 피해 : 47.3%+56.2%,강공격 스태미나 소모:20.0pt)

낙하 공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 땅에 닿으면 범위 피해를 준다.
(낙하기간피해:63.9%, 저공/고공 추락 충격 피해:128%/160%)
        `
      },
      {
        name: "고화검º화우농산",
        type: "원소스킬",
        description: `
연속으로 검을 두 번 휘둘러 전방의 적에게 물 원소 피해를 주고 자신의 몸을 맴도는 최대 수량의 우렴검을 생성한다. 우렴검은 아래의 특성을 가진다 :

º캐릭터가 피격 시 우렴검은 파괴되고 받는 피해가 감소한다.
º캐릭터 물 원소 피해 보너스의 20%가 우렴검의 추가 피해감면으로 전환된다.

이런 방식을 통해 최대 24%의 추가 피해 감면 효과를 획득할 수 있다.

초기 우렴검은 최대 3개 생성된다.
발동하는 순간 캐릭터에게 습기 효과를 부여한다.

(스킬피해:168%+191%,피해감소비율:20%,지속시간15.0초,재사용 대기시간:21.0초)
        `
      },
      {
        name: "고화검º재우유홍",
        type: "원소폭발(필살기)",
        description: `
홍검세를 전개하고 환영 검의 비를 만들어내 최대 개수의 [우렴검]을 생성한다.

홍검세
º일반 공격 시 검의 비 연속 공격과 함께 물 원소 피해를 준다.
º[우렴검]의 수량은 언제나 최대 수량을 유지한다.

기타 캐릭터에게도 효과가 발동한다.

(검의비피해:54.3%,지속시간:15.0초,재사용대기시간:20.0초,원소에너지:80)
        `
      }
    ],
    passive: [
      {
        name: "물 창조의 비결",
        ascension: 1,
        description: "[우렴검]이 공격을 받아 부서지거나 지속 시간 종료 시 현재 캐릭터의 HP를 행추 HP 최대치의 6%만큼 회복한다."
      },
      {
        name: "허와 실",
        ascension: 4,
        description: "행추가 물 원소 피해 보너스를 20% 획득한다."
      },
      {
        name: "번뜩이는 영감",
        ascension: -1,
        description: "캐릭터 특성 소재 합성 시 25%의 확률로 일부 합성 재료를 반환한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "장막의 잔향",
        description: "우렴검의 최대 수량이 1개 증가한다."
      },
      {
        id: 2,
        name: "맑은 하늘의 무지개",
        description: `고화검 · 재우유홍의 지속시간이 3초 증가한다.
검의 비의 공격을 받은 적은 물 원소 내성이 15% 감소한다. 지속 시간: 4초`
      },
      {
        id: 3,
        name: "시로 짠 비단",
        description: `고화검 · 재우유홍의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "교룡 베기",
        description: `고화검 · 재우유홍 효과가 지속되는 동안 고화검 · 화우농산으로 가하는 피해가 50% 증가한다.`
      },
      {
        id: 5,
        name: "우심폐문",
        description: `고화검 · 화우농산의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "만문 집결",
        description: `고화검 · 재우유홍 검의 비 공격을 2회 발동할 때마다 다음 검의 비 공격을 대폭 강화하고 적을 명중 시 행추의 원소 에너지를 3pt 회복한다.`
      }
    ]
  },
  "모나": {
    name: "모나",
    keyword: ["mona"],
    icon: "https://paimon.moe/images/characters/mona.png",
    expurl: "https://www.youtube.com/watch?v=Qr-clq-3RZ0&list=PLQBypYmxS6LSoV-ZMcPmyG0qur5jcMcQv&index=11&ab_channel=%EC%9B%90%EC%8B%A0",
    playurl: "https://www.youtube.com/watch?v=sdMCMTq9934&list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA&index=13&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "여성",
    birth: "08/31",
    affiliation: "몬드성",
    star: "영천자리",
    level: 5,
    weapon: "법구",
    element: "물",
    build: [
      {
        type: "서브 딜러", 
        main_stats: {
          "시계": ["공격력%", "원소 충전 효율", "원소 마스터리"],
          "잔": "물 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "원소 충전 효율", 
          "공격력%", 
          "원소 마스터리"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["음유시인의 악장", "천공의 두루마리", "속세의 자물쇠", "사풍 원서", "일월의 정수", "만국 항해용해도"],
        artifacts: [
          "절연의 기치",
          ["옛 왕실의 의식", "몰락한 마음"],
          ["옛 왕실의 의식", "몰락한 마음", "공격력 +18% 세트", "대지를 유랑하는 악단", "절연의 기치"],
          "옛 왕실의 의식",
          ["유배자", "학사"],
          "교관"
        ]
      },
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "물 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%", 
          "원소 마스터리", 
          "원소 충전 효율"
        ],
        priority: ["필살기", "일반 공격", "원소 스킬"],
        weapons: ["음유시인의 악장", "천공의 두루마리", "속세의 자물쇠", "사풍 원서", "일월의 정수", "만국 항해용해도"],
        artifacts: [
          "몰락한 마음",
          ["옛 왕실의 의식", "몰락한 마음"],
          ["옛 왕실의 의식", "몰락한 마음", "공격력 +18% 세트", "대지를 유랑하는 악단"],
          "대지를 유랑하는 악단",
          ["전쟁광", "유배자"]
        ]
      },
      {
        type: "빙결 서포터", 
        main_stats: {
          "시계": ["원소 충전 효율", "공격력%"],
          "잔": "물 원소 피해 / 공격력%",
          "모자": "치명타 확률"
        },
        sub_stats: [
          "원소 충전 효율",
          "치명타 확률", 
          "공격력%"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["드래곤 슬레이어 영웅담", "페보니우스 비전", "황금 호박 프로토타입", "뒷골목의 술과 시"],
        artifacts: [
          "옛 왕실의 의식",
          "견고한 천암",
          ["유배자", "학사"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "순수한 청금석 가루",
            amount: 1
          },
          {
            name: "바람버섯",
            amount: 3
          },
          {
            name: "구라구라 꽃꿀",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "순수한 청금석 조각",
            amount: 3
          },
          {
            name: "물처럼 맑은 마음",
            amount: 2
          },
          {
            name: "바람버섯",
            amount: 10
          },
          {
            name: "구라구라 꽃꿀",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "순수한 청금석 조각",
            amount: 6
          },
          {
            name: "물처럼 맑은 마음",
            amount: 4
          },
          {
            name: "바람버섯",
            amount: 20
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "순수한 청금석 덩이",
            amount: 3
          },
          {
            name: "물처럼 맑은 마음",
            amount: 8
          },
          {
            name: "바람버섯",
            amount: 30
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "순수한 청금석 덩이",
            amount: 6
          },
          {
            name: "물처럼 맑은 마음",
            amount: 12
          },
          {
            name: "바람버섯",
            amount: 45
          },
          {
            name: "원소 꽃꿀",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "순수한 청금석",
            amount: 6
          },
          {
            name: "물처럼 맑은 마음",
            amount: 20
          },
          {
            name: "바람버섯",
            amount: 60
          },
          {
            name: "원소 꽃꿀",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 가르침",
            amount: 3
          },
          {
            name: "구라구라 꽃꿀",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 2
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 4
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 6
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 9
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 4
          },
          {
            name: "원소 꽃꿀",
            amount: 4
          },
          {
            name: "북풍의 고리",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 6
          },
          {
            name: "원소 꽃꿀",
            amount: 6
          },
          {
            name: "북풍의 고리",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 12
          },
          {
            name: "원소 꽃꿀",
            amount: 9
          },
          {
            name: "북풍의 고리",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 16
          },
          {
            name: "원소 꽃꿀",
            amount: 12
          },
          {
            name: "북풍의 고리",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
        start: 1,
        last: 20,
        begin: {
            hp: 810,
            atk: 22,
            def: 51,
            bonus: 0
        },
        end: {
            hp: 2102,
            atk: 58,
            def: 132,
            bonus: 0
        }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 2797,
                atk: 77,
                def: 176,
                bonus: 0
            },
            end: {
                hp: 4185,
                atk: 115,
                def: 263,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 4678,
                atk: 129,
                def: 294,
                bonus: 8
            },
            end: {
                hp: 5383,
                atk: 148,
                def: 338,
                bonus: 8
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 6041,
                atk: 167,
                def: 379,
                bonus: 16
            },
            end: {
                hp: 6752,
                atk: 186,
                def: 424,
                bonus: 16
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 7246,
                atk: 200,
                def: 455,
                bonus: 16
            },
            end: {
                hp: 7964,
                atk: 220,
                def: 500,
                bonus: 16
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 8458,
                atk: 233,
                def: 531,
                bonus: 24
            },
            end: {
                hp: 9184,
                atk: 253,
                def: 576,
                bonus: 24
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 9677,
                atk: 267,
                def: 607,
                bonus: 32
            },
            end: {
                hp: 10409,
                atk: 287,
                def: 653,
                bonus: 32
            }
        }
    ],
    bonus: "원소 충전 효율",
    bonusType: "percent",
    skills: [
      {
        name: "인과간파",
        type: "일반공격",
        description: `
일반공격
물보라로 최대 4번 공격해 물 원소 피해를 준다.

강공격
일정 스태미나를 소모해, 짧은 영창 후 물 원소 범위 피해를 준다.

낙하 공격
공중에서 물의 힘을 모은 후 지면을 강타해 경로상의 적을 공격하고 당에 닿으면 물 원소 범위 피해를 준다.
        `
      },
      {
        name: "물 속의 환상",
        type: "원소스킬",
        description: `
물보라가 모여 만든 운명의 허영.

허영
아래의 특징을 갖는다:
º주변의 적을 도발하여 공격을 유도한다. 주변의 적에게 지속해서 물 원소 피해를 준다. 지속 시간이 끝나면 허영이 파열되면서 물 원소 범위 피해를 준다.

홀드
물의 흐름을 이용해 빠르게 후퇴하며 허영을 소환한다.

필드 위에 물속의 환상으로 만들어진 허영은 동시에 1개만 존재할 수 있다.
        `
      },
      {
        name: "흐르는 허와 실",
        type: "대시 대체",
        description: `
대시를 대체한다
흐르는 물에 몸을 숨긴 후 스태미나를 소모해 빠른 속도로 이동한다.

허와 실의 흐름 상태에서 모나는 수면 위를 빠르게 이동할 수 있다. 허와 실의 흐름 상태를 종료 후 몸을 드러내는 순간 주변의 적에게 습기 상태를 부여한다.
        `
      },
      {
        name: "별의 운명",
        type: "원소폭발(필살기)",
        description: `
맑고 청아한 물결에 환상의 별하늘을 비춰 넓은 범위 내의 적을 포영 상태로 만든다.

포영
점성의 거품으로 적을 감싸고 습기 효과를 부여한다. 약한 적들은 거품 속에 갇혀 움직일 수 없다.
거품의 영향을 받은 적에게 피해를 주면 아래의 효과가 발생한다:
*적에게 성이 피해 보너스를 부여하며 이번에 가한 피해가 증가한다.
*포영 효과를 해제하면 추가로 물 원소 피해를 1번 준다.

성이
지속 시간 내에 받는 피해가 증가한다.
        `
      }
    ],
    passive: [
      {
        name: "할망구, 나 잡아봐라",
        ascension: 1,
        description: "흐르는 허와 실 상태에 진입 후 2초 동안 만약 주변에 적이 존재하면 자동으로 허영을 하나 만들어낸다. 이러한 방식으로 생성된 허영은 2초동안 지속되며 터지면서 가하는 피해는 물속의 환영 피해의 50% 이다."
      },
      {
        name: "운명에 맡겨!",
        ascension: 4,
        description: "모나의 물 원소 피해 보너스가 추가로 모나 원소 충전 효율의 20% 만큼 상승한다."
      },
      {
        name: "운행 원리",
        ascension: -1,
        description: "무기 돌파 소재 합성 시 25%의 확률로 일부 합성 재료를 반환한다. "
      }
    ],
    constellation: [
      {
        id: 1,
        name: "침몰한 예언",
        description: `파티 내 자신의 캐릭터가 성이 상태의 적을 명중하면 8초 동안 물 원소 관련 반응의 효과가 상승한다:
· 감전 반응으로 가하는 피해+15%, 증발 반응으로 가하는 피해+15%, 물 원소 확산 반응으로 가하는 피해+15%
· 빙결 반응 지속 시간+15%`
      },
      {
        id: 2,
        name: "성월의 연주",
        description: `일반 공격 명중 시 20%의 확률로 강공격을 1회 추가 발동한다.
해당 효과는 5초마다 1회 발동한다`
      },
      {
        id: 3,
        name: "멈추지 않는 천상",
        description: `별의 운명의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "절멸의 예언",
        description: `파티 내 모든 캐릭터가 성이 상태의 적을 공격 시 치명타 확률이 15% 증가한다.`
      },
      {
        id: 5,
        name: "운명의 우롱",
        description: `수중 환원의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "악운의 수식",
        description: `흐르는 허와 실 상태에 진입 후 1초 이동할 때마다 모나의 다음 강공격 피해가 60% 증가한다.
이러한 방식으로 강공격 피해가 최대 180%까지 증가할 수 있다. 최대 지속 시간: 8초`
      }
    ]
  },
  "타르탈리아": {
    name: "타르탈리아",
    keyword: ["tartaglia"],
    icon: "https://paimon.moe/images/characters/tartaglia.png",
    expurl: "https://www.youtube.com/watch?v=DmdWS90yiA0&list=PLQBypYmxS6LSoV-ZMcPmyG0qur5jcMcQv&index=8&ab_channel=%EC%9B%90%EC%8B%A0",
    pvurl: "https://www.youtube.com/watch?v=2eOhA0ofN7Y&list=PLQBypYmxS6LReK6-H2wUKs0geDHMGMpSp&index=5&ab_channel=%EC%9B%90%EC%8B%A0",
    playurl: "https://www.youtube.com/watch?v=fZzF401LAVk&list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA&index=8&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "남성",
    birth: "07/20",
    affiliation: "우인단",
    star: "경천자리",
    level: 5,
    weapon: ["활", "마왕무장"],
    element: "물",
    build: [
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "물 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%", 
          "원소 마스터리", 
          "공격력"
        ],
        priority: ["원소 스킬", "필살기", "일반 공격"],
        weapons: ["비뢰의 고동", "천공의 날개", "아모스의 활", "청록의 사냥활", "녹슨 활 (재련 5레벨)", "담월 프로토타입(재련 5레벨)", "흑암 배틀 보우", "담월 프로토타입(재련 1-4레벨)", "절현"],
        artifacts: [
          "몰락한 마음",
          ["옛 왕실의 의식", "몰락한 마음", "공격력 +18% 세트", "대지를 유랑하는 악단"]
        ]
      },
      {
        type: "서브 딜러", 
        main_stats: {
          "시계": ["공격력%", "원소 마스터리"],
          "잔": "물 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%", 
          "원소 마스터리", 
          "원소 충전 효율",
          "공격력"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["절현(재련 4-5레벨)", "뒷골목 사냥꾼(재련 4-5레벨)", "천공의 날개", "뒷골목 사냥꾼(재련 2-3레벨)", "절현(재련 1-3레벨)", "아모스의 활", "뒷골목 사냥꾼(재련 1레벨)", "청록의 사냥활", "바람 꽃의 노래(재련 5레벨)", "흑암 배틀 보우", "담월 프로토타입"],
        artifacts: [
          ["옛 왕실의 의식", "몰락한 마음"],
          ["옛 왕실의 의식", "몰락한 마음", "공격력 +18% 세트", "대지를 유랑하는 악단"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "순수한 청금석 가루",
            amount: 1
          },
          {
            name: "별소라",
            amount: 3
          },
          {
            name: "신병의 휘장",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "순수한 청금석 조각",
            amount: 3
          },
          {
            name: "물처럼 맑은 마음",
            amount: 2
          },
          {
            name: "별소라",
            amount: 10
          },
          {
            name: "신병의 휘장",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "순수한 청금석 조각",
            amount: 6
          },
          {
            name: "물처럼 맑은 마음",
            amount: 4
          },
          {
            name: "별소라",
            amount: 20
          },
          {
            name: "사관의 휘장",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "순수한 청금석 덩이",
            amount: 3
          },
          {
            name: "물처럼 맑은 마음",
            amount: 8
          },
          {
            name: "별소라",
            amount: 30
          },
          {
            name: "사관의 휘장",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "순수한 청금석 덩이",
            amount: 6
          },
          {
            name: "물처럼 맑은 마음",
            amount: 12
          },
          {
            name: "별소라",
            amount: 45
          },
          {
            name: "위관의 휘장",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "순수한 청금석",
            amount: 6
          },
          {
            name: "물처럼 맑은 마음",
            amount: 20
          },
          {
            name: "별소라",
            amount: 60
          },
          {
            name: "위관의 휘장",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 가르침",
            amount: 3
          },
          {
            name: "신병의 휘장",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 인도",
            amount: 2
          },
          {
            name: "사관의 휘장",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "자유의 인도",
            amount: 4
          },
          {
            name: "사관의 휘장",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 인도",
            amount: 6
          },
          {
            name: "사관의 휘장",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "자유의 인도",
            amount: 9
          },
          {
            name: "사관의 휘장",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 철학",
            amount: 4
          },
          {
            name: "위관의 휘장",
            amount: 4
          },
          {
            name: "마왕의 칼날 조각",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "자유의 철학",
            amount: 6
          },
          {
            name: "위관의 휘장",
            amount: 6
          },
          {
            name: "마왕의 칼날 조각",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 철학",
            amount: 12
          },
          {
            name: "위관의 휘장",
            amount: 9
          },
          {
            name: "마왕의 칼날 조각",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "자유의 철학",
            amount: 16
          },
          {
            name: "위관의 휘장",
            amount: 12
          },
          {
            name: "마왕의 칼날 조각",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 1020,
                atk: 23,
                def: 63,
                bonus: 0
            },
            end: {
                hp: 2646,
                atk: 61,
                def: 165,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3521,
                atk: 81,
                def: 219,
                bonus: 0
            },
            end: {
                hp: 5268,
                atk: 121,
                def: 328,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5889,
                atk: 135,
                def: 366,
                bonus: 7.2
            },
            end: {
                hp: 6776,
                atk: 156,
                def: 421,
                bonus: 7.2
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 7604,
                atk: 175,
                def: 473,
                bonus: 14.4
            },
            end: {
                hp: 8500,
                atk: 195,
                def: 528,
                bonus: 14.4
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 9121,
                atk: 210,
                def: 567,
                bonus: 14.4
            },
            end: {
                hp: 10025,
                atk: 231,
                def: 623,
                bonus: 14.4
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 10647,
                atk: 245,
                def: 662,
                bonus: 21.6
            },
            end: {
                hp: 11561,
                atk: 266,
                def: 719,
                bonus: 21.6
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 12182,
                atk: 280,
                def: 757,
                bonus: 28.8
            },
            end: {
                hp: 13103,
                atk: 301,
                def: 815,
                bonus: 28.8
            }
        }
    ],
    bonus: "물 원소 피해 보너스",
    bonusType: "percent",
    skills: [
      {
        name: "단우",
        type: "일반공격",
        description: `
일반공격
활로 최대 6번 공격한다.

강공격
피해가 더 크고 정확한 조준 사격을 한다.
조준 시 물 원소의 힘이 화살 끝에 계속해서 모인다. 격류의 힘이 가득 찬 화살이 적에게 명중하면 물 원소 피해를 주고 단류 효과를 부여한다.

단류
단류 상태의 적이 타르탈리아의 각종 공격을 받으면 물 원소 범위 피해 효과가 발생한다. 해당 효과로 가하는 피해는 일반 공격으로 간주한다.

단류º섬 : 풀 차지 조준 사격이 단류 상태의 적을 명중하면 연속 범위 피해를 준다. 단류º섬은 0.7초마다 1번 발동한다.

단류º파 : 단류 상태의 적 처치 시 물이 피어나 주변의 적에게 단류 효과를 부여한다.

낙하공격
공중에서 화살비를 쏜 후 빠른 속도로 땅에 착지한다. 땅에 닿으면 범위 피해를 준다. 마왕 무장º광란의 근접 상태에서 낙하 공격을 발동 할 수 없다.
        `
      },
      {
        name: "마왕 무장º광란",
        type: "원소스킬",
        description: `
순수한 물로 구성된 무장을 발동해 주변의 적에게 물 원소 피해를 주고 근접 상태에 진입한다.
이 상태에서 타르탈리아의 일반 공격과 강공격에 아래의 변화가 발생한다 :

일반공격
물 원소 참격으로 최대 6번 연속 공격한다.

강공격
일정 스태미나를 소모해 순간적으로 전방을 향해 검을 2번 휘둘러 물 원소 피해를 준다.

단류º참
근접 공격이 단류 효과에 영향을 받은 적에게 명중하면 다음번 단류º참은 물 원소 범위 피해를 준다. 단류º참으로 인한 피해는 원소 전투 스킬 피해로 간주하며 1.5초마다 1번 발동한다.

스킬을 다시 사용하거나 30초가 지나면 스킬 효과가 해제되고 원거리 상태로 돌아오게 되며, 스킬이 재사용 대기시간에 진입한다. 근접 상태 유지 시간이 길수록 재사용 대기시간이 길어진다. 만약 30초 후 자동으로 원거리 상태로 돌아오면 스킬은 더욱 긴 재사용 대기시간에 진입한다.
        `
      },
      {
        name: "극악기º진멸섬",
        type: "원소폭발(필살기)",
        description: `
타르탈리아의 현재 상태에 따라 공격 방식이 달라진다.

원거리 상태º마탄 일섬
전방을 향해 빠르게 물 원소가 깃든 마법 화살을 쏴 물 원소 범위 피해를 주고 단류 효과를 부여한다.
발동 후, 일부 원소 에너지를 반환한다.

근접 상태º진멸의 물빛
큰 범위의 참격을 발동해 근처의 모든 적에게 대량의 물 원소 피해를 주고 단류º폭을 발동한다.

단류º폭
진멸의 물빛이 단류 상태의 적을 명중하면 단류 효과를 소모하며 물 폭발을 일으켜 물 원소 범위 피해를 준다. 단류º폭으로 가하는 피해는 원소폭발 피해로 간주한다.
        `
      }
    ],
    passive: [
      {
        name: "존재하지 않는 커튼콜",
        ascension: 1,
        description: "단류 효과의 지속 시간이 8초 증가한다."
      },
      {
        name: "수형검",
        ascension: 4,
        description: "마왕 무장º광란의 근접 상태일 때 일반 공격과 강공격에 치명타가 발동되면 명중된 적에게 단류 효과를 부여한다."
      },
      {
        name: "무기 마스터리",
        ascension: -1,
        description: "자신의 파티 내 모든 캐릭터의 일반 공격 스킬의 레벨이 Lv.1 증가한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "마왕 무장 · 파도 억제",
        description: `마왕 무장 · 광란의 재사용 대기시간이 20% 감소한다.`
      },
      {
        id: 2,
        name: "마왕 무장 · 암류",
        description: `단류 상태의 적 처치 시 타르탈리아는 원소 에너지를 4pt 회복한다.`
      },
      {
        id: 3,
        name: "심연의 재앙 · 분쟁의 근원",
        description: `마왕 무장 · 광란의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "심연의 재앙 · 차오르는 물",
        description: `4초마다 타르탈리아 자신이 부여한 단류 효과가 필드 위에 있을 때, 타르탈리아가 현재 마왕 무장 · 광란의 근접 상태라면 단류 · 참 혹은 단류 · 섬을 발동한다.
이 운명의 자리로 발동된 단류 · 참과 단류 · 섬은 각각의 발동 시간 간격에 제한을 받지 않고 영향도 주지 않는다.`
      },
      {
        id: 5,
        name: "극악기 · 빗물 베기",
        description: `극악기 · 진멸섬의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "극악기 · 천사멸진",
        description: `근접 상태에서 극악기 · 진멸섬 발동 시 마왕 무장 · 광란의 재사용 대기시간이 초기화된다.
해당 효과는 타르탈리아가 원거리 상태로 돌아간 후 발동한다.`
      }
    ]
  },
  "설탕": {
    name: "설탕",
    keyword: ["sucrose"],
    icon: "https://paimon.moe/images/characters/sucrose.png",
    gender: "여성",
    birth: "11/26",
    affiliation: "페보니우스 기사단",
    star: "플라스크자리",
    level: 4,
    weapon: "법구",
    element: "바람",
    build: [
      {
        type: "원소 마스터리", 
        main_stats: {
          "시계": "원소 마스터리",
          "잔": "원소 마스터리",
          "모자": "원소 마스터리"
        },
        sub_stats: [
          "원소 마스터리",
          "공격력%", 
          "치명타 확률 / 피해", 
          "원소 충전 효율"
        ],
        priority: ["원소 스킬", "필살기", "일반 공격"],
        weapons: ["제례의 악장", "마도 서론", "만국 항해용해도", "음유시인의 악장", "드래곤 슬레이어 영웅담", "페보니우스 비전"],
        artifacts: [
          "청록색 그림자",
          "교관",
          ["교관", "대지를 유랑하는 악단"],
          ["청록색 그림자", "대지를 유랑하는 악단"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "자유로운 터키석 가루",
            amount: 1
          },
          {
            name: "풍차국화",
            amount: 3
          },
          {
            name: "구라구라 꽃꿀",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "자유로운 터키석 조각",
            amount: 3
          },
          {
            name: "폭풍의 씨앗",
            amount: 2
          },
          {
            name: "풍차 국화",
            amount: 10
          },
          {
            name: "구라구라 꽃꿀",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "자유로운 터키석 조각",
            amount: 6
          },
          {
            name: "폭풍의 씨앗",
            amount: 4
          },
          {
            name: "풍차 국화",
            amount: 20
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "자유로운 터키석 덩이",
            amount: 3
          },
          {
            name: "폭풍의 씨앗",
            amount: 8
          },
          {
            name: "풍차 국화",
            amount: 30
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "자유로운 터키석 덩이",
            amount: 6
          },
          {
            name: "폭풍의 씨앗",
            amount: 12
          },
          {
            name: "풍차 국화",
            amount: 45
          },
          {
            name: "원소 꽃꿀",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "자유로운 터키석",
            amount: 6
          },
          {
            name: "폭풍의 씨앗",
            amount: 20
          },
          {
            name: "풍차 국화",
            amount: 60
          },
          {
            name: "원소 꽃꿀",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 가르침",
            amount: 3
          },
          {
            name: "구라구라 꽃꿀",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 인도",
            amount: 2
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "자유의 인도",
            amount: 4
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 인도",
            amount: 6
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "자유의 인도",
            amount: 9
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 철학",
            amount: 4
          },
          {
            name: "원소 꽃꿀",
            amount: 4
          },
          {
            name: "북풍의 영혼상자",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "자유의 철학",
            amount: 6
          },
          {
            name: "원소 꽃꿀",
            amount: 6
          },
          {
            name: "북풍의 영혼상자",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 철학",
            amount: 12
          },
          {
            name: "원소 꽃꿀",
            amount: 9
          },
          {
            name: "북풍의 영혼상자",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "자유의 철학",
            amount: 16
          },
          {
            name: "원소 꽃꿀",
            amount: 12
          },
          {
            name: "북풍의 영혼상자",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 775,
                atk: 14,
                def: 59,
                bonus: 0
            },
            end: {
                hp: 1991,
                atk: 37,
                def: 151,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 2570,
                atk: 47,
                def: 195,
                bonus: 0
            },
            end: {
                hp: 3850,
                atk: 71,
                def: 293,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 4261,
                atk: 78,
                def: 324,
                bonus: 6
            },
            end: {
                hp: 4901,
                atk: 90,
                def: 373,
                bonus: 6
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 5450,
                atk: 100,
                def: 414,
                bonus: 12
            },
            end: {
                hp: 6090,
                atk: 112,
                def: 463,
                bonus: 12
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 6501,
                atk: 120,
                def: 494,
                bonus: 12
            },
            end: {
                hp: 7141,
                atk: 131,
                def: 543,
                bonus: 12
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 7552,
                atk: 139,
                def: 574,
                bonus: 18
            },
            end: {
                hp: 8192,
                atk: 151,
                def: 623,
                bonus: 18
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 8603,
                atk: 158,
                def: 654,
                bonus: 24
            },
            end: {
                hp: 9243,
                atk: 170,
                def: 703,
                bonus: 24
            }
        }
    ],
    bonus: "바람 원소 피해 보너스",
    bonusType: "percent",
    skills: [
      {
        name: "약식 풍령 작성",
        type: "일반공격",
        description: `
일반 공격
풍령으로 최대 4번 공격해 바람 원소 피해를 준다.
(1단:33.5%,2단:30.6%,3단:38.4%,4단:47.9%)

강공격
일정 스태미나를 소모해 짧은 영창 후 바람 원소 범위 피해를 준다.
(강공격피해:120%, 강공격 스태미나 소모:50.0pt)

낙하 공격
풍령의 힘을 모은 후 지면을 강타해 경로상의 적을 공격하고 땅에 닿으면 바람 원소 범위 피해를 준다.
(낙하 기간 피해:56.8%, 저공/고공 추락충격피해:114%/142%)
        `
      },
      {
        name: "풍령 작성º육삼 공팔",
        type: "원소스킬",
        description: `
소형 풍령을 소환해 범위 내의 적에게 바람 원소 피해를 주고 풍령이 있는 위치로 끌어당긴 후 공중으로 띄운다.
(스킬피해:211%,재사용 대기시간:15.0초)
        `
      },
      {
        name: "금기º풍령작성º칠오동구이형",
        type: "원소폭발(필살기)",
        description: `
설탕이 불안정한 플라스크를 던져 대형의 바람 정령을 생성한다. 존재하는 동안 대형의 바람 정령은 주변의 적을 지속해서 끌어당기며 바람 원소 범위 피해를 준다.

원소 전환
바람 정령 스킬을 시전하는 동안 물원소/불원소/얼음원소/번개원소에 닿으면 상응하는 원소 속성을 획득하고 추가로 해당 속성 피해를 준다.
원소 전환은 스킬을 시전하는 동안 1회만 발생한다.

(지속피해:148%,부가원소피해:44.0%,지속시간:6.0초,재사용 대기시간:20.0초,원소에너지:80)
        `
      }
    ],
    passive: [
      {
        name: "촉매치환술",
        ascension: 1,
        description: "설탕이 원소 확산 반응 발동 후 기타 대응하는 원소 유형 캐릭터의 원소 마스터리가 50pt 증가한다. 지속시간:8초."
      },
      {
        name: "작은 혜풍",
        ascension: 4,
        description: "풍령 작성º육삼공팔 혹은 금기º풍령작성º칠오동구 이형이 적을 명중하면 설탕의 원소 마스터리의 20%를 기반으로 다른 캐릭터에게 원소 마스터리 보너스를 제공한다. 지속시간:8초"
      },
      {
        name: "불안정한 발견",
        ascension: -1,
        description: "캐릭터와 무기의 육성 소재를 합성 시 10%의 확률로 생산량이 2배로 늘어난다. "
      }
    ],
    constellation: [
      {
        id: 1,
        name: "쌓아 올린 진공 영역",
        description: `풍령 작성 · 육삼공팔의 사용 가능 횟수가 1회 증가한다.`
      },
      {
        id: 2,
        name: "불속박형 베트",
        description: `금기 · 풍령 작성 · 칠오 동구 이형의 스킬 지속 시간을 2초 연장한다.`
      },
      {
        id: 3,
        name: "실수하지 않는 소녀",
        description: `풍령 작성 · 육삼공팔의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "연금의 편집증",
        description: `설탕이 일반 공격 혹은 강공격을 7번 발동할 때마다 풍령 작성 · 육삼공팔의 재사용 대기시간이 랜덤으로 1~7초 감소한다.`
      },
      {
        id: 5,
        name: "진지한 보통병",
        description: `금기 · 풍령 작성 · 칠오 동구 이형의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "혼돈의 엔트로피",
        description: `금기 · 풍령 작성 · 칠오 동구 이형이 원소 전환이 발생하면 파티 내 모든 캐릭터는 스킬이 지속하는 동안 대응하는 원소 피해 보너스를 20% 획득한다.`
      }
    ]
  },
  "진": {
    name: "진",
    keyword: ["jean"],
    icon: "https://paimon.moe/images/characters/jean.png",
    expurl: "https://www.youtube.com/watch?v=gy37_mlfTdA&list=PLQBypYmxS6LSoV-ZMcPmyG0qur5jcMcQv&index=13&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "여성",
    birth: "03/14",
    affiliation: "페보니우스 기사단",
    star: "새끼사자자리",
    level: 5,
    weapon: "한손검",
    element: "바람",
    build: [
      {
        type: "서포터", 
        main_stats: {
          "시계": ["공격력%", "원소 충전 효율"],
          "잔": ["바람 원소 피해","공격력%"],
          "모자": ["치명타 확률", "치명타 피해", "공격력%"]
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%", 
          "원소 충전 효율", 
          "원소 마스터리",
          "공격력"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["반암결록", "참봉의 칼날", "아메노마 카게우치가타나", "천공의 검", "부식의 검 (재련 5레벨)", "오래된 자유의 서약", "매의 검", "페보니우스 검", "피리검", "용의 포효", "흑암 장검", "흘호 생선회칼"],
        artifacts: [
          "청록색 그림자",
          "옛 왕실의 의식",
          ["청록색 그림자", "공격력 +18% 세트"],
          ["청록색 그림자", "절연의 기치"],
          "절연의 기치",
          ["청록색 그림자", "공격력 +18% 세트"],
          ["청록색 그림자", "절연의 기치"],
          "절연의 기치",
          ["옛 왕실의 의식", "청록색 그림자"],
          ["옛 왕실의 의식", "공격력 +18% 세트"]
        ]
      },
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "물리 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%", 
          "원소 충전 효율", 
          "원소 마스터리",
          "공격력"
        ],
        priority: ["일반 공격", "원소 스킬", "필살기"],
        weapons: ["매의 검", "참봉의 칼날", "반암결록", "천공의 검", "흑암 장검", "칠흑검", "참암 프로토타입"],
        artifacts: [
          ["피에 물든 기사도", "창백의 화염"],
          "검투사의 피날레",
          ["피에 물든 기사도", "공격력 +18% 세트"],
          ["창백의 화염", "공격력 +18% 세트"],
          ["공격력 +18% 세트", "청록색 그림자"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "자유로운 터키석 가루",
            amount: 1
          },
          {
            name: "민들레 씨앗",
            amount: 3
          },
          {
            name: "부서진 가면",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "자유로운 터키석 조각",
            amount: 3
          },
          {
            name: "폭풍의 씨앗",
            amount: 2
          },
          {
            name: "민들레 씨앗",
            amount: 10
          },
          {
            name: "부서진 가면",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "자유로운 터키석 조각",
            amount: 6
          },
          {
            name: "폭풍의 씨앗",
            amount: 4
          },
          {
            name: "민들레 씨앗",
            amount: 20
          },
          {
            name: "오염된 가면",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "자유로운 터키석 덩이",
            amount: 3
          },
          {
            name: "폭풍의 씨앗",
            amount: 8
          },
          {
            name: "민들레 씨앗",
            amount: 30
          },
          {
            name: "오염된 가면",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "자유로운 터키석 덩이",
            amount: 6
          },
          {
            name: "폭풍의 씨앗",
            amount: 12
          },
          {
            name: "민들레 씨앗",
            amount: 45
          },
          {
            name: "불길한 가면",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "자유로운 터키석",
            amount: 6
          },
          {
            name: "폭풍의 씨앗",
            amount: 20
          },
          {
            name: "민들레 씨앗",
            amount: 60
          },
          {
            name: "불길한 가면",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 가르침",
            amount: 3
          },
          {
            name: "부서진 가면",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 2
          },
          {
            name: "오염된 가면",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 4
          },
          {
            name: "오염된 가면",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 6
          },
          {
            name: "오염된 가면",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 9
          },
          {
            name: "오염된 가면",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 4
          },
          {
            name: "불길한 가면",
            amount: 4
          },
          {
            name: "동풍의 깃털",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 6
          },
          {
            name: "불길한 가면",
            amount: 6
          },
          {
            name: "동풍의 깃털",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 12
          },
          {
            name: "불길한 가면",
            amount: 9
          },
          {
            name: "동풍의 깃털",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 16
          },
          {
            name: "불길한 가면",
            amount: 12
          },
          {
            name: "동풍의 깃털",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 1163,
                atk: 19,
                def: 60,
                bonus: 0
            },
            end: {
                hp: 2967,
                atk: 48,
                def: 155,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3948,
                atk: 64,
                def: 206,
                bonus: 0
            },
            end: {
                hp: 5908,
                atk: 96,
                def: 309,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 6605,
                atk: 108,
                def: 345,
                bonus: 5.5
            },
            end: {
                hp: 7599,
                atk: 124,
                def: 397,
                bonus: 5.5
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 8528,
                atk: 139,
                def: 446,
                bonus: 11.1
            },
            end: {
                hp: 9533,
                atk: 155,
                def: 499,
                bonus: 11.1
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 10230,
                atk: 166,
                def: 535,
                bonus: 11.1
            },
            end: {
                hp: 11243,
                atk: 183,
                def: 588,
                bonus: 11.1
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 11940,
                atk: 194,
                def: 624,
                bonus: 16.6
            },
            end: {
                hp: 12965,
                atk: 211,
                def: 678,
                bonus: 16.6
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 13662,
                atk: 222,
                def: 715,
                bonus: 22.2
            },
            end: {
                hp: 14695,
                atk: 239,
                def: 769,
                bonus: 22.2
            }
        }
    ],
    bonus: "치유 보너스",
    bonusType: "percent",
    skills: [
      {
        name: "페보니우스 검술",
        type: "일반공격",
        description: `
일반공격
검으로 최대 5번 공격한다.
(1단:48.3%,2단:45.6%,3단:60.3%,4단:65.9%,5단:79.2%)

강공격
일정 스태미나를 소모해 바람 원소의 힘이 깃들어있는 올려베기를 발동한다.
날아간 적은 짧은 시간 내에 천천히 추락한다.
(강공격 피해 : 162%, 강공격 스태미나 소모:20.0pt)

낙하 공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 땅에 닿으면 범위 피해를 준다.
(낙하기간피해:63.9%, 저공/고공 추락 충격 피해:128%/160%)
        `
      },
      {
        name: "풍압검",
        type: "원소스킬",
        description: `
형체가 없는 바람의 힘을 검에 모아 작은 폭풍을 만들어 낸 후 적을 향해 날려 대량의 바람 원소 피해를 준다.

홀드
지속해서 스태미나를 소모하여 주변의 적을 앞으로 끌어당긴다. 방향을 조절할 수 있다. 스킬을 시전하는 동안 이동할 수 없다.
(스킬피해:292%,초당20.0pt,최대지속시간:5.0초,재사용대기시간:6.0초)
        `
      },
      {
        name: "민들레바람",
        type: "원소폭발(필살기)",
        description: `
바람의 가호를 소환해 천풍이 세차게 부는 민들레 영역을 만들어내 적을 넉백시키고 주변의 적에게 바람 원소 피해를 준다. 또한 파티 내 모든 캐릭터의 HP를 대량 회복하고 회복량은 진의 공격력의 영향을 받는다.

민들레영역
º영역 안의 캐릭터의 HP를 지속해서 회복한다.
º영역 안의 캐릭터는 지속해서 바람 원소의 영향을 받는다.
º영역을 출입하는 적에게 바람 원소 피해를 준다.
        `
      }
    ],
    passive: [
      {
        name: "바람과 함께",
        ascension: 1,
        description: "일반 공격 명중 시 50%의 확률로 파티 내 모든 캐릭터의 HP를 진 공격력의 15% 만큼 회복한다. "
      },
      {
        name: "바람의 인도",
        ascension: 4,
        description: "민들레 바람 사용 후 원소 에너지를 20% 회복한다."
      },
      {
        name: "인도의 바람",
        ascension: -1,
        description: "회복류 요리를 완벽 요리 시 12%의 확률로 생산량이 2배로 늘어난다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "검척에 흐르는 폭풍",
        description: `풍압검을 1초 이상 홀드하면 끌어당기는 속도가 상승하고 가하는 피해가 40% 증가한다.`
      },
      {
        id: 2,
        name: "모든 이를 수호하는 방패",
        description: `진이 원소 구슬 혹은 원소 입자 획득 시 파티 내 모든 캐릭터의 공격속도와 이동속도가 15% 증가한다. 지속 시간: 15초`
      },
      {
        id: 3,
        name: "서풍이 스칠 무렵",
        description: `민들레 바람의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "민들레의 국토",
        description: `민들레 바람 영역 내에서 모든 적의 바람 원소 내성이 40% 감소한다.`
      },
      {
        id: 5,
        name: "삽시간의 열풍",
        description: `풍압검의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "만민을 보살피는 사자의 이빨",
        description: `민들레 바람 영역 내에서 캐릭터가 받는 피해가 35% 감소한다.
영역을 벗어난 후 해당 효과는 3번 피격 혹은 10초 후 사라진다.`
      }
    ]
  },
  "벤티": {
    name: "벤티",
    keyword: ["venti"],
    icon: "https://paimon.moe/images/characters/venti.png",
    expurl: "https://www.youtube.com/watch?v=pzdIoFLw3Yo&list=PLQBypYmxS6LSoV-ZMcPmyG0qur5jcMcQv&index=15&ab_channel=%EC%9B%90%EC%8B%A0",
    pvurl: "https://www.youtube.com/watch?v=ChBk4SFD2hQ&list=PLQBypYmxS6LReK6-H2wUKs0geDHMGMpSp&index=7&ab_channel=%EC%9B%90%EC%8B%A0",
    playurl: "https://www.youtube.com/watch?v=kcmXsyZJsxA&list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA&index=11&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "남성",
    birth: "06/16",
    affiliation: "몬드성",
    star: "가선자리",
    level: 5,
    weapon: "활",
    element: "바람",
    build: [
      {
        type: "서브 딜러", 
        main_stats: {
          "시계": ["원소 마스터리", "공격력%"],
          "잔": ["원소 마스터리", "바람 원소 피해"],
          "모자": ["원소 마스터리", "치명타 확률" ,"치명타 피해"]
        },
        sub_stats: [
          "원소 마스터리",
          "원소 충전 효율", 
          "공격력%", 
          "치명타 확률 / 피해",
          "공격력"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["절현 (재련 4-5레벨)", "뒷골목 사냥꾼 (재련 5레벨)", "절현 (재련 1-3레벨)", "바람 꽃의 노래 (재련 5레벨)", "종말 탄식의 노래", "천공의 날개", "아모스의 활", "뒷골목 사냥꾼 (재련 1-4레벨)", "청록의 사냥활", "흑암 배틀 보우", "담월 프로토타입", "녹슨 활", "탄궁"],
        artifacts: [
          "청록색 그림자",
          "옛 왕실의 의식",
          ["청록색 그림자", "옛 왕실의 의식"],
          ["청록색 그림자", "공격력 +18% 세트"]
        ]
      }
    ],
    skills: [
      {
        name: "신성한 사격술",
        type: "일반공격",
        description: `
일반 공격
활로 최대 6번 공격한다.
(1단:20.4%+20.4%,2단:44.4%,3단:52.4%,4단:26.1%+26.1%,5단:50.7%,6단:71.0%)

강공격
피해가 더 크고 정확한 조준 사격을 한다. 조준 시 천지를 보살피는 바람이 화살 끝에 계속해서 모인다. 바람의 힘이 가득 찬 화살은 바람 원소 피해를 준다.
(조준사격:43.9%,풀차지조준사격:124%)

낙하 공격
공중에서 화살비를 쏜 후 빠른 속도로 땅에 착지한다. 땅에 닿으면 범위 피해를 준다.
(낙하 기간 피해: 56.8%,저공/고공 추락충격피해:114%/142%)
        `
      },
      {
        name: "높은 하늘의 노래",
        type: "원소스킬",
        description: `
시와 노래와 함께 울려 퍼지는 바람을 소환해 흙먼지 위를 걷는 사물을 높은 하늘로 띄어보자.

짧은 터치
적이 있는 위치에 바람의 영역을 소환해 바람 원소 범위 피해를 주고 적을 공중에 띄운다.
(짧은 터치 피해 :276%, 짧은터치 재사용 대기시간:6.0초)

홀드
자신을 중심으로 더 큰 바람의 영역을 만들어내 바람 원소 범위 피해를 주고 적을 공중에 띄운다.
홀드하며 발동한 뒤 벤티는 바람을 타고 공중에 떠오른다.
(차지피해:380%,차지재사용 대기시간:15.0초)

공중에 띄어진 적은 짧은 시간 내에 천천히 추락한다.
        `
      },
      {
        name: "바람신의 시",
        type: "원소폭발(필살기)",
        description: `
천풍이 모여 만들어진 화살을 쏴 전방에 거대한 폭풍의 눈을 만들어내 경로상의 물체와 적을 감아올려 바람 원소 피해를 계속 준다.

원소전환
폭풍의 눈은 스킬을 시전하는 동안 물원소/불원소/얼음원소/번개원소에 닿으면 상응하는 원소 속성을 획득하고 추가로 해당 속성 피해를 준다. 원소 전환은 스킬을 시전하는 동안 1회만 발생한다.

(지속피해:37.6%,부가원소피해:18.8%,지속시간:8.0초,재사용대기시간:15.0초,원소에너지:60)
        `
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "자유로운 터키석 가루",
            amount: 1
          },
          {
            name: "세실리아꽃",
            amount: 3
          },
          {
            name: "슬라임 응축액",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "자유로운 터키석 조각",
            amount: 3
          },
          {
            name: "폭풍의 씨앗",
            amount: 2
          },
          {
            name: "세실리아꽃",
            amount: 10
          },
          {
            name: "슬라임 응축액",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "자유로운 터키석 조각",
            amount: 6
          },
          {
            name: "폭풍의 씨앗",
            amount: 4
          },
          {
            name: "세실리아꽃",
            amount: 20
          },
          {
            name: "슬라임청",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "자유로운 터키석 덩이",
            amount: 3
          },
          {
            name: "폭풍의 씨앗",
            amount: 8
          },
          {
            name: "세실리아꽃",
            amount: 30
          },
          {
            name: "슬라임청",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "자유로운 터키석 덩이",
            amount: 6
          },
          {
            name: "폭풍의 씨앗",
            amount: 12
          },
          {
            name: "세실리아꽃",
            amount: 45
          },
          {
            name: "슬라임 원액",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "자유로운 터키석",
            amount: 6
          },
          {
            name: "폭풍의 씨앗",
            amount: 20
          },
          {
            name: "세실리아꽃",
            amount: 60
          },
          {
            name: "슬라임 원액",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 가르침",
            amount: 3
          },
          {
            name: "슬라임 응축액",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 인도",
            amount: 2
          },
          {
            name: "슬라임청",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "시문의 인도",
            amount: 4
          },
          {
            name: "슬라임청",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 인도",
            amount: 6
          },
          {
            name: "슬라임청",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "시문의 인도",
            amount: 9
          },
          {
            name: "슬라임청",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 철학",
            amount: 4
          },
          {
            name: "슬라임 원액",
            amount: 4
          },
          {
            name: "북풍의 꼬리",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "시문의 철학",
            amount: 6
          },
          {
            name: "슬라임 원액",
            amount: 6
          },
          {
            name: "북풍의 꼬리",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 철학",
            amount: 12
          },
          {
            name: "슬라임 원액",
            amount: 9
          },
          {
            name: "북풍의 꼬리",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "시문의 철학",
            amount: 16
          },
          {
            name: "슬라임 원액",
            amount: 12
          },
          {
            name: "북풍의 꼬리",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 820,
                atk: 20,
                def: 52,
                bonus: 0
            },
            end: {
                hp: 2127,
                atk: 53,
                def: 135,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 2830,
                atk: 71,
                def: 180,
                bonus: 0
            },
            end: {
                hp: 4234,
                atk: 106,
                def: 269,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 4734,
                atk: 118,
                def: 301,
                bonus: 8
            },
            end: {
                hp: 5446,
                atk: 136,
                def: 346,
                bonus: 8
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 6112,
                atk: 153,
                def: 388,
                bonus: 16
            },
            end: {
                hp: 6832,
                atk: 171,
                def: 434,
                bonus: 16
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 7331,
                atk: 183,
                def: 465,
                bonus: 16
            },
            end: {
                hp: 8058,
                atk: 201,
                def: 512,
                bonus: 16
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 8557,
                atk: 214,
                def: 543,
                bonus: 24
            },
            end: {
                hp: 9291,
                atk: 232,
                def: 590,
                bonus: 24
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 9790,
                atk: 245,
                def: 622,
                bonus: 32
            },
            end: {
                hp: 10531,
                atk: 263,
                def: 669,
                bonus: 32
            }
        }
    ],
    bonus: "원소 충전 효율",
    bonusType: "percent",
    passive: [
      {
        name: "여풍의 포옹",
        ascension: 1,
        description: "높은 하늘의 노래를 홀드하면 상승기류가 생성된다. 지속시간:20초."
      },
      {
        name: "폭풍의 눈",
        ascension: 4,
        description: "바람 신의 시 효과 종료 후 벤티의 원소 에너지를 15pt 회복한다. 만약 원소 전환이 발생하면 똑같이 해당 원소와 대응하는 파티 내 모든 캐릭터의 원소 에너지를 15pt 회복한다."
      },
      {
        name: "항풍과 함께",
        ascension: -1,
        description: "파티 내 모든 캐릭터의 활강 시 소모하는 스태미나가 20% 감소한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "쏘아 올린 창풍",
        description: `조준 사격 시 추가로 두 발의 분열된 화살을 발사한다. 각각 기존 화살의 33% 피해를 준다.`
      },
      {
        id: 2,
        name: "그리운 찬 바람",
        description: `높은 하늘의 노래는 적의 바람 원소 내성과 물리 내성을 12% 감소시킨다. 지속 시간: 10초.
높은 하늘의 노래에 의해 공중에 띄워진 적은 땅에 닿기 전에 바람 원소 내성과 물리 내성이 추가로 12% 감소한다.`
      },
      {
        id: 3,
        name: "천풍의 시",
        description: `바람신의 시의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "자유의 찬 바람",
        description: `벤티가 원소 구슬 혹은 원소 입자를 획득 후 바람 원소 피해 보너스를 25% 획득한다. 지속 시간: 10초`
      },
      {
        id: 5,
        name: "높은 하늘의 협주",
        description: `높은 하늘의 노래의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "투쟁의 폭풍",
        description: `바람신의 시에 피격된 적은 바람 원소 내성이 20% 감소한다.
원소 전환이 발생할 경우 해당 원소 내성도 20% 감소한다.`
      }
    ]
  },
  "소": {
    name: "소",
    keyword: ["xiao"],
    icon: "https://paimon.moe/images/characters/xiao.png",
    expurl: "https://www.youtube.com/watch?v=D-Wf196kEtM&list=PLQBypYmxS6LSoV-ZMcPmyG0qur5jcMcQv&index=4&ab_channel=%EC%9B%90%EC%8B%A0",
    playurl: "https://www.youtube.com/watch?v=4-1I1iATjjM&list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA&index=4&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "남성",
    birth: "04/17",
    affiliation: "리월 선인",
    star: "황금날개천붕왕자리",
    level: 5,
    weapon: "장병기",
    element: "바람",
    build: [
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "바람 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%", 
          "원소 충전 효율", 
          "원소 마스터리",
          "공격력"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["화박연", "호마의 지팡이", "관홍의 창", "천암장창", "결투의 창", "흑암창", "천공의 마루", "페보니우스 장창", "별의 낫 프로토타입", "백술창", "미늘창"],
        artifacts: [
          ["청록색 그림자", "검투사의 피날레", "추억의 시메카자리"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "자유로운 터키석 가루",
            amount: 1
          },
          {
            name: "청심",
            amount: 3
          },
          {
            name: "슬라임 응축액",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "자유로운 터키석 조각",
            amount: 3
          },
          {
            name: "설익은 옥",
            amount: 2
          },
          {
            name: "청심",
            amount: 10
          },
          {
            name: "슬라임 응축액",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "자유로운 터키석 조각",
            amount: 6
          },
          {
            name: "설익은 옥",
            amount: 4
          },
          {
            name: "청심",
            amount: 20
          },
          {
            name: "슬라임청",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "자유로운 터키석 덩이",
            amount: 3
          },
          {
            name: "설익은 옥",
            amount: 8
          },
          {
            name: "청심",
            amount: 30
          },
          {
            name: "슬라임청",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "자유로운 터키석 덩이",
            amount: 6
          },
          {
            name: "설익은 옥",
            amount: 12
          },
          {
            name: "청심",
            amount: 45
          },
          {
            name: "슬라임 원액",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "자유로운 터키석",
            amount: 6
          },
          {
            name: "설익은 옥",
            amount: 20
          },
          {
            name: "청심",
            amount: 60
          },
          {
            name: "슬라임 원액",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 가르침",
            amount: 3
          },
          {
            name: "슬라임 응축액",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 인도",
            amount: 2
          },
          {
            name: "슬라임청",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "번영의 인도",
            amount: 4
          },
          {
            name: "슬라임청",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 인도",
            amount: 6
          },
          {
            name: "슬라임청",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "번영의 인도",
            amount: 9
          },
          {
            name: "슬라임청",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 철학",
            amount: 4
          },
          {
            name: "슬라임 원액",
            amount: 4
          },
          {
            name: "무예의 혼 고영",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "번영의 철학",
            amount: 6
          },
          {
            name: "슬라임 원액",
            amount: 6
          },
          {
            name: "무예의 혼 고영",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 철학",
            amount: 12
          },
          {
            name: "슬라임 원액",
            amount: 9
          },
          {
            name: "무예의 혼 고영",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "번영의 철학",
            amount: 16
          },
          {
            name: "슬라임 원액",
            amount: 12
          },
          {
            name: "무예의 혼 고영",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 991,
                atk: 27,
                def: 62,
                bonus: 5
            },
            end: {
                hp: 2572,
                atk: 71,
                def: 161,
                bonus: 5
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3422,
                atk: 94,
                def: 215,
                bonus: 5
            },
            end: {
                hp: 5120,
                atk: 140,
                def: 321,
                bonus: 5
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5724,
                atk: 157,
                def: 359,
                bonus: 9.8
            },
            end: {
                hp: 6586,
                atk: 181,
                def: 413,
                bonus: 9.8
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 7391,
                atk: 203,
                def: 464,
                bonus: 14.6
            },
            end: {
                hp: 8262,
                atk: 227,
                def: 519,
                bonus: 14.6
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 8866,
                atk: 243,
                def: 556,
                bonus: 14.6
            },
            end: {
                hp: 9744,
                atk: 267,
                def: 612,
                bonus: 14.6
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 10348,
                atk: 284,
                def: 649,
                bonus: 19.4
            },
            end: {
                hp: 11236,
                atk: 308,
                def: 705,
                bonus: 19.4
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 11840,
                atk: 325,
                def: 743,
                bonus: 24.2
            },
            end: {
                hp: 12736,
                atk: 349,
                def: 799,
                bonus: 24.2
            }
        }
    ],
    bonus: "치명타 확률",
    bonusType: "percent",
    skills: [
      {
        name: "권적미진",
        type: "일반공격",
        description: `
일반공격
창으로 최대 6번 공격한다.

강공격
일정 스태미나를 소모해 올려치기 공격을 가한다.

낙하공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다. 소는 낙하 공격 시, 추락 피해를 입지 않는다.
        `
      },
      {
        name: "풍륜양립",
        type: "원소스킬",
        description: `아주 빠르게 돌진하여 경로상의 적에게 바람 원소 피해를 준다. 공중에서 발동 가능. 초기 사용 가능 횟수 : 2회.
수천 년 전 악마와 요괴들을 두려움에 떨게 했던 야차의 가면을 착용한다.

야차의가면
·소의 점프력이 대폭 상승한다.
·공격 범위와 가하는 피해가 증가한다.
·공격은 바람원소피해로 전환되며, 해당 원소 전환은 다른 원소 부여 효과로 대체될 수 없다.

해당 상태일 때 소는 HP를 지속해서 잃는다. 해당 효과는 소가 퇴장할 때 사라진다.`
      },
      {
        name: "나자의 춤",
        type: "원소폭발(필살기)",
        description: `
수천 년 전 악마와 요괴들을 두려움에 떨게 했던 야차의 가면을 착용한다.

야차의가면
·소의 점프력이 대폭 상승한다.
·공격 범위와 가하는 피해가 증가한다.
·공격은 바람원소피해로 전환되며, 해당 원소 전환은 다른 원소 부여 효과로 대체될 수 없다.

해당 상태일 때 소는 HP를 지속해서 잃는다. 해당 효과는 소가 퇴장할 때 사라진다.
        `
      }
    ],
    passive: [
      {
        name: "항마·평요대성",
        ascension: 1,
        description: "나자의 춤 상태에서 소가 가하는 모든 피해가 5% 증가하고 이후 스킬 지속 시간 동안 3초가 지날 때마다 가하는 피해가 추가로 5% 증가한다. 피해 보너스는 최대 25%까지 획득한다."
      },
      {
        name: "괴겁·국토연진",
        ascension: 4,
        description: "풍륜양립 발동 후 7초 동안 풍륜양립으로 가하는 피해가 15% 증가한다. 지속시간 : 7초. 최대 중첩수:3회. 중첩 시 지속 시간이 갱신된다."
      },
      {
        name: "신통·공중 유희",
        ascension: -1,
        description: "파티 내 자신의 캐릭터의 등반 시 소모하는 스태미나가 20% 감소한다. 같은 효과의 고유특성과 중첩되지 않는다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "괴겁 · 삼계 파멸",
        description: `풍륜양립의 사용 가능 횟수가 1회 증가한다.`
      },
      {
        id: 2,
        name: "공겁 · 피어난 공허의 꽃",
        description: `대기 상태일 때 소 자신의 원소 충전 효율이 25% 상승한다.`
      },
      {
        id: 3,
        name: "항마 · 분노의 형상",
        description: `풍륜양립의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "신통 · 사라진 고통",
        description: `소의 HP가 50% 미만일 때 방어력이 100% 상승한다.`
      },
      {
        id: 5,
        name: "성겁 · 늘어나는 번뇌",
        description: `나자의 춤의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "항마 · 호법야차",
        description: `나자의 춤 상태에서 낙하 공격으로 최소 2명의 적을 명중하면 즉시 풍륜양립 사용 가능 횟수를 1회 획득하며, 1초 동안 재사용 대기시간에 상관없이 풍륜양립을 발동할 수 있다.`
      }
    ]
  },
  "카즈하": {
    name: "카에데하라 카즈하",
    keyword: ["카에데하라 카즈하", "kazuha"],
    icon: "https://paimon.moe/images/characters/kaedehara_kazuha.png",
    expurl:"https://www.youtube.com/watch?v=E0kqPd7fLwE",
    pvurl: "https://www.youtube.com/watch?v=UO5GFQcF2JM",
    playurl: "https://www.youtube.com/watch?v=03OrtAv9nBc",
    gender: "남성",
    birth: "10/29",
    affiliation: "남십자함대",
    star: "단풍잎자리",
    level: 5,
    weapon: "한손검",
    element: "바람",
    build: [
      {
        type: "원소 마스터리", 
        main_stats: {
          "시계": ["원소 마스터리", "원소 충전 효율"],
          "잔": "원소 마스터리",
          "모자": "원소 마스터리"
        },
        sub_stats: [
          "원소 마스터리", 
          "원소 충전 효율",
          "공격력%",
          "치명타 확률 / 피해"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["오래된 자유의 서약", "제례검", "페보니우스 검", "천공의 검", "아메노마 카게우치가타나", "부식의 검", "강철 벌침", "암철검"],
        artifacts: ["청록색 그림자", "교관"]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "자유로운 터키석 가루",
            amount: 1
          },
          {
            name: "바다 불로초",
            amount: 3
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "자유로운 터키석 조각",
            amount: 3
          },
          {
            name: "꼭두각시 부품",
            amount: 2
          },
          {
            name: "바다 불로초",
            amount: 10
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "자유로운 터키석 조각",
            amount: 6
          },
          {
            name: "꼭두각시 부품",
            amount: 4
          },
          {
            name: "바다 불로초",
            amount: 20
          },
          {
            name: "실버 까마귀 휘장",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "자유로운 터키석 덩이",
            amount: 3
          },
          {
            name: "꼭두각시 부품",
            amount: 8
          },
          {
            name: "바다 불로초",
            amount: 30
          },
          {
            name: "실버 까마귀 휘장",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "자유로운 터키석 덩이",
            amount: 6
          },
          {
            name: "꼭두각시 부품",
            amount: 12
          },
          {
            name: "바다 불로초",
            amount: 45
          },
          {
            name: "골드 까마귀 휘장",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "자유로운 터키석",
            amount: 6
          },
          {
            name: "꼭두각시 부품",
            amount: 20
          },
          {
            name: "바다 불로초",
            amount: 60
          },
          {
            name: "골드 까마귀 휘장",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 가르침",
            amount: 3
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 인도",
            amount: 2
          },
          {
            name: "실버 까마귀 휘장",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "근면의 인도",
            amount: 4
          },
          {
            name: "실버 까마귀 휘장",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 인도",
            amount: 6
          },
          {
            name: "실버 까마귀 휘장",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "근면의 인도",
            amount: 9
          },
          {
            name: "실버 까마귀 휘장",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 철학",
            amount: 4
          },
          {
            name: "골드 까마귀 휘장",
            amount: 4
          },
          {
            name: "순금의 비늘",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "근면의 철학",
            amount: 6
          },
          {
            name: "골드 까마귀 휘장",
            amount: 6
          },
          {
            name: "순금의 비늘",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 철학",
            amount: 12
          },
          {
            name: "골드 까마귀 휘장",
            amount: 9
          },
          {
            name: "순금의 비늘",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "근면의 철학",
            amount: 16
          },
          {
            name: "골드 까마귀 휘장",
            amount: 12
          },
          {
            name: "순금의 비늘",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 1039,
                atk: 23,
                def: 63,
                bonus: 0
            },
            end: {
                hp: 2695,
                atk: 60,
                def: 163,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3586,
                atk: 80,
                def: 217,
                bonus: 0
            },
            end: {
                hp: 5366,
                atk: 119,
                def: 324,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5999,
                atk: 133,
                def: 363,
                bonus: 28.8
            },
            end: {
                hp: 6902,
                atk: 153,
                def: 417,
                bonus: 28.8
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 7747,
                atk: 172,
                def: 468,
                bonus: 57.6
            },
            end: {
                hp: 8659,
                atk: 192,
                def: 523,
                bonus: 57.6
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 9292,
                atk: 206,
                def: 562,
                bonus: 57.6
            },
            end: {
                hp: 10213,
                atk: 227,
                def: 617,
                bonus: 57.6
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 10846,
                atk: 241,
                def: 656,
                bonus: 86.4
            },
            end: {
                hp: 11777,
                atk: 262,
                def: 712,
                bonus: 86.4
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 12410,
                atk: 266,
                def: 750,
                bonus: 115.2
            },
            end: {
                hp: 13348,
                atk: 297,
                def: 807,
                bonus: 115.2
            }
        }
    ],
    bonus: "원소 마스터리",
    bonusType: "number",
    skills: [
      {
        name: "아류 검술",
        type: "일반공격",
        description: `
일반 공격
검으로 최대 5번 공격한다.

강공격
일정 스태미나를 소모해 순간적으로 전방을 향해 검을 2번 휘두른다.

낙하 공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다. 만약 낙하 공격이 치하야부루에 의해 공중으로 띄워지면 낙하 공격 · 폭풍 베기으로 전환된다.

낙하 공격 · 폭풍 베기
치하야부루에 의해 공중으로 띄워졌을 때 낙하 공격에 의한 피해는 바람 원소 피해로 전환된다. 낙하 시 비검에 의해 생성되는 풍혈이 주변의 물체와 적을 끌어당긴다.
        `
      },
      {
        name: "치하야부루",
        type: "원소스킬",
        description: `바람처럼 격양된 비검을 펼치면 적과 주변 물체를 끌어당기고 범위 내의 적에게 바람 원소 피해를 주고 용트림 같은 세찬 기류가 솟아오른다.
원소전투 스킬 · 치하야부루에 의해 공중에 띄워진 카즈하가 낙하 공격을 진행하면 강력한 낙하 공격 · 폭풍 베기를 발동한다.

짧은 터치
공중에서 발동한다.

홀드
힘을 모은 후 발동하며 짧게 누를 때보다 더 큰 바람 원소 피해를 준다.

낙하 공격 · 폭풍 베기
치하야부루에 의해 공중으로 띄워졌을 때 낙하 공격에 의한 피해는 바람 원소 피해로 전환된다. 낙하 시 비검에 의해 생성되는 풍혈이 주변의 물체와 적을 끌어당긴다.`
      },
      {
        name: "카즈하의 일도",
        type: "원소폭발(필살기)",
        description: `
아류의 오의를 사용할 때 강풍이 불어와 바람 원소 범위 피해를 준다.
칼 바람이 불어와 「바람 부는 가을 들판」이라는 이름의 영역을 남기고 해당 영역에 있는 적에게 간헐적으로 바람 원소 피해를 준다.

원소 전환
만약 「바람 부는 가을 들판」의 지속 시간 중에 물 원소/불 원소/얼음 원소/번개 원소와 접촉하면, 대응되는 원소 속성을 획득하고 추가로 해당 원소의 원소 부가 피해를 준다.
이러한 전환은 지속 시간 내에 1번만 발생한다.
        `
      }
    ],
    passive: [
      {
        name: "상풍검무",
        ascension: 1,
        description: "카즈하의 일도를 발동시 만약 물 원소, 불 원소, 얼음 원소, 번개 원소를 접촉하면, 천조진에서 낙하 공격 · 폭풍 베기를 사용 시 원소 전환이 발생하여 상응되는 추가 원소 피해 +200%. 이 피해는 낙하 공격 피해로 취급한다. 매번 치하야부루의 스킬 효과에서 원소 전환은 단 한번만 발생한다."
      },
      {
        name: "바람 속 시 낭송",
        ascension: 4,
        description: "확산 반응을 일으키면 카에데하라 카즈하는 파티 내 모든 캐릭터에게 (자신의 원소 마스터리의 합계 × 0.04)%만큼 확산된 원소의 원소 피해 보너스를 부여한다. 지속 시간: 8초. 이 특성으로 얻은 원소 피해 보너스는 중첩될 수 있다."
      },
      {
        name: "안개 낀 솔바람",
        ascension: -1,
        description: `파티 내 자신의 캐릭터의 대시 시 소모하는 스태미나가 20% 감소한다.
같은 효과의 고유 특성과 중첩되지 않는다.`
      }
    ],
    constellation: [
      {
        id: 1,
        name: "붉게 물든 천개의 산",
        description: `치하야부루의 재사용 대기시간이 10% 감소한다.
카즈하의 일도를 발동할 때 치하야부루의 재사용 대기시간이 초기화된다.`
      },
      {
        id: 2,
        name: "남겨진 산속의 안개",
        description: `카즈하의 일도의 「바람 부는 가을 들판」 영역 내에서 현재 필드 위 캐릭터는 원소 마스터리가 200pt 증가한다.`
      },
      {
        id: 3,
        name: "단풍 소매 기담",
        description: `치하야부루의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "대공환법",
        description: `카에데하라 카즈하의 원소 에너지가 45pt 이하 시 아래와 같은 효과가 있다.
· 짧게 누르거나 길게 눌러 치하야부루 발동 시 카에데하라 카즈하의 원소 에너지는 각각 3, 4pt가 회복한다.
· 활강 상태일 때 카에데하라 카즈하는 매초 원소 에너지를 2pt씩 회복할 수 있다.`
      },
      {
        id: 5,
        name: "만세의 모음집",
        description: `카즈하의 일도의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "핏빛 잎사귀",
        description: `카에데하라 카즈하가 치하야부루 혹은 카즈하의 일도를 발동한 후 5초동안 바람 원소 부여를 획득한다.
또한 각 효과의 지속 시간 동안 카에데하라 카즈하의 일반 공격, 강공격, 낙하 공격, 낙하 공격 · 폭풍 베기에 의한 피해가 자신의 원소 마스터리 × 0.2%만큼 증가한다.`
      }
    ]
  },
  "사유": {
    name: "사유",
    icon: "https://paimon.moe/images/characters/sayu.png",
    expurl: undefined,
    pvurl: undefined,
    playurl: "https://youtu.be/IDQnRbh52t4",
    gender: "여성",
    birth: "10/19",
    affiliation: "종말번대",
    star: "너구리자리",
    level: 4,
    weapon: "양손검",
    element: "바람",
    build: [
      {
        type: "서포터", 
        main_stats: {
          "시계": ["원소 충전 효율", "원소 마스터리"],
          "잔": ["원소 마스터리", "공격력%"],
          "모자": ["원소 마스터리", "치유 보너스"]
        },
        sub_stats: [
          "원소 충전 효율",
          "원소 마스터리",
          "공격력%"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["늑대의 말로", "제례 대검", "카츠라기를 벤 나가마사", "페보니우스 대검", "빗물 베기", "드래곤 블러드 소드"],
        artifacts: ["청록색 그림자", "옛 왕실의 의식", ["절연의 기치", "사랑받는 소녀"]]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "자유로운 터키석 가루",
            amount: 1
          },
          {
            name: "수정 골수",
            amount: 3
          },
          {
            name: "구라구라 꽃꿀",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "자유로운 터키석 조각",
            amount: 3
          },
          {
            name: "꼭두각시 부품",
            amount: 2
          },
          {
            name: "수정 골수",
            amount: 10
          },
          {
            name: "구라구라 꽃꿀",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "자유로운 터키석 조각",
            amount: 6
          },
          {
            name: "꼭두각시 부품",
            amount: 4
          },
          {
            name: "수정 골수",
            amount: 20
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "자유로운 터키석 덩이",
            amount: 3
          },
          {
            name: "꼭두각시 부품",
            amount: 8
          },
          {
            name: "수정 골수",
            amount: 30
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "자유로운 터키석 덩이",
            amount: 6
          },
          {
            name: "꼭두각시 부품",
            amount: 12
          },
          {
            name: "수정 골수",
            amount: 45
          },
          {
            name: "원소 꽃꿀",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "자유로운 터키석",
            amount: 6
          },
          {
            name: "꼭두각시 부품",
            amount: 20
          },
          {
            name: "수정 골수",
            amount: 60
          },
          {
            name: "원소 꽃꿀",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "천광의 가르침",
            amount: 3
          },
          {
            name: "구라구라 꽃꿀",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "천광의 인도",
            amount: 2
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "천광의 인도",
            amount: 4
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "천광의 인도",
            amount: 6
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "천광의 인도",
            amount: 9
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "천광의 철학",
            amount: 4
          },
          {
            name: "원소 꽃꿀",
            amount: 4
          },
          {
            name: "순금의 비늘",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "천광의 철학",
            amount: 6
          },
          {
            name: "원소 꽃꿀",
            amount: 6
          },
          {
            name: "순금의 비늘",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "천광의 철학",
            amount: 12
          },
          {
            name: "원소 꽃꿀",
            amount: 9
          },
          {
            name: "순금의 비늘",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "천광의 철학",
            amount: 16
          },
          {
            name: "원소 꽃꿀",
            amount: 12
          },
          {
            name: "순금의 비늘",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 994,
                atk: 20,
                def: 62,
                bonus: 0
            },
            end: {
                hp: 2553,
                atk: 53,
                def: 160,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3296,
                atk: 68,
                def: 207,
                bonus: 0
            },
            end: {
                hp: 4937,
                atk: 102,
                def: 310,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5464,
                atk: 113,
                def: 343,
                bonus: 24
            },
            end: {
                hp: 6285,
                atk: 130,
                def: 395,
                bonus: 24
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 6988,
                atk: 144,
                def: 439,
                bonus: 48
            },
            end: {
                hp: 7809,
                atk: 161,
                def: 491,
                bonus: 48
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 8337,
                atk: 172,
                def: 524,
                bonus: 48
            },
            end: {
                hp: 9157,
                atk: 189,
                def: 575,
                bonus: 48
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 9684,
                atk: 200,
                def: 608,
                bonus: 72
            },
            end: {
                hp: 10505,
                atk: 216,
                def: 660,
                bonus: 72
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 11033,
                atk: 227,
                def: 693,
                bonus: 96
            },
            end: {
                hp: 11854,
                atk: 244,
                def: 745,
                bonus: 96
            }
        }
    ],
    bonus: "원소 마스터리",
    bonusType: "number",
    skills: [
      {
        name: "종말 - 금지된 닌자 검술",
        type: "일반공격",
        description: `
  일반 공격
  검으로 최대 4번 공격한다.

  강공격
  검을 휘두르며 주변의 적을 공격한다.
  종료 시 추가로 한 번 더 강력하게 휘두른다.

  낙하 공격
  공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다.
        `
      },
      {
        name: "유후류 · 풍은 돌진",
        type: "원소스킬",
        description: `
  유후닌자술의 특별한 기술!
  구르는 후푸 바람바퀴에 올라타 빠른 속도로 적을 공격하고 바람 원소 피해를 준다. 지속 시간이 끝나면 후푸 회오리 발차기를 가해 바람 원소 범위 피해를 가한다.

  짧은 터치
  후푸 바람바퀴 상태로 들어가 후푸 회오리 발차기를 사용하기 전까지 짧은 거리를 돌진한다.

  홀드
  후푸 바람바퀴 상태에서 계속 굴러가며 사유는 그 동안 경직 저항력이 증가한다.
  지속 시간 동안 사유가 구르는 방향을 조종할 수 있으며, 이 스킬을 다시 발동하여 바람바퀴 상태를 일찍 종료하고 더 강력한 후푸 회오리 발차기를 가한다.
  이 스킬의 최대 지속 시간은 10초이고, 지속 시간이 끝나면 재사용 대기시간에 진입한다. 사유가 바람바퀴 상태 유지 시간이 길수록 재사용 대기시간이 길어진다.

  원소 전환
  바람바퀴 스킬을 시전하는 동안 물 원소/불 원소/얼음 원소/번개 원소에 닿으면 상응하는 원소 속성을 획득하고 추가로 해당 속성 피해를 준다.
  원소 전환은 스킬을 시전하는 동안 1회만 발생한다.
        `
      },
      {
        name: "유후류 · 너구리 분신술",
        type: "원소폭발(필살기)",
        description: `
  유후닌자술의 또 다른 특기! 사유를 도와주는 파트너에게 도움의 손길을 부른다.
  주변의 적에게 바람 원소 피해를 가하고 주변의 모든 파티원을 치유한다. 회복되는 HP의 양은 사유의 공격력에 따른다.
  너굴너굴 달마를 소환한다.

  너굴너굴 달마
  주기적으로[5] 달마는 주변의 상황에 따라서 이하의 행동 중 하나를 수행한다.
  · 주변 파티원 모두의 HP가 70% 이상이라면, 주변의 적에게 바람 원소 피해를 가한다.
  · 주변에 HP가 70% 미만인 파티원이 있다면, 남은 HP 비율이 가장 낮은 파티원을 치유한다. 주변에 적이 없다면, HP가 70% 이상이더라도 치유한다.
      `
      }
    ],
    passive: [
      {
        name: "다른 사람 찾기~",
        ascension: 1,
        description: `사유가 필드에 나와있는 상태에서 확산 반응을 발생시키면 주변의 파티 내 캐릭터 모두가 300 HP를 회복한다. 또한, 사유의 원소 마스터리×1.2 HP를 추가로 회복한다. 이 효과는 최대 2초마다 1번 발동할 수 있다.`
      },
      {
        name: "일하고 싶지 않아!",
        ascension: 4,
        description: `유후술: 너구리 난동의 효과로 소환된 너굴너굴 달마는 이하의 특성을 지닌다.
  · 파티원을 치유할 때, 치유된 파티원 근처의 다른 파티원도 HP의 20% 만큼 치유한다.
  · 적에게 가하는 범위 피해가 증가한다.`
      },
      {
        name: "유후술: 소리 지우기의 비밀",
        ascension: -1,
        description: "파티 내 자신의 캐릭터는 수정 나비등의 특정 동물에게 가까이 다가가도 동물이 반응하지 않는다. 이 효과가 적용되는 생물에 대해서는 도감에서 '생물지/야생 생물'의 '기타' 카테고리를 확인하십시오."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "동시작업의 술",
        description: `유후류: 너구리 분신술의 효과로 소환된 너굴너굴 달마는 더이상 HP의 제한을 받지 않으며, 동시에 적에게 공격하고 주변의 파티원을 치유할 수 있다.`
      },
      {
        id: 2,
        name: "떠날 준비",
        description: `유후류: 풍은 돌진가 이하의 특성을 얻는다.
  · 짧은 터치 상태의 후푸 회오리 발차기로 가하는 피해가 3.3% 증가한다.
  · 후푸 바람바퀴 상태인 동안, 0.5초마다 후푸 회오리 발차기로 가하는 피해가 3.3% 증가한다. 최대 상승치: 66%`
      },
      {
        id: 3,
        name: "아, 분신도 할 수 있어",
        description: `유후류: 너구리 분신술의 스킬 레벨+3
  최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "땡땡이, 더 잘하고 새롭게",
        description: "사유가 확산 반응을 일으키면 원소 에너지를 1.2pt 회복한다. 이 효과는 최대 2초마다 1번 발동할 수 있다."
      },
      {
        id: 5,
        name: "속도가 먼저",
        description: `유후류: 풍은 돌진의 스킬 레벨+3
  최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "잠잘 시간",
        description: `유후류: 너구리 분신술은 이제 사유의 원소 마스터리에 따라서 이하의 특성을 얻는다.
  · 너굴너굴 달마가 가하는 피해가 사유의 원소 마스터리×0.2% 증가한다. 최대 상승치: 400%
  · 너굴너굴 달마가 치유하는 치유량이 사유의 원소 마스터리×3 증가한다. 최대 상승치: 6000HP`
      }
    ]
  },
  "리사": {
    name: "리사",
    keyword: ["lisa"],
    icon: "https://paimon.moe/images/characters/lisa.png",
    gender: "여성",
    birth: "06/09",
    affiliation: "페보니우스 기사단",
    star: "모래시계자리",
    level: 4,
    weapon: "법구",
    element: "번개",
    build: [
      {
        type: "서브 딜러", 
        main_stats: {
          "시계": ["공격력%", "원소 충전 효율"],
          "잔": "전기 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "원소 충전 효율",
          "치명타 확률 / 피해",
          "공격력%",
          "원소 마스터리",
          "공격력"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["천공의 두루마리", "음유시인의 악장", "사풍 원서", "속세의 자물쇠", "만국 항해용해도", "페보니우스 비전", "드래곤 슬레이어 영웅담"],
        artifacts: [
          ["번개 같은 분노", "공격력 +18% 세트"],
          ["번개 같은 분노", "옛 왕실의 의식"],
          "옛 왕실의 의식",
          "뇌명을 평정한 존자",
          "유배자"
        ]
      },
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": ["공격력%", "원소 충전 효율", "원소 마스터리"],
          "잔": "전기 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%",
          "원소 충전 효율",
          "원소 마스터리",
          "공격력"
        ],
        priority: ["원소 스킬", "일반 공격", "필살기"],
        weapons: ["천공의 두루마리", "속세의 자물쇠", "사풍 원서", "일월의 정수", "흑암 홍옥", "도도코 이야기집", "만국 항해용해도", "소심", "인동의 열매", "마도 서론"],
        artifacts: [
          "번개 같은 분노",
          "뇌명을 평정한 존자",
          ["번개 같은 분노", "공격력 +18% 세트"],
          ["검투사의 피날레", "추억의 시메카자리"]
        ]
      },
      {
        type: "원소 마스터리", 
        main_stats: {
          "시계": "원소 마스터리",
          "잔": "원소 마스터리",
          "모자": "원소 마스터리"
        },
        sub_stats: [
          "원소 마스터리",
          "원소 충전 효율",
          "공격력%", 
          "치명타 확률 / 피해"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["제례의 악장", "마도 서론", "만국 항해용해도", "음유시인의 악장", "드래곤 슬레이어 영웅담", "페보니우스 비전"],
        artifacts: [
          "번개 같은 분노",
          "교관",
          ["교관", "대지를 유랑하는 악단"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "승리의 자수정 가루",
            amount: 1
          },
          {
            name: "낙락베리",
            amount: 3
          },
          {
            name: "슬라임 응축액",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "승리의 자수정 조각",
            amount: 3
          },
          {
            name: "뇌광 프리즘",
            amount: 2
          },
          {
            name: "낙락베리",
            amount: 10
          },
          {
            name: "슬라임 응축액",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "승리의 자수정 조각",
            amount: 6
          },
          {
            name: "뇌광 프리즘",
            amount: 4
          },
          {
            name: "낙락베리",
            amount: 20
          },
          {
            name: "슬라임청",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "승리의 자수정 덩이",
            amount: 3
          },
          {
            name: "뇌광 프리즘",
            amount: 8
          },
          {
            name: "낙락베리",
            amount: 30
          },
          {
            name: "슬라임청",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "승리의 자수정 덩이",
            amount: 6
          },
          {
            name: "뇌광 프리즘",
            amount: 12
          },
          {
            name: "낙락베리",
            amount: 45
          },
          {
            name: "슬라임 원액",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "승리의 자수정",
            amount: 6
          },
          {
            name: "뇌광 프리즘",
            amount: 20
          },
          {
            name: "낙락베리",
            amount: 60
          },
          {
            name: "슬라임 원액",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 가르침",
            amount: 3
          },
          {
            name: "슬라임 응축액",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 인도",
            amount: 2
          },
          {
            name: "슬라임청",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "시문의 인도",
            amount: 4
          },
          {
            name: "슬라임청",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 인도",
            amount: 6
          },
          {
            name: "슬라임청",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "시문의 인도",
            amount: 9
          },
          {
            name: "슬라임청",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 철학",
            amount: 4
          },
          {
            name: "슬라임 원액",
            amount: 4
          },
          {
            name: "동풍의 발톱",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "시문의 철학",
            amount: 6
          },
          {
            name: "슬라임 원액",
            amount: 6
          },
          {
            name: "동풍의 발톱",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 철학",
            amount: 12
          },
          {
            name: "슬라임 원액",
            amount: 9
          },
          {
            name: "동풍의 발톱",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "시문의 철학",
            amount: 16
          },
          {
            name: "슬라임 원액",
            amount: 12
          },
          {
            name: "동풍의 발톱",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 802,
                atk: 20,
                def: 48,
                bonus: 0
            },
            end: {
                hp: 2061,
                atk: 50,
                def: 123,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 2661,
                atk: 65,
                def: 159,
                bonus: 0
            },
            end: {
                hp: 3985,
                atk: 96,
                def: 239,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 4411,
                atk: 107,
                def: 264,
                bonus: 24
            },
            end: {
                hp: 5074,
                atk: 123,
                def: 304,
                bonus: 24
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 5642,
                atk: 137,
                def: 338,
                bonus: 48
            },
            end: {
                hp: 6305,
                atk: 153,
                def: 378,
                bonus: 48
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 6730,
                atk: 164,
                def: 403,
                bonus: 48
            },
            end: {
                hp: 7393,
                atk: 180,
                def: 443,
                bonus: 48
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 7818,
                atk: 191,
                def: 468,
                bonus: 72
            },
            end: {
                hp: 8481,
                atk: 207,
                def: 508,
                bonus: 72
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 8906,
                atk: 218,
                def: 533,
                bonus: 96
            },
            end: {
                hp: 9569,
                atk: 234,
                def: 573,
                bonus: 96
            }
        }
    ],
    bonus: "원소 마스터리",
    bonusType: "number",
    skills: [
      {
        name: "손끝의 뇌폭",
        type: "일반공격",
        description: `
일반공격
전격으로 최대 4번 공격해 번개 원소 피해를 준다.
(1단:39.6%,2단:35.9%,3단:42.8%,4단:55.0%)

강공격
일정 스태미나를 소모해, 짧은 영창 후 번개 원소 범위 피해를 준다.
(강공격피해:177%,강공격 스태미나 소모:50.0pt)

낙하공격
공중에서 뇌전의 힘을 모은 후 지면을 강타해 경로상의 적을 공격하고 땋에 닿으면 뇌전 원소 범위 피해를 준다.
(낙하기간피해:56.8%,저공/고공 추락 충격 피해:114%/142%)
`
      },
      {
        name: "창뢰",
        type: "원소스킬",
        description: `
뇌전의 힘을 인도해 성가신 것들을 깨끗이 청소한다.

짧은 터치
자동으로 적을 추적하는 일렉트릭볼을 발사한다.
명중 시 번개 원소 피해를 주고 작은 범위 내의 적에게 전기 전도 효과를 부여한다. 최대 중첩수 : 3회
(짧은터치피해:80.0%,짧은터치 재사용대기시간:1.0초)

홀드
지속 영창 후 하늘에서 뇌전을 소환하여 주변의 모든 적에게 대량의 번개 원소 피해를 준다.
만약 적이 전기 전도 상태라면 전기 전도 효과를 지우고 중첩 수에 따른 추가 피해를 준다.
(전기전도:0스택-차지피해 320%
 전기전도:1스택-차지피해 368%
 전기전도:2스택-차지피해 424%
 전기전도:3스택-차지피해 487%
 차지 재사용 대기시간 : 16.0초)
`
      },
      {
        name: "장미의 뇌광",
        type: "원소폭발(필살기)",
        description: `
장미의 뇌광을 소환하여 강력한 뇌전의 힘을 방출해 주변의 적을 넉백시키고 번개 원소 피해를 준다.
지속 기단 동안 장미의 뇌광은 주변의 적에게 지속해서 번개를 발사해 번개 원소 피해를 준다.

(방전피해:36.6%,지속시간:15초,재사용대기시간:20초,원소에너지:80)
        `
      }
    ],
    passive: [
      {
        name: "인덕턴스 여진",
        ascension: 1,
        description: "강공격 명중 시 적에게 창뢰의 전기 전도 효과를 부여한다"
      },
      {
        name: "정전기 역장",
        ascension: 4,
        description: "장미의 뇌광의 공격을 받은 적은 방어력이 15% 감소한다.\n지속시간:10초"
      },
      {
        name: "포션 통찰",
        ascension: -1,
        description: "포션 합성 시 20%의 확률로 일부 합성 재료를 반환한다"
      }
    ],
    constellation: [
      {
        id: 1,
        name: "무한의 전기회로",
        description: `창뢰를 길게 터치하면 적에게 명중할 때마다 리사의 원소 에너지를 2pt 회복한다.
이러한 방식을 통해 한번에 원소 에너지를 최대 10pt까지 회복할 수 있다.`
      },
      {
        id: 2,
        name: "공간 전위 결계",
        description: `창뢰를 길게 누르면 아래의 효과가 발동한다:
· 방어력+25%
· 리사의 경직 저항력 상승`
      },
      {
        id: 3,
        name: "공명의 뇌광",
        description: `장미의 뇌광의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "비처럼 내리는 플라즈마",
        description: `장미의 뇌광 발동 시 방출하는 번개가 1~3개까지 증가한다.`
      },
      {
        id: 5,
        name: "플라즈마 낙뢰",
        description: `창뢰의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "펄스의 마녀",
        description: `리사가 등장할 때 주변의 적에게 창뢰의 전기 전도 효과를 3스택 쌓는다.
해당 효과는 5초마다 1번 발동한다.`
      }
    ]
  },
  "레이저": {
    name: "레이저",
    keyword: ["razor"],
    icon: "https://paimon.moe/images/characters/razor.png",
    gender: "남성",
    birth: "09/09",
    affiliation: "울프 영지",
    star: "이리자리",
    level: 4,
    weapon: "양손검",
    element: "번개",
    build: [
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "물리 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%",
          "원소 충전 효율", 
          "원소 마스터리",
          "공격력"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["늑대의 말로", "송뢰가 울릴 무렵", "무공의 검", "이무기 검", "천공의 긍지", "천암고검", "고화 프로토타입"],
        artifacts: [
          "창백의 화염",
          ["창백의 화염", "피에 물든 기사도"],
          ["창백의 화염", "검투사의 피날레"]
          ["피에 물든 기사도", "공격력 +18% 세트"],
          ["창백의 화염", "공격력 +18% 세트"],
          "무인"
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "승리의 자수정 가루",
            amount: 1
          },
          {
            name: "고리고리 열매",
            amount: 3
          },
          {
            name: "부서진 가면",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "승리의 자수정 조각",
            amount: 3
          },
          {
            name: "뇌광 프리즘",
            amount: 2
          },
          {
            name: "고리고리 열매",
            amount: 10
          },
          {
            name: "부서진 가면",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "승리의 자수정 조각",
            amount: 6
          },
          {
            name: "뇌광 프리즘",
            amount: 4
          },
          {
            name: "고리고리 열매",
            amount: 20
          },
          {
            name: "오염된 가면",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "승리의 자수정 덩이",
            amount: 3
          },
          {
            name: "뇌광 프리즘",
            amount: 8
          },
          {
            name: "고리고리 열매",
            amount: 30
          },
          {
            name: "오염된 가면",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "승리의 자수정 덩이",
            amount: 6
          },
          {
            name: "뇌광 프리즘",
            amount: 12
          },
          {
            name: "고리고리 열매",
            amount: 45
          },
          {
            name: "불길한 가면",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "승리의 자수정",
            amount: 6
          },
          {
            name: "뇌광 프리즘",
            amount: 20
          },
          {
            name: "고리고리 열매",
            amount: 60
          },
          {
            name: "불길한 가면",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 가르침",
            amount: 3
          },
          {
            name: "부서진 가면",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 2
          },
          {
            name: "오염된 가면",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 4
          },
          {
            name: "오염된 가면",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 6
          },
          {
            name: "오염된 가면",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 9
          },
          {
            name: "오염된 가면",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 4
          },
          {
            name: "불길한 가면",
            amount: 4
          },
          {
            name: "동풍의 발톱",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 6
          },
          {
            name: "불길한 가면",
            amount: 6
          },
          {
            name: "동풍의 발톱",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 12
          },
          {
            name: "불길한 가면",
            amount: 9
          },
          {
            name: "동풍의 발톱",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 16
          },
          {
            name: "불길한 가면",
            amount: 12
          },
          {
            name: "동풍의 발톱",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 1003,
                atk: 20,
                def: 63,
                bonus: 0
            },
            end: {
                hp: 2577,
                atk: 50,
                def: 162,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3326,
                atk: 65,
                def: 209,
                bonus: 0
            },
            end: {
                hp: 4982,
                atk: 97,
                def: 313,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5514,
                atk: 108,
                def: 346,
                bonus: 7.5
            },
            end: {
                hp: 6343,
                atk: 124,
                def: 398,
                bonus: 7.5
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 7052,
                atk: 138,
                def: 443,
                bonus: 15
            },
            end: {
                hp: 7881,
                atk: 154,
                def: 495,
                bonus: 15
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 8413,
                atk: 164,
                def: 528,
                bonus: 15
            },
            end: {
                hp: 9241,
                atk: 180,
                def: 580,
                bonus: 15
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 9773,
                atk: 191,
                def: 613,
                bonus: 22.5
            },
            end: {
                hp: 10602,
                atk: 207,
                def: 665,
                bonus: 22.5
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 11134,
                atk: 217,
                def: 699,
                bonus: 30
            },
            end: {
                hp: 11962,
                atk: 234,
                def: 751,
                bonus: 30
            }
        }
    ],
    bonus: "물리 피해 보너스",
    bonusType: "percent",
    skills: [
      {
        name: "강철마루",
        type: "일반공격",
        description: `
일반공격
검으로 최대 4번 공격한다.
(1단:95.9%,2단:82.6%,3단:103%,4단:136%)

강공격
스태미나를 지속해서 소모해 검을 휘두르며 주변의 적을 공격한다. 회전 종료 시 추가로 한 번 더 강력하게 휘두른다.
(강공격순환피해:62.5%,강공격종결피해:113%,강공격 스태미나 소모:초당 40.0pt,최대지속시간:5.0초)

낙하공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 땅에 닿으면 범위 피해를준다.
(낙하기간피해:82.0%,저공/고공 추락 충격 피해:164%/205%)
`
      },
      {
        name: "날카로운 발톱과 창뢰",
        type: "원소스킬",
        description: `
스승과 그의 [가족]이 가르쳐준 방법으로 사냥감을 처치한다.

짧은터치
썬더울프의 발톱으로 전방의 적에게 번개 원소 피해를 준다. 적을 명중하면 번개의 인장이 한 개 쌓여 레이저의 원소 충전 효율이 상승한다. 번개의 인장은 최대 3개 존재 할 수 있으며 새로운 인장을 획득할 때마다 모든 인장의 지속 시간이 갱신된다.

홀드
뇌전의 힘을 모은 후 폭발시켜 주변 작은 범위의 적에게 대량의 번개 원소 피해를 주고 번개의 인장을 지운다.
번개의 인장을 지울 때마다 레이저의 원소 에너지로 전환된다.
`
      },
      {
        name: "뇌아",
        type: "원소폭발(필살기)",
        description: `
무형의 썬더울프를 깨워 주변의 적에게 번개 원소 피해를 주고 모든 번개의 인장을 소모하여 레이저의 원소 에너지를 회복한다. 썬더울프가 존재 할 때 레이저와 함께 싸운다.

썬더울프
*레이저가 일반 공격 시 썬더울프도 같이 공격하여 번개 원소 피해를 준다.
*레이저의 공격속도,번개 원소 내성이 증가한다.
*레이저가 감전 반응의 피해를 받지 않는다.
*강공격을 발동할 수 없다.
*레이저의 경직 저항력이 상승한다.

효과는 레이저가 퇴장 시 해제된다. 퇴장 시 잔여 지속 시간에 따라 최대 10pt의 원소 에너지를 반환한다.
`
      }
    ],
    passive: [
      {
        name: "각성",
        ascension: 1,
        description: "날카로운 발톱과 창뢰의 재사용 대기시간이 18% 감소한다. 뇌아 발동 시 날카로운 발톱과 창뢰의 재사용 대기시간이 초기화 된다."
      },
      {
        name: "굶주림",
        ascension: 4,
        description: "레이저의 원소 에너지가 50% 미만일 때 원소 충전 효율이 30% 상승한다."
      },
      {
        name: "늑대의 질주",
        ascension: -1,
        description: "파티 내 모든 캐릭터의 대시 시 소모하는 스태미나가 20% 감소한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "늑대의 본성",
        description: `레이저가 원소 구슬 혹은 원소 입자 획득 후 8초 동안 가하는 피해가 10% 증가한다.`
      },
      {
        id: 2,
        name: "진압",
        description: `레이저가 HP 30% 미만의 적을 공격 시 치명타 확률이 10% 증가한다.`
      },
      {
        id: 3,
        name: "야수의 혼",
        description: `뇌아의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "물어뜯기",
        description: `날카로운 발톱과 창뢰를 짧게 터치하면 명중한 적의 방어력이 15% 감소한다. 지속 시간: 7초`
      },
      {
        id: 5,
        name: "날카로운 발톱",
        description: `날카로운 발톱과 창뢰의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "천랑",
        description: `10초마다 레이저의 대검이 자동으로 충전되어 다음 일반 공격 시 낙뢰가 발생해 공격력 100%의 번개 원소 피해를 가한다.
뇌아 상태가 아닐 경우 낙뢰가 적에게 명중하면 레이저는 날카로운 발톱과 창뢰의 번개의 인장을 1개 획득한다.`
      }
    ]
  },
  "북두": {
    name: "북두",
    keyword: ["beidou"],
    icon: "https://paimon.moe/images/characters/beidou.png",
    gender: "여성",
    birth: "02/14",
    affiliation: "남십자함대",
    star: "남천해산자리",
    level: 4,
    weapon: "양손검",
    element: "번개",
    build: [
      {
        type: "서브 딜러", 
        main_stats: {
          "시계": ["공격력%", "원소 충전 효율"],
          "잔": "전기 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%",
          "원소 충전 효율",
          "공격력", 
          "원소 마스터리",
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["늑대의 말로", "이무기 검", "무공의 검", "천공의 긍지", "천암고검", "제례 대검", "흑암참도", "고화 프로토타입", "페보니우스 대검"],
        artifacts: [
          "절연의 기치",
          ["옛 왕실의 의식", "번개 같은 분노", "공격력 +18% 세트", "절연의 기치"],
          "옛 왕실의 의식",
          "뇌명을 평정한 존자",
          ["학사", "유배자"]
        ]
      },
      {
        type: "전기 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "전기 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%",
          "원소 충전 효율",
          "공격력", 
          "원소 마스터리",
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["늑대의 말로", "무공의 검", "송뢰가 울릴 무렵", "이무기 검", "천암고검", "천공의 긍지", "흑암참도", "고화 프로토타입", "제례 대검"],
        artifacts: [
          "절연의 기치",
          ["번개 같은 분노", "옛 왕실의 의식", "공격력 +18% 세트"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "승리의 자수정 가루",
            amount: 1
          },
          {
            name: "야박석",
            amount: 3
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "승리의 자수정 조각",
            amount: 3
          },
          {
            name: "뇌광 프리즘",
            amount: 2
          },
          {
            name: "야박석",
            amount: 10
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "승리의 자수정 조각",
            amount: 6
          },
          {
            name: "뇌광 프리즘",
            amount: 4
          },
          {
            name: "야박석",
            amount: 20
          },
          {
            name: "실버 까마귀 휘장",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "승리의 자수정 덩이",
            amount: 3
          },
          {
            name: "뇌광 프리즘",
            amount: 8
          },
          {
            name: "야박석",
            amount: 30
          },
          {
            name: "실버 까마귀 휘장",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "승리의 자수정 덩이",
            amount: 6
          },
          {
            name: "뇌광 프리즘",
            amount: 12
          },
          {
            name: "야박석",
            amount: 45
          },
          {
            name: "골드 까마귀 휘장",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "승리의 자수정",
            amount: 6
          },
          {
            name: "뇌광 프리즘",
            amount: 20
          },
          {
            name: "야박석",
            amount: 60
          },
          {
            name: "골드 까마귀 휘장",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 가르침",
            amount: 3
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 인도",
            amount: 2
          },
          {
            name: "실버 까마귀 휘장",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "황금의 인도",
            amount: 4
          },
          {
            name: "실버 까마귀 휘장",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 인도",
            amount: 6
          },
          {
            name: "실버 까마귀 휘장",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "황금의 인도",
            amount: 9
          },
          {
            name: "실버 까마귀 휘장",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 철학",
            amount: 4
          },
          {
            name: "골드 까마귀 휘장",
            amount: 4
          },
          {
            name: "동풍의 숨결",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "황금의 철학",
            amount: 6
          },
          {
            name: "골드 까마귀 휘장",
            amount: 6
          },
          {
            name: "동풍의 숨결",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 철학",
            amount: 12
          },
          {
            name: "골드 까마귀 휘장",
            amount: 9
          },
          {
            name: "동풍의 숨결",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "황금의 철학",
            amount: 16
          },
          {
            name: "골드 까마귀 휘장",
            amount: 12
          },
          {
            name: "동풍의 숨결",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 1094,
                atk: 19,
                def: 54,
                bonus: 0
            },
            end: {
                hp: 2811,
                atk: 48,
                def: 140,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3628,
                atk: 63,
                def: 180,
                bonus: 0
            },
            end: {
                hp: 5435,
                atk: 94,
                def: 270,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 6015,
                atk: 104,
                def: 299,
                bonus: 6
            },
            end: {
                hp: 6919,
                atk: 119,
                def: 344,
                bonus: 6
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 7694,
                atk: 133,
                def: 382,
                bonus: 12
            },
            end: {
                hp: 8597,
                atk: 148,
                def: 427,
                bonus: 12
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 9178,
                atk: 158,
                def: 456,
                bonus: 12
            },
            end: {
                hp: 10081,
                atk: 174,
                def: 501,
                bonus: 12
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 10662,
                atk: 184,
                def: 530,
                bonus: 18
            },
            end: {
                hp: 11565,
                atk: 200,
                def: 575,
                bonus: 18
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 12146,
                atk: 210,
                def: 603,
                bonus: 24
            },
            end: {
                hp: 13050,
                atk: 225,
                def: 648,
                bonus: 24
            }
        }
    ],
    bonus: "번개 원소 피해 보너스",
    bonusType: "percent",
    skills: [
      {
        name: "파도정복",
        type: "일반공격",
        description: `
일반공격
검으로 최대 5번 공격한다.
(1단:71.1%,2단:70.9%,3단:88.3%,4단:86.5%,5단:112%)

강공격
스태미나를 지속해서 소모해 빠른 속도로 연속 베기를 발동한다. 강공격 종료 시 추가로 한 번 더 강력하게 휘두른다.
(강공격순환피해:56.2%,강공격종결피해:102%,강공격 스태미나 소모:초당40.0pt,최대지속시간:5.0초)

낙하공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 땅에 닿으면 범위 피해를 준다.
(낙하기간피해:74.6%,저공/고공 추락충격피해:149%/186%)
`
      },
      {
        name: "파도잡이",
        type: "원소스킬",
        description: `
걱정할 필요 없다. 만약 그녀와 그녀의 사람에게 손을 대면 뇌전과 대검으로 10배로 갚아줄 것이다.

짧은 터치
번개의 힘을 모아 전방에 대검을 맹렬하게 휘둘러 번개 원소 피해를 준다.

홀드
무기를 들어 보호막을 생성한다. 피해 흡수량은 북두 HP 최대치의 영향을 받는다.
스킬 버튼에 손을 떼거나 지속시간이 끝나면 대검을 휘둘러 축적한 힘을 방출해 공격하여 번개 원소 피해를 준다. 스킬을 시전하는 동안 피격된 횟수에 따라 적에게 가하는 피해가 상승한다.
보호막은 아래의 효과를 가진다.
＊번개 원소 피해에 대해 250%의 흡수 효과가 있다.
＊시전하는 순간 북두에게 번개 원소를 부여한다.
`
      },
      {
        name: "작뢰",
        type: "원소폭발(필살기)",
        description: `
북두가 해산 괴수를 물리치던 전투를 돌이켜보며 괴수와 뇌전의 힘을 동시에 깨워 뇌전 괴수의 방패를 만들어내 자신을 둘러싸고 주변의 적에게 번개 원소 피해를 준다.
뇌전 괴수의 방패
＊일반 공격과 강공격 명중 시 적들 사이를 옮겨 다니는 체인 라이트닝을 1개 발동해 번개 원소 피해를 준다. 캐릭터의 경직 저항력이 상승하고 받는 피해가 감소한다.
1초마다 최대 하나의 체인 라이트닝이 발동된다.
`
      }
    ],
    passive: [
      {
        name: "우주에 퍼지는 오로라",
        ascension: 1,
        description: "피격 시 발동하는 파도잡이 반격은 최대 피해 보너스를 부여한다."
      },
      {
        name: "하늘의 벽력",
        ascension: 4,
        description: `
        최대 피해 보너스를 가진 파도잡이를 발동 후 10초 동안 아래의 효과를 획득한다:
        *일반 공격과 강공격으로 가하는 피해가 15% 증가하고 공격속도가 15% 증가한다. 강공격에 필요한 준비 시간이 대폭 줄어든다.
        `
      },
      {
        name: "조수의 정복자",
        ascension: -1,
        description: "파티 내 모든 캐릭터의 수영 시 소모하는 스태미나가 20% 감소한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "사방으로 잠긴 어룡",
        description: `작뢰 발동 시:
HP 최대치의 16%에 해당하는 피해를 흡수하는 보호막을 생성한다. 지속 시간: 15초.
이 보호막은 번개 원소 피해에 대해 250%의 흡수 효과가 있다.`
      },
      {
        id: 2,
        name: "솟아오르는 천둥번개",
        description: `작뢰의 체인 라이트닝이 추가로 2명의 적에게 튕긴다.`
      },
      {
        id: 3,
        name: "조류발전",
        description: `파도잡이의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "별을 따라 찾은 고향의 땅",
        description: `피격 후 10초 동안 북두의 일반 공격에 20%의 번개 원소 피해가 추가된다.`
      },
      {
        id: 5,
        name: "파도를 비추는 노을빛",
        description: `작뢰의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "북두의 귀신 퇴치",
        description: `작뢰가 지속되는 동안 주변의 적의 번개 원소 내성이 15% 감소한다.`
      }
    ]
  },
  "피슬": {
    name: "피슬",
    keyword: ["fischl"],
    icon: "https://paimon.moe/images/characters/fischl.png",
    pvurl: "https://www.youtube.com/watch?v=zLh6H_udIqY&list=PLQBypYmxS6LReK6-H2wUKs0geDHMGMpSp&index=8&ab_channel=%EC%9B%90%EC%8B%A0",
    playurl: "https://www.youtube.com/watch?v=ezf6Sx2syNY&list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA&index=16&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "여성",
    birth: "05/27",
    affiliation: "모험자 길드",
    star: "환상까마귀자리",
    level: 4,
    weapon: "활",
    element: "번개",
    build: [
      {
        type: "서브 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "전기 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%",
          "원소 충전 효율", 
          "원소 마스터리",
          "공격력"
        ],
        priority: ["원소 스킬", "필살기", "일반 공격"],
        weapons: ["비뢰의 고동", "뒷골목 사냥꾼 (재련 5레벨)", "천공의 날개", "절현 (재련 5레벨)", "뒷골목 사냥꾼 (재련 1-4레벨)", "아모스의 활", "종말 탄식의 노래", "절현 (재련 1-4레벨)", "유야의 왈츠 (재련 5레벨)", "바람 꽃의 노래 (재련 5레벨)", "청록의 사냥활", "담월 프로토타입", "녹슨 활", "유야의 왈츠 (재련 1-4레벨)"],
        artifacts: [
          ["번개 같은 분노", "공격력 +18% 세트"],
          "뇌명을 평정한 존자",
          ["노름꾼", "번개 같은 분노"],
          ["공격력 +18% 세트", "노름꾼"],
          "견고한 천암"
        ]
      },
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": ["물리 피해", "전기 원소 피해"],
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%",
          "원소 충전 효율",
          "원소 마스터리",
          "공격력"
        ],
        priority: ["일반 공격", "원소 스킬", "필살기"],
        weapons: ["비뢰의 고동", "천공의 날개", "청록의 사냥활", "아모스의 활", "유야의 왈츠", "담월 프로토타입", "녹슨 활", "흑암 배틀 보우", "강철궁", "탄궁"],
        artifacts: [
          "창백의 화염",
          ["창백의 화염", "피에 물든 기사도"],
          "뇌명을 평정한 존자",
          ["검투사의 피날레", "피에 물든 기사도"],
          ["번개 같은 분노", "피에 물든 기사도"],
          ["번개 같은 분노", "공격력 +18% 세트"],
          ["검투사의 피날레",  "추억의 시메카자리"],
          ["공격력 +18% 세트", "노름꾼"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "승리의 자수정 가루",
            amount: 1
          },
          {
            name: "등불꽃",
            amount: 3
          },
          {
            name: "견고한 화살촉",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "승리의 자수정 조각",
            amount: 3
          },
          {
            name: "뇌광 프리즘",
            amount: 2
          },
          {
            name: "등불꽃",
            amount: 10
          },
          {
            name: "견고한 화살촉",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "승리의 자수정 조각",
            amount: 6
          },
          {
            name: "뇌광 프리즘",
            amount: 4
          },
          {
            name: "등불꽃",
            amount: 20
          },
          {
            name: "날카로운 화살촉",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "승리의 자수정 덩이",
            amount: 3
          },
          {
            name: "뇌광 프리즘",
            amount: 8
          },
          {
            name: "등불꽃",
            amount: 30
          },
          {
            name: "날카로운 화살촉",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "승리의 자수정 덩이",
            amount: 6
          },
          {
            name: "뇌광 프리즘",
            amount: 12
          },
          {
            name: "등불꽃",
            amount: 45
          },
          {
            name: "역전의 화살촉",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "승리의 자수정",
            amount: 6
          },
          {
            name: "뇌광 프리즘",
            amount: 20
          },
          {
            name: "등불꽃",
            amount: 60
          },
          {
            name: "역전의 화살촉",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 가르침",
            amount: 3
          },
          {
            name: "견고한 화살촉",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 인도",
            amount: 2
          },
          {
            name: "날카로운 화살촉",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "시문의 인도",
            amount: 4
          },
          {
            name: "날카로운 화살촉",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 인도",
            amount: 6
          },
          {
            name: "날카로운 화살촉",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "시문의 인도",
            amount: 9
          },
          {
            name: "날카로운 화살촉",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 철학",
            amount: 4
          },
          {
            name: "역전의 화살촉",
            amount: 4
          },
          {
            name: "북풍의 영혼상자",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "시문의 철학",
            amount: 6
          },
          {
            name: "역전의 화살촉",
            amount: 6
          },
          {
            name: "북풍의 영혼상자",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 철학",
            amount: 12
          },
          {
            name: "역전의 화살촉",
            amount: 9
          },
          {
            name: "북풍의 영혼상자",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "시문의 철학",
            amount: 16
          },
          {
            name: "역전의 화살촉",
            amount: 12
          },
          {
            name: "북풍의 영혼상자",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 770,
                atk: 20,
                def: 50,
                bonus: 0
            },
            end: {
                hp: 1979,
                atk: 50,
                def: 128,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 2555,
                atk: 68,
                def: 165,
                bonus: 0
            },
            end: {
                hp: 3827,
                atk: 102,
                def: 247,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 4236,
                atk: 113,
                def: 274,
                bonus: 6
            },
            end: {
                hp: 4872,
                atk: 130,
                def: 315,
                bonus: 6
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 5418,
                atk: 144,
                def: 350,
                bonus: 12
            },
            end: {
                hp: 6054,
                atk: 161,
                def: 391,
                bonus: 12
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 6463,
                atk: 172,
                def: 418,
                bonus: 12
            },
            end: {
                hp: 7099,
                atk: 189,
                def: 459,
                bonus: 12
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 7508,
                atk: 200,
                def: 485,
                bonus: 18
            },
            end: {
                hp: 8144,
                atk: 216,
                def: 526,
                bonus: 18
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 8553,
                atk: 227,
                def: 553,
                bonus: 24
            },
            end: {
                hp: 9189,
                atk: 244,
                def: 594,
                bonus: 24
            }
        }
    ],
    bonus: "공격력",
    bonusType: "percent",
    skills: [
      {
        name: "죄멸의화살",
        type: "일반공격",
        description: `
일반공격 - 활로 최대 5번 공격한다.
(1단:44.1%,2단:46.8%,3단:58.1%,4단:57.7%,5단:72.1%)

강공격 - 피해가 더크고 정확한 조준 사격을 한다. 조준 시 유야정토의 검은 번개 정령이 황녀의 명령을 받아 그녀의 뇌영 화살에 깃든다. 단죄의 번개의 힘이 가득 찬 마법 화살은 강력한 번개원소피해를 준다.
(조준사격:43.9%,풀차지조준사격:124%)

낙하공격 - 공중에서 화살비를 쏜 후 빠른 속도로 땅에 착지한다. 땅에 닿으면 범위피해를 준다.
(낙하 기간 피해:56.8%,저공/고공 추락충격피해:114%/142%)
`
      },
      {
        name: "밤을 순찰하는 그림자 날개",
        type: "원소스킬",
        description: `
오즈공격피해 88.8%/소환피해 115%/오즈 존재시간 10초/재사용 대기시간 25초

오즈를 소환한다. 암영과 뇌전으로 구성된 레이븐이 속세에 강림할 때 작은 범위 내의 적에게 번개원소피해를 준다. 오즈는 존재하는 동안 번개 에너지 탄을 발사하여 주변의 적을 공격한다.

★홀드하여 오즈의 위치를 조정할 수 있다.
★오즈가 존재하는 동안 다시 한번 짧게 누르면 오즈를 자신의 주변으로 소환할 수 있다.
`
      },
      {
        name: "암야의 환상",
        type: "원소폭발(필살기)",
        description: `
낙뢰피해 208%/재사용대기시간 15초/원소에너지 60

오즈를 소환해 칠흑으로 엮은 두 날개로 피슬을 보호한다. 지속하는 동안 아래의 효과를 가진다.

★오즈의 형태로 변해 고속이동한다.
★주변의 적에게 번개를 떨어트려 번개원소피해를 준다. 적 1명마다 낙뢰 피해를 1번만 받는다.
★효과 종료시 오즈는 필드에 머물러 황녀의 적을 공격한다. 만약 오즈가 필드에 있으면 오즈의 존재 시간이 초기화된다.

`
      }
    ],
    passive: [
      {
        name: "별을 삼킨 까마귀",
        ascension: 1,
        description: "피슬이 차지 완료된 화살로 오즈를 명중하면 오즈가 주변의 적에게 신성한 번개를 내리고 사격 피해의 152.7%에 달하는 번개원소범위피해를 준다. "
      },
      {
        name: "단죄의 뇌영",
        ascension: 4,
        description: `
        오즈가 필드에 존재 시 캐릭터가 적을 공격하여 번개 원소 관련 반응이 발동되었다면 적에게 신성한 번개를 내려 피슬 공격력 80%의 번개원소피해를 준다.
        `
      },
      {
        name: "황녀의 화원",
        ascension: -1,
        description: `
몬드에서 탐색 임무 수행 시 소모하는 시간이 25% 감소한다.
(몬드성에서 접수안내원에게서 할 수 있는 파견임무를 말합니다.)
        `
      }
    ],
    constellation: [
      {
        id: 1,
        name: "그윽한 까마귀 눈",
        description: `오즈가 필드에 존재하지 않을 때는 까마귀 눈으로 피슬을 지켜준다. 피슬이 적에게 일반 공격을 가할 시 오즈는 까마귀 눈을 통해 함께 공격해 공격력 22%의 피해를 준다.`
      },
      {
        id: 2,
        name: "신성한 판결의 그림자 깃털",
        description: `밤을 순찰하는 그림자 날개 발동 시 추가적으로 공격력 200%의 피해를 주고 영향 범위가 50% 확대된다.`
      },
      {
        id: 3,
        name: "심연색의 검은 날개",
        description: `밤을 순찰하는 그림자 날개의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "황녀의 환상 이야기",
        description: `암야의 환상 발동 시 주변의 적에게 공격력 222%의 번개 원소 피해를 준다.
스킬 효과가 사라지면 피슬의 HP를 20% 회복한다.`
      },
      {
        id: 5,
        name: "암야 묵시록",
        description: `암야의 환상의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "영야의 금수",
        description: `오즈의 존재 시간을 2초 연장한다. 또한 오즈가 현재 필드 위에 있는 자신의 캐릭터와 함께 공격하여 피슬 공격력 30%의 번개 원소 피해를 준다.`
      }
    ]
  },
  "각청": {
    name: "각청",
    keyword: ["keqing"],
    icon: "https://paimon.moe/images/characters/keqing.png",
    expurl: "https://www.youtube.com/watch?v=2WltKl2EJ2A&list=PLQBypYmxS6LSoV-ZMcPmyG0qur5jcMcQv&index=10&ab_channel=%EC%9B%90%EC%8B%A0",
    playurl: "https://www.youtube.com/watch?v=Nzu98XJ55Hg&list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA&index=12&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "여성",
    birth: "11/20",
    affiliation: "리월 칠성",
    star: "금자정수자리",
    level: 5,
    weapon: "한손검",
    element: "번개",
    build: [
      {
        type: "물리 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "물리 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%",
          "공격력", 
          "원소 충전 효율"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["매의 검", "반암결록", "참봉의 칼날", "참암 프로토타입 (재련 3-5레벨)", "칠흑검 (재련 2레벨)", "참암 프로토타입 (재련 1-2레벨)", "칠흑검 (재련 1레벨)", "천공의 검", "피리검", "용의 포효", "흑암 장검", "여명신검 (재련 5레벨)", "왕실의 장검", "강철 벌침"],
        artifacts: [
          "창백의 화염",
          ["창백의 화염", "피에 물든 기사도"],
          ["피에 물든 기사도", "공격력 +18% 세트"],
          "날아오르는 유성",
          "피에 물든 기사도"
        ]
      },
      {
        type: "전기 원소 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "전기 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%",
          "원소 마스터리",
          "공격력",
          "원소 충전 효율"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["안개를 가르는 회광", "반암결록", "참봉의 칼날", "매의 검", "칠흑검", "용의 포효", "흑암 장검", "여명신검 (재련 5레벨)", "피리검", "천공의 검", "왕실의 장검", "참암 프로토타입"],
        artifacts: [
          ["번개 같은 분노", "공격력 +18% 세트"],
          "뇌명을 평정한 존자",
          ["번개 같은 분노", "옛 왕실의 의식"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "승리의 자수정 가루",
            amount: 1
          },
          {
            name: "콜 라피스",
            amount: 3
          },
          {
            name: "구라구라 꽃꿀",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "승리의 자수정 조각",
            amount: 3
          },
          {
            name: "뇌광 프리즘",
            amount: 2
          },
          {
            name: "콜 라피스",
            amount: 10
          },
          {
            name: "구라구라 꽃꿀",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "승리의 자수정 조각",
            amount: 6
          },
          {
            name: "뇌광 프리즘",
            amount: 4
          },
          {
            name: "콜 라피스",
            amount: 20
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "승리의 자수정 덩이",
            amount: 3
          },
          {
            name: "뇌광 프리즘",
            amount: 8
          },
          {
            name: "콜 라피스",
            amount: 30
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "승리의 자수정 덩이",
            amount: 6
          },
          {
            name: "뇌광 프리즘",
            amount: 12
          },
          {
            name: "콜 라피스",
            amount: 45
          },
          {
            name: "원소 꽃꿀",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "승리의 자수정",
            amount: 6
          },
          {
            name: "뇌광 프리즘",
            amount: 20
          },
          {
            name: "콜 라피스",
            amount: 60
          },
          {
            name: "원소 꽃꿀",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 가르침",
            amount: 3
          },
          {
            name: "구라구라 꽃꿀",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 인도",
            amount: 2
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "번영의 인도",
            amount: 4
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 인도",
            amount: 6
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "번영의 인도",
            amount: 9
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 철학",
            amount: 4
          },
          {
            name: "원소 꽃꿀",
            amount: 4
          },
          {
            name: "북풍의 고리",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "번영의 철학",
            amount: 6
          },
          {
            name: "원소 꽃꿀",
            amount: 6
          },
          {
            name: "북풍의 고리",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 철학",
            amount: 12
          },
          {
            name: "원소 꽃꿀",
            amount: 9
          },
          {
            name: "북풍의 고리",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "번영의 철학",
            amount: 16
          },
          {
            name: "원소 꽃꿀",
            amount: 12
          },
          {
            name: "북풍의 고리",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 1020,
                atk: 25,
                def: 62,
                bonus: 50
            },
            end: {
                hp: 2646,
                atk: 65,
                def: 161,
                bonus: 50
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3521,
                atk: 87,
                def: 215,
                bonus: 50
            },
            end: {
                hp: 5268,
                atk: 130,
                def: 321,
                bonus: 50
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5889,
                atk: 145,
                def: 359,
                bonus: 59.6
            },
            end: {
                hp: 6776,
                atk: 167,
                def: 413,
                bonus: 59.6
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 7604,
                atk: 187,
                def: 464,
                bonus: 69.2
            },
            end: {
                hp: 8500,
                atk: 209,
                def: 519,
                bonus: 69.2
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 9121,
                atk: 225,
                def: 556,
                bonus: 69.2
            },
            end: {
                hp: 10025,
                atk: 247,
                def: 612,
                bonus: 69.2
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 10647,
                atk: 262,
                def: 649,
                bonus: 78.8
            },
            end: {
                hp: 11561,
                atk: 285,
                def: 705,
                bonus: 78.8
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 12182,
                atk: 300,
                def: 743,
                bonus: 88.4
            },
            end: {
                hp: 13103,
                atk: 323,
                def: 799,
                bonus: 88.4
            }
        }
    ],
    bonus: "치명타 피해",
    bonusType: "percent",
    skills: [
      {
        name: "운래검법",
        type: "일반공격",
        description: `
일반 공격
검으로 최대 5번 공격한다.
(1단:41%,2단:41%,3단:54.4%,4단:31.5%+34.4%,5단:67.0%)

강공격
일정 스태미나를 소모해 순간적으로 전방을 향해 검을 2번 휘두른다.
(강공격 피해:76.8%+86.0%, 강공격 스태미나 소모:25.0pt)

낙하 공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 땅에 닿으면 범위 피해를 준다.
(낙하 기간 피해:63.9%, 저공/고공 추락 충격 피해:128%/160%)
`
      },
      {
        name: "성신 회귀",
        type: "원소스킬",
        description: `
뇌설을 빠르게 던져 뇌전의 기세로 적을 섬멸한다.
뇌설 명중 시 작은 범위의 적에게 번개 원소 피해를 주고 명중한 위치에 뇌설 표식을 남긴다.

홀드
길게 눌러 뇌설 표식을 던지는 방향을 조절할 수 있다.
길게 눌러 던진 표창은 공중에 머물 수 있으며 각청이 성신 회귀를 발동하면 지형 장애물을 뛰어넘을 수 있다.

뇌설
뇌설 지속 기간에 각청이 성신 회귀 혹은 강공격을 다시 발동하면 뇌설 표식을 지우고 각기 다른 효과가 발동된다:
º성신 회귀 재발동 시 표식이 있는 곳으로 순간 이동 후 참격으로 번개 원소 범위 피해를 준다. 길게 눌러 발동한 뇌설의 위치로 순간 이동 시 지형 장애물을 뛰어넘을 수 있다. 강공격 발동 시 표식이 있는 곳에서 뇌폭 참격으로 여러차례의 번개원소 피해를 준다.

(뇌설 피해:50.4%, 참격 피해:168%, 뇌폭 연속 참격 피해:84.0%X2, 재사용 대기시간:7.5초)
`
      },
      {
        name: "천가 산책",
        type: "원소폭발(필살기)",
        description: `
뇌전의 힘을 폭발 시켜 번개 원소 피해를 준다.
이후 검의 그림자 속으로 은신해 주변의 적에게 번쩍이는 번개처럼 빠른 연속 참격으로 번개 원소 피해를 주고 최후의 일격으로 대량의 번개 원소 범위 피해를 준다.

(스킬피해 : 88.0%, 참격 피해 : 24.0%X8, 마지막 일격 피해 :189%, 재사용 대기시간 : 12.0초, 원소 에너지 : 40)
`
      }
    ],
    passive: [
      {
        name: "하늘에 닿은 뇌벌",
        ascension: 1,
        description: "뇌설이 존재하는 동안 다시 성신 회귀를 발동하면, 5초 동안 각청의 일반 공격과 강공격 피해가 번개 원소 피해로 전환된다."
      },
      {
        name: "옥형의 품격",
        ascension: 3,
        description: "천가 산책 발동 시 각청의 치명타 확률이 15% 증가하고 원소 충전 효율이 15% 증가한다. 지속 시간 : 8초."
      },
      {
        name: "총무의 토지",
        ascension: -1,
        description: "리월에서 탐색 임무 수행 시 소모하는 시간이 25% 감소한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "계뢰",
        description: `뇌설이 존재하는 동안 다시 성신 회귀를 발동하면, 각청이 사라지고 나타나는 위치에 공격력 50%의 번개 원소 범위 피해를 준다.`
      },
      {
        id: 2,
        name: "가연",
        description: `각청의 일반 공격과 강공격이 번개 원소 영향을 받은 적을 명중하면, 50%의 확률로 원소 입자가 생성된다.
해당 효과는 5초에 1번씩 발동한다.`
      },
      {
        id: 3,
        name: "등루",
        description: `천가 순유의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "조율",
        description: `각청이 번개 원소 관련 반응을 발동한 뒤 10초 동안 공격력이 25% 증가한다.`
      },
      {
        id: 5,
        name: "이등",
        description: `성신 회귀의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "염정",
        description: `일반 공격, 강공격, 원소 전투 스킬 혹은 원소폭발 사용 시, 각청은 번개 원소 피해 보너스를 6% 획득한다. 지속 시간: 8초.
일반 공격, 강공격, 원소 전투 스킬 혹은 원소폭발로 인한 효과는 각각 따로 존재한다.`
      }
    ]
  },
  "케이아": {
    name: "케이아",
    keyword: ["kaeya"],
    icon: "https://paimon.moe/images/characters/kaeya.png",
    playurl: "https://www.youtube.com/watch?v=_lwP9yuYy1Y&list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA&index=17&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "남성",
    birth: "11/30",
    affiliation: "페보니우스 기사단",
    star: "공작깃털자리",
    level: 4,
    weapon: "한손검",
    element: "얼음",
    build: [
      {
        type: "얼음 원소 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "얼음 원소 피해",
          "모자": "치명타 피해"
        },
        sub_stats: [
          "치명타 피해",
          "공격력%",
          "원소 충전 효율",
          "공격력", 
          "치명타 확률"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["안개를 가르는 회광", "참봉의 칼날", "반암결록", "매의 검", "흑암 장검", "피리검", "천공의 검", "칠흑검", "차가운 칼날"],
        artifacts: [
          "얼음바람 속에서 길잃은 용사",
          ["얼음바람 속에서 길잃은 용사", "공격력 +18% 세트"],
          "검투사의 피날레",
          ["얼음바람 속에서 길잃은 용사", "옛 왕실의 의식"],
          "무인"
        ]
      },
      {
        type: "서브 딜러", 
        main_stats: {
          "시계": ["원소 충전 효율", "공격력%"],
          "잔": "얼음 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "원소 충전 효율",
          "치명타 확률 / 피해",
          "공격력%",
          "공격력", 
          "원소 마스터리"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["반암결록", "안개를 가르는 회광", "천공의 검", "참봉의 칼날", "매의 검", "오래된 자유의 서약", "용의 포효", "부식의 검", "뒷골목의 섬광", "여명신검"],
        artifacts: [
          "옛 왕실의 의식",
          ["옛 왕실의 의식", "얼음바람 속에서 길잃은 용사"],
          ["옛 왕실의 의식", "유배자"],
          ["옛 왕실의 의식", "학사"],
          ["유배자", "학사"],
          "교관",
          "유배자"
        ]
      },
      {
        type: "물리 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "물리 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%",
          "공격력", 
          "원소 충전 효율"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["매의 검", "참봉의 칼날", "반암결록", "안개를 가르는 회광", "참암 프로토타입", "칠흑검", "흑암 장검"],
        artifacts: [
          ["창백의 화염", "피에 물든 기사도"],
          "창백의 화염",
          "검투사의 피날레", 
          ["창백의 화염", "공격력 +18% 세트"],
          ["피에 물든 기사도", "공격력 +18% 세트"]
        ]
      },
    ],
    skills: [
      {
        name: "의전검술",
        type: "일반공격",
        description: `
일반공격
검으로 최대 5번 공격한다.
(1단:53.8%,2단:51.7%,3단:65.3%,4단:70.9%,5단:88.2%)
강공격
일정 스태미나를 소모해 순간적으로 전방을 향해 검을 2번 휘두른다.
(강공격피해 55.0%+73.1%,강공격 스태미나 소모 20.0pt)
낙하공격
공중에서 땅을 내리찍어 경로상의 적을 공격하고 땋에 닿으면 범위 피해를 준다.
(낙하기간피해:63.9%,저공/고공 추락충격피해:128%/160%)
`
      },
      {
        name: "서리 엄습",
        type: "원소스킬",
        description: `
        얼어붙는듯한 냉기를 방출해 전방의 적에게 얼음 원소 피해를 준다.
        (스킬피해 191%,재사용 대기시간:6.0초)
`
      },
      {
        name: "살을 에는 윤무",
        type: "원소폭발(필살기)",
        description: `
공기 중의 서리를 모아 자신의 주위를 도는 3개의 얼음기둥을 소환한다. 얼음 기둥이 존재하는 동안 캐릭터를 따라 이동하고 경로상의 적에게 얼음 원소 피해를 준다.
(스킬피해:77.6%,재사용 대기시간:15.0초,지속시간:8.0초,원소에너지60)
`
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "서늘한 빙옥 가루",
            amount: 1
          },
          {
            name: "통통 연꽃",
            amount: 3
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 3
          },
          {
            name: "서리의 핵",
            amount: 2
          },
          {
            name: "통통 연꽃",
            amount: 10
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 4
          },
          {
            name: "통통 연꽃",
            amount: 20
          },
          {
            name: "실버 까마귀 휘장",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 3
          },
          {
            name: "서리의 핵",
            amount: 8
          },
          {
            name: "통통 연꽃",
            amount: 30
          },
          {
            name: "실버 까마귀 휘장",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 12
          },
          {
            name: "통통 연꽃",
            amount: 45
          },
          {
            name: "골드 까마귀 휘장",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "서늘한 빙옥",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 20
          },
          {
            name: "통통 연꽃",
            amount: 60
          },
          {
            name: "골드 까마귀 휘장",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 가르침",
            amount: 3
          },
          {
            name: "보물찾기 까마귀 휘장",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 인도",
            amount: 2
          },
          {
            name: "실버 까마귀 휘장",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "시문의 인도",
            amount: 4
          },
          {
            name: "실버 까마귀 휘장",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 인도",
            amount: 6
          },
          {
            name: "실버 까마귀 휘장",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "시문의 인도",
            amount: 9
          },
          {
            name: "실버 까마귀 휘장",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 철학",
            amount: 4
          },
          {
            name: "골드 까마귀 휘장",
            amount: 4
          },
          {
            name: "북풍의 영혼상자",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "시문의 철학",
            amount: 6
          },
          {
            name: "골드 까마귀 휘장",
            amount: 6
          },
          {
            name: "북풍의 영혼상자",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 철학",
            amount: 12
          },
          {
            name: "골드 까마귀 휘장",
            amount: 9
          },
          {
            name: "북풍의 영혼상자",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "시문의 철학",
            amount: 16
          },
          {
            name: "골드 까마귀 휘장",
            amount: 12
          },
          {
            name: "북풍의 영혼상자",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 976,
                atk: 19,
                def: 66,
                bonus: 0
            },
            end: {
                hp: 2506,
                atk: 48,
                def: 171,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3235,
                atk: 62,
                def: 220,
                bonus: 0
            },
            end: {
                hp: 4846,
                atk: 93,
                def: 330,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5364,
                atk: 103,
                def: 365,
                bonus: 6.7
            },
            end: {
                hp: 6170,
                atk: 118,
                def: 420,
                bonus: 6.7
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 6860,
                atk: 131,
                def: 467,
                bonus: 13.3
            },
            end: {
                hp: 7666,
                atk: 147,
                def: 522,
                bonus: 13.3
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 8184,
                atk: 156,
                def: 557,
                bonus: 13.3
            },
            end: {
                hp: 8990,
                atk: 172,
                def: 612,
                bonus: 13.3
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 9508,
                atk: 181,
                def: 647,
                bonus: 20
            },
            end: {
                hp: 10312,
                atk: 196,
                def: 702,
                bonus: 20
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 10830,
                atk: 205,
                def: 737,
                bonus: 26.7
            },
            end: {
                hp: 11636,
                atk: 220,
                def: 792,
                bonus: 26.7
            }
        }
    ],
    bonus: "원소 충전 효율",
    bonusType: "percent",
    passive: [
      {
        name: "냉혈의 검",
        ascension: 1,
        description: "서리 엄습이 적 1기에 명중할 때마다 케이아의 HP를 공격력의 15%만큼 회복한다."
      },
      {
        name: "빙연의 마음",
        ascension: 4,
        description: "서리 엄습이 적을 빙결시키면 얼어붙은 적은 원소 입자를 추가로 드랍한다. 서리 엄습 1회로 최대 2개의 원소 입자가 추가로 드랍한다."
      },
      {
        name: "숨겨진 실력",
        ascension: -1,
        description: "파티 내 모든 캐릭터의 대시 시 소모되는 스태미나가 20% 감소한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "걸출한 혈통",
        description: `얼음 원소의 영향을 받은 적을 공격 시 일반 공격과 강공격의 치명타 확률이 15% 증가한다.`
      },
      {
        id: 2,
        name: "끝없는 서리춤",
        description: `살을 에는 윤무의 지속 시간 내에 적을 처치할 시 지속 시간이 2.5초 연장된다. 최대 지속 시간: 15초`
      },
      {
        id: 3,
        name: "살을 에는 얼음놀이",
        description: `서리 엄습의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "차가운 키스",
        description: `케이아의 HP가 20% 미만일 때 자동으로 발동한다:
HP 최대치의 30%에 해당하는 피해를 흡수하는 보호막을 생성한다. 지속 시간: 20초.
이 보호막은 얼음 원소 피해에 대해 250%의 흡수 효과가 있다.
해당 효과는 60초마다 1번 발동된다.`
      },
      {
        id: 5,
        name: "차가운 포옹",
        description: `살을 에는 윤무의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "회전하는 얼음",
        description: `살을 에는 윤무의 얼음 기둥 1개가 추가로 생성되고 발동 시 원소 에너지를 15pt 반환한다.`
      }
    ]
  },
  "중운": {
    name: "중운",
    keyword: ["chongyun"],
    icon: "https://paimon.moe/images/characters/chongyun.png",
    gender: "남성",
    birth: "09/07",
    affiliation: "리월항",
    star: "건곤봉자리",
    level: 4,
    weapon: "양손검",
    element: "얼음",
    build: [
      {
        type: "서브 딜러", 
        main_stats: {
          "시계": ["공격력%", "원소 충전 효율", "원소 마스터리"],
          "잔": "얼음 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%",
          "원소 마스터리",
          "원소 충전 효율", 
          "공격력"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["늑대의 말로", "이무기 검", "무공의 검", "천공의 긍지", "천암고검", "제례 대검", "흑암참도", "고화 프로토타입", "페보니우스 대검"],
        artifacts: [
          ["옛 왕실의 의식", "얼음바람 속에서 길잃은 용사"],
          "절연의 기치",
          ["옛 왕실의 의식", "얼음바람 속에서 길잃은 용사", "대지를 유랑하는 악단", "공격력 +18% 세트", "절연의 기치"],
          "옛 왕실의 의식"
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "서늘한 빙옥 가루",
            amount: 1
          },
          {
            name: "콜 라피스",
            amount: 3
          },
          {
            name: "부서진 가면",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 3
          },
          {
            name: "서리의 핵",
            amount: 2
          },
          {
            name: "콜 라피스",
            amount: 10
          },
          {
            name: "부서진 가면",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 4
          },
          {
            name: "콜 라피스",
            amount: 20
          },
          {
            name: "오염된 가면",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 3
          },
          {
            name: "서리의 핵",
            amount: 8
          },
          {
            name: "콜 라피스",
            amount: 30
          },
          {
            name: "오염된 가면",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 12
          },
          {
            name: "콜 라피스",
            amount: 45
          },
          {
            name: "불길한 가면",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "서늘한 빙옥",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 20
          },
          {
            name: "콜 라피스",
            amount: 60
          },
          {
            name: "불길한 가면",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 가르침",
            amount: 3
          },
          {
            name: "부서진 가면",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 인도",
            amount: 2
          },
          {
            name: "오염된 가면",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "근면의 인도",
            amount: 4
          },
          {
            name: "오염된 가면",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 인도",
            amount: 6
          },
          {
            name: "오염된 가면",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "근면의 인도",
            amount: 9
          },
          {
            name: "오염된 가면",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 철학",
            amount: 4
          },
          {
            name: "불길한 가면",
            amount: 4
          },
          {
            name: "동풍의 숨결",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "근면의 철학",
            amount: 6
          },
          {
            name: "불길한 가면",
            amount: 6
          },
          {
            name: "동풍의 숨결",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 철학",
            amount: 12
          },
          {
            name: "불길한 가면",
            amount: 9
          },
          {
            name: "동풍의 숨결",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "근면의 철학",
            amount: 16
          },
          {
            name: "불길한 가면",
            amount: 12
          },
          {
            name: "동풍의 숨결",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 1003,
                atk: 19,
                def: 54,
                bonus: 0
            },
            end: {
                hp: 2366,
                atk: 48,
                def: 140,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3054,
                atk: 62,
                def: 180,
                bonus: 0
            },
            end: {
                hp: 4574,
                atk: 93,
                def: 270,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5063,
                atk: 103,
                def: 299,
                bonus: 6
            },
            end: {
                hp: 5824,
                atk: 118,
                def: 344,
                bonus: 6
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 6475,
                atk: 131,
                def: 382,
                bonus: 12
            },
            end: {
                hp: 7236,
                atk: 147,
                def: 427,
                bonus: 12
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 7725,
                atk: 157,
                def: 456,
                bonus: 12
            },
            end: {
                hp: 8485,
                atk: 172,
                def: 501,
                bonus: 12
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 8974,
                atk: 182,
                def: 530,
                bonus: 18
            },
            end: {
                hp: 9734,
                atk: 198,
                def: 575,
                bonus: 18
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 10223,
                atk: 208,
                def: 603,
                bonus: 24
            },
            end: {
                hp: 10984,
                atk: 223,
                def: 648,
                bonus: 24
            }
        }
    ],
    bonus: "공격력",
    bonusType: "percent",
    skills: [
      {
        name: "악멸의사식",
        type: "일반공격",
        description: `
일반공격
검으로 최대 4번 공격한다.
(1단:70.0%,2단:63.1%,3단:80.3%,4단:101%)

강공격
스태미나를 지속해서 소모해 검을 휘두르며 주변의 적을 공격한다. 회전 종료 시 추가로 한 번 더 강력하게 휘두른다.
(강공격 순환 피해:56.3%,강공격 종결 피해:102%,강공격 스태미나 소모:초당 40.0pt,최대지속시간:5.0초)

낙하공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 땅에 닿으면 범위 피해를 준다.
(낙하 기간 피해:74.6%, 저공/고공 추락충격피해:149%/186%)
`
      },
      {
        name: "영도*중첩의 서리",
        type: "원소스킬",
        description: `
중운이 대검을 휘둘러 땅을 강하게 찍어 전방의 원형 범위내에 얼음 폭발을 일으켜 적에게 얼음 원소 피해를 준다. 잠깐의 지연 후 얼음 폭발로 생긴 한기가 모여 중첩의 서리 영역이 생성된다. 영역 내의 한손검,양손검,장병기를 사용하는 캐릭터의 일반 공격과 강공격 피해가 얼음 원소 피해로 변한다.

(스킬피해:172%,마법부여지속시간:2.0초,영역지속시간:10.0초,재사용 대기시간:15.0초)
`
      },
      {
        name: "영도*떨어지는 별",
        type: "원소폭발(필살기)",
        description: `
중운이 결인하니 전방의 허공에서 연속으로 소환된 3개의 거대한 영도가 순서대로 땅에 떨어지면서 폭발한다. 영도 폭렬 시 얼음 원소 범위 피해를 주고 적을 공중에 띄운다.

(스킬피해:142%,재사용 대기시간:12.0초,원소에너지:40)
`
      }
    ],
    passive: [
      {
        name: "전기 토납",
        ascension: 1,
        description: "영도*중첩의 서리 영역 내에 있는 한손검,대검,장병기 캐릭터의 일반 공격 속도가 8% 상승한다. "
      },
      {
        name: "빙검 추적의 주문",
        ascension: 4,
        description: "영도*중첩의 서리 영역이 사라질 때 영도를 소환해 주변의 적을 자동으로 공격해 영도*중첩의 서리 스킬 피해 100%만큼의 얼음 원소 범위 피해를 준다. 피격된 적은 얼음 원소 내성이 10% 감소한다. 지속시간:8초."
      },
      {
        name: "산과 바다로",
        ascension: -1,
        description: "리월에서 탐색 임무 수행 시 소모하는 시간이 25% 감소한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "얼음의 노래",
        description: `일반 공격의 마지막 일격은 전방을 향해 얼음 칼날을 3개 날리고 칼날마다 경로상의 적에게 중운 공격력 50%의 얼음 원소 피해를 준다.`
      },
      {
        id: 2,
        name: "주천 운기",
        description: `영도 · 중첩의 서리 영역 내에서 발동된 원소 전투 스킬과 원소폭발의 재사용 대기시간이 15% 감소한다.`
      },
      {
        id: 3,
        name: "구름이 걷히고 빛이 든다",
        description: `영도 · 떨어지는 별의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "구름이 떠다니는 서리 하늘",
        description: `중운의 모든 공격이 얼음 원소의 영향을 받은 적을 명중하면 자신의 원소 에너지를 1pt 회복한다.
해당 효과는 2초마다 1번 발동한다.`
      },
      {
        id: 5,
        name: "참된 도리와 이치",
        description: `영도 · 중첩의 서리의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "성인을 받드는 네 개의 령",
        description: `영도 · 떨어지는 별이 HP 백분율이 중운보다 낮은 적을 공격 시 가하는 피해가 15% 증가한다.
또한 발동 시 영도를 추가로 1자루 소환한다.`
      }
    ]
  },
  "치치": {
    name: "치치",
    keyword: ["qiqi"],
    icon: "https://paimon.moe/images/characters/qiqi.png",
    expurl: "https://www.youtube.com/watch?v=zLLt7aRlaXw&list=PLQBypYmxS6LSoV-ZMcPmyG0qur5jcMcQv&index=12&ab_channel=%EC%9B%90%EC%8B%A0",
    playurl: "https://www.youtube.com/watch?v=50Lczcl9n2E&list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA&index=14&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "여성",
    birth: "03/03",
    affiliation: "불복려",
    star: "삼청령자리",
    level: 5,
    weapon: "한손검",
    element: "얼음",
    build: [
      {
        type: "서포터", 
        main_stats: {
          "시계": ["공격력%", "원소 충전 효율"],
          "잔": ["공격력%", "얼음 원소 피해"],
          "모자": ["공격력%", "치유 보너스"]
        },
        sub_stats: [
          "공격력%", 
          "공격력%", 
          "원소 충전 효율",
          "공격력"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["제례검", "천공의 검", "피리검", "페보니우스 검", "부식의 검", "아메노마 카게우치가타나", "비천어검", "흘호 생선회칼", "차가운 칼날"],
        artifacts: [
          "견고한 천암",
          "사랑받는 소녀",
          ["사랑받는 소녀", "검투사의 피날레"],
          "옛 왕실의 의식",
          ["유배자", "학사", "절연의 기치"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "서늘한 빙옥 가루",
            amount: 1
          },
          {
            name: "유리주머니",
            amount: 3
          },
          {
            name: "이능 두루마리",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 3
          },
          {
            name: "서리의 핵",
            amount: 2
          },
          {
            name: "유리주머니",
            amount: 10
          },
          {
            name: "이능 두루마리",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 4
          },
          {
            name: "유리주머니",
            amount: 20
          },
          {
            name: "봉마의 두루마리",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 3
          },
          {
            name: "서리의 핵",
            amount: 8
          },
          {
            name: "유리주머니",
            amount: 30
          },
          {
            name: "봉마의 두루마리",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 12
          },
          {
            name: "유리주머니",
            amount: 45
          },
          {
            name: "금주의 두루마리",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "서늘한 빙옥",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 20
          },
          {
            name: "유리주머니",
            amount: 60
          },
          {
            name: "금주의 두루마리",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 가르침",
            amount: 3
          },
          {
            name: "이능 두루마리",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 인도",
            amount: 2
          },
          {
            name: "봉마의 두루마리",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "번영의 인도",
            amount: 4
          },
          {
            name: "봉마의 두루마리",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 인도",
            amount: 6
          },
          {
            name: "봉마의 두루마리",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "번영의 인도",
            amount: 9
          },
          {
            name: "봉마의 두루마리",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 철학",
            amount: 4
          },
          {
            name: "금주의 두루마리",
            amount: 4
          },
          {
            name: "북풍의 꼬리",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "번영의 철학",
            amount: 6
          },
          {
            name: "금주의 두루마리",
            amount: 6
          },
          {
            name: "북풍의 꼬리",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 철학",
            amount: 12
          },
          {
            name: "금주의 두루마리",
            amount: 9
          },
          {
            name: "북풍의 꼬리",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "번영의 철학",
            amount: 16
          },
          {
            name: "금주의 두루마리",
            amount: 12
          },
          {
            name: "북풍의 꼬리",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 963,
                atk: 22,
                def: 72,
                bonus: 0
            },
            end: {
                hp: 2498,
                atk: 58,
                def: 186,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3323,
                atk: 77,
                def: 248,
                bonus: 0
            },
            end: {
                hp: 4973,
                atk: 115,
                def: 371,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5559,
                atk: 129,
                def: 415,
                bonus: 5.5
            },
            end: {
                hp: 6396,
                atk: 148,
                def: 477,
                bonus: 5.5
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 7178,
                atk: 167,
                def: 535,
                bonus: 11.1
            },
            end: {
                hp: 8023,
                atk: 186,
                def: 598,
                bonus: 11.1
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 8610,
                atk: 200,
                def: 642,
                bonus: 11.1
            },
            end: {
                hp: 9463,
                atk: 220,
                def: 706,
                bonus: 11.1
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 10050,
                atk: 233,
                def: 749,
                bonus: 16.6
            },
            end: {
                hp: 10912,
                atk: 253,
                def: 814,
                bonus: 16.6
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 11499,
                atk: 267,
                def: 857,
                bonus: 22.2
            },
            end: {
                hp: 12368,
                atk: 287,
                def: 922,
                bonus: 22.2
            }
        }
    ],
    bonus: "치유 보너스",
    bonusType: "percent",
    skills: [
      {
        name: "운래의 고대검법",
        type: "일반공격",
        description: `
일반공격
검으로 최대 5번 공격한다.
(1단:37.8%,2단:38.9%,3단:24.2%+24.2%,4단:24.7%+24.7%,63.0%)

강공격
일정 스태미나를 소모해 순간적으로 전방을 향해 검을 2번 휘두른다.
(강공격 피해 : 64.3%+64.3%, 강공격스태미나소모:20.0pt)

낙하공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 땅에 닿으면 범위 피해를 준다.
(낙하기간피해:63.9%,저공/고공 추락 충격 피해 :128%/160%)
`
      },
      {
        name: "선법º한병의 귀차",
        type: "원소스킬",
        description: `
얼음과 피로 만들어진 부적으로 한병의 귀차를 소환해 주변의 적에게 얼음 원소 피해를 준다.

한병의 귀차
★치치의 일반 공격과 강공격이 명중 시 파티 내 모든 캐릭터 및 근처의 아군 캐릭터의 HP를 회복한다. 회복량은 치치의 공격력의 영향을 받는다.
★일정 시간이 지날 때마다 현재 캐릭터의 HP를 회복한다.
★캐릭터를 따라다니며 경로상의 적에게 얼음 원소 피해를 준다.

(스킬피해:96%,명중치유량:공격력의10.56%+67,지속치유량:공격력의 69.60%+451,한병의 귀차피해:36.0%,지속시간:15.0초,재사용 대기시간:30.0초)
`
      },
      {
        name: "선법º구고도액",
        type: "원소폭발(필살기)",
        description: `
치치가 체내에 봉인된 선력을 해방해 주변의 적에게 도액 부적 표식을 남기고 얼음 원소 피해를 준다.

도액부적
도액 부적 표식이 있는 적에게 피해를 주면 캐릭터의 HP를 회복한다.

(스킬피해:285%,치유량:공격력의90.0%+577,지속시간:15.0초,재사용 대기시간:20.0초,원소 에너지:80)
`
      }
    ],
    passive: [
      {
        name: "생명 연장의 묘법",
        ascension: 1,
        description: "선법º한병의 귀차 상태의 캐릭터가 원소 반응을 일으키면 받는 치유 보너스가 20% 상승한다. 지속 시간:8초."
      },
      {
        name: "우연히 얻은 옥첨",
        ascension: 3,
        description: "치치의 일반공격과 강공격이 적을 명중 시 50%의 확률로 적에게 도액 부적을 한 장 부여한다. 지속 시간:6초. 해당 효과는 30초마다 1번 발동한다."
      },
      {
        name: "지나간 기억",
        ascension: -1,
        description: "미니맵에 주위의 리월 지역 특산물 위치가 나타난다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "한고의 회향",
        description: `한병의 귀차의 공격이 도액 부적 표식이 있는 적을 명중 시 치치의 원소 에너지를 2pt 회복한다.`
      },
      {
        id: 2,
        name: "뼛속까지 스며드는 한기",
        description: `얼음 원소의 영향을 받은 적을 공격 시 치치가 일반 공격과 강공격으로 가하는 피해가 15% 증가한다.`
      },
      {
        id: 3,
        name: "승천 보고(宝诰)",
        description: `선법 · 구고도액의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "중생을 압도하는 천위",
        description: `도액 부적 표식이 있는 적은 공격력이 20% 감소한다.`
      },
      {
        id: 5,
        name: "피어난 홍련",
        description: `선법 · 한병의 귀차의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "기사회해",
        description: `선법 · 구고도액 발동 시 근처 파티 내 전투 불능이 된 캐릭터를 부활시키고 HP를 50% 회복한다.
해당 효과는 15분마다 1번 발동한다.`
      }
    ]
  },
  "디오나": {
    name: "디오나",
    keyword: ["diona"],
    icon: "https://paimon.moe/images/characters/diona.png",
    playurl: "https://www.youtube.com/watch?v=L_DfFUXv9rE&list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA&index=9&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "여성",
    birth: "01/18",
    affiliation: "캣테일 술집",
    star: "고양이자리",
    level: 4,
    weapon: "활",
    element: "얼음",
    build: [
      {
        type: "서포터", 
        main_stats: {
          "시계": ["원소 충전 효율", "HP%"],
          "잔": "HP%",
          "모자": ["HP%", "치유 보너스"]
        },
        sub_stats: [
          "HP%",
          "원소 충전 효율", 
          "HP"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["제례활", "페보니우스 활", "종말 탄식의 노래", "곡궁"],
        artifacts: [
          "옛 왕실의 의식", 
          ["절연의 기치", "견고한 천암"],
          ["사랑받는 소녀", "견고한 천암"],
          "사랑받는 소녀",
          ["사랑받는 소녀", "절연의 기치"],
          "유배자", 
          "교관"
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "서늘한 빙옥 가루",
            amount: 1
          },
          {
            name: "통통 연꽃",
            amount: 3
          },
          {
            name: "견고한 화살촉",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 3
          },
          {
            name: "서리의 핵",
            amount: 2
          },
          {
            name: "통통연꽃",
            amount: 10
          },
          {
            name: "견고한 화살촉",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 4
          },
          {
            name: "통통연꽃",
            amount: 20
          },
          {
            name: "날카로운 화살촉",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 3
          },
          {
            name: "서리의 핵",
            amount: 8
          },
          {
            name: "통통연꽃",
            amount: 30
          },
          {
            name: "날카로운 화살촉",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 12
          },
          {
            name: "통통연꽃",
            amount: 45
          },
          {
            name: "역전의 화살촉",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "서늘한 빙옥",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 20
          },
          {
            name: "통통연꽃",
            amount: 60
          },
          {
            name: "역전의 화살촉",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 가르침",
            amount: 3
          },
          {
            name: "견고한 화살촉",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 인도",
            amount: 2
          },
          {
            name: "날카로운 화살촉",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "자유의 인도",
            amount: 4
          },
          {
            name: "날카로운 화살촉",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 인도",
            amount: 6
          },
          {
            name: "날카로운 화살촉",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "자유의 인도",
            amount: 9
          },
          {
            name: "날카로운 화살촉",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 철학",
            amount: 4
          },
          {
            name: "역전의 화살촉",
            amount: 4
          },
          {
            name: "마왕의 칼날 조각",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "자유의 철학",
            amount: 6
          },
          {
            name: "역전의 화살촉",
            amount: 6
          },
          {
            name: "마왕의 칼날 조각",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "자유의 철학",
            amount: 12
          },
          {
            name: "역전의 화살촉",
            amount: 9
          },
          {
            name: "마왕의 칼날 조각",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "자유의 철학",
            amount: 16
          },
          {
            name: "역전의 화살촉",
            amount: 12
          },
          {
            name: "마왕의 칼날 조각",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 802,
                atk: 18,
                def: 50,
                bonus: 0
            },
            end: {
                hp: 2061,
                atk: 46,
                def: 129,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 2661,
                atk: 59,
                def: 167,
                bonus: 0
            },
            end: {
                hp: 3985,
                atk: 88,
                def: 250,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 4411,
                atk: 98,
                def: 277,
                bonus: 6
            },
            end: {
                hp: 5074,
                atk: 113,
                def: 318,
                bonus: 6
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 5642,
                atk: 125,
                def: 354,
                bonus: 12
            },
            end: {
                hp: 6305,
                atk: 140,
                def: 396,
                bonus: 12
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 6731,
                atk: 149,
                def: 422,
                bonus: 12
            },
            end: {
                hp: 7393,
                atk: 164,
                def: 464,
                bonus: 12
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 7818,
                atk: 174,
                def: 491,
                bonus: 18
            },
            end: {
                hp: 8481,
                atk: 188,
                def: 532,
                bonus: 18
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 8907,
                atk: 198,
                def: 559,
                bonus: 24
            },
            end: {
                hp: 9570,
                atk: 212,
                def: 601,
                bonus: 24
            }
        }
    ],
    bonus: "얼음 원소 피해 보너스",
    bonusType: "percent",
    skills: [
      {
        name: "사냥꾼의 사격술",
        type: "일반공격",
        description: `
일반공격
활로 최대 5번 공격한다.
(1단:36.1%,2단:33.5%,3단:45.6%,4단:43.0%,5단:53.8%)

강공격
피해가 더 크고 정확한 조준 사격을 한다. 조준 시 차가운 한기가 화살 촉에 모인다. 한기로 가득 찬 화살은 얼음원소피해를 준다.
(조준사격:43.9%,풀차지 조준사격:124%)

낙하공격
공중에서 화살비를 쏜 후 빠른 속도로 땅에 착지한다. 땅에 닿으면 범위 피해를 준다.
(낙하기간피해:56.8%, 저공/고공 추락 충격 피해 : 114%/142%)
`
      },
      {
        name: "꽁꽁젤리",
        type: "원소스킬",
        description: `
꽁꽁젤리를 발사해 적에게 얼음 원소 피해를 주고 명중 시 보호막을 생성한다. 보호막의 피해 흡수량은 디오나 HP 최대치의 영향을 받고 지속 시간은 명중한 꽁꽁젤리 횟수에 영향을 받는다.
(꽁꽁젤리 피해 : 개당 41.9%)
(보호막 기본 흡수량 : HP 최대치 7.2% +693)
(지속시간:꽁꽁젤리마다 1.8초)

짧은터치
빠른 속도로 꽁꽁젤리를 2개 발사한다.
(짧은 터치 재사용 대기시간 :6.0초)

홀드
빠른 속도로 뒤로 물러선 후 꽁꽁젤리를 5개 발사한다. 홀드로 생성된 보호막은 75%의 흡수량 보너스를 획득한다.
(홀드 재사용 대기시간:15.0초)

보호막은 얼음 원소 피해에 대해 250%의 흡수 효과가 있고 생성 시 현재 캐릭터에게 얼음 원소를 잠깐 부착한다.
`
      },
      {
        name: "특제 칵테일",
        type: "원소폭발(필살기)",
        description: `
독한 특제 얼음 칵테일을 던져 얼음 원소 범위 피해를 주고 서리 술안개 영역을 만든다.

서리 술안개 영역
º영역 내의 적은 얼음 원소 지속 피해를 받는다.
º영역 내의 캐릭터는 HP를 지속해서 회복한다.
(스킬피해:80%,영역지속피해:52.6%,지속치유량:HP 최대치 5.34%+513,지속시간:12.0초,재사용 대기시간:20.0초,원소에너지:80)

`
      }
    ],
    passive: [
      {
        name: "캣테일 히든 메뉴",
        ascension: 1,
        description: "꽁꽁젤리 보호막의 보호를 받고 있는 캐릭터는 이동속도가 10% 증가하고 스태미나 소모량이 10% 감소한다. "
      },
      {
        name: "우스꽝스러운 취태",
        ascension: 4,
        description: "적이 특제 칵테일 영역에 진입하면 15초 동안 공격력이 10% 감소한다."
      },
      {
        name: "무료 안주",
        ascension: -1,
        description: "회복류 요리를 완벽 조리하면 12% 확률로 요리량의 2배를 획득한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "칵테일의 여운",
        description: `특제 칵테일의 효과 종료 후 디오나의 원소 에너지를 15pt 회복한다.`
      },
      {
        id: 2,
        name: "꽁꽁젤리 쉐이큰",
        description: `꽁꽁젤리로 가하는 피해가 15% 증가하고 보호막 피해 흡수량이 15% 증가한다.
또한 꽁꽁젤리 명중 시 필드 주변의 다른 캐릭터에게도 피해 흡수량이 꽁꽁젤리의 50%인 보호막이 생성된다. 지속 시간: 5초`
      },
      {
        id: 3,
        name: "한, 한 잔 더?",
        description: `특제 칵테일의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "주류업 킬러",
        description: `특제 칵테일 영역 내에서 디오나의 조준 사격 차지 시간이 60% 감소한다.`
      },
      {
        id: 5,
        name: "투 샷, 더블 아이스",
        description: `선꽁꽁젤리의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "캣테일 마감시간",
        description: `특제 칵테일 영역 내의 캐릭터는 HP에 따라 아래의 효과를 갖는다:
· HP 50% 이하 - 받는 치유 보너스+30%
· HP 50% 초과 - 원소 마스터리+200pt`
      }
    ]
  },
  "감우": {
    name: "감우",
    keyword: ["ganyu"],
    icon: "https://paimon.moe/images/characters/ganyu.png",
    expurl: "https://www.youtube.com/watch?v=WXXfJyo_N4g&list=PLQBypYmxS6LSoV-ZMcPmyG0qur5jcMcQv&index=5&ab_channel=%EC%9B%90%EC%8B%A0",
    pvurl: "https://www.youtube.com/watch?v=P_ndbBYvpiQ&list=PLQBypYmxS6LReK6-H2wUKs0geDHMGMpSp&index=2&ab_channel=%EC%9B%90%EC%8B%A0",
    playurl: "https://www.youtube.com/watch?v=_w2M5KmXfvE&list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA&index=5&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "여성",
    birth: "12/02",
    affiliation: "월해정",
    star: "선린자리",
    level: 5,
    weapon: "활",
    element: "얼음",
    build: [
      {
        type: "융해 딜러", 
        main_stats: {
          "시계": ["원소 마스터리", "공격력%"],
          "잔": "얼음 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%",
          "원소 마스터리", 
          "공격력", 
          "원소 충전 효율"
        ],
        priority: ["일반 공격", "원소 스킬", "필살기"],
        weapons: ["아모스의 활", "천공의 날개", "비뢰의 고동", "담월 프로토타입", "파마궁", "흑암 배틀 보우", "청록의 사냥활"],
        artifacts: [
          "추억의 시메카자리",
          "대지를 유랑하는 악단",
          ["얼음바람 속에서 길잃은 용사", "대지를 유랑하는 악단"],
          ["공격력 +18% 세트", "대지를 유랑하는 악단"]
        ]
      },
      {
        type: "빙결 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "얼음 원소 피해",
          "모자": "치명타 확률"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%",
          "원소 충전 효율",
          "공격력"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["아모스의 활", "비뢰의 고동", "천공의 날개", "담월 프로토타입", "흑암 배틀 보우", "청록의 사냥활"],
        artifacts: [
          "얼음바람 속에서 길잃은 용사",
          ["얼음바람 속에서 길잃은 용사", "공격력 +18% 세트"]
        ]
      },
      {
        type: "서브 딜러", 
        main_stats: {
          "시계": ["공격력%", "원소 충전 효율"],
          "잔": "얼음 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "원소 충전 효율",
          "치명타 확률 / 피해",
          "원소 마스터리", 
          "공격력%",
          "공격력"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["비뢰의 고동", "천공의 날개", "뒷골목 사냥꾼", "절현", "종말 탄식의 노래", "아모스의 활", "바람 꽃의 노래", "흑암 배틀 보우", "청록의 사냥활", "담월 프로토타입", "왕실의 장궁"],
        artifacts: [
          ["옛 왕실의 의식", "얼음바람 속에서 길잃은 용사"],
          "절연의 기치",
          ["옛 왕실의 의식", "공격력 +18% 세트", "절연의 기치"],
          "옛 왕실의 의식"
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "서늘한 빙옥 가루",
            amount: 1
          },
          {
            name: "청심",
            amount: 3
          },
          {
            name: "구라구라 꽃꿀",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 3
          },
          {
            name: "서리의 핵",
            amount: 2
          },
          {
            name: "청심",
            amount: 10
          },
          {
            name: "구라구라 꽃꿀",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 4
          },
          {
            name: "청심",
            amount: 20
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 3
          },
          {
            name: "서리의 핵",
            amount: 8
          },
          {
            name: "청심",
            amount: 30
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 12
          },
          {
            name: "청심",
            amount: 45
          },
          {
            name: "원소 꽃꿀",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "서늘한 빙옥",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 20
          },
          {
            name: "청심",
            amount: 60
          },
          {
            name: "원소 꽃꿀",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 가르침",
            amount: 3
          },
          {
            name: "구라구라 꽃꿀",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 인도",
            amount: 2
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "근면의 인도",
            amount: 4
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 인도",
            amount: 6
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "근면의 인도",
            amount: 9
          },
          {
            name: "반짝반짝 꽃꿀",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 철학",
            amount: 4
          },
          {
            name: "원소 꽃꿀",
            amount: 4
          },
          {
            name: "무예의 혼 고영",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "근면의 철학",
            amount: 6
          },
          {
            name: "원소 꽃꿀",
            amount: 6
          },
          {
            name: "무예의 혼 고영",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "근면의 철학",
            amount: 12
          },
          {
            name: "원소 꽃꿀",
            amount: 9
          },
          {
            name: "무예의 혼 고영",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "근면의 철학",
            amount: 16
          },
          {
            name: "원소 꽃꿀",
            amount: 12
          },
          {
            name: "무예의 혼 고영",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 763,
                atk: 26,
                def: 49,
                bonus: 50
            },
            end: {
                hp: 1978,
                atk: 68,
                def: 127,
                bonus: 50
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 2632,
                atk: 90,
                def: 169,
                bonus: 50
            },
            end: {
                hp: 3939,
                atk: 135,
                def: 253,
                bonus: 50
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 4403,
                atk: 151,
                def: 283,
                bonus: 59.6
            },
            end: {
                hp: 5066,
                atk: 173,
                def: 326,
                bonus: 59.6
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 5686,
                atk: 194,
                def: 366,
                bonus: 69.2
            },
            end: {
                hp: 6355,
                atk: 217,
                def: 409,
                bonus: 69.2
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 6820,
                atk: 233,
                def: 439,
                bonus: 69.2
            },
            end: {
                hp: 7495,
                atk: 256,
                def: 482,
                bonus: 69.2
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 7960,
                atk: 272,
                def: 512,
                bonus: 78.8
            },
            end: {
                hp: 8643,
                atk: 295,
                def: 556,
                bonus: 78.8
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 9108,
                atk: 311,
                def: 586,
                bonus: 88.4
            },
            end: {
                hp: 9797,
                atk: 335,
                def: 630,
                bonus: 88.4
            }
        }
    ],
    bonus:"치명타 피해",
    bonusType: "percent",
    skills: [
      {
        name: "유천사격술",
        type: "일반공격",
        description: `
일반공격
활로 최대 6번 공격한다.
(1단공격:31.7%,2단공격:35.6%,3단공격:45.5%,4단공격:45.5%,5단공격:48.2%,6단공격:57.6%)

강공격
피해가 더 크고 정확한 조준 사격을 한다.
조준 시 서리의 힘이 화살 촉에 계속해서 모여 공격과 동시에 발사된다. 차지의 시간에 따라 다른 효과가 발동된다 :
·1단 차지 : 한기가 서린 화살을 발사해 얼음 원소 피해를 준다.
·2단 차지 : 서리꽃 화살을 발사해 얼음 원소 피해를 준다. 명중 후 서리꽃이 피어나 얼음 원소 범위 피해를 다시 한번 준다.
(조준사격 : 43.9%, 1단차지조준사격 : 124%, 서리꽃화살명중피해:128%, 서리꽃화살·피어나는 서리꽃 피해: 218%)

낙하공격
공중에서 화살비를 쏜 후 빠른 속도로 땅에 착지한다. 땅에 닿으면 범위 피해를 준다.
(낙하기간피해 : 56.7%, 저공/고공 추락 충격피해 : 114%/142%)
`
      },
      {
        name: "산과강의 기린 흔적",
        type: "원소스킬",
        description: `
감우가 얼음 연꽃을 남긴 후 빠른 속도로 후퇴하고 모든 이매망량을 멀리하며 얼음 원소 범위 피해를 준다.

얼음 연꽃
·주변의 적을 계속 도발하며 적의 공격을 유인한다
·얼음 연꽃은 감우의 HP최대치의 영향을 받는다
·얼음 연꽃은 파괴당하거나 지속 시간이 끝나면 격렬히 피어나 얼음 원소 범위 피해를 준다.
(HP계승 : 120%, 스킬피해 : 132%, 지속시간 : 6.0초, 재사용 대기시간 : 10.0초)
`
      },
      {
        name: "쏟아지는 천화",
        type: "원소폭발(필살기)",
        description: `
대기 중의 서리눈을 모아 퇴마의 방령주를 소환한다. 방령주가 존재하는 동안 계속해서 고드름을 내려 공격 범위 내의 적에게 얼음 원소 피해를 준다.
(고드름피해:70%,지속시간:15.0초,재사용 대기시간:15.0초,원소에너지:60)
`
      }
    ],
    passive: [
      {
        name: "단 하나의 마음",
        ascension: 1,
        description: "서리꽃 화살 발사 후 5초 동안 다음으로 발사되는 서리꽃 화살과 이로 인해 피어나는 서리꽃의 치명타 확률이 20% 증가한다."
      },
      {
        name: "천지교태",
        ascension: 4,
        description: "쏟아지는 천화 영역 내에서 현재 필드 위 캐릭터는 얼음 원소 피해 보너스를 20% 획득한다."
      },
      {
        name: "감춰둔 활",
        ascension: -1,
        description: "활 무기 단조 시 소모한 광석을 15% 반환한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "이슬 먹는 신수",
        description: `2단 차지 강공격의 서리꽃 화살 혹은 피어난 서리꽃에 명중된 적은 얼음 원소 내성이 15% 감소한다. 지속 시간: 6초
또한 명중 시 감우의 원소 에너지를 2pt 회복한다. 서리꽃 화살과 피어나는 서리꽃의 명중 여부와 상관없이, 2단 차지 강공격은 매번 원소 에너지 회복 효과를 1번만 발동한다.`
      },
      {
        id: 2,
        name: "획린(獲麟)",
        description: `산과 강의 기린 흔적의 사용 가능 횟수가 1회 증가한다.`
      },
      {
        id: 3,
        name: "구름 여행",
        description: `쏟아지는 천화의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "서수(西狩)",
        description: `쏟아지는 천화 영역 내에서 적이 받는 피해가 증가한다. 해당 효과는 시간이 지날수록 점점 강해진다.
초기 받는 피해 보너스: 5%, 이후 3초마다 5%씩 증가하며 최대 25%까지 상승한다.
영역을 벗어나면 효과는 최대 3초 동안 유지된다.`
      },
      {
        id: 5,
        name: "잡초 근절",
        description: `산과 강의 기린 흔적의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "살생의 발걸음",
        description: `산과 강의 기린 흔적 발동 후 30초 안에 발동되는 첫 번째 서리꽃 화살은 차지 없이 발동할 수 있다.`
      }
    ]
  },
  "로자리아": {
    name: "로자리아",
    keyword: ["rosaria"],
    icon: "https://paimon.moe/images/characters/rosaria.png",
    expurl: "https://www.youtube.com/watch?v=R4-eKE3x0VU&list=PLQBypYmxS6LSoV-ZMcPmyG0qur5jcMcQv&index=2&ab_channel=%EC%9B%90%EC%8B%A0",
    playurl: "https://www.youtube.com/watch?v=4V66OmO9XKw&list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA&index=2&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "여성",
    birth: "01/24",
    affiliation: "페보니우스 성당",
    star: "형관자리",
    level: 4,
    weapon: "장병기",
    element: "얼음",
    build: [
      {
        type: "서브 딜러", 
        main_stats: {
          "시계": ["공격력%", "원소 충전 효율"],
          "잔": "얼음 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률", 
          "원소 마스터리", 
          "원소 충전 효율",
          "치명타 피해", 
          "공격력%"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["호마의 지팡이", "화박연", "관홍의 창", "결투의 창", "천공의 마루", "흑암창", "천암장창", "페보니우스 장창", "별의 낫 프로토타입", "백술창 (재련 5레벨)"],
        artifacts: [
          "옛 왕실의 의식",
          ["옛 왕실의 의식", "얼음바람 속에서 길잃은 용사"],
          ["옛 왕실의 의식", "전쟁광"]
        ]
      },
      {
        type: "얼음 원소 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "얼음 원소 피해",
          "모자": "치명타 피해"
        },
        sub_stats: [
          "치명타 피해", 
          "공격력%", 
          "원소 충전 효율",
          "치명타 확률", 
          "공격력"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["화박연", "관홍의 창", "호마의 지팡이", "천암장창", "용학살창", "천공의 마루", "결투의 창", "흑암창", "백술창"]
      },
      {
        type: "물리 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "물리 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해", 
          "공격력%", 
          "원소 충전 효율",
          "공격력"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["화박연", "관홍의 창", "호마의 지팡이", "유월창", "흑암창", "천공의 마루", "결투의 창", "용의 척추", "백술창"]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "서늘한 빙옥 가루",
            amount: 1
          },
          {
            name: "낙락베리",
            amount: 3
          },
          {
            name: "신병의 휘장",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 3
          },
          {
            name: "서리의 핵",
            amount: 2
          },
          {
            name: "낙락베리",
            amount: 10
          },
          {
            name: "신병의 휘장",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 4
          },
          {
            name: "낙락베리",
            amount: 20
          },
          {
            name: "사관의 휘장",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 3
          },
          {
            name: "서리의 핵",
            amount: 8
          },
          {
            name: "낙락베리",
            amount: 30
          },
          {
            name: "사관의 휘장",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 12
          },
          {
            name: "낙락베리",
            amount: 45
          },
          {
            name: "위관의 휘장",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "서늘한 빙옥",
            amount: 6
          },
          {
            name: "서리의 핵",
            amount: 20
          },
          {
            name: "낙락베리",
            amount: 60
          },
          {
            name: "위관의 휘장",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 가르침",
            amount: 3
          },
          {
            name: "신병의 휘장",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 인도",
            amount: 2
          },
          {
            name: "사관의 휘장",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "시문의 인도",
            amount: 4
          },
          {
            name: "사관의 휘장",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 인도",
            amount: 6
          },
          {
            name: "사관의 휘장",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "시문의 인도",
            amount: 9
          },
          {
            name: "사관의 휘장",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 철학",
            amount: 4
          },
          {
            name: "위관의 휘장",
            amount: 4
          },
          {
            name: "무예의 혼 고영",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "시문의 철학",
            amount: 6
          },
          {
            name: "위관의 휘장",
            amount: 6
          },
          {
            name: "무예의 혼 고영",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 철학",
            amount: 12
          },
          {
            name: "위관의 휘장",
            amount: 9
          },
          {
            name: "무예의 혼 고영",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "시문의 철학",
            amount: 16
          },
          {
            name: "위관의 휘장",
            amount: 12
          },
          {
            name: "무예의 혼 고영",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 1030,
                atk: 20,
                def: 60,
                bonus: 0
            },
            end: {
                hp: 2647,
                atk: 52,
                def: 153,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3417,
                atk: 67,
                def: 197,
                bonus: 0
            },
            end: {
                hp: 5118,
                atk: 100,
                def: 296,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5665,
                atk: 111,
                def: 327,
                bonus: 6
            },
            end: {
                hp: 6516,
                atk: 127,
                def: 376,
                bonus: 6
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 7245,
                atk: 141,
                def: 418,
                bonus: 12
            },
            end: {
                hp: 8096,
                atk: 158,
                def: 468,
                bonus: 12
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 8643,
                atk: 169,
                def: 499,
                bonus: 12
            },
            end: {
                hp: 9493,
                atk: 185,
                def: 548,
                bonus: 12
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 10040,
                atk: 196,
                def: 580,
                bonus: 18
            },
            end: {
                hp: 10891,
                atk: 213,
                def: 611,
                bonus: 18
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 11438,
                atk: 223,
                def: 629,
                bonus: 24
            },
            end: {
                hp: 12289,
                atk: 240,
                def: 710,
                bonus: 24
            }
        }
    ],
    bonus: "공격력",
    bonusType: "percent",
    skills: [
      {
        name: "성당 창술",
        type: "일반공격",
        description: `
일반 공격
창으로 최대 5번 공격한다.

강공격
일정 스태미나를 소모해 전방으로 돌진하며 경로상의 적에게 피해를 준다.

낙하 공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다.
`
      },
      {
        name: "죄를 삼키는 고해",
        type: "원소스킬",
        description: `
로자리아가 빠르게 타깃의 뒤편으로 이동한 후 창으로 찌르고 휘둘러 얼음 원소 피해를 준다.
몸집이 비교적 큰 적 뒤로는 이동할 수 없다.

로자리아 수녀에게 하는 고해성사로는 죄를 용서받을 수 없다. 오히려 죄가 무거울수록, 뼈에 사무치는 처벌이 내려질 것이다.
`
      },
      {
        name: "죽음의 성례",
        type: "원소폭발(필살기)",
        description: `
로자리아만의 기도 의식. 무기를 휘둘러 주변의 적을 공격한 후, 혹한이 응집된 얼음 창으로 지면을 내리찍어 얼음 원소 피해를 준다.
얼음 창은 존재하는 동안 간헐적으로 한기를 방출하여 주변의 적에게 얼음 원소 피해를 준다.

심판은 매우 번거롭기에 심판 과정을 건너뛰고 바로 종부성사를 거행한다. 원래부터 바람의 신을 믿지 않는 로자리아에게 이 일은 아주 간단하다.
`
      }
    ],
    passive: [
      {
        name: "참회의 경청자",
        ascension: 1,
        description: "죄를 삼키는 고해로 타깃의 뒤에서 공격할 시, 로자리아의 치명타 확률이 12% 증가한다. 지속 시간: 5초"
      },
      {
        name: "어둠 속 조력자",
        ascension: 4,
        description: "죽음의 성례 발동 시, 로자리아 치명타 확률의 15%에 기반하여 주변에 있는 파티 내 모든 캐릭터의 (로자리아 본인 제외) 치명타 확률이 증가한다. 지속 시간: 10초.\n이러한 방식으로 증가한 치명타 확률은 15%를 넘을 수 없다."
      },
      {
        name: "야행",
        ascension: -1,
        description: `야간(18시~6시)에 파티 내 모든 캐릭터의 이동속도가 10% 증가한다.
해당 효과는 비경, 영역 토벌, 나선 비경에서 적용되지 않으며, 같은 효과의 고유 특성과 중첩되지 않는다.
`
      }
    ],
    constellation: [
      {
        id: 1,
        name: "죄의 속삭임",
        description: `로자리아가 공격 시 치명타가 발생하면, 자신의 공격 속도가 10% 증가하고, 일반 공격으로 가하는 피해가 10% 증가한다. 지속시간: 4초`
      },
      {
        id: 2,
        name: "축복이 끊긴 땅",
        description: `죽음의 성례로 생성된 얼음 창의 지속 시간이 4초 증가한다.`
      },
      {
        id: 3,
        name: "고해의 의식",
        description: `죄를 삼키는 고해의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "고통의 은혜",
        description: `죄를 삼키는 고해로 치명타를 입히면, 로자리아 자신의 원소 에너지가 5pt 회복된다.
죄를 삼키는 고해는 해당 효과를 매번 최대 1번 발동한다.`
      },
      {
        id: 5,
        name: "종부성사",
        description: `죽음의 성례 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "재판의 대리인",
        description: `죽음의 성례 공격은 적의 물리 내성을 20% 감소시킨다. 지속 시간: 10초`
      }
    ]
  },
  "유라": {
    name: "유라",
    keyword: ["eula"],
    icon: "https://paimon.moe/images/characters/eula.png",
    expurl: "https://www.youtube.com/watch?v=447fxwKG6I8",
    pvurl: "https://www.youtube.com/watch?v=xUNVdIC_IDE&ab_channel=%EC%9B%90%EC%8B%A0",
    playurl: "https://www.youtube.com/watch?v=KMGcU-t0lv4",
    gender: "여성",
    birth: "10/25",
    affiliation: "페보니우스 기사단",
    star: "물보라자리",
    level: 5,
    weapon: "양손검",
    element: "얼음",
    build: [
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "물리 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해", 
          "원소 충전 효율",
          "공격력%", 
          "공격력"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["송뢰가 울릴 무렵", "늑대의 말로", "무공의 검", "천공의 긍지", "이무기 검", "흑암참도", "천암고검", "고화 프로토타입", "설장의 성은", "비천대어검"],
        artifacts: [
          "창백의 화염",
          ["창백의 화염", "피에 물든 기사도"],
          ["창백의 화염", "피에 물든 기사도", "공격력 +18% 세트"],
          "검투사의 피날레",
          ["검투사의 피날레", "추억의 시메카자리"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "서늘한 빙옥 가루",
            amount: 1
          },
          {
            name: "민들레 씨앗",
            amount: 3
          },
          {
            name: "부서진 가면",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 3
          },
          {
            name: "응결의 꽃",
            amount: 2
          },
          {
            name: "민들레 씨앗",
            amount: 10
          },
          {
            name: "부서진 가면",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 6
          },
          {
            name: "응결의 꽃",
            amount: 4
          },
          {
            name: "민들레 씨앗",
            amount: 20
          },
          {
            name: "오염된 가면",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 3
          },
          {
            name: "응결의 꽃",
            amount: 8
          },
          {
            name: "민들레 씨앗",
            amount: 30
          },
          {
            name: "오염된 가면",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 6
          },
          {
            name: "응결의 꽃",
            amount: 12
          },
          {
            name: "민들레 씨앗",
            amount: 45
          },
          {
            name: "불길한 가면",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "서늘한 빙옥",
            amount: 6
          },
          {
            name: "응결의 꽃",
            amount: 20
          },
          {
            name: "민들레 씨앗",
            amount: 60
          },
          {
            name: "불길한 가면",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 가르침",
            amount: 3
          },
          {
            name: "부서진 가면",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 2
          },
          {
            name: "오염된 가면",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 4
          },
          {
            name: "오염된 가면",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 6
          },
          {
            name: "오염된 가면",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 9
          },
          {
            name: "오염된 가면",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 4
          },
          {
            name: "불길한 가면",
            amount: 4
          },
          {
            name: "용왕의 면류관",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 6
          },
          {
            name: "불길한 가면",
            amount: 6
          },
          {
            name: "용왕의 면류관",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 12
          },
          {
            name: "불길한 가면",
            amount: 9
          },
          {
            name: "용왕의 면류관",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 16
          },
          {
            name: "불길한 가면",
            amount: 12
          },
          {
            name: "용왕의 면류관",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 1030,
                atk: 27,
                def: 58,
                bonus: 50
            },
            end: {
                hp: 2671,
                atk: 69,
                def: 152,
                bonus: 50
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3554,
                atk: 92,
                def: 202,
                bonus: 50
            },
            end: {
                hp: 5317,
                atk: 138,
                def: 302,
                bonus: 50
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5944,
                atk: 154,
                def: 337,
                bonus: 59.6
            },
            end: {
                hp: 6839,
                atk: 177,
                def: 388,
                bonus: 59.6
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 7675,
                atk: 198,
                def: 436,
                bonus: 69.2
            },
            end: {
                hp: 8579,
                atk: 222,
                def: 487,
                bonus: 69.2
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 9207,
                atk: 238,
                def: 523,
                bonus: 69.2
            },
            end: {
                hp: 10119,
                atk: 262,
                def: 574,
                bonus: 69.2
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 10746,
                atk: 278,
                def: 610,
                bonus: 78.8
            },
            end: {
                hp: 11669,
                atk: 302,
                def: 662,
                bonus: 78.8
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 12296,
                atk: 318,
                def: 698,
                bonus: 88.4
            },
            end: {
                hp: 13226,
                atk: 342,
                def: 751,
                bonus: 88.4
            }
        }
    ],
    bonus: "치명타 피해",
    bonusType: "percent",
    skills: [
      {
        name: "페보니우스 검술 · 왕실",
        type: "일반공격",
        description: `
일반 공격
검으로 최대 5번 공격한다.

강공격
스태미나를 지속해서 소모해 빠른 속도로 연속 베기를 발동한다.
강공격 종료 시 추가로 한 번 더 강력하게 휘두른다.

낙하 공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다.
        `
      },
      {
        name: "얼음 파도의 와류",
        type: "원소스킬",
        description: `
얼음과 같은 한기, 날렵한 검무.

짧은 터치
검을 빠르게 휘둘러 얼음 원소 피해를 준다.
적을 명중하면 유라는 냉혹한 마음 효과를 1스택 얻는다. 최대 중첩수: 2회. 0.3초마다 1번만 발동한다.

냉혹한 마음
유라의 경직 저항력과 방어력이 상승한다.

홀드
냉혹한 마음 효과를 모두 소모하고 대검을 앞으로 휘둘러 전방의 적에게 얼음 원소 피해를 준다.
냉혹한 마음 효과를 소모하면, 주변에 있는 적의 물리 내성과 얼음 원소 내성이 감소한다.
소모된 냉혹한 마음은 스택당 얼음 소용돌이의 검 한 자루로 전환되어 주변의 적에게 얼음 원소 피해를 준다.
        `
      },
      {
        name: "파도를 얼리는 광검",
        type: "원소폭발(필살기)",
        description: `
맹렬하게 대검을 휘둘러 주변의 적에게 얼음 원소 피해를 주며, 유라를 따르는 빛의 검을 만들어 낸다. 빛의 검 지속시간: 최대 7초.
지속 시간 동안 빛의 검은 유라의 경직 저항력을 높이고, 유라가 일반 공격, 원소전투 스킬 혹은 원소폭발로 적에게 피해를 줄 때 빛의 검 에너지가 쌓인다. 에너지는 0.1초마다 1스택만 쌓인다.
지속 시간이 끝나면 빛의 검은 추락한 뒤 폭발해 주변의 적에게 물리 피해를 준다.
해당 피해는 현재 쌓인 빛의 검 에너지 스택에 의해 결정된다.
유라가 퇴장할 떄 빛의 검은 바로 폭발한다.
      `
      }
    ],
    passive: [
      {
        name: "소용돌이치는 서리",
        ascension: 1,
        description: `홀드하여 얼음 파도의 와류 발동 시 한번에 냉혹한 마음 효과를 2스택 소모하면, 즉시 폭발하는 부서진 빛의 검이 생성된다.
이는 파도를 얼리는 광검으로 생성된 빛의 검 기초 피해 50%에 해당하는 물리 피해를 준다.`
      },
      {
        name: "솟구치는 전투의 욕망",
        ascension: 4,
        description: "파도를 얼리는 광검 발동 시, 얼음 파도의 와류의 재발동 대기시간이 초기화되고, 유라에게 냉혹한 마음 효과를 1스택 부여한다."
      },
      {
        name: "귀족의 자아성찰",
        ascension: -1,
        description: "캐릭터 특성 소재 합성 시 10%의 확률로 생산량의 2배를 획득한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "빛의 환상",
        description: `얼음 파도의 와류의 냉혹한 마음 효과를 소모하면, 유라의 물리 피해 보너스가 30% 증가한다. 지속 시간: 6초.
냉혹한 마음을 1스택 소모할 때마다 해당 효과의 지속 시간이 6초 증가하며, 최대 18초까지 증가한다.`
      },
      {
        id: 2,
        name: "물보라 소녀",
        description: `얼음 파도의 와류 차지 재사용 대기시간이 짧은 터치 재사용 대기시간과 같아질 만큼 감소한다.`
      },
      {
        id: 3,
        name: "로렌스의 혈통",
        description: `파도를 얼리는 광검의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "열등감 속 고집",
        description: "HP가 50% 미만인 적에게 빛의 검이 가하는 피해가 25% 증가한다."
      },
      {
        id: 5,
        name: "기사의 소양",
        description: `얼음 파도의 와류의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "고귀한 자의 의무",
        description: "파도를 얼리는 광검에 의해 생성된 빛의 검은 즉시 에너지를 5스택 획득한다. 일반 공격, 원소전투 스킬, 혹은 원소폭발로 적에게 피해를 줘서 에너지 스택을 쌓으면 50%의 확률로 1스택이 더 쌓인다."
      }
    ]
  },
  "아야카": {
    name: "카미사토 아야카",
    icon: "https://paimon.moe/images/characters/kamisato_ayaka.png",
    expurl: "https://youtu.be/AtsYNre8JBc",
    pvurl: "https://youtu.be/00m2V1jGNLE",
    playurl: "https://www.youtube.com/watch?v=Ot1d7g5Q-hE",
    gender: "여성",
    birth: "9/28",
    affiliation: "야시로 봉행",
    star: "설학자리",
    level: 5,
    weapon: "한손검",
    element: "얼음",
    build: [
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "얼음 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 피해", 
          "공격력%", 
          "원소 충전 효율", 
          "치명타 확률",
          "공격력"
        ],
        priority: ["필살기", "일반 공격", "원소 스킬"],
        weapons: ["안개를 가르는 회광", "참봉의 칼날", "반암결록", "매의 검", "천공의 검", "흑암 장검", "칠흑검", "아메노마 카게우치가타나", "피리검", "여명신검"],
        artifacts: [
          "얼음바람 속에서 길잃은 용사",
          ["얼음바람 속에서 길잃은 용사", "공격력 +18% 세트"],
          ["검투사의 피날레", "추억의 시메카자리"],
          ["얼음바람 속에서 길잃은 용사", "옛 왕실의 의식"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "서늘한 빙옥 가루",
            amount: 1
          },
          {
            name: "벚꽃 수구",
            amount: 3
          },
          {
            name: "오래된 코등이",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 3
          },
          {
            name: "영구 장치의 코어",
            amount: 2
          },
          {
            name: "벚꽃 수구",
            amount: 10
          },
          {
            name: "오래된 코등이",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "서늘한 빙옥 조각",
            amount: 6
          },
          {
            name: "영구 장치의 코어",
            amount: 4
          },
          {
            name: "벚꽃 수구",
            amount: 20
          },
          {
            name: "카게우치 코등이",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 3
          },
          {
            name: "영구 장치의 코어",
            amount: 8
          },
          {
            name: "벚꽃 수구",
            amount: 30
          },
          {
            name: "카게우치 코등이",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "서늘한 빙옥 덩이",
            amount: 6
          },
          {
            name: "영구 장치의 코어",
            amount: 12
          },
          {
            name: "벚꽃 수구",
            amount: 45
          },
          {
            name: "명검 코등이",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "서늘한 빙옥",
            amount: 6
          },
          {
            name: "영구 장치의 코어",
            amount: 20
          },
          {
            name: "벚꽃 수구",
            amount: 60
          },
          {
            name: "명검 코등이",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "풍아의 가르침",
            amount: 3
          },
          {
            name: "오래된 코등이",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "풍아의 인도",
            amount: 2
          },
          {
            name: "카게우치 코등이",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "풍아의 인도",
            amount: 4
          },
          {
            name: "카게우치 코등이",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "풍아의 인도",
            amount: 6
          },
          {
            name: "카게우치 코등이",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "풍아의 인도",
            amount: 9
          },
          {
            name: "카게우치 코등이",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "풍아의 철학",
            amount: 4
          },
          {
            name: "명검 코등이",
            amount: 4
          },
          {
            name: "혈옥의 가지",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "풍아의 철학",
            amount: 6
          },
          {
            name: "명검 코등이",
            amount: 6
          },
          {
            name: "혈옥의 가지",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "풍아의 철학",
            amount: 12
          },
          {
            name: "명검 코등이",
            amount: 9
          },
          {
            name: "혈옥의 가지",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "풍아의 철학",
            amount: 16
          },
          {
            name: "명검 코등이",
            amount: 12
          },
          {
            name: "혈옥의 가지",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 1001,
                atk: 27,
                def: 61,
                bonus: 50
            },
            end: {
                hp: 2597,
                atk: 69,
                def: 158,
                bonus: 50
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3455,
                atk: 92,
                def: 211,
                bonus: 50
            },
            end: {
                hp: 5170,
                atk: 138,
                def: 315,
                bonus: 50
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5779,
                atk: 154,
                def: 352,
                bonus: 59.6
            },
            end: {
                hp: 6649,
                atk: 177,
                def: 388,
                bonus: 59.6
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 7462,
                atk: 198,
                def: 455,
                bonus: 69.2
            },
            end: {
                hp: 8341,
                atk: 222,
                def: 509,
                bonus: 69.2
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 8951,
                atk: 238,
                def: 546,
                bonus: 69.2
            },
            end: {
                hp: 9838,
                atk: 262,
                def: 600,
                bonus: 69.2
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 10448,
                atk: 278,
                def: 637,
                bonus: 78.8
            },
            end: {
                hp: 11345,
                atk: 302,
                def: 692,
                bonus: 78.8
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 11954,
                atk: 318,
                def: 729,
                bonus: 88.4
            },
            end: {
                hp: 12858,
                atk: 342,
                def: 784,
                bonus: 88.4
            }
        }
    ],
    bonus: "치명타 피해",
    bonusType: "percent",
    skills: [
      {
        name: "카미사토류 · 경",
        type: "일반공격",
        description: `
  일반 공격
  검으로 최대 5번 공격한다.
  강공격
  일정 스태미나를 소모해 거합 중 연속으로 검풍을 방출한다.
  낙하 공격
  공중에서 땅을 내려찍어 경로상의 적을 공격하고 착지 시 범위 피해를 준다.
        `
      },
      {
        name: "카미사토류 · 얼음꽃",
        type: "원소스킬",
        description: `
  활짝 핀 얼음꽃을 소환한 뒤 주위의 적을 공중에 띄우고 얼음 원소 범위 피해를 준다.
        `
      },
      {
        name: "카미사토류 · 싸락눈 걸음",
        type: "대시 대체",
        description: `
  대시를 대체한다
  부서진 얼음에 몸을 숨긴 후 스태미나를 소모하여 빠른 속도로 이동한다. 카미사토 아야카는 싸락눈 걸음 상태에서 수면 위를 빠르게 이동할 수 있다.
  싸락눈 걸음 상태 종료 후 모습을 드러낼 때 아래의 효과가 발생한다:
  · 얼음의 힘을 방출해 주변의 적에게 얼음 원소를 부착한다.
  · 한기를 검에 모아 카미사토 아야카는 짧은 시간 동안 얼음 원소 부여 효과를 얻게 된다.
        `
      },
      {
        name: "카미사토류 · 멸망의 서리",
        type: "원소폭발(필살기)",
        description: `
  독특한 자태로 차가운 서리를 모아 앞으로 나아가는 서리의 관문을 방출한다.
  서리의 관문
  · 칼날처럼 날카로운 서리 바람으로 지속해서 접촉한 적을 베어 얼음 원소 피해를 준다.
  · 지속 시간이 끝나면 피어나 얼음 원소 범위 피해를 준다.
      `
      }
    ],
    passive: [
      {
        name: "천죄국죄 진사",
        ascension: 1,
        description: `카미사토류 · 얼음꽃 발동 후 6초 동안 카미사토 아야카의 일반 공격과 강공격으로 가하는 피해가 30% 증가한다.`
      },
      {
        name: "한천선명 축사",
        ascension: 4,
        description: `카미사토류 · 싸락눈 걸음이 종료될 때 방출되는 차가운 얼음이 적을 명중하면, 카미사토 아야카는 아래의 효과를 획득한다:
  · 스태미나를 10pt 회복한다.
  · 얼음 원소 피해 보너스를 18% 획득한다. 지속 시간: 10초`
      },
      {
        name: "감정 노하우",
        ascension: -1,
        description: "무기 돌파 소재를 합성 시 10%의 확률로 생산량의 2배를 얻는다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "서리에 검게 물든 벚꽃",
        description: `카미사토 아야카의 일반 공격 혹은 강공격이 적에게 얼음 원소 피해를 주면, 50%의 확률로 카미사토류 · 얼음꽃의 재사용 대기시간이 0.3초 감소한다. 해당 효과는 0.1초마다 1회만 발동한다.`
      },
      {
        id: 2,
        name: "삼중 서리 관문",
        description: `카미사토류 · 멸망의 서리 발동 시 추가로 작은 규모의 서리의 관문 2개를 생성해 각각 기존 공격력 20%의 피해를 준다.`
      },
      {
        id: 3,
        name: "흩날리는 카미후부키",
        description: `카미사토류 · 멸망의 서리의 스킬 레벨+3
  최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "영고성쇠",
        description: "카미사토류 · 멸망의 서리로 생성된 서리의 관문이 가하는 피해를 받은 적의 방어력이 30% 감소한다. 지속 시간: 6초"
      },
      {
        id: 5,
        name: "화운종월경",
        description: `카미사토류 · 얼음꽃의 스킬 레벨+3
  최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "물에 비친 달",
        description: `카미사토 아야카가 10초마다 「살얼음의 춤」 상태를 획득해 강공격으로 가하는 피해가 298% 증가한다.
  살얼음의 춤 효과는 강공격이 적을 명중하고 0.5초 후에 사라지며 다시 카운트 다운이 시작된다.`
      }
    ]
  },
  "응광": {
    name: "응광",
    keyword: ["ningguang"],
    icon: "https://paimon.moe/images/characters/ningguang.png",
    gender: "여성",
    birth: "08/26",
    affiliation: "리월 칠성",
    star: "기형의자리",
    level: 4,
    weapon: "법구",
    element: "바위",
    build: [
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": "공격력%",
          "잔": "바위 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해", 
          "공격력%", 
          "원소 충전 효율", 
          "공격력",
          "HP%"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["속세의 자물쇠", "천공의 두루마리", "사풍 원서", "도도코 이야기집", "음유시인의 악장", "일월의 정수", "흑암 홍옥", "소심", "인동의 열매"],
        artifacts: [
          ["검투사의 피날레", "유구한 반암"],
          "날아오르는 유성",
          ["유구한 반암", "옛 왕실의 의식"],
          ["검투사의 피날레", "옛 왕실의 의식"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "단단한 황옥 가루",
            amount: 1
          },
          {
            name: "유리백합",
            amount: 3
          },
          {
            name: "신병의 휘장",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "단단한 황옥 조각",
            amount: 3
          },
          {
            name: "현암의 탑",
            amount: 2
          },
          {
            name: "유리백합",
            amount: 10
          },
          {
            name: "신병의 휘장",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "단단한 황옥 조각",
            amount: 6
          },
          {
            name: "현암의 탑",
            amount: 4
          },
          {
            name: "유리백합",
            amount: 20
          },
          {
            name: "사관의 휘장",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "단단한 황옥 덩이",
            amount: 3
          },
          {
            name: "현암의 탑",
            amount: 8
          },
          {
            name: "유리백합",
            amount: 30
          },
          {
            name: "사관의 휘장",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "단단한 황옥 덩이",
            amount: 6
          },
          {
            name: "현암의 탑",
            amount: 12
          },
          {
            name: "유리백합",
            amount: 45
          },
          {
            name: "위관의 휘장",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "단단한 황옥",
            amount: 6
          },
          {
            name: "현암의 탑",
            amount: 20
          },
          {
            name: "유리백합",
            amount: 60
          },
          {
            name: "위관의 휘장",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 가르침",
            amount: 3
          },
          {
            name: "신병의 휘장",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 인도",
            amount: 2
          },
          {
            name: "사관의 휘장",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "번영의 인도",
            amount: 4
          },
          {
            name: "사관의 휘장",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 인도",
            amount: 6
          },
          {
            name: "사관의 휘장",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "번영의 인도",
            amount: 9
          },
          {
            name: "사관의 휘장",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 철학",
            amount: 4
          },
          {
            name: "위관의 휘장",
            amount: 4
          },
          {
            name: "북풍의 영혼상자",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "번영의 철학",
            amount: 6
          },
          {
            name: "위관의 휘장",
            amount: 6
          },
          {
            name: "북풍의 영혼상자",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "번영의 철학",
            amount: 12
          },
          {
            name: "위관의 휘장",
            amount: 9
          },
          {
            name: "북풍의 영혼상자",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "번영의 철학",
            amount: 16
          },
          {
            name: "위관의 휘장",
            amount: 12
          },
          {
            name: "북풍의 영혼상자",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 821,
                atk: 18,
                def: 48,
                bonus: 0
            },
            end: {
                hp: 2108,
                atk: 46,
                def: 123,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 2721,
                atk: 59,
                def: 159,
                bonus: 0
            },
            end: {
                hp: 4.076,
                atk: 88,
                def: 239,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 4512,
                atk: 98,
                def: 264,
                bonus: 6
            },
            end: {
                hp: 5189,
                atk: 113,
                def: 304,
                bonus: 6
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 5770,
                atk: 125,
                def: 338,
                bonus: 12
            },
            end: {
                hp: 6448,
                atk: 140,
                def: 378,
                bonus: 12
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 6884,
                atk: 149,
                def: 403,
                bonus: 12
            },
            end: {
                hp: 7561,
                atk: 164,
                def: 443,
                bonus: 12
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 7996,
                atk: 174,
                def: 468,
                bonus: 18
            },
            end: {
                hp: 8674,
                atk: 188,
                def: 508,
                bonus: 18
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 9110,
                atk: 198,
                def: 534,
                bonus: 24
            },
            end: {
                hp: 9787,
                atk: 212,
                def: 573,
                bonus: 24
            }
        }
    ],
    bonus: "바위 원소 피해 보너스",
    bonusType: "percent",
    skills: [
      {
        name: "천금투",
        type: "일반공격",
        description: `
일반공격
보석을 발사해 바위 원소 피해를 준다. 명중 시 응광에게 별을 한 개 부여한다.
(일반공격피해:28.0%)

강공격
스태미나를 소모해 거대한 보석을 발사하여 바위 원소 피해를 준다. 만약 응광이 별을 보유하고 있을 경우 강공격 발동 시 모든 별을 함께 발사해 추가 피해를 준다.
(강공격피해:174%,별피해:개당 49.6%,강공격 스태미나 소모:50.0pt)

낙하 공격
공중에서 바위 결정의 힘을 모은 후 지면을 강타해 경로상의 적을 공격하고 땅에 닿으면 바위 원소 범위 피해를 준다.
(낙하 기간 피해:56.8%,저공/고공 추락충격피해:114%/142%)
`
      },
      {
        name: "선기 병풍",
        type: "원소스킬",
        description: `
황금,흑요암과 강자의 여유로 단단한 선기 병풍을 만들어내 바위 원소 범위 피해를 준다.

선기병풍
★적이 발사하는 모든 투사체를 막아낸다.
★선기 병풍은 응광의 HP 최대치를 일정 비율 계승한다.

선기 병풍은 바위 원소 창조물로 인식되며 일부 공격을 막을 수 있고 등반할 수 없다. 선기 병풍은 동시에 1개만 존재할 수 있다.
(HP계승:50.1%, 스킬피해:230%, 재사용 대기시간:12.0초)
`
      },
      {
        name: "천권 붕옥",
        type: "원소폭발(필살기)",
        description: `
응광은 자신의 주변에 수많은 보석을 모았다가 순식간에 분산시켜 주변의 적을 추적해 대량의 바위 원소 피해를 준다. 근처에 선기 병풍이 존재할 때 천권 붕옥을 발동하면 선기 병풍이 추가로 보석을 발사해 함께 공격한다.

(보석피해:개당87.0%,재사용 대기시간:12.0초,원소에너지:40)
`
      }
    ],
    passive: [
      {
        name: "전세역전",
        ascension: 1,
        description: "별을 보유할 시 응광의 강공격은 스태미나를 소모하지 않는다."
      },
      {
        name: "사전 준비",
        ascension: 4,
        description: "선기 병풍을 통과하는 캐릭터는 바위 원소 피해 보너스를 12% 획득한다. 지속 시간:10초"
      },
      {
        name: "기석 보물록",
        ascension: -1,
        description: "미니맵에 주위의 광맥(철광,백철,수정,마법 수정) 위치가 나타난다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "부서지는 파편",
        description: `일반 공격 명중 시 범위 피해를 준다.`
      },
      {
        id: 2,
        name: "곤륜을 억누르는 선기",
        description: `선기 병풍 파열 시 재사용 대기시간이 초기화된다.
해당 효과는 6초마다 1번 발동한다.`
      },
      {
        id: 3,
        name: "천권 강림",
        description: `천권 붕옥의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "공수전환",
        description: `선기 병풍 주변 캐릭터의 모든 원소 내성이 10% 증가한다.`
      },
      {
        id: 5,
        name: "천개의 선기 병풍",
        description: `선기 병풍의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "칠성의 아름답고 찬란한 빛",
        description: `천권 붕옥 발동 시 응광의 주변에 7개의 별이 생성된다.`
      }
    ]
  },
  "노엘": {
    name: "노엘",
    keyword: ["noelle"],
    icon: "https://paimon.moe/images/characters/noelle.png",
    gender: "여성",
    birth: "03/21",
    affiliation: "페보니우스 기사단",
    star: "심호자리",
    level: 4,
    weapon: "양손검",
    element: "바위",
    build: [
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": ["공격력%", "방어력%"],
          "잔": "바위 원소 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해", 
          "방어력%", 
          "공격력%", 
          "원소 충전 효율",
          "방어력", 
          "공격력"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["이무기 검", "무공의 검", "늑대의 말로", "천공의 긍지", "흑암참도", "설장의 성은", "고화 프로토타입", "백영검"],
        artifacts: [
          "날아오르는 유성",
          "검투사의 피날레"
        ]
      },
      {
        type: "서포터", 
        main_stats: {
          "시계": "방어력%",
          "잔": "방어력%",
          "모자": "치유 보너스"
        },
        sub_stats: [
          "방어력%",
          "방어력", 
          "원소 충전 효율"
        ],
        priority: ["원소 스킬", "필살기", "일반 공격"],
        weapons: ["백영검", "제례 대검", "천공의 긍지", "페보니우스 대검"],
        artifacts: [
          "사랑받는 소녀",
          ["수호자의 마음", "사랑받는 소녀"],
          ["날아오르는 유성", "사랑받는 소녀"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "단단한 황옥 가루",
            amount: 1
          },
          {
            name: "낙락베리",
            amount: 3
          },
          {
            name: "부서진 가면",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "단단한 황옥 조각",
            amount: 3
          },
          {
            name: "현암의 탑",
            amount: 2
          },
          {
            name: "낙락베리",
            amount: 10
          },
          {
            name: "부서진 가면",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "단단한 황옥 조각",
            amount: 6
          },
          {
            name: "현암의 탑",
            amount: 4
          },
          {
            name: "낙락베리",
            amount: 20
          },
          {
            name: "오염된 가면",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "단단한 황옥 덩이",
            amount: 3
          },
          {
            name: "현암의 탑",
            amount: 8
          },
          {
            name: "낙락베리",
            amount: 30
          },
          {
            name: "오염된 가면",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "단단한 황옥 덩이",
            amount: 6
          },
          {
            name: "현암의 탑",
            amount: 12
          },
          {
            name: "낙락베리",
            amount: 45
          },
          {
            name: "불길한 가면",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "단단한 황옥",
            amount: 6
          },
          {
            name: "현암의 탑",
            amount: 20
          },
          {
            name: "낙락베리",
            amount: 60
          },
          {
            name: "불길한 가면",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 가르침",
            amount: 3
          },
          {
            name: "부서진 가면",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 2
          },
          {
            name: "오염된 가면",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 4
          },
          {
            name: "오염된 가면",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 인도",
            amount: 6
          },
          {
            name: "오염된 가면",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "투쟁의 인도",
            amount: 9
          },
          {
            name: "오염된 가면",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 4
          },
          {
            name: "불길한 가면",
            amount: 4
          },
          {
            name: "동풍의 발톱",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 6
          },
          {
            name: "불길한 가면",
            amount: 6
          },
          {
            name: "동풍의 발톱",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "투쟁의 철학",
            amount: 12
          },
          {
            name: "불길한 가면",
            amount: 9
          },
          {
            name: "동풍의 발톱",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "투쟁의 철학",
            amount: 16
          },
          {
            name: "불길한 가면",
            amount: 12
          },
          {
            name: "동풍의 발톱",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 1012,
                atk: 16,
                def: 67,
                bonus: 0
            },
            end: {
                hp: 2600,
                atk: 41,
                def: 172,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3356,
                atk: 53,
                def: 222,
                bonus: 0
            },
            end: {
                hp: 5027,
                atk: 80,
                def: 333,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5564,
                atk: 88,
                def: 368,
                bonus: 7.5
            },
            end: {
                hp: 6400,
                atk: 101,
                def: 423,
                bonus: 7.5
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 7117,
                atk: 113,
                def: 471,
                bonus: 15
            },
            end: {
                hp: 7953,
                atk: 126,
                def: 526,
                bonus: 15
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 8490,
                atk: 134,
                def: 562,
                bonus: 15
            },
            end: {
                hp: 9325,
                atk: 148,
                def: 617,
                bonus: 15
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 9862,
                atk: 156,
                def: 652,
                bonus: 22.5
            },
            end: {
                hp: 10698,
                atk: 169,
                def: 708,
                bonus: 22.5
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 11235,
                atk: 178,
                def: 743,
                bonus: 30
            },
            end: {
                hp: 12071,
                atk: 191,
                def: 799,
                bonus: 30
            }
        }
    ],
    bonus: "방어력",
    bonusType: "percent",
    skills: [
      {
        name: "페보니우스검술º메이드",
        type: "일반공격",
        description: `
일반공격
검으로 최대 4번 공격한다.
(1단:79.1%,2단:73.4%,3단:86.3%,4단:113%)

강공격
스태미나를 지속해서 소모해 검을 휘두르며 주변의 적을 공격한다. 회전 종료 시 추가로 한 번 더 강력하게 휘두른다.
(강공격 순환 피해:50.7%,강공격 종결 피해:90.5%,강공격 스태미나 소모:초당 40.0pt,최대지속시간:5.0초)

낙하공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 땅데 닿으면 범위 피해를 준다.
(낙하기간피해:74.6%,저공/고공 추락 충격 피해:149%/186%)
`
      },
      {
        name: "호심경",
        type: "원소스킬",
        description: `
몸을 지키는 바위 갑주를 소환해 주변의 적에게 바위 원소 피해를 주고 보호막을 생성한다. 피해 흡수량은 노엘의 방어력의 영향을 받는다. 보호막은 아래의 효과가 발동한다:

⊙노엘의 일반 공격과 강공격이 명중 시 일정 확률로 파티 내 모든 캐릭터의 HP를 회복한다. 바위 원소 피해에 대해 250%의 흡수 효과가 있다.

치유 효과 발동 시 치유량은 노엘의 방어력의 영향을 받는다.

(스킬피해:방어력의 120%,흡수량:방어력의 160%+770,치유량 :방어력의 21.3%+103,치유발동확률:50%,지속시간:12.0초,재사용대기시간:24.0초)
`

      },
      {
        name: "대청소",
        type: "원소폭발(필살기)",
        description: `반석의 힘을 무기에 모아 주변의 적에게 충격을 주고 한차례 큰 범위 공격을 발동해 바위 원소 피해를 준다. 발동 후 아래의 효과를 가진다 :
⊙노엘의 공격 범위가 증가한다.
⊙공격이 바위 원소 피해로 전환된다.
⊙노엘의 방어력에 기반하여 공격력이 상승한다.

(버스트 피해 : 67.2%, 스킬 피해 : 92.8%, 공격력 상승 : 방어력의 40%, 지속 시간 : 15.0초, 재사용 대기시간 : 15.0초, 원소 에너지 : 60)
`
      }
    ],
    passive: [
      {
        name: "전심전의",
        ascension: 1,
        description: "노엘이 대기 상태일 때 필드 위 캐릭터의 HP가 30% 미만이면 자동으로 발동한다: 필드 위 캐릭터에게 노엘 방어력의 400%만큼의 피해를 흡수할 수 있는 보호막을 생성한다. 지속 시간: 20초. 해당 효과는 60초마다 1번 발동한다."
      },
      {
        name: "산뜻깔끔",
        ascension: 4,
        description: "일반 공격 혹은 강공격이 4번 명중할 때마다 호심경의 재사용 대기시간이 1초 감소한다.\n동시에 다수의 적을 명중 시 1회 명중으로 간주한다."
      },
      {
        name: "메이드의 태도",
        ascension: -1,
        description: "방어류 요리를 완벽 요리 시 12%의 확률로 생산량이 2배로 늘어난다. "
      }
    ],
    constellation: [
      {
        id: 1,
        name: "지원은 저한테 맡기세요",
        description: "대청소와 호심경이 동시에 발동된 상태일 때 호심경의 HP 회복 효과 발동 확률이 100%까지 증가한다."
      },
      {
        id: 2,
        name: "선풍의 메이드",
        description: "노엘의 강공격 스태미나 소모량이 20% 감소하고 피해가 15% 증가한다."
      },
      {
        id: 3,
        name: "메이드는 다치지 않어요",
        description: "호심경의 스킬 레벨+3\n최대 Lv.15까지 상승"
      },
      {
        id: 4,
        name: "나중에 청소할게요",
        description: "호심경 효과가 종료되거나 피해를 받아 파괴되면 주변의 적에게 공격력 400%의 바위 원소 피해를 준다."
      },
      {
        id: 5,
        name: "기사단 청소 전문가",
        description: "대청소의 스킬 레벨+3\n최대 Lv.15까지 상승"
      },
      {
        id: 6,
        name: "티끌 하나라도 용서할 수 없어",
        description: "대청소 발동 시 추가로 노엘 방어력의 50%만큼 공격력이 증가한다.\n이외에도 스킬 지속 시간 내에 적 1기를 처치할 때마다 지속 시간이 1초 늘어난다. 최대 지속 시간: 10초"
      }
    ]
  },
  "종려": {
    name: "종려",
    keyword: ["zhongli"],
    icon: "https://paimon.moe/images/characters/zhongli.png",
    expurl: "https://www.youtube.com/watch?v=-cu3KHDfOGI&list=PLQBypYmxS6LSoV-ZMcPmyG0qur5jcMcQv&index=7&ab_channel=%EC%9B%90%EC%8B%A0",
    pvurl: "https://www.youtube.com/watch?v=PTDujeNdha4&list=PLQBypYmxS6LReK6-H2wUKs0geDHMGMpSp&index=4&ab_channel=%EC%9B%90%EC%8B%A0",
    playurl: "https://www.youtube.com/watch?v=ck8CBmeLjVQ&list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA&index=7&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "남성",
    birth: "12/31",
    affiliation: "리월항",
    star: "암왕제군자리",
    level: 5,
    weapon: "장병기",
    element: "바위",
    build: [
      {
        type: "서포터", 
        main_stats: {
          "시계": ["HP%", "공격력%"],
          "잔": ["바위 원소 피해", "HP%"],
          "모자": ["치명타 확률", "치명타 피해", "HP%"]
        },
        sub_stats: [
          "치명타 확률 / 피해", 
          "HP%", 
          "공격력%", 
          "원소 충전 효율",
          "공격력", 
          "HP"
        ],
        priority: ["필살기", "원소 스킬", "일반 공격"],
        weapons: ["호마의 지팡이", "화박연", "관홍의 창", "결투의 창", "천공의 마루", "페보니우스 장창", "흑암창", "별의 낫 프로토타입", "흑술창", "미늘창"],
        artifacts: [
          "견고한 천암",
          ["유구한 반암", "옛 왕실의 의식"],
          "절연의 기치",
          "옛 왕실의 의식",
          ["유구한 반암", "공격력 +18% 세트"],
          ["유구한 반암", "견고한 천암"],
          "유구한 반암",
          "유배자"
        ]
      },
      {
        type: "메인 딜러", 
        main_stats: {
          "시계": ["공격력%", "HP%"],
          "잔": "물리 피해",
          "모자": "치명타 확률 / 피해"
        },
        sub_stats: [
          "치명타 확률 / 피해",
          "공격력%",
          "HP%", 
          "원소 충전 효율",
          "공격력"
        ],
        priority: ["일반 공격", "필살기", "원소 스킬"],
        weapons: ["유월창", "화박연", "호마의 지팡이", "관홍의 창", "결투의 창", "천공의 마루", "용학살창", "페보니우스 장창", "흑암창", "왕실의 장창", "미늘창", "별의 낫 프로토타입"],
        artifacts: [
          "창백의 화염",
          ["피에 물든 기사도", "창백의 화염"],
          "검투사의 피날레",
          ["피에 물든 기사도", "공격력 +18% 세트"],
          "날아오르는 유성"
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "단단한 황옥 가루",
            amount: 1
          },
          {
            name: "콜 라피스",
            amount: 3
          },
          {
            name: "슬라임 응축액",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "단단한 황옥 조각",
            amount: 3
          },
          {
            name: "현암의 탑",
            amount: 2
          },
          {
            name: "콜 라피스",
            amount: 10
          },
          {
            name: "슬라임 응축액",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "단단한 황옥 조각",
            amount: 6
          },
          {
            name: "현암의 탑",
            amount: 4
          },
          {
            name: "콜 라피스",
            amount: 20
          },
          {
            name: "슬라임청",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "단단한 황옥 덩이",
            amount: 3
          },
          {
            name: "현암의 탑",
            amount: 8
          },
          {
            name: "콜 라피스",
            amount: 30
          },
          {
            name: "슬라임청",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "단단한 황옥 덩이",
            amount: 6
          },
          {
            name: "현암의 탑",
            amount: 12
          },
          {
            name: "콜 라피스",
            amount: 45
          },
          {
            name: "슬라임 원액",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "단단한 황옥",
            amount: 6
          },
          {
            name: "현암의 탑",
            amount: 20
          },
          {
            name: "콜 라피스",
            amount: 60
          },
          {
            name: "슬라임 원액",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 가르침",
            amount: 3
          },
          {
            name: "슬라임 응축액",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 인도",
            amount: 2
          },
          {
            name: "슬라임청",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "황금의 인도",
            amount: 4
          },
          {
            name: "슬라임청",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 인도",
            amount: 6
          },
          {
            name: "슬라임청",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "황금의 인도",
            amount: 9
          },
          {
            name: "슬라임청",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 철학",
            amount: 4
          },
          {
            name: "슬라임 원액",
            amount: 4
          },
          {
            name: "하늘을 삼킨 고래 뿔",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "황금의 철학",
            amount: 6
          },
          {
            name: "슬라임 원액",
            amount: 6
          },
          {
            name: "하늘을 삼킨 고래 뿔",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "황금의 철학",
            amount: 12
          },
          {
            name: "슬라임 원액",
            amount: 9
          },
          {
            name: "하늘을 삼킨 고래 뿔",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "황금의 철학",
            amount: 16
          },
          {
            name: "슬라임 원액",
            amount: 12
          },
          {
            name: "하늘을 삼킨 고래 뿔",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 1144,
                atk: 20,
                def: 57,
                bonus: 0
            },
            end: {
                hp: 2967,
                atk: 51,
                def: 149,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3948,
                atk: 67,
                def: 198,
                bonus: 0
            },
            end: {
                hp: 5908,
                atk: 101,
                def: 297,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 6605,
                atk: 113,
                def: 332,
                bonus: 7.2
            },
            end: {
                hp: 7599,
                atk: 130,
                def: 382,
                bonus: 7.2
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 8528,
                atk: 146,
                def: 428,
                bonus: 14.4
            },
            end: {
                hp: 9533,
                atk: 163,
                def: 479,
                bonus: 14.4
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 10230,
                atk: 175,
                def: 514,
                bonus: 14.4
            },
            end: {
                hp: 11243,
                atk: 192,
                def: 564,
                bonus: 14.4
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 11940,
                atk: 204,
                def: 599,
                bonus: 21.6
            },
            end: {
                hp: 12965,
                atk: 222,
                def: 651,
                bonus: 21.6
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 13662,
                atk: 233,
                def: 686,
                bonus: 28.8
            },
            end: {
                hp: 14695,
                atk: 251,
                def: 738,
                bonus: 28.8
            }
        }
    ],
    bonus: "바위 원소 피해 보너스",
    bonusType: "percent",
    skills: [
      {
        name: "바위 비",
        type: "일반공격",
        description: `
일반공격
창으로 최대 6번 공격한다.
(1단:30.8%,2단:31.2%,3단:38.6%,4단:42.9%,5단:10.8%x4,6단:54.5%)

강공격
일정 스태미나를 소모해 전방으로 질주한다. 경로 및 종착점에 비 같은 바위창을 내린다.
(강공격 피해 : 111%, 강공격 스태미나 소모 : 25.0pt)

낙하공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고 땅에 닿으면 범위 피해를 준다.
(낙하 기간 피해 : 63.9%, 저공/고공 추락 충격 피해 : 128%/160%)
`
      },
      {
        name: "지핵",
        type: "원소스킬",
        description: `
대지 위, 산맥, 반석 사이엔 바위의 힘이 널리 퍼져있다. 그러나 이 힘을 자유자재로 사용할 수 있는 이는 거의 없다.

짧은 터치
대지 곳곳에 널려있는 바위 원소를 소환해 암주를 생성하여 바위 원소 범위 피해를 준다. 또한 암주는 주변의 다른 바위 원소 창조물과 간헐적으로 원암 공명을 일으켜 주변의 적에게 바위 원소 피해를 준다. 암주는 바위 원소 창조물로 간주되며 공격을 막거나 등반할 수 있다. 암주는 동시에 1개만 존재할 수 있다.
(암주피해/공명피해:16.0%/32.0%, 짧은터치재사용대기시간:4.0초)

홀드
근처의 바위 원소를 폭발시켜 아래의 효과를 가한다 :
º옥홀 방패를 생성한다. 피해 흡수량은 종려 HP 최대치의 영향을 받는다. 바위 원소 피해에 대해 250%의 흡수 효과가 있다.
º바위 원소 범위 피해를 준다.
º근처에 바위 원소를 보유한 타깃이 있다면 최대 2개 타깃의 바위 원소를 대량 소모한다. 해당 효과로 피해를 줄 수 없다.
(차지피해:80%,보호막 기본흡수량:1,232,보호막 추가 흡수량: HP 최대치의 12.8%,보호막 지속 시간 : 20.0초, 차지 재사용 대기시간 :12.0초)

바위는 평범해 보이지만 옥을 갈고 금에 모양을 새길 수도 있을 만큼 단단하다.
`

      },
      {
        name: "천성",
        type: "원소폭발(필살기)",
        description: `거대한 운석을 떨어뜨려 추락 범위 내의 적에게 대량의 바위 원소 피해를 주고 석화 상태로 만든다.
석화 상태가 된 적은 움직일 수 없다.
`
      }
    ],
    passive: [
      {
        name: "낭떠러지의 재결",
        ascension: 1,
        description: `옥홀 방패가 피해를 받으면 철벽 효과가 발동한다 :
옥홀 방패의 보호를 받는 캐릭터의 보호막 강화 효과가 5% 증가한다.
º해당 효과 최대 중첩 수 : 5회. 효과는 옥홀 방패가 사라지기 전까지 지속한다.
`
      },
      {
        name: "호의호식",
        ascension: 4,
        description: "천성이 가하는 피해가 종려 HP 최대치의 33%만큼 증가한다."
      },
      {
        name: "수정석의 이치",
        ascension: -1,
        description: "장병기 무기 단조 시 소모한 광석을 15% 반환한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "암석 · 천지의 기반",
        description: `지핵으로 만든 암주는 동시에 최대 2개 존재할 수 있다.`
      },
      {
        id: 2,
        name: "돌 · 옥으로 인해 빛나는 세상",
        description: `천성이 떨어질 때 근처에 있는 현재 캐릭터에게 옥홀 방패를 부여한다.`
      },
      {
        id: 3,
        name: "옥그릇 · 저물어도 사라지지 않는 광채",
        description: `지핵의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "옥홀 · 부서져도 건재한 견고함",
        description: `천성의 영향 범위가 20% 증가한다.
또한, 천성의 석화 효과 지속 시간이 2초 증가한다.`
      },
      {
        id: 5,
        name: "푸른 규벽 · 천지의 이치",
        description: `천성의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "금옥 · 천하에 주는 선물",
        description: `옥홀 방패가 피해를 받을 경우, 받은 피해의 40%만큼 현재 캐릭터의 HP를 회복한다.
단일 회복량은 현재 캐릭터 HP 최대치의 8%를 초과할 수 없다.`
      }
    ]
  },
  "알베도": {
    name: "알베도",
    keyword: ["albedo"],
    icon: "https://paimon.moe/images/characters/albedo.png",
    expurl: "https://www.youtube.com/watch?v=VoBg5CCwYY8&list=PLQBypYmxS6LSoV-ZMcPmyG0qur5jcMcQv&index=6&ab_channel=%EC%9B%90%EC%8B%A0",
    pvurl: "https://www.youtube.com/watch?v=TsLP90pGn-Q&list=PLQBypYmxS6LReK6-H2wUKs0geDHMGMpSp&index=3&ab_channel=%EC%9B%90%EC%8B%A0",
    playurl: "https://www.youtube.com/watch?v=VAkFSNajRe8&list=PLQBypYmxS6LTwM0s0cHc_QoTYEPaQCBLA&index=6&ab_channel=%EC%9B%90%EC%8B%A0",
    gender: "남성",
    birth: "09/13",
    affiliation: "페보니우스 기사단",
    star: "백악의 아이 자리",
    level: 5,
    weapon: "한손검",
    element: "바위",
    build: [
      {
        type: "서브 딜러", 
        main_stats: {
          "시계": "방어력%",
          "잔": ["바위 원소 피해", "방어력%"],
          "모자": ["치명타 확률", "치명타 피해", "방어력%"]
        },
        sub_stats: [
          "치명타 확률 / 피해", 
          "방어력%",
          "원소 충전 효율",
          "방어력"
        ],
        priority: ["원소 스킬", "필살기", "일반 공격"],
        weapons: ["여명신검", "반암결록", "참봉의 칼날", "오래된 자유의 서약"],
        artifacts: [
          ["유구한 반암", "옛 왕실의 의식"], 
          "견고한 천암",
          "유구한 반암",
          ["유구한 반암", "수호자의 마음"],
          "옛 왕실의 의식",
          ["수호자의 마음", "유배자"],
          ["수호자의 마음", "학사"],
          ["전쟁광", "유배자"],
          ["전쟁광", "학사"]
        ]
      }
    ],
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "단단한 황옥 가루",
            amount: 1
          },
          {
            name: "세실리아꽃",
            amount: 3
          },
          {
            name: "이능 두루마리",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "단단한 황옥 조각",
            amount: 3
          },
          {
            name: "현암의 탑",
            amount: 2
          },
          {
            name: "세실리아꽃",
            amount: 10
          },
          {
            name: "이능 두루마리",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "단단한 황옥 조각",
            amount: 6
          },
          {
            name: "현암의 탑",
            amount: 4
          },
          {
            name: "세실리아꽃",
            amount: 20
          },
          {
            name: "봉마의 두루마리",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "단단한 황옥 덩이",
            amount: 3
          },
          {
            name: "현암의 탑",
            amount: 8
          },
          {
            name: "세실리아꽃",
            amount: 30
          },
          {
            name: "봉마의 두루마리",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "단단한 황옥 덩이",
            amount: 6
          },
          {
            name: "현암의 탑",
            amount: 12
          },
          {
            name: "세실리아꽃",
            amount: 45
          },
          {
            name: "금주의 두루마리",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "단단한 황옥",
            amount: 6
          },
          {
            name: "현암의 탑",
            amount: 20
          },
          {
            name: "세실리아꽃",
            amount: 60
          },
          {
            name: "금주의 두루마리",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
      {
        prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 가르침",
            amount: 3
          },
          {
            name: "이능 두루마리",
            amount: 6
          }
        ],
        price: 12500
      },
      {
        prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 인도",
            amount: 2
          },
          {
            name: "봉마의 두루마리",
            amount: 3
          }
        ],
        price: 17500
      },
      {
        items: [
          {
            name: "시문의 인도",
            amount: 4
          },
          {
            name: "봉마의 두루마리",
            amount: 4
          }
        ],
        price: 25000
      },
      {
        prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 인도",
            amount: 6
          },
          {
            name: "봉마의 두루마리",
            amount: 6
          }
        ],
        price: 30000
      },
      {
        items: [
          {
            name: "시문의 인도",
            amount: 9
          },
          {
            name: "봉마의 두루마리",
            amount: 9
          }
        ],
        price: 37500
      },
      {
        prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 철학",
            amount: 4
          },
          {
            name: "금주의 두루마리",
            amount: 4
          },
          {
            name: "하늘을 삼킨 고래 뿔",
            amount: 1
          }
        ],
        price: 120000
      },
      {
        items: [
          {
            name: "시문의 철학",
            amount: 6
          },
          {
            name: "금주의 두루마리",
            amount: 6
          },
          {
            name: "하늘을 삼킨 고래 뿔",
            amount: 1
          }
        ],
        price: 260000
      },
      {
        prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
        items: [
          {
            name: "시문의 철학",
            amount: 12
          },
          {
            name: "금주의 두루마리",
            amount: 9
          },
          {
            name: "하늘을 삼킨 고래 뿔",
            amount: 2
          }
        ],
        price: 450000
      },
      {
        items: [
          {
            name: "시문의 철학",
            amount: 16
          },
          {
            name: "금주의 두루마리",
            amount: 12
          },
          {
            name: "하늘을 삼킨 고래 뿔",
            amount: 2
          },
          {
            name: "지식의 왕관",
            amount: 1
          }
        ],
        price: 700000
      },
    ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 1030,
                atk: 20,
                def: 68,
                bonus: 0
            },
            end: {
                hp: 2671,
                atk: 51,
                def: 177,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3554,
                atk: 68,
                def: 235,
                bonus: 0
            },
            end: {
                hp: 5317,
                atk: 101,
                def: 352,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5944,
                atk: 113,
                def: 394,
                bonus: 7.2
            },
            end: {
                hp: 6839,
                atk: 130,
                def: 453,
                bonus: 7.2
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 7675,
                atk: 146,
                def: 508,
                bonus: 14.4
            },
            end: {
                hp: 8579,
                atk: 163,
                def: 568,
                bonus: 14.4
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 9207,
                atk: 175,
                def: 610,
                bonus: 14.4
            },
            end: {
                hp: 10119,
                atk: 192,
                def: 670,
                bonus: 14.4
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 10746,
                atk: 204,
                def: 712,
                bonus: 21.6
            },
            end: {
                hp: 11669,
                atk: 222,
                def: 773,
                bonus: 21.6
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 12296,
                atk: 233,
                def: 815,
                bonus: 28.8
            },
            end: {
                hp: 13226,
                atk: 251,
                def: 876,
                bonus: 28.8
            }
        }
    ],
    bonus: "바위 원소 피해 보너스",
    bonusType: "percent",
    skills: [
      {
        name: "페보니우스검술·백",
        type: "일반공격",
        description: `
일반공격
검으로 최대 5번 공격한다.
(1단:36.7%,2단:36.7%,3단:47.5%,4단:49.8%,5단:62.1%)

강공격
일정 스태미나를 소모해 순간적으로 전방을 향해 검을 2번 휘두른다.
(강공격피해 : 47.3%+62.1% 강공격 스태미나 소모:20.0pt)

낙하공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고, 땅에 닿을 시 범위 피해를 준다.
(낙하 기간 피해:63.9%,저공/고공 추락 충격 피해:128%/160%)
`
      },
      {
        name: "지핵",
        type: "원소스킬",
        description: `
태양꽃을 생성해 바위 원소 범위 피해를 준다.
(스킬피해:130%)

태양꽃
태양꽃은 아래의 특성을 가진다
·태양꽃을 중심으로 한 영역에서 적이 피해를 받으면 태양꽃은 찰나의 꽃을 피워내 바위 원소 범위 피해를 주며, 해당 피해는 알베도 방어력의 영향을 받는다.
·찰나의 꽃은 2초마다 1번만 생성된다.
·캐릭터가 태양꽃 위에 있을 때, 태양꽃은 바위 원소의 힘을 모아 캐릭터를 일정 높이까지 들어 올리는 크리스탈 플랫폼을 만든다. 크리스탈 플랫폼은 동시에 1개만 존재할 수 있다.
·알베도 자신이 창조한 태양꽃은 동시에 1개만 존재할 수 있으며 바위 원소 창조물로 간주한다.
(찰나의꽃 피해 : 방어력의 134%, 지속시간:30초,스킬 재사용 대기시간:4초)

홀드
태양꽃이 생성되는 위치를 조정할 수 있다.
`

      },
      {
        name: "탄생식·대지의 파동",
        type: "원소폭발(필살기)",
        description: `바위 수정은 알베도의 지시에 따라 폭발해 알베도 전방에 바위 원소 범위 피해를 준다. 필드 위에 알베도가 만든 태양꽃이 존재할 시, 태양꽃 영역 안에 생멸의 꽃 7송이가 맹렬하게 피어나면서 바위 원소 범위 피해를 준다.

폭발 피해와 생멸의 꽃 피해는 찰나의 꽃을 만들어 낼 수 없다.
(버스트피해:367%, 꽃마다 72.0%, 재사용 대기시간:12.0초 원소에너지:40)
`
      }
    ],
    passive: [
      {
        name: "백악색의 위압",
        ascension: 1,
        description: "창생법·모조 태양꽃의 찰나의 꽃이 HP가 50% 미만인 적에게 가하는 피해가 25% 증가한다."
      },
      {
        name: "병 속 인간의 지혜",
        ascension: 4,
        description: "탄생식·대지의 파동 발동 시 주변의 파티 내 캐릭터의 원소 마스터리가 125pt 증가한다. 지속 시간:10초"
      },
      {
        name: "천재의 발견",
        ascension: -1,
        description: "무기 돌파 소재를 합성 시 10%의 확률로 생산량의 2배를 획득한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "에덴의 꽃",
        description: `알베도의 창생법 · 모조 태양꽃으로 생성된 찰나의 꽃이 피어날 때, 알베도 자신의 원소 에너지가 1.2pt 회복된다.`
      },
      {
        id: 2,
        name: "현생의 누대",
        description: `창생법 · 모조 태양꽃의 찰나의 꽃이 피어날 때 알베도에게 생멸 카운트 효과를 부여한다. 지속시간: 30초
· 탄생식 · 대지의 파동을 발동하면 모든 생멸 카운트 효과를 지우고, 지운 스택이 많을수록 탄생식 · 대지의 파동의 폭발 피해와 생멸의 꽃으로 가하는 피해가 증가한다.
· 생멸 카운트가 1스택 쌓일 때마다 피해가 알베도 방어력의 30%만큼 증가한다.
· 최대 중첩수: 4회`
      },
      {
        id: 3,
        name: "태양의 꽃",
        description: `창생법 · 모조 태양꽃의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "신성의 추락",
        description: `태양꽃 범위 안에 있는 현재 필드 위 캐릭터의 낙하 공격 피해가 30% 증가한다.`
      },
      {
        id: 5,
        name: "명왕누대의 파동",
        description: `탄생식 · 대지의 파동의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "무구의 흙",
        description: `태양꽃 범위 안에 있는 현재 필드 위 캐릭터가 결정 반응으로 생성된 방패의 보호를 받고 있을 시 가하는 피해가 17% 증가한다.`
      }
    ]
  },
  "바람행자": {
    name: "바람행자",
    icon: "https://paimon.moe/images/characters/traveler_anemo.png",
    gender: "남성, 여성",
    birth: "불명",
    affiliation: "불명",
    star: "나그네자리",
    level: 5,
    weapon: "한손검",
    element: "바람",
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "휘황찬란한 다이아몬드 파편",
            amount: 1
          },
          {
            name: "풍차국화",
            amount: 3
          },
          {
            name: "부서진 가면",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "휘황찬란한 다이아몬드 단편",
            amount: 3
          },
          {
            name: "풍차국화",
            amount: 10
          },
          {
            name: "부서진 가면",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "휘황찬란한 다이아몬드 단편",
            amount: 6
          },
          {
            name: "풍차국화",
            amount: 20
          },
          {
            name: "오염된 가면",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "휘황찬란한 다이아몬드 덩어리",
            amount: 3
          },
          {
            name: "풍차국화",
            amount: 30
          },
          {
            name: "오염된 가면",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "휘황찬란한 다이아몬드 덩어리",
            amount: 6
          },
          {
            name: "풍차국화",
            amount: 45
          },
          {
            name: "불길한 가면",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "휘황찬란한 다이아몬드",
            amount: 6
          },
          {
            name: "풍차국화",
            amount: 60
          },
          {
            name: "불길한 가면",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
          {
            prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
            items: [
              {
                name: "자유의 가르침",
                amount: 3
              },
              {
                name: "이능 두루마리",
                amount: 6
              }
            ],
            price: 12500
          },
          {
            prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
            items: [
              {
                name: "투쟁의 인도",
                amount: 2
              },
              {
                name: "봉마의 두루마리",
                amount: 3
              }
            ],
            price: 17500
          },
          {
            items: [
              {
                name: "시문의 인도",
                amount: 4
              },
              {
                name: "봉마의 두루마리",
                amount: 4
              }
            ],
            price: 25000
          },
          {
            prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
            items: [
              {
                name: "자유의 인도",
                amount: 6
              },
              {
                name: "봉마의 두루마리",
                amount: 6
              }
            ],
            price: 30000
          },
          {
            items: [
              {
                name: "투쟁의 인도",
                amount: 9
              },
              {
                name: "봉마의 두루마리",
                amount: 9
              }
            ],
            price: 37500
          },
          {
            prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
            items: [
              {
                name: "시문의 철학",
                amount: 4
              },
              {
                name: "금주의 두루마리",
                amount: 4
              },
              {
                name: "동풍의 숨결",
                amount: 1
              }
            ],
            price: 120000
          },
          {
            items: [
              {
                name: "자유의 철학",
                amount: 6
              },
              {
                name: "금주의 두루마리",
                amount: 6
              },
              {
                name: "동풍의 숨결",
                amount: 1
              }
            ],
            price: 260000
          },
          {
            prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
            items: [
              {
                name: "투쟁의 철학",
                amount: 12
              },
              {
                name: "금주의 두루마리",
                amount: 9
              },
              {
                name: "동풍의 숨결",
                amount: 2
              }
            ],
            price: 450000
          },
          {
            items: [
              {
                name: "시문의 철학",
                amount: 16
              },
              {
                name: "금주의 두루마리",
                amount: 12
              },
              {
                name: "동풍의 숨결",
                amount: 2
              },
              {
                name: "지식의 왕관",
                amount: 1
              }
            ],
            price: 700000
          },
        ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 912,
                atk: 18,
                def: 57,
                bonus: 0
            },
            end: {
                hp: 2342,
                atk: 46,
                def: 147,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3024,
                atk: 59,
                def: 190,
                bonus: 0
            },
            end: {
                hp: 4529,
                atk: 88,
                def: 284,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5013,
                atk: 98,
                def: 315,
                bonus: 6
            },
            end: {
                hp: 5766,
                atk: 113,
                def: 362,
                bonus: 6
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 6411,
                atk: 125,
                def: 402,
                bonus: 12
            },
            end: {
                hp: 7164,
                atk: 140,
                def: 450,
                bonus: 12
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 7648,
                atk: 149,
                def: 480,
                bonus: 12
            },
            end: {
                hp: 8401,
                atk: 164,
                def: 527,
                bonus: 12
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 8885,
                atk: 174,
                def: 558,
                bonus: 18
            },
            end: {
                hp: 9638,
                atk: 188,
                def: 605,
                bonus: 18
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 10122,
                atk: 198,
                def: 635,
                bonus: 24
            },
            end: {
                hp: 10875,
                atk: 212,
                def: 683,
                bonus: 24
            }
        }
    ],
    bonus: "공격력",
    bonusType: "percent",
    skills: [
      {
        name: "이국의 강철바람",
        type: "일반공격",
        description: `
일반 공격
검으로 최대 5번 공격한다.

강공격
일정 스태미나를 소모해 순간적으로 전방을 향해 검을 2번 휘두른다.

낙하 공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고, 착지 시 범위 피해를 준다.
`
      },
      {
        name: "회오리 검",
        type: "원소스킬",
        description: `
바람의 힘을 꽉 쥐고 손바닥에서 진공 소용돌이를 만들어내 적에게 바람 원소 피해를 계속 준다.
스킬 종료 후 진공 소용돌이는 폭발하여 범위가 더 크고 강력한 바람 원소 피해를 준다.

홀드
피해와 영향 범위가 점점 커진다.

원소 전환
진공 소용돌이는 스킬을 시전하는 동안 물 원소/불 원소/얼음 원소/번개 원소에 닿으면 상응하는 원소 속성을 획득하고 추가로 해당 속성 피해를 준다.
원소 전환은 스킬을 시전하는 동안 1회만 발생한다.
`

      },
      {
        name: "격동의 바람",
        type: "원소폭발(필살기)",
        description: `바람이 전진하는 방향을 인도하며 앞으로 나아가는 토네이도를 소환해 경로상의 물체와 적을 감아올려 바람 원소 피해를 계속 준다.

원소 전환
토네이도는 스킬을 시전하는 동안 물 원소/불 원소/얼음 원소/번개 원소에 닿으면 상응하는 원소 속성을 획득하고 추가로 해당 속성 피해를 준다.
원소 전환은 스킬을 시전하는 동안 1회만 발생한다.
`
      }
    ],
    passive: [
      {
        name: "열공의 바람",
        ascension: 1,
        description: "일반 공격의 마지막 일격은 바람의 칼날을 발동해 경로상의 적에게 공격력 60%의 바람 원소 피해를 준다."
      },
      {
        name: "재생의 바람",
        ascension: 4,
        description: "회오리 검을 사용해 적을 처치한 후 초당 HP를 2%씩 회복한다. 지속 시간: 5초. 해당 효과는 5초마다 1번 발동한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "회전하는 분노의 바람",
        description: `회오리 검은 주변 5m 이내의 적과 물체를 천천히 캐릭터의 앞으로 끌어당긴다.`
      },
      {
        id: 2,
        name: "혁신의 회오리바람",
        description: `원소 충전 효율이 16% 상승한다.`
      },
      {
        id: 3,
        name: "천지의 세찬 바람",
        description: `격동의 바람의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "따사로운 산들바람",
        description: `회오리 검을 시전하는 동안 받는 피해가 10% 감소한다.`
      },
      {
        id: 5,
        name: "뭇별의 소용돌이",
        description: `회오리 검의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "뒤엉킨 계절풍",
        description: `격동의 바람에 피격된 적은 바람 원소 내성이 20% 감소한다.
만약 원소 전환이 발생하면 해당 원소의 내성이 20% 감소한다.`
      }
    ]
  },
  "번개행자": {
    name: "번개행자",
    icon: "https://paimon.moe/images/characters/traveler_anemo.png",
    gender: "남성, 여성",
    birth: "불명",
    affiliation: "불명",
    star: "나그네자리",
    level: 5,
    weapon: "한손검",
    element: "",
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "휘황찬란한 다이아몬드 파편",
            amount: 1
          },
          {
            name: "풍차국화",
            amount: 3
          },
          {
            name: "부서진 가면",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "휘황찬란한 다이아몬드 단편",
            amount: 3
          },
          {
            name: "풍차국화",
            amount: 10
          },
          {
            name: "부서진 가면",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "휘황찬란한 다이아몬드 단편",
            amount: 6
          },
          {
            name: "풍차국화",
            amount: 20
          },
          {
            name: "오염된 가면",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "휘황찬란한 다이아몬드 덩어리",
            amount: 3
          },
          {
            name: "풍차국화",
            amount: 30
          },
          {
            name: "오염된 가면",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "휘황찬란한 다이아몬드 덩어리",
            amount: 6
          },
          {
            name: "풍차국화",
            amount: 45
          },
          {
            name: "불길한 가면",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "휘황찬란한 다이아몬드",
            amount: 6
          },
          {
            name: "풍차국화",
            amount: 60
          },
          {
            name: "불길한 가면",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        items:[
          {
            prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
            items: [
              {
                name: "자유의 가르침",
                amount: 3
              },
              {
                name: "이능 두루마리",
                amount: 6
              }
            ],
            price: 12500
          },
          {
            prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
            items: [
              {
                name: "투쟁의 인도",
                amount: 2
              },
              {
                name: "봉마의 두루마리",
                amount: 3
              }
            ],
            price: 17500
          },
          {
            items: [
              {
                name: "시문의 인도",
                amount: 4
              },
              {
                name: "봉마의 두루마리",
                amount: 4
              }
            ],
            price: 25000
          },
          {
            prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
            items: [
              {
                name: "자유의 인도",
                amount: 6
              },
              {
                name: "봉마의 두루마리",
                amount: 6
              }
            ],
            price: 30000
          },
          {
            items: [
              {
                name: "투쟁의 인도",
                amount: 9
              },
              {
                name: "봉마의 두루마리",
                amount: 9
              }
            ],
            price: 37500
          },
          {
            prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
            items: [
              {
                name: "시문의 철학",
                amount: 4
              },
              {
                name: "금주의 두루마리",
                amount: 4
              },
              {
                name: "동풍의 숨결",
                amount: 1
              }
            ],
            price: 120000
          },
          {
            items: [
              {
                name: "자유의 철학",
                amount: 6
              },
              {
                name: "금주의 두루마리",
                amount: 6
              },
              {
                name: "동풍의 숨결",
                amount: 1
              }
            ],
            price: 260000
          },
          {
            prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
            items: [
              {
                name: "투쟁의 철학",
                amount: 12
              },
              {
                name: "금주의 두루마리",
                amount: 9
              },
              {
                name: "동풍의 숨결",
                amount: 2
              }
            ],
            price: 450000
          },
          {
            items: [
              {
                name: "시문의 철학",
                amount: 16
              },
              {
                name: "금주의 두루마리",
                amount: 12
              },
              {
                name: "동풍의 숨결",
                amount: 2
              },
              {
                name: "지식의 왕관",
                amount: 1
              }
            ],
            price: 700000
          },
        ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 912,
                atk: 18,
                def: 57,
                bonus: 0
            },
            end: {
                hp: 2342,
                atk: 46,
                def: 147,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3024,
                atk: 59,
                def: 190,
                bonus: 0
            },
            end: {
                hp: 4529,
                atk: 88,
                def: 284,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5013,
                atk: 98,
                def: 315,
                bonus: 6
            },
            end: {
                hp: 5766,
                atk: 113,
                def: 362,
                bonus: 6
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 6411,
                atk: 125,
                def: 402,
                bonus: 12
            },
            end: {
                hp: 7164,
                atk: 140,
                def: 450,
                bonus: 12
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 7648,
                atk: 149,
                def: 480,
                bonus: 12
            },
            end: {
                hp: 8401,
                atk: 164,
                def: 527,
                bonus: 12
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 8885,
                atk: 174,
                def: 558,
                bonus: 18
            },
            end: {
                hp: 9638,
                atk: 188,
                def: 605,
                bonus: 18
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 10122,
                atk: 198,
                def: 635,
                bonus: 24
            },
            end: {
                hp: 10875,
                atk: 212,
                def: 683,
                bonus: 24
            }
        }
    ],
    bonus: "공격력",
    bonusType: "percent",
    skills: [
      {
        name: "이국의 번개",
        type: "일반공격",
        description: `
일반 공격
검으로 최대 5번 공격한다.

강공격
일정 스태미나를 소모해 순간적으로 전방을 향해 검을 2번 휘두른다.

낙하 공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고, 착지 시 범위 피해를 준다.
`
      },
      {
        name: "뇌영검",
        type: "원소스킬",
        description: `
신속한 뇌영 세 갈래를 방출한다. 뇌영은 적에게 번개 원소 피해를 주고, 적을 명중하면 풍요의 곡옥을 남긴다.
풍요의 곡옥은 초기에 최대 2개까지 생성된다. 스킬 발동 시 자신이 생성한 풍요의 곡옥이 사라진다.

풍요의 곡옥
캐릭터가 접근하면 풍요의 곡옥을 흡수하고 아래의 효과를 획득한다:
· 원소 에너지 회복
· 지속 시간 동안 원소 충전 효율 향상
`

      },
      {
        name: "요동치는 우렛소리",
        type: "원소폭발(필살기)",
        description: `휘감는 뇌정의 가호를 받아 주변의 적을 넉백시키고 번개 원소 피해를 준다.

휘감는 뇌정
현재의 필드 위 자신의 캐릭터의 일반 공격 혹은 강공격이 적을 명중 하면, 위광의 낙뢰를 소환해 적에게 번개 원소 피해를 준다.
위광의 낙뢰가 적을 명중하면, 해당 캐릭터의 원소 에너지가 회복된다.
위광의 낙뢰는 0.5초마다 최대 1회 생성된다.
`
      }
    ],
    passive: [
      {
        name: "찰나의 계뢰",
        ascension: 1,
        description: "근처에 있는 파티 내 다른 캐릭터가 뇌영검으로 생성된 풍요의 곡옥을 획득하면, 뇌영검의 재사용 대기시간이 1.5초 감소한다."
      },
      {
        name: "울려퍼지는 천둥",
        ascension: 4,
        description: "뇌영검의 풍요의 곡옥이 제공하는 원소 충전 효율이 여행자 자신의 원소 충전 효율의 10%만큼 증가한다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "풍요의 봄우레",
        description: `뇌영검 발동 시 생성되는 풍요의 곡옥 수량이 3개까지 증가한다.`
      },
      {
        id: 2,
        name: "진노의 창뢰",
        description: `요동치는 우렛소리의 위광의 낙뢰가 적을 명중하면, 적의 번개 원소 내성이 15% 감소한다. 지속시간: 8초.`
      },
      {
        id: 3,
        name: "뻗어나가는 원뢰",
        description: `요동치는 우렛소리의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "예측불가한 운뢰",
        description: `캐릭터가 뇌운검으로 생성된 풍요의 곡옥 획득 시, 해당 캐릭터의 원소 에너지가 35% 미만일 경우 풍요의 곡옥으로 회복되는 원소 에너지가 100% 증가한다.`
      },
      {
        id: 5,
        name: "황야의 뇌정",
        description: `뇌영검의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "세상을 뒤흔드는 신뢰(神雷)",
        description: `요동치는 우렛소리가 위광의 낙뢰를 2회 유발할 때마다 다음번 위광의 낙뢰로 가하는 피해가 100% 증가하고, 현재 캐릭터의 원소 에너지를 추가로 1pt 회복한다.`
      }
    ]
  },
  "바위행자": {
    name: "바위행자",
    icon: "https://paimon.moe/images/characters/traveler_geo.png",
    gender: "남성, 여성",
    birth: "불명",
    affiliation: "불명",
    star: "나그네자리",
    level: 5,
    weapon: "한손검",
    element: "바위",
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "휘황찬란한 다이아몬드 파편",
            amount: 1
          },
          {
            name: "풍차국화",
            amount: 3
          },
          {
            name: "부서진 가면",
            amount: 3
          }
        ],
        price: 20000
      },
      {
        start: 40,
        items: [
          {
            name: "휘황찬란한 다이아몬드 단편",
            amount: 3
          },
          {
            name: "풍차국화",
            amount: 10
          },
          {
            name: "부서진 가면",
            amount: 15
          }
        ],
        price: 40000
      },
      {
        start: 50,
        items: [
          {
            name: "휘황찬란한 다이아몬드 단편",
            amount: 6
          },
          {
            name: "풍차국화",
            amount: 20
          },
          {
            name: "오염된 가면",
            amount: 12
          }
        ],
        price: 60000
      },
      {
        start: 60,
        items: [
          {
            name: "휘황찬란한 다이아몬드 덩어리",
            amount: 3
          },
          {
            name: "풍차국화",
            amount: 30
          },
          {
            name: "오염된 가면",
            amount: 18
          }
        ],
        price: 80000
      },
      {
        start: 70,
        items: [
          {
            name: "휘황찬란한 다이아몬드 덩어리",
            amount: 6
          },
          {
            name: "풍차국화",
            amount: 45
          },
          {
            name: "불길한 가면",
            amount: 12
          }
        ],
        price: 100000
      },
      {
        start: 80,
        items: [
          {
            name: "휘황찬란한 다이아몬드",
            amount: 6
          },
          {
            name: "풍차국화",
            amount: 60
          },
          {
            name: "불길한 가면",
            amount: 24
          }
        ],
        price: 120000
      },
    ],
    talent: [
      {
        type: "일반공격",
        items: [
          {
            prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
            items: [
              {
                name: "자유의 가르침",
                amount: 3
              },
              {
                name: "이능 두루마리",
                amount: 6
              }
            ],
            price: 12500
          },
          {
            prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
            items: [
              {
                name: "투쟁의 인도",
                amount: 2
              },
              {
                name: "봉마의 두루마리",
                amount: 3
              }
            ],
            price: 17500
          },
          {
            items: [
              {
                name: "시문의 인도",
                amount: 4
              },
              {
                name: "봉마의 두루마리",
                amount: 4
              }
            ],
            price: 25000
          },
          {
            prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
            items: [
              {
                name: "자유의 인도",
                amount: 6
              },
              {
                name: "봉마의 두루마리",
                amount: 6
              }
            ],
            price: 30000
          },
          {
            items: [
              {
                name: "투쟁의 인도",
                amount: 9
              },
              {
                name: "봉마의 두루마리",
                amount: 9
              }
            ],
            price: 37500
          },
          {
            prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
            items: [
              {
                name: "시문의 철학",
                amount: 4
              },
              {
                name: "금주의 두루마리",
                amount: 4
              },
              {
                name: "동풍의 숨결",
                amount: 1
              }
            ],
            price: 120000
          },
          {
            items: [
              {
                name: "자유의 철학",
                amount: 6
              },
              {
                name: "금주의 두루마리",
                amount: 6
              },
              {
                name: "동풍의 숨결",
                amount: 1
              }
            ],
            price: 260000
          },
          {
            prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
            items: [
              {
                name: "투쟁의 철학",
                amount: 12
              },
              {
                name: "금주의 두루마리",
                amount: 9
              },
              {
                name: "동풍의 숨결",
                amount: 2
              }
            ],
            price: 450000
          },
          {
            items: [
              {
                name: "시문의 철학",
                amount: 16
              },
              {
                name: "금주의 두루마리",
                amount: 12
              },
              {
                name: "동풍의 숨결",
                amount: 2
              },
              {
                name: "지식의 왕관",
                amount: 1
              }
            ],
            price: 700000
          },
        ]
      },
      {
        type: "원소 스킬 & 원소폭발",
        items: [
          {
            prerequisite: "캐릭터 Lv. 2 돌파 후 레벨 업 가능",
            items: [
              {
                name: "번영의 가르침",
                amount: 3
              },
              {
                name: "견고한 화살촉",
                amount: 6
              }
            ],
            price: 12500
          },
          {
            prerequisite: "캐릭터 Lv. 3 돌파 후 레벨 업 가능",
            items: [
              {
                name: "근면의 인도",
                amount: 2
              },
              {
                name: "날카로운 화살촉",
                amount: 3
              }
            ],
            price: 17500
          },
          {
            items: [
              {
                name: "황금의 인도",
                amount: 4
              },
              {
                name: "날카로운 화살촉",
                amount: 4
              }
            ],
            price: 25000
          },
          {
            prerequisite: "캐릭터 Lv. 4 돌파 후 레벨 업 가능",
            items: [
              {
                name: "번영의 인도",
                amount: 6
              },
              {
                name: "날카로운 화살촉",
                amount: 6
              }
            ],
            price: 30000
          },
          {
            items: [
              {
                name: "근면의 인도",
                amount: 9
              },
              {
                name: "날카로운 화살촉",
                amount: 9
              }
            ],
            price: 37500
          },
          {
            prerequisite: "캐릭터 Lv. 5 돌파 후 레벨 업 가능",
            items: [
              {
                name: "황금의 철학",
                amount: 4
              },
              {
                name: "역전의 화살촉",
                amount: 4
              },
              {
                name: "북풍의 꼬리",
                amount: 1
              }
            ],
            price: 120000
          },
          {
            items: [
              {
                name: "번영의 철학",
                amount: 6
              },
              {
                name: "역전의 화살촉",
                amount: 6
              },
              {
                name: "북풍의 꼬리",
                amount: 1
              }
            ],
            price: 260000
          },
          {
            prerequisite: "캐릭터 Lv. 6 돌파 후 레벨 업 가능",
            items: [
              {
                name: "근면의 철학",
                amount: 12
              },
              {
                name: "역전의 화살촉",
                amount: 9
              },
              {
                name: "북풍의 꼬리",
                amount: 2
              }
            ],
            price: 450000
          },
          {
            items: [
              {
                name: "황금의 철학",
                amount: 16
              },
              {
                name: "역전의 화살촉",
                amount: 12
              },
              {
                name: "북풍의 꼬리",
                amount: 2
              },
              {
                name: "지식의 왕관",
                amount: 1
              }
            ],
            price: 700000
          },
        ]
      }
    ],
    stat: [
        {
            start: 1,
            last: 20,
            begin: {
                hp: 912,
                atk: 18,
                def: 57,
                bonus: 0
            },
            end: {
                hp: 2342,
                atk: 46,
                def: 147,
                bonus: 0
            }
        },
        {
            start: 20,
            last: 40,
            begin: {
                hp: 3024,
                atk: 59,
                def: 190,
                bonus: 0
            },
            end: {
                hp: 4529,
                atk: 88,
                def: 284,
                bonus: 0
            }
        },
        {
            start: 40,
            last: 50,
            begin: {
                hp: 5013,
                atk: 98,
                def: 315,
                bonus: 6
            },
            end: {
                hp: 5766,
                atk: 113,
                def: 362,
                bonus: 6
            }
        },
        {
            start: 50,
            last: 60,
            begin: {
                hp: 6411,
                atk: 125,
                def: 402,
                bonus: 12
            },
            end: {
                hp: 7164,
                atk: 140,
                def: 450,
                bonus: 12
            }
        },
        {
            start: 60,
            last: 70,
            begin: {
                hp: 7648,
                atk: 149,
                def: 480,
                bonus: 12
            },
            end: {
                hp: 8401,
                atk: 164,
                def: 527,
                bonus: 12
            }
        },
        {
            start: 70,
            last: 80,
            begin: {
                hp: 8885,
                atk: 174,
                def: 558,
                bonus: 18
            },
            end: {
                hp: 9638,
                atk: 188,
                def: 605,
                bonus: 18
            }
        },
        {
            start: 80,
            last: 90,
            begin: {
                hp: 10122,
                atk: 198,
                def: 635,
                bonus: 24
            },
            end: {
                hp: 10875,
                atk: 212,
                def: 683,
                bonus: 24
            }
        }
    ],
    bonus: "공격력",
    bonusType: "percent",
    skills: [
      {
        name: "이국의 암봉",
        type: "일반공격",
        description: `
일반 공격
검으로 최대 5번 공격한다.

강공격
일정 스태미나를 소모해 순간적으로 전방을 향해 검을 2번 휘두른다.

낙하 공격
공중에서 땅을 내려찍어 경로상의 적을 공격하고, 착지 시 범위 피해를 준다.
`
      },
      {
        name: "성운검",
        type: "원소스킬",
        description: `
대지의 깊은 곳에서 황성을 소환해 폭발을 일으켜 바위 원소 범위 피해를 준다.
황성은 바위 원소 창조물로 간주되며 공격을 막거나 등반할 수 있다.

홀드
황성의 낙하 위치를 조정할 수 있다.
`

      },
      {
        name: "첩첩산중",
        type: "원소폭발(필살기)",
        description: `대지 깊은 곳의 바위 원소를 활성화하여 확산하는 진동파를 끌어낸다.
주변의 적을 넉백시키며 바위 원소 범위 피해를 준다.
이후 진동파의 외곽에 돌출하는 돌벽을 생성한다.
돌벽은 바위 원소 창조물로 간주되며 공격을 막을 수 있다.
`
      }
    ],
    passive: [
      {
        name: "부서진 절암",
        ascension: 1,
        description: "성운검의 재사용 대기시간이 2초 감소한다."
      },
      {
        name: "광란의 붕암",
        ascension: 4,
        description: "일반 공격의 마지막 일격에 붕괴가 추가되어 범위 내의 적에게 공격력 60%의 바위 원소 피해를 준다."
      }
    ],
    constellation: [
      {
        id: 1,
        name: "웅대한 청암",
        description: `파티 내 캐릭터가 첩첩산중의 돌벽에 포위되면 치명타 확률이 10% 증가하고 경직 저항력이 상승한다.`
      },
      {
        id: 2,
        name: "불안정한 용암",
        description: `성운검의 황성이 파괴될 때 다시 폭발을 일으켜 주변의 적에게 성운검의 피해와 동일한 바위 원소 범위 피해를 준다.`
      },
      {
        id: 3,
        name: "팔방의 바위",
        description: `첩첩산중의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 4,
        name: "험준한 바위",
        description: `첩첩산중이 유발하는 진동파가 1명의 적에게 명중할 때마다 원소 에너지가 5pt 회복한다.
이러한 방식을 통해 한번에 원소 에너지를 최대 25pt까지 회복할 수 있다.`
      },
      {
        id: 5,
        name: "하늘에서 떨어지는 바위",
        description: `성운검의 스킬 레벨+3
최대 Lv.15까지 상승`
      },
      {
        id: 6,
        name: "영세의 반석",
        description: `첩첩산중의 돌벽 지속시간이 5초 연장된다.
성운검의 황성 지속시간이 10초 연장된다.`
      }
    ]
  }
}

const exp = [
  1000,
  1325,
  1700,
  2150,
  2625,
  3150,
  3725,
  4350,
  5000,
  5700,
  6450,
  7225,
  8050,
  8925,
  9825,
  10750,
  11725,
  12725,
  13775,
  14875,
  16800,
  18000,
  19250,
  20550,
  21875,
  23250,
  24650,
  26100,
  27575,
  29100,
  30650,
  32250,
  33875,
  35550,
  37250,
  38975,
  40750,
  42575,
  44425,
  46300,
  50625,
  52700,
  54775,
  56900,
  59075,
  61725,
  63525,
  65800,
  68125,
  70475,
  76500,
  79050,
  81650,
  84275,
  86950,
  89650,
  92400,
  95175,
  98000,
  100875,
  108950,
  112050,
  115175,
  118325,
  121525,
  124775,
  128075,
  131400,
  134775,
  138175,
  148700,
  152375,
  156075,
  159825,
  163600,
  167425,
  171300,
  175225,
  179175,
  183175,
  216225,
  243025,
  273100,
  306800,
  344600,
  386950,
  434425,
  487625,
  547200
];

module.exports.chars = chars;

const {searchMaterial} = require("../data/material.js");

function calculateLevelStat (data, level) {
  var stat = data["stat"];
  var maxLevel = stat[stat.length - 1]["last"];

  for(var i = 0; i < stat.length; i++) {
    //in the middle
    if((level >= stat[i]["start"] && level < stat[i]["last"]) || (level == maxLevel && stat[i]["last"] == maxLevel)) {
      //성장 스탯
      var lvlRange = (stat[i]["last"] - stat[i]["start"])
      var curRange = level - stat[i]["start"];
      var hpVal = Math.floor(stat[i]["begin"]["hp"] + ((stat[i]["end"]["hp"] - stat[i]["begin"]["hp"]) / lvlRange) * curRange);
      var atkVal = Math.floor(stat[i]["begin"]["atk"] + ((stat[i]["end"]["atk"] - stat[i]["begin"]["atk"]) / lvlRange) * curRange);
      var defVal =  Math.floor(stat[i]["begin"]["def"] + ((stat[i]["end"]["def"] - stat[i]["begin"]["def"]) / lvlRange) * curRange);
      var bonusVal =  stat[i]["begin"]["bonus"] + ((stat[i]["end"]["bonus"] - stat[i]["begin"]["bonus"]) / lvlRange) * curRange;
      return [hpVal, atkVal, defVal, bonusVal];
    }else if(level == stat[i]["last"]) {
      var init = [stat[i]["end"]["hp"], stat[i]["end"]["atk"], stat[i]["end"]["def"], stat[i]["end"]["bonus"]];
      var next = [stat[i+1]["begin"]["hp"], stat[i+1]["begin"]["atk"], stat[i+1]["begin"]["def"], stat[i+1]["begin"]["bonus"]];
      return [i, init, next];
    }
  }
}

function searchCharacter (string) {
  string = string.replace(/\s/g, "").toLowerCase();
  if(chars[string] != null) {
    return chars[string];
  }

  for(var i in chars) {
    var keyword = chars[i]["keyword"] ? chars[i]["keyword"].map(x => x.replace(/\s/g, "").toLowerCase()) : []
    var nameData = chars[i]["name"].replace(/\s/g, "");
    if(string == nameData || keyword.indexOf(string) >= 0) {
      return chars[i];
    }
  }
}

function filterCharacter (options) {
  var get = options.split(" ");
  if(options.length == 0) {
    get = [];
  }
  const weapons = ["한손검", "양손검", "법구", "장병기", "활"]
  var element, weapon, rating;
  for(var i = 0; i < get.length; i++) {
    if(get[i] in elements) {
      element = get[i];
    }else if(weapons.indexOf(get[i]) >= 0) {
      weapon = get[i];
    }else if(get[i] == "4" || get[i] == "5" || get[i] == "4성" || get[i] == "5성") {
      if(get[i].length == 2) {
        rating = Number(get[i][0]);
      }else {
        rating = Number(get[i]);
      }
    }
  }


  var lists = [];

  for(i in chars) {
    var e = (chars[i]["element"] == element) || element == undefined;
    var w = (chars[i]["weapon"]== weapon || (weapon != undefined && (chars[i]["weapon"][0] == weapon || chars[i]["weapon"][1] == weapon))) || weapon == undefined;
    var r = (chars[i]["level"] == rating) || rating == undefined;


    if((get.length > 0 && (e && w && r)) || get.length == 0) {
      lists.push(chars[i]);
    }
  }


  if(element == undefined && weapon == undefined && rating == undefined && get.length > 0) {
    lists = [];
  }

  return lists;
}

function createCharacterEmbedInfo(data, option) {
  if(!data) return;

  const embed = new MessageEmbed();
  embed.setThumbnail(data.icon);
  embed.setAuthor(data.name, elements[data.element]);

  if(option == "charMain") {
    embed.setTitle("메인 정보");
    var text = data["quotes"];
    text += "\n";
    embed.addFields(
      { name: "이름", value: data.name, inline: true},
      { name: "성별", value: data.gender, inline: true},
      { name: "생일", value: data.birth, inline: true },
      { name: "소속", value: data.affiliation, inline: true},
      { name: "운명의 자리", value: data.star, inline: true},
      { name: '\u200B', value: '\u200B', inline: true },
    );

    if(data.pvurl) {
      embed.addField("PV 영상", "[유튜브](" + data.pvurl.replace("(", "%28").replace(")", "%29") + ")", true);
    }

    if(data.expurl) {
      embed.addField("데인여담 영상", "[유튜브](" + data.expurl.replace("(", "%28").replace(")", "%29") + ")", true);
    }

    if(data.playurl) {
      embed.addField("캐릭터 플레이 영상", "[유튜브](" + data.playurl.replace("(", "%28").replace(")", "%29") + ")", true);
    }


    embed.setImage(data.icon.replace("characters/", "characters/full/"));
    embed.setDescription(text);
    
  }else if(option == "charPassive") {
    for(var i = 0; i < data.passive.length; i++) {
      if(data.passive[i]["ascension"] == "-1") {
        embed.addField("🔸 " + data.passive[i]["name"] +  " - 자동 해금", data.passive[i]["description"]);
      }else {
        embed.addField("🔸 " + data.passive[i]["name"] +  " - 캐릭터 Lv. " + String(data.passive[i]["ascension"]) +" 돌파 후 해금", data.passive[i]["description"]);
      }
    }
  }else if(option == "charSkill") {
    for(var i = 0; i < data.skills.length; i++) {
      embed.addField("🔸 " + data.skills[i]["type"] + " · " + data.skills[i]["name"] , data.skills[i]["description"]);
    }
  }else if(option == "charConstellation") {
    for(var i = 0; i < data.constellation.length; i++) {
      embed.addField("🔸 " + data.constellation[i]["name"] + " - " + String(data.constellation[i].id) + "단계", data.constellation[i]["description"]);
    }
  }
  embed.setColor("#ffffff");

  return embed;
}

function createStatEmbed(data, level) {
  var get = calculateLevelStat(data, level);
  var embed = new MessageEmbed();
  embed.setThumbnail(data["icon"]);
  embed.setColor("#ffffff");
  embed.setTitle(level + "레벨 " + data["name"] + `의 기초 스탯`);
  var description = "";
  if(get.length == 4) {
    description += "**기초 HP: **" + get[0] + "\n";
    description += "**기초 공격력: **" + get[1] + "\n";
    description += "**기초 방어력: **" + get[2] + "\n";
    if(data["bonusType"] == "percent") {
      description += "**" + data["bonus"] + ": **" + get[3] + "%";
    }else {
      description += "**" + data["bonus"] + ": **" + get[3];
    }
  }else if(get.length == 3) {
    var first = get[1];
    var last = get[2];
    description += "**돌파 " + (get[0] + 1) + "단계 전과 후 비교** \n\n";
    description += "**기초 HP: **" + first[0] + " => " + last[0] + "\n";
    description += "**기초 공격력: **" + first[1] + " => " + last[1] + "\n";
    description += "**기초 방어력: **" + first[2] + " => " + last[2] + "\n";
    if(data["bonusType"] == "percent") {
      description += "**" + data["bonus"] + ": **" + first[3] + "%" + " => " + last[3] + "%";
    }else {
      description += "**" + data["bonus"] + ": **" + first[3] + " => " + last[3];
    }
  }
  embed.setDescription(description);
  embed.setFooter("* 기본 무기, 성유물 미착용");
  return embed;
}

function createAscensionEmbedBrief(data) {
  const embed = new MessageEmbed();
  var ascensions = data["ascension"];
  if(!ascensions) return;
  var description = "";
  for(var i = 0; i < ascensions.length; i++) {
    var required = ascensions[i]["items"].map(x => x["name"] + " x " + x["amount"]).join(", ");
    description += `**돌파 ${i + 1}단계 (${ascensions[i]["start"]}레벨)**
${required}
가격: ${ascensions[i]["price"]}모라

`;
  }

  embed.setColor("#ffffff");
  embed.setTitle(data["name"] + "의 돌파 정보");
  embed.setThumbnail(data["icon"]);
  embed.setDescription(description);
  return embed;
}

function createTalentEmbedBrief(data, number) {
  const embed = new MessageEmbed();
  var talents = data["talent"];
  if(!talents) return;
  var description = "";
  var talent;
  //console.log(talents);
  if(talents.length == 1) {
    talent = talents[0]["items"];
  }else {
    if(number == undefined) {
      number = 0;
    }
    number = Math.max(0, number);
    number = Math.min(number, talents.length);
    talent = talents[number]["items"];
  }

  for(var i = 0; i < talent.length; i++) {
    var required = talent[i]["items"].map(x => x["name"] + " x " + x["amount"]).join(", ");
    description += "**특성 "+(i+1)+"레벨 **\n"
    description += required;
    description += "\n\n";
  }

  embed.setColor("#ffffff");
  embed.setTitle(data["name"] + "의 특성 정보");
  embed.setThumbnail(data["icon"]);
  embed.setDescription(description);
  return embed;
}

function requiredTalentEmbed(data, begin, end, number) {
  if(number > data["talent"].length) return;
  var embed = new MessageEmbed();
  embed.setColor("#ffffff");
  embed.setThumbnail(data["icon"]);
  if(begin == end) {
    embed.setTitle(`${data["name"]}의 특성 ${begin}레벨 정보`);
  } else {
    embed.setTitle(`${data["name"]}의 특성 ${begin} ~ ${end}레벨 정보`);
  }
  
  //wrong level range
  if(begin == 1) {
    embed.setDescription("없음");
    return embed;
  };

  if(begin == end) {
    embed.setTitle(`${data["name"]}의 특성 ${begin}레벨 정보`);
  } else {
    embed.setTitle(`${data["name"]}의 특성 ${begin} ~ ${end}레벨 정보`);
  }

  var lists = {};
  var price = 0;
  var talent = data["talent"][number]["items"];
  
  for(var i = begin - 2; i < end - 1; i++) {
    price += talent[i]["price"];
    for(var j = 0; j < talent[i]["items"].length; j++) {
      var key = talent[i]["items"][j]["name"];
      var val = talent[i]["items"][j]["amount"];
      if(lists[key] == undefined) {
        lists[key] = val;
      }else {
        lists[key] += val;
      }
    }
  }

  var description = "";
  for(var i in lists) {
    var item = i;
    var val = lists[i];
    var materialData = searchMaterial(item);
    description += "**" + item + "** x " + val;
    description += "\n";
    if(materialData) {
      description += "**드랍 위치:** " + materialData["drop"];
    }else {
      description += "**아이템 데이터 아직 추가 안함**";
    }
    description += "\n\n";
  }
  description += "**가격:** " + price + "모라";
  embed.setDescription(description);
  return embed;
}

function requiredAscensionEmbed(data, begin, end) {
  var length = data["ascension"].length;
  if(begin <= 0 || end <= 0 || begin > length + 1|| end > length + 1) return;

  var embed = new MessageEmbed();
  var lists = {};
  var price = 0;
  var ascension = data["ascension"];
  for(var i = begin - 1; i < end; i++) {
    price += ascension[i]["price"];
    for(var j = 0; j < ascension[i]["items"].length; j++) {
      var key = ascension[i]["items"][j]["name"];
      var val = ascension[i]["items"][j]["amount"];
      if(lists[key] == undefined) {
        lists[key] = val;
      }else {
        lists[key] += val;
      }
    }
  }

  if(begin == end) {
    embed.setTitle(`${data["name"]}의 ${begin}단계 돌파 정보`);
  } else {
    embed.setTitle(`${data["name"]}의 ${begin} ~ ${end}단계 돌파 정보`);
  }

  embed.setColor("#ffffff");
  embed.setThumbnail(data["icon"]);
  var description = "";
  for(var i in lists) {
    var item = i;
    var val = lists[i];
    var materialData = searchMaterial(item);
    description += "**" + item + "** x " + val;
    description += "\n";
    if(materialData) {
      description += "**드랍 위치:** " + materialData["drop"];
    }else {
      description += "**아이템 데이터 아직 추가 안함**";
    }
    description += "\n\n";
  }
  description += "**가격:** " + price + "모라";

  embed.setDescription(description);
  return embed;
}

function createRequiredEmbed(data, begin, end, number) {
  var beginAscend = isNaN(begin);
  var endAscend = isNaN(end);

  if(beginAscend) {
    begin = Number(begin.replace("+", ""));
  }

  if(endAscend) {
    end = Number(end.replace("+", ""));
  }

  if(number == 0) {
    var ascension = data["ascension"];
    var embed = new MessageEmbed();
    var description = "";
    var lists = {};
    var price = 0;
    var bn = 0, en;
    for(var i = 0; i < ascension.length; i++) {
      var holder = ascension[i];
      if(beginAscend && begin == holder["start"]) {
        bn = i + 1;
      }else if(!beginAscend && begin >= holder["start"]) {
        bn = i;
      }
      if(endAscend && end == holder["start"]) {
        en = i + 1;
      }else if(!endAscend && end > holder["start"]) {
        en = i + 1;
      }
    }

    for(var i = bn; i < en; i++) {
      price += ascension[i]["price"];
      for(var j = 0; j < ascension[i]["items"].length; j++) {
        var key = ascension[i]["items"][j]["name"];
        var val = ascension[i]["items"][j]["amount"];
        if(lists[key] == undefined) {
          lists[key] = val;
        }else {
          lists[key] += val;
        }
      }
    }

    for(var i in lists) {
      var item = i;
      var val = lists[i];
      var materialData = searchMaterial(item);
      description += "**" + item + "** x " + val;
      description += "\n";
      if(materialData) {
        description += "**드랍 위치:** " + materialData["drop"];
      }else {
        description += "**아이템 데이터 아직 추가 안함**";
      }
      description += "\n\n";
    }



    if(description.length == 0) {
      return;
    }else {
      description += "**가격:** " + price + "모라";
    }

    embed.setTitle(`${data["name"]}의 레벨 ${begin} ~ ${end} 돌파 정보`);
    embed.setThumbnail(data["icon"]);
    embed.setDescription(description);
    embed.setColor("#ffffff");
    return embed;
  } else if(number == 1) {
    var first = calculateLevelStat(data, begin);
    var last = calculateLevelStat(data, end);
    var embed = new MessageEmbed();

    //if((beginAscend && first.length == 4) || (endAscend && last.length == 4)) return;

    if(first.length == 3) {
      first = (beginAscend) ? first[2] : first[1];
    }

    if(last.length == 3) {
      last = (endAscend) ? last[2] : last[1];
    }

    var description = "**기초스탯 변화**\n\n";
    description += "**기초 HP: **" + first[0] + " => " + last[0] + "\n";
    description += "**기초 공격력: **" + first[1] + " => " + last[1] + "\n";
    description += "**기초 방어력: **" + first[2] + " => " + last[2] + "\n";
    if(data["bonusType"] == "percent") {
      description += "**" + data["bonus"] + ": **" + first[3] + "%" + " => " + last[3] + "%";
    }else {
      description += "**" + data["bonus"] + ": **" + first[3] + " => " + last[3];
    }
    description += "\n\n";

    var counter = 0;
    for(var i = begin; i < end; i++) {
      counter += exp[i - 1];
    }

    description += "**필요한 경험치:** " + counter + " exp";
    description += "\n";
    description += "**필요한 보라책 갯수:** " + Math.ceil(counter / 20000);


    embed.setTitle(`${data["name"]}의 레벨 ${begin} ~ ${end}`)
    embed.setThumbnail(data["icon"]);
    embed.setDescription(description);
    embed.setColor("#ffffff");
    return embed;
  }
}

function createBuildEmbed(data, number) {
  const embed = new MessageEmbed();
  const build = data["build"][number];
  embed.setTitle(data["name"]+"의 " + build["type"] + " 정보");
  embed.setColor("#ffffff");
  embed.setThumbnail(data["icon"]);
  var ms = Object.keys(build["main_stats"]).map(key => {
    if(typeof(build["main_stats"][key]) == "object") {
      return "**" + key + ":** " + build["main_stats"][key].join(",\n");
    } else {
      return "**" + key + ":** " + build["main_stats"][key];
    }
  }).join("\n");
  var ss = build["sub_stats"].map((el, index) => {
    return "**" + String(index + 1) + ".** " + el;
  }).join("\n");
  var pr = build["priority"].map((el, index) => {
    return "**" + String(index + 1) + ".** " + el;
  }).join("\n");
  var wp = build["weapons"].map((el, index) => {
    return "**" + String(index + 1) + ".** " + el;
  }).join("\n");
  var as = build["artifacts"].map((el, index) => {
    if(typeof(el) == "object") {
      if(el.length > 2) {
        return "**" + String(index + 1) + ". 2개를 선택:**\n" + el.map(x => "- " +  x + " (2)").join(",\n");
      }else {
        return "**" + String(index + 1) + ".** " + el.map(x => x + " (2)").join(",\n");
      }
    }else {
      return "**" + String(index + 1) + ".** " + el + " (4)";
    }
  }).join("\n");

  embed.addField("메인 스탯", ms, true);
  embed.addField("서브 스탯", ss, true);
  embed.addField("특성 우선 순위", pr, true);
  embed.addField("무기", wp, true);
  embed.addField("성유물", as, true);
  embed.setFooter("※ 빌드 출처: https://paimon.moe");
  return embed;
}

module.exports.calculateLevelStat = calculateLevelStat;
module.exports.searchCharacter = searchCharacter;
module.exports.filterCharacter = filterCharacter;
module.exports.createCharacterEmbedInfo = createCharacterEmbedInfo;
module.exports.createStatEmbed = createStatEmbed;
module.exports.createAscensionEmbedBrief = createAscensionEmbedBrief;
module.exports.createTalentEmbedBrief = createTalentEmbedBrief;
module.exports.requiredTalentEmbed = requiredTalentEmbed;
module.exports.requiredAscensionEmbed = requiredAscensionEmbed;
module.exports.createRequiredEmbed = createRequiredEmbed;
module.exports.createBuildEmbed = createBuildEmbed;