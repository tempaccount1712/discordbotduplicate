var slashs = [
{
  name: "cookie",
  description: "유저 전적을 검색하기 위한 HoyoLab 쿠키를 등록합니다.",
  options: [
    {
      name: "value",
      type: 3,
      description: "쿠키를 입력합니다.",
      required: true
    }
  ]
},
{
  name: "delete",
  description: "등록된 HoyoLab 쿠키를 삭제합니다."
},
{
  name: "character",
  description: "캐릭터의 데이터를 보여줍니다.",
  options: [
    {
      name: "name",
      type: 3,
      description: "캐릭터의 이름",
      required: true
    },
    {
      name: "option",
      type: 3,
      description: "캐릭터의 기초 스탯, 돌파 재료, 및 스킬 계수를 검색",
      required: false
    },
    {
      name: "level",
      type: 4,
      description: "추가 옵션의 레벨을 입력합니다."
    }
  ]
},
{
  name: "weapon",
  description: "무기의 데이터를 보여줍니다.",
  options: [
    {
      name: "name",
      type: 3,
      description: "무기 이름",
      required: true
    },
    {
      name: "option",
      type: 3,
      description: "무기의 기초 스탯 및 돌파 재료를 검색",
      required: false
    },
    {
      name: "level",
      type: 4,
      description: "추가 옵션의 레벨을 입력합니다."
    }
  ]
},
{
  name: "artifact",
  description: "성유물의 데이터를 보여줍니다.",
  options: [
    {
      name: "name",
      type: 3,
      description: "성유물 이름",
      required: true
    }
  ]
},
{
  name: "abyss",
  description: "유저의 나선비경을 검색"
},
{
  name: "info",
  description: "유저의 기본 데이터를 검색"
},
{
  name: "stat",
  description: "유저의 캐릭터 정보를 검색",
  options: [
    {
      name: "name",
      type: 3,
      description: "캐릭터의 이름",
      required: false
    }
  ]
},
{
  name: "redeem",
  description: "리딤코드를 검색",
  options: [
    {
      name: "code",
      type: 3,
      description: "리딤코드 입력",
      required: false
    }
  ]
},
{
  name: "day",
  description: "각 요일별 획득할 수 있는 재료를 보여줍니다.",
  options: [
    {
      name: "day",
      description: "선택하는 날. 기본값: 오늘 요일",
      choices: [
        {
          name: "월요일",
          value: "월요일",
        },
        {
          name: "화요일",
          value: "화요일",
        },
        {
          name: "수요일",
          value: "수요일",
        },
        {
          name: "목요일",
          value: "목요일",
        },
        {
          name: "금요일",
          value: "금요일",
        },
        {
          name: "토요일",
          value: "토요일",
        },
        {
          name: "일요일",
          value: "일요일",
        },
      ],
      type: 3
    }]
},
{
  name: "pickup",
  description: "기원을 보여줍니다"
},
{
  name: "map",
  description: "원신 맵의 링크를 보여줍니다",
  options: [
    {
      name: "material",
      description: "검색하실 재료를 입력합니다",
      type: 3,
      required: false
    }
  ]
},
{
  name: "checkin",
  description: "매일 출석처리를 합니다. (쿠키 미등록시 링크를 보여줍니다)",
  options: [
    {
      name: "auto",
      description: "출석체크를 자동으로 할지 설정합니다",
      type: 5
    }
  ]
},
{
  name: "setting",
  description: "봇의 알림 설정을 받을 채널을 설정합니다",
  options: [
    {
      name: "channel",
      description:"알림을 받을 채널을 설정합니다.",
      type: 7,
      required: true
    }
  ]
}
]

module.exports.slashs = slashs;
