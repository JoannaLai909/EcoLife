const globalEvents = [

    {
        category: "Global",

        title: "國際交換生的邀請",

        description:
        "交換生 Maya 想邀你一起參加國際文化交流活動。",

        choices: [

            {
                text: "一起參加",
                money: -5,
                energy: -10,
                goal17: 10
            },

            {
                text: "太尷尬了不想去",
                money: 0,
                energy: 5,
                goal17: -3
            },

            {
                text: "線上參加就好",
                money: 0,
                energy: -3,
                goal17: 5
            }

        ]
    },

    {
        category: "Global",

        title: "網路上的仇恨留言",

        description:
        "你看到有人在留言區惡意攻擊不同國家的人。",

        choices: [

            {
                text: "理性留言制止",
                money: 0,
                energy: -8,
                goal16: 8
            },

            {
                text: "直接加入吵架",
                money: 0,
                energy: -15,
                goal16: -10
            },

            {
                text: "假裝沒看到",
                money: 0,
                energy: 3,
                goal16: -2
            }

        ]
    },

    {
        category: "Global",

        title: "公平貿易咖啡",

        description:
        "你發現公平貿易咖啡比較貴。",

        choices: [

            {
                text: "支持公平貿易",
                money: -20,
                energy: 2,
                goal17: 7
            },

            {
                text: "買便宜的就好",
                money: 10,
                energy: 0,
                goal17: -4
            },

            {
                text: "今天不喝咖啡",
                money: 30,
                energy: -5,
                goal17: 2
            }

        ]
    },

    {
        category: "Global",

        title: "跨國合作專題",

        description:
        "教授邀請你加入跨國 SDGs 線上研究團隊。",

        choices: [

            {
                text: "加入團隊",
                money: 0,
                energy: -18,
                goal17: 12
            },

            {
                text: "太忙了拒絕",
                money: 0,
                energy: 10,
                goal17: -3
            },

            {
                text: "只參加部分會議",
                money: 0,
                energy: -8,
                goal17: 5
            }

        ]
    },

    {
        category: "Global",

        title: "假新聞轉發",

        description:
        "朋友傳來一篇來源不明的國際新聞。",

        choices: [

            {
                text: "先查證再分享",
                money: 0,
                energy: -5,
                goal16: 10
            },

            {
                text: "直接轉發",
                money: 0,
                energy: 0,
                goal16: -8
            },

            {
                text: "完全不理會",
                money: 0,
                energy: 3,
                goal16: 0
            }

        ]
    },

    {
        category: "Global",

        title: "國際志工招募",

        description:
        "學校正在招募偏鄉國際教育志工。",

        choices: [

            {
                text: "報名參加",
                money: -100,
                energy: -25,
                goal17: 15
            },

            {
                text: "太累了不想參加",
                money: 0,
                energy: 15,
                goal17: -3
            },

            {
                text: "捐點物資支持",
                money: -50,
                energy: 0,
                goal17: 5
            }

        ]
    },

    {
        category: "Global",

        title: "戰爭新聞直播",

        description:
        "你看到國際衝突的即時新聞直播。",

        choices: [

            {
                text: "了解事件背景",
                money: 0,
                energy: -5,
                goal16: 8
            },

            {
                text: "只看懶人包",
                money: 0,
                energy: 3,
                goal16: -2
            },

            {
                text: "開始在留言區亂嘴",
                money: 0,
                energy: -10,
                goal16: -10
            }

        ]
    },

    {
        category: "Global",

        title: "國際連署活動",

        description:
        "朋友邀你參與國際人權連署。",

        choices: [

            {
                text: "閱讀後參與",
                money: 0,
                energy: -6,
                goal16: 10
            },

            {
                text: "直接亂簽",
                money: 0,
                energy: -1,
                goal16: -3
            },

            {
                text: "不感興趣",
                money: 0,
                energy: 5,
                goal16: -2
            }

        ]
    },

    {
        category: "Global",

        title: "跨國線上會議",

        description:
        "你的專題需要半夜和國外學生開會。",

        choices: [

            {
                text: "熬夜參加",
                money: 0,
                energy: -25,
                goal17: 12
            },

            {
                text: "錄影看回放",
                money: 0,
                energy: -5,
                goal17: 5
            },

            {
                text: "直接缺席",
                money: 0,
                energy: 10,
                goal17: -5
            }

        ]
    },

    {
        category: "Global",

        title: "難民援助募款",

        description:
        "校園正在為國際難民進行募款。",

        choices: [

            {
                text: "捐款支持",
                money: -100,
                energy: 0,
                goal16: 10
            },

            {
                text: "分享活動資訊",
                money: 0,
                energy: -5,
                goal17: 5
            },

            {
                text: "滑過當沒看到",
                money: 0,
                energy: 5,
                goal16: -2
            }

        ]
    },

    {
        category: "Global",

        title: "國際文化週",

        description:
        "學校舉辦國際文化週活動。",

        choices: [

            {
                text: "體驗不同文化",
                money: -20,
                energy: -10,
                goal17: 10
            },

            {
                text: "只去拿免費食物",
                money: 20,
                energy: -2,
                goal17: -2
            },

            {
                text: "完全不參加",
                money: 0,
                energy: 5,
                goal17: -3
            }

        ]
    },

    {
        category: "Global",

        title: "國際論壇直播",

        description:
        "教授推薦你看聯合國永續論壇直播。",

        choices: [

            {
                text: "認真觀看",
                money: 0,
                energy: -8,
                goal17: 8
            },

            {
                text: "掛著當背景音",
                money: 0,
                energy: 2,
                goal17: 1
            },

            {
                text: "直接睡覺",
                money: 0,
                energy: 10,
                goal17: -3
            }

        ]
    },

    {
        category: "Global",

        title: "國際合作比賽",

        description:
        "你和不同國家的學生一起參加黑客松。",

        choices: [

            {
                text: "積極合作",
                money: 0,
                energy: -30,
                goal17: 15
            },

            {
                text: "只做自己的部分",
                money: 0,
                energy: -10,
                goal17: 3
            },

            {
                text: "完全擺爛",
                money: 0,
                energy: 15,
                goal17: -8
            }

        ]
    }

];