const developmentEvents = [

    {
        category: "Development",

        title: "松義霖的 AI 專題",

        description:
        "松義霖想找你一起做 AI 永續應用專題。",

        choices: [

            {
                text: "一起研究",
                money: 0,
                energy: -25,
                goal9: 12
            },

            {
                text: "只幫忙做簡報",
                money: 0,
                energy: -10,
                goal9: 5
            },

            {
                text: "我只想躺平",
                money: 0,
                energy: 15,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        title: "智慧校園提案",

        description:
        "學校舉辦智慧校園創意競賽。",

        choices: [

            {
                text: "提出節能系統",
                money: -50,
                energy: -20,
                goal9: 10,
                goal11: 5
            },

            {
                text: "跟朋友組隊混分",
                money: 0,
                energy: -8,
                goal9: 2
            },

            {
                text: "完全不參加",
                money: 0,
                energy: 8,
                goal9: -3
            }

        ]
    },

    {
        category: "Development",

        title: "凱咪的共享機車",

        description:
        "凱咪推薦你使用共享機車系統。",

        choices: [

            {
                text: "試著使用看看",
                money: -30,
                energy: 10,
                goal11: 8
            },

            {
                text: "還是自己騎車",
                money: -80,
                energy: 12,
                goal11: -4
            },

            {
                text: "搭大眾運輸",
                money: -15,
                energy: -8,
                goal11: 10
            }

        ]
    },

    {
        category: "Development",

        title: "校園太陽能計畫",

        description:
        "教授想推動宿舍屋頂太陽能計畫。",

        choices: [

            {
                text: "加入規劃團隊",
                money: 0,
                energy: -30,
                goal7: 15
            },

            {
                text: "幫忙做資料整理",
                money: 0,
                energy: -10,
                goal7: 6
            },

            {
                text: "覺得太麻煩",
                money: 0,
                energy: 8,
                goal7: -4
            }

        ]
    },

    {
        category: "Development",

        title: "安娜的創業夢",

        description:
        "安娜想創立永續商品平台。",

        choices: [

            {
                text: "加入創業團隊",
                money: -200,
                energy: -35,
                goal8: 10,
                goal9: 10
            },

            {
                text: "幫她測試網站",
                money: 0,
                energy: -10,
                goal9: 5
            },

            {
                text: "感覺會倒閉",
                money: 0,
                energy: 5,
                goal8: -3
            }

        ]
    },

    {
        category: "Development",

        title: "校園充電站",

        description:
        "學校想新增電動車充電站。",

        choices: [

            {
                text: "支持建設",
                money: -30,
                energy: -5,
                goal7: 8,
                goal11: 5
            },

            {
                text: "擔心浪費經費",
                money: 0,
                energy: 3,
                goal11: -2
            },

            {
                text: "完全不在意",
                money: 0,
                energy: 5,
                goal11: -5
            }

        ]
    },

    {
        category: "Development",

        title: "數位學習平台",

        description:
        "教授推薦你使用新的 AI 學習平台。",

        choices: [

            {
                text: "認真研究功能",
                money: -50,
                energy: -20,
                goal9: 10
            },

            {
                text: "只拿來抄答案",
                money: 0,
                energy: 5,
                goal4: -5
            },

            {
                text: "完全不用",
                money: 0,
                energy: 3,
                goal9: -3
            }

        ]
    },

    {
        category: "Development",

        title: "昕昕的智慧家電",

        description:
        "昕昕想買智慧節電插座。",

        choices: [

            {
                text: "一起研究節能",
                money: -200,
                energy: -10,
                goal7: 10
            },

            {
                text: "普通插座就好",
                money: 0,
                energy: 3,
                goal7: -3
            },

            {
                text: "直接全部不關電",
                money: -100,
                energy: 10,
                goal7: -8
            }

        ]
    },

    {
        category: "Development",

        title: "智慧交通測試",

        description:
        "市政府開放智慧公車系統測試。",

        choices: [

            {
                text: "下載 App 測試",
                money: 0,
                energy: -8,
                goal11: 10
            },

            {
                text: "還是亂等公車",
                money: 0,
                energy: -5,
                goal11: -2
            },

            {
                text: "直接搭 Uber",
                money: -200,
                energy: 12,
                goal11: -6
            }

        ]
    },

    {
        category: "Development",

        title: "柔苡的黑客松",

        description:
        "柔苡找你參加 SDGs 黑客松競賽。",

        choices: [

            {
                text: "熬夜寫程式",
                money: 0,
                energy: -40,
                goal9: 15
            },

            {
                text: "負責 UI 設計",
                money: 0,
                energy: -18,
                goal9: 8
            },

            {
                text: "當吉祥物",
                money: 0,
                energy: 5,
                goal9: -2
            }

        ]
    },

    {
        category: "Development",

        title: "校園免費 Wi-Fi",

        description:
        "學校想升級免費 Wi-Fi 系統。",

        choices: [

            {
                text: "支持升級",
                money: -20,
                energy: -5,
                goal9: 8
            },

            {
                text: "覺得現在就夠了",
                money: 0,
                energy: 3,
                goal9: -2
            },

            {
                text: "偷用別人的熱點",
                money: 20,
                energy: 0,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        title: "AI 自動點名系統",

        description:
        "教授想導入 AI 點名辨識系統。",

        choices: [

            {
                text: "覺得很方便",
                money: 0,
                energy: -5,
                goal9: 8
            },

            {
                text: "擔心隱私問題",
                money: 0,
                energy: -3,
                goal16: 5
            },

            {
                text: "研究怎麼破解",
                money: 0,
                energy: -15,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        title: "宿舍電梯維修",

        description:
        "宿舍老舊電梯常常故障。",

        choices: [

            {
                text: "支持更新設備",
                money: -50,
                energy: -5,
                goal11: 10
            },

            {
                text: "反正我住低樓層",
                money: 0,
                energy: 3,
                goal11: -3
            },

            {
                text: "每天走樓梯",
                money: 0,
                energy: -20,
                goal3: 5
            }

        ]
    },

    {
        category: "Development",

        title: "校園機器人展",

        description:
        "資訊系正在展出 AI 與機器人技術。",

        choices: [

            {
                text: "認真參觀學習",
                money: -30,
                energy: -10,
                goal9: 10
            },

            {
                text: "只去拍照打卡",
                money: -10,
                energy: 5,
                goal9: 1
            },

            {
                text: "覺得很無聊",
                money: 0,
                energy: 8,
                goal9: -3
            }

        ]
    },

    {
        category: "Development",

        title: "低碳智慧城市",

        description:
        "你參加了一場智慧城市論壇。",

        choices: [

            {
                text: "認真做筆記",
                money: 0,
                energy: -15,
                goal11: 12
            },

            {
                text: "滑手機聽演講",
                money: 0,
                energy: 3,
                goal11: 0
            },

            {
                text: "直接翹掉",
                money: 0,
                energy: 10,
                goal11: -5
            }

        ]
    }

];