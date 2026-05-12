const societyEvents = [

    {
        category: "Society",

        title: "凱咪的健康講座",

        description:
        "凱咪拉你去聽一場關於心理健康與壓力管理的講座。",

        choices: [

            {
                text: "認真去聽",
                money: 0,
                energy: -10,
                goal3: 12
            },

            {
                text: "太累了回宿舍睡覺",
                money: 0,
                energy: 15,
                goal3: -3
            },

            {
                text: "只去拿簽到分數",
                money: 0,
                energy: -3,
                goal4: 2
            }

        ]
    },

    {
        category: "Society",

        title: "顏萱的課業求救",

        description:
        "顏萱說她統計快爆炸了，問你能不能教她。",

        choices: [

            {
                text: "耐心教她",
                money: 0,
                energy: -18,
                goal4: 12
            },

            {
                text: "傳你自己的筆記給她",
                money: 0,
                energy: -5,
                goal4: 6
            },

            {
                text: "叫她自己去問老師",
                money: 0,
                energy: 5,
                goal4: -3
            }

        ]
    },

    {
        category: "Society",

        title: "系上公益便當",

        description:
        "系學會發起公益便當活動，幫助弱勢家庭。",

        choices: [

            {
                text: "買一份支持",
                money: -80,
                energy: 0,
                goal1: 8,
                goal2: 8
            },

            {
                text: "幫忙宣傳活動",
                money: 0,
                energy: -10,
                goal1: 5,
                goal2: 5
            },

            {
                text: "覺得跟我無關",
                money: 0,
                energy: 5,
                goal1: -3
            }

        ]
    },

    {
        category: "Society",

        title: "安娜的性別平等海報",

        description:
        "安娜要做性別平等宣導海報，問你要不要幫忙。",

        choices: [

            {
                text: "一起設計海報",
                money: 0,
                energy: -15,
                goal5: 12
            },

            {
                text: "幫她找資料",
                money: 0,
                energy: -8,
                goal5: 6
            },

            {
                text: "覺得這不重要",
                money: 0,
                energy: 5,
                goal5: -5
            }

        ]
    },

    {
        category: "Society",

        title: "柔苡的無障礙提醒",

        description:
        "柔苡發現教室門口堆了雜物，輪椅同學不好通過。",

        choices: [

            {
                text: "主動把雜物移開",
                money: 0,
                energy: -8,
                goal10: 10
            },

            {
                text: "通知助教處理",
                money: 0,
                energy: -3,
                goal10: 6
            },

            {
                text: "假裝沒看到",
                money: 0,
                energy: 5,
                goal10: -5
            }

        ]
    },

    {
        category: "Society",

        title: "千千的剩食關懷",

        description:
        "千千想把活動剩下的餐點送給需要的人。",

        choices: [

            {
                text: "幫忙整理餐點",
                money: 0,
                energy: -12,
                goal2: 10
            },

            {
                text: "幫忙聯絡社福單位",
                money: 0,
                energy: -8,
                goal2: 8,
                goal10: 3
            },

            {
                text: "自己先打包回家",
                money: 50,
                energy: 3,
                goal2: -5
            }

        ]
    },

    {
        category: "Society",

        title: "松義霖的志工時數",

        description:
        "松義霖問你要不要一起去當課輔志工。",

        choices: [

            {
                text: "去陪小朋友讀書",
                money: 0,
                energy: -25,
                goal4: 15
            },

            {
                text: "捐幾本參考書",
                money: -100,
                energy: -3,
                goal4: 7
            },

            {
                text: "我自己的作業都寫不完",
                money: 0,
                energy: 12,
                goal4: -3
            }

        ]
    },

    {
        category: "Society",

        title: "校園霸凌留言",

        description:
        "你看到班群有人嘲笑同學的外表。",

        choices: [

            {
                text: "私訊關心被嘲笑的人",
                money: 0,
                energy: -8,
                goal10: 8
            },

            {
                text: "在群組提醒大家尊重",
                money: 0,
                energy: -12,
                goal10: 10
            },

            {
                text: "跟著按哈哈",
                money: 0,
                energy: 2,
                goal10: -10
            }

        ]
    },

    {
        category: "Society",

        title: "健康午餐選擇",

        description:
        "午餐時間到了，你最近常熬夜又吃很油。",

        choices: [

            {
                text: "選均衡便當",
                money: -90,
                energy: 8,
                goal3: 8
            },

            {
                text: "繼續炸雞加珍奶",
                money: -150,
                energy: 15,
                goal3: -8
            },

            {
                text: "不吃了省錢",
                money: 80,
                energy: -15,
                goal3: -5
            }

        ]
    },

    {
        category: "Society",

        title: "師皇家的獎學金資訊",

        description:
        "師皇家發現一個弱勢學生獎學金資訊，問你要不要幫忙分享。",

        choices: [

            {
                text: "整理成懶人包分享",
                money: 0,
                energy: -12,
                goal1: 8,
                goal10: 6
            },

            {
                text: "轉傳到班群",
                money: 0,
                energy: -3,
                goal1: 5
            },

            {
                text: "怕麻煩就算了",
                money: 0,
                energy: 4,
                goal1: -3
            }

        ]
    },

    {
        category: "Society",

        title: "國小閱讀營",

        description:
        "學校要辦偏鄉國小閱讀營，需要大學生協助。",

        choices: [

            {
                text: "報名帶活動",
                money: -50,
                energy: -30,
                goal4: 15,
                goal10: 5
            },

            {
                text: "捐二手童書",
                money: -30,
                energy: -5,
                goal4: 8
            },

            {
                text: "覺得太遠不去",
                money: 0,
                energy: 10,
                goal4: -4
            }

        ]
    },

    {
        category: "Society",

        title: "安娜的社團招生",

        description:
        "安娜的公益社團缺人，她拜託你幫忙招生。",

        choices: [

            {
                text: "幫她做招生文宣",
                money: 0,
                energy: -15,
                goal10: 8
            },

            {
                text: "推薦幾個朋友",
                money: 0,
                energy: -5,
                goal10: 5
            },

            {
                text: "已讀不回",
                money: 0,
                energy: 5,
                goal10: -3
            }

        ]
    },

    {
        category: "Society",

        title: "月經平權提案",

        description:
        "學生會討論是否在校園提供免費生理用品。",

        choices: [

            {
                text: "支持並參與提案",
                money: 0,
                energy: -18,
                goal5: 12,
                goal10: 5
            },

            {
                text: "在社群分享資訊",
                money: 0,
                energy: -5,
                goal5: 6
            },

            {
                text: "覺得不關我的事",
                money: 0,
                energy: 5,
                goal5: -5
            }

        ]
    },

    {
        category: "Society",

        title: "宿舍室友低落",

        description:
        "你的室友最近看起來很低落，常常不說話。",

        choices: [

            {
                text: "主動關心她",
                money: 0,
                energy: -10,
                goal3: 10
            },

            {
                text: "陪她去諮商中心",
                money: 0,
                energy: -18,
                goal3: 15
            },

            {
                text: "不要多管閒事",
                money: 0,
                energy: 5,
                goal3: -6
            }

        ]
    },

    {
        category: "Society",

        title: "食物銀行活動",

        description:
        "附近社區正在募集罐頭與乾糧給需要的家庭。",

        choices: [

            {
                text: "買一些物資捐出",
                money: -150,
                energy: -5,
                goal1: 8,
                goal2: 10
            },

            {
                text: "幫忙搬運分類",
                money: 0,
                energy: -25,
                goal2: 12
            },

            {
                text: "自己最近也很窮",
                money: 0,
                energy: 5,
                goal1: -2
            }

        ]
    }

];