const {MessageEmbed} = require("discord.js");
const wp = {
  "매의 검": {
  name: "매의 검",
  type: "한손검",
  level: 5,
  image: "https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Weapon_Aquila_Favonia.png/revision/latest/scale-to-width-down/256?cb=20201120002750",
  stat: [
    {
      start: 1,
      last: 20,
      begin: {
        atk: 48,
        bonus: 9.0
      },
      end: {
        atk: 133,
        bonus: 15.9
      }
    },
    {
      start: 20,
      last: 40,
      begin: {
        atk: 164,
        bonus: 15.9
      },
      end: {
        atk: 261,
        bonus: 23.2
      }
    },
    {
      start: 40,
      last: 50,
      begin: {
        atk: 292,
        bonus: 23.2
      },
      end: {
        atk: 341,
        bonus: 26.8
      }
    },
    {
      start: 50,
      last: 60,
      begin: {
        atk: 373,
        bonus: 26.8
      },
      end: {
        atk: 423,
        bonus: 30.4
      }
    },
    {
      start: 60,
      last: 70,
      begin: {
        atk: 455,
        bonus: 30.4
      },
      end: {
        atk: 506,
        bonus: 34.1
      }
    },
    {
      start: 70,
      last: 80,
      begin: {
        atk: 537,
        bonus: 34.1
      },
      end: {
        atk: 590,
        bonus: 37.7
      }
    },
    {
      start: 80,
      last: 90,
      begin: {
        atk: 621,
        bonus: 37.7
      },
      end: {
        atk: 674,
        bonus: 41.3
      }
    },
  ],
  bonus: "물리 피해 보너스",
  bonusType: "percent",
  ascension: [
    {
      start: 20,
      items: [
        {
          name: "고탑 왕의 잔해",
          amount: 5
        },
        {
          name: "무거운 나팔",
          amount: 5
        },
        {
          name: "견고한 화살촉",
          amount: 3
        }
      ],
      price: 10000
    },
    {
      start: 40,
      items: [
        {
          name: "고탑 왕의 절망",
          amount: 5
        },
        {
          name: "무거운 나팔",
          amount: 18
        },
        {
          name: "견고한 화살촉",
          amount: 12
        }
      ],
      price: 20000
    },
    {
      start: 50,
      items: [
        {
          name: "고탑 왕의 절망",
          amount: 9
        },
        {
          name: "흑동 나팔",
          amount: 9
        },
        {
          name: "날카로운 화살촉",
          amount: 9
        }
      ],
      price: 30000
    },
    {
      start: 60,
      items: [
        {
          name: "고탑 왕의 조각",
          amount: 5
        },
        {
          name: "흑동 나팔",
          amount: 18
        },
        {
          name: "날카로운 화살촉",
          amount: 14
        }
      ],
      price: 45000
    },
    {
      start: 70,
      items: [
        {
          name: "고탑 왕의 조각",
          amount: 9
        },
        {
          name: "흑수정 나팔",
          amount: 14
        },
        {
          name: "역전의 화살촉",
          amount: 9
        }
      ],
      price: 55000
    },
    {
      start: 80,
      items: [
        {
          name: "고탑 왕의 깨진 꿈",
          amount: 6
        },
        {
          name: "흑수정 나팔",
          amount: 27
        },
        {
          name: "역전의 화살촉",
          amount: 18
        }
      ],
      price: 65000
    },
  ],
  skills: [
    {
      name: "서풍 매의 투쟁",
      description: "공격력이 20/25/30/35/40% 증가한다. 피해를 입으면 발동 : 투쟁의 깃발을 높이든 서풍 매의 영혼이 깨어나 공격력 100/115/130/145/160%만큼의 HP를 회복하고 주변의 적에게 공격력 200/230/260/290/320%의 피해를 준다. 해당 효과는 15초마다 1번 발동한다."
    }
  ],
  origin: "기원",
  keyword: ["매"]
  },
  "천공의 검":  {
  name: "천공의 검",
  "type": "한손검",
  "level": 5,
  "stat": [
      {
          "begin": {
              "atk": 46,
              "bonus": 12
          },
          "start": 1,
          "last": 20,
          "end": {
              "atk": 122,
              "bonus": 21.2
          }
      },
      {
          "begin": {
              "atk": 153,
              "bonus": 21.2
          },
          "start": 20,
          "last": 40,
          "end": {
              "atk": 235,
              "bonus": 30.9
          }
      },
      {
          "begin": {
              "atk": 266,
              "bonus": 30.9
          },
          "start": 40,
          "last": 50,
          "end": {
              "atk": 308,
              "bonus": 35.7
          }
      },
      {
          "begin": {
              "atk": 340,
              "bonus": 35.7
          },
          "start": 50,
          "last": 60,
          "end": {
              "atk": 382,
              "bonus": 40.6
          }
      },
      {
          "begin": {
              "atk": 414,
              "bonus": 40.6
          },
          "start": 60,
          "last": 70,
          "end": {
              "atk": 457,
              "bonus": 45.4
          }
      },
      {
          "begin": {
              "atk": 488,
              "bonus": 45.4
          },
          "start": 70,
          "last": 80,
          "end": {
              "atk": 532,
              "bonus": 50.3
          }
      },
      {
          "begin": {
              "atk": 563,
              "bonus": 50.3
          },
          "start": 80,
          "last": 90,
          "end": {
              "atk": 608,
              "bonus": 55.1
          }
      }
  ],
  "bonus": "원소 충전 효율",
  "bonusType": "percent",
  "ascension": [
      {
          "start": 20,
          "items": [
              {
                  name: "칼바람 울프의 젖니",
                  "amount": 5
              },
              {
                  name: "지맥의 낡은 가지",
                  "amount": 5
              },
              {
                  name: "슬라임 응축액",
                  "amount": 3
              }
          ],
          "price": 10000
      },
      {
          "start": 40,
          "items": [
              {
                  name: "칼바람 울프의 이빨",
                  "amount": 5
              },
              {
                  name: "지맥의 낡은 가지",
                  "amount": 18
              },
              {
                  name: "슬라임 응축액",
                  "amount": 12
              }
          ],
          "price": 20000
      },
      {
          "start": 50,
          "items": [
              {
                  name: "칼바람 울프의 이빨",
                  "amount": 9
              },
              {
                  name: "지맥의 마른 잎",
                  "amount": 9
              },
              {
                  name: "슬라임청",
                  "amount": 9
              }
          ],
          "price": 30000
      },
      {
          "start": 60,
          "items": [
              {
                  name: "칼바람 울프의 부서진 이빨",
                  "amount": 5
              },
              {
                  name: "지맥의 마른 잎",
                  "amount": 18
              },
              {
                  name: "슬라임청",
                  "amount": 14
              }
          ],
          "price": 45000
      },
      {
          "start": 70,
          "items": [
              {
                  name: "칼바람 울프의 부서진 이빨",
                  "amount": 9
              },
              {
                  name: "지맥의 새싹",
                  "amount": 14
              },
              {
                  name: "슬라임 원액",
                  "amount": 9
              }
          ],
          "price": 55000
      },
      {
          "start": 80,
          "items": [
              {
                  name: "칼바람 울프의 그리운 고향",
                  "amount": 6
              },
              {
                  name: "지맥의 새싹",
                  "amount": 27
              },
              {
                  name: "슬라임 원액",
                  "amount": 18
              }
          ],
          "price": 65000
      }
  ],
  skills: [
    {
      name: "높은 하늘을 뚫는 이빨",
      description: `치명타 확률이 4/5/6/7/8% 증가한다. 원소폭발 발동 시 파공의 기세를 획득한다: 이동 속도 +10%, 공격 속도 +10% 일반 공격과 강공격이 명중 시 추가로 공격력 20/25/30/35/40%의 피해를 준다. 지속 시간: 12초`
    }
  ],
  origin: "기원",
  keyword: ["천공검"],
  image: "https://static.wikia.nocookie.net/gensin-impact/images/0/03/Weapon_Skyward_Blade.png/revision/latest/scale-to-width-down/256?cb=20201116035239",
  },
  "참봉의 칼날":  {
    name: "참봉의 칼날",
    "type": "한손검",
    "level": 5,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 46,
                "bonus": 10.8
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 122,
                "bonus": 19.1
            }
        },
        {
            "begin": {
                "atk": 153,
                "bonus": 19.1
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 235,
                "bonus": 27.8
            }
        },
        {
            "begin": {
                "atk": 266,
                "bonus": 27.8
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 308,
                "bonus": 32.2
            }
        },
        {
            "begin": {
                "atk": 340,
                "bonus": 32.2
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 382,
                "bonus": 36.5
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 36.5
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 457,
                "bonus": 40.9
            }
        },
        {
            "begin": {
                "atk": 488,
                "bonus": 40.9
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 532,
                "bonus": 45.3
            }
        },
        {
            "begin": {
                "atk": 453,
                "bonus": 45.3
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 608,
                "bonus": 49.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "고운한림의 매끄러운 모래",
                    "amount": 5
                },
                {
                    name: "사냥꾼의 제도",
                    "amount": 5
                },
                {
                    name: "부서진 가면",
                    "amount": 3
                }
            ],
            "price": 10000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "고운한림의 휘암",
                    "amount": 5
                },
                {
                    name: "사냥꾼의 제도",
                    "amount": 18
                },
                {
                    name: "부서진 가면",
                    "amount": 12
                }
            ],
            "price": 20000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "고운한림의 휘암",
                    "amount": 9
                },
                {
                    name: "특수 요원의 제도",
                    "amount": 9
                },
                {
                    name: "오염된 가면",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "고운한림의 해골",
                    "amount": 5
                },
                {
                    name: "특수 요원의 제도",
                    "amount": 18
                },
                {
                    name: "오염된 가면",
                    "amount": 14
                }
            ],
            "price": 45000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "고운한림의 해골",
                    "amount": 9
                },
                {
                    name: "검사관의 제도",
                    "amount": 14
                },
                {
                    name: "불길한 가면",
                    "amount": 9
                }
            ],
            "price": 55000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "고운한림의 신체",
                    "amount": 6
                },
                {
                    name: "검사관의 제도",
                    "amount": 27
                },
                {
                    name: "불길한 가면",
                    "amount": 18
                }
            ],
            "price": 65000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/ca/Weapon_Summit_Shaper.png/revision/latest/scale-to-width-down/256?cb=20201223042936",
    skills: [
      {
        name: "금빛의 옥·제군의 길",
        description: `보호막 강화 효과가 20/25/30/35/40% 증가한다. 공격 명중 후 공격력이 4/5/6/7/8% 증가한다. 지속 시간: 8초. 최대 중첩수: 5회. 해당 효과는 0.3초마다 1번 발동한다. 또한 보호막 존재 시 해당 효과의 공격력 증가 효과가 100% 증가한다`
      }
    ],
    origin: "기원",
    keyword: ["참봉칼날","참봉검"],
  },
  "반암결록":  {
    name: "반암결록",
    type: "한손검",
    level: 5,
    bonus: "치명타 확률",
    bonusType: "percent",
    stat: [
        {
            "begin": {
                "atk": 44,
                "bonus": 9.6
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 110,
                "bonus": 17
            }
        },
        {
            "begin": {
                "atk": 141,
                "bonus": 17
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 210,
                "bonus": 24.7
            }
        },
        {
            "begin": {
                "atk": 241,
                "bonus": 24.7
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 275,
                "bonus": 28.6
            }
        },
        {
            "begin": {
                "atk": 307,
                "bonus": 28.6
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 341,
                "bonus": 32.5
            }
        },
        {
            "begin": {
                "atk": 373,
                "bonus": 32.5
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 408,
                "bonus": 36.3
            }
        },
        {
            "begin": {
                "atk": 439,
                "bonus": 36.3
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 475,
                "bonus": 40.2
            }
        },
        {
            "begin": {
                "atk": 506,
                "bonus": 40.2
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 542,
                "bonus": 44.1
            }
        }
    ],
    ascension: [
        {
            "start": 20,
            "items": [
                {
                    name: "안개구름 속의 흑연단",
                    "amount": 5
                },
                {
                    name: "안개꽃 가루",
                    "amount": 5
                },
                {
                    name: "보물찾기 까마귀 휘장",
                    "amount": 3
                }
            ],
            "price": 10000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 5
                },
                {
                    name: "안개꽃 가루",
                    "amount": 18
                },
                {
                    name: "보물찾기 까마귀 휘장",
                    "amount": 12
                }
            ],
            "price": 20000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 9
                },
                {
                    name: "안개풀 주머니",
                    "amount": 9
                },
                {
                    name: "실버 까마귀 휘장",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 5
                },
                {
                    name: "안개풀 주머니",
                    "amount": 18
                },
                {
                    name: "실버 까마귀 휘장",
                    "amount": 14
                }
            ],
            "price": 45000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 9
                },
                {
                    name: "안개 등심",
                    "amount": 14
                },
                {
                    name: "골드 까마귀 휘장",
                    "amount": 9
                }
            ],
            "price": 55000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "안개구름 속의 전환",
                    "amount": 6
                },
                {
                    name: "안개 등심",
                    "amount": 27
                },
                {
                    name: "골드 까마귀 휘장",
                    "amount": 18
                }
            ],
            "price": 65000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Weapon_Primordial_Jade_Cutter.png/revision/latest/scale-to-width-down/256?cb=20210319202419",
    skills: [
        {
          name: "수호자의 무구한 마음",
          description: "HP가 20/25/30/35/40% 증가하고, 이 무기를 장착한 캐릭터 HP 최대치의 1.2/1.5/1.8/2.1/2.4%에 해당하는 공격력 보너스를 획득한다."
        }
    ],
    origin: "기원",
    keyword: ["화박검","반암검"],
  },
  "페보니우스 검":  {
    name: "페보니우스 검",
    "type": "한손검",
    "level": 4,
    "bonus": "원소 충전 효율",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 41,
                "bonus": 13.3
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 99,
                "bonus": 23.6
            }
        },
        {
            "begin": {
                "atk": 125,
                "bonus": 23.6
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 184,
                "bonus": 34.3
            }
        },
        {
            "begin": {
                "atk": 210,
                "bonus": 34.3
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 238,
                "bonus": 39.7
            }
        },
        {
            "begin": {
                "atk": 264,
                "bonus": 39.7
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 293,
                "bonus": 45.1
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 45.1
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 347,
                "bonus": 50.5
            }
        },
        {
            "begin": {
                "atk": 373,
                "bonus": 50.5
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 401,
                "bonus": 55.9
            }
        },
        {
            "begin": {
                "atk": 427,
                "bonus": 55.9
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 454,
                "bonus": 61.3
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "고탑 왕의 잔해",
                    "amount": 3
                },
                {
                    name: "무거운 나팔",
                    "amount": 3
                },
                {
                    name: "견고한 화살촉",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 5
                },
                {
                    name: "무거운 나팔",
                    "amount": 18
                },
                {
                    name: "견고한 화살촉",
                    "amount": 12
                }
            ],
            "price": 20000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 9
                },
                {
                    name: "흑동 나팔",
                    "amount": 9
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 5
                },
                {
                    name: "흑동 나팔",
                    "amount": 18
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 14
                }
            ],
            "price": 45000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 9
                },
                {
                    name: "흑수정 나팔",
                    "amount": 14
                },
                {
                    name: "역전의 화살촉",
                    "amount": 9
                }
            ],
            "price": 55000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "고탑 왕의 깨진 꿈",
                    "amount": 6
                },
                {
                    name: "흑수정 나팔",
                    "amount": 27
                },
                {
                    name: "역전의 화살촉",
                    "amount": 18
                }
            ],
            "price": 65000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/90/Weapon_Favonius_Sword.png/revision/latest/scale-to-width-down/256?cb=20201116033811",
    skills: [
      {
        name: "바람과 함께",
        description: `치명타 시 60/70/80/90/100%의 확률로 소량의 원소 구슬이 생성되고 캐릭터의 원소 에너지를 6pt 회복한다. 해당 효과는 12/10.5/9/7.5/6초마다 1번 발동한다.`
      }
    ],
    origin: "기원",
    keyword: ["페보검"],
  },
  "오래된 자유의 서약":  {
    name: "오래된 자유의 서약",
    "type": "한손검",
    "level": 5,
    "bonus": "원소 마스터리",
    "bonusType": "number",
    "stat": [
        {
            "begin": {
                "atk": 46,
                "bonus": 43
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 122,
                "bonus": 76
            }
        },
        {
            "begin": {
                "atk": 153,
                "bonus": 76
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 235,
                "bonus": 111
            }
        },
        {
            "begin": {
                "atk": 266,
                "bonus": 111
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 308,
                "bonus": 129
            }
        },
        {
            "begin": {
                "atk": 340,
                "bonus": 129
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 382,
                "bonus": 146
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 146
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 457,
                "bonus": 164
            }
        },
        {
            "begin": {
                "atk": 488,
                "bonus": 164
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 532,
                "bonus": 181
            }
        },
        {
            "begin": {
                "atk": 563,
                "bonus": 181
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 608,
                "bonus": 198
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "고탑 왕의 잔해",
                    "amount": 3
                },
                {
                    name: "무거운 나팔",
                    "amount": 3
                },
                {
                    name: "견고한 화살촉",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 5
                },
                {
                    name: "무거운 나팔",
                    "amount": 18
                },
                {
                    name: "견고한 화살촉",
                    "amount": 12
                }
            ],
            "price": 20000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 9
                },
                {
                    name: "흑동 나팔",
                    "amount": 9
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 5
                },
                {
                    name: "흑동 나팔",
                    "amount": 18
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 14
                }
            ],
            "price": 45000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 9
                },
                {
                    name: "흑수정 나팔",
                    "amount": 14
                },
                {
                    name: "역전의 화살촉",
                    "amount": 9
                }
            ],
            "price": 55000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "고탑 왕의 깨진 꿈",
                    "amount": 6
                },
                {
                    name: "흑수정 나팔",
                    "amount": 27
                },
                {
                    name: "역전의 화살촉",
                    "amount": 18
                }
            ],
            "price": 65000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/39/Weapon_Freedom-Sworn.png/revision/latest/scale-to-width-down/256?cb=20210629202549",
    skills: [
      {
        name: "항쟁의 실천곡",
        description: `바람 속을 유랑하는 「천년의 대악장」의 일부분으로 가하는 피해가 10/12.5/15/17.5/20% 증가한다. 원소 반응을 발동할 시 캐릭터는 투쟁의 부적을 1장 획득하며, 0.5초마다 한 번씩 발동되고 캐릭터가 대기 상태일 때도 발동할 수 있다. 투쟁의 부적 2장 소유 시 부적을 모두 사용하면 파티 내 모든 캐릭터가 12초동안 「천년의 대악장·투쟁의 노래」 효과를 획득한다: 이때 일반 공격, 강공격, 낙하 공격 피해는 16/20/24/28/32% 증가하고, 공격력은 20/25/30/35/40% 증가한다. 발동 후 20초 동안은 투쟁의 부적을 획득할 수 없으며, 「천년의 대악장」 발동 효과는 동일 수치의 다른 효과들과 중첩되지 않는다.`
      }
    ],
    origin: "기원",
    keyword: [],
  },
  "안개를 가르는 회광": {
    name: "안개를 가르는 회광",
    type: "한손검",
    level: 5,
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/09/Weapon_Mistsplitter_Reforged.png/revision/latest/scale-to-width-down/350?cb=20210721035408",
    stat: [
      {
          "begin": {
              "atk": 48,
              "bonus": 9.6
          },
          "start": 1,
          "last": 20,
          "end": {
              "atk": 133,
              "bonus": 17
          }
      },
      {
          "begin": {
              "atk": 164,
              "bonus": 17
          },
          "start": 20,
          "last": 40,
          "end": {
              "atk": 261,
              "bonus": 24.7
          }
      },
      {
          "begin": {
              "atk": 292,
              "bonus": 24.7
          },
          "start": 40,
          "last": 50,
          "end": {
              "atk": 341,
              "bonus": 28.6
          }
      },
      {
          "begin": {
              "atk": 373,
              "bonus": 28.6
          },
          "start": 50,
          "last": 60,
          "end": {
              "atk": 423,
              "bonus": 32.5
          }
      },
      {
          "begin": {
              "atk": 455,
              "bonus": 32.5
          },
          "start": 60,
          "last": 70,
          "end": {
              "atk": 506,
              "bonus": 36.3
          }
      },
      {
          "begin": {
              "atk": 537,
              "bonus": 36.3
          },
          "start": 70,
          "last": 80,
          "end": {
              "atk": 590,
              "bonus": 40.2
          }
      },
      {
          "begin": {
              "atk": 621,
              "bonus": 40.2
          },
          "start": 80,
          "last": 90,
          "end": {
              "atk": 674,
              "bonus": 44.1
          }
      }
    ],
    bonus: "치명타 피해",
    bonusType: "percent",
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "먼바다의 산호 가지",
            amount: 5
          },
          {
            name: "혼돈의 기관",
            amount: 5
          },
          {
            name: "오래된 코등이",
            amount: 3
          }
        ],
        price: 10000
      },
      {
        start: 40,
        items: [
          {
            name: "먼바다의 옥빛 가지",
            amount: 5
          },
          {
            name: "혼돈의 기관",
            amount: 18
          },
          {
            name: "오래된 코등이",
            amount: 12
          }
        ],
        price: 20000
      },
      {
        start: 50,
        items: [
          {
            name: "먼바다의 옥빛 가지",
            amount: 9
          },
          {
            name: "혼돈의 중추",
            amount: 9
          },
          {
            name: "카게우치 코등이",
            amount: 9
          }
        ],
        price: 30000
      },
      {
        start: 60,
        items: [
          {
            name: "먼바다의 마노 가지",
            amount: 5
          },
          {
            name: "혼돈의 중추",
            amount: 18
          },
          {
            name: "카게우치 코등이",
            amount: 14
          }
        ],
        price: 45000
      },
      {
        start: 70,
        items: [
          {
            name: "먼바다의 마노 가지",
            amount: 9
          },
          {
            name: "혼돈의 눈동자",
            amount: 14
          },
          {
            name: "명검 코등이",
            amount: 9
          }
        ],
        price: 55000
      },
      {
        start: 80,
        items: [
          {
            name: "먼바다의 금빛 가지",
            amount: 6
          },
          {
            name: "혼돈의 눈동자",
            amount: 27
          },
          {
            name: "명검 코등이",
            amount: 18
          }
        ],
        price: 65000
      },
    ],
    skills: [
      {
        name: "무절(霧切) 어검",
        description: "모든 원소의 피해 보너스를 12/15/18/21/24% 획득하고 「무절(霧切)의 문장」을 획득한다. 무절의 문장: 1/2/3스택의 무절의 문장 보유 시, 각각 8/16/28% | 10/20/35% | 12/24/42% | 14/28/49% | 16/32/56%에 해당하는 자신의 원소 타입의 원소 피해 보너스를 획득한다. 캐릭터가 무절의 문장 1스택을 획득할 수 있는 상황: 일반 공격으로 원소 피해를 가하면 5초간 지속. 원소폭발을 발동하면 10초간 지속. 이 외에 캐릭터의 원소 에너지가 100% 미만일 때, 무절의 문장을 1스택 획득한다. 해당 무절의 문장은 캐릭터의 원소 에너지가 가득 차면 사라진다. 무절의 문장의 각 스택 지속 시간은 따로 계산된다."
      }
    ],
    origin: "기원",
    keyword: ["번개검","회광"]
  },
  "피리검": {
     name: "피리검",
     "type": "한손검",
     "level": 4,
     "bonus": "공격력",
     "bonusType": "percent",
     "stat": [
         {
             "begin": {
                 "atk": 42,
                 "bonus": 9
             },
             "start": 1,
             "last": 20,
             "end": {
                 "atk": 109,
                 "bonus": 15.9
             }
         },
         {
             "begin": {
                 "atk": 135,
                 "bonus": 15.9
             },
             "start": 20,
             "last": 40,
             "end": {
                 "atk": 205,
                 "bonus": 23.2
             }
         },
         {
             "begin": {
                 "atk": 231,
                 "bonus": 23.2
             },
             "start": 40,
             "last": 50,
             "end": {
                 "atk": 266,
                 "bonus": 26.8
             }
         },
         {
             "begin": {
                 "atk": 292,
                 "bonus": 26.8
             },
             "start": 50,
             "last": 60,
             "end": {
                 "atk": 327,
                 "bonus": 30.4
             }
         },
         {
             "begin": {
                 "atk": 353,
                 "bonus": 30.4
             },
             "start": 60,
             "last": 70,
             "end": {
                 "atk": 388,
                 "bonus": 34.1
             }
         },
         {
             "begin": {
                 "atk": 414,
                 "bonus": 34.1
             },
             "start": 70,
             "last": 80,
             "end": {
                 "atk": 449,
                 "bonus": 37.7
             }
         },
         {
             "begin": {
                 "atk": 475,
                 "bonus": 37.7
             },
             "start": 80,
             "last": 90,
             "end": {
                 "atk": 510,
                 "bonus": 41.3
             }
         }
     ],
     "ascension": [
         {
             "start": 20,
             "items": [
                 {
                     name: "칼바람 울프의 젖니",
                     "amount": 3
                 },
                 {
                     name: "지맥의 낡은 가지",
                     "amount": 3
                 },
                 {
                     name: "슬라임 응축액",
                     "amount": 2
                 }
             ],
             "price": 5000
         },
         {
             "start": 40,
             "items": [
                 {
                     name: "칼바람 울프의 이빨",
                     "amount": 3
                 },
                 {
                     name: "지맥의 낡은 가지",
                     "amount": 12
                 },
                 {
                     name: "슬라임 응축액",
                     "amount": 6
                 }
             ],
             "price": 15000
         },
         {
             "start": 50,
             "items": [
                 {
                     name: "칼바람 울프의 이빨",
                     "amount": 6
                 },
                 {
                     name: "지맥의 마른 잎",
                     "amount": 6
                 },
                 {
                     name: "슬라임청",
                     "amount": 6
                 }
             ],
             "price": 20000
         },
         {
             "start": 60,
             "items": [
                 {
                     name: "칼바람 울프의 부서진 이빨",
                     "amount": 3
                 },
                 {
                     name: "지맥의 마른 잎",
                     "amount": 12
                 },
                 {
                     name: "슬라임청",
                     "amount": 9
                 }
             ],
             "price": 30000
         },
         {
             "start": 70,
             "items": [
                 {
                     name: "칼바람 울프의 부서진 이빨",
                     "amount": 6
                 },
                 {
                     name: "지맥의 새싹",
                     "amount": 9
                 },
                 {
                     name: "슬라임 원액",
                     "amount": 6
                 }
             ],
             "price": 35000
         },
         {
             "start": 80,
             "items": [
                 {
                     name: "칼바람 울프의 그리운 고향",
                     "amount": 4
                 },
                 {
                     name: "지맥의 새싹",
                     "amount": 18
                 },
                 {
                     name: "슬라임 원액",
                     "amount": 12
                 }
             ],
             "price": 45000
         }
     ],
      image: "https://static.wikia.nocookie.net/gensin-impact/images/6/63/Weapon_The_Flute.png/revision/latest/scale-to-width-down/256?cb=20201119203316",
      skills: [
        {
          name: "화음",
          description: `일반공격과 강공격이 명중 시 하모니를 부여한다. 5 하모니를 얻으면 음악의 힘이 발동하고 주변 적에게 100/125/150/175/200%의 피해를 준다. 하모니는 최대 30초 동안 지속되며 0.5초마다 최대 1개를 얻을 수 있다.`
        }
      ],
      origin: "기원",
      keyword: [],
  },
  "제례검":  {
   name: "제례검",
   "type": "한손검",
   "level": 4,
   "bonus": "원소 충전 효율",
   "bonusType": "percent",
   "stat": [
       {
           "begin": {
               "atk": 41,
               "bonus": 13.3
           },
           "start": 1,
           "last": 20,
           "end": {
               "atk": 99,
               "bonus": 23.6
           }
       },
       {
           "begin": {
               "atk": 125,
               "bonus": 23.6
           },
           "start": 20,
           "last": 40,
           "end": {
               "atk": 184,
               "bonus": 34.3
           }
       },
       {
           "begin": {
               "atk": 210,
               "bonus": 34.3
           },
           "start": 40,
           "last": 50,
           "end": {
               "atk": 238,
               "bonus": 39.7
           }
       },
       {
           "begin": {
               "atk": 264,
               "bonus": 39.7
           },
           "start": 50,
           "last": 60,
           "end": {
               "atk": 293,
               "bonus": 45.1
           }
       },
       {
           "begin": {
               "atk": 319,
               "bonus": 45.1
           },
           "start": 60,
           "last": 70,
           "end": {
               "atk": 347,
               "bonus": 50.5
           }
       },
       {
           "begin": {
               "atk": 373,
               "bonus": 50.5
           },
           "start": 70,
           "last": 80,
           "end": {
               "atk": 401,
               "bonus": 55.9
           }
       },
       {
           "begin": {
               "atk": 427,
               "bonus": 55.9
           },
           "start": 80,
           "last": 90,
           "end": {
               "atk": 454,
               "bonus": 61.3
           }
       }
   ],
   "ascension": [
       {
           "start": 20,
           "items": [
               {
                   name: "라이언 투사의 족쇄",
                   "amount": 3
               },
               {
                   name: "혼돈의 장치",
                   "amount": 3
               },
               {
                   name: "이능 두루마리",
                   "amount": 2
               }
           ],
           "price": 5000
       },
       {
           "start": 40,
           "items": [
               {
                   name: "라이언 투사의 쇠사슬",
                   "amount": 3
               },
               {
                   name: "혼돈의 장치",
                   "amount": 12
               },
               {
                   name: "이능 두루마리",
                   "amount": 8
               }
           ],
           "price": 15000
       },
       {
           "start": 50,
           "items": [
               {
                   name: "라이언 투사의 쇠사슬",
                   "amount": 6
               },
               {
                   name: "혼돈의 회로",
                   "amount": 6
               },
               {
                   name: "봉마의 두루마리",
                   "amount": 6
               }
           ],
           "price": 20000
       },
       {
           "start": 60,
           "items": [
               {
                   name: "라이언 투사의 수갑",
                   "amount": 3
               },
               {
                   name: "혼돈의 회로",
                   "amount": 12
               },
               {
                   name: "봉마의 두루마리",
                   "amount": 9
               }
           ],
           "price": 30000
       },
       {
           "start": 70,
           "items": [
               {
                   name: "라이언 투사의 수갑",
                   "amount": 6
               },
               {
                   name: "혼돈의 노심",
                   "amount": 9
               },
               {
                   name: "금주의 두루마리",
                   "amount": 6
               }
           ],
           "price": 35000
       },
       {
           "start": 80,
           "items": [
               {
                   name: "라이언 투사의 이념",
                   "amount": 4
               },
               {
                   name: "혼돈의 노심",
                   "amount": 18
               },
               {
                   name: "금주의 두루마리",
                   "amount": 12
               }
           ],
           "price": 45000
       }
   ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Weapon_Sacrificial_Sword.png/revision/latest/scale-to-width-down/256?cb=20201120010840",
    skills: [
      {
        name: "침착",
        description: `원소 전투 스킬로 피해를 줄 때 40/50/60/70/80 % 확률로 재사용 대기시간이 초기화된다. 해당 효과는 30/26/22/19/16 초마다 발동된다.`
      }
    ],
    origin: "기원",
    keyword: [],
  },
  "왕실의 장검":  {
   name: "왕실의 장검",
   "type": "한손검",
   "level": 4,
   "bonus": "공격력",
   "bonusType": "percent",
   "stat": [
       {
           "begin": {
               "atk": 42,
               "bonus": 9
           },
           "start": 1,
           "last": 20,
           "end": {
               "atk": 109,
               "bonus": 15.9
           }
       },
       {
           "begin": {
               "atk": 135,
               "bonus": 15.9
           },
           "start": 20,
           "last": 40,
           "end": {
               "atk": 205,
               "bonus": 23.2
           }
       },
       {
           "begin": {
               "atk": 231,
               "bonus": 23.2
           },
           "start": 40,
           "last": 50,
           "end": {
               "atk": 266,
               "bonus": 26.8
           }
       },
       {
           "begin": {
               "atk": 292,
               "bonus": 26.8
           },
           "start": 50,
           "last": 60,
           "end": {
               "atk": 327,
               "bonus": 30.4
           }
       },
       {
           "begin": {
               "atk": 353,
               "bonus": 30.4
           },
           "start": 60,
           "last": 70,
           "end": {
               "atk": 388,
               "bonus": 34.1
           }
       },
       {
           "begin": {
               "atk": 414,
               "bonus": 34.1
           },
           "start": 70,
           "last": 80,
           "end": {
               "atk": 449,
               "bonus": 37.7
           }
       },
       {
           "begin": {
               "atk": 475,
               "bonus": 37.7
           },
           "start": 80,
           "last": 90,
           "end": {
               "atk": 510,
               "bonus": 41.3
           }
       }
   ],
   "ascension": [
       {
           "start": 20,
           "items": [
               {
                   name: "고탑 왕의 잔해",
                   "amount": 3
               },
               {
                   name: "무거운 나팔",
                   "amount": 3
               },
               {
                   name: "부서진 가면",
                   "amount": 2
               }
           ],
           "price": 5000
       },
       {
           "start": 40,
           "items": [
               {
                   name: "고탑 왕의 절망",
                   "amount": 3
               },
               {
                   name: "무거운 나팔",
                   "amount": 12
               },
               {
                   name: "부서진 가면",
                   "amount": 8
               }
           ],
           "price": 15000
       },
       {
           "start": 50,
           "items": [
               {
                   name: "고탑 왕의 절망",
                   "amount": 6
               },
               {
                   name: "흑동 나팔",
                   "amount": 6
               },
               {
                   name: "오염된 가면",
                   "amount": 6
               }
           ],
           "price": 20000
       },
       {
           "start": 60,
           "items": [
               {
                   name: "고탑 왕의 조각",
                   "amount": 3
               },
               {
                   name: "흑동 나팔",
                   "amount": 12
               },
               {
                   name: "오염된 가면",
                   "amount": 9
               }
           ],
           "price": 30000
       },
       {
           "start": 70,
           "items": [
               {
                   name: "고탑 왕의 조각",
                   "amount": 6
               },
               {
                   name: "흑수정 나팔",
                   "amount": 9
               },
               {
                   name: "불길한 가면",
                   "amount": 6
               }
           ],
           "price": 35000
       },
       {
           "start": 80,
           "items": [
               {
                   name: "고탑 왕의 깨진 꿈",
                   "amount": 4
               },
               {
                   name: "흑수정 나팔",
                   "amount": 18
               },
               {
                   name: "불길한 가면",
                   "amount": 12
               }
           ],
           "price": 65000
       }
   ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/cd/Weapon_Royal_Longsword.png/revision/latest/scale-to-width-down/256?cb=20201116034952",
    skills: [
      {
        name: "집중",
        description: `공격으로 피해를 줄 때마다 치명타 확률이 8/10/12/14/16% 증가한다. 최대 중첩수: 5회. 공격 시 치명타가 발생하면 모든 집중 효과가 사라진다.`
      }
    ],
    origin: "스타라이트 교환",
    keyword: [],
  },
  "용의 포효":  {
   name: "용의 포효",
   "type": "한손검",
   "level": 4,
   "bonus": "공격력",
   "bonusType": "percent",
   "stat": [
       {
           "begin": {
               "atk": 42,
               "bonus": 9
           },
           "start": 1,
           "last": 20,
           "end": {
               "atk": 109,
               "bonus": 15.9
           }
       },
       {
           "begin": {
               "atk": 135,
               "bonus": 15.9
           },
           "start": 20,
           "last": 40,
           "end": {
               "atk": 205,
               "bonus": 23.2
           }
       },
       {
           "begin": {
               "atk": 231,
               "bonus": 23.2
           },
           "start": 40,
           "last": 50,
           "end": {
               "atk": 266,
               "bonus": 26.8
           }
       },
       {
           "begin": {
               "atk": 292,
               "bonus": 26.8
           },
           "start": 50,
           "last": 60,
           "end": {
               "atk": 327,
               "bonus": 30.4
           }
       },
       {
           "begin": {
               "atk": 353,
               "bonus": 30.4
           },
           "start": 60,
           "last": 70,
           "end": {
               "atk": 388,
               "bonus": 34.1
           }
       },
       {
           "begin": {
               "atk": 414,
               "bonus": 34.1
           },
           "start": 70,
           "last": 80,
           "end": {
               "atk": 449,
               "bonus": 37.7
           }
       },
       {
           "begin": {
               "atk": 475,
               "bonus": 37.7
           },
           "start": 80,
           "last": 90,
           "end": {
               "atk": 510,
               "bonus": 41.3
           }
       }
   ],
   "ascension": [
       {
           "start": 20,
           "items": [
               {
                   name: "고운한림의 매끄러운 모래",
                   "amount": 3
               },
               {
                   name: "사냥꾼의 제도",
                   "amount": 3
               },
               {
                   name: "보물찾기 까마귀 휘장",
                   "amount": 2
               }
           ],
           "price": 5000
       },
       {
           "start": 40,
           "items": [
               {
                   name: "고운한림의 휘암",
                   "amount": 3
               },
               {
                   name: "사냥꾼의 제도",
                   "amount": 12
               },
               {
                   name: "보물찾기 까마귀 휘장",
                   "amount": 8
               }
           ],
           "price": 15000
       },
       {
           "start": 50,
           "items": [
               {
                   name: "고운한림의 휘암",
                   "amount": 6
               },
               {
                   name: "특수 요원의 제도",
                   "amount": 6
               },
               {
                   name: "실버 까마귀 휘장",
                   "amount": 6
               }
           ],
           "price": 20000
       },
       {
           "start": 60,
           "items": [
               {
                   name: "고운한림의 해골",
                   "amount": 3
               },
               {
                   name: "특수 요원의 제도",
                   "amount": 12
               },
               {
                   name: "실버 까마귀 휘장",
                   "amount": 9
               }
           ],
           "price": 30000
       },
       {
           "start": 70,
           "items": [
               {
                   name: "고운한림의 해골",
                   "amount": 6
               },
               {
                   name: "검사관의 제도",
                   "amount": 9
               },
               {
                   name: "골드 까마귀 휘장",
                   "amount": 6
               }
           ],
           "price": 35000
       },
       {
           "start": 80,
           "items": [
               {
                   name: "고운한림의 신체",
                   "amount": 4
               },
               {
                   name: "검사관의 제도",
                   "amount": 18
               },
               {
                   name: "골드 까마귀 휘장",
                   "amount": 12
               }
           ],
           "price": 45000
       }
   ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/e6/Weapon_Lion%27s_Roar.png/revision/latest/scale-to-width-down/256?cb=20201119232745",
    skills: [
      {
        name: "따끈따끈 찌릿찌릿",
        description: `불 원소 또는 번개 원소의 영향을 받은 적에게 가하는 피해가 20/24/28/32/36% 증가한다.`
      }
    ],
    origin: "기원",
    keyword: ["용포"],
  },
  "참암 프로토타입":  {
     name: "참암 프로토타입",
     "type": "한손검",
     "level": 4,
     "bonus": "물리 피해 보너스",
     "bonusType": "percent",
     "stat": [
         {
             "begin": {
                 "atk": 44,
                 "bonus": 7.5
             },
             "start": 1,
             "last": 20,
             "end": {
                 "atk": 119,
                 "bonus": 13.3
             }
         },
         {
             "begin": {
                 "atk": 144,
                 "bonus": 13.3
             },
             "start": 20,
             "last": 40,
             "end": {
                 "atk": 226,
                 "bonus": 19.3
             }
         },
         {
             "begin": {
                 "atk": 252,
                 "bonus": 19.3
             },
             "start": 40,
             "last": 50,
             "end": {
                 "atk": 293,
                 "bonus": 22.4
             }
         },
         {
             "begin": {
                 "atk": 319,
                 "bonus": 22.4
             },
             "start": 50,
             "last": 60,
             "end": {
                 "atk": 361,
                 "bonus": 25.4
             }
         },
         {
             "begin": {
                 "atk": 387,
                 "bonus": 25.4
             },
             "start": 60,
             "last": 70,
             "end": {
                 "atk": 429,
                 "bonus": 28.4
             }
         },
         {
             "begin": {
                 "atk": 455,
                 "bonus": 28.4
             },
             "start": 70,
             "last": 80,
             "end": {
                 "atk": 497,
                 "bonus": 31.5
             }
         },
         {
             "begin": {
                 "atk": 523,
                 "bonus": 31.5
             },
             "start": 80,
             "last": 90,
             "end": {
                 "atk": 565,
                 "bonus": 34.5
             }
         }
     ],
     "ascension": [
         {
             "start": 20,
             "items": [
                 {
                     name: "안개구름 속의 흑연단",
                     "amount": 3
                 },
                 {
                     name: "안개꽃 가루",
                     "amount": 3
                 },
                 {
                     name: "신병의 휘장",
                     "amount": 2
                 }
             ],
             "price": 5000
         },
         {
             "start": 40,
             "items": [
                 {
                     name: "안개구름 속의 수은단",
                     "amount": 3
                 },
                 {
                     name: "안개꽃 가루",
                     "amount": 12
                 },
                 {
                     name: "신병의 휘장",
                     "amount": 8
                 }
             ],
             "price": 15000
         },
         {
             "start": 50,
             "items": [
                 {
                     name: "안개구름 속의 수은단",
                     "amount": 6
                 },
                 {
                     name: "안개풀 주머니",
                     "amount": 6
                 },
                 {
                     name: "사관의 휘장",
                     "amount": 6
                 }
             ],
             "price": 20000
         },
         {
             "start": 60,
             "items": [
                 {
                     name: "안개구름 속의 금단",
                     "amount": 3
                 },
                 {
                     name: "안개풀 주머니",
                     "amount": 12
                 },
                 {
                     name: "사관의 휘장",
                     "amount": 9
                 }
             ],
             "price": 30000
         },
         {
             "start": 70,
             "items": [
                 {
                     name: "안개구름 속의 금단",
                     "amount": 6
                 },
                 {
                     name: "안개 등심",
                     "amount": 9
                 },
                 {
                     name: "위관의 휘장",
                     "amount": 6
                 }
             ],
             "price": 35000
         },
         {
             "start": 80,
             "items": [
                 {
                     name: "안개구름 속의 전환",
                     "amount": 4
                 },
                 {
                     name: "안개 등심",
                     "amount": 18
                 },
                 {
                     name: "위관의 휘장",
                     "amount": 12
                 }
             ],
             "price": 45000
         }
     ],
      image: "https://static.wikia.nocookie.net/gensin-impact/images/e/ef/Weapon_Prototype_Rancour.png/revision/latest/scale-to-width-down/256?cb=20201116034823",
      forge: [
        {
          name: "북대륙의 한손검 원형",
          amount: 1
        },
        {
          name: "백철",
          amount: 50
        },
        {
          name: "수정덩이",
          amount: 50
        },
      ],
      skills: [
        {
          name: "부서진 바위",
          description: `일반 공격 또는 강공격 명중 시 공격력과 방어력이 4/5/6/7/8% 증가한다. 지속 시간: 6초. 최대 중첩수: 4회. 해당 효과는 0.3초마다 1번 발동한다.`
        }
      ],
      origin: "단조",
      keyword: ["참암"],
  },
  "강철 벌침":  {
     name: "강철 벌침",
     "type": "한손검",
     "level": 4,
     "bonus": "원소 마스터리",
     "bonusType": "number",
     "stat": [
         {
             "begin": {
                 "atk": 42,
                 "bonus": 36
             },
             "start": 1,
             "last": 20,
             "end": {
                 "atk": 109,
                 "bonus": 64
             }
         },
         {
             "begin": {
                 "atk": 135,
                 "bonus": 64
             },
             "start": 20,
             "last": 40,
             "end": {
                 "atk": 205,
                 "bonus": 93
             }
         },
         {
             "begin": {
                 "atk": 231,
                 "bonus": 93
             },
             "start": 40,
             "last": 50,
             "end": {
                 "atk": 266,
                 "bonus": 107
             }
         },
         {
             "begin": {
                 "atk": 292,
                 "bonus": 107
             },
             "start": 50,
             "last": 60,
             "end": {
                 "atk": 327,
                 "bonus": 122
             }
         },
         {
             "begin": {
                 "atk": 353,
                 "bonus": 122
             },
             "start": 60,
             "last": 70,
             "end": {
                 "atk": 388,
                 "bonus": 136
             }
         },
         {
             "begin": {
                 "atk": 414,
                 "bonus": 136
             },
             "start": 70,
             "last": 80,
             "end": {
                 "atk": 449,
                 "bonus": 151
             }
         },
         {
             "begin": {
                 "atk": 475,
                 "bonus": 151
             },
             "start": 80,
             "last": 90,
             "end": {
                 "atk": 510,
                 "bonus": 165
             }
         }
     ],
     "ascension": [
         {
             "start": 20,
             "items": [
                 {
                     name: "흑운철 한 알",
                     "amount": 3
                 },
                 {
                     name: "약한 뼛조각",
                     "amount": 3
                 },
                 {
                     name: "구라구라 꽃꿀",
                     "amount": 2
                 }
             ],
             "price": 5000
         },
         {
             "start": 40,
             "items": [
                 {
                     name: "흑운철 조각",
                     "amount": 3
                 },
                 {
                     name: "약한 뼛조각",
                     "amount": 12
                 },
                 {
                     name: "구라구라 꽃꿀",
                     "amount": 8
                 }
             ],
             "price": 15000
         },
         {
             "start": 50,
             "items": [
                 {
                     name: "흑운철 조각",
                     "amount": 6
                 },
                 {
                     name: "단단한 뼛조각",
                     "amount": 6
                 },
                 {
                     name: "반짝반짝 꽃꿀",
                     "amount": 6
                 }
             ],
             "price": 20000
         },
         {
             "start": 60,
             "items": [
                 {
                     name: "흑운철 일각",
                     "amount": 3
                 },
                 {
                     name: "단단한 뼛조각",
                     "amount": 12
                 },
                 {
                     name: "반짝반짝 꽃꿀",
                     "amount": 9
                 }
             ],
             "price": 30000
         },
         {
             "start": 70,
             "items": [
                 {
                     name: "흑운철 일각",
                     "amount": 6
                 },
                 {
                     name: "석화한 뼛조각",
                     "amount": 9
                 },
                 {
                     name: "원소 꽃꿀",
                     "amount": 6
                 }
             ],
             "price": 35000
         },
         {
             "start": 80,
             "items": [
                 {
                     name: "흑운철 덩이",
                     "amount": 4
                 },
                 {
                     name: "석화한 뼛조각",
                     "amount": 18
                 },
                 {
                     name: "원소 꽃꿀",
                     "amount": 12
                 }
             ],
             "price": 45000
         }
     ],
      image: "https://static.wikia.nocookie.net/gensin-impact/images/3/35/Weapon_Iron_Sting.png/revision/latest/scale-to-width-down/256?cb=20201116034058",
      forge: [
        {
          name: "북대륙의 한손검 원형",
          amount: 1
        },
        {
          name: "백철",
          amount: 50
        },
        {
          name: "수정덩이",
          amount: 50
        },
      ],
      skills: [
        {
          name: "에너지 주입 가시",
          description: `원소 피해를 가한 후 6초 동안 캐릭터가 가하는 피해가 6/7.5/9/10.5/12% 증가한다. 최대 중첩수: 2회. 해당 효과는 1초마다 1번 발동한다.`
        }
      ],
      origin: "단조",
      keyword: ["벌침"]
  },
  "흑암 장검":  {
     name: "흑암 장검",
     "type": "한손검",
     "level": 4,
     "bonus": "치명타 피해",
     "bonusType": "percent",
     "stat": [
         {
             "begin": {
                 "atk": 44,
                 "bonus": 8
             },
             "start": 1,
             "last": 20,
             "end": {
                 "atk": 119,
                 "bonus": 14.1
             }
         },
         {
             "begin": {
                 "atk": 144,
                 "bonus": 14.1
             },
             "start": 20,
             "last": 40,
             "end": {
                 "atk": 226,
                 "bonus": 20.6
             }
         },
         {
             "begin": {
                 "atk": 252,
                 "bonus": 20.6
             },
             "start": 40,
             "last": 50,
             "end": {
                 "atk": 293,
                 "bonus": 23.8
             }
         },
         {
             "begin": {
                 "atk": 319,
                 "bonus": 23.8
             },
             "start": 50,
             "last": 60,
             "end": {
                 "atk": 361,
                 "bonus": 27.1
             }
         },
         {
             "begin": {
                 "atk": 387,
                 "bonus": 27.1
             },
             "start": 60,
             "last": 70,
             "end": {
                 "atk": 429,
                 "bonus": 30.3
             }
         },
         {
             "begin": {
                 "atk": 455,
                 "bonus": 30.3
             },
             "start": 70,
             "last": 80,
             "end": {
                 "atk": 497,
                 "bonus": 33.5
             }
         },
         {
             "begin": {
                 "atk": 523,
                 "bonus": 33.5
             },
             "start": 80,
             "last": 90,
             "end": {
                 "atk": 565,
                 "bonus": 36.8
             }
         }
     ],
     "ascension": [
         {
             "start": 20,
             "items": [
                 {
                     name: "고운한림의 매끄러운 모래",
                     "amount": 3
                 },
                 {
                     name: "사냥꾼의 제도",
                     "amount": 3
                 },
                 {
                     name: "슬라임 응축액",
                     "amount": 2
                 }
             ],
             "price": 5000
         },
         {
             "start": 40,
             "items": [
                 {
                     name: "고운한림의 휘암",
                     "amount": 3
                 },
                 {
                     name: "사냥꾼의 제도",
                     "amount": 12
                 },
                 {
                     name: "슬라임 응축액",
                     "amount": 8
                 }
             ],
             "price": 15000
         },
         {
             "start": 50,
             "items": [
                 {
                     name: "고운한림의 휘암",
                     "amount": 6
                 },
                 {
                     name: "특수 요원의 제도",
                     "amount": 6
                 },
                 {
                     name: "슬라임청",
                     "amount": 6
                 }
             ],
             "price": 20000
         },
         {
             "start": 60,
             "items": [
                 {
                     name: "고운한림의 해골",
                     "amount": 3
                 },
                 {
                     name: "특수 요원의 제도",
                     "amount": 12
                 },
                 {
                     name: "슬라임청",
                     "amount": 9
                 }
             ],
             "price": 30000
         },
         {
             "start": 70,
             "items": [
                 {
                     name: "고운한림의 해골",
                     "amount": 6
                 },
                 {
                     name: "검사관의 제도",
                     "amount": 9
                 },
                 {
                     name: "슬라임 원액",
                     "amount": 6
                 }
             ],
             "price": 35000
         },
         {
             "start": 80,
             "items": [
                 {
                     name: "고운한림의 신체",
                     "amount": 4
                 },
                 {
                     name: "검사관의 제도",
                     "amount": 18
                 },
                 {
                     name: "슬라임 원액",
                     "amount": 12
                 }
             ],
             "price": 45000
         }
     ],
      image: "https://static.wikia.nocookie.net/gensin-impact/images/6/6f/Weapon_Blackcliff_Longsword.png/revision/latest/scale-to-width-down/256?cb=20201116033216",
      skills: [
        {
          name: "승승장구",
          description: `적을 처치한 후 공격력이 12/15/18/21/24% 증가한다. 지속 시간: 30초. 최대 중첩수: 3회. 중첩 1회당 지속 시간은 독립 계산한다.`
        }
      ],
      origin: "스타라이트 교환",
      keyword: []
  },
  "칠흑검":  {
     name: "칠흑검",
     "type": "한손검",
     "level": 4,
     "bonus": "치명타 확률",
     "bonusType": "percent",
     "stat": [
         {
             "begin": {
                 "atk": 42,
                 "bonus": 6
             },
             "start": 1,
             "last": 20,
             "end": {
                 "atk": 109,
                 "bonus": 10.6
             }
         },
         {
             "begin": {
                 "atk": 135,
                 "bonus": 10.6
             },
             "start": 20,
             "last": 40,
             "end": {
                 "atk": 205,
                 "bonus": 15.5
             }
         },
         {
             "begin": {
                 "atk": 231,
                 "bonus": 15.5
             },
             "start": 40,
             "last": 50,
             "end": {
                 "atk": 266,
                 "bonus": 17.9
             }
         },
         {
             "begin": {
                 "atk": 292,
                 "bonus": 17.9
             },
             "start": 50,
             "last": 60,
             "end": {
                 "atk": 327,
                 "bonus": 20.3
             }
         },
         {
             "begin": {
                 "atk": 353,
                 "bonus": 20.3
             },
             "start": 60,
             "last": 70,
             "end": {
                 "atk": 388,
                 "bonus": 22.7
             }
         },
         {
             "begin": {
                 "atk": 414,
                 "bonus": 22.7
             },
             "start": 70,
             "last": 80,
             "end": {
                 "atk": 449,
                 "bonus": 25.1
             }
         },
         {
             "begin": {
                 "atk": 475,
                 "bonus": 25.1
             },
             "start": 80,
             "last": 90,
             "end": {
                 "atk": 510,
                 "bonus": 27.6
             }
         }
     ],
     "ascension": [
         {
             "start": 20,
             "items": [
                 {
                     name: "칼바람 울프의 젖니",
                     "amount": 3
                 },
                 {
                     name: "지맥의 낡은 가지",
                     "amount": 3
                 },
                 {
                     name: "슬라임 응축액",
                     "amount": 2
                 }
             ],
             "price": 5000
         },
         {
             "start": 40,
             "items": [
                 {
                     name: "칼바람 울프의 이빨",
                     "amount": 3
                 },
                 {
                     name: "지맥의 낡은 가지",
                     "amount": 12
                 },
                 {
                     name: "슬라임 응축액",
                     "amount": 8
                 }
             ],
             "price": 15000
         },
         {
             "start": 50,
             "items": [
                 {
                     name: "칼바람 울프의 이빨",
                     "amount": 6
                 },
                 {
                     name: "지맥의 마른 잎",
                     "amount": 6
                 },
                 {
                     name: "슬라임청",
                     "amount": 6
                 }
             ],
             "price": 20000
         },
         {
             "start": 60,
             "items": [
                 {
                     name: "칼바람 울프의 부서진 이빨",
                     "amount": 3
                 },
                 {
                     name: "지맥의 마른 잎",
                     "amount": 12
                 },
                 {
                     name: "슬라임청",
                     "amount": 9
                 }
             ],
             "price": 30000
         },
         {
             "start": 70,
             "items": [
                 {
                     name: "칼바람 울프의 부서진 이빨",
                     "amount": 6
                 },
                 {
                     name: "지맥의 새싹",
                     "amount": 9
                 },
                 {
                     name: "슬라임 원액",
                     "amount": 6
                 }
             ],
             "price": 35000
         },
         {
             "start": 80,
             "items": [
                 {
                     name: "칼바람 울프의 그리운 고향",
                     "amount": 6
                 },
                 {
                     name: "지맥의 새싹",
                     "amount": 27
                 },
                 {
                     name: "슬라임 원액",
                     "amount": 18
                 }
             ],
             "price": 45000
         }
     ],
      image: "https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Weapon_The_Black_Sword.png/revision/latest/scale-to-width-down/256?cb=20201116035352",
      skills: [
        {
          name: "정의",
          description: `일반 공격과 강공격으로 가하는 피해가 20/25/30/35/40% 증가한다. 또한 일반 공격과 강공격이 치명타 시 공격력의 60/70/80/90/100%에 해당하는 HP를 회복한다. 해당 효과는 5초마다 1번 발동한다.`
        }
      ],
      origin: "진주 기행 Lv.30 보상",
      keyword: ["기행검"]
  },
  "강림의 검":  {
     name: "강림의 검",
     "type": "한손검",
     "level": 4,
     "bonus": "공격력",
     "bonusType": "percent",
     "stat": [
         {
             "begin": {
                 "atk": 39,
                 "bonus": 7.7
             },
             "start": 1,
             "last": 20,
             "end": {
                 "atk": 94,
                 "bonus": 13.5
             }
         },
         {
             "begin": {
                 "atk": 120,
                 "bonus": 13.5
             },
             "start": 20,
             "last": 40,
             "end": {
                 "atk": 176,
                 "bonus": 19.7
             }
         },
         {
             "begin": {
                 "atk": 202,
                 "bonus": 19.7
             },
             "start": 40,
             "last": 50,
             "end": {
                 "atk": 229,
                 "bonus": 22.8
             }
         },
         {
             "begin": {
                 "atk": 255,
                 "bonus": 22.8
             },
             "start": 50,
             "last": 60,
             "end": {
                 "atk": 282,
                 "bonus": 25.9
             }
         },
         {
             "begin": {
                 "atk": 308,
                 "bonus": 25.9
             },
             "start": 60,
             "last": 70,
             "end": {
                 "atk": 335,
                 "bonus": 29
             }
         },
         {
             "begin": {
                 "atk": 361,
                 "bonus": 29
             },
             "start": 70,
             "last": 80,
             "end": {
                 "atk": 388,
                 "bonus": 32.1
             }
         },
         {
             "begin": {
                 "atk": 414,
                 "bonus": 32.1
             },
             "start": 80,
             "last": 90,
             "end": {
                 "atk": 440,
                 "bonus": 35.2
             }
         }
     ],
     "ascension": [
         {
             "start": 20,
             "items": [
                 {
                     name: "칼바람 울프의 젖니",
                     "amount": 3
                 },
                 {
                     name: "지맥의 낡은 가지",
                     "amount": 3
                 },
                 {
                     name: "신병의 휘장",
                     "amount": 2
                 }
             ],
             "price": 5000
         },
         {
             "start": 40,
             "items": [
                 {
                     name: "칼바람 울프의 이빨",
                     "amount": 3
                 },
                 {
                     name: "지맥의 낡은 가지",
                     "amount": 12
                 },
                 {
                     name: "신병의 휘장",
                     "amount": 8
                 }
             ],
             "price": 15000
         },
         {
             "start": 50,
             "items": [
                 {
                     name: "칼바람 울프의 이빨",
                     "amount": 6
                 },
                 {
                     name: "지맥의 마른 잎",
                     "amount": 6
                 },
                 {
                     name: "사관의 휘장",
                     "amount": 6
                 }
             ],
             "price": 20000
         },
         {
             "start": 60,
             "items": [
                 {
                     name: "칼바람 울프의 부서진 이빨",
                     "amount": 3
                 },
                 {
                     name: "지맥의 마른 잎",
                     "amount": 12
                 },
                 {
                     name: "사관의 휘장",
                     "amount": 9
                 }
             ],
             "price": 30000
         },
         {
             "start": 70,
             "items": [
                 {
                     name: "칼바람 울프의 부서진 이빨",
                     "amount": 6
                 },
                 {
                     name: "지맥의 새싹",
                     "amount": 9
                 },
                 {
                     name: "위관의 휘장",
                     "amount": 6
                 }
             ],
             "price": 35000
         },
         {
             "start": 80,
             "items": [
                 {
                     name: "칼바람 울프의 그리운 고향",
                     "amount": 4
                 },
                 {
                     name: "지맥의 새싹",
                     "amount": 18
                 },
                 {
                     name: "위관의 휘장",
                     "amount": 12
                 }
             ],
             "price": 45000
         }
     ],
      image: "https://static.wikia.nocookie.net/gensin-impact/images/1/17/Weapon_Sword_of_Descension.png/revision/latest/scale-to-width-down/256?cb=20201116035338",
      skills: [
        {
          name: "현세강림",
          description: `일반 공격과 강공격 명중 후 50%의 확률로 작은 범위에 공격력 200%의 피해를 준다. 해당 효과는 10초마다 1회 발동한다. 또한 여행자가 강림의 검을 장비시 공격력이 66pt 증가한다.`
        }
      ],
      origin: "PS4 유저 기본 지급",
      keyword: []
  },
  "부식의 검":  {
     name: "부식의 검",
     "type": "한손검",
     "level": 4,
     "bonus": "원소 충전 효율",
     "bonusType": "percent",
     "stat": [
         {
             "begin": {
                 "atk": 42,
                 "bonus": 10
             },
             "start": 1,
             "last": 20,
             "end": {
                 "atk": 109,
                 "bonus": 17.7
             }
         },
         {
             "begin": {
                 "atk": 135,
                 "bonus": 17.7
             },
             "start": 20,
             "last": 40,
             "end": {
                 "atk": 205,
                 "bonus": 25.8
             }
         },
         {
             "begin": {
                 "atk": 231,
                 "bonus": 25.8
             },
             "start": 40,
             "last": 50,
             "end": {
                 "atk": 266,
                 "bonus": 29.8
             }
         },
         {
             "begin": {
                 "atk": 292,
                 "bonus": 29.8
             },
             "start": 50,
             "last": 60,
             "end": {
                 "atk": 327,
                 "bonus": 33.8
             }
         },
         {
             "begin": {
                 "atk": 353,
                 "bonus": 33.8
             },
             "start": 60,
             "last": 70,
             "end": {
                 "atk": 388,
                 "bonus": 37.9
             }
         },
         {
             "begin": {
                 "atk": 414,
                 "bonus": 37.9
             },
             "start": 70,
             "last": 80,
             "end": {
                 "atk": 449,
                 "bonus": 41.9
             }
         },
         {
             "begin": {
                 "atk": 475,
                 "bonus": 41.9
             },
             "start": 80,
             "last": 90,
             "end": {
                 "atk": 510,
                 "bonus": 45.9
             }
         }
     ],
     "ascension": [
         {
             "start": 20,
             "items": [
                 {
                     name: "라이언 투사의 족쇄",
                     "amount": 3
                 },
                 {
                     name: "무거운 나팔",
                     "amount": 3
                 },
                 {
                     name: "신병의 휘장",
                     "amount": 2
                 }
             ],
             "price": 5000
         },
         {
             "start": 40,
             "items": [
                 {
                     name: "라이언 투사의 쇠사슬",
                     "amount": 3
                 },
                 {
                     name: "무거운 나팔",
                     "amount": 12
                 },
                 {
                     name: "신병의 휘장",
                     "amount": 8
                 }
             ],
             "price": 15000
         },
         {
             "start": 50,
             "items": [
                 {
                     name: "라이언 투사의 쇠사슬",
                     "amount": 6
                 },
                 {
                     name: "흑동 나팔",
                     "amount": 6
                 },
                 {
                     name: "사관의 휘장",
                     "amount": 6
                 }
             ],
             "price": 20000
         },
         {
             "start": 60,
             "items": [
                 {
                     name: "라이언 투사의 수갑",
                     "amount": 3
                 },
                 {
                     name: "흑동 나팔",
                     "amount": 12
                 },
                 {
                     name: "사관의 휘장",
                     "amount": 9
                 }
             ],
             "price": 30000
         },
         {
             "start": 70,
             "items": [
                 {
                     name: "라이언 투사의 수갑",
                     "amount": 6
                 },
                 {
                     name: "흑수정 나팔",
                     "amount": 9
                 },
                 {
                     name: "위관의 휘장",
                     "amount": 6
                 }
             ],
             "price": 35000
         },
         {
             "start": 80,
             "items": [
                 {
                     name: "라이언 투사의 이념",
                     "amount": 4
                 },
                 {
                     name: "흑수정 나팔",
                     "amount": 18
                 },
                 {
                     name: "위관의 휘장",
                     "amount": 12
                 }
             ],
             "price": 45000
         }
     ],
      image: "https://static.wikia.nocookie.net/gensin-impact/images/7/70/Weapon_Festering_Desire.png/revision/latest/scale-to-width-down/256?cb=20201223042935",
      skills: [
        {
          name: "끝없는 갈망",
          description: `원소전투 스킬로 가하는 피해가 16/20/24/28/32% 증가하고 원소전투스스킬의 치명타 확률이 6/7.5/9/10.5/12% 증가한다.`
        }
      ],
      origin: "백악과 흑룡 이벤트 참여",
      keyword: ["부식검"]
  },
  "뒷골목의 섬광":  {
    name: "뒷골목의 섬광",
    "type": "한손검",
    "level": 4,
    "bonus": "원소 마스터리",
    "bonusType": "number",
    "stat": [
        {
            "begin": {
                "atk": 45,
                "bonus": 12
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 134,
                "bonus": 21
            }
        },
        {
            "begin": {
                "atk": 160,
                "bonus": 21
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 261,
                "bonus": 31
            }
        },
        {
            "begin": {
                "atk": 287,
                "bonus": 31
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 340,
                "bonus": 36
            }
        },
        {
            "begin": {
                "atk": 366,
                "bonus": 36
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 419,
                "bonus": 41
            }
        },
        {
            "begin": {
                "atk": 441,
                "bonus": 41
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 499,
                "bonus": 45
            }
        },
        {
            "begin": {
                "atk": 525,
                "bonus": 45
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 579,
                "bonus": 50
            }
        },
        {
            "begin": {
                "atk": 605,
                "bonus": 50
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 620,
                "bonus": 55
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "고탑 왕의 잔해",
                    "amount": 3
                },
                {
                    name: "무거운 나팔",
                    "amount": 3
                },
                {
                    name: "이능 두루마리",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 3
                },
                {
                    name: "무거운 나팔",
                    "amount": 12
                },
                {
                    name: "이능 두루마리",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 6
                },
                {
                    name: "흑동 나팔",
                    "amount": 6
                },
                {
                    name: "봉마의 두루마리",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 3
                },
                {
                    name: "흑동 나팔",
                    "amount": 12
                },
                {
                    name: "봉마의 두루마리",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 6
                },
                {
                    name: "흑수정 나팔",
                    "amount": 9
                },
                {
                    name: "금주의 두루마리",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "고탑 왕의 깨진 꿈",
                    "amount": 4
                },
                {
                    name: "흑수정 나팔",
                    "amount": 18
                },
                {
                    name: "금주의 두루마리",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/8/83/Weapon_The_Alley_Flash.png/revision/latest/scale-to-width-down/256?cb=20210317151138",
     skills: [
       {
         name: "골목의 레인저",
         description: `캐릭터가 가하는 피해가 12/15/18/21/24% 증가한다. 피해를 받은 후, 피해 증가 효과는 5초간 사라진다.`
       }
     ],
     origin: "기원 (기간한정)",
     keyword: ["섬광","뒷골목"],
  },
  "아메노마 카게우치가타나": {
    name: "아메노마 카게우치가타나",
    type: "한손검",
    level: 4,
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/ea/Weapon_Amenoma_Kageuchi.png/revision/latest/scale-to-width-down/256?cb=20210723074436",
    stat: [
        {
            "begin": {
                "atk": 41,
                "bonus": 12
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 99,
                "bonus": 21.2
            }
        },
        {
            "begin": {
                "atk": 125,
                "bonus": 21.2
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 184,
                "bonus": 30.9
            }
        },
        {
            "begin": {
                "atk": 210,
                "bonus": 30.9
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 238,
                "bonus": 35.7
            }
        },
        {
            "begin": {
                "atk": 264,
                "bonus": 35.7
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 293,
                "bonus": 40.6
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 40.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 347,
                "bonus": 45.4
            }
        },
        {
            "begin": {
                "atk": 373,
                "bonus": 45.4
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 410,
                "bonus": 50.3
            }
        },
        {
            "begin": {
                "atk": 427,
                "bonus": 50.3
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 454,
                "bonus": 55.1
            }
        }
    ],
    bonus: "공격력",
    bonusType: "percent",
    ascension: [
        {
            "start": 20,
            "items": [
                {
                    "name": "먼바다의 산호 가지",
                    "amount": 3
                },
                {
                    "name": "혼돈의 기관",
                    "amount": 3
                },
                {
                    "name": "오래된 코등이",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "먼바다의 옥빛 가지",
                    "amount": 3
                },
                {
                    "name": "혼돈의 기관",
                    "amount": 12
                },
                {
                    "name": "오래된 코등이",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "먼바다의 옥빛 가지",
                    "amount": 6
                },
                {
                    "name": "혼돈의 중추",
                    "amount": 6
                },
                {
                    "name": "카게우치 코등이",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "먼바다의 마노 가지",
                    "amount": 3
                },
                {
                    "name": "혼돈의 중추",
                    "amount": 12
                },
                {
                    "name": "카게우치 코등이",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "먼바다의 마노 가지",
                    "amount": 6
                },
                {
                    "name": "혼돈의 눈동자",
                    "amount": 9
                },
                {
                    "name": "명검 코등이",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "먼바다의 금빛 가지",
                    "amount": 4
                },
                {
                    "name": "혼돈의 눈동자",
                    "amount": 18
                },
                {
                    "name": "명검 코등이",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    skills: [
        {
        name: "이와쿠라의 후손",
        description: "원소전투 스킬 발동 후 계승의 씨앗을 1개 획득하고, 해당 효과는 5초마다 최대 1회 발동된다. 계승의 씨앗 지속시간: 30초. 동시에 최대 3개까지 존재할 수 있다. 원소폭발 발동 후 보유 중인 계승의 씨앗이 모두 소모되며, 2초 후 소모된 계승의 씨앗의 개수에 따라 하나당 해당 캐릭터의 원소 에너지를 6/7.5/9/10.5/12pt 회복한다."
        }
    ],
    forge: [
        {
          name: "북대륙의 한손검 원형",
          amount: 1
        },
        {
          name: "자수정 덩이",
          amount: 50
        },
        {
          name: "백철",
          amount: 50
        },
    ],
    origin: "단조",
    keyword: ["이나즈마단조검","이나즈마단조한손검", "아메노마", "카게우치가타나"]
  },
  "차가운 칼날": {
    name: "차가운 칼날",
    "type": "한손검",
    "level": 3,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 39,
                "bonus": 7.7
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 94,
                "bonus": 13.5
            }
        },
        {
            "begin": {
                "atk": 113,
                "bonus": 13.5
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 169,
                "bonus": 19.7
            }
        },
        {
            "begin": {
                "atk": 189,
                "bonus": 19.7
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 216,
                "bonus": 22.8
            }
        },
        {
            "begin": {
                "atk": 236,
                "bonus": 22.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 263,
                "bonus": 25.9
            }
        },
        {
            "begin": {
                "atk": 282,
                "bonus": 25.9
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 309,
                "bonus": 29
            }
        },
        {
            "begin": {
                "atk": 329,
                "bonus": 29
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 355,
                "bonus": 32.1
            }
        },
        {
            "begin": {
                "atk": 375,
                "bonus": 32.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 401,
                "bonus": 35.2
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "고탑 왕의 잔해",
                    "amount": 2
                },
                {
                    name: "무거운 나팔",
                    "amount": 2
                },
                {
                    name: "견고한 화살촉",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 2
                },
                {
                    name: "무거운 나팔",
                    "amount": 8
                },
                {
                    name: "견고한 화살촉",
                    "amount": 2
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 4
                },
                {
                    name: "흑동 나팔",
                    "amount": 4
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 2
                },
                {
                    name: "흑동 나팔",
                    "amount": 8
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 4
                },
                {
                    name: "흑수정 나팔",
                    "amount": 6
                },
                {
                    name: "역전의 화살촉",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "고탑 왕의 깨진 꿈",
                    "amount": 3
                },
                {
                    name: "흑수정 나팔",
                    "amount": 12
                },
                {
                    name: "역전의 화살촉",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Weapon_Cool_Steel.png/revision/latest/scale-to-width-down/256?cb=20201119233444",
    skills: [
      {
        name: "해빙의 물",
        description: "물 원소 또는 얼음 원소의 영향을 받은 적에게 가하는 피해가 12/15/18/21/24%증가한다."
      }
    ],
    origin: "기원",
    keyword: [],
  },
  "여명신검": {
    name: "여명신검",
    "type": "한손검",
    "level": 3,
    "bonus": "치명타 피해",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 39,
                "bonus": 10.2
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 94,
                "bonus": 18
            }
        },
        {
            "begin": {
                "atk": 113,
                "bonus": 18
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 169,
                "bonus": 26.3
            }
        },
        {
            "begin": {
                "atk": 189,
                "bonus": 26.3
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 216,
                "bonus": 30.4
            }
        },
        {
            "begin": {
                "atk": 236,
                "bonus": 30.4
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 263,
                "bonus": 34.5
            }
        },
        {
            "begin": {
                "atk": 282,
                "bonus": 34.5
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 309,
                "bonus": 38.6
            }
        },
        {
            "begin": {
                "atk": 329,
                "bonus": 38.6
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 355,
                "bonus": 42.7
            }
        },
        {
            "begin": {
                "atk": 375,
                "bonus": 42.7
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 401,
                "bonus": 46.9
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "칼바람 울프의 젖니",
                    "amount": 2
                },
                {
                    name: "지맥의 낡은 가지",
                    "amount": 2
                },
                {
                    name: "슬라임 응축액",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 2
                },
                {
                    name: "지맥의 낡은 가지",
                    "amount": 8
                },
                {
                    name: "슬라임 응축액",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 4
                },
                {
                    name: "지맥의 마른 잎",
                    "amount": 4
                },
                {
                    name: "슬라임청",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "칼바람 울프의 부서진 이빨",
                    "amount": 2
                },
                {
                    name: "지맥의 마른 잎",
                    "amount": 8
                },
                {
                    name: "슬라임청",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "칼바람 울프의 부서진 이빨",
                    "amount": 4
                },
                {
                    name: "지맥의 새싹",
                    "amount": 6
                },
                {
                    name: "슬라임 원액",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "칼바람 울프의 그리운 고향",
                    "amount": 3
                },
                {
                    name: "지맥의 새싹",
                    "amount": 12
                },
                {
                    name: "슬라임 원액",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/23/Weapon_Harbinger_of_Dawn.png/revision/latest/scale-to-width-down/256?cb=20201119233056",
    skills: [
      {
        name: "격려",
        description: "HP가 90% 초과 시 치명타 확률이 14/17.5/21/24.5/28%증가한다."
      }
    ],
    origin: "기원",
    keyword: ["여명"]
  },
  "여행자의 검": {
    name: "여행자의 검",
    "type": "한손검",
    "level": 3,
    "bonus": "방어력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 40,
                "bonus": 6.4
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 102,
                "bonus": 11.3
            }
        },
        {
            "begin": {
                "atk": 121,
                "bonus": 11.3
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 187,
                "bonus": 16.4
            }
        },
        {
            "begin": {
                "atk": 207,
                "bonus": 16.4
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 239,
                "bonus": 19
            }
        },
        {
            "begin": {
                "atk": 259,
                "bonus": 19
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 292,
                "bonus": 21.6
            }
        },
        {
            "begin": {
                "atk": 311,
                "bonus": 21.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 344,
                "bonus": 24.1
            }
        },
        {
            "begin": {
                "atk": 363,
                "bonus": 24.1
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 396,
                "bonus": 26.7
            }
        },
        {
            "begin": {
                "atk": 415,
                "bonus": 26.7
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 448,
                "bonus": 29.3
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "라이언 투사의 족쇄",
                    "amount": 2
                },
                {
                    name: "혼돈의 장치",
                    "amount": 2
                },
                {
                    name: "이능 두루마리",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "라이언 투사의 쇠사슬",
                    "amount": 2
                },
                {
                    name: "혼돈의 장치",
                    "amount": 8
                },
                {
                    name: "이능 두루마리",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "라이언 투사의 쇠사슬",
                    "amount": 4
                },
                {
                    name: "혼돈의 회로",
                    "amount": 4
                },
                {
                    name: "봉마의 두루마리",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "라이언 투사의 수갑",
                    "amount": 2
                },
                {
                    name: "혼돈의 회로",
                    "amount": 8
                },
                {
                    name: "봉마의 두루마리",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "라이언 투사의 수갑",
                    "amount": 4
                },
                {
                    name: "혼돈의 노심",
                    "amount": 6
                },
                {
                    name: "금주의 두루마리",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "라이언 투사의 이념",
                    "amount": 3
                },
                {
                    name: "혼돈의 노심",
                    "amount": 12
                },
                {
                    name: "금주의 두루마리",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/c9/Weapon_Traveler%27s_Handy_Sword.png/revision/latest/scale-to-width-down/256?cb=20201116035456",
    skills: [
      {
        name: "여정",
        description: "원소 구슬 또는 원소 입자를 획득 시 HP를 1/1.25/1.5/1.75/2%회복한다."
      }
    ],
    origin: "상자",
    keyword: []
  },
  "흘호 생선회칼": {
    name: "흘호 생선회칼",
    "type": "한손검",
    "level": 3,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 39,
                "bonus": 7.7
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 94,
                "bonus": 13.5
            }
        },
        {
            "begin": {
                "atk": 113,
                "bonus": 13.5
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 169,
                "bonus": 19.7
            }
        },
        {
            "begin": {
                "atk": 189,
                "bonus": 19.7
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 216,
                "bonus": 22.8
            }
        },
        {
            "begin": {
                "atk": 236,
                "bonus": 22.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 263,
                "bonus": 25.9
            }
        },
        {
            "begin": {
                "atk": 282,
                "bonus": 25.9
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 309,
                "bonus": 29
            }
        },
        {
            "begin": {
                "atk": 329,
                "bonus": 29
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 355,
                "bonus": 32.1
            }
        },
        {
            "begin": {
                "atk": 375,
                "bonus": 32.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 401,
                "bonus": 35.2
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "안개구름 속의 흑연단",
                    "amount": 2
                },
                {
                    name: "안개꽃 가루",
                    "amount": 2
                },
                {
                    name: "보물찾기 까마귀 휘장",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 2
                },
                {
                    name: "안개꽃 가루",
                    "amount": 8
                },
                {
                    name: "보물찾기 까마귀 휘장",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 4
                },
                {
                    name: "안개풀 주머니",
                    "amount": 4
                },
                {
                    name: "실버 까마귀 휘장",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 2
                },
                {
                    name: "안개풀 주머니",
                    "amount": 8
                },
                {
                    name: "실버 까마귀 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 4
                },
                {
                    name: "안개 등심",
                    "amount": 6
                },
                {
                    name: "골드 까마귀 휘장",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "안개구름 속의 전환",
                    "amount": 3
                },
                {
                    name: "안개 등심",
                    "amount": 12
                },
                {
                    name: "골드 까마귀 휘장",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f7/Weapon_Fillet_Blade.png/revision/latest/scale-to-width-down/256?cb=20201116033941",
    skills: [
      {
        name: "결",
        description: "공격 명중 시 50%의 확률로 단일 타킷에게 공격력 240/280/320/360/400%의 피해를 준다. 해당 효과는 15/14/13/12/11초마다 1번 발동한다."
      }
    ],
    origin: "기원",
    keyword: ["생선회칼"],
  },
  "비천어검": {
    name: "비천어검",
    "type": "한손검",
    "level": 3,
    "bonus": "원소 충전 효율",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 38,
                "bonus": 11.3
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 86,
                "bonus": 20
            }
        },
        {
            "begin": {
                "atk": 105,
                "bonus": 20
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 151,
                "bonus": 29.2
            }
        },
        {
            "begin": {
                "atk": 171,
                "bonus": 29.2
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 193,
                "bonus": 33.8
            }
        },
        {
            "begin": {
                "atk": 212,
                "bonus": 33.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 234,
                "bonus": 38.3
            }
        },
        {
            "begin": {
                "atk": 253,
                "bonus": 38.3
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 274,
                "bonus": 42.9
            }
        },
        {
            "begin": {
                "atk": 294,
                "bonus": 42.9
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 314,
                "bonus": 47.5
            }
        },
        {
            "begin": {
                "atk": 334,
                "bonus": 47.5
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 354,
                "bonus": 52.1
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "흑운철 한 알",
                    "amount": 2
                },
                {
                    name: "약한 뼛조각",
                    "amount": 2
                },
                {
                    name: "신병의 휘장",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "흑운철 조각",
                    "amount": 2
                },
                {
                    name: "약한 뼛조각",
                    "amount": 8
                },
                {
                    name: "신병의 휘장",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "흑운철 조각",
                    "amount": 4
                },
                {
                    name: "단단한 뼛조각",
                    "amount": 4
                },
                {
                    name: "사관의 휘장",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "흑운철 일각",
                    "amount": 2
                },
                {
                    name: "단단한 뼛조각",
                    "amount": 8
                },
                {
                    name: "사관의 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "흑운철 일각",
                    "amount": 4
                },
                {
                    name: "석화한 뼛조각",
                    "amount": 6
                },
                {
                    name: "위관의 휘장",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "흑운철 덩이",
                    "amount": 3
                },
                {
                    name: "석화한 뼛조각",
                    "amount": 12
                },
                {
                    name: "위관의 휘장",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    skills: [
      {
        name: "결심",
        description: "원소폭발 발동 후 공격력과 이동속도가 12/15/18/21/24%증가한다."
      }
    ],
    origin: "기원",
    keyword: [],
 },
  "암철검": {
    name: "암철검",
    "type": "한손검",
    "level": 3,
    "bonus": "원소 마스터리",
    "bonusType": "number",
    "stat": [
        {
            "begin": {
                "atk": 39,
                "bonus": 31
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 94,
                "bonus": 54
            }
        },
        {
            "begin": {
                "atk": 113,
                "bonus": 54
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 169,
                "bonus": 79
            }
        },
        {
            "begin": {
                "atk": 189,
                "bonus": 79
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 216,
                "bonus": 91
            }
        },
        {
            "begin": {
                "atk": 236,
                "bonus": 91
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 263,
                "bonus": 104
            }
        },
        {
            "begin": {
                "atk": 282,
                "bonus": 104
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 309,
                "bonus": 116
            }
        },
        {
            "begin": {
                "atk": 329,
                "bonus": 116
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 355,
                "bonus": 128
            }
        },
        {
            "begin": {
                "atk": 375,
                "bonus": 128
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 401,
                "bonus": 141
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "고운한림의 매끄러운 모래",
                    "amount": 2
                },
                {
                    name: "사냥꾼의 제도",
                    "amount": 2
                },
                {
                    name: "부서진 가면",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "고운한림의 휘암",
                    "amount": 2
                },
                {
                    name: "사냥꾼의 제도",
                    "amount": 8
                },
                {
                    name: "부서진 가면",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "고운한림의 휘암",
                    "amount": 4
                },
                {
                    name: "특수 요원의 제도",
                    "amount": 4
                },
                {
                    name: "오염된 가면",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "고운한림의 해골",
                    "amount": 2
                },
                {
                    name: "특수 요원의 제도",
                    "amount": 8
                },
                {
                    name: "오염된 가면",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "고운한림의 해골",
                    "amount": 4
                },
                {
                    name: "검사관의 제도",
                    "amount": 6
                },
                {
                    name: "불길한 가면",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "고운한림의 신체",
                    "amount": 3
                },
                {
                    name: "검사관의 제도",
                    "amount": 12
                },
                {
                    name: "불길한 가면",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/34/Weapon_Skyrider_Sword.png/revision/latest/scale-to-width-down/256?cb=20201116035206",
    skills: [
      {
        name: "과전류",
        description: "과부하, 초전도, 감전, 번개 원소 확산 반응 후 12초 동안 공격력이 20/25/30/35/40% 증가한다."
      }
    ],
    origin: "리월항 남동쪽 '쾌도진'에게 대화",
    keyword: [],
 },
  "실버 소드": {
   name: "실버 소드",
   "type": "한손검",
   "level": 2,
   "stat": [
       {
           "begin": {
               "atk": 33,
           },
           "start": 1,
           "last": 20,
           "end": {
               "atk": 80
           }
       },
       {
           "begin": {
               "atk": 91
           },
           "start": 20,
           "last": 40,
           "end": {
               "atk": 139
           }
       },
       {
           "begin": {
               "atk": 151
           },
           "start": 40,
           "last": 50,
           "end": {
               "atk": 174,
           }
       },
       {
           "begin": {
               "atk": 186
           },
           "start": 50,
           "last": 60,
           "end": {
               "atk": 209
           }
       },
       {
           "begin": {
               "atk": 220
           },
           "start": 60,
           "last": 70,
           "end": {
               "atk": 243
           }
       }
   ],
   "ascension": [
       {
           "start": 20,
           "items": [
               {
                   name: "고탑 왕의 잔해",
                   "amount": 1
               },
               {
                   name: "무거운 나팔",
                   "amount": 1
               },
               {
                   name: "견고한 화살촉",
                   "amount": 1
               }
           ],
           "price": 5000
       },
       {
           "start": 40,
           "items": [
               {
                   name: "고탑 왕의 절망",
                   "amount": 1
               },
               {
                   name: "무거운 나팔",
                   "amount": 5
               },
               {
                   name: "견고한 화살촉",
                   "amount": 4
               }
           ],
           "price": 5000
       },
       {
           "start": 50,
           "items": [
               {
                   name: "고탑왕의 절망",
                   "amount": 3
               },
               {
                   name: "흑동 나팔",
                   "amount": 3
               },
               {
                   name: "날카로운 화살촉",
                   "amount": 3
               }
           ],
           "price": 10000
       },
       {
           "start": 60,
           "items": [
               {
                   name: "고탑 왕의 조각",
                   "amount": 1
               },
               {
                   name: "흑동 나팔",
                   "amount": 5
               },
               {
                   name: "날카로운 화살촉",
                   "amount": 4
               }
           ],
           "price": 10000
       }
   ],
   image: "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Weapon_Silver_Sword.png/revision/latest/scale-to-width-down/256?cb=20201116035150",
   origin: "기원"
 },
  "무인검": {
   name: "무인검",
   "type": "한손검",
   "level": 1,
   "stat": [
       {
           "begin": {
               "atk": 23,
           },
           "start": 1,
           "last": 20,
           "end": {
               "atk": 56
           }
       },
       {
           "begin": {
               "atk": 68
           },
           "start": 20,
           "last": 40,
           "end": {
               "atk": 102
           }
       },
       {
           "begin": {
               "atk": 113
           },
           "start": 40,
           "last": 50,
           "end": {
               "atk": 130,
           }
       },
       {
           "begin": {
               "atk": 141
           },
           "start": 50,
           "last": 60,
           "end": {
               "atk": 158
           }
       },
       {
           "begin": {
               "atk": 169
           },
           "start": 60,
           "last": 70,
           "end": {
               "atk": 185
           }
       }
   ],
   "ascension": [
       {
           "start": 20,
           "items": [
               {
                   name: "고탑 왕의 잔해",
                   "amount": 1
               },
               {
                   name: "무거운 나팔",
                   "amount": 1
               },
               {
                   name: "견고한 화살촉",
                   "amount": 1
               }
           ],
           "price": 0
       },
       {
           "start": 40,
           "items": [
               {
                   name: "고탑 왕의 절망",
                   "amount": 1
               },
               {
                   name: "무거운 나팔",
                   "amount": 4
               },
               {
                   name: "견고한 화살촉",
                   "amount": 2
               }
           ],
           "price": 5000
       },
       {
           "start": 50,
           "items": [
               {
                   name: "고탑왕의 절망",
                   "amount": 2
               },
               {
                   name: "흑동 나팔",
                   "amount": 2
               },
               {
                   name: "날카로운 화살촉",
                   "amount": 2
               }
           ],
           "price": 10000
       },
       {
           "start": 60,
           "items": [
               {
                   name: "고탑 왕의 조각",
                   "amount": 1
               },
               {
                   name: "흑동 나팔",
                   "amount": 4
               },
               {
                   name: "날카로운 화살촉",
                   "amount": 3
               }
           ],
           "price": 10000
       }
   ],
   image: "https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Weapon_Dull_Blade.png/revision/latest/scale-to-width-down/256?cb=20201119235841",
   origin: "상점 구매 및 보물상자"
 },
 //양손검
  "천공의 긍지":  {
   name: "천공의 긍지",
   "type": "양손검",
   "level": 5,
   "bonus": "원소 충전 효율",
   "bonusType": "percent",
   "stat": [
       {
           "begin": {
               "atk": 48,
               "bonus": 8
           },
           "start": 1,
           "last": 20,
           "end": {
               "atk": 133,
               "bonus": 14.1
           }
       },
       {
           "begin": {
               "atk": 164,
               "bonus": 14.1
           },
           "start": 20,
           "last": 40,
           "end": {
               "atk": 261,
               "bonus": 20.6
           }
       },
       {
           "begin": {
               "atk": 292,
               "bonus": 20.6
           },
           "start": 40,
           "last": 50,
           "end": {
               "atk": 341,
               "bonus": 23.8
           }
       },
       {
           "begin": {
               "atk": 373,
               "bonus": 23.8
           },
           "start": 50,
           "last": 60,
           "end": {
               "atk": 423,
               "bonus": 27.1
           }
       },
       {
           "begin": {
               "atk": 455,
               "bonus": 27.1
           },
           "start": 60,
           "last": 70,
           "end": {
               "atk": 506,
               "bonus": 30.3
           }
       },
       {
           "begin": {
               "atk": 537,
               "bonus": 30.3
           },
           "start": 70,
           "last": 80,
           "end": {
               "atk": 590,
               "bonus": 33.5
           }
       },
       {
           "begin": {
               "atk": 621,
               "bonus": 33.5
           },
           "start": 80,
           "last": 90,
           "end": {
               "atk": 674,
               "bonus": 36.8
           }
       }
   ],
   "ascension": [
       {
           "start": 20,
           "items": [
               {
                   name: "칼바람 울프의 젖니",
                   "amount": 5
               },
               {
                   name: "지맥의 낡은 가지",
                   "amount": 5
               },
               {
                   name: "슬라임 응축액",
                   "amount": 3
               }
           ],
           "price": 10000
       },
       {
           "start": 40,
           "items": [
               {
                   name: "칼바람 울프의 이빨",
                   "amount": 5
               },
               {
                   name: "지맥의 낡은 가지",
                   "amount": 18
               },
               {
                   name: "슬라임 응축액",
                   "amount": 12
               }
           ],
           "price": 20000
       },
       {
           "start": 50,
           "items": [
               {
                   name: "칼바람 울프의 이빨",
                   "amount": 9
               },
               {
                   name: "지맥의 마른 잎",
                   "amount": 9
               },
               {
                   name: "슬라임청",
                   "amount": 9
               }
           ],
           "price": 30000
       },
       {
           "start": 60,
           "items": [
               {
                   name: "칼바람 울프의 부서진 이빨",
                   "amount": 5
               },
               {
                   name: "지맥의 마른 잎",
                   "amount": 18
               },
               {
                   name: "슬라임청",
                   "amount": 14
               }
           ],
           "price": 45000
       },
       {
           "start": 70,
           "items": [
               {
                   name: "칼바람 울프의 부서진 이빨",
                   "amount": 9
               },
               {
                   name: "지맥의 새싹",
                   "amount": 14
               },
               {
                   name: "슬라임 원액",
                   "amount": 9
               }
           ],
           "price": 55000
       },
       {
           "start": 80,
           "items": [
               {
                   name: "칼바람 울프의 그리운 고향",
                   "amount": 6
               },
               {
                   name: "지맥의 새싹",
                   "amount": 27
               },
               {
                   name: "슬라임 원액",
                   "amount": 18
               }
           ],
           "price": 65000
       }
   ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Weapon_Skyward_Pride.png/revision/latest/scale-to-width-down/512?cb=20201116035255",
    skills: [
      {
        name: "맑은 하늘을 가르는 용의 척추",
        description: `가하는 피해가 8/10/12/14/16% 증가한다. 원소폭발 사용후 일반 공격과 강공격 명중 시 진공의 칼날이 발사되어 경로상의 적들에게 공격력의 80/100/120/140/160%의 피해를 준다. 지속 시간: 20초 또는 진공 칼날 8번 발사할 때까지.`
      }
    ],
    origin: "기원",
    keyword: ["긍지", "천공대검"],
  },
  "늑대의 말로":  {
   name: "늑대의 말로",
   "type": "양손검",
   "level": 5,
   "bonus": "공격력",
   "bonusType": "percent",
   "stat": [
       {
           "begin": {
               "atk": 46,
               "bonus": 10.8
           },
           "start": 1,
           "last": 20,
           "end": {
               "atk": 122,
               "bonus": 19.1
           }
       },
       {
           "begin": {
               "atk": 153,
               "bonus": 19.1
           },
           "start": 20,
           "last": 40,
           "end": {
               "atk": 235,
               "bonus": 27.8
           }
       },
       {
           "begin": {
               "atk": 266,
               "bonus": 27.8
           },
           "start": 40,
           "last": 50,
           "end": {
               "atk": 308,
               "bonus": 32.2
           }
       },
       {
           "begin": {
               "atk": 340,
               "bonus": 32.2
           },
           "start": 50,
           "last": 60,
           "end": {
               "atk": 382,
               "bonus": 36.5
           }
       },
       {
           "begin": {
               "atk": 414,
               "bonus": 36.5
           },
           "start": 60,
           "last": 70,
           "end": {
               "atk": 457,
               "bonus": 40.9
           }
       },
       {
           "begin": {
               "atk": 488,
               "bonus": 40.9
           },
           "start": 70,
           "last": 80,
           "end": {
               "atk": 532,
               "bonus": 45.3
           }
       },
       {
           "begin": {
               "atk": 563,
               "bonus": 45.3
           },
           "start": 80,
           "last": 90,
           "end": {
               "atk": 608,
               "bonus": 49.6
           }
       }
   ],
   "ascension": [
       {
           "start": 20,
           "items": [
               {
                   name: "라이언 투사의 족쇄",
                   "amount": 5
               },
               {
                   name: "혼돈의 장치",
                   "amount": 5
               },
               {
                   name: "이능 두루마리",
                   "amount": 3
               }
           ],
           "price": 10000
       },
       {
           "start": 40,
           "items": [
               {
                   name: "라이언 투사의 쇠사슬",
                   "amount": 5
               },
               {
                   name: "혼돈의 장치",
                   "amount": 18
               },
               {
                   name: "이능 두루마리",
                   "amount": 12
               }
           ],
           "price": 20000
       },
       {
           "start": 50,
           "items": [
               {
                   name: "라이언 투사의 쇠사슬",
                   "amount": 9
               },
               {
                   name: "혼돈의 회로",
                   "amount": 9
               },
               {
                   name: "봉마의 두루마리",
                   "amount": 9
               }
           ],
           "price": 30000
       },
       {
           "start": 60,
           "items": [
               {
                   name: "라이언 투사의 수갑",
                   "amount": 5
               },
               {
                   name: "혼돈의 회로",
                   "amount": 18
               },
               {
                   name: "봉마의 두루마리",
                   "amount": 14
               }
           ],
           "price": 45000
       },
       {
           "start": 70,
           "items": [
               {
                   name: "라이언 투사의 수갑",
                   "amount": 9
               },
               {
                   name: "혼돈의 노심",
                   "amount": 14
               },
               {
                   name: "금주의 두루마리",
                   "amount": 9
               }
           ],
           "price": 55000
       },
       {
           "start": 80,
           "items": [
               {
                   name: "라이언 투사의 이념",
                   "amount": 6
               },
               {
                   name: "혼돈의 노심",
                   "amount": 27
               },
               {
                   name: "금주의 두루마리",
                   "amount": 18
               }
           ],
           "price": 65000
       }
   ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/4f/Weapon_Wolf%27s_Gravestone.png/revision/latest/scale-to-width-down/512?cb=20201116035623",
    skills: [
      {
        name: "늑대 같은 사냥꾼",
        description: `공격력 +20/25/30/35/40%. HP가 30% 미만인 적을 명중 시 모든 파티원의 공격력이 40/50/60/70/80% 증가한다. 지속 시간: 12초. 해당 효과는 30초마다 1번 발동한다.`
      }
    ],
    origin: "기원",
    keyword: ["늑말","말로","늑대대검"],
  },
  "무공의 검":  {
   name: "무공의 검",
   "type": "양손검",
   "level": 5,
   "bonus": "공격력",
   "bonusType": "percent",
   "stat": [
       {
           "begin": {
               "atk": 46,
               "bonus": 10.8
           },
           "start": 1,
           "last": 20,
           "end": {
               "atk": 122,
               "bonus": 19.1
           }
       },
       {
           "begin": {
               "atk": 153,
               "bonus": 19.1
           },
           "start": 20,
           "last": 40,
           "end": {
               "atk": 235,
               "bonus": 27.8
           }
       },
       {
           "begin": {
               "atk": 266,
               "bonus": 27.8
           },
           "start": 40,
           "last": 50,
           "end": {
               "atk": 308,
               "bonus": 32.2
           }
       },
       {
           "begin": {
               "atk": 340,
               "bonus": 32.2
           },
           "start": 50,
           "last": 60,
           "end": {
               "atk": 382,
               "bonus": 36.5
           }
       },
       {
           "begin": {
               "atk": 414,
               "bonus": 36.5
           },
           "start": 60,
           "last": 70,
           "end": {
               "atk": 457,
               "bonus": 40.9
           }
       },
       {
           "begin": {
               "atk": 488,
               "bonus": 40.9
           },
           "start": 70,
           "last": 80,
           "end": {
               "atk": 532,
               "bonus": 45.3
           }
       },
       {
           "begin": {
               "atk": 563,
               "bonus": 45.3
           },
           "start": 80,
           "last": 90,
           "end": {
               "atk": 608,
               "bonus": 49.6
           }
       }
   ],
   "ascension": [
       {
           "start": 20,
           "items": [
               {
                   name: "안개구름 속의 흑연단",
                   "amount": 5
               },
               {
                   name: "안개꽃 가루",
                   "amount": 5
               },
               {
                   name: "보물찾기 까마귀 휘장",
                   "amount": 3
               }
           ],
           "price": 10000
       },
       {
           "start": 40,
           "items": [
               {
                   name: "안개구름 속의 수은단",
                   "amount": 5
               },
               {
                   name: "안개꽃 가루",
                   "amount": 18
               },
               {
                   name: "보물찾기 까마귀 휘장",
                   "amount": 12
               }
           ],
           "price": 20000
       },
       {
           "start": 50,
           "items": [
               {
                   name: "안개구름 속의 수은단",
                   "amount": 9
               },
               {
                   name: "안개풀 주머니",
                   "amount": 9
               },
               {
                   name: "실버 까마귀 휘장",
                   "amount": 9
               }
           ],
           "price": 30000
       },
       {
           "start": 60,
           "items": [
               {
                   name: "안개구름 속의 금단",
                   "amount": 5
               },
               {
                   name: "안개풀 주머니",
                   "amount": 18
               },
               {
                   name: "실버 까마귀 휘장",
                   "amount": 14
               }
           ],
           "price": 45000
       },
       {
           "start": 70,
           "items": [
               {
                   name: "안개구름 속의 금단",
                   "amount": 9
               },
               {
                   name: "안개 등심",
                   "amount": 14
               },
               {
                   name: "골드 까마귀 휘장",
                   "amount": 9
               }
           ],
           "price": 55000
       },
       {
           "start": 80,
           "items": [
               {
                   name: "안개구름 속의 전환",
                   "amount": 6
               },
               {
                   name: "안개 등심",
                   "amount": 27
               },
               {
                   name: "골드 까마귀 휘장",
                   "amount": 18
               }
           ],
           "price": 65000
       }
   ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f7/Weapon_The_Unforged.png/revision/latest/scale-to-width-down/512?cb=20201129060814",
    skills: [
      {
        name: "금빛의 옥·제군의 길",
        description: `보호막 강화 효과가 20/25/30/35/40% 증가한다. 공격 명중 후 공격력이 4/5/6/7/8% 증가한다. 지속 시간: 8초. 최대 중첩수: 5회. 해당 효과는 0.3초마다 1번 발동한다. 또한 보호막 존재 시 해당 효과의 공격력 증가 효과가 100% 증가한다`
      }
    ],
    origin: "기원",
    keyword: ["무공검","무공"],
  },
  "송뢰가 울릴 무렵":  {
   name: "송뢰가 울릴 무렵",
   "type": "양손검",
   "level": 5,
   "bonus": "물리 피해 보너스",
   "bonusType": "percent",
   "stat": [
       {
           "begin": {
               "atk": 49,
               "bonus": 4.5
           },
           "start": 1,
           "last": 20,
           "end": {
               "atk": 145,
               "bonus": 8
           }
       },
       {
           "begin": {
               "atk": 176,
               "bonus": 8
           },
           "start": 20,
           "last": 40,
           "end": {
               "atk": 286,
               "bonus": 11.6
           }
       },
       {
           "begin": {
               "atk": 317,
               "bonus": 11.6
           },
           "start": 40,
           "last": 50,
           "end": {
               "atk": 374,
               "bonus": 13.4
           }
       },
       {
           "begin": {
               "atk": 406,
               "bonus": 13.4
           },
           "start": 50,
           "last": 60,
           "end": {
               "atk": 464,
               "bonus": 15.2
           }
       },
       {
           "begin": {
               "atk": 495,
               "bonus": 15.2
           },
           "start": 60,
           "last": 70,
           "end": {
               "atk": 555,
               "bonus": 17
           }
       },
       {
           "begin": {
               "atk": 586,
               "bonus": 17
           },
           "start": 70,
           "last": 80,
           "end": {
               "atk": 648,
               "bonus": 18.9
           }
       },
       {
           "begin": {
               "atk": 679,
               "bonus": 18.9
           },
           "start": 80,
           "last": 90,
           "end": {
               "atk": 741,
               "bonus": 20.7
           }
       }
   ],
   "ascension": [
       {
           "start": 20,
           "items": [
               {
                   name: "고탑 왕의 잔해",
                   "amount": 5
               },
               {
                   name: "무거운 나팔",
                   "amount": 5
               },
               {
                   name: "부서진 가면",
                   "amount": 3
               }
           ],
           "price": 10000
       },
       {
           "start": 40,
           "items": [
               {
                   name: "고탑 왕의 절망",
                   "amount": 5
               },
               {
                   name: "무거운 나팔",
                   "amount": 18
               },
               {
                   name: "부서진 가면",
                   "amount": 12
               }
           ],
           "price": 20000
       },
       {
           "start": 50,
           "items": [
               {
                   name: "고탑 왕의 절망",
                   "amount": 9
               },
               {
                   name: "흑동 나팔",
                   "amount": 9
               },
               {
                   name: "오염된 가면",
                   "amount": 9
               }
           ],
           "price": 30000
       },
       {
           "start": 60,
           "items": [
               {
                   name: "고탑 왕의 조각",
                   "amount": 5
               },
               {
                   name: "흑동 나팔",
                   "amount": 18
               },
               {
                   name: "오염된 가면",
                   "amount": 14
               }
           ],
           "price": 45000
       },
       {
           "start": 70,
           "items": [
               {
                   name: "고탑 왕의 조각",
                   "amount": 9
               },
               {
                   name: "흑수정 나팔",
                   "amount": 14
               },
               {
                   name: "불길한 가면",
                   "amount": 9
               }
           ],
           "price": 55000
       },
       {
           "start": 80,
           "items": [
               {
                   name: "고탑 왕의 꺠진 꿈",
                   "amount": 6
               },
               {
                   name: "흑수정 나팔",
                   "amount": 27
               },
               {
                   name: "불길한 가면",
                   "amount": 18
               }
           ],
           "price": 65000
       }
   ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/d/dd/Weapon_Song_of_Broken_Pines.png/revision/latest/scale-to-width-down/512?cb=20210518151739",
    skills: [
      {
        name: "반역하는 깃발의 노래",
        description: `바람 속을 유랑하는 「천년의 대악장」의 일부분. 공격력이 16/20/24/28/32% 증가한다. 일반 공격이나 강공격이 적에게 명중 시, 캐릭터는 속삭임의 부적을 한 장 획득한다. 이는 0.3초마다 한 번 발동된다. 속삭임의 부적 4장 소유 시, 부적을 모두 소모하여 주변의 파티 내 모든 캐릭터에게 12초동안 「천년의 대악장·깃발의 노래」 효과를 부여한다: 일반 공격 속도가 12/15/18/21/24% 증가하고 공격력이 20/25/30/35/40% 증가한다. 발동 후 20초동안은 속삭임의 부적을 획득할 수 없다. 「천년의 대악장」의 수치 효과 중 동일 유형의 수치 효과는 중첩될 수 없다.`
      }
    ],
    origin: "기원",
    keyword: ["송뢰"],
  },
  "페보니우스 대검":  {
    name: "페보니우스 대검",
    "type": "양손검",
    "level": 4,
    "bonus": "원소 충전 효율",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 41,
                "bonus": 13.3
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 99,
                "bonus": 23.6
            }
        },
        {
            "begin": {
                "atk": 125,
                "bonus": 23.6
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 184,
                "bonus": 34.3
            }
        },
        {
            "begin": {
                "atk": 210,
                "bonus": 34.3
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 238,
                "bonus": 39.7
            }
        },
        {
            "begin": {
                "atk": 264,
                "bonus": 39.7
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 293,
                "bonus": 45.1
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 45.1
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 347,
                "bonus": 50.5
            }
        },
        {
            "begin": {
                "atk": 373,
                "bonus": 50.5
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 401,
                "bonus": 55.9
            }
        },
        {
            "begin": {
                "atk": 427,
                "bonus": 55.9
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 454,
                "bonus": 61.3
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "라이언 투사의 족쇄",
                    "amount": 3
                },
                {
                    name: "혼돈의 장치",
                    "amount": 3
                },
                {
                    name: "신병의 휘장",
                    "amount": 3
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "라이언 투사의 쇠사슬",
                    "amount": 3
                },
                {
                    name: "혼돈의 장치",
                    "amount": 12
                },
                {
                    name: "신병의 휘장",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "라이언 투사의 쇠사슬",
                    "amount": 6
                },
                {
                    name: "혼돈의 회로",
                    "amount": 6
                },
                {
                    name: "사관의 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "라이언 투사의 수갑",
                    "amount": 3
                },
                {
                    name: "혼돈의 회로",
                    "amount": 12
                },
                {
                    name: "사관의 휘장",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "라이언 투사의 수갑",
                    "amount": 6
                },
                {
                    name: "혼돈의 노심",
                    "amount": 9
                },
                {
                    name: "위관의 휘장",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "라이언 투사의 이념",
                    "amount": 4
                },
                {
                    name: "혼돈의 노심",
                    "amount": 18
                },
                {
                    name: "위관의 휘장",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Weapon_Favonius_Greatsword.png/revision/latest/scale-to-width-down/512?cb=20201119235934",
     skills: [
       {
         name: "바람과 함께",
         description: `치명타 시 60/70/80/90/100%의 확률로 소량의 원소 구슬이 생성되고 캐릭터의 원소 에너지를 6pt 회복한다. 해당 효과는 12/10.5/9/7.5/6초마다 1번 발동한다.`
       }
     ],
     origin: "기원",
     keyword: ["페보대검"]
   },
  "시간의 검":  {
    name: "시간의 검",
    "type": "양손검",
    "level": 4,
    "bonus": "HP",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 9
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 15.9
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 15.9
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 23.2
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 23.2
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 26.8
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 26.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 30.4
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 30.4
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 34.1
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 34.1
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 37.7
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 37.7
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 41.3
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "고탑 왕의 잔해",
                    "amount": 3
                },
                {
                    name: "무거운 나팔",
                    "amount": 3
                },
                {
                    name: "구라구라 꽃꿀",
                    "amount": 3
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 3
                },
                {
                    name: "무거운 나팔",
                    "amount": 12
                },
                {
                    name: "구라구라 꽃꿀",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 6
                },
                {
                    name: "흑동 나팔",
                    "amount": 6
                },
                {
                    name: "반짝반짝 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 3
                },
                {
                    name: "흑동 나팔",
                    "amount": 12
                },
                {
                    name: "반짝반짝 꽃꿀",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 6
                },
                {
                    name: "흑수정 나팔",
                    "amount": 9
                },
                {
                    name: "원소 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "고탑 왕의 깨진 꿈",
                    "amount": 4
                },
                {
                    name: "흑수정 나팔",
                    "amount": 18
                },
                {
                    name: "원소 꽃꿀",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/6/6e/Weapon_The_Bell.png/revision/latest/scale-to-width-down/512?cb=20201116035344",
     skills: [
       {
         name: "반역의 수호자",
         description: `피격 시 HP 최대치의 20/23/26/29/32% 피해를 흡수하는 보호막이 생성된다. 보호막은 10초간 지속하거나 보호막이 파괴될때까지 유지된다. 45초 마다 1회 발동한다. 보호막이 존재 시 캐릭터가 가하는 피해가 12/15/18/21/24% 증가한다.`
       }
     ],
     origin: "기원",
     keyword: []
   },
  "제례 대검":  {
    name: "제례 대검",
    "type": "양손검",
    "level": 4,
    "bonus": "원소 충전 효율",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 44,
                "bonus": 6.7
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 119,
                "bonus": 11.8
            }
        },
        {
            "begin": {
                "atk": 144,
                "bonus": 11.8
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 226,
                "bonus": 17.2
            }
        },
        {
            "begin": {
                "atk": 252,
                "bonus": 17.2
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 293,
                "bonus": 19.9
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 19.9
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 361,
                "bonus": 22.6
            }
        },
        {
            "begin": {
                "atk": 387,
                "bonus": 22.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 429,
                "bonus": 25.2
            }
        },
        {
            "begin": {
                "atk": 455,
                "bonus": 25.2
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 497,
                "bonus": 27.9
            }
        },
        {
            "begin": {
                "atk": 523,
                "bonus": 27.9
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 565,
                "bonus": 30.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "칼바람 울프의 젖니",
                    "amount": 3
                },
                {
                    name: "지맥의 낡은 가지",
                    "amount": 3
                },
                {
                    name: "견고한 화살촉",
                    "amount": 3
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 3
                },
                {
                    name: "지맥의 낡은 가지",
                    "amount": 12
                },
                {
                    name: "견고한 화살촉",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 6
                },
                {
                    name: "지맥의 마른 잎",
                    "amount": 6
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "칼바람 울프의 부서진 이빨",
                    "amount": 3
                },
                {
                    name: "지맥의 마른 잎",
                    "amount": 12
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "칼바람 울프의 부서진 이빨",
                    "amount": 6
                },
                {
                    name: "지맥의 새싹",
                    "amount": 9
                },
                {
                    name: "역전의 화살촉",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "칼바람 울프의 그리운 고향",
                    "amount": 4
                },
                {
                    name: "지맥의 새싹",
                    "amount": 18
                },
                {
                    name: "역전의 화살촉",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/1/17/Weapon_Sacrificial_Greatsword.png/revision/latest/scale-to-width-down/512?cb=20201120004023",
     skills: [
       {
         name: "침착",
         description: `원소 전투 스킬로 피해를 줄 때 40/50/60/70/80%의 확률로 해당 스킬의 재발동 대기시간이 초기화된다. 해당 효과는 30/26/22/19/16초마다 1번 발동한다.`
       }
     ],
     origin: "기원",
     keyword: []
   },
  "왕실의 대검":  {
     name: "왕실의 대검",
     "type": "양손검",
     "level": 4,
     "bonus": "공격력",
     "bonusType": "percent",
     "stat": [
         {
             "begin": {
                 "atk": 44,
                 "bonus": 6
             },
             "start": 1,
             "last": 20,
             "end": {
                 "atk": 119,
                 "bonus": 10.6
             }
         },
         {
             "begin": {
                 "atk": 144,
                 "bonus": 10.6
             },
             "start": 20,
             "last": 40,
             "end": {
                 "atk": 226,
                 "bonus": 15.5
             }
         },
         {
             "begin": {
                 "atk": 252,
                 "bonus": 15.5
             },
             "start": 40,
             "last": 50,
             "end": {
                 "atk": 293,
                 "bonus": 17.9
             }
         },
         {
             "begin": {
                 "atk": 319,
                 "bonus": 17.9
             },
             "start": 50,
             "last": 60,
             "end": {
                 "atk": 361,
                 "bonus": 20.3
             }
         },
         {
             "begin": {
                 "atk": 387,
                 "bonus": 20.3
             },
             "start": 60,
             "last": 70,
             "end": {
                 "atk": 429,
                 "bonus": 22.7
             }
         },
         {
             "begin": {
                 "atk": 455,
                 "bonus": 22.7
             },
             "start": 70,
             "last": 80,
             "end": {
                 "atk": 497,
                 "bonus": 25.1
             }
         },
         {
             "begin": {
                 "atk": 523,
                 "bonus": 25.1
             },
             "start": 80,
             "last": 90,
             "end": {
                 "atk": 565,
                 "bonus": 27.6
             }
         }
     ],
     "ascension": [
         {
             "start": 20,
             "items": [
                 {
                     name: "라이언 투사의 족쇄",
                     "amount": 3
                 },
                 {
                     name: "혼돈의 장치",
                     "amount": 3
                 },
                 {
                     name: "슬라임 응축액",
                     "amount": 3
                 }
             ],
             "price": 5000
         },
         {
             "start": 40,
             "items": [
                 {
                     name: "라이언 투사의 쇠사슬",
                     "amount": 3
                 },
                 {
                     name: "혼돈의 장치",
                     "amount": 12
                 },
                 {
                     name: "슬라임 응축액",
                     "amount": 8
                 }
             ],
             "price": 15000
         },
         {
             "start": 50,
             "items": [
                 {
                     name: "라이언 투사의 쇠사슬",
                     "amount": 6
                 },
                 {
                     name: "혼돈의 회로",
                     "amount": 6
                 },
                 {
                     name: "슬라임청",
                     "amount": 6
                 }
             ],
             "price": 20000
         },
         {
             "start": 60,
             "items": [
                 {
                     name: "라이언 투사의 수갑",
                     "amount": 3
                 },
                 {
                     name: "혼돈의 회로",
                     "amount": 12
                 },
                 {
                     name: "슬라임청",
                     "amount": 9
                 }
             ],
             "price": 30000
         },
         {
             "start": 70,
             "items": [
                 {
                     name: "라이언 투사의 수갑",
                     "amount": 6
                 },
                 {
                     name: "혼돈의 노심",
                     "amount": 9
                 },
                 {
                     name: "슬라임 원액",
                     "amount": 6
                 }
             ],
             "price": 35000
         },
         {
             "start": 80,
             "items": [
                 {
                     name: "라이언 투사의 이념",
                     "amount": 4
                 },
                 {
                     name: "혼돈의 노심",
                     "amount": 18
                 },
                 {
                     name: "슬라임 원액",
                     "amount": 12
                 }
             ],
             "price": 45000
         }
     ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Weapon_Royal_Greatsword.png/revision/latest/scale-to-width-down/512?cb=20201116034928",
     skills: [
       {
         name: "집중",
         description: `공격으로 피해를 줄 때마다 치명타 확률이 8/10/12/14/16% 증가한다. 최대 중첩수: 5회. 공격 시 치명타가 발생하면 모든 집중 효과가 사라진다.`
       }
     ],
     origin: "스타라이트 교환",
     keyword: []
   },
  "빗물 베기":  {
    name: "빗물 베기",
    "type": "양손검",
    "level": 4,
    "bonus": "원소 마스터리",
    "bonusType": "number",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 36
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 64
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 64
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 93
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 93
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 107
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 107
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 122
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 122
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 136
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 136
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 151
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 151
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 165
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "안개구름 속의 흑연단",
                    "amount": 3
                },
                {
                    name: "안개꽃 가루",
                    "amount": 3
                },
                {
                    name: "이능 두루마리",
                    "amount": 3
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 3
                },
                {
                    name: "안개꽃 가루",
                    "amount": 12
                },
                {
                    name: "이능 두루마리",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 6
                },
                {
                    name: "안개풀 주머니",
                    "amount": 6
                },
                {
                    name: "봉마의 두루마리",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 3
                },
                {
                    name: "안개풀 주머니",
                    "amount": 12
                },
                {
                    name: "봉마의 두루마리",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 6
                },
                {
                    name: "안개 등심",
                    "amount": 9
                },
                {
                    name: "금주의 두루마리",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "안개구름 속의 전환",
                    "amount": 4
                },
                {
                    name: "안개 등심",
                    "amount": 18
                },
                {
                    name: "금주의 두루마리",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Weapon_Rainslasher.png/revision/latest/scale-to-width-down/512?cb=20201119235128",
     skills: [
       {
         name: "첨벙첨벙 찌릿찌릿",
         description: `물 원소 또는 번개 원소의 영향을 받은 적에게 가하는 피해가 20/24/28/32/36% 증가한다.`
       }
     ],
     origin: "기원",
     keyword: []
   },
  "고화 프로토타입":  {
    name: "고화 프로토타입",
    "type": "양손검",
    "level": 4,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 44,
                "bonus": 6
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 119,
                "bonus": 10.6
            }
        },
        {
            "begin": {
                "atk": 144,
                "bonus": 10.6
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 226,
                "bonus": 15.5
            }
        },
        {
            "begin": {
                "atk": 252,
                "bonus": 15.5
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 293,
                "bonus": 17.9
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 17.9
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 361,
                "bonus": 20.3
            }
        },
        {
            "begin": {
                "atk": 387,
                "bonus": 20.3
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 429,
                "bonus": 22.7
            }
        },
        {
            "begin": {
                "atk": 455,
                "bonus": 22.7
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 497,
                "bonus": 25.1
            }
        },
        {
            "begin": {
                "atk": 523,
                "bonus": 25.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 565,
                "bonus": 27.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "흑운철 한 알",
                    "amount": 3
                },
                {
                    name: "약한 뼛조각",
                    "amount": 3
                },
                {
                    name: "부서진 가면",
                    "amount": 3
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "흑운철 조각",
                    "amount": 3
                },
                {
                    name: "약한 뼛조각",
                    "amount": 12
                },
                {
                    name: "부서진 가면",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "흑운철 조각",
                    "amount": 6
                },
                {
                    name: "단단한 뼛조각",
                    "amount": 6
                },
                {
                    name: "오염된 가면",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "흑운철 일각",
                    "amount": 3
                },
                {
                    name: "단단한 뼛조각",
                    "amount": 12
                },
                {
                    name: "오염된 가면",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "흑운철 일각",
                    "amount": 6
                },
                {
                    name: "석화한 뼛조각",
                    "amount": 9
                },
                {
                    name: "불길한 가면",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "흑운철 덩이",
                    "amount": 4
                },
                {
                    name: "석화한 뼛조각",
                    "amount": 18
                },
                {
                    name: "불길한 가면",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/a/ab/Weapon_Prototype_Archaic.png/revision/latest/scale-to-width-down/512?cb=20201116034721",
     forge: [
       {
         name: "북대륙의 양손검 원형",
         amount: 1
       },
       {
         name: "백철",
         amount: 50
       },
       {
         name: "수정덩이",
         amount: 50
       },
     ],
     skills: [
       {
         name: "분쇄",
         description: `일반 공격과 강공격 명중 후 50%의 확률로 작은 범위 내의 적에게 공격력 240/300/360/420/480%의 추가 피해를 준다. 해당 효과는 15초마다 1번 발동한다.`
       }
     ],
     origin: "단조",
     keyword: ["고화"]
   },
  "백영검":  {
    name: "백영검",
    "type": "양손검",
    "level": 4,
    "bonus": "방어력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 11.3
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 19.9
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 19.9
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 29
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 29
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 33.5
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 33.5
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 38.1
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 38.1
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 42.6
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 42.6
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 47.2
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 47.2
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 51.7
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "고운한림의 매끄러운 모래",
                    "amount": 3
                },
                {
                    name: "사냥꾼의 제도",
                    "amount": 3
                },
                {
                    name: "보물찾기 까마귀 휘장",
                    "amount": 3
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "고운한림의 휘암",
                    "amount": 3
                },
                {
                    name: "사냥꾼의 제도",
                    "amount": 12
                },
                {
                    name: "보물찾기 까마귀 휘장",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "고운한림의 휘암",
                    "amount": 6
                },
                {
                    name: "특수 요원의 제도",
                    "amount": 6
                },
                {
                    name: "실버 까마귀 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "고운한림의 해골",
                    "amount": 3
                },
                {
                    name: "특수 요원의 제도",
                    "amount": 12
                },
                {
                    name: "실버 까마귀 휘장",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "고운한림의 해골",
                    "amount": 6
                },
                {
                    name: "검사관의 제도",
                    "amount": 9
                },
                {
                    name: "골드 까마귀 휘장",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "고운한림의 신체",
                    "amount": 4
                },
                {
                    name: "검사관의 제도",
                    "amount": 18
                },
                {
                    name: "골드 까마귀 휘장",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/0/04/Weapon_Whiteblind.png/revision/latest/scale-to-width-down/512?cb=20201116035607",
     forge: [
       {
         name: "북대륙의 양손검 원형",
         amount: 1
       },
       {
         name: "백철",
         amount: 50
       },
       {
         name: "수정덩이",
         amount: 50
       },
     ],
     skills: [
       {
         name: "에너지 주입 칼날",
         description: `일반 공격과 강공격 명중 시 공격력과 방어력이 6/7.5/9/10.5/12%증가한다. 지속 시간: 6초. 최대 중첩수: 4회. 해당 효과는 0.5초마다 1번 발동한다.`
       }
     ],
     origin: "단조",
     keyword: [],
   },
  "흑암참도":  {
    name: "흑암참도",
    "type": "양손검",
    "level": 4,
    "bonus": "치명타 피해",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 12
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 21.2
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 21.2
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 30.9
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 30.9
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 35.7
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 35.7
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 40.6
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 40.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 45.4
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 45.4
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 50.3
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 50.3
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 55.1
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "안개구름 속의 흑연단",
                    "amount": 3
                },
                {
                    name: "안개꽃 가루",
                    "amount": 3
                },
                {
                    name: "신병의 휘장",
                    "amount": 3
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 3
                },
                {
                    name: "안개꽃 가루",
                    "amount": 12
                },
                {
                    name: "신병의 휘장",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 6
                },
                {
                    name: "안개풀 주머니",
                    "amount": 6
                },
                {
                    name: "사관의 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 3
                },
                {
                    name: "안개풀 주머니",
                    "amount": 12
                },
                {
                    name: "사관의 휘장",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 6
                },
                {
                    name: "안개 등심",
                    "amount": 9
                },
                {
                    name: "위관의 휘장",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "안개구름 속의 전환",
                    "amount": 4
                },
                {
                    name: "안개 등심",
                    "amount": 18
                },
                {
                    name: "위관의 휘장",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/d/d7/Weapon_Blackcliff_Slasher.png/revision/latest/scale-to-width-down/512?cb=20201116033252",
     skills: [
       {
         name: "승승장구",
         description: `적을 처치한 후 공격력이 12/15/18/21/24% 증가한다. 지속 시간: 30초. 최대 중첩수: 3회. 중첩 1회당 지속 시간은 독립 계산한다.`
       }
     ],
     origin: "스타라이트 교환",
     keyword: [],
   },
  "이무기 검":  {
    name: "이무기 검",
    "type": "양손검",
    "level": 4,
    "bonus": "치명타 확률",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 6
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 10.6
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 10.6
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 15.5
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 15.5
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 17.9
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 17.9
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 20.3
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 20.3
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 22.7
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 22.7
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 25.1
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 25.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 27.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "흑운철 한 알",
                    "amount": 3
                },
                {
                    name: "약한 뼛조각",
                    "amount": 3
                },
                {
                    name: "구라구라 꽃꿀",
                    "amount": 3
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "흑운철 조각",
                    "amount": 3
                },
                {
                    name: "약한 뼛조각",
                    "amount": 12
                },
                {
                    name: "구라구라 꽃꿀",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "흑운철 조각",
                    "amount": 6
                },
                {
                    name: "단단한 뼛조각",
                    "amount": 6
                },
                {
                    name: "반짝반짝 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "흑운철 일각",
                    "amount": 3
                },
                {
                    name: "단단한 뼛조각",
                    "amount": 12
                },
                {
                    name: "반짝반짝 꽃꿀",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "흑운철 일각",
                    "amount": 6
                },
                {
                    name: "석화한 뼛조각",
                    "amount": 9
                },
                {
                    name: "원소 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "흑운철 덩이",
                    "amount": 4
                },
                {
                    name: "석화한 뼛조각",
                    "amount": 18
                },
                {
                    name: "원소 꽃꿀",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/8/88/Weapon_Serpent_Spine.png/revision/latest/scale-to-width-down/512?cb=20201116035126",
     skills: [
       {
         name: "파도 가르기",
         description: `캐릭터가 필드에 있을 때 4초마다 가하는 피해가 6/7/8/9/10%, 받는 피해가 3/2.7/2.4/2.1/1.8% 증가한다. 최대 중첩수: 5회. 캐릭터를 대기 상태로 전환해도 효과는 초기화되지 않는다. 피해를 받으면 중첩수가 1개 사라진다.`
       }
     ],
     origin: "진주 기행 Lv.30 보상",
     keyword: ["기행대검"],
   },
  "설장의 성은":  {
    name: "설장의 성은",
    "type": "양손검",
    "level": 4,
    "bonus": "물리 피해 보너스",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 44,
                "bonus": 7.5
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 119,
                "bonus": 13.3
            }
        },
        {
            "begin": {
                "atk": 144,
                "bonus": 13.3
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 226,
                "bonus": 19.3
            }
        },
        {
            "begin": {
                "atk": 252,
                "bonus": 19.3
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 293,
                "bonus": 22.4
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 22.4
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 361,
                "bonus": 25.4
            }
        },
        {
            "begin": {
                "atk": 387,
                "bonus": 25.4
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 429,
                "bonus": 28.4
            }
        },
        {
            "begin": {
                "atk": 455,
                "bonus": 28.4
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 497,
                "bonus": 31.5
            }
        },
        {
            "begin": {
                "atk": 523,
                "bonus": 31.5
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 565,
                "bonus": 34.5
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "고탑 왕의 잔해",
                    "amount": 3
                },
                {
                    name: "무거운 나팔",
                    "amount": 3
                },
                {
                    name: "슬라임 응축액",
                    "amount": 3
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 3
                },
                {
                    name: "무거운 나팔",
                    "amount": 12
                },
                {
                    name: "슬라임 응축액",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 6
                },
                {
                    name: "흑동 나팔",
                    "amount": 6
                },
                {
                    name: "슬라임청",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 3
                },
                {
                    name: "흑동 나팔",
                    "amount": 12
                },
                {
                    name: "슬라임청",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 6
                },
                {
                    name: "흑수정 나팔",
                    "amount": 9
                },
                {
                    name: "슬라임 원액",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "고탑 왕의 깨진 꿈",
                    "amount": 4
                },
                {
                    name: "흑수정 나팔",
                    "amount": 18
                },
                {
                    name: "슬라임 원액",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/4/49/Weapon_Snow-Tombed_Starsilver.png/revision/latest/scale-to-width-down/512?cb=20201223042944",
     forge: [
       {
         name: "북대륙의 양손검 원형",
         amount: 1
       },
       {
         name: "백철",
         amount: 50
       },
       {
         name: "수정덩이",
         amount: 50
       },
     ],
     skills: [
       {
         name: "서리의 매장",
         description: `일반 공격과 강공격이 적에게 명중 시 60/70/80/90/100%의 확률로 적의 위쪽에 영원의 얼음 결정을 생성한 후 떨궈서 공격력 80/95/110/125/140%의 범위 피해를 준다. 적이 얼음 원소의 영향을 받으면 공격력 200/240/280/320/360%의 피해를 준다. 해당 효과는 10초마다 1회 발동한다.`
       }
     ],
     origin: "퀘스트 및 단조",
     keyword: ["설장"]
   },
  "천암고검":  {
    name: "천암고검",
    "type": "양손검",
    "level": 4,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 9
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 15.9
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 15.9
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 23.2
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 23.2
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 26.8
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 26.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 30.4
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 30.4
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 34.1
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 34.1
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 37.7
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 37.7
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 41.3
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "고운한림의 매끄러운 모래",
                    "amount": 3
                },
                {
                    name: "사냥꾼의 제도",
                    "amount": 3
                },
                {
                    name: "단단한 화살촉",
                    "amount": 3
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "고운한림의 휘암",
                    "amount": 3
                },
                {
                    name: "사냥꾼의 제도",
                    "amount": 12
                },
                {
                    name: "단단한 화살촉",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "고운한림의 휘암",
                    "amount": 6
                },
                {
                    name: "특수 요원의 제도",
                    "amount": 6
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "고운한림의 해골",
                    "amount": 3
                },
                {
                    name: "특수 요원의 제도",
                    "amount": 12
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "고운한림의 해골",
                    "amount": 6
                },
                {
                    name: "검사관의 제도",
                    "amount": 9
                },
                {
                    name: "역전의 화살촉",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "고운한림의 신체",
                    "amount": 4
                },
                {
                    name: "검사관의 제도",
                    "amount": 18
                },
                {
                    name: "역전의 화살촉",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Weapon_Lithic_Blade.png/revision/latest/scale-to-width-down/512?cb=20210225201003",
     skills: [
       {
         name: "천암결·일심",
         description: `파티 내에 리월 출신 캐릭터가 1명 존재할 때마다 해당 무기를 장착한 캐릭터의 공격력이7% 증가하고 치명타 확률이 3% 증가한다. 최대 중첩수:4회`
       }
     ],
     origin: "기원",
     keyword: ["천암대검"],
   },
   "카츠라기를 벤 나가마사": {
    name: "카츠라기를 벤 나가마사",
    type: "양손검",
    level: 4,
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/2e/Weapon_Katsuragikiri_Nagamasa.png/revision/latest/scale-to-width-down/256?cb=20210723074332",
    stat: [
        {
        start: 1,
        last: 20,
        begin: {
            atk: 42,
            bonus: 10.0
        },
        end: {
            atk: 109,
            bonus: 17.7
        }
        },
        {
        start: 20,
        last: 40,
        begin: {
            atk: 135,
            bonus: 17.7
        },
        end: {
            atk: 205,
            bonus: 25.8
        }
        },
        {
        start: 40,
        last: 50,
        begin: {
            atk: 231,
            bonus: 25.8
        },
        end: {
            atk: 266,
            bonus: 29.8
        }
        },
        {
        start: 50,
        last: 60,
        begin: {
            atk: 292,
            bonus: 29.8
        },
        end: {
            atk: 327,
            bonus: 33.8
        }
        },
        {
        start: 60,
        last: 70,
        begin: {
            atk: 353,
            bonus: 33.8
        },
        end: {
            atk: 388,
            bonus: 37.9
        }
        },
        {
        start: 70,
        last: 80,
        begin: {
            atk: 414,
            bonus: 37.9
        },
        end: {
            atk: 449,
            bonus: 41.9
        }
        },
        {
        start: 80,
        last: 90,
        begin: {
            atk: 475,
            bonus: 41.9
        },
        end: {
            atk: 510,
            bonus: 45.9
        }
        },
    ],
    bonus: "원소 충전 효율",
    bonusType: "percent",
    ascension: [
        {
        start: 20,
        items: [
            {
            name: "나루카미 어령의 은혜",
            amount: 3
            },
            {
            name: "혼돈의 기관",
            amount: 3
            },
            {
            name: "오래된 코등이",
            amount: 2
            }
        ],
        price: 5000
        },
        {
        start: 40,
        items: [
            {
            name: "나루카미 어령의 환희",
            amount: 3
            },
            {
            name: "혼돈의 기관",
            amount: 12
            },
            {
            name: "오래된 코등이",
            amount: 8
            }
        ],
        price: 15000
        },
        {
        start: 50,
        items: [
            {
            name: "나루카미 어령의 환희",
            amount: 6
            },
            {
            name: "혼돈의 중추",
            amount: 6
            },
            {
            name: "카게우타 코등이",
            amount: 6
            }
        ],
        price: 20000
        },
        {
        start: 60,
        items: [
            {
            name: "나루카미 어령의 친애",
            amount: 3
            },
            {
            name: "혼돈의 중추",
            amount: 12
            },
            {
            name: "카게우타 코등이",
            amount: 9
            }
        ],
        price: 30000
        },
        {
        start: 70,
        items: [
            {
            name: "나루카미 어령의 친애",
            amount: 6
            },
            {
            name: "혼돈의 눈동자",
            amount: 9
            },
            {
            name: "명검 코등이",
            amount: 9
            }
        ],
        price: 35000
        },
        {
        start: 80,
        items: [
            {
            name: "나루카미 어령의 용맹",
            amount: 4
            },
            {
            name: "혼돈의 눈동자",
            amount: 18
            },
            {
            name: "명검 코등이",
            amount: 12
            }
        ],
        price: 45000
        },
    ],
    skills: [
        {
        name: "명사의 거동",
        description: "원소전투 스킬로 가하는 피해가 6/7.5/9/10.5/12% 증가한다. 원소전투 스킬이 명중되면, 캐릭터는 원소 에너지를 3pt 잃고, 그 후 6초 동안 2초마다 원소 에너지를 3/3.5/4/4.5/5pt 회복한다. 이 효과는 10초마다 최대 1회만 발동하며, 캐릭터가 대기 상태일 때도 발동된다."
        }
    ],
    origin: "단조",
    forge: [
        {
          name: "북대륙의 양손검 원형",
          amount: 1
        },
        {
          name: "자수정 덩이",
          amount: 50
        },
        {
          name: "백철",
          amount: 50
        },
    ],
    keyword: ["이나즈마단조대검","이나즈마단조양손검", "카츠라기", "나가마사"]
   },
  "강철의 그림자": {
    name: "강철의 그림자",
    "type": "양손검",
    "level": 3,
    "bonus": "HP",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 39,
                "bonus": 7.7
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 94,
                "bonus": 13.5
            }
        },
        {
            "begin": {
                "atk": 113,
                "bonus": 13.5
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 169,
                "bonus": 19.7
            }
        },
        {
            "begin": {
                "atk": 189,
                "bonus": 19.7
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 216,
                "bonus": 22.8
            }
        },
        {
            "begin": {
                "atk": 236,
                "bonus": 22.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 263,
                "bonus": 25.9
            }
        },
        {
            "begin": {
                "atk": 282,
                "bonus": 25.9
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 309,
                "bonus": 29
            }
        },
        {
            "begin": {
                "atk": 329,
                "bonus": 29
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 355,
                "bonus": 32.1
            }
        },
        {
            "begin": {
                "atk": 375,
                "bonus": 32.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 401,
                "bonus": 35.2
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "고탑 왕의 잔해",
                    "amount": 2
                },
                {
                    name: "무거운 나팔",
                    "amount": 2
                },
                {
                    name: "구라구라 꽃꿀",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 2
                },
                {
                    name: "무거운 나팔",
                    "amount": 8
                },
                {
                    name: "구라구라 꽃꿀",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 4
                },
                {
                    name: "흑동 나팔",
                    "amount": 4
                },
                {
                    name: "반짝반짝 꽃꿀",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 2
                },
                {
                    name: "흑동 나팔",
                    "amount": 8
                },
                {
                    name: "반짝반짝 꽃꿀",
                    "amount": 5
                }
            ],
            "price": 45000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 4
                },
                {
                    name: "흑수정 나팔",
                    "amount": 6
                },
                {
                    name: "원소 꽃꿀",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "고탑 왕의 깨진 꿈",
                    "amount": 3
                },
                {
                    name: "흑수정 나팔",
                    "amount": 12
                },
                {
                    name: "원소 꽃꿀",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/e9/Weapon_Ferrous_Shadow.png/revision/latest/scale-to-width-down/512?cb=20201120003242",
    skills: [
      {
        name: "불굴",
        description: "HP가 70/75/80/85/90%미만일 때 강공격 발동 시 쉽게 경직되지 않고 강공격 피해가 30/35/40/45/50% 증가한다."
      }
    ],
    origin: "기원",
    keyword: []
 },
 "드래곤 블러드 소드": {
    name: "드래곤 블러드 소드",
    "type": "양손검",
    "level": 3,
    "bonus": "원소 마스터리",
    "bonusType": "number",
    "stat": [
        {
            "begin": {
                "atk": 38,
                "bonus": 41
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 86,
                "bonus": 72
            }
        },
        {
            "begin": {
                "atk": 105,
                "bonus": 72
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 151,
                "bonus": 105
            }
        },
        {
            "begin": {
                "atk": 171,
                "bonus": 105
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 193,
                "bonus": 122
            }
        },
        {
            "begin": {
                "atk": 212,
                "bonus": 122
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 234,
                "bonus": 138
            }
        },
        {
            "begin": {
                "atk": 253,
                "bonus": 138
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 274,
                "bonus": 154
            }
        },
        {
            "begin": {
                "atk": 294,
                "bonus": 154
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 314,
                "bonus": 171
            }
        },
        {
            "begin": {
                "atk": 334,
                "bonus": 171
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 354,
                "bonus": 187
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "칼바람 울프의 젖니",
                    "amount": 2
                },
                {
                    name: "지맥의 낡은 가지",
                    "amount": 2
                },
                {
                    name: "견고한 화살촉",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 2
                },
                {
                    name: "지맥의 낡은 가지",
                    "amount": 8
                },
                {
                    name: "견고한 화살촉",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 4
                },
                {
                    name: "지맥의 마른 잎",
                    "amount": 4
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "칼바람 울프의 부서진 이빨",
                    "amount": 2
                },
                {
                    name: "지맥의 마른 잎",
                    "amount": 8
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "칼바람 울프의 부서진 이빨",
                    "amount": 4
                },
                {
                    name: "지맥의 새싹",
                    "amount": 6
                },
                {
                    name: "역전의 화살촉",
                    "amount":4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "칼바람 울프의 그리운 고향",
                    "amount": 3
                },
                {
                    name: "지맥의 새싹",
                    "amount": 12
                },
                {
                    name: "역전의 화살촉",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Weapon_Bloodtainted_Greatsword.png/revision/latest/scale-to-width-down/512?cb=20201119233531",
    skills: [
      {
        name: "따끈따끈 찌릿찌릿",
        description: "불 원소 또는 번개 원소의 영향을 받은 적에게 가하는 피해가 12/15/18/21/24%증가한다."
      }
    ],
    origin: "기원",
    keyword: []
},
 "백철 대검": {
    name: "백철 대검",
    "type": "양손검",
    "level": 3,
    "bonus": "방어력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 39,
                "bonus": 9.6
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 94,
                "bonus": 16.9
            }
        },
        {
            "begin": {
                "atk": 113,
                "bonus": 16.9
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 169,
                "bonus": 24.6
            }
        },
        {
            "begin": {
                "atk": 189,
                "bonus": 24.6
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 216,
                "bonus": 28.5
            }
        },
        {
            "begin": {
                "atk": 236,
                "bonus": 28.5
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 263,
                "bonus": 32.3
            }
        },
        {
            "begin": {
                "atk": 282,
                "bonus": 32.3
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 309,
                "bonus": 36.2
            }
        },
        {
            "begin": {
                "atk": 329,
                "bonus": 36.2
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 355,
                "bonus": 40.1
            }
        },
        {
            "begin": {
                "atk": 375,
                "bonus": 40.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 401,
                "bonus": 43.9
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "라이언 투사의 족쇄",
                    "amount": 2
                },
                {
                    name: "혼돈의 장치",
                    "amount": 2
                },
                {
                    name: "슬라임 응축액",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "라이언 투사의 쇠사슬",
                    "amount": 2
                },
                {
                    name: "혼돈의 장치",
                    "amount": 8
                },
                {
                    name: "슬라임 응축액",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "라이언 투사의 쇠사슬",
                    "amount": 4
                },
                {
                    name: "혼돈의 회로",
                    "amount": 4
                },
                {
                    name: "슬라임청",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "라이언 투사의 수갑",
                    "amount": 2
                },
                {
                    name: "혼돈의 회로",
                    "amount": 8
                },
                {
                    name: "슬라임청",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "라이언 투사의 수갑",
                    "amount": 4
                },
                {
                    name: "혼돈의 노심",
                    "amount": 6
                },
                {
                    name: "슬라임 원액",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "라이언 투사의 이념",
                    "amount": 3
                },
                {
                    name: "혼돈의 노심",
                    "amount": 12
                },
                {
                    name: "슬라임 원액",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/56/Weapon_White_Iron_Greatsword.png/revision/latest/scale-to-width-down/512?cb=20201119201015",
    skills: [
      {
        name: "수확",
        description: "적을 처치하면 HP를 8/10/12/14/16%회복한다."
      }
    ],
    origin: "상자",
    keyword: []
},
 "훌륭한 대화수단": {
    name: "훌륭한 대화수단",
    "type": "양손검",
    "level": 3,
    "bonus": "공격력",
    "bonusType": "number",
    "stat": [
        {
            "begin": {
                "atk": 39,
                "bonus": 7.7
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 94,
                "bonus": 0
            }
        },
        {
            "begin": {
                "atk": 113,
                "bonus": 0
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 169,
                "bonus": 19.7
            }
        },
        {
            "begin": {
                "atk": 189,
                "bonus": 19.7
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 216,
                "bonus": 22.8
            }
        },
        {
            "begin": {
                "atk": 236,
                "bonus": 22.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 263,
                "bonus": 25.9
            }
        },
        {
            "begin": {
                "atk": 282,
                "bonus": 25.9
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 309,
                "bonus": 29
            }
        },
        {
            "begin": {
                "atk": 329,
                "bonus": 29
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 355,
                "bonus": 32.1
            }
        },
        {
            "begin": {
                "atk": 375,
                "bonus": 32.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 401,
                "bonus": 35.2
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "안개구름 속의 흑연단",
                    "amount": 2
                },
                {
                    name: "안개꽃 가루",
                    "amount": 2
                },
                {
                    name: "부서진 가면",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 2
                },
                {
                    name: "안개꽃 가루",
                    "amount": 8
                },
                {
                    name: "부서진 가면",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 4
                },
                {
                    name: "안개풀 주머니",
                    "amount": 4
                },
                {
                    name: "오염된 가면",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 2
                },
                {
                    name: "안개풀 주머니",
                    "amount": 8
                },
                {
                    name: "오염된 가면",
                    "amount": 7
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 4
                },
                {
                    name: "안개 등심",
                    "amount": 6
                },
                {
                    name: "불길한 가면",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "안개구름 속의 전환",
                    "amount": 3
                },
                {
                    name: "안개 등심",
                    "amount": 12
                },
                {
                    name: "불길한 가면",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/74/Weapon_Debate_Club.png/revision/latest/scale-to-width-down/512?cb=20201116033616",
    skills: [
      {
        name: "직설",
        description: "원소 전투 스킬 발동 후 일반 공격과 강공격이 적에게 명중 시 작은 범위 내에 공격력 60/75/90/105/120%의 피해를 추가로 준다. 지속 시간: 15초. 해당 효과 피해는 3초마다 1번 발동한다."
      }
    ],
    origin: "기원",
    keyword: ["대화수단"]
 },
 "비천대어검": {
    name: "비천대어검",
    "type": "양손검",
    "level": 3,
    "bonus": "물리 피해 보너스",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 39,
                "bonus": 9.6
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 94,
                "bonus": 16.9
            }
        },
        {
            "begin": {
                "atk": 113,
                "bonus": 16.9
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 169,
                "bonus": 24.6
            }
        },
        {
            "begin": {
                "atk": 189,
                "bonus": 24.6
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 216,
                "bonus": 28.5
            }
        },
        {
            "begin": {
                "atk": 236,
                "bonus": 28.5
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 263,
                "bonus": 32.3
            }
        },
        {
            "begin": {
                "atk": 282,
                "bonus": 32.3
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 309,
                "bonus": 36.2
            }
        },
        {
            "begin": {
                "atk": 329,
                "bonus": 36.2
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 355,
                "bonus": 40.1
            }
        },
        {
            "begin": {
                "atk": 375,
                "bonus": 40.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 401,
                "bonus": 43.9
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "흑운철 한 알",
                    "amount": 2
                },
                {
                    name: "약한 뼛조각",
                    "amount": 2
                },
                {
                    name: "보물찾기 까마귀 휘장",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "흑운철 조각",
                    "amount": 2
                },
                {
                    name: "약한 뼛조각",
                    "amount": 8
                },
                {
                    name: "보물찾기 까마귀 휘장",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "흑운철 조각",
                    "amount": 4
                },
                {
                    name: "단단한 뼛조각",
                    "amount": 4
                },
                {
                    name: "실버 까마귀 휘장",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "흑운철 일각",
                    "amount": 2
                },
                {
                    name: "단단한 뼛조각",
                    "amount": 8
                },
                {
                    name: "실버 까마귀 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "흑운철 일각",
                    "amount": 4
                },
                {
                    name: "석화한 뼛조각",
                    "amount": 6
                },
                {
                    name: "골드 까마귀 휘장",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "흑운철 덩이",
                    "amount": 3
                },
                {
                    name: "석화한 뼛조각",
                    "amount":12
                },
                {
                    name: "골드 까마귀 휘장",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/6e/Weapon_Skyrider_Greatsword.png/revision/latest/scale-to-width-down/512?cb=20201116035158",
    skills: [
      {
        name: "용기",
        description: "일반 공격과 강공격 명중 시 공격력이 6/7/8/9/10%증가한다. 지속 시간: 6초. 최대 중첩수: 4회. 해당 효과는 0.5초마다 1번 발동한다."
      }
    ],
    origin: "상자",
    keyword: [],
 },
 "용병 중검": {
   name: "용병 중검",
   "type": "양손검",
   "level": 2,
   "stat": [
       {
           "begin": {
               "atk": 33,
           },
           "start": 1,
           "last": 20,
           "end": {
               "atk": 80
           }
       },
       {
           "begin": {
               "atk": 91
           },
           "start": 20,
           "last": 40,
           "end": {
               "atk": 139
           }
       },
       {
           "begin": {
               "atk": 151
           },
           "start": 40,
           "last": 50,
           "end": {
               "atk": 174,
           }
       },
       {
           "begin": {
               "atk": 186
           },
           "start": 50,
           "last": 60,
           "end": {
               "atk": 209
           }
       },
       {
           "begin": {
               "atk": 220
           },
           "start": 60,
           "last": 70,
           "end": {
               "atk": 243
           }
       }
   ],
   "ascension": [
       {
           "start": 20,
           "items": [
               {
                   name: "칼바람 울프의 젖니",
                   "amount": 1
               },
               {
                   name: "지맥의 낡은 가지",
                   "amount": 1
               },
               {
                   name: "견고한 화살촉",
                   "amount": 1
               }
           ],
           "price": 5000
       },
       {
           "start": 40,
           "items": [
               {
                   name: "칼바람 울프의 이빨",
                   "amount": 1
               },
               {
                   name: "지맥의 낡은 가지",
                   "amount": 5
               },
               {
                   name: "슬라임 응축액",
                   "amount": 4
               }
           ],
           "price": 5000
       },
       {
           "start": 50,
           "items": [
               {
                   name: "칼바람 울프의 이빨",
                   "amount": 3
               },
               {
                   name: "지맥의 마른 잎",
                   "amount": 3
               },
               {
                   name: "슬라임청",
                   "amount": 3
               }
           ],
           "price": 10000
       },
       {
           "start": 60,
           "items": [
               {
                   name: "칼바람 울프의 부서진 이빨",
                   "amount": 1
               },
               {
                   name: "지맥의 마른 잎",
                   "amount": 5
               },
               {
                   name: "슬라임청",
                   "amount": 4
               }
           ],
           "price": 10000
       }
   ],
   origin: "상점 구매 및 보물상자",
   keyword: [],
   image: "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Weapon_Old_Merc%27s_Pal.png/revision/latest/scale-to-width-down/512?cb=20201116034249"
 },
 "훈련용 대검": {
   name: "훈련용 대검",
   "type": "양손검",
   "level": 1,
   "stat": [
       {
           "begin": {
               "atk": 23,
           },
           "start": 1,
           "last": 20,
           "end": {
               "atk": 56
           }
       },
       {
           "begin": {
               "atk": 68
           },
           "start": 20,
           "last": 40,
           "end": {
               "atk": 102
           }
       },
       {
           "begin": {
               "atk": 113
           },
           "start": 40,
           "last": 50,
           "end": {
               "atk": 130,
           }
       },
       {
           "begin": {
               "atk": 141
           },
           "start": 50,
           "last": 60,
           "end": {
               "atk": 158
           }
       },
       {
           "begin": {
               "atk": 169
           },
           "start": 60,
           "last": 70,
           "end": {
               "atk": 185
           }
       }
   ],
   "ascension": [
       {
           "start": 20,
           "items": [
               {
                   name: "칼바람 울프의 젖니",
                   "amount": 1
               },
               {
                   name: "지맥의 낡은 가지",
                   "amount": 1
               },
               {
                   name: "슬라임 응축액",
                   "amount": 1
               }
           ],
           "price": 5000
       },
       {
           "start": 40,
           "items": [
               {
                   name: "칼바람 울프의 이빨",
                   "amount": 1
               },
               {
                   name: "지맥의 낡은 가지",
                   "amount": 4
               },
               {
                   name: "슬라임 응축액",
                   "amount": 2
               }
           ],
           "price": 5000
       },
       {
           "start": 50,
           "items": [
               {
                   name: "칼바람 울프의 이빨",
                   "amount": 2
               },
               {
                   name: "지맥의 마른 잎",
                   "amount": 2
               },
               {
                   name: "슬라임청",
                   "amount": 2
               }
           ],
           "price": 5000
       },
       {
           "start": 60,
           "items": [
               {
                   name: "칼바람 울프의 부서진 이빨",
                   "amount": 1
               },
               {
                   name: "지맥의 마른 잎",
                   "amount": 4
               },
               {
                   name: "슬라임청",
                   "amount": 3
               }
           ],
           "price": 10000
       }
   ],
   origin: "상점 구매 및 보물상자",
   keyword: [],
   image: "https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Weapon_Waster_Greatsword.png/revision/latest/scale-to-width-down/512?cb=20201120001015"
 },
 //장병기
 "화박연":  {
   name: "화박연",
   "type": "장병기",
   "level": 5,
   "bonus": "치명타 확률",
   "bonusType": "percent",
   "stat": [
       {
           "begin": {
               "atk": 48,
               "bonus": 4.8
           },
           "start": 1,
           "last": 20,
           "end": {
               "atk": 133,
               "bonus": 8.5
           }
       },
       {
           "begin": {
               "atk": 164,
               "bonus": 8.5
           },
           "start": 20,
           "last": 40,
           "end": {
               "atk": 261,
               "bonus": 12.4
           }
       },
       {
           "begin": {
               "atk": 292,
               "bonus": 12.4
           },
           "start": 40,
           "last": 50,
           "end": {
               "atk": 341,
               "bonus": 14.3
           }
       },
       {
           "begin": {
               "atk": 373,
               "bonus": 14.3
           },
           "start": 50,
           "last": 60,
           "end": {
               "atk": 423,
               "bonus": 16.2
           }
       },
       {
           "begin": {
               "atk": 455,
               "bonus": 16.2
           },
           "start": 60,
           "last": 70,
           "end": {
               "atk": 506,
               "bonus": 18.2
           }
       },
       {
           "begin": {
               "atk": 537,
               "bonus": 18.2
           },
           "start": 70,
           "last": 80,
           "end": {
               "atk": 590,
               "bonus": 20.1
           }
       },
       {
           "begin": {
               "atk": 621,
               "bonus": 20.1
           },
           "start": 80,
           "last": 90,
           "end": {
               "atk": 674,
               "bonus": 22.1
           }
       }
   ],
   "ascension": [
       {
           "start": 20,
           "items": [
               {
                   name: "고운한림의 매끄러운 모래",
                   "amount": 5
               },
               {
                   name: "사냥꾼의 제도",
                   "amount": 5
               },
               {
                   name: "신병의 휘장",
                   "amount": 3
               }
           ],
           "price": 10000
       },
       {
           "start": 40,
           "items": [
               {
                   name: "고운한림의 휘암",
                   "amount": 5
               },
               {
                   name: "사냥꾼의 제도",
                   "amount": 18
               },
               {
                   name: "신병의 휘장",
                   "amount": 12
               }
           ],
           "price": 20000
       },
       {
           "start": 50,
           "items": [
               {
                   name: "고운한림의 휘암",
                   "amount": 9
               },
               {
                   name: "특수 요원의 제도",
                   "amount": 9
               },
               {
                   name: "사관의 휘장",
                   "amount": 9
               }
           ],
           "price": 30000
       },
       {
           "start": 60,
           "items": [
               {
                   name: "고운한림의 해골",
                   "amount": 5
               },
               {
                   name: "특수 요원의 제도",
                   "amount": 18
               },
               {
                   name: "사관의 휘장",
                   "amount": 14
               }
           ],
           "price": 45000
       },
       {
           "start": 70,
           "items": [
               {
                   name: "고운한림의 해골",
                   "amount": 9
               },
               {
                   name: "검사관의 제도",
                   "amount": 14
               },
               {
                   name: "위관의 휘장",
                   "amount": 9
               }
           ],
           "price": 55000
       },
       {
           "start": 80,
           "items": [
               {
                   name: "고운한림의 신체",
                   "amount": 6
               },
               {
                   name: "검사관의 제도",
                   "amount": 27
               },
               {
                   name: "위관의 휘장",
                   "amount": 18
               }
           ],
           "price": 65000
       }
   ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/8/80/Weapon_Primordial_Jade_Winged-Spear.png/revision/latest/scale-to-width-down/512?cb=20201116152024",
    skills: [
      {
        name: "정의의 솔개창",
        description: `적 명중 시 자신의 공격력이 3.2/3.9/4.6/5.3/6% 증가한다. 지속 시간: 6초. 최대 중첩수: 7회. 해당 효과는 0.3초마다 1번 발동한다. 최대 중첩 시 피해가 12/15/18/21/24% 증가한다.`
      }
    ],
    origin: "기원",
    keyword: ["화박창"],
  },
 "천공의 마루":  {
   name: "천공의 마루",
   "type": "장병기",
   "level": 5,
   "bonus": "원소 충전 효율",
   "bonusType": "percent",
   "stat": [
       {
           "begin": {
               "atk": 48,
               "bonus": 8
           },
           "start": 1,
           "last": 20,
           "end": {
               "atk": 133,
               "bonus": 14.1
           }
       },
       {
           "begin": {
               "atk": 164,
               "bonus": 14.1
           },
           "start": 20,
           "last": 40,
           "end": {
               "atk": 261,
               "bonus": 20.6
           }
       },
       {
           "begin": {
               "atk": 292,
               "bonus": 20.6
           },
           "start": 40,
           "last": 50,
           "end": {
               "atk": 341,
               "bonus": 23.8
           }
       },
       {
           "begin": {
               "atk": 373,
               "bonus": 23.8
           },
           "start": 50,
           "last": 60,
           "end": {
               "atk": 423,
               "bonus": 27.1
           }
       },
       {
           "begin": {
               "atk": 455,
               "bonus": 27.1
           },
           "start": 60,
           "last": 70,
           "end": {
               "atk": 506,
               "bonus": 30.3
           }
       },
       {
           "begin": {
               "atk": 537,
               "bonus": 30.3
           },
           "start": 70,
           "last": 80,
           "end": {
               "atk": 590,
               "bonus": 33.5
           }
       },
       {
           "begin": {
               "atk": 621,
               "bonus": 33.5
           },
           "start": 80,
           "last": 90,
           "end": {
               "atk": 674,
               "bonus": 36.8
           }
       }
   ],
   "ascension": [
       {
           "start": 20,
           "items": [
               {
                   name: "라이언 투사의 족쇄",
                   "amount": 5
               },
               {
                   name: "혼돈의 장치",
                   "amount": 5
               },
               {
                   name: "이능 두루마리",
                   "amount": 3
               }
           ],
           "price": 10000
       },
       {
           "start": 40,
           "items": [
               {
                   name: "라이언 투사의 쇠사슬",
                   "amount": 5
               },
               {
                   name: "혼돈의 장치",
                   "amount": 18
               },
               {
                   name: "이능 두루마리",
                   "amount": 12
               }
           ],
           "price": 20000
       },
       {
           "start": 50,
           "items": [
               {
                   name: "라이언 투사의 쇠사슬",
                   "amount": 9
               },
               {
                   name: "혼돈의 회로",
                   "amount": 9
               },
               {
                   name: "봉마의 두루마리",
                   "amount": 9
               }
           ],
           "price": 30000
       },
       {
           "start": 60,
           "items": [
               {
                   name: "라이언 투사의 수갑",
                   "amount": 5
               },
               {
                   name: "혼돈의 회로",
                   "amount": 18
               },
               {
                   name: "봉마의 두루마리",
                   "amount": 14
               }
           ],
           "price": 45000
       },
       {
           "start": 70,
           "items": [
               {
                   name: "라이언 투사의 수갑",
                   "amount": 9
               },
               {
                   name: "혼돈의 노심",
                   "amount": 14
               },
               {
                   name: "금주의 두루마리",
                   "amount": 9
               }
           ],
           "price": 55000
       },
       {
           "start": 80,
           "items": [
               {
                   name: "라이언 투사의 이념",
                   "amount": 6
               },
               {
                   name: "혼돈의 노심",
                   "amount": 27
               },
               {
                   name: "금주의 두루마리",
                   "amount": 18
               }
           ],
           "price": 65000
       }
   ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/69/Weapon_Skyward_Spine.png/revision/latest/scale-to-width-down/512?cb=20201116035301",
    skills: [
      {
        name: "검은 날개를 절단하는 이빨",
        description: `치명타 확률이 8/10/12/14/16%, 일반 공격 속도가 12% 증가한다. 또한 일반 공격과 강공격 명중 시 50%의 확률로 진공 칼날을 날려 작은 범위 내의 적에게 추가로 공격력의 40/55/70/85/100%의 피해를 준다. 해당 효과는 2초마다 1번 발동한다.`
      }
    ],
    origin: "기원",
    keyword: ["마루","천공마루","천공창"]
  },
 "관홍의 창":  {
   name: "관홍의 창",
   "type": "장병기",
   "level": 5,
   "bonus": "공격력",
   "bonusType": "percent",
   "stat": [
       {
           "begin": {
               "atk": 46,
               "bonus": 10.8
           },
           "start": 1,
           "last": 20,
           "end": {
               "atk": 122,
               "bonus": 19.1
           }
       },
       {
           "begin": {
               "atk": 153,
               "bonus": 19.1
           },
           "start": 20,
           "last": 40,
           "end": {
               "atk": 235,
               "bonus": 27.8
           }
       },
       {
           "begin": {
               "atk": 266,
               "bonus": 27.8
           },
           "start": 40,
           "last": 50,
           "end": {
               "atk": 308,
               "bonus": 32.2
           }
       },
       {
           "begin": {
               "atk": 340,
               "bonus": 32.2
           },
           "start": 50,
           "last": 60,
           "end": {
               "atk": 382,
               "bonus": 36.5
           }
       },
       {
           "begin": {
               "atk": 414,
               "bonus": 36.5
           },
           "start": 60,
           "last": 70,
           "end": {
               "atk": 457,
               "bonus": 40.9
           }
       },
       {
           "begin": {
               "atk": 488,
               "bonus": 40.9
           },
           "start": 70,
           "last": 80,
           "end": {
               "atk": 532,
               "bonus": 45.3
           }
       },
       {
           "begin": {
               "atk": 563,
               "bonus": 45.3
           },
           "start": 80,
           "last": 90,
           "end": {
               "atk": 608,
               "bonus": 49.6
           }
       }
   ],
   "ascension": [
       {
           "start": 20,
           "items": [
               {
                   name: "흑운철 한 알",
                   "amount": 5
               },
               {
                   name: "약한 뼛조각",
                   "amount": 5
               },
               {
                   name: "보물찾기 까마귀 휘장",
                   "amount": 3
               }
           ],
           "price": 10000
       },
       {
           "start": 40,
           "items": [
               {
                   name: "흑운철 조각",
                   "amount": 5
               },
               {
                   name: "약한 뼛조각",
                   "amount": 18
               },
               {
                   name: "보물찾기 까마귀 휘장",
                   "amount": 12
               }
           ],
           "price": 20000
       },
       {
           "start": 50,
           "items": [
               {
                   name: "흑운철 조각",
                   "amount": 9
               },
               {
                   name: "단단한 뼛조각",
                   "amount": 9
               },
               {
                   name: "실버 까마귀 휘장",
                   "amount": 9
               }
           ],
           "price": 30000
       },
       {
           "start": 60,
           "items": [
               {
                   name: "흑운철 일각",
                   "amount": 5
               },
               {
                   name: "단단한 뼛조각",
                   "amount": 18
               },
               {
                   name: "실버 까마귀 휘장",
                   "amount": 14
               }
           ],
           "price": 45000
       },
       {
           "start": 70,
           "items": [
               {
                   name: "흑운철 일각",
                   "amount": 9
               },
               {
                   name: "석화한 뼛조각",
                   "amount": 14
               },
               {
                   name: "골드 까마귀 휘장",
                   "amount": 9
               }
           ],
           "price": 55000
       },
       {
           "start": 80,
           "items": [
               {
                   name: "흑운철 덩이",
                   "amount": 6
               },
               {
                   name: "석화한 뼛조각",
                   "amount": 27
               },
               {
                   name: "골드 까마귀 휘장",
                   "amount": 18
               }
           ],
           "price": 65000
       }
   ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Weapon_Vortex_Vanquisher.png/revision/latest/scale-to-width-down/512?cb=20201129060822",
    skills: [
      {
        name: "금빛의 옥·제군의 길",
        description: `보호막 강화 효과가 20/25/30/35/40% 증가한다. 공격 명중 후 공격력이 4/5/6/7/8% 증가한다. 지속 시간: 8초. 최대 중첩수: 5회. 해당 효과는 0.3초마다 1번 발동한다. 또한 보호막 존재 시 해당 효과의 공격력 증가 효과가 100% 증가한다.`
      }
    ],
    origin: "기원",
    keyword: ["관홍"]
  },
 "호마의 지팡이":  {
   name: "호마의 지팡이",
   "type": "장병기",
   "level": 5,
   "bonus": "치명타 피해",
   "bonusType": "percent",
   "stat": [
       {
           "begin": {
               "atk": 46,
               "bonus": 14.4
           },
           "start": 1,
           "last": 20,
           "end": {
               "atk": 122,
               "bonus": 25.4
           }
       },
       {
           "begin": {
               "atk": 153,
               "bonus": 25.4
           },
           "start": 20,
           "last": 40,
           "end": {
               "atk": 235,
               "bonus": 37.1
           }
       },
       {
           "begin": {
               "atk": 266,
               "bonus": 37.1
           },
           "start": 40,
           "last": 50,
           "end": {
               "atk": 308,
               "bonus": 42.9
           }
       },
       {
           "begin": {
               "atk": 340,
               "bonus": 42.9
           },
           "start": 50,
           "last": 60,
           "end": {
               "atk": 382,
               "bonus": 48.7
           }
       },
       {
           "begin": {
               "atk": 414,
               "bonus": 48.7
           },
           "start": 60,
           "last": 70,
           "end": {
               "atk": 457,
               "bonus": 54.5
           }
       },
       {
           "begin": {
               "atk": 488,
               "bonus": 54.5
           },
           "start": 70,
           "last": 80,
           "end": {
               "atk": 532,
               "bonus": 60.3
           }
       },
       {
           "begin": {
               "atk": 563,
               "bonus": 60.3
           },
           "start": 80,
           "last": 90,
           "end": {
               "atk": 608,
               "bonus": 66.2
           }
       }
   ],
   "ascension": [
       {
           "start": 20,
           "items": [
               {
                   name: "흑운철 한 알",
                   "amount": 5
               },
               {
                   name: "지맥의 낡은 가지",
                   "amount": 5
               },
               {
                   name: "슬라임 응축액",
                   "amount": 3
               }
           ],
           "price": 10000
       },
       {
           "start": 40,
           "items": [
               {
                   name: "흑운철 조각",
                   "amount": 5
               },
               {
                   name: "지맥의 낡은 가지",
                   "amount": 18
               },
               {
                   name: "슬라임 응축액",
                   "amount": 12
               }
           ],
           "price": 20000
       },
       {
           "start": 50,
           "items": [
               {
                   name: "흑운철 조각",
                   "amount": 9
               },
               {
                   name: "지맥의 낡은 잎.png",
                   "amount": 9
               },
               {
                   name: "슬라임청",
                   "amount": 9
               }
           ],
           "price": 30000
       },
       {
           "start": 60,
           "items": [
               {
                   name: "흑운철 일각",
                   "amount": 5
               },
               {
                   name: "지맥의 낡은 잎",
                   "amount": 18
               },
               {
                   name: "슬라임청",
                   "amount": 14
               }
           ],
           "price": 45000
       },
       {
           "start": 70,
           "items": [
               {
                   name: "흑운철 일각",
                   "amount": 9
               },
               {
                   name: "지맥의 새싹",
                   "amount": 14
               },
               {
                   name: "슬라임 원액",
                   "amount": 9
               }
           ],
           "price": 55000
       },
       {
           "start": 80,
           "items": [
               {
                   name: "흑운철 덩이",
                   "amount": 6
               },
               {
                   name: "지맥의 새싹",
                   "amount": 27
               },
               {
                   name: "슬라임 원액",
                   "amount": 18
               }
           ],
           "price": 65000
       }
   ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/17/Weapon_Staff_of_Homa.png/revision/latest/scale-to-width-down/512?cb=20210225200935",
    skills: [
      {
        name: "자유의 붉은 나비",
        description: `HP가 20/25/30/35/40% 증가하고, 이 무기를 장착한 캐릭터 HP 최대치의 0.8/1/1.2/1.4/1.6%에 해당하는 공격력 보너스를 획득한다. 이 무기를 장착한 캐릭터의 HP가 50% 미만일 경우, 공격력이 추가로 HP 최대치의 1/1.2/1.4/1.6/1.8%만큼 증가한다.`
      }
    ],
    origin: "기원",
    keyword: ["호마","호마창"]
  },
  "쿠사나기노이나비카리": {
name: "쿠사나기노이나비카리",
type: "장병기",
level: 5,
image: "https://w.namu.la/s/46413f437bf953c26ba2337dc74ffd7271847b87693107904162ec6fea05db25141b91f83474b43721c6d238189a03230f27841ba825ad326867d9d74c708fe4782e8a20ec0fafe6651bed376c796debca56c19a8fc3d0cc97181e7ff3333e17",
stat: [
    {
        "begin": {
            "atk": 46,
            "bonus": 12
        },
        "start": 1,
        "last": 20,
        "end": {
            "atk": 122,
            "bonus": 16.4
        }
    },
    {
        "begin": {
            "atk": 153,
            "bonus": 16.4
        },
        "start": 20,
        "last": 40,
        "end": {
            "atk": 235,
            "bonus": 26.1
        }
    },
    {
        "begin": {
            "atk": 266,
            "bonus": 26.1
        },
        "start": 40,
        "last": 50,
        "end": {
            "atk": 308,
            "bonus": 30.9
        }
    },
    {
        "begin": {
            "atk": 340,
            "bonus": 30.9
        },
        "start": 50,
        "last": 60,
        "end": {
            "atk": 382,
            "bonus": 35.7
        }
    },
    {
        "begin": {
            "atk": 414,
            "bonus": 35.7
        },
        "start": 60,
        "last": 70,
        "end": {
            "atk": 488,
            "bonus": 40.6
        }
    },
    {
        "begin": {
            "atk": 510,
            "bonus": 40.6
        },
        "start": 70,
        "last": 80,
        "end": {
            "atk": 532,
            "bonus": 50.3
        }
    },
    {
        "begin": {
            "atk": 563,
            "bonus": 50.3
        },
        "start": 80,
        "last": 90,
        "end": {
            "atk": 608,
            "bonus": 55.1
        }
    }
],
bonus: "원소 충전 효율",
bonusType: "percent",
ascension: [
    {
    start: 20,
    items: [
        {
        name: "금석극화의 가면",
        amount: 5
        },
        {
        name: "혼돈의 기관",
        amount: 5
        },
        {
        name: "오래된 코등이",
        amount: 3
        }
    ],
    price: 10000
    },
    {
    start: 40,
    items: [
        {
        name: "금석극화의 호교",
        amount: 5
        },
        {
        name: "혼돈의 기관",
        amount: 18
        },
        {
        name: "오래된 코등이",
        amount: 12
        }
    ],
    price: 20000
    },
    {
    start: 50,
    items: [
        {
        name: "금석극화의 호교",
        amount: 9
        },
        {
        name: "혼돈의 중추",
        amount: 9
        },
        {
        name: "카게우치 코등이",
        amount: 9
        }
    ],
    price: 30000
    },
    {
    start: 60,
    items: [
        {
        name: "금석극화의 일각",
        amount: 5
        },
        {
        name: "혼돈의 중추",
        amount: 18
        },
        {
        name: "카게우치 코등이",
        amount: 14
        }
    ],
    price: 45000
    },
    {
    start: 70,
    items: [
        {
        name: "금석극화의 일각",
        amount: 9
        },
        {
        name: "혼돈의 눈동자",
        amount: 14
        },
        {
        name: "명검 코등이",
        amount: 9
        }
    ],
    price: 55000
    },
    {
    start: 80,
    items: [
        {
        name: "금석극화의 귀인",
        amount: 6
        },
        {
        name: "혼돈의 눈동자",
        amount: 27
        },
        {
        name: "명검 코등이",
        amount: 18
        }
    ],
    price: 65000
    },
],
skills: [ 
    {
    name: "비시의 꿈 · 영원한 식사",
    description: "자신의 공격력이 초기 100%를 제외한 원소 충전 효율의 28/35/42/49/56%만큼 증가한다. 이 능력으로 최대 80/90/100/110/120%의 공격력 보너스를 획득할 수 있다. 원소폭발 사용 후 12초간 원소 충전 효율이 30/35/40/45/50% 증가한다."
    }
],
origin: "기원",
keyword: ["라이덴창","번개창","쿠사나기"]
  },
  "용학살창":  {
    name: "용학살창",
    "type": "장병기",
    "level": 4,
    "bonus": "원소 마스터리",
    "bonusType": "number",
    "stat": [
        {
            "begin": {
                "atk": 41,
                "bonus": 48
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 99,
                "bonus": 85
            }
        },
        {
            "begin": {
                "atk": 125,
                "bonus": 85
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 184,
                "bonus": 124
            }
        },
        {
            "begin": {
                "atk": 210,
                "bonus": 124
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 238,
                "bonus": 143
            }
        },
        {
            "begin": {
                "atk": 264,
                "bonus": 143
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 293,
                "bonus": 162
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 162
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 347,
                "bonus": 182
            }
        },
        {
            "begin": {
                "atk": 373,
                "bonus": 182
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 401,
                "bonus": 201
            }
        },
        {
            "begin": {
                "atk": 427,
                "bonus": 201
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 454,
                "bonus": 221
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "안개구름 속의 흑연단",
                    "amount": 3
                },
                {
                    name: "안개꽃 가루",
                    "amount": 3
                },
                {
                    name: "이능 두루마리",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 3
                },
                {
                    name: "안개꽃 가루",
                    "amount": 12
                },
                {
                    name: "이능 두루마리",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 6
                },
                {
                    name: "안개풀 주머니",
                    "amount": 6
                },
                {
                    name: "봉마의 두루마리",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 3
                },
                {
                    name: "안개풀 주머니",
                    "amount": 12
                },
                {
                    name: "봉마의 두루마리",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 6
                },
                {
                    name: "안개 등심",
                    "amount": 9
                },
                {
                    name: "금주의 두루마리",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "안개구름 속의 전환",
                    "amount": 4
                },
                {
                    name: "안개 등심",
                    "amount": 18
                },
                {
                    name: "금주의 두루마리",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/2/24/Weapon_Dragon%27s_Bane.png/revision/latest/scale-to-width-down/512?cb=20201116033629",
     skills: [
       {
         name: "따끈따끈 첨벙첨벙",
         description: `물 원소 또는 불 원소의 영향을 받은 적에게 가하는 피해가 20/24/28/32/36%증가한다.`
       }
     ],
     origin: "기원",
     keyword: [],
   },
  "별의 낫 프로토타입":  {
    name: "별의 낫 프로토타입",
    "type": "장병기",
    "level": 4,
    "bonus": "원소 충전 효율",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 10
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 17.7
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 17.7
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 25.8
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 25.8
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 29.8
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 29.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 33.8
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 33.8
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 37.9
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 37.9
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 41.9
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 41.9
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 45.9
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "흑운철 한 알",
                    "amount": 3
                },
                {
                    name: "약한 뼛조각",
                    "amount": 3
                },
                {
                    name: "부서진 가면",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "흑운철 조각",
                    "amount": 3
                },
                {
                    name: "약한 뼛조각",
                    "amount": 12
                },
                {
                    name: "부서진 가면",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "흑운철 조각",
                    "amount": 6
                },
                {
                    name: "단단한 뼛조각",
                    "amount": 6
                },
                {
                    name: "오염된 가면",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "흑운철 일각",
                    "amount": 3
                },
                {
                    name: "단단한 뼛조각",
                    "amount": 12
                },
                {
                    name: "오염된 가면",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "흑운철 일각",
                    "amount": 6
                },
                {
                    name: "석화한 뼛조각",
                    "amount": 9
                },
                {
                    name: "불길한 가면",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "흑운철 덩이",
                    "amount": 4
                },
                {
                    name: "석화한 뼛조각",
                    "amount": 18
                },
                {
                    name: "불길한 가면",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Weapon_Prototype_Starglitter.png/revision/latest/scale-to-width-down/512?cb=20201116034758",
     forge: [
       {
         name: "북대륙의 장병기 원형",
         amount: 1
       },
       {
         name: "백철",
         amount: 50
       },
       {
         name: "수정덩이",
         amount: 50
       },
     ],
     skills: [
       {
         name: "마력의 갈증",
         description: `원소 전투 스킬 발동 후 일반 공격과 강공격 피해가 8/10/12/14/16% 증가한다. 지속 시간: 12초. 최대 중첩수: 2회.`
       }
     ],
     origin: "단조",
     keyword: ["별의낫"]
   },
  "유월창":  {
    name: "유월창",
    "type": "장병기",
    "level": 4,
    "bonus": "물리 피해 보너스",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 44,
                "bonus": 7.5
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 119,
                "bonus": 13.3
            }
        },
        {
            "begin": {
                "atk": 144,
                "bonus": 13.3
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 226,
                "bonus": 19.3
            }
        },
        {
            "begin": {
                "atk": 252,
                "bonus": 19.3
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 293,
                "bonus": 22.4
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 22.4
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 361,
                "bonus": 25.4
            }
        },
        {
            "begin": {
                "atk": 387,
                "bonus": 25.4
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 429,
                "bonus": 28.4
            }
        },
        {
            "begin": {
                "atk": 455,
                "bonus": 28.4
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 497,
                "bonus": 31.5
            }
        },
        {
            "begin": {
                "atk": 523,
                "bonus": 31.5
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 565,
                "bonus": 34.5
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "고운한림의 매끄러운 모래",
                    "amount": 3
                },
                {
                    name: "사냥꾼의 제도",
                    "amount": 3
                },
                {
                    name: "보물찾기 까마귀 휘장",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "고운한림의 휘암",
                    "amount": 3
                },
                {
                    name: "사냥꾼의 제도",
                    "amount": 12
                },
                {
                    name: "보물찾기 까마귀 휘장",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "고운한림의 휘암",
                    "amount": 6
                },
                {
                    name: "특수 요원의 제도",
                    "amount": 6
                },
                {
                    name: "실버 까마귀 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "고운한림의 해골",
                    "amount": 3
                },
                {
                    name: "특수 요원의 제도",
                    "amount": 12
                },
                {
                    name: "실버 까마귀 휘장",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "고운한림의 해골",
                    "amount": 6
                },
                {
                    name: "검사관의 제도",
                    "amount": 9
                },
                {
                    name: "골드 까마귀 휘장",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "고운한림의 신체",
                    "amount": 4
                },
                {
                    name: "검사관의 제도",
                    "amount": 18
                },
                {
                    name: "골드 까마귀 휘장",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Weapon_Crescent_Pike.png/revision/latest/scale-to-width-down/512?cb=20201116033544",
     forge: [
       {
         name: "북대륙의 장병기 원형",
         amount: 1
       },
       {
         name: "백철",
         amount: 50
       },
       {
         name: "수정덩이",
         amount: 50
       },
     ],
     skills: [
       {
         name: "에너지 주입 바늘",
         description: `원소 입자 또는 원소 구슬 획득 후 5초 동안 일반 공격 혹은 강공격 시 적에게 추가로 공격력 20/25/30/35/40%의 피해를 준다.`
       }
     ],
     origin: "단조",
     keyword: []
   },
  "흑암창":  {
    name: "흑암창",
    "type": "장병기",
    "level": 4,
    "bonus": "치명타 피해",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 12
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 21.2
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 21.2
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 30.9
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 30.9
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 35.7
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 35.7
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 40.6
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 40.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 45.4
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 45.4
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 50.3
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 50.3
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 55.1
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "안개구름 속의 흑연단",
                    "amount": 3
                },
                {
                    name: "안개꽃 가루",
                    "amount": 3
                },
                {
                    name: "신병의 휘장",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 3
                },
                {
                    name: "안개꽃 가루",
                    "amount": 12
                },
                {
                    name: "신병의 휘장",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 6
                },
                {
                    name: "안개풀 주머니",
                    "amount": 6
                },
                {
                    name: "사관의 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 3
                },
                {
                    name: "안개풀 주머니",
                    "amount": 12
                },
                {
                    name: "사관의 휘장",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 6
                },
                {
                    name: "안개 등심",
                    "amount": 9
                },
                {
                    name: "위관의 휘장",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "안개구름 속의 전환",
                    "amount": 4
                },
                {
                    name: "안개 등심",
                    "amount": 18
                },
                {
                    name: "위관의 휘장",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/d/d5/Weapon_Blackcliff_Pole.png/revision/latest/scale-to-width-down/512?cb=20201116153435",
     skills: [
       {
         name: "승승장구",
         description: `적을 처치한 후 공격력이 12/15/18/21/24% 증가한다. 지속 시간: 30초. 최대 중첩수: 3회. 중첩 1회당 지속 시간은 독립 계산한다.`
       }
     ],
     origin: "스타라이트 교환",
     keyword: [],
   },
  "결투의 창":  {
    name: "결투의 창",
    "type": "장병기",
    "level": 4,
    "bonus": "치명타 확률",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 41,
                "bonus": 8
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 99,
                "bonus": 14.1
            }
        },
        {
            "begin": {
                "atk": 125,
                "bonus": 14.1
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 184,
                "bonus": 20.6
            }
        },
        {
            "begin": {
                "atk": 210,
                "bonus": 20.6
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 238,
                "bonus": 23.8
            }
        },
        {
            "begin": {
                "atk": 264,
                "bonus": 23.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 293,
                "bonus": 27.1
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 27.1
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 347,
                "bonus": 30.3
            }
        },
        {
            "begin": {
                "atk": 373,
                "bonus": 30.3
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 401,
                "bonus": 33.5
            }
        },
        {
            "begin": {
                "atk": 427,
                "bonus": 33.5
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 454,
                "bonus": 36.8
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "칼바람 울프의 젖니",
                    "amount": 3
                },
                {
                    name: "지맥의 낡은 가지",
                    "amount": 3
                },
                {
                    name: "구라구라 꽃꿀",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 3
                },
                {
                    name: "지맥의 낡은 가지",
                    "amount": 12
                },
                {
                    name: "구라구라 꽃꿀",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 6
                },
                {
                    name: "지맥의 마른 잎",
                    "amount": 6
                },
                {
                    name: "반짝반짝 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "칼바람 울프의 부서진 이빨",
                    "amount": 3
                },
                {
                    name: "지맥의 마른 잎",
                    "amount": 12
                },
                {
                    name: "반짝반짝 꽃꿀",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "칼바람 울프의 부서진 이빨",
                    "amount": 6
                },
                {
                    name: "지맥의 새싹",
                    "amount": 9
                },
                {
                    name: "원소 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "칼바람 울프의 그리운 고향",
                    "amount": 4
                },
                {
                    name: "지맥의 새싹",
                    "amount": 18
                },
                {
                    name: "원소 꽃꿀",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/6/69/Weapon_Deathmatch.png/revision/latest/scale-to-width-down/512?cb=20201116154647",
     skills: [
       {
         name: "검투사",
         description: `주변에 적이 2기 이상 있을 때 공격력이 16/20/24/28/32%, 방어력이 16/20/24/28/32% 증가한다. 주변에 적이 2기 미만일 때 공격력이 24/30/36/42/48% 증가한다.`
       }
     ],
     origin: "진주 기행 Lv.30 보상",
     keyword: ["기행창","결투창"]
   },
  "페보니우스 장창":  {
    name: "페보니우스 장창",
    "type": "장병기",
    "level": 4,
    "bonus": "원소 충전 효율",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 44,
                "bonus": 6.7
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 119,
                "bonus": 11.8
            }
        },
        {
            "begin": {
                "atk": 144,
                "bonus": 11.8
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 226,
                "bonus": 17.2
            }
        },
        {
            "begin": {
                "atk": 252,
                "bonus": 17.2
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 293,
                "bonus": 19.9
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 19.9
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 361,
                "bonus": 22.6
            }
        },
        {
            "begin": {
                "atk": 387,
                "bonus": 22.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 429,
                "bonus": 25.2
            }
        },
        {
            "begin": {
                "atk": 455,
                "bonus": 25.2
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 497,
                "bonus": 27.9
            }
        },
        {
            "begin": {
                "atk": 523,
                "bonus": 27.9
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 565,
                "bonus": 30.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "라이언 투사의 족쇄",
                    "amount": 3
                },
                {
                    name: "혼돈의 장치",
                    "amount": 3
                },
                {
                    name: "슬라임 응축액",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "라이언 투사의 쇠사슬",
                    "amount": 3
                },
                {
                    name: "혼돈의 장치",
                    "amount": 12
                },
                {
                    name: "슬라임 응축액",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "라이언 투사의 쇠사슬",
                    "amount": 6
                },
                {
                    name: "혼돈의 회로",
                    "amount": 6
                },
                {
                    name: "슬라임청",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "라이언 투사의 수갑",
                    "amount": 3
                },
                {
                    name: "혼돈의 회로",
                    "amount": 12
                },
                {
                    name: "슬라임청",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "라이언 투사의 수갑",
                    "amount": 6
                },
                {
                    name: "혼돈의 노심",
                    "amount": 9
                },
                {
                    name: "슬라임 원액",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "라이언 투사의 이념",
                    "amount": 4
                },
                {
                    name: "혼돈의 노심",
                    "amount": 18
                },
                {
                    name: "슬라임 원액",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/5/57/Weapon_Favonius_Lance.png/revision/latest/scale-to-width-down/512?cb=20201116154512",
     skills: [
       {
         name: "바람과 함께",
         description: `치명타 시 60/70/80/90/100%의 확률로 소량의 원소 구슬이 생성되고 캐릭터의 원소 에너지를 6pt 회복한다. 해당 효과는 12/10.5/9/7.5/6초마다 1번 발동한다.`
       }
     ],
     origin: "기원",
     keyword: ["페보창","페보니우스창"]
   },
  "왕실의 장창":  {
    name: "왕실의 장창",
    "type": "장병기",
    "level": 4,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 44,
                "bonus": 6
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 119,
                "bonus": 10.6
            }
        },
        {
            "begin": {
                "atk": 144,
                "bonus": 10.6
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 226,
                "bonus": 15.5
            }
        },
        {
            "begin": {
                "atk": 252,
                "bonus": 15.5
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 283,
                "bonus": 17.9
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 17.9
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 361,
                "bonus": 20.3
            }
        },
        {
            "begin": {
                "atk": 387,
                "bonus": 20.3
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 429,
                "bonus": 22.7
            }
        },
        {
            "begin": {
                "atk": 455,
                "bonus": 22.7
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 497,
                "bonus": 25.1
            }
        },
        {
            "begin": {
                "atk": 523,
                "bonus": 25.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 565,
                "bonus": 27.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "안개구름 속의 흑연단",
                    "amount": 2
                },
                {
                    name: "안개꽃 가루",
                    "amount": 2
                },
                {
                    name: "신병의 휘장",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 3
                },
                {
                    name: "안개꽃 가루",
                    "amount": 12
                },
                {
                    name: "신병의 휘장",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "안개구름 속의 수은단",
                    "amount": 6
                },
                {
                    name: "안개풀 주머니",
                    "amount": 6
                },
                {
                    name: "사관의 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 3
                },
                {
                    name: "안개풀 주머니",
                    "amount": 12
                },
                {
                    name: "사관의 휘장",
                    "amount": 9
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "안개구름 속의 금단",
                    "amount": 6
                },
                {
                    name: "안개 등심",
                    "amount": 9
                },
                {
                    name: "위관의 휘장",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "안개구름 속의 전환",
                    "amount": 4
                },
                {
                    name: "안개 등심",
                    "amount": 12
                },
                {
                    name: "위관의 휘장",
                    "amount": 8
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Weapon_Royal_Spear.png/revision/latest/scale-to-width-down/512?cb=20201202041704",
     skills: [
       {
         name: "집중",
         description: `공격으로 피해를 줄 때마다 치명타 확률이 8/10/12/14/16% 증가한다. 최대 중첩수: 5회. 공격 시 치명타가 발생하면 모든 집중 효과가 사라진다.`
       }
     ],
     origin: "스타라이트 교환",
     keyword: []
   },
  "용의 척추":  {
     name: "용의 척추",
     "type": "장병기",
     "level": 4,
     "bonus": "물리 피해 보너스",
     "bonusType": "percent",
     "stat": [
         {
             "begin": {
                 "atk": 41,
                 "bonus": 15.0
             },
             "start": 1,
             "last": 20,
             "end": {
                 "atk": 99,
                 "bonus": 26.5
             }
         },
         {
             "begin": {
                 "atk": 125,
                 "bonus": 26.5
             },
             "start": 20,
             "last": 40,
             "end": {
                 "atk": 184,
                 "bonus": 38.7
             }
         },
         {
             "begin": {
                 "atk": 210,
                 "bonus": 38.7
             },
             "start": 40,
             "last": 50,
             "end": {
                 "atk": 238,
                 "bonus": 44.7
             }
         },
         {
             "begin": {
                 "atk": 264,
                 "bonus": 44.7
             },
             "start": 50,
             "last": 60,
             "end": {
                 "atk": 293,
                 "bonus": 50.8
             }
         },
         {
             "begin": {
                 "atk": 319,
                 "bonus": 50.8
             },
             "start": 60,
             "last": 70,
             "end": {
                 "atk": 347,
                 "bonus": 56.8
             }
         },
         {
             "begin": {
                 "atk": 373,
                 "bonus": 56.8
             },
             "start": 70,
             "last": 80,
             "end": {
                 "atk": 401,
                 "bonus": 62.9
             }
         },
         {
             "begin": {
                 "atk": 427,
                 "bonus": 62.9
             },
             "start": 80,
             "last": 90,
             "end": {
                 "atk": 454,
                 "bonus": 69.0
             }
         }
     ],
     "ascension": [
         {
             "start": 20,
             "items": [
                 {
                     name: "칼바람 울프의 젖니",
                     "amount": 3
                 },
                 {
                     name: "안개꽃 가루",
                     "amount": 3
                 },
                 {
                     name: "신병의 휘장",
                     "amount": 2
                 }
             ],
             "price": 5000
         },
         {
             "start": 40,
             "items": [
                 {
                     name: "칼바람 울프의 이빨",
                     "amount": 3
                 },
                 {
                     name: "안개꽃 가루",
                     "amount": 12
                 },
                 {
                     name: "신병의 휘장",
                     "amount": 8
                 }
             ],
             "price": 15000
         },
         {
             "start": 50,
             "items": [
                 {
                     name: "칼바람 울프의 이빨",
                     "amount": 6
                 },
                 {
                     name: "안개풀 주머니",
                     "amount": 6
                 },
                 {
                     name: "사관의 휘장",
                     "amount": 6
                 }
             ],
             "price": 15000
         },
         {
             "start": 60,
             "items": [
                 {
                     name: "칼바람 울프의 부서진 이빨",
                     "amount": 3
                 },
                 {
                     name: "안개풀 주머니",
                     "amount": 12
                 },
                 {
                     name: "사관의 휘장",
                     "amount": 9
                 }
             ],
             "price": 20000
         },
         {
             "start": 70,
             "items": [
                 {
                     name: "칼바람 울프의 부서진 이빨",
                     "amount": 6
                 },
                 {
                     name: "안개 등심",
                     "amount": 9
                 },
                 {
                     name: "위관의 휘장",
                     "amount": 6
                 }
             ],
             "price": 35000
         },
         {
             "start": 80,
             "items": [
                 {
                     name: "칼바람 울프의 그리운 고향",
                     "amount": 4
                 },
                 {
                     name: "안개 등심",
                     "amount": 18
                 },
                 {
                     name: "위관의 휘장",
                     "amount": 12
                 }
             ],
             "price": 45000
         }
     ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/1/1a/Weapon_Dragonspine_Spear.png/revision/latest/scale-to-width-down/512?cb=20201223042936",
     forge: [
       {
         name: "북대륙의 장병기 원형",
         amount: 1
       },
       {
         name: "성은 광석",
         amount: 50
       },
       {
         name: "생명력을 흡수한 용의 이빨",
         amount: 50
       },
     ],
     skills: [
       {
         name: "서리의 매장",
         description: `일반 공격과 강공격이 적에게 명중 시 60/70/80/90/100%의 확률로 적의 위쪽에 영원의 얼음 결정을 생성한 후 떨궈서 공격력 80/95/110/125/140%의 범위 피해를 준다. 적이 얼음 원소의 영향을 받으면 공격력 200/240/280/320/360%의 피해를 준다. 해당 효과는 10초마다 1회 발동한다.`
       }
     ],
     origin: "단조",
     keyword: [],
     "required_items": ["칼바람 울프의 그리운 고향", "안개 등심", "위관의 휘장"]
   },
  "천암장창":  {
    name: "천암장창",
    "type": "장병기",
    "level": 4,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 44,
                "bonus": 6
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 119,
                "bonus": 10.6
            }
        },
        {
            "begin": {
                "atk": 144,
                "bonus": 10.6
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 226,
                "bonus": 15.5
            }
        },
        {
            "begin": {
                "atk": 252,
                "bonus": 15.5
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 293,
                "bonus": 17.9
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 17.9
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 361,
                "bonus": 20.3
            }
        },
        {
            "begin": {
                "atk": 387,
                "bonus": 20.3
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 429,
                "bonus": 22.7
            }
        },
        {
            "begin": {
                "atk": 455,
                "bonus": 22.7
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 497,
                "bonus": 25.1
            }
        },
        {
            "begin": {
                "atk": 523,
                "bonus": 25.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 565,
                "bonus": 27.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "흑운철 한 알",
                    "amount": 3
                },
                {
                    name: "약한 뼛조각",
                    "amount": 3
                },
                {
                    name: "단단한 화살촉",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "흑운철 조각",
                    "amount": 3
                },
                {
                    name: "약한 뼛조각",
                    "amount": 12
                },
                {
                    name: "단단한 화살촉",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "흑운철 조각",
                    "amount": 6
                },
                {
                    name: "단단한 뼛조각",
                    "amount": 6
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "흑운철 일각",
                    "amount": 3
                },
                {
                    name: "단단한 뼛조각",
                    "amount": 12
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "흑운철 일각",
                    "amount": 6
                },
                {
                    name: "석화한 뼛조각",
                    "amount": 9
                },
                {
                    name: "역전의 화살촉",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "흑운철 덩이",
                    "amount": 4
                },
                {
                    name: "석화한 뼛조각",
                    "amount": 18
                },
                {
                    name: "역전의 화살촉",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
     image: "https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Weapon_Lithic_Spear.png/revision/latest/scale-to-width-down/512?cb=20210225200953",
     skills: [
       {
         name: "천암결·일심",
         description: `파티 내에 리월 출신 캐릭터가 1명 존재할 때마다 해당 무기를 장착한 캐릭터의 공격력이7% 증가하고 치명타 확률이 3% 증가한다. 최대 중첩수:4회`
       }
     ],
     origin: "기원",
     keyword: ["천암창"],
   },
  "키타인 십자창": {
    name: "키타인 십자창",
    type: "장병기",
    level: 4,
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/13/Weapon_Kitain_Cross_Spear.png/revision/latest/scale-to-width-down/512?cb=20210723074313",
    stat: [
      {
        start: 1,
        last: 20,
        begin: {
          atk: 44,
          bonus: 24
        },
        end: {
          atk: 119,
          bonus: 42
        }
      },
      {
        start: 20,
        last: 40,
        begin: {
          atk: 144,
          bonus: 42
        },
        end: {
          atk: 226,
          bonus: 62
        }
      },
      {
        start: 40,
        last: 50,
        begin: {
          atk: 252,
          bonus: 62
        },
        end: {
          atk: 293,
          bonus: 71
        }
      },
      {
        start: 50,
        last: 60,
        begin: {
          atk: 319,
          bonus: 71
        },
        end: {
          atk: 361,
          bonus: 81
        }
      },
      {
        start: 60,
        last: 70,
        begin: {
          atk: 387,
          bonus: 81
        },
        end: {
          atk: 429,
          bonus: 91
        }
      },
      {
        start: 70,
        last: 80,
        begin: {
          atk: 455,
          bonus: 91
        },
        end: {
          atk: 497,
          bonus: 101
        }
      },
      {
        start: 80,
        last: 90,
        begin: {
          atk: 523,
          bonus: 101
        },
        end: {
          atk: 565,
          bonus: 110
        }
      },
    ],
    bonus: "원소 마스터리",
    bonusType: "number",
    ascension: [
      {
          "start": 20,
          "items": [
              {
                  "name": "금석극화의 가면",
                  "amount": 3
              },
              {
                  "name": "혼돈의 기관",
                  "amount": 3
              },
              {
                  "name": "보물찾기 까마귀 휘장",
                  "amount": 2
              }
          ],
          "price": 5000
      },
      {
          "start": 40,
          "items": [
              {
                  "name": "금석극화의 호교",
                  "amount": 3
              },
              {
                  "name": "혼돈의 기관",
                  "amount": 12
              },
              {
                  "name": "보물찾기 까마귀 휘장",
                  "amount": 8
              }
          ],
          "price": 15000
      },
      {
          "start": 50,
          "items": [
              {
                  "name": "금석극화의 호교",
                  "amount": 6
              },
              {
                  "name": "혼돈의 중추",
                  "amount": 6
              },
              {
                  "name": "실버 까마귀 휘장",
                  "amount": 6
              }
          ],
          "price": 20000
      },
      {
          "start": 60,
          "items": [
              {
                  "name": "금석극화의 일각",
                  "amount": 3
              },
              {
                  "name": "혼돈의 중추",
                  "amount": 12
              },
              {
                  "name": "실버 까마귀 휘장",
                  "amount": 9
              }
          ],
          "price": 30000
      },
      {
          "start": 70,
          "items": [
              {
                  "name": "금석극화의 일각",
                  "amount": 6
              },
              {
                  "name": "혼돈의 눈동자",
                  "amount": 9
              },
              {
                  "name": "골드 까마귀 휘장",
                  "amount": 6
              }
          ],
          "price": 35000
      },
      {
          "start": 80,
          "items": [
              {
                  "name": "금석극화의 귀인",
                  "amount": 4
              },
              {
                  "name": "혼돈의 눈동자",
                  "amount": 18
              },
              {
                  "name": "골드 까마귀 휘장",
                  "amount": 12
              }
          ],
          "price": 45000
      }
    ],
    skills: [
      {
        name: "명사의 거동",
        description: "원소전투 스킬로 가하는 피해가 6/7.5/9/10.5/12% 증가한다. 원소전투 스킬이 명중되면, 캐릭터는 원소 에너지를 3pt 잃고, 그 후 6초 동안 2초마다 원소 에너지를 3/3.5/4/4.5/5pt 회복한다. 이 효과는 10초마다 최대 1회만 발동하며, 캐릭터가 대기 상태일 때도 발동된다."
      }
    ],
    forge: [
        {
          name: "북대륙의 장병기 원형",
          amount: 1
        },
        {
          name: "자수정 덩이",
          amount: 50
        },
        {
          name: "백철",
          amount: 50
        },
    ],
    origin: "단조",
    keyword: ["이나즈마단조창","이나즈마단조장병기","키타인","십자창"]
   },
  "백술창": {
    "name": "백술창",
    "type": "장병기",
    "level": 3,
    "bonus": "치명타 확률",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 39,
                "bonus": 5.1
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 94,
                "bonus": 9
            }
        },
        {
            "begin": {
                "atk": 113,
                "bonus": 9
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 169,
                "bonus": 13.1
            }
        },
        {
            "begin": {
                "atk": 189,
                "bonus": 13.1
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 216,
                "bonus": 15.2
            }
        },
        {
            "begin": {
                "atk": 236,
                "bonus": 15.2
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 263,
                "bonus": 17.3
            }
        },
        {
            "begin": {
                "atk": 282,
                "bonus": 17.3
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 309,
                "bonus": 19.3
            }
        },
        {
            "begin": {
                "atk": 329,
                "bonus": 19.3
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 355,
                "bonus": 21.4
            }
        },
        {
            "begin": {
                "atk": 375,
                "bonus": 21.4
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 401,
                "bonus": 23.4
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "고운한림의 매끄러운 모래",
                    "amount": 2
                },
                {
                    "name": "사냥꾼의 제도",
                    "amount": 2
                },
                {
                    "name": "신병의 휘장",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "고운한림의 휘암",
                    "amount": 2
                },
                {
                    "name": "사냥꾼의 제도",
                    "amount": 8
                },
                {
                    "name": "신병의 휘장",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "고운한림의 휘암",
                    "amount": 4
                },
                {
                    "name": "특수 요원의 제도",
                    "amount": 4
                },
                {
                    "name": "사관의 휘장",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "고운한림의 해골",
                    "amount": 2
                },
                {
                    "name": "특수 요원의 제도",
                    "amount": 8
                },
                {
                    "name": "사관의 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "고운한림의 해골",
                    "amount": 4
                },
                {
                    "name": "검사관의 제도",
                    "amount": 6
                },
                {
                    "name": "위관의 휘장",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "고운한림의 신체",
                    "amount": 3
                },
                {
                    "name": "검사관의 제도",
                    "amount": 12
                },
                {
                    "name": "위관의 휘장",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/1f/Weapon_White_Tassel.png/revision/latest/scale-to-width-down/512?cb=20201116035549",
    skills: [
      {
        name: "예리",
        description: "일반 공격으로 가하는 피해가 24/30/36/42/48%증가한다."
      }
    ],
    origin: "상자",
    keyword: [],
  },
  "미늘창": {
    "name": "미늘창",
    "type": "장병기",
    "level": 3,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 40,
                "bonus": 5.1
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 102,
                "bonus": 9
            }
        },
        {
            "begin": {
                "atk": 121,
                "bonus": 9
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 187,
                "bonus": 13.1
            }
        },
        {
            "begin": {
                "atk": 207,
                "bonus": 13.1
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 239,
                "bonus": 15.2
            }
        },
        {
            "begin": {
                "atk": 259,
                "bonus": 15.2
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 292,
                "bonus": 17.3
            }
        },
        {
            "begin": {
                "atk": 311,
                "bonus": 17.3
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 344,
                "bonus": 19.3
            }
        },
        {
            "begin": {
                "atk": 363,
                "bonus": 19.3
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 396,
                "bonus": 21.4
            }
        },
        {
            "begin": {
                "atk": 415,
                "bonus": 21.4
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 448,
                "bonus": 23.5
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "안개구름 속의 흑연단",
                    "amount": 2
                },
                {
                    "name": "안개꽃 가루",
                    "amount": 2
                },
                {
                    "name": "구라구라 꽃꿀",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "안개구름 속의 수은단",
                    "amount": 2
                },
                {
                    "name": "안개꽃 가루",
                    "amount": 8
                },
                {
                    "name": "구라구라 꽃꿀",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "안개구름 속의 수은단",
                    "amount": 4
                },
                {
                    "name": "안개풀 주머니",
                    "amount": 4
                },
                {
                    "name": "반짝반짝 꽃꿀",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "안개구름 속의 금단",
                    "amount": 2
                },
                {
                    "name": "안개풀 주머니",
                    "amount": 8
                },
                {
                    "name": "반짝반짝 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "안개구름 속의 금단",
                    "amount": 4
                },
                {
                    "name": "안개 등심",
                    "amount": 6
                },
                {
                    "name": "원소 꽃꿀",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "안개구름 속의 전환",
                    "amount": 3
                },
                {
                    "name": "안개 등심",
                    "amount": 12
                },
                {
                    "name": "원소 꽃꿀",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/41/Weapon_Halberd.png/revision/latest/scale-to-width-down/512?cb=20201116033956",
    skills: [
      {
        name: "무게",
        description: "일반 공격으로 명중한 적에게 추가로 공격력 160/200/240/280/320%의 피해를 준다. 해당 효과는 10초마다 1번 발동한다."
      }
    ],
    origin: "상자",
    keyword: [],
  },
  "흑술창": {
    "name": "흑술창",
    "type": "장병기",
    "level": 3,
    "bonus": "HP",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 38,
                "bonus": 10.2
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 86,
                "bonus": 18
            }
        },
        {
            "begin": {
                "atk": 105,
                "bonus": 18
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 151,
                "bonus": 26.3
            }
        },
        {
            "begin": {
                "atk": 171,
                "bonus": 26.3
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 193,
                "bonus": 30.4
            }
        },
        {
            "begin": {
                "atk": 212,
                "bonus": 30.4
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 234,
                "bonus": 34.6
            }
        },
        {
            "begin": {
                "atk": 253,
                "bonus": 34.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 274,
                "bonus": 38.7
            }
        },
        {
            "begin": {
                "atk": 294,
                "bonus": 38.7
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 314,
                "bonus": 42.8
            }
        },
        {
            "begin": {
                "atk": 334,
                "bonus": 42.8
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 354,
                "bonus": 46.9
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "흑운철 한 알",
                    "amount": 2
                },
                {
                    "name": "약한 뼛조각",
                    "amount": 2
                },
                {
                    "name": "견고한 화살촉",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "흑운철 조각",
                    "amount": 2
                },
                {
                    "name": "약한 뼛조각",
                    "amount": 8
                },
                {
                    "name": "견고한 화살촉",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "흑운철 조각",
                    "amount": 4
                },
                {
                    "name": "단단한 뼛조각",
                    "amount": 4
                },
                {
                    "name": "날카로운 화살촉",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "흑운철 일각",
                    "amount": 2
                },
                {
                    "name": "단단한 뼛조각",
                    "amount": 8
                },
                {
                    "name": "날카로운 화살촉",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "흑운철 일각",
                    "amount": 4
                },
                {
                    "name": "석화한 뼛조각",
                    "amount": 6
                },
                {
                    "name": "역전의 화살촉",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "흑운철 덩이",
                    "amount": 3
                },
                {
                    "name": "석화한 뼛조각",
                    "amount": 12
                },
                {
                    "name": "역전의 화살촉",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/43/Weapon_Black_Tassel.png/revision/latest/scale-to-width-down/512?cb=20201116033134",
    skills: [
      {
        name: "제유",
        description: "슬라임 타입의 적에게 가하는 피해가 40/50/60/70/80%증가한다."
      }
    ],
    origin: "기원",
    keyword: [],
  },
  "철촉창": {
    name: "철촉창",
    "type": "장병기",
    "level": 2,
    "stat": [
        {
            "begin": {
                "atk": 33,
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 80
            }
        },
        {
            "begin": {
                "atk": 91
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 139
            }
        },
        {
            "begin": {
                "atk": 151
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 174,
            }
        },
        {
            "begin": {
                "atk": 186
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 209
            }
        },
        {
            "begin": {
                "atk": 220
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 243
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "라이언 투사의 족쇄",
                    "amount": 1
                },
                {
                    name: "혼돈의 장치",
                    "amount": 1
                },
                {
                    name: "이능 두루마리",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "라이언 투사의 쇠사슬",
                    "amount": 1
                },
                {
                    name: "혼돈의 장치",
                    "amount": 5
                },
                {
                    name: "이능 두루마리",
                    "amount": 4
                }
            ],
            "price": 5000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "라이언 투사의 쇠사슬",
                    "amount": 3
                },
                {
                    name: "혼돈의 회로",
                    "amount": 3
                },
                {
                    name: "봉마의 두루마리",
                    "amount": 3
                }
            ],
            "price": 10000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "라이언 투사의 수갑",
                    "amount": 1
                },
                {
                    name: "혼돈의 회로",
                    "amount": 5
                },
                {
                    name: "봉마의 두루마리",
                    "amount": 4
                }
            ],
            "price": 15000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/25/Weapon_Iron_Point.png/revision/latest/scale-to-width-down/512?cb=20201116034039",
    origin: "상점 구매 및 보물상자",
    keyword: [],
  },
  "초보자의 장창": {
    name: "초보자의 장창",
    "type": "장병기",
    "level": 1,
    "stat": [
        {
            "begin": {
                "atk": 23,
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 56
            }
        },
        {
            "begin": {
                "atk": 68
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 102
            }
        },
        {
            "begin": {
                "atk": 113
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 130,
            }
        },
        {
            "begin": {
                "atk": 141
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 169
            }
        },
        {
            "begin": {
                "atk": 169
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 185
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "라이언 투사의 족쇄",
                    "amount": 1
                },
                {
                    name: "혼돈의 장치",
                    "amount": 1
                },
                {
                    name: "이능 두루마리",
                    "amount": 1
                }
            ],
            "price": 0
        },
        {
            "start": 40,
            "items": [
                {
                    name: "라이언 투사의 쇠사슬",
                    "amount": 1
                },
                {
                    name: "혼돈의 장치",
                    "amount": 4
                },
                {
                    name: "이능 두루마리",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "라이언 투사의 쇠사슬",
                    "amount": 2
                },
                {
                    name: "혼돈의 회로",
                    "amount": 2
                },
                {
                    name: "봉마의 두루마리",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "라이언 투사의 수갑",
                    "amount": 1
                },
                {
                    name: "혼돈의 회로",
                    "amount": 4
                },
                {
                    name: "봉마의 두루마리",
                    "amount": 3
                }
            ],
            "price": 10000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/fc/Weapon_Beginner%27s_Protector.png/revision/latest/scale-to-width-down/512?cb=20201116033115",
    origin: "상점 구매 및 보물상자",
    keyword: [],
  },
  //활
  "천공의 날개":  {
    name: "천공의 날개",
    "type": "활",
    "level": 5,
    "bonus": "치명타 확률",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 48,
                "bonus": 4.8
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 133,
                "bonus": 8.5
            }
        },
        {
            "begin": {
                "atk": 164,
                "bonus": 8.5
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 261,
                "bonus": 12.4
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 12.4
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 341,
                "bonus": 14.3
            }
        },
        {
            "begin": {
                "atk": 373,
                "bonus": 14.3
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 423,
                "bonus": 16.2
            }
        },
        {
            "begin": {
                "atk": 455,
                "bonus": 16.2
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 506,
                "bonus": 18.2
            }
        },
        {
            "begin": {
                "atk": 537,
                "bonus": 18.2
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 590,
                "bonus": 20.1
            }
        },
        {
            "begin": {
                "atk": 621,
                "bonus": 20.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 674,
                "bonus": 22.1
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "칼바람 울프의 젖니",
                    "amount": 5
                },
                {
                    name: "지맥의 낡은 가지",
                    "amount": 5
                },
                {
                    name: "견고한 화살촉",
                    "amount": 3
                }
            ],
            "price": 10000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 5
                },
                {
                    name: "지맥의 낡은 가지",
                    "amount": 18
                },
                {
                    name: "견고한 화살촉",
                    "amount": 12
                }
            ],
            "price": 20000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 9
                },
                {
                    name: "지맥의 마른 잎",
                    "amount": 9
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "칼바람 울프의 부서진 이빨",
                    "amount": 5
                },
                {
                    name: "지맥의 마른 잎",
                    "amount": 18
                },
                {
                    name: "날카로운 화살촉",
                    "amount": 14
                }
            ],
            "price": 45000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "칼바람 울프의 부서진 이빨",
                    "amount": 9
                },
                {
                    name: "지맥의 새싹",
                    "amount": 14
                },
                {
                    name: "역전의 화살촉",
                    "amount": 9
                }
            ],
            "price": 55000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "칼바람 울프의 그리운 고향",
                    "amount": 6
                },
                {
                    name: "지맥의 새싹",
                    "amount": 27
                },
                {
                    name: "역전의 화살촉",
                    "amount": 18
                }
            ],
            "price": 65000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/19/Weapon_Skyward_Harp.png/revision/latest/scale-to-width-down/512?cb=20201116035246",
    skills: [
      {
        name: "하늘에 메아리치는 노래",
        description: "치명타 피해 +20/25/30/35/40%. 공격 명중 시 60/70/80/90/100%의 확률로 공격력 125%의 범위 물리 피해를 준다. 해당 효과는 4/3.5/3/2.5/2초마다 1번 발동한다."
      }
    ],
    origin: "기원",
    keyword: ["천날","천공활"],
  },
  "아모스의 활":  {
    name: "아모스의 활",
    "type": "활",
    "level": 5,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 46,
                "bonus": 10.8
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 122,
                "bonus": 19.1
            }
        },
        {
            "begin": {
                "atk": 153,
                "bonus": 19.1
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 235,
                "bonus": 27.8
            }
        },
        {
            "begin": {
                "atk": 266,
                "bonus": 27.8
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 308,
                "bonus": 32.2
            }
        },
        {
            "begin": {
                "atk": 340,
                "bonus": 32.2
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 382,
                "bonus": 36.5
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 36.5
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 457,
                "bonus": 40.9
            }
        },
        {
            "begin": {
                "atk": 488,
                "bonus": 40.9
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 532,
                "bonus": 45.3
            }
        },
        {
            "begin": {
                "atk": 563,
                "bonus": 45.3
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 608,
                "bonus": 49.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "라이언 투사의 족쇄",
                    "amount": 5
                },
                {
                    name: "혼돈의 장치",
                    "amount": 5
                },
                {
                    name: "슬라임 응축액",
                    "amount": 3
                }
            ],
            "price": 10000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "라이언 투사의 쇠사슬",
                    "amount": 5
                },
                {
                    name: "혼돈의 장치",
                    "amount": 18
                },
                {
                    name: "슬라임 응축액",
                    "amount": 12
                }
            ],
            "price": 20000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "라이언 투사의 쇠사슬",
                    "amount": 9
                },
                {
                    name: "혼돈의 회로",
                    "amount": 9
                },
                {
                    name: "슬라임청",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "라이언 투사의 수갑",
                    "amount": 5
                },
                {
                    name: "혼돈의 회로",
                    "amount": 18
                },
                {
                    name: "슬라임청",
                    "amount": 14
                }
            ],
            "price": 45000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "라이언 투사의 수갑",
                    "amount": 9
                },
                {
                    name: "혼돈의 노심",
                    "amount": 14
                },
                {
                    name: "슬라임 원액",
                    "amount": 9
                }
            ],
            "price": 55000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "라이언 투사의 이념",
                    "amount": 6
                },
                {
                    name: "혼돈의 노심",
                    "amount": 27
                },
                {
                    name: "슬라임 원액",
                    "amount": 18
                }
            ],
            "price": 65000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/d/de/Weapon_Amos%27_Bow.png/revision/latest/scale-to-width-down/512?cb=20201120010513",
    skills: [
      {
        name: "잊지 않은 포부",
        description: "일반 공격과 강공격 피해 +12/15/18/21/24%. 일반 공격과 강공격 화살이 발사된 후 0.1초가 지날 때마다 피해가 8/10/12/14/16%씩 증가한다. 최대 중첩 수: 5회"
      }
    ],
    origin: "기원",
    keyword: ["아모스"]
  },
  "종말 탄식의 노래":  {
    name: "종말 탄식의 노래",
    "type": "활",
    "level": 5,
    "bonus": "원소 충전 효율",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 46,
                "bonus": 12
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 122,
                "bonus": 21.2
            }
        },
        {
            "begin": {
                "atk": 153,
                "bonus": 21.2
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 235,
                "bonus": 30.9
            }
        },
        {
            "begin": {
                "atk": 266,
                "bonus": 30.9
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 308,
                "bonus": 35.7
            }
        },
        {
            "begin": {
                "atk": 340,
                "bonus": 35.7
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 382,
                "bonus": 40.6
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 40.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 457,
                "bonus": 45.4
            }
        },
        {
            "begin": {
                "atk": 488,
                "bonus": 45.4
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 532,
                "bonus": 50.3
            }
        },
        {
            "begin": {
                "atk": 563,
                "bonus": 50.3
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 608,
                "bonus": 55.1
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "칼바람 울프의 젖니",
                    "amount": 5
                },
                {
                    name: "무거운 나팔",
                    "amount": 5
                },
                {
                    name: "신병의 휘장",
                    "amount": 3
                }
            ],
            "price": 10000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 5
                },
                {
                    name: "무거운 나팔",
                    "amount": 18
                },
                {
                    name: "신병의 휘장",
                    "amount": 12
                }
            ],
            "price": 20000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 9
                },
                {
                    name: "흑동의 나팔",
                    "amount": 9
                },
                {
                    name: "사관의 휘장",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "칼바람 울프의 부서진 이빨",
                    "amount": 5
                },
                {
                    name: "흑동 나팔",
                    "amount": 18
                },
                {
                    name: "사관의 휘장",
                    "amount": 14
                }
            ],
            "price": 45000
        },
        {
            "start": 70,
            "items": [
                {
                    name: "칼바람 울프의 부서진 이빨",
                    "amount": 9
                },
                {
                    name: "흑수정 나팔",
                    "amount": 14
                },
                {
                    name: "위관의 휘장",
                    "amount": 9
                }
            ],
            "price": 55000
        },
        {
            "start": 80,
            "items": [
                {
                    name: "칼바람 울프의 그리운 고향",
                    "amount": 6
                },
                {
                    name: "흑수정 나팔",
                    "amount": 27
                },
                {
                    name: "위관의 휘장",
                    "amount": 18
                }
            ],
            "price": 65000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Weapon_Elegy_for_the_End.png/revision/latest/scale-to-width-down/512?cb=20210317075424",
    skills: [
      {
        name: "이별의 그리운 노래",
        description: "바람 속을 유랑하는 「천년의 대악장」의 일부분. 원소 마스터리가 60/75/90/105/120pt 증가한다. 원소전투 스킬이나 원소폭발이 적에게 명중 시, 캐릭터는 회상의 부적을 한 장 획득한다. 이는 0.2초마다 한 번 발동되며, 캐릭터가 대기 상태일 때도 발동된다. 회상의 부적 4장 소유 시, 부적을 모두 소모하여 주변의 파티 내 모든 캐릭터에게 12초동안 「천년의 대악장·이별의 노래」 효과를 부여한다: 원소 마스터리가 100/125/150/175/200pt 증가하고, 공격력이 20/25/30/35/40% 증가한다. 발동 후 20초동안은 회상의 부적을 획득할 수 없다. 「천년의 대악장」의 수치 효과 중 동일 유형의 수치 효과는 중첩될 수 없다."
      }
    ],
    origin: "기원",
    keyword: ["종탄","종말활"],
  },
  "비뢰의 고동": {
    name: "비뢰의 고동",
    "type": "활",
    "level": 5,
    "bonus": "치명타 피해",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 46,
                "bonus": 14.4
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 122,
                "bonus": 25.4
            }
        },
        {
            "begin": {
                "atk": 153,
                "bonus": 25.4
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 235,
                "bonus": 37.1
            }
        },
        {
            "begin": {
                "atk": 266,
                "bonus": 37.1
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 308,
                "bonus": 42.9
            }
        },
        {
            "begin": {
                "atk": 340,
                "bonus": 42.9
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 382,
                "bonus": 48.7
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 48.7
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 457,
                "bonus": 54.5
            }
        },
        {
            "begin": {
                "atk": 488,
                "bonus": 54.5
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 532,
                "bonus": 60.3
            }
        },
        {
            "begin": {
                "atk": 563,
                "bonus": 60.3
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 608,
                "bonus": 66.3
            }
        }
    ],
    "ascension": [
        {
          start: 20,
          items: [
            {
              name: "나루카미 어령의 은혜",
              amount: 5
            },
            {
              name: "어두운 프리즘",
              amount: 5
            },
            {
              name: "견고한 화살촉",
              amount: 3
            }
          ],
          price: 10000
        },
        {
          start: 40,
          items: [
            {
              name: "나루카미 어령의 환희",
              amount: 5
            },
            {
              name: "어두운 프리즘",
              amount: 18
            },
            {
              name: "견고한 화살촉",
              amount: 12
            }
          ],
          price: 20000
        },
        {
          start: 50,
          items: [
            {
              name: "나루카미 어령의 환희",
              amount: 9
            },
            {
              name: "수정 프리즘",
              amount: 9
            },
            {
              name: "날카로운 화살촉",
              amount: 9
            }
          ],
          price: 30000
        },
        {
          start: 60,
          items: [
            {
              name: "나루카미 어령의 친애",
              amount: 5
            },
            {
              name: "수정 프리즘",
              amount: 18
            },
            {
              name: "날카로운 화살촉",
              amount: 14
            }
          ],
          price: 45000
        },
        {
          start: 70,
          items: [
            {
              name: "나루카미 어령의 친애",
              amount: 9
            },
            {
              name: "편광 프리즘",
              amount: 14
            },
            {
              name: "역전의 화살촉",
              amount: 9
            }
          ],
          price: 55000
        },
        {
          start: 80,
          items: [
            {
              name: "나루카미 어령의 용맹",
              amount: 6
            },
            {
              name: "편광 프리즘",
              amount: 27
            },
            {
              name: "역전의 화살촉",
              amount: 18
            }
          ],
          price: 65000
        },
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/77/Weapon_Thundering_Pulse.png/revision/latest?cb=20210715043547",
    skills: [
      {
        name: "비뢰 어궁",
        description: "공격력이 20/25/30/35/40% 증가하고, 「비뢰의 문장」의 위세를 획득한다. 비뢰의 문장: 1/2/3스택의 비뢰의 문장 보유 시, 일반 공격으로 가하는 피해가 각각 12/24/40%|15/30/50%|18/36/60%|21/42/70%|24/48/80% 증가한다. 캐릭터가 비뢰의 문장 1스택을 획득할 수 있는 상황: 일반 공격으로 피해를 가하면 5초간 지속. 원소전투 스킬을 발동하면 10초간 지속. 이 외에 캐릭터의 원소 에너지가 100% 미만이면 비뢰의 문장을 1스택 획득한다. 해당 비뢰의 문장은 캐릭터의 원소 에너지가 가득 차면 사라지며, 비뢰의 문장의 각 스택 지속 시간은 따로 계산된다"
      }
    ],
    origin: "기원",
    keyword: ["비뢰","번개활"],
  },
  "페보니우스 활":  {
    "name": "페보니우스 활",
    "type": "활",
    "level": 4,
    "bonus": "원소 충전 효율",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 41,
                "bonus": 13.3
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 99,
                "bonus": 23.6
            }
        },
        {
            "begin": {
                "atk": 125,
                "bonus": 23.6
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 184,
                "bonus": 34.3
            }
        },
        {
            "begin": {
                "atk": 210,
                "bonus": 34.3
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 238,
                "bonus": 39.7
            }
        },
        {
            "begin": {
                "atk": 264,
                "bonus": 39.7
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 293,
                "bonus": 45.1
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 45.1
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 347,
                "bonus": 50.5
            }
        },
        {
            "begin": {
                "atk": 373,
                "bonus": 50.5
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 401,
                "bonus": 55.9
            }
        },
        {
            "begin": {
                "atk": 427,
                "bonus": 55.9
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 454,
                "bonus": 61.3
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "라이언 투사의 족쇄",
                    "amount": 3
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 3
                },
                {
                    "name": "구라구라 꽃꿀",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 3
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 12
                },
                {
                    "name": "구라구라 꽃꿀",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 6
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 6
                },
                {
                    "name": "반짝반짝 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 3
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 12
                },
                {
                    "name": "반짝반짝 꽃꿀",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 6
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 9
                },
                {
                    "name": "원소 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "라이언 투사의 이념",
                    "amount": 4
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 18
                },
                {
                    "name": "원소 꽃꿀",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/8/85/Weapon_Favonius_Warbow.png/revision/latest/scale-to-width-down/512?cb=20201120003145",
    skills: [
      {
        name: "바람과 함께",
        description: "치명타 시 60/70/80/90/100%의 확률로 소량의 원소 구슬이 생성되고 캐릭터의 원소 에너지를 6pt 회복한다. 해당 효과는 12/10.5/9/7.5/6초마다 1번 발동한다."
      }
    ],
    origin: "기원",
    keyword: ["페보활"],
  },
  "절현":  {
    "name": "절현",
    "type": "활",
    "level": 4,
    "bonus": "원소 마스터리",
    "bonusType": "number",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 36
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 64
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 64
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 93
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 93
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 107
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 107
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 122
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 122
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 136
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 136
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 151
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 151
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 165
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "고탑 왕의 잔해",
                    "amount": 3
                },
                {
                    "name": "무거운 나팔",
                    "amount": 3
                },
                {
                    "name": "견고한 화살촉",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "고탑 왕의 절망",
                    "amount": 3
                },
                {
                    "name": "무거운 나팔",
                    "amount": 12
                },
                {
                    "name": "견고한 화살촉",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "고탑 왕의 절망",
                    "amount": 6
                },
                {
                    "name": "흑동 나팔",
                    "amount": 6
                },
                {
                    "name": "날카로운 화살촉",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "고탑 왕의 조각",
                    "amount": 3
                },
                {
                    "name": "흑동 나팔",
                    "amount": 12
                },
                {
                    "name": "날카로운 화살촉",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "고탑 왕의 조각",
                    "amount": 6
                },
                {
                    "name": "흑수정 나팔",
                    "amount": 9
                },
                {
                    "name": "역전의 화살촉",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "고탑 왕의 깨진 꿈",
                    "amount": 4
                },
                {
                    "name": "흑수정 나팔",
                    "amount": 18
                },
                {
                    "name": "역전의 화살촉",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Weapon_The_Stringless.png/revision/latest/scale-to-width-down/512?cb=20201116035406",
    skills: [
      {
        name: "무형 화살의 노래",
        description: "원소 전투 스킬과 원소폭발 피해가 24/30/36/42/48% 증가한다."
      }
    ],
    origin: "기원",
    keyword: [],
  },
  "제례활":  {
    "name": "제례활",
    "type": "활",
    "level": 4,
    "bonus": "원소 충전 효율",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 44,
                "bonus": 6.7
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 119,
                "bonus": 11.8
            }
        },
        {
            "begin": {
                "atk": 144,
                "bonus": 11.8
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 226,
                "bonus": 17.2
            }
        },
        {
            "begin": {
                "atk": 252,
                "bonus": 17.2
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 293,
                "bonus": 19.9
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 19.9
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 361,
                "bonus": 22.6
            }
        },
        {
            "begin": {
                "atk": 387,
                "bonus": 22.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 429,
                "bonus": 25.2
            }
        },
        {
            "begin": {
                "atk": 455,
                "bonus": 25.2
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 497,
                "bonus": 27.9
            }
        },
        {
            "begin": {
                "atk": 523,
                "bonus": 27.9
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 565,
                "bonus": 30.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "칼바람 울프의 젖니",
                    "amount": 3
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 3
                },
                {
                    "name": "슬라임 응축액",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "칼바람 울프의 이빨",
                    "amount": 3
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 12
                },
                {
                    "name": "슬라임 응축액",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "칼바람 울프의 이빨",
                    "amount": 6
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 6
                },
                {
                    "name": "슬라임청",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "칼바람 울프의 부서진 이빨",
                    "amount": 3
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 12
                },
                {
                    "name": "슬라임청",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "칼바람 울프의 부서진 이빨",
                    "amount": 6
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 9
                },
                {
                    "name": "슬라임 원액",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "칼바람 울프의 그리운 고향",
                    "amount": 4
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 18
                },
                {
                    "name": "슬라임 원액",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Weapon_Sacrificial_Bow.png/revision/latest/scale-to-width-down/512?cb=20201120002607",
    skills: [
      {
        name: "침착",
        description: "원소 전투 스킬로 피해를 줄 때 40/50/60/70/80%의 확률로 해당 스킬의 재발동 대기시간이 초기화된다. 해당 효과는 30/26/22/19/16초마다 1번 발동한다."
      }
    ],
    origin: "기원",
    keyword: [],
  },
  "왕실의 장궁":  {
    "name": "왕실의 장궁",
    "type": "활",
    "level": 4,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 9
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 15.9
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 15.9
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 23.2
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 23.2
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 26.8
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 26.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 30.4
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 30.4
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 34.1
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 34.1
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 37.7
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 37.7
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 0,
                "bonus": 0
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "라이언 투사의 족쇄",
                    "amount": 3
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 3
                },
                {
                    "name": "이능 두루마리",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 3
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 12
                },
                {
                    "name": "이능 두루마리",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 6
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 6
                },
                {
                    "name": "봉마의 두루마리",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 3
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 12
                },
                {
                    "name": "봉마의 두루마리",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 6
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 9
                },
                {
                    "name": "금주의 두루마리",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "라이언 투사의 이념",
                    "amount": 4
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 18
                },
                {
                    "name": "금주의 두루마리",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/99/Weapon_Royal_Bow.png/revision/latest/scale-to-width-down/512?cb=20201120002134",
    skills: [
      {
        name: "집중",
        description: "공격으로 피해를 줄 때마다 치명타 확률이 8/10/12/14/16% 증가한다. 최대 중첩수: 5회. 공격 시 치명타가 발생하면 모든 집중 효과가 사라진다."
      }
    ],
    origin: "스타라이트 교환",
    keyword: [],
  },
  "녹슨 활":  {
    "name": "녹슨 활",
    "type": "활",
    "level": 4,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 9
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 15.9
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 15.9
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 23.2
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 23.2
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 26.8
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 26.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 30.4
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 30.4
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 34.1
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 34.1
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 37.7
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 37.7
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 41.3
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "고운한림의 매끄러운 모래",
                    "amount": 3
                },
                {
                    "name": "사냥꾼의 제도",
                    "amount": 3
                },
                {
                    "name": "부서진 가면",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "고운한림의 휘암",
                    "amount": 3
                },
                {
                    "name": "사냥꾼의 제도",
                    "amount": 12
                },
                {
                    "name": "부서진 가면",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "고운한림의 휘암",
                    "amount": 6
                },
                {
                    "name": "특수 요원의 제도",
                    "amount": 6
                },
                {
                    "name": "오염된 가면",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "고운한림의 해골",
                    "amount": 3
                },
                {
                    "name": "특수 요원의 제도",
                    "amount": 12
                },
                {
                    "name": "오염된 가면",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "고운한림의 해골",
                    "amount": 6
                },
                {
                    "name": "검사관의 제도",
                    "amount": 9
                },
                {
                    "name": "불길한 가면",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "고운한림의 신체",
                    "amount": 4
                },
                {
                    "name": "검사관의 제도",
                    "amount": 18
                },
                {
                    "name": "불길한 가면",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Weapon_Rust.png/revision/latest/scale-to-width-down/512?cb=20201120002437",
    skills: [
      {
        name: "속사 궁술",
        description: "일반 공격으로 주는 피해가 40/50/60/70/80% 증가한다. 강공격 피해 -10%"
      }
    ],
    origin: "기원",
    keyword: ["녹활"],
  },
  "담월 프로토타입":  {
    "name": "담월 프로토타입",
    "type": "활",
    "level": 4,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 9
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 15.9
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 15.9
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 23.2
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 23.2
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 26.8
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 26.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 30.4
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 30.4
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 34.1
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 34.1
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 37.7
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 37.7
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 41.3
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "안개구름 속의 흑연단",
                    "amount": 3
                },
                {
                    "name": "안개꽃 가루",
                    "amount": 3
                },
                {
                    "name": "보물찾기 까마귀 휘장",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "안개구름 속의 수은단",
                    "amount": 3
                },
                {
                    "name": "안개꽃 가루",
                    "amount": 12
                },
                {
                    "name": "보물찾기 까마귀 휘장",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "안개구름 속의 수은단",
                    "amount": 6
                },
                {
                    "name": "안개풀 주머니",
                    "amount": 6
                },
                {
                    "name": "실버 까마귀 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "안개구름 속의 금단",
                    "amount": 3
                },
                {
                    "name": "안개풀 주머니",
                    "amount": 12
                },
                {
                    "name": "실버 까마귀 휘장",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "안개구름 속의 금단",
                    "amount": 6
                },
                {
                    "name": "안개 등심",
                    "amount": 9
                },
                {
                    "name": "골드 까마귀 휘장",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "안개구름 속의 전환",
                    "amount": 4
                },
                {
                    "name": "안개 등심",
                    "amount": 18
                },
                {
                    "name": "골드 까마귀 휘장",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/43/Weapon_Prototype_Crescent.png/revision/latest/scale-to-width-down/512?cb=20201116034737",
    forge: [
      {
        name: "북대륙의 활 원형",
        amount: 1
      },
      {
        name: "백철",
        amount: 50
      },
      {
        name: "수정덩이",
        amount: 50
      },
    ],
    skills: [
      {
        name: "이착 불귀",
        description: "조준 사격 시 약점에 명중하면 이동속도가 10% 증가하고 공격력이 36/45/54/63/72% 증가한다. 지속 시간: 10초."
      }
    ],
    origin: "단조",
    keyword: ["담월"],
  },
  "강철궁":  {
    "name": "강철궁",
    "type": "활",
    "level": 4,
    "bonus": "물리 피해 보너스",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 41,
                "bonus": 15
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 99,
                "bonus": 26.5
            }
        },
        {
            "begin": {
                "atk": 125,
                "bonus": 26.5
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 184,
                "bonus": 38.7
            }
        },
        {
            "begin": {
                "atk": 210,
                "bonus": 38.7
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 238,
                "bonus": 44.7
            }
        },
        {
            "begin": {
                "atk": 264,
                "bonus": 44.7
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 293,
                "bonus": 50.8
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 50.8
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 347,
                "bonus": 56.8
            }
        },
        {
            "begin": {
                "atk": 373,
                "bonus": 56.8
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 410,
                "bonus": 62.9
            }
        },
        {
            "begin": {
                "atk": 427,
                "bonus": 62.9
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 454,
                "bonus": 69
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "흑운철 한 알",
                    "amount": 3
                },
                {
                    "name": "약한 뼛조각",
                    "amount": 3
                },
                {
                    "name": "신병의 휘장",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "흑운철 조각",
                    "amount": 3
                },
                {
                    "name": "약한 뼛조각",
                    "amount": 12
                },
                {
                    "name": "신병의 휘장",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "흑운철 조각",
                    "amount": 6
                },
                {
                    "name": "단단한 뼛조각",
                    "amount": 6
                },
                {
                    "name": "사관의 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "흑운철 일각",
                    "amount": 3
                },
                {
                    "name": "단단한 뼛조각",
                    "amount": 12
                },
                {
                    "name": "사관의 휘장",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "흑운철 일각",
                    "amount": 6
                },
                {
                    "name": "석화한 뼛조각",
                    "amount": 9
                },
                {
                    "name": "위관의 휘장",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "흑운철 덩이",
                    "amount": 4
                },
                {
                    "name": "석화한 뼛조각",
                    "amount": 18
                },
                {
                    "name": "위관의 휘장",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Weapon_Compound_Bow.png/revision/latest/scale-to-width-down/512?cb=20201116033506",
    forge: [
      {
        name: "북대륙의 활 원형",
        amount: 1
      },
      {
        name: "백철",
        amount: 50
      },
      {
        name: "수정덩이",
        amount: 50
      },
    ],
    skills: [
      {
        name: "에너지 주입 화살",
        description: "일반 공격과 조준 사격이 적에게 명중 시 공격력이 4/5/6/7/8% 증가하고 일반 공격의 공격속도가 1.2/1.5/1.8/2.1/2.4% 증가한다. 지속 시간: 6초. 최대 중첩수: 4회. 해당 효과는 0.3초마다 1번 발동한다."
      }
    ],
    origin: "단조",
    keyword: [],
  },
  "흑암 배틀 보우":  {
    "name": "흑암 배틀 보우",
    "type": "활",
    "level": 4,
    "bonus": "치명타 피해",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 44,
                "bonus": 8
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 119,
                "bonus": 14.1
            }
        },
        {
            "begin": {
                "atk": 144,
                "bonus": 14.1
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 226,
                "bonus": 20.6
            }
        },
        {
            "begin": {
                "atk": 252,
                "bonus": 20.6
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 293,
                "bonus": 23.8
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 23.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 361,
                "bonus": 27.1
            }
        },
        {
            "begin": {
                "atk": 387,
                "bonus": 27.1
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 429,
                "bonus": 30.3
            }
        },
        {
            "begin": {
                "atk": 455,
                "bonus": 30.3
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 497,
                "bonus": 33.5
            }
        },
        {
            "begin": {
                "atk": 523,
                "bonus": 33.5
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 565,
                "bonus": 36.8
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "고운한림의 매끄러운 모래",
                    "amount": 3
                },
                {
                    "name": "사냥꾼의 제도",
                    "amount": 3
                },
                {
                    "name": "구라구라 꽃꿀",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "고운한림의 휘암",
                    "amount": 3
                },
                {
                    "name": "사냥꾼의 제도",
                    "amount": 12
                },
                {
                    "name": "구라구라 꽃꿀",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "고운한림의 휘암",
                    "amount": 6
                },
                {
                    "name": "특수 요원의 제도",
                    "amount": 6
                },
                {
                    "name": "반짝반짝 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "고운한림의 해골",
                    "amount": 3
                },
                {
                    "name": "특수 요원의 제도",
                    "amount": 12
                },
                {
                    "name": "반짝반짝 꽃꿀",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "고운한림의 해골",
                    "amount": 6
                },
                {
                    "name": "검사관의 제도",
                    "amount": 9
                },
                {
                    "name": "원소 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "고운한림의 신체",
                    "amount": 4
                },
                {
                    "name": "검사관의 제도",
                    "amount": 18
                },
                {
                    "name": "원소 꽃꿀",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/b8/Weapon_Blackcliff_Warbow.png/revision/latest/scale-to-width-down/512?cb=20201103093753",
    skills: [
      {
        name: "승승장구",
        description: "적을 처치한 후 공격력이 12/15/18/21/24% 증가한다. 지속 시간: 30초. 최대 중첩수: 3회. 중첩 1회당 지속 시간은 독립 계산한다."
      }
    ],
    origin: "스타라이트 교환",
    keyword: [],
  },
  "청록의 사냥활":  {
    "name": "청록의 사냥활",
    "type": "활",
    "level": 4,
    "bonus": "치명타 확률",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 6
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 10.6
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 10.6
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 15.5
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 15.5
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 17.9
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 17.9
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 20.3
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 20.3
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 22.7
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 22.7
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 25.1
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 25.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 27.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "고탑 왕의 잔해",
                    "amount": 3
                },
                {
                    "name": "무거운 나팔",
                    "amount": 3
                },
                {
                    "name": "견고한 화살촉",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "고탑 왕의 절망",
                    "amount": 3
                },
                {
                    "name": "무거운 나팔",
                    "amount": 12
                },
                {
                    "name": "견고한 화살촉",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "고탑 왕의 절망",
                    "amount": 6
                },
                {
                    "name": "흑동 나팔",
                    "amount": 6
                },
                {
                    "name": "날카로운 화살촉",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "고탑 왕의 조각",
                    "amount": 3
                },
                {
                    "name": "흑동 나팔",
                    "amount": 12
                },
                {
                    "name": "날카로운 화살촉",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "고탑 왕의 조각",
                    "amount": 6
                },
                {
                    "name": "흑수정 나팔",
                    "amount": 9
                },
                {
                    "name": "역전의 화살촉",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "고탑 왕의 깨진 꿈",
                    "amount": 4
                },
                {
                    "name": "흑수정 나팔",
                    "amount": 18
                },
                {
                    "name": "역전의 화살촉",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Weapon_The_Viridescent_Hunt.png/revision/latest/scale-to-width-down/512?cb=20201120010331",
    skills: [
      {
        name: "청록색의 바람",
        description: "일반 공격과 강공격 명중 시 50%의 확률로 바람의 눈을 1개 생성하여 주변의 적을 끌어당기고 닿은 적에게 0.5초마다 공격력 40/50/60/70/80%의 피해를 준다. 지속 시간: 4초. 해당 효과는 14/13/12/11/10초마다 1번 발동한다."
      }
    ],
    origin: "진주 기행 Lv.30 보상",
    keyword: ["청록활","기행활"],
  },
  "바람 꽃의 노래":  {
    "name": "바람 꽃의 노래",
    "type": "활",
    "level": 4,
    "bonus": "원소 마스터리",
    "bonusType": "number",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 36
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 64
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 64
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 93
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 93
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 107
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 107
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 122
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 122
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 136
            }
        },
        {
            "begin": {
                "atk": 424,
                "bonus": 136
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 151
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 151
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 165
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "라이언 투사의 족쇄",
                    "amount": 3
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 3
                },
                {
                    "name": "구라구라 꽃꿀",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 3
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 12
                },
                {
                    "name": "구라구라 꽃꿀",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 6
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 6
                },
                {
                    "name": "반짝반짝 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 3
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 12
                },
                {
                    "name": "반짝반짝 꽃꿀",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 6
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 9
                },
                {
                    "name": "원소 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "라이언 투사의 이념",
                    "amount": 4
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 18
                },
                {
                    "name": "원소 꽃꿀",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/38/Weapon_Windblume_Ode.png/revision/latest/scale-to-width-down/512?cb=20210317075422",
    skills: [
      {
        name: "바람 꽃의 염원",
        description: "원소전투 스킬 발동 시, 바람의 꽃의 오랜 염원으로 공격력이 16/20/24/28/32% 증가한다. 지속 시간: 6초"
      }
    ],
    origin: "윈드블룸 이벤트 참여",
    keyword: ["윈드블룸활"],
  },
  "뒷골목 사냥꾼":  {
    "name": "뒷골목 사냥꾼",
    "type": "활",
    "level": 4,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 44,
                "bonus": 6
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 119,
                "bonus": 10.6
            }
        },
        {
            "begin": {
                "atk": 144,
                "bonus": 10.6
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 226,
                "bonus": 15.5
            }
        },
        {
            "begin": {
                "atk": 252,
                "bonus": 15.5
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 293,
                "bonus": 17.9
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 17.9
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 361,
                "bonus": 20.3
            }
        },
        {
            "begin": {
                "atk": 387,
                "bonus": 20.3
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 429,
                "bonus": 22.7
            }
        },
        {
            "begin": {
                "atk": 455,
                "bonus": 22.7
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 497,
                "bonus": 25.1
            }
        },
        {
            "begin": {
                "atk": 523,
                "bonus": 25.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 565,
                "bonus": 27.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "라이언 투사의 족쇄",
                    "amount": 3
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 3
                },
                {
                    "name": "슬라임 응축액",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 3
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 12
                },
                {
                    "name": "슬라임 응축액",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 6
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 6
                },
                {
                    "name": "슬라임청",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 3
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 12
                },
                {
                    "name": "슬라임청",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 6
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 9
                },
                {
                    "name": "슬라임 원액",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "라이언 투사의 이념",
                    "amount": 4
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 18
                },
                {
                    "name": "슬라임 원액",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    skills: [
      {
        name: "골목의 매복자",
        description: "해당 무기를 장착한 캐릭터가 대기 상태일 때, 캐릭터가 가하는 피해가 1초에 2/2.5/3/3.5/4%씩 증가한다. 이 효과로 최대 20/25/30/35/40%까지 피해를 증가시킬 수 있다. 캐릭터가 필드에 4초 이상 머무를 시, 피해 증가 효과는 1초마다 4/5/6/7/8%씩 감소하여, 0%까지 떨어진다."
      }
    ],
    origin: "기원 (기간한정)",
    keyword: ["뒷골목활"],
  },
  "유야의 왈츠":  {
    "name": "유야의 왈츠",
    "type": "활",
    "level": 4,
    "bonus": "물리 피해 보너스",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 11.3
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 19.9
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 19.9
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 29
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 29
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 33.5
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 33.5
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 38.1
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 38.1
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 42.6
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 42.6
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 47.2
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 47.2
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 51.7
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "고탑 왕의 잔해",
                    "amount": 3
                },
                {
                    "name": "무거운 나팔",
                    "amount": 3
                },
                {
                    "name": "보물찾기 까마귀 휘장",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "고탑 왕의 절망",
                    "amount": 3
                },
                {
                    "name": "무거운 나팔",
                    "amount": 12
                },
                {
                    "name": "보물찾기 까마귀 휘장",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "고탑 왕의 절망",
                    "amount": 6
                },
                {
                    "name": "흑동 나팔",
                    "amount": 6
                },
                {
                    "name": "실버 까마귀 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "고탑 왕의 조각",
                    "amount": 3
                },
                {
                    "name": "흑동 나팔",
                    "amount": 12
                },
                {
                    "name": "실버 까마귀 휘장",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "고탑 왕의 조각",
                    "amount": 6
                },
                {
                    "name": "흑수정 나팔",
                    "amount": 9
                },
                {
                    "name": "골드 까마귀 휘장",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "고탑 왕의 깨진 꿈",
                    "amount": 4
                },
                {
                    "name": "흑수정 나팔",
                    "amount": 18
                },
                {
                    "name": "골드 까마귀 휘장",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/0/0a/Weapon_Alley_Hunter.png/revision/latest/scale-to-width-down/512?cb=20210413212830",
    skills: [
      {
        name: "극야의 2중주",
        description: "일반 공격 명중 후 5초 동안 원소 전투 스킬 피해가 20/25/30/35/40% 증가한다. 원소 전투 스킬 명중 후 5초 동안 일반 공격 피해가 20/25/30/35/40% 증가한다."
      }
    ],
    origin: "기원 (기간한정)",
    keyword: ["유야","왈츠"],
  },
  "파마궁": {
    name: "파마궁",
    type: "활",
    level: 4,
    image: "https://static.wikia.nocookie.net/gensin-impact/images/d/d9/Weapon_Hamayumi.png/revision/latest/scale-to-width-down/256?cb=20210726032818",
    stat: [
      {
        start: 1,
        last: 20,
        begin: {
          atk: 41,
          bonus: 12.0
        },
        end: {
          atk: 99,
          bonus: 21.2
        }
      },
      {
        start: 20,
        last: 40,
        begin: {
          atk: 125,
          bonus: 21.2
        },
        end: {
          atk: 184,
          bonus: 30.9
        }
      },
      {
        start: 40,
        last: 50,
        begin: {
          atk: 210,
          bonus: 30.9
        },
        end: {
          atk: 238,
          bonus: 35.7
        }
      },
      {
        start: 50,
        last: 60,
        begin: {
          atk: 264,
          bonus: 35.7
        },
        end: {
          atk: 293,
          bonus: 40.6
        }
      },
      {
        start: 60,
        last: 70,
        begin: {
          atk: 319,
          bonus: 40.6
        },
        end: {
          atk: 347,
          bonus: 45.4
        }
      },
      {
        start: 70,
        last: 80,
        begin: {
          atk: 373,
          bonus: 45.4
        },
        end: {
          atk: 410,
          bonus: 50.3
        }
      },
      {
        start: 80,
        last: 90,
        begin: {
          atk: 427,
          bonus: 50.3
        },
        end: {
          atk: 454,
          bonus: 55.1
        }
      },
    ],
    bonus: "공격력",
    bonusType: "percent",
    ascension: [
      {
        start: 20,
        items: [
          {
            name: "나루카미 어령의 은혜",
            amount: 3
          },
          {
            name: "어두운 프리즘",
            amount: 3
          },
          {
            name: "견고한 화살촉",
            amount: 2
          }
        ],
        price: 5000
      },
      {
        start: 40,
        items: [
          {
            name: "나루카미 어령의 환희",
            amount: 3
          },
          {
            name: "어두운 프리즘",
            amount: 12
          },
          {
            name: "견고한 화살촉",
            amount: 8
          }
        ],
        price: 15000
      },
      {
        start: 50,
        items: [
          {
            name: "나루카미 어령의 환희",
            amount: 6
          },
          {
            name: "수정 프리즘",
            amount: 6
          },
          {
            name: "날카로운 화살촉",
            amount: 6
          }
        ],
        price: 20000
      },
      {
        start: 60,
        items: [
          {
            name: "나루카미 어령의 친애",
            amount: 3
          },
          {
            name: "수정 프리즘",
            amount: 12
          },
          {
            name: "날카로운 화살촉",
            amount: 9
          }
        ],
        price: 30000
      },
      {
        start: 70,
        items: [
          {
            name: "나루카미 어령의 친애",
            amount: 3
          },
          {
            name: "편광 프리즘",
            amount: 9
          },
          {
            name: "역전의 화살촉",
            amount: 6
          }
        ],
        price: 35000
      },
      {
        start: 80,
        items: [
          {
            name: "나루카미 어령의 용맹",
            amount: 4
          },
          {
            name: "편광 프리즘",
            amount: 18
          },
          {
            name: "역전의 화살촉",
            amount: 12
          }
        ],
        price: 45000
      },
    ],
    skills: [
      {
        name: "아사세의 활고자",
        description: "일반 공격으로 가하는 피해가 16/20/24/28/32% 증가하고, 강공격으로 가하는 피해가 12/15/18/21/24% 증가한다. 해당 무기를 장착한 캐릭터의 원소 에너지가 100%일 때, 해당 효과는 100%까지 증가한다."
      }
    ],
    forge: [
        {
          name: "북대륙의 활 원형",
          amount: 1
        },
        {
          name: "자수정 덩이",
          amount: 50
        },
        {
          name: "백철",
          amount: 50
        },
    ],
    origin: "단조",
    keyword: ["이나즈마단조활"]
  },
  "까마귀깃 활": {
    "name": "까마귀깃 활",
    "type": "활",
    "level": 3,
    "bonus": "원소 마스터리",
    "bonusType": "number",
    "stat": [
        {
            "begin": {
                "atk": 40,
                "bonus": 20
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 102,
                "bonus": 36
            }
        },
        {
            "begin": {
                "atk": 121,
                "bonus": 36
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 187,
                "bonus": 53
            }
        },
        {
            "begin": {
                "atk": 207,
                "bonus": 53
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 239,
                "bonus": 61
            }
        },
        {
            "begin": {
                "atk": 259,
                "bonus": 61
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 292,
                "bonus": 69
            }
        },
        {
            "begin": {
                "atk": 311,
                "bonus": 69
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 344,
                "bonus": 77
            }
        },
        {
            "begin": {
                "atk": 363,
                "bonus": 77
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 396,
                "bonus": 85
            }
        },
        {
            "begin": {
                "atk": 415,
                "bonus": 85
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 448,
                "bonus": 94
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "고탑 왕의 잔해",
                    "amount": 2
                },
                {
                    "name": "무거운 나팔",
                    "amount": 2
                },
                {
                    "name": "견고한 화살촉",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "고탑 왕의 절망",
                    "amount": 2
                },
                {
                    "name": "무거운 나팔",
                    "amount": 8
                },
                {
                    "name": "견고한 화살촉",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "고탑 왕의 절망",
                    "amount": 4
                },
                {
                    "name": "흑동 나팔",
                    "amount": 4
                },
                {
                    "name": "날카로운 화살촉",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "고탑 왕의 조각",
                    "amount": 2
                },
                {
                    "name": "흑동 나팔",
                    "amount": 8
                },
                {
                    "name": "날카로운 화살촉",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "고탑 왕의 조각",
                    "amount": 4
                },
                {
                    "name": "흑수정 나팔",
                    "amount": 6
                },
                {
                    "name": "역전의 화살촉",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "고탑 왕의 깨진 꿈",
                    "amount": 3
                },
                {
                    "name": "흑수정 나팔",
                    "amount": 12
                },
                {
                    "name": "역전의 화살촉",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/d/d0/Weapon_Raven_Bow.png/revision/latest/scale-to-width-down/512?cb=20201116034840",
    skills: [
      {
        name: "따끈따끈 첨벙첨벙",
        description: "물 원소 또는 불 원소의 영향을 받은 적에게 가하는 피해가 12/15/18/21/24%증가한다."
      }
    ],
    origin: "기원",
    keyword: [],
  },
  "신궁의 서약": {
    "name": "신궁의 서약",
    "type": "활",
    "level": 3,
    "bonus": "치명타 피해",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 39,
                "bonus": 10.2
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 94,
                "bonus": 18
            }
        },
        {
            "begin": {
                "atk": 113,
                "bonus": 18
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 169,
                "bonus": 26.3
            }
        },
        {
            "begin": {
                "atk": 189,
                "bonus": 26.3
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 216,
                "bonus": 30.4
            }
        },
        {
            "begin": {
                "atk": 236,
                "bonus": 30.4
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 263,
                "bonus": 34.6
            }
        },
        {
            "begin": {
                "atk": 282,
                "bonus": 34.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 309,
                "bonus": 38.7
            }
        },
        {
            "begin": {
                "atk": 329,
                "bonus": 38.7
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 355,
                "bonus": 42.3
            }
        },
        {
            "begin": {
                "atk": 375,
                "bonus": 42.3
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 41,
                "bonus": 46.9
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "칼바람 울프의 젖니",
                    "amount": 2
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 2
                },
                {
                    "name": "슬라임 응축액",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "칼바람 울프의 이빨",
                    "amount": 2
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 8
                },
                {
                    "name": "슬라임 응축액",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "칼바람 울프의 이빨",
                    "amount": 4
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 4
                },
                {
                    "name": "슬라임청",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "칼바람 울프의 부서진 이빨",
                    "amount": 2
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 8
                },
                {
                    "name": "슬라임청",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "칼바람 울프의 부서진 이빨",
                    "amount": 4
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 6
                },
                {
                    "name": "슬라임 원액",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "칼바람 울프의 그리운 고향",
                    "amount": 3
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 12
                },
                {
                    "name": "슬라임 원액",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/52/Weapon_Sharpshooter%27s_Oath.png/revision/latest/scale-to-width-down/512?cb=20201116035135",
    skills: [
      {
        name: "정확",
        description: "약점 공격 시 가하는 피해가 24/30/36/42/48% 증가한다."
      }
    ],
    origin: "기원",
    keyword: [],
  },
  "곡궁": {
    "name": "곡궁",
    "type": "활",
    "level": 3,
    "bonus": "HP",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 38,
                "bonus": 10.2
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 86,
                "bonus": 18
            }
        },
        {
            "begin": {
                "atk": 105,
                "bonus": 18
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 151,
                "bonus": 26.3
            }
        },
        {
            "begin": {
                "atk": 171,
                "bonus": 26.3
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 193,
                "bonus": 30.4
            }
        },
        {
            "begin": {
                "atk": 212,
                "bonus": 30.4
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 234,
                "bonus": 34.6
            }
        },
        {
            "begin": {
                "atk": 253,
                "bonus": 34.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 274,
                "bonus": 38.7
            }
        },
        {
            "begin": {
                "atk": 294,
                "bonus": 38.7
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 314,
                "bonus": 42.8
            }
        },
        {
            "begin": {
                "atk": 334,
                "bonus": 42.8
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 354,
                "bonus": 46.9
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "라이언 투사의 족쇄",
                    "amount": 2
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 2
                },
                {
                    "name": "이능 두루마리",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 2
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 8
                },
                {
                    "name": "이능 두루마리",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 4
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 4
                },
                {
                    "name": "봉마의 두루마리",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 2
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 8
                },
                {
                    "name": "봉마의 두루마리",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 4
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 6
                },
                {
                    "name": "금주의 두루마리",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "라이언 투사의 이념",
                    "amount": 3
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 12
                },
                {
                    "name": "금주의 두루마리",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/b/b5/Weapon_Recurve_Bow.png/revision/latest/scale-to-width-down/512?cb=20201120005927",
    skills: [
      {
        name: "수확",
        description: "적을 처치하면 HP를 8/10/12/14/16%회복한다."
      }
    ],
    origin: "상자",
    keyword: [],
  },
  "탄궁": {
    "name": "탄궁",
    "type": "활",
    "level": 3,
    "bonus": "치명타 확률",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 38,
                "bonus": 6.8
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 86,
                "bonus": 12
            }
        },
        {
            "begin": {
                "atk": 105,
                "bonus": 12
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 151,
                "bonus": 17.5
            }
        },
        {
            "begin": {
                "atk": 171,
                "bonus": 17.5
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 193,
                "bonus": 20.3
            }
        },
        {
            "begin": {
                "atk": 212,
                "bonus": 20.3
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 234,
                "bonus": 23
            }
        },
        {
            "begin": {
                "atk": 253,
                "bonus": 23
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 274,
                "bonus": 25.7
            }
        },
        {
            "begin": {
                "atk": 294,
                "bonus": 25.7
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 314,
                "bonus": 28.5
            }
        },
        {
            "begin": {
                "atk": 334,
                "bonus": 28.5
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 354,
                "bonus": 31.2
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "고운한림의 매끄러운 모래",
                    "amount": 2
                },
                {
                    "name": "사냥꾼의 제도",
                    "amount": 2
                },
                {
                    "name": "부서진 가면",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "고운한림의 휘암",
                    "amount": 2
                },
                {
                    "name": "사냥꾼의 제도",
                    "amount": 8
                },
                {
                    "name": "부서진 가면",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "고운한림의 휘암",
                    "amount": 4
                },
                {
                    "name": "특수 요원의 제도",
                    "amount": 4
                },
                {
                    "name": "오염된 가면",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "고운한림의 해골",
                    "amount": 2
                },
                {
                    "name": "특수 요원의 제도",
                    "amount": 8
                },
                {
                    "name": "오염된 가면",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "고운한림의 해골",
                    "amount": 4
                },
                {
                    "name": "검사관의 제도",
                    "amount": 6
                },
                {
                    "name": "불길한 가면",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "고운한림의 신체",
                    "amount": 3
                },
                {
                    "name": "검사관의 제도",
                    "amount": 12
                },
                {
                    "name": "불길한 가면",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/ca/Weapon_Slingshot.png/revision/latest/scale-to-width-down/512?cb=20201116035308",
    skills: [
      {
        name: "탄궁",
        description: "일반 공격과 조준 사격 시 화살 발사 후 0.3초 내에 적을 명중하면 가하는 피해가 36/42/48/54/60%증가한다. 반대일 경우 가하는 피해가 10% 감소한다."
      }
    ],
    origin: "기원",
    keyword: []
  },
  "전령": {
    "name": "전령",
    "type": "활",
    "level": 3,
    "bonus": "치명타 피해",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 40,
                "bonus": 6.8
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 102,
                "bonus": 12
            }
        },
        {
            "begin": {
                "atk": 121,
                "bonus": 12
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 187,
                "bonus": 17.5
            }
        },
        {
            "begin": {
                "atk": 207,
                "bonus": 17.5
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 239,
                "bonus": 20.3
            }
        },
        {
            "begin": {
                "atk": 259,
                "bonus": 20.3
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 292,
                "bonus": 23
            }
        },
        {
            "begin": {
                "atk": 311,
                "bonus": 23
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 344,
                "bonus": 25.7
            }
        },
        {
            "begin": {
                "atk": 363,
                "bonus": 25.7
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 396,
                "bonus": 28.5
            }
        },
        {
            "begin": {
                "atk": 415,
                "bonus": 28.5
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 448,
                "bonus": 31.2
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "안개구름 속의 흑연단",
                    "amount": 2
                },
                {
                    "name": "안개꽃 가루",
                    "amount": 2
                },
                {
                    "name": "보물찾기 까마귀 휘장",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "안개구름 속의 수은단",
                    "amount": 2
                },
                {
                    "name": "안개꽃 가루",
                    "amount": 8
                },
                {
                    "name": "보물찾기 까마귀 휘장",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "안개구름 속의 수은단",
                    "amount": 4
                },
                {
                    "name": "안개풀 주머니",
                    "amount": 4
                },
                {
                    "name": "실버 까마귀 휘장",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "안개구름 속의 금단",
                    "amount": 2
                },
                {
                    "name": "안개풀 주머니",
                    "amount": 8
                },
                {
                    "name": "실버 까마귀 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "안개구름 속의 금단",
                    "amount": 4
                },
                {
                    "name": "안개 등심",
                    "amount": 6
                },
                {
                    "name": "골드 까마귀 휘장",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "안개구름 속의 전환",
                    "amount": 3
                },
                {
                    "name": "안개 등심",
                    "amount": 12
                },
                {
                    "name": "골드 까마귀 휘장",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/38/Weapon_Messenger.png/revision/latest/scale-to-width-down/512?cb=20201116034227",
    skills: [
      {
        name: "명적 발사",
        description: "조준 사격 시 약점에 명중하면 추가로 공격력 100%/125%/150%/175%/200%의 피해를 주고 반드시 치명타가 터진다. 해당 효과는 10초마다 1번 발동한다."
      }
    ],
    origin: "상자",
    keyword: [],
  },
  "노련의 사냥활": {
    name: "노련의 사냥활",
    "type": "활",
    "level": 2,
    "stat": [
        {
            "begin": {
                "atk": 33,
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 80
            }
        },
        {
            "begin": {
                "atk": 91
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 139
            }
        },
        {
            "begin": {
                "atk": 151
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 174,
            }
        },
        {
            "begin": {
                "atk": 186
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 209
            }
        },
        {
            "begin": {
                "atk": 220
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 243
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "칼바람 울프의 젖니",
                    "amount": 1
                },
                {
                    name: "지맥의 낡은 가지",
                    "amount": 1
                },
                {
                    name: "보물찾기 까마귀 휘장",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 1
                },
                {
                    name: "지맥의 낡은 가지",
                    "amount": 5
                },
                {
                    name: "보물찾기 까마귀 휘장",
                    "amount": 4
                }
            ],
            "price": 5000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 3
                },
                {
                    name: "지맥의 마른 잎",
                    "amount": 3
                },
                {
                    name: "실버 까마귀 휘장",
                    "amount": 3
                }
            ],
            "price": 10000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "칼바람 울프의 부서진 이빨",
                    "amount": 1
                },
                {
                    name: "지맥의 마른 잎",
                    "amount": 5
                },
                {
                    name: "실버 까마귀 휘장",
                    "amount": 4
                }
            ],
            "price": 15000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/8/82/Weapon_Seasoned_Hunter%27s_Bow.png/revision/latest/scale-to-width-down/512?cb=20201116035113",
    origin: "상점 구매 및 보물상자",
    keyword: [],
  },
  "사냥활": {
    name: "사냥활",
    "type": "활",
    "level": 1,
    "stat": [
        {
            "begin": {
                "atk": 23,
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 56
            }
        },
        {
            "begin": {
                "atk": 68
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 102
            }
        },
        {
            "begin": {
                "atk": 113
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 130,
            }
        },
        {
            "begin": {
                "atk": 141
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 169
            }
        },
        {
            "begin": {
                "atk": 169
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 185
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "칼바람 울프의 젖니",
                    "amount": 1
                },
                {
                    name: "지맥의 낡은 가지",
                    "amount": 1
                },
                {
                    name: "보물찾기 까마귀 휘장",
                    "amount": 1
                }
            ],
            "price": 0
        },
        {
            "start": 40,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 1
                },
                {
                    name: "지맥의 낡은 가지",
                    "amount": 4
                },
                {
                    name: "보물찾기 까마귀 휘장",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "칼바람 울프의 이빨",
                    "amount": 2
                },
                {
                    name: "지맥의 마른 잎",
                    "amount": 2
                },
                {
                    name: "실버 까마귀 휘장",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "칼바람 울프의 부서진 이빨",
                    "amount": 1
                },
                {
                    name: "지맥의 마른 잎",
                    "amount": 4
                },
                {
                    name: "실버 까마귀 휘장",
                    "amount": 3
                }
            ],
            "price": 10000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/44/Weapon_Hunter%27s_Bow.png/revision/latest/scale-to-width-down/512?cb=20201116034023",
    origin: "상점 구매 및 보물상자",
    keyword: [],
  },
  //법구
  "천공의 두루마리":  {
    "name": "천공의 두루마리",
    "type": "법구",
    "level": 5,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 48,
                "bonus": 7.2
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 133,
                "bonus": 12.7
            }
        },
        {
            "begin": {
                "atk": 164,
                "bonus": 12.7
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 261,
                "bonus": 18.5
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 18.5
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 341,
                "bonus": 21.4
            }
        },
        {
            "begin": {
                "atk": 373,
                "bonus": 21.4
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 423,
                "bonus": 24.4
            }
        },
        {
            "begin": {
                "atk": 455,
                "bonus": 24.4
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 506,
                "bonus": 27.3
            }
        },
        {
            "begin": {
                "atk": 537,
                "bonus": 27.3
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 590,
                "bonus": 30.2
            }
        },
        {
            "begin": {
                "atk": 621,
                "bonus": 30.2
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 674,
                "bonus": 33.1
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "칼바람 울프의 젖니",
                    "amount": 5
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 5
                },
                {
                    "name": "견고한 화살촉",
                    "amount": 3
                }
            ],
            "price": 10000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "칼바람 울프의 이빨",
                    "amount": 5
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 18
                },
                {
                    "name": "견고한 화살촉",
                    "amount": 12
                }
            ],
            "price": 20000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "칼바람 울프의 이빨",
                    "amount": 9
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 9
                },
                {
                    "name": "날카로운 화살촉",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "칼바람 울프의 부서진 이빨",
                    "amount": 5
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 18
                },
                {
                    "name": "날카로운 화살촉",
                    "amount": 14
                }
            ],
            "price": 45000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "칼바람 울프의 부서진 이빨",
                    "amount": 9
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 14
                },
                {
                    "name": "역전의 화살촉",
                    "amount": 9
                }
            ],
            "price": 55000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "칼바람 울프의 그리운 고향",
                    "amount": 6
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 27
                },
                {
                    "name": "역전의 화살촉",
                    "amount": 18
                }
            ],
            "price": 65000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Weapon_Skyward_Atlas.png/revision/latest/scale-to-width-down/512?cb=20201116035225",
    skills: [
      {
        name: "사방을 떠다니는 뭉게 구름",
        description: "원소 피해 보너스 +12/15/18/21/24%. 일반 공격 명중 시 50%의 확률로 구름의 총애를 받는다. 15초 내에 주변의 적을 직접 공격하면 공격력 160/200/240/280/320% 의 피해를 준다. 해당 효과는 30초마다 1번 발동한다."
      }
    ],
    origin: "기원",
    keyword: ["두루마리"],
  },
  "사풍 원서":  {
    "name": "사풍 원서",
    "type": "법구",
    "level": 5,
    "bonus": "치명타 확률",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 46,
                "bonus": 7.2
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 122,
                "bonus": 12.7
            }
        },
        {
            "begin": {
                "atk": 153,
                "bonus": 12.7
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 235,
                "bonus": 18.5
            }
        },
        {
            "begin": {
                "atk": 266,
                "bonus": 18.5
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 308,
                "bonus": 21.4
            }
        },
        {
            "begin": {
                "atk": 340,
                "bonus": 21.4
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 382,
                "bonus": 24.4
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 24.4
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 457,
                "bonus": 27.3
            }
        },
        {
            "begin": {
                "atk": 488,
                "bonus": 27.3
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 532,
                "bonus": 30.2
            }
        },
        {
            "begin": {
                "atk": 563,
                "bonus": 30.2
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 608,
                "bonus": 33.1
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "라이언 투사의 족쇄",
                    "amount": 5
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 5
                },
                {
                    "name": "슬라임 응축액",
                    "amount": 3
                }
            ],
            "price": 10000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 5
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 18
                },
                {
                    "name": "슬라임 응축액",
                    "amount": 12
                }
            ],
            "price": 20000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 9
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 9
                },
                {
                    "name": "슬라임청",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 5
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 18
                },
                {
                    "name": "슬라임청",
                    "amount": 14
                }
            ],
            "price": 45000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 9
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 14
                },
                {
                    "name": "슬라임 원액",
                    "amount": 9
                }
            ],
            "price": 55000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "라이언 투사의 이념",
                    "amount": 6
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 27
                },
                {
                    "name": "슬라임 원액",
                    "amount": 18
                }
            ],
            "price": 65000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/98/Weapon_Lost_Prayer_to_the_Sacred_Winds.png/revision/latest/scale-to-width-down/512?cb=20201116034132",
    skills: [
      {
        name: "끝없는 은혜",
        description: "이동 속도 +10%. 필드에 있을 때 4초마다 원소 피해 보너스를 8/10/12/14/16% 획득한다. 최대 중첩 수: 4회. 캐릭터가 전투 불능이 되거나 교체될 때까지 지속된다."
      }
    ],
    origin: "기원",
    keyword: ["사풍"],
  },
  "속세의 자물쇠":  {
    "name": "속세의 자물쇠",
    "type": "법구",
    "level": 5,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 46,
                "bonus": 10.8
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 122,
                "bonus": 19.1
            }
        },
        {
            "begin": {
                "atk": 153,
                "bonus": 19.1
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 235,
                "bonus": 27.8
            }
        },
        {
            "begin": {
                "atk": 266,
                "bonus": 27.8
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 308,
                "bonus": 32.2
            }
        },
        {
            "begin": {
                "atk": 340,
                "bonus": 32.2
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 382,
                "bonus": 36.5
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 36.5
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 457,
                "bonus": 40.9
            }
        },
        {
            "begin": {
                "atk": 488,
                "bonus": 40.9
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 532,
                "bonus": 45.3
            }
        },
        {
            "begin": {
                "atk": 563,
                "bonus": 45.3
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 608,
                "bonus": 49.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "흑운철 한 알",
                    "amount": 5
                },
                {
                    "name": "약한 뼛조각",
                    "amount": 5
                },
                {
                    "name": "부서진 가면",
                    "amount": 3
                }
            ],
            "price": 10000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "흑운철 조각",
                    "amount": 5
                },
                {
                    "name": "약한 뼛조각",
                    "amount": 18
                },
                {
                    "name": "부서진 가면",
                    "amount": 12
                }
            ],
            "price": 20000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "흑운철 조각",
                    "amount": 9
                },
                {
                    "name": "단단한 뼛조각",
                    "amount": 9
                },
                {
                    "name": "오염된 가면",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "흑운철 일각",
                    "amount": 5
                },
                {
                    "name": "단단한 뼛조각",
                    "amount": 18
                },
                {
                    "name": "오염된 가면",
                    "amount": 14
                }
            ],
            "price": 45000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "흑운철 일각",
                    "amount": 9
                },
                {
                    "name": "석화한 뼛조각",
                    "amount": 14
                },
                {
                    "name": "불길한 가면",
                    "amount": 9
                }
            ],
            "price": 55000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "흑운철 덩이",
                    "amount": 6
                },
                {
                    "name": "석화한 뼛조각",
                    "amount": 27
                },
                {
                    "name": "불길한 가면",
                    "amount": 18
                }
            ],
            "price": 65000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/ca/Weapon_Memory_of_Dust.png/revision/latest/scale-to-width-down/512?cb=20201119232148",
    skills: [
      {
        name: "금빛의 옥·제군의 길",
        description: "보호막 강화 효과가 20/25/30/35/40% 증가한다. 공격 명중 후 공격력이 4/5/6/7/8% 증가한다. 지속 시간: 8초. 최대 중첩수: 5회. 해당 효과는 0.3초마다 1번 발동한다. 또한 보호막 존재 시 해당 효과의 공격력 증가 효과가 100% 증가한다."
      }
    ],
    origin: "기원",
    keyword: ["자물쇠"],
  },
  "페보니우스 비전":  {
    "name": "페보니우스 비전",
    "type": "법구",
    "level": 4,
    "bonus": "원소 충전 효율",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 10
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 17.7
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 17.7
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 25.8
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 25.8
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 29.8
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 29.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 33.8
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 33.8
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 37.9
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 37.9
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 41.9
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 41.9
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 45.9
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "고탑 왕의 잔해",
                    "amount": 3
                },
                {
                    "name": "무거운 나팔",
                    "amount": 3
                },
                {
                    "name": "이능 두루마리",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "고탑 왕의 절망",
                    "amount": 3
                },
                {
                    "name": "무거운 나팔",
                    "amount": 12
                },
                {
                    "name": "이능 두루마리",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "고탑 왕의 절망",
                    "amount": 6
                },
                {
                    "name": "흑동 나팔",
                    "amount": 6
                },
                {
                    "name": "봉마의 두루마리",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "고탑 왕의 조각",
                    "amount": 3
                },
                {
                    "name": "흑동 나팔",
                    "amount": 12
                },
                {
                    "name": "봉마의 두루마리",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "고탑 왕의 조각",
                    "amount": 6
                },
                {
                    "name": "흑수정 나팔",
                    "amount": 9
                },
                {
                    "name": "금주의 두루마리",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "고탑 왕의 깨진 꿈",
                    "amount": 4
                },
                {
                    "name": "흑수정 나팔",
                    "amount": 18
                },
                {
                    "name": "금주의 두루마리",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/36/Weapon_Favonius_Codex.png/revision/latest/scale-to-width-down/512?cb=20201116033719",
    skills: [
      {
        name: "바람과 함께",
        description: "치명타 시 60/70/80/90/100%의 확률로 소량의 원소 구슬이 생성되고 캐릭터의 원소 에너지를 6pt 회복한다. 해당 효과는 12/10.5/9/7.5/6초마다 1번 발동한다."
      }
    ],
    origin: "기원",
    keyword: [],
  },
  "음유시인의 악장":  {
    "name": "음유시인의 악장",
    "type": "법구",
    "level": 4,
    "bonus": "치명타 피해",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 12
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 21.2
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 21.2
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 30.9
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 30.9
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 35.7
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 35.7
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 40.6
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 40.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 45.4
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 45.4
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 50.3
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 50.3
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 55.1
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "칼바람 울프의 젖니",
                    "amount": 3
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 3
                },
                {
                    "name": "부서진 가면",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "칼바람 울프의 이빨",
                    "amount": 3
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 12
                },
                {
                    "name": "부서진 가면",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "칼바람 울프의 이빨",
                    "amount": 6
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 6
                },
                {
                    "name": "오염된 가면",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "칼바람 울프의 부서진 이빨",
                    "amount": 3
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 12
                },
                {
                    "name": "오염된 가면",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "칼바람 울프의 부서진 이빨",
                    "amount": 6
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 9
                },
                {
                    "name": "불길한 가면",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "칼바람 울프의 그리운 고향",
                    "amount": 4
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 18
                },
                {
                    "name": "불길한 가면",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/f0/Weapon_The_Widsith.png/revision/latest/scale-to-width-down/512?cb=20201119201814",
    skills: [
      {
        name: "등장 음악",
        description: `캐릭터가 등장할 때 무작위로 테마송을 획득한다. 지속 시간 10초. 30초마다 1번 발동한다.
  서창: 공격력 +60/75/90/105/120%
  영탄곡: 모든 원소의 피해 +48/60/72/84/96%
  간주곡: 원소 마스터리 +240/300/360/420/480`
      }
    ],
    origin: "기원",
    keyword: [],
  },
  "제례의 악장":  {
    "name": "제례의 악장",
    "type": "법구",
    "level": 4,
    "bonus": "원소 마스터리",
    "bonusType": "number",
    "stat": [
        {
            "begin": {
                "atk": 41,
                "bonus": 48
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 99,
                "bonus": 85
            }
        },
        {
            "begin": {
                "atk": 125,
                "bonus": 85
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 184,
                "bonus": 124
            }
        },
        {
            "begin": {
                "atk": 210,
                "bonus": 124
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 238,
                "bonus": 143
            }
        },
        {
            "begin": {
                "atk": 264,
                "bonus": 143
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 293,
                "bonus": 162
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 162
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 347,
                "bonus": 182
            }
        },
        {
            "begin": {
                "atk": 373,
                "bonus": 182
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 410,
                "bonus": 201
            }
        },
        {
            "begin": {
                "atk": 427,
                "bonus": 201
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 454,
                "bonus": 221
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "라이언 투사의 족쇄",
                    "amount": 3
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 3
                },
                {
                    "name": "보물찾기 까마귀 휘장",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 3
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 12
                },
                {
                    "name": "보물찾기 까마귀 휘장",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 6
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 6
                },
                {
                    "name": "실버 까마귀 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 3
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 12
                },
                {
                    "name": "실버 까마귀 휘장",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 6
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 9
                },
                {
                    "name": "골드 까마귀 휘장",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "라이언 투사의 이념",
                    "amount": 4
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 18
                },
                {
                    "name": "골드 까마귀 휘장",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/6c/Weapon_Sacrificial_Fragments.png/revision/latest/scale-to-width-down/512?cb=20201116035037",
    skills: [
      {
        name: "침착",
        description: "원소 전투 스킬로 피해를 줄 때 40/50/60/70/80%의 확률로 해당 스킬의 재발동 대기시간이 초기화된다. 해당 효과는 30/26/22/19/16초마다 1번 발동한다."
      }
    ],
    origin: "기원",
    keyword: [],
  },
  "왕실의 비전록":  {
    "name": "왕실의 비전록",
    "type": "법구",
    "level": 4,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 44,
                "bonus": 6
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 119,
                "bonus": 10.6
            }
        },
        {
            "begin": {
                "atk": 144,
                "bonus": 10.6
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 226,
                "bonus": 15.5
            }
        },
        {
            "begin": {
                "atk": 252,
                "bonus": 15.5
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 293,
                "bonus": 17.9
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 17.9
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 387,
                "bonus": 20.3
            }
        },
        {
            "begin": {
                "atk": 387,
                "bonus": 20.3
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 455,
                "bonus": 22.7
            }
        },
        {
            "begin": {
                "atk": 455,
                "bonus": 22.7
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 497,
                "bonus": 25.1
            }
        },
        {
            "begin": {
                "atk": 523,
                "bonus": 25.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 565,
                "bonus": 27.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "고탑 왕의 잔해",
                    "amount": 3
                },
                {
                    "name": "무거운 나팔",
                    "amount": 3
                },
                {
                    "name": "신병의 휘장",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "고탑 왕의 절망",
                    "amount": 3
                },
                {
                    "name": "무거운 나팔",
                    "amount": 12
                },
                {
                    "name": "신병의 휘장",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "고탑 왕의 절망",
                    "amount": 6
                },
                {
                    "name": "흑동 나팔",
                    "amount": 6
                },
                {
                    "name": "사관의 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "고탑 왕의 조각",
                    "amount": 3
                },
                {
                    "name": "흑동 나팔",
                    "amount": 12
                },
                {
                    "name": "사관의 휘장",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "고탑 왕의 조각",
                    "amount": 6
                },
                {
                    "name": "흑수정 나팔",
                    "amount": 9
                },
                {
                    "name": "위관의 휘장",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "고탑 왕의 깨진 꿈",
                    "amount": 4
                },
                {
                    "name": "흑수정 나팔",
                    "amount": 18
                },
                {
                    "name": "위관의 휘장",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/9/99/Weapon_Royal_Grimoire.png/revision/latest/scale-to-width-down/512?cb=20201120000114",
    skills: [
      {
        name: "집중",
        description: "공격으로 피해를 줄 때마다 치명타 확률이 8/10/12/14/16% 증가한다. 최대 중첩수: 5회. 공격 시 치명타가 발생하면 모든 집중 효과가 사라진다."
      }
    ],
    origin: "스타라이트 교환",
    keyword: [],
  },
  "일월의 정수":  {
    "name": "일월의 정수",
    "type": "법구",
    "level": 4,
    "bonus": "치명타 확률",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 6
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 10.6
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 10.6
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 15.5
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 15.5
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 17.9
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 17.9
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 20.3
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 20.3
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 22.7
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 22.7
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 25.1
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 25.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 27.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "고운한림의 매끄러운 모래",
                    "amount": 3
                },
                {
                    "name": "사냥꾼의 제도",
                    "amount": 3
                },
                {
                    "name": "구라구라 꽃꿀",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "고운한림의 휘암",
                    "amount": 3
                },
                {
                    "name": "사냥꾼의 제도",
                    "amount": 12
                },
                {
                    "name": "구라구라 꽃꿀",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "고운한림의 휘암",
                    "amount": 6
                },
                {
                    "name": "특수 요원의 제도",
                    "amount": 6
                },
                {
                    "name": "반짝반짝 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "고운한림의 해골",
                    "amount": 3
                },
                {
                    "name": "특수 요원의 제도",
                    "amount": 12
                },
                {
                    "name": "반짝반짝 꽃꿀",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "고운한림의 해골",
                    "amount": 6
                },
                {
                    "name": "검사관의 제도",
                    "amount": 9
                },
                {
                    "name": "원소 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "고운한림의 신체",
                    "amount": 4
                },
                {
                    "name": "검사관의 제도",
                    "amount": 18
                },
                {
                    "name": "원소 꽃꿀",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/f/fc/Weapon_Solar_Pearl.png/revision/latest/scale-to-width-down/512?cb=20201116035322",
    skills: [
      {
        name: "해와 달의 광휘",
        description: "일반 공격 명중 후 6초 동안 원소 전투 스킬과 원소폭발의 피해가 20/25/30/35/40% 증가한다. 원소 전투 스킬과 원소폭발 명중 후 6초 동안 일반 공격 피해가 20/25/30/35/40% 증가한다."
      }
    ],
    origin: "기원",
    keyword: ["일월"],
  },
  "황금 호박 프로토타입":  {
    "name": "황금 호박 프로토타입",
    "type": "법구",
    "level": 4,
    "bonus": "HP",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 41,
                "bonus": 9
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 15.9
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 15.9
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 23.2
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 23.2
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 26.8
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 26.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 30.4
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 30.4
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 34.1
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 34.1
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 37.7
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 37.7
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 41.3
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "안개구름 속의 흑연단",
                    "amount": 3
                },
                {
                    "name": "안개꽃 가루",
                    "amount": 3
                },
                {
                    "name": "견고한 화살촉",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "안개구름 속의 수은단",
                    "amount": 3
                },
                {
                    "name": "안개꽃 가루",
                    "amount": 12
                },
                {
                    "name": "견고한 화살촉",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "안개구름 속의 수은단",
                    "amount": 6
                },
                {
                    "name": "안개풀 주머니",
                    "amount": 6
                },
                {
                    "name": "날카로운 화살촉",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "안개구름 속의 금단",
                    "amount": 3
                },
                {
                    "name": "안개풀 주머니",
                    "amount": 12
                },
                {
                    "name": "날카로운 화살촉",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "안개구름 속의 금단",
                    "amount": 6
                },
                {
                    "name": "안개 등심",
                    "amount": 9
                },
                {
                    "name": "역전의 화살촉",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "안개구름 속의 전환",
                    "amount": 4
                },
                {
                    "name": "안개 등심",
                    "amount": 18
                },
                {
                    "name": "역전의 화살촉",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Weapon_Prototype_Amber.png/revision/latest/scale-to-width-down/512?cb=20201116034808",
    forge: [
      {
        name: "북대륙의 법구 원형",
        amount: 1
      },
      {
        name: "백철",
        amount: 50
      },
      {
        name: "수정덩이",
        amount: 50
      },
    ],
    skills: [
      {
        name: "도금",
        description: "원소폭발 발동 후 6초 동안 2초마다 원소 에너지를 4/4.5/5/5.5/6pt 회복한다. 또한 파티 내 모든 캐릭터의 HP를 2초마다 4/4.5/5/5.5/6% 회복한다."
      }
    ],
    origin: "단조",
    keyword: ["황금호박"],
  },
  "만국 항해용해도":  {
    "name": "만국 항해용해도",
    "type": "법구",
    "level": 4,
    "bonus": "원소 마스터리",
    "bonusType": "number",
    "stat": [
        {
            "begin": {
                "atk": 44,
                "bonus": 24
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 119,
                "bonus": 42
            }
        },
        {
            "begin": {
                "atk": 144,
                "bonus": 42
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 226,
                "bonus": 62
            }
        },
        {
            "begin": {
                "atk": 252,
                "bonus": 62
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 293,
                "bonus": 62
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 62
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 361,
                "bonus": 71
            }
        },
        {
            "begin": {
                "atk": 387,
                "bonus": 71
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 429,
                "bonus": 91
            }
        },
        {
            "begin": {
                "atk": 455,
                "bonus": 91
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 497,
                "bonus": 101
            }
        },
        {
            "begin": {
                "atk": 523,
                "bonus": 101
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 565,
                "bonus": 110
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "흑운철 한 알",
                    "amount": 3
                },
                {
                    "name": "약한 뼛조각",
                    "amount": 3
                },
                {
                    "name": "슬라임 응축액",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "흑운철 조각",
                    "amount": 3
                },
                {
                    "name": "약한 뼛조각",
                    "amount": 12
                },
                {
                    "name": "슬라임 응축액",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "흑운철 조각",
                    "amount": 6
                },
                {
                    "name": "단단한 뼛조각",
                    "amount": 6
                },
                {
                    "name": "슬라임청",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "흑운철 일각",
                    "amount": 3
                },
                {
                    "name": "단단한 뼛조각",
                    "amount": 12
                },
                {
                    "name": "슬라임청",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "흑운철 일각",
                    "amount": 6
                },
                {
                    "name": "석화한 뼛조각",
                    "amount": 9
                },
                {
                    "name": "슬라임 원액",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "흑운철 덩이",
                    "amount": 4
                },
                {
                    "name": "석화한 뼛조각",
                    "amount": 18
                },
                {
                    "name": "슬라임 원액",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Weapon_Mappa_Mare.png/revision/latest/scale-to-width-down/512?cb=20201116034208",
    forge: [
      {
        name: "북대륙의 법구 원형",
        amount: 1
      },
      {
        name: "백철",
        amount: 50
      },
      {
        name: "수정덩이",
        amount: 50
      },
    ],
    skills: [
      {
        name: "에너지 주입 두루마리",
        description: "원소 반응 후 10초 동안 원소 피해 보너스를 8/10/12/14/16% 획득한다. 최대 중첩수: 2회."
      }
    ],
    origin: "단조",
    keyword: ["만국","항해용해도"],
  },
  "흑암 홍옥":  {
    "name": "흑암 홍옥",
    "type": "법구",
    "level": 4,
    "bonus": "치명타 피해",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 12
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 21.2
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 21.2
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 30.9
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 30.9
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 35.7
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 35.7
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 40.6
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 40.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 45.4
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 45.4
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 50.3
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 50.3
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 55.1
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "고운한림의 매끄러운 모래",
                    "amount": 3
                },
                {
                    "name": "사냥꾼의 제도",
                    "amount": 3
                },
                {
                    "name": "이능 두루마리",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "고운한림의 휘암",
                    "amount": 3
                },
                {
                    "name": "사냥꾼의 제도",
                    "amount": 12
                },
                {
                    "name": "이능 두루마리",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "고운한림의 휘암",
                    "amount": 6
                },
                {
                    "name": "특수 요원의 제도",
                    "amount": 6
                },
                {
                    "name": "봉마의 두루마리",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "고운한림의 해골",
                    "amount": 3
                },
                {
                    "name": "특수 요원의 제도",
                    "amount": 12
                },
                {
                    "name": "봉마의 두루마리",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "고운한림의 해골",
                    "amount": 6
                },
                {
                    "name": "검사관의 제도",
                    "amount": 9
                },
                {
                    "name": "금주의 두루마리",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "고운한림의 신체",
                    "amount": 4
                },
                {
                    "name": "검사관의 제도",
                    "amount": 18
                },
                {
                    "name": "금주의 두루마리",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/a/a6/Weapon_Blackcliff_Agate.png/revision/latest/scale-to-width-down/512?cb=20201119233950",
    skills: [
      {
        name: "승승장구",
        description: "적을 처치한 후 공격력이 12/15/18/21/24% 증가한다. 지속 시간: 30초. 최대 중첩수: 3회. 중첩 1회당 지속 시간은 독립 계산한다."
      }
    ],
    origin: "스타라이트 교환",
    keyword: []
  },
  "소심":  {
    "name": "소심",
    "type": "법구",
    "level": 4,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 41,
                "bonus": 12
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 99,
                "bonus": 21.2
            }
        },
        {
            "begin": {
                "atk": 125,
                "bonus": 21.2
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 184,
                "bonus": 30.9
            }
        },
        {
            "begin": {
                "atk": 210,
                "bonus": 30.9
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 238,
                "bonus": 35.7
            }
        },
        {
            "begin": {
                "atk": 264,
                "bonus": 35.7
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 293,
                "bonus": 40.6
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 40.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 347,
                "bonus": 45.4
            }
        },
        {
            "begin": {
                "atk": 373,
                "bonus": 45.4
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 401,
                "bonus": 50.3
            }
        },
        {
            "begin": {
                "atk": 427,
                "bonus": 50.3
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 454,
                "bonus": 55.1
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "안개구름 속의 흑연단",
                    "amount": 3
                },
                {
                    "name": "안개꽃 가루",
                    "amount": 3
                },
                {
                    "name": "부서진 가면",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "안개구름 속의 수은단",
                    "amount": 3
                },
                {
                    "name": "안개꽃 가루",
                    "amount": 12
                },
                {
                    "name": "부서진 가면",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "안개구름 속의 수은단",
                    "amount": 6
                },
                {
                    "name": "안개풀 주머니",
                    "amount": 6
                },
                {
                    "name": "오염된 가면",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "안개구름 속의 금단",
                    "amount": 3
                },
                {
                    "name": "안개풀 주머니",
                    "amount": 12
                },
                {
                    "name": "오염된 가면",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "안개구름 속의 금단",
                    "amount": 6
                },
                {
                    "name": "안개 등심",
                    "amount": 9
                },
                {
                    "name": "불길한 가면",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "안개구름 속의 전환",
                    "amount": 4
                },
                {
                    "name": "안개 등심",
                    "amount": 18
                },
                {
                    "name": "불길한 가면",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/6c/Weapon_Eye_of_Perception.png/revision/latest/scale-to-width-down/512?cb=20201116033703",
    skills: [
      {
        name: "메아리",
        description: "일반 공격과 강공격 명중 시 50%의 확률로 마음을 비추는 법구를 발사해 공격력 240/270/300/330/360%의 피해를 주고 적 사이에서 4번 튕긴다. 해당 효과는 12/11/10/9/8초마다 1번 발동한다."
      }
    ],
    origin: "기원",
    keyword: [],
  },
  "인동의 열매":  {
    "name": "인동의 열매",
    "type": "법구",
    "level": 4,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 42,
                "bonus": 9
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 109,
                "bonus": 15.9
            }
        },
        {
            "begin": {
                "atk": 135,
                "bonus": 15.9
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 205,
                "bonus": 23.2
            }
        },
        {
            "begin": {
                "atk": 231,
                "bonus": 23.2
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 266,
                "bonus": 26.8
            }
        },
        {
            "begin": {
                "atk": 292,
                "bonus": 26.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 327,
                "bonus": 30.4
            }
        },
        {
            "begin": {
                "atk": 353,
                "bonus": 30.4
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 388,
                "bonus": 34.1
            }
        },
        {
            "begin": {
                "atk": 414,
                "bonus": 34.1
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 449,
                "bonus": 37.7
            }
        },
        {
            "begin": {
                "atk": 475,
                "bonus": 37.7
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 510,
                "bonus": 41.3
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "라이언 투사의 족쇄",
                    "amount": 3
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 3
                },
                {
                    "name": "구라구라 꽃꿀",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 3
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 12
                },
                {
                    "name": "구라구라 꽃꿀",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 6
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 6
                },
                {
                    "name": "반짝반짝 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 3
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 12
                },
                {
                    "name": "반짝반짝 꽃꿀",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 6
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 9
                },
                {
                    "name": "원소 꽃꿀",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "라이언 투사의 이념",
                    "amount": 4
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 18
                },
                {
                    "name": "원소 꽃꿀",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Weapon_Frostbearer.png/revision/latest/scale-to-width-down/512?cb=20210209065948",
    forge: [
      {
        name: "북대륙의 법구 원형",
        amount: 1
      },
      {
        name: "백철",
        amount: 50
      },
      {
        name: "수정덩이",
        amount: 50
      },
    ],
    skills: [
      {
        name: "서리의 매장",
        description: "일반 공격과 강공격이 적에게 명중 시 60/70/80/90/100%의 확률로 적의 위쪽에 영원의 얼음 결정을 생성한 후 떨궈서 공격력 80/95/110/125/140%의 범위 피해를 준다. 적이 얼음 원소의 영향을 받으면 공격력 200/240/280/320/360%의 피해를 준다. 해당 효과는 10초마다 1회 발동한다."
      }
    ],
    origin: "인동의 나무 공양 10레벨 보상",
    keyword: ["인동"],
  },
  "뒷골목의 술과 시":  {
    "name": "뒷골목의 술과 시",
    "type": "법구",
    "level": 4,
    "bonus": "원소 충전 효율",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 44,
                "bonus": 6.7
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 119,
                "bonus": 11.8
            }
        },
        {
            "begin": {
                "atk": 144,
                "bonus": 11.8
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 226,
                "bonus": 17.2
            }
        },
        {
            "begin": {
                "atk": 252,
                "bonus": 17.2
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 293,
                "bonus": 19.9
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 19.9
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 361,
                "bonus": 22.6
            }
        },
        {
            "begin": {
                "atk": 387,
                "bonus": 22.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 429,
                "bonus": 25.2
            }
        },
        {
            "begin": {
                "atk": 455,
                "bonus": 25.2
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 497,
                "bonus": 27.9
            }
        },
        {
            "begin": {
                "atk": 523,
                "bonus": 27.9
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 565,
                "bonus": 30.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "칼바람 울프의 젖니",
                    "amount": 3
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 3
                },
                {
                    "name": "이능 두루마리",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "칼바람 울프의 이빨",
                    "amount": 3
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 12
                },
                {
                    "name": "이능 두루마리",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "칼바람 울프의 이빨",
                    "amount": 6
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 6
                },
                {
                    "name": "봉마의 두루마리",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "칼바람 울프의 부서진 이빨",
                    "amount": 3
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 12
                },
                {
                    "name": "봉마의 두루마리",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "칼바람 울프의 부서진 이빨",
                    "amount": 6
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 9
                },
                {
                    "name": "금주의 두루마리",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "칼바람 울프의 그리운 고향",
                    "amount": 4
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 18
                },
                {
                    "name": "금주의 두루마리",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/c6/Weapon_Wine_and_Song.png/revision/latest/scale-to-width-down/512?cb=20210317183126",
    skills: [
      {
        name: "변화무쌍",
        description: "일반 공격으로 적을 명중시킨 후, 대시나 대시를 대체할 수 있는 능력으로 소모되는 스태미나가 14/16/18/20/22% 감소한다. 지속 시간: 5초. 또한, 대시나 대시를 대체할 수 있는 능력을 사용한 후, 공격력이 20/25/30/35/40% 증가한다. 지속 시간: 5초"
      }
    ],
    origin: "기원",
    keyword: ["술과시","뒷골목법구"],
  },
  "도도코 이야기집":  {
    "name": "도도코 이야기집",
    "type": "법구",
    "level": 4,
    "bonus": "공격력",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 41,
                "bonus": 12
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 99,
                "bonus": 21.2
            }
        },
        {
            "begin": {
                "atk": 125,
                "bonus": 21.2
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 184,
                "bonus": 30.9
            }
        },
        {
            "begin": {
                "atk": 210,
                "bonus": 30.9
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 238,
                "bonus": 35.7
            }
        },
        {
            "begin": {
                "atk": 264,
                "bonus": 35.7
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 293,
                "bonus": 40.6
            }
        },
        {
            "begin": {
                "atk": 319,
                "bonus": 40.6
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 347,
                "bonus": 45.4
            }
        },
        {
            "begin": {
                "atk": 373,
                "bonus": 45.4
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 401,
                "bonus": 50.3
            }
        },
        {
            "begin": {
                "atk": 427,
                "bonus": 50.3
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 454,
                "bonus": 55.1
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "칼바람 울프의 젖니",
                    "amount": 3
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 3
                },
                {
                    "name": "부서진 가면",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "칼바람 울프의 이빨",
                    "amount": 3
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 12
                },
                {
                    "name": "부서진 가면",
                    "amount": 8
                }
            ],
            "price": 15000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "칼바람 울프의 이빨",
                    "amount": 6
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 6
                },
                {
                    "name": "오염된 가면",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "칼바람 울프의 부서진 이빨",
                    "amount": 3
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 12
                },
                {
                    "name": "오염된 가면",
                    "amount": 9
                }
            ],
            "price": 30000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "칼바람 울프의 부서진 이빨",
                    "amount": 6
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 9
                },
                {
                    "name": "불길한 가면",
                    "amount": 6
                }
            ],
            "price": 35000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "칼바람 울프의 그리운 고향",
                    "amount": 4
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 18
                },
                {
                    "name": "불길한 가면",
                    "amount": 12
                }
            ],
            "price": 45000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/5/51/Weapon_Dodoco_Tales.png/revision/latest/scale-to-width-down/512?cb=20210613085809",
    skills: [
      {
        name: "도도! 대모험",
        description: "일반 공격 명중 후 6초 동안 강공격 피해가 16/20/24/28/32% 증가한다. 강공격 명중 후 6초 동안 공격력이 8/10/12/14/16% 증가한다."
      }
    ],
    origin: "이벤트",
    keyword: ["도도코", "이야기집"],
  },
  "하쿠신의 고리": {
    name: "하쿠신의 고리",
    type: "법구",
    level: 4,
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/ee/Weapon_Hakushin_Ring.png/revision/latest/scale-to-width-down/256?cb=20210723074418",
    stat: [
      {
        start: 1,
        last: 20,
        begin: {
          atk: 44,
          bonus: 6.7
        },
        end: {
          atk: 119,
          bonus: 11.8
        }
      },
      {
        start: 20,
        last: 40,
        begin: {
          atk: 144,
          bonus: 11.8
        },
        end: {
          atk: 226,
          bonus: 17.2
        }
      },
      {
        start: 40,
        last: 50,
        begin: {
          atk: 252,
          bonus: 17.2
        },
        end: {
          atk: 293,
          bonus: 19.9
        }
      },
      {
        start: 50,
        last: 60,
        begin: {
          atk: 319,
          bonus: 19.9
        },
        end: {
          atk: 361,
          bonus: 22.6
        }
      },
      {
        start: 60,
        last: 70,
        begin: {
          atk: 387,
          bonus: 22.6
        },
        end: {
          atk: 429,
          bonus: 25.2
        }
      },
      {
        start: 70,
        last: 80,
        begin: {
          atk: 455,
          bonus: 25.2
        },
        end: {
          atk: 497,
          bonus: 27.9
        }
      },
      {
        start: 80,
        last: 90,
        begin: {
          atk: 523,
          bonus: 27.9
        },
        end: {
          atk: 565,
          bonus: 30.6
        }
      },
    ],
    bonus: "원소 충전 효율",
    bonusType: "percent",
    ascension: [
      {
      start: 20,
      items: [
          {
          name: "먼바다의 산호 가지",
          amount: 3
          },
          {
          name: "어두운 프리즘",
          amount: 3
          },
          {
          name: "이능 두루마리",
          amount: 2
          }
      ],
      price: 5000
      },
      {
      start: 40,
      items: [
          {
          name: "먼바다의 옥빛 가지",
          amount: 3
          },
          {
          name: "어두운 프리즘",
          amount: 12
          },
          {
          name: "이능 두루마리",
          amount: 8
          }
      ],
      price: 15000
      },
      {
      start: 50,
      items: [
          {
          name: "먼바다의 옥빛 가지",
          amount: 6
          },
          {
          name: "수정 프리즘",
          amount: 6
          },
          {
          name: "봉마의 두루마리",
          amount: 6
          }
      ],
      price: 20000
      },
      {
      start: 60,
      items: [
          {
          name: "먼바다의 마노 가지",
          amount: 3
          },
          {
          name: "수정 프리즘",
          amount: 12
          },
          {
          name: "봉마의 두루마리",
          amount: 9
          }
      ],
      price: 30000
      },
      {
      start: 70,
      items: [
          {
          name: "먼바다의 마노 가지",
          amount: 6
          },
          {
          name: "편광 프리즘",
          amount: 9
          },
          {
          name: "금주의 두루마리",
          amount: 9
          }
      ],
      price: 35000
      },
      {
      start: 80,
      items: [
          {
          name: "먼바다의 금빛 가지",
          amount: 4
          },
          {
          name: "편광 프리즘",
          amount: 18
          },
          {
          name: "금주의 두루마리",
          amount: 12
          }
      ],
      price: 45000
      },
    ],
    skills: [
      {
        name: "벚꽃 재궁",
        description: "해당 무기를 장착한 캐릭터가 번개 원소 관련 반응을 일으키면 근처에 해당 원소 반응과 관련 있는 원소 타입의 파티 내 캐릭터는 10/12.5/15/17.5/20%의 상응하는 원소 피해 보너스를 받는다. 지속 시간: 6초. 해당 방식으로 얻을 수 있는 원소 피해 보너스는 중첩되지 않는다."
      }
    ],
    forge: [
        {
          name: "북대륙의 법구 원형",
          amount: 1
        },
        {
          name: "자수정 덩이",
          amount: 50
        },
        {
          name: "백철",
          amount: 50
        },
    ],
    origin: "단조",
    keyword: ["이나즈마단조법구","하쿠신"]
  },
  "마도 서론": {
    "name": "마도 서론",
    "type": "법구",
    "level": 3,
    "bonus": "원소 마스터리",
    "bonusType": "number",
    "stat": [
        {
            "begin": {
                "atk": 38,
                "bonus": 41
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 86,
                "bonus": 72
            }
        },
        {
            "begin": {
                "atk": 105,
                "bonus": 72
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 151,
                "bonus": 105
            }
        },
        {
            "begin": {
                "atk": 171,
                "bonus": 105
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 193,
                "bonus": 122
            }
        },
        {
            "begin": {
                "atk": 212,
                "bonus": 122
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 234,
                "bonus": 138
            }
        },
        {
            "begin": {
                "atk": 253,
                "bonus": 138
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 274,
                "bonus": 154
            }
        },
        {
            "begin": {
                "atk": 294,
                "bonus": 154
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 314,
                "bonus": 171
            }
        },
        {
            "begin": {
                "atk": 334,
                "bonus": 171
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 354,
                "bonus": 187
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "고탑 왕의 잔해",
                    "amount": 2
                },
                {
                    "name": "무거운 나팔",
                    "amount": 2
                },
                {
                    "name": "슬라임 응축액",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "고탑 왕의 절망",
                    "amount": 2
                },
                {
                    "name": "무거운 나팔",
                    "amount": 8
                },
                {
                    "name": "슬라임 응축액",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "고탑 왕의 절망",
                    "amount": 4
                },
                {
                    "name": "흑동 나팔",
                    "amount": 4
                },
                {
                    "name": "슬라임청",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "고탑 왕의 조각",
                    "amount": 2
                },
                {
                    "name": "흑동 나팔",
                    "amount": 8
                },
                {
                    "name": "슬라임청",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "고탑 왕의 조각",
                    "amount": 4
                },
                {
                    "name": "흑수정 나팔",
                    "amount": 6
                },
                {
                    "name": "슬라임 원액",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "고탑 왕의 깨진 꿈",
                    "amount": 3
                },
                {
                    "name": "흑수정 나팔",
                    "amount": 12
                },
                {
                    "name": "슬라임 원액",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/3/39/Weapon_Magic_Guide.png/revision/latest/scale-to-width-down/512?cb=20201119232047",
    skills: [
      {
        name: "첨벙첨벙 찌릿찌릿",
        description: "물 원소 또는 번개 원소의 영향을 받은 적에게 가하는 피해가 12/15/18/21/24% 증가한다."
      }
    ],
    origin: "기원",
    keyword: [],
  },
  "드래곤 슬레이어 영웅담":  {
    "name": "드래곤 슬레이어 영웅담",
    "type": "법구",
    "level": 3,
    "bonus": "HP",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 39,
                "bonus": 7.7
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 94,
                "bonus": 13.5
            }
        },
        {
            "begin": {
                "atk": 113,
                "bonus": 13.5
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 169,
                "bonus": 19.7
            }
        },
        {
            "begin": {
                "atk": 189,
                "bonus": 19.7
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 216,
                "bonus": 22.8
            }
        },
        {
            "begin": {
                "atk": 236,
                "bonus": 22.8
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 263,
                "bonus": 25.9
            }
        },
        {
            "begin": {
                "atk": 282,
                "bonus": 25.9
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 309,
                "bonus": 29
            }
        },
        {
            "begin": {
                "atk": 329,
                "bonus": 29
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 355,
                "bonus": 32.1
            }
        },
        {
            "begin": {
                "atk": 375,
                "bonus": 32.1
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 401,
                "bonus": 35.2
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "칼바람 울프의 젖니",
                    "amount": 2
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 2
                },
                {
                    "name": "이능 두루마리",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "칼바람 울프의 이빨",
                    "amount": 2
                },
                {
                    "name": "지맥의 낡은 가지",
                    "amount": 8
                },
                {
                    "name": "이능 두루마리",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "칼바람 울프의 이빨",
                    "amount": 4
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 4
                },
                {
                    "name": "봉마의 두루마리",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "칼바람 울프의 부서진 이빨",
                    "amount": 2
                },
                {
                    "name": "지맥의 마른 잎",
                    "amount": 8
                },
                {
                    "name": "봉마의 두루마리",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "칼바람 울프의 부서진 이빨",
                    "amount": 4
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 6
                },
                {
                    "name": "금주의 두루마리",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "칼바람 울프의 그리운 고향",
                    "amount": 3
                },
                {
                    "name": "지맥의 새싹",
                    "amount": 12
                },
                {
                    "name": "금주의 두루마리",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/19/Weapon_Thrilling_Tales_of_Dragon_Slayers.png/revision/latest/scale-to-width-down/512?cb=20201119201736",
    skills: [
      {
        name: "전승",
        description: "스스로 캐릭터를 교체 시 새로 등장한 캐릭터의 공격력이 24/30/36/42/48% 증가한다. 지속 시간: 10초. 해당 효과는 20초마다 1번 발동한다."
      }
    ],
    origin: "기원",
    keyword: ["드슬담","드래곤슬레이어"],
   },
  "이세계 여행기": {
    "name": "이세계 여행기",
    "type": "법구",
    "level": 3,
    "bonus": "원소 충전 효율",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 39,
                "bonus": 8.5
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 94,
                "bonus": 15
            }
        },
        {
            "begin": {
                "atk": 113,
                "bonus": 15
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 169,
                "bonus": 21.9
            }
        },
        {
            "begin": {
                "atk": 189,
                "bonus": 21.9
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 216,
                "bonus": 25.3
            }
        },
        {
            "begin": {
                "atk": 236,
                "bonus": 25.3
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 263,
                "bonus": 28.8
            }
        },
        {
            "begin": {
                "atk": 282,
                "bonus": 28.8
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 309,
                "bonus": 32.2
            }
        },
        {
            "begin": {
                "atk": 329,
                "bonus": 32.2
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 355,
                "bonus": 35.6
            }
        },
        {
            "begin": {
                "atk": 375,
                "bonus": 35.6
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 401,
                "bonus": 39
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "라이언 투사의 족쇄",
                    "amount": 2
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 2
                },
                {
                    "name": "부서진 가면",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 2
                },
                {
                    "name": "혼돈의 장치",
                    "amount": 8
                },
                {
                    "name": "부서진 가면",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "라이언 투사의 쇠사슬",
                    "amount": 4
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 4
                },
                {
                    "name": "오염된 가면",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 2
                },
                {
                    "name": "혼돈의 회로",
                    "amount": 8
                },
                {
                    "name": "오염된 가면",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "라이언 투사의 수갑",
                    "amount": 4
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 6
                },
                {
                    "name": "불길한 가면",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "라이언 투사의 이념",
                    "amount": 3
                },
                {
                    "name": "혼돈의 노심",
                    "amount": 12
                },
                {
                    "name": "불길한 가면",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/11/Weapon_Otherworldly_Story.png/revision/latest/scale-to-width-down/512?cb=20201116034636",
    skills: [
      {
        name: "에너지 샤워",
        description: "원소 입자 또는 원소 구슬 획득 시 HP를 1/1.25/1.5/1.75/2% 회복한다."
      }
    ],
    origin: "기원",
    keyword: [],
  },
  "비취 오브": {
    "name": "비취 오브",
    "type": "법구",
    "level": 3,
    "bonus": "원소 마스터리",
    "bonusType": "number",
    "stat": [
        {
            "begin": {
                "atk": 40,
                "bonus": 20
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 102,
                "bonus": 36
            }
        },
        {
            "begin": {
                "atk": 121,
                "bonus": 36
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 187,
                "bonus": 53
            }
        },
        {
            "begin": {
                "atk": 207,
                "bonus": 53
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 239,
                "bonus": 61
            }
        },
        {
            "begin": {
                "atk": 259,
                "bonus": 61
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 292,
                "bonus": 69
            }
        },
        {
            "begin": {
                "atk": 311,
                "bonus": 69
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 344,
                "bonus": 77
            }
        },
        {
            "begin": {
                "atk": 363,
                "bonus": 77
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 396,
                "bonus": 85
            }
        },
        {
            "begin": {
                "atk": 415,
                "bonus": 85
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 448,
                "bonus": 94
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "고운한림의 매끄러운 모래",
                    "amount": 2
                },
                {
                    "name": "사냥꾼의 제도",
                    "amount": 2
                },
                {
                    "name": "보물찾기 까마귀 휘장",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "고운한림의 휘암",
                    "amount": 2
                },
                {
                    "name": "사냥꾼의 제도",
                    "amount": 8
                },
                {
                    "name": "보물찾기 까마귀 휘장",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "고운한림의 휘암",
                    "amount": 4
                },
                {
                    "name": "특수 요원의 제도",
                    "amount": 4
                },
                {
                    "name": "실버 까마귀 휘장",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "고운한림의 해골",
                    "amount": 2
                },
                {
                    "name": "특수 요원의 제도",
                    "amount": 8
                },
                {
                    "name": "실버 까마귀 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "고운한림의 해골",
                    "amount": 4
                },
                {
                    "name": "검사관의 제도",
                    "amount": 6
                },
                {
                    "name": "골드 까마귀 휘장",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "고운한림의 신체",
                    "amount": 3
                },
                {
                    "name": "검사관의 제도",
                    "amount": 12
                },
                {
                    "name": "골드 까마귀 휘장",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/7/7c/Weapon_Emerald_Orb.png/revision/latest/scale-to-width-down/512?cb=20201120003056",
    skills: [
      {
        name: "급류",
        description: "증발, 감전, 빙결, 물 원소 확산 반응 후 12초 동안 공격력이 20/25/30/35/40% 증가한다."
      }
    ],
    origin: "기원",
    keyword: [],
  },
  "1급 보옥": {
    "name": "1급 보옥",
    "type": "법구",
    "level": 3,
    "bonus": "치명타 확률",
    "bonusType": "percent",
    "stat": [
        {
            "begin": {
                "atk": 40,
                "bonus": 3.4
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 102,
                "bonus": 6
            }
        },
        {
            "begin": {
                "atk": 121,
                "bonus": 6
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 187,
                "bonus": 8.8
            }
        },
        {
            "begin": {
                "atk": 207,
                "bonus": 8.8
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 239,
                "bonus": 10.1
            }
        },
        {
            "begin": {
                "atk": 259,
                "bonus": 10.1
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 292,
                "bonus": 11.5
            }
        },
        {
            "begin": {
                "atk": 311,
                "bonus": 11.5
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 344,
                "bonus": 12.9
            }
        },
        {
            "begin": {
                "atk": 363,
                "bonus": 12.9
            },
            "start": 70,
            "last": 80,
            "end": {
                "atk": 396,
                "bonus": 14.2
            }
        },
        {
            "begin": {
                "atk": 415,
                "bonus": 14.2
            },
            "start": 80,
            "last": 90,
            "end": {
                "atk": 448,
                "bonus": 15.6
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    "name": "안개구름 속의 흑연단",
                    "amount": 2
                },
                {
                    "name": "안개꽃 가루",
                    "amount": 2
                },
                {
                    "name": "신병의 휘장",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    "name": "안개구름 속의 수은단",
                    "amount": 2
                },
                {
                    "name": "안개꽃 가루",
                    "amount": 8
                },
                {
                    "name": "신병의 휘장",
                    "amount": 5
                }
            ],
            "price": 10000
        },
        {
            "start": 50,
            "items": [
                {
                    "name": "안개구름 속의 수은단",
                    "amount": 4
                },
                {
                    "name": "안개풀 주머니",
                    "amount": 4
                },
                {
                    "name": "사관의 휘장",
                    "amount": 4
                }
            ],
            "price": 15000
        },
        {
            "start": 60,
            "items": [
                {
                    "name": "안개구름 속의 금단",
                    "amount": 2
                },
                {
                    "name": "안개풀 주머니",
                    "amount": 8
                },
                {
                    "name": "사관의 휘장",
                    "amount": 6
                }
            ],
            "price": 20000
        },
        {
            "start": 70,
            "items": [
                {
                    "name": "안개구름 속의 금단",
                    "amount": 4
                },
                {
                    "name": "안개 등심",
                    "amount": 6
                },
                {
                    "name": "위관의 휘장",
                    "amount": 4
                }
            ],
            "price": 25000
        },
        {
            "start": 80,
            "items": [
                {
                    "name": "안개구름 속의 전환",
                    "amount": 3
                },
                {
                    "name": "안개 등심",
                    "amount": 12
                },
                {
                    "name": "위관의 휘장",
                    "amount": 8
                }
            ],
            "price": 30000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/e/e3/Weapon_Twin_Nephrite.png/revision/latest/scale-to-width-down/512?cb=20201119201412",
    skills: [
      {
        name: "급습 전술",
        description: "적을 처치한 후 15초 동안 이동 속도와 공격력이 12/14/16/18/20% 증가한다."
      }
    ],
    origin: "상자",
    keyword: []
  },
  "포켓 주술서": {
    name: "포켓 주술서",
    "type": "법구",
    "level": 2,
    "stat": [
        {
            "begin": {
                "atk": 33,
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 80
            }
        },
        {
            "begin": {
                "atk": 91
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 139
            }
        },
        {
            "begin": {
                "atk": 151
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 174,
            }
        },
        {
            "begin": {
                "atk": 186
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 209
            }
        },
        {
            "begin": {
                "atk": 220
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 243
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "고탑 왕의 잔해",
                    "amount": 1
                },
                {
                    name: "무거운 나팔",
                    "amount": 1
                },
                {
                    name: "부서진 가면",
                    "amount": 1
                }
            ],
            "price": 5000
        },
        {
            "start": 40,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 1
                },
                {
                    name: "무거운 나팔",
                    "amount": 5
                },
                {
                    name: "부서진 가면",
                    "amount": 4
                }
            ],
            "price": 5000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 3
                },
                {
                    name: "흑동 나팔",
                    "amount": 3
                },
                {
                    name: "오염된 가면",
                    "amount": 3
                }
            ],
            "price": 10000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 1
                },
                {
                    name: "흑동 나팔",
                    "amount": 5
                },
                {
                    name: "오염된 가면",
                    "amount": 4
                }
            ],
            "price": 15000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/1/16/Weapon_Pocket_Grimoire.png/revision/latest/scale-to-width-down/512?cb=20201119204545",
    origin: "기원",
    keyword: [],
  },
  "학도의 노트": {
    name: "학도의 노트",
    "type": "",
    "level": 1,
    "stat": [
        {
            "begin": {
                "atk": 23,
            },
            "start": 1,
            "last": 20,
            "end": {
                "atk": 56
            }
        },
        {
            "begin": {
                "atk": 68
            },
            "start": 20,
            "last": 40,
            "end": {
                "atk": 102
            }
        },
        {
            "begin": {
                "atk": 113
            },
            "start": 40,
            "last": 50,
            "end": {
                "atk": 130,
            }
        },
        {
            "begin": {
                "atk": 141
            },
            "start": 50,
            "last": 60,
            "end": {
                "atk": 158
            }
        },
        {
            "begin": {
                "atk": 169
            },
            "start": 60,
            "last": 70,
            "end": {
                "atk": 185
            }
        }
    ],
    "ascension": [
        {
            "start": 20,
            "items": [
                {
                    name: "고탑 왕의 잔해",
                    "amount": 1
                },
                {
                    name: "무거운 나팔",
                    "amount": 1
                },
                {
                    name: "부서진 가면",
                    "amount": 1
                }
            ],
            "price": 0
        },
        {
            "start": 40,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 1
                },
                {
                    name: "무거운 나팔",
                    "amount": 4
                },
                {
                    name: "부서진 가면",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 50,
            "items": [
                {
                    name: "고탑 왕의 절망",
                    "amount": 2
                },
                {
                    name: "흑동 나팔",
                    "amount": 2
                },
                {
                    name: "오염된 가면",
                    "amount": 2
                }
            ],
            "price": 5000
        },
        {
            "start": 60,
            "items": [
                {
                    name: "고탑 왕의 조각",
                    "amount": 1
                },
                {
                    name: "흑동 나팔",
                    "amount": 4
                },
                {
                    name: "오염된 가면",
                    "amount": 3
                }
            ],
            "price": 10000
        }
    ],
    image: "https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Weapon_Apprentice%27s_Notes.png/revision/latest/scale-to-width-down/512?cb=20201119233859",
    origin: "기원",
    keyword: [],
  }
}


const expList = {
  1: [
    125,
    200,
    275,
    350,
    475,
    575,
    700,
    850,
    1000,
    1150,
    1300,
    1475,
    1650,
    1850,
    2050,
    2250,
    2450,
    2675,
    2925,
    3150,
    3575,
    3825,
    4100,
    4400,
    4700,
    5000,
    5300,
    5600,
    5925,
    6275,
    6600,
    6950,
    7325,
    7675,
    8050,
    8425,
    8825,
    9225,
    9625,
    10025,
    10975,
    11425,
    11875,
    12350,
    1285,
    13300,
    13775,
    14275,
    14800,
    15300,
    16625,
    17175,
    17725,
    18300,
    18875,
    19475,
    20075,
    20675,
    21300,
    21925,
    23675,
    24350,
    25025,
    25700,
    26400,
    27125,
    27825,
    28550,
    29275
  ],
  2: [
    175,
    275,
    400,
    550,
    700,
    875,
    1050,
    1250,
    1475,
    1700,
    1950,
    2225,
    2475,
    2775,
    3050,
    3375,
    3700,
    4025,
    4375,
    4725,
    5300,
    5750,
    6175,
    6600,
    7025,
    7475,
    7950,
    8425,
    8900,
    9400,
    9900,
    10450,
    10975,
    11525,
    12075,
    12650,
    13225,
    13825,
    14425,
    15050,
    16450,
    17125,
    17825,
    18525,
    19225,
    19950,
    20675,
    21425,
    22125,
    22950,
    24925,
    25750,
    26600,
    27450,
    28325,
    29225,
    30100,
    31025,
    31950,
    32875,
    35500,
    36500,
    37525,
    38575,
    39600,
    40675,
    41750,
    42825,
    43900
  ],
  3: [
    275,
    425,
    600,
    800,
    1025,
    1275,
    1550,
    1850,
    2175,
    2500,
    2875,
    3250,
    3650,
    4050,
    4500,
    4950,
    5400,
    5900,
    6425,
    6925,
    7850,
    8425,
    9050,
    9675,
    10325,
    10975,
    11650,
    12350,
    13050,
    13800,
    14525,
    15300,
    16100,
    16900,
    17700,
    18550,
    19400,
    20275,
    21175,
    22050,
    24150,
    25125,
    26125,
    27150,
    28200,
    29250,
    30325,
    31425,
    32550,
    33650,
    36550,
    37775,
    39000,
    40275,
    41550,
    42850,
    44150,
    45550,
    46850,
    48225,
    52075,
    53550,
    55050,
    56550,
    58100,
    59650,
    61225,
    62800,
    64400,
    66025,
    71075,
    72825,
    74575,
    76350,
    78150,
    80000,
    81850,
    83700,
    85575,
    87500,
    103275,
    116075,
    130425,
    146500,
    164550,
    184775,
    207400,
    232775,
    261200
  ],
  4: [
    400,
    625,
    900,
    1200,
    1550,
    1950,
    2350,
    2800,
    3300,
    3800,
    4350,
    4925,
    5525,
    6150,
    6800,
    7500,
    8200,
    8950,
    9725,
    10500,
    11900,
    12775,
    13700,
    14650,
    15625,
    16625,
    17650,
    18700,
    19775,
    20900,
    22025,
    23200,
    24375,
    25600,
    26825,
    28100,
    29400,
    30725,
    32075,
    33425,
    36575,
    38075,
    39600,
    41150,
    42725,
    44325,
    45950,
    47600,
    49300,
    51000,
    55375,
    57225,
    59100,
    61025,
    62950,
    64925,
    66900,
    68925,
    70975,
    73050,
    78900,
    81125,
    83400,
    85700,
    88025,
    90375,
    92750,
    95150,
    97575,
    100050,
    107675,
    110325,
    113000,
    115700,
    118425,
    121200,
    124000,
    126825,
    129675,
    132575,
    156475,
    175875,
    197600,
    221975,
    249300,
    279950,
    314250,
    352700,
    395775
  ],
  5: [
    600,
    950,
    1350,
    1800,
    2325,
    2925,
    3525,
    4200,
    4950,
    5700,
    6525,
    7400,
    8300,
    9225,
    1022,
    11250,
    12300,
    13425,
    14600,
    15750,
    17850,
    19175,
    20550,
    21975,
    23450,
    24950,
    26475,
    28050,
    29675,
    31350,
    33050,
    34800,
    36575,
    38400,
    40250,
    42150,
    44100,
    46100,
    48125,
    50150,
    54875,
    57125,
    59400,
    61725,
    64100,
    66500,
    68925,
    71400,
    73950,
    76500,
    83075,
    85850,
    88650,
    91550,
    94425,
    97400,
    100350,
    103400,
    106475,
    109575,
    118350,
    121700,
    125100,
    128550,
    132050,
    135575,
    139125,
    142725,
    146375,
    150075,
    161525,
    165500,
    169500,
    173550,
    177650,
    181800,
    186000,
    190250,
    194525,
    198875,
    234725,
    263825,
    296400,
    332975,
    373950,
    419925,
    471375,
    529050,
    593675
  ]
}

const wp_icons = {
  "한손검": "https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png/revision/latest/scale-to-width-down/64?cb=20210413210800",
  "양손검": "https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/revision/latest/scale-to-width-down/64?cb=20210413210803",
  "장병기": "https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/revision/latest/scale-to-width-down/64?cb=20210413210804",
  "법구": "https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png/revision/latest/scale-to-width-down/64?cb=20210413210802",
  "활": "https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png/revision/latest/scale-to-width-down/128?cb=20210413210801"
}

const rateColor = {
  5: "#b46e2c",
  4: "#a256e1",
  3: "#507dc7",
  2: "#299072",
  1: "#72778b"
}

module.exports.wp = wp;

const {searchMaterial} = require("../data/material.js");

function searchWeapon(string) {
  string = string.replace(/\s/g, "");

  for(var i in wp) {
    var name = i.replace(/\s/g, "");
    var keyword = wp[i]["keyword"] ? wp[i]["keyword"].map(x => x.replace(/\s/g, "")) : [];
    if(string == name || keyword.indexOf(string) >= 0) {
      return wp[i];
    }
  }
  return false;
}

function filterWeapon(options) {
  var items = [];
  var bonus, level, type;
  var items = [];
  var argv = options.split(" ");
  if(options.length == 0) {
    argv = [];
  }

  for(var j = 0; j < argv.length; j++) {
    if(parseInt(argv[j]) != NaN && Number(argv[j]) >= 1 && Number(argv[j]) <= 5) {
      level = Number(argv[j]);
    }else if(parseInt(argv[j].replace("성", "")) != NaN && Number(argv[j].replace("성", "")) >= 1 && Number(argv[j].replace("성", "")) <= 5) {
      level = Number(argv[j].replace("성", ""));
    }
  }

  for(var i in wp) {
    if(options.replace(/\s/g, "").indexOf(wp[i]["additional"].split(" ").join("")) >= 0) {
        bonus = wp[i]["additional"];
    }else if(options.indexOf(wp[i][type]) >= 0) {
      type = i;
    }
    for(var k = 0; k < wp[i]["required_items"].length; k++) {
      var curr = wp[i]["required_items"][k];
      if(options.replace(/\s/g, "").indexOf(curr.replace(/\s/g, "")) >= 0) {
        if(items.indexOf(wp[i]["required_items"][k]) == -1) {
          items.push(wp[i]["required_items"][k]);
        }
      }
    }
  }

  var lists = [];

  for(i in wp) {
    var arr = [];
    var t = (wp[i][type] == type) || type == undefined;
    var l = (wp[i][level] == level) || level == undefined;
    var b = (wp[i]["additional"] == bonus) || bonus == undefined;

    if((argv.length > 0 && (t && l && b)) || argv.length == 0) {
      lists.push(wp[i]);
    }
  }

  if(type == undefined && level == undefined && bonus == undefined && argv.length > 0) {
    lists = [];
  }
  return lists;
}

function createWeaponEmbed(data) {
  var embed = new MessageEmbed();
  embed.setTitle(`${data["name"]} [${data["level"]}★ ${data["type"]}]`);
  embed.setThumbnail(data["image"]);
  embed.setColor(rateColor[data["level"]]);
  var stat = data["stat"];
  var init_atk = stat[0]["begin"]["atk"];
  var final_atk = stat[stat.length - 1]["end"]["atk"];

  var description = "**기초공격력**: " + String(init_atk) + " => " + String(final_atk);
  description += "\n";

  if(data["bonus"]) {
    var additional_stat = String(stat[stat.length - 1]["end"]["bonus"]);
    if(data["bonusType"] == "percent") {
      additional_stat += "%";
    }

    description += "**추가능력치**: " + data["bonus"] + " (+" + additional_stat + ")";
    description += "\n\n";
  }
  if(data["skills"]) {
    description += "**무기스킬**: " + data["skills"][0]["name"] + "\n" + data["skills"][0]["description"];
    description += "\n\n";
  }else {
    description += "**무기스킬**: 미공개";
    description += "\n\n";
  }

  if(data["origin"]) {
    description += "**획득처**: " + data["origin"];
    description += "\n";
  }else {
    description += "**획득처**: 미공개";
    description += "\n";
  }

  if(data["forge"]) {
    description += "**단조재료:** " + data["forge"].map(x => x["name"] + " x " + x["amount"]).join(", ");
    description += "\n\n";
  }

  if(data["ascension"]) {
    var ascension = data["ascension"];
    var last = ascension[ascension.length - 1];
    description += "**돌파재료:** " + last["items"].map(x => x["name"]).join(", ");
  }else {
    description += "**돌파재료:** 미공개";
  }

  description += "\n";
  embed.setDescription(description);
  return embed;
}

function createWeaponAscensionEmbedBrief(data) {
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

  embed.setTitle(`${data["name"]}의 돌파 정보`);
  embed.setColor("#ffffff");
  embed.setThumbnail(data["image"]);
  embed.setDescription(description);
  return embed;
}

function calculateLevelStat (weapon, level) {
  var stat = weapon["stat"];
  var maxLevel = stat[stat.length - 1]["last"];

  for(var i = 0; i < stat.length; i++) {
    //in the middle
    if((level >= stat[i]["start"] && level < stat[i]["last"]) || (level == maxLevel && stat[i]["last"] == maxLevel)) {
      //성장 스탯
      var lvlRange = (stat[i]["last"] - stat[i]["start"])
      var curRange = level - stat[i]["start"];
      var atkVal = Math.floor(stat[i]["begin"]["atk"] + ((stat[i]["end"]["atk"] - stat[i]["begin"]["atk"]) / lvlRange) * curRange);
      var bonusVal =  stat[i]["begin"]["bonus"] ? Math.floor(stat[i]["begin"]["bonus"] + ((stat[i]["end"]["bonus"] - stat[i]["begin"]["bonus"]) / lvlRange) * curRange) : undefined;
      return [atkVal, bonusVal];
    }else if(level == stat[i]["last"]) {
      var init = [stat[i]["end"]["atk"], stat[i]["end"]["bonus"] ? Math.floor(stat[i]["end"]["bonus"]) : undefined];
      var next = [stat[i+1]["begin"]["atk"], stat[i + 1]["begin"]["bonus"] ? Math.floor(stat[i+1]["begin"]["bonus"]):undefined];
      return [i, init, next];
    }
  }
}

function createWeaponStatEmbed(data, level) {
  var get = calculateLevelStat(data, level);
  var embed = new MessageEmbed();
  embed.setThumbnail(data["image"]);
  embed.setColor("#ffffff");
  embed.setTitle(level + "레벨 " + data["name"] + `의 기초 스탯`);
  var description = "";
  if(get.length == 2) {
    description += "**기초 공격력: **" + get[0] + "\n";
    if(data["bonusType"] && data["bonusType"] == "percent") {
      description += "**" + data["bonus"] + ": **" + get[1] + "%";
    }else if(data["bonusType"]){
      description += "**" + data["bonus"] + ": **" + get[1];
    }
  }else if(get.length == 3) {
    var first = get[1];
    var last = get[2];
    description += "**돌파 " + (get[0] + 1) + "단계 전과 후 비교** \n\n";
    description += "**기초 공격력: **" + first[0] + " => " + last[0] + "\n";
    if(data["bonusType"] && data["bonusType"] == "percent") {
      description += "**" + data["bonus"] + ": **" + first[1] + "%" + " => " + last[1] + "%";
    }else if(data["bonusType"]) {
      description += "**" + data["bonus"] + ": **" + first[1] + " => " + last[1];
    }
  }
  embed.setDescription(description);
  return embed;
}

function requiredWeaponAscensionEmbed(data, begin, end) {
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
    embed.setTitle(`${data["name"]} 돌파 ${begin}단계 돌파 정보`);
  }else {
    embed.setTitle(`${data["name"]} ${begin} ~ ${end}단계 돌파 정보`);
  }
  embed.setColor("#ffffff");
  embed.setThumbnail(data["image"]);
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

function createRequiredWeaponEmbed(data, begin, end, number) {
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
    embed.setThumbnail(data["image"]);
    embed.setDescription(description);
    embed.setColor("#ffffff");
    return embed;
  } else if(number == 1) {
    var first = calculateLevelStat(data, begin);
    var last = calculateLevelStat(data, end);
    var embed = new MessageEmbed();

    //if((beginAscend && first.length == 2) || (endAscend && last.length == 2)) return;

    if(first.length == 3) {
      first = (beginAscend) ? first[2] : first[1];
    }

    if(last.length == 3) {
      last = (endAscend) ? last[2] : last[1];
    }

    var description = "**기초스탯 변화**\n\n";
    description += "**기초 공격력: **" + first[0] + " => " + last[0] + "\n";
    if(data["bonus"]) {
      if(data["bonusType"] == "percent") {
        description += "**" + data["bonus"] + ": **" + first[1] + "%" + " => " + last[1] + "%";
      }else {
        description += "**" + data["bonus"] + ": **" + first[1] + " => " + last[1];
      }
      description += "\n\n";
    }

    var level = data["level"];

    var counter = 0;
    for(var i = begin; i < end; i++) {
      counter += expList[level][i - 1];
    }

    description += "**필요한 경험치:** " + counter + " exp";
    description += "\n";
    description += "**필요한 마법 광물 갯수:** " + Math.ceil(counter / 10000);


    embed.setTitle(`${data["name"]}의 레벨 ${begin} ~ ${end}`)
    embed.setThumbnail(data["image"]);
    embed.setDescription(description);
    embed.setColor("#ffffff");
    return embed;
  }
}


module.exports.rateColor = rateColor;
module.exports.searchWeapon = searchWeapon;
module.exports.filterWeapon = filterWeapon;
module.exports.createWeaponEmbed = createWeaponEmbed;
module.exports.createWeaponStatEmbed = createWeaponStatEmbed;
module.exports.createWeaponAscensionEmbedBrief = createWeaponAscensionEmbedBrief;
module.exports.requiredWeaponAscensionEmbed = requiredWeaponAscensionEmbed;
module.exports.createRequiredWeaponEmbed = createRequiredWeaponEmbed;
