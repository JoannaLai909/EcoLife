const globalEvents = [

    {
        category: "Global",

        type: "normal",

        title: "國際交換生的邀請",

        description:
        "交換生 Judi 想邀你一起參加國際文化交流活動。",

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

        type: "normal",

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

        type: "normal",

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

        type: "normal",

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

        type: "normal",

        title: "假新聞轉發",

        description:
        "可云傳來一篇來源不明的國際新聞。",

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

        type: "normal",

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

        type: "normal",

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

        type: "normal",

        title: "國際連署活動",

        description:
        "Judi 邀你參與國際人權連署。",

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

        type: "normal",

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

        type: "normal",

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

        type: "normal",

        title: "國際文化週",

        description:
        "學校舉辦國際文化週活動。",

        choices: [

            {
                text: "體驗不同文化",
                money: -20,
                energy: -10,
                goal17: 20
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

        type: "normal",

        title: "國際論壇直播",

        description:
        "教授推薦你看聯合國永續論壇直播。",

        choices: [

            {
                text: "認真觀看",
                money: 0,
                energy: -8,
                goal17: 15
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

        type: "normal",

        title: "國際合作比賽",

        description:
        "你和不同國家的學生一起參加黑客松。",

        choices: [

            {
                text: "積極合作",
                money: 0,
                energy: -30,
                goal17: 20
            },

            {
                text: "只做自己的部分",
                money: 0,
                energy: -10,
                goal17: 5
            },

            {
                text: "完全擺爛",
                money: 0,
                energy: 15,
                goal17: -8
            }

        ]
    },

    {
        category: "Development",

        title: "校園 AI 助教",

        description:
        "學校正在測試 AI 助教系統。",

        choices: [

            {
                text: "主動試用回饋",
                money: 0,
                energy: -15,
                goal9: 15
            },

            {
                text: "只拿來查答案",
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

        title: "智慧回收機",

        description:
        "校園新增智慧回收機，可以自動分類垃圾。",

        choices: [

            {
                text: "認真研究功能",
                money: 5,
                energy: -10,
                goal9: 12,
                goal11: 10
            },

            {
                text: "亂塞進去",
                money: 0,
                energy: 3,
                goal11: -5
            },

            {
                text: "直接丟一般垃圾",
                money: 0,
                energy: 5,
                goal11: -8
            }

        ]
    },

    {
        category: "Development",

        title: "宿舍智慧電表",

        description:
        "宿舍開始測試智慧電表系統。",

        choices: [

            {
                text: "觀察用電變化",
                money: 20,
                energy: -5,
                goal7: 15
            },

            {
                text: "覺得很麻煩",
                money: 0,
                energy: 3,
                goal7: -3
            },

            {
                text: "偷偷接延長線",
                money: 30,
                energy: -8,
                goal7: -8
            }

        ]
    },

    {
        category: "Development",

        title: "凱咪的程式競賽",

        description:
        "凱咪邀你參加智慧城市程式競賽。",

        choices: [

            {
                text: "熬夜做專案",
                money: 0,
                energy: -35,
                goal9: 15
            },

            {
                text: "只幫忙做 PPT",
                money: 0,
                energy: -10,
                goal9: 4
            },

            {
                text: "直接放棄",
                money: 0,
                energy: 12,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        title: "校園共享雨傘",

        description:
        "學校推出共享雨傘系統。",

        choices: [

            {
                text: "使用後記得歸還",
                money: -10,
                energy: -3,
                goal11: 15
            },

            {
                text: "直接帶回家",
                money: 50,
                energy: 5,
                goal11: -8
            },

            {
                text: "淋雨回宿舍",
                money: 0,
                energy: -15,
                goal3: -3
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "國際環保論壇",

        description:
        "教授推薦你參加聯合國青年環保論壇直播。",

        choices: [

            {
                text: "認真參與討論",
                money: 0,
                energy: -15,
                goal17: 20
            },

            {
                text: "掛著當背景音",
                money: 0,
                energy: 3,
                goal17: 2
            },

            {
                text: "直接關掉",
                money: 0,
                energy: 8,
                goal17: -4
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "國際災難募款",

        description:
        "某國發生重大地震，學校正在募款。",

        choices: [

            {
                text: "捐款支持",
                money: -200,
                energy: 0,
                goal17: 10
            },

            {
                text: "分享募款資訊",
                money: 0,
                energy: -5,
                goal17: 5
            },

            {
                text: "覺得離我太遠",
                money: 0,
                energy: 5,
                goal17: -3
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "跨國線上筆友",

        description:
        "你收到一個韓國留學生祝祝的交流邀請。",

        choices: [

            {
                text: "認真交流文化",
                money: 0,
                energy: -10,
                goal17: 8
            },

            {
                text: "偶爾回訊息",
                money: 0,
                energy: -3,
                goal17: 3
            },

            {
                text: "直接已讀不回",
                money: 0,
                energy: 5,
                goal17: -3
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "國際和平連署",

        description:
        "扇煦邀請你參與反戰和平連署。",

        choices: [

            {
                text: "閱讀後參與",
                money: 0,
                energy: -8,
                goal16: 20
            },

            {
                text: "直接亂簽",
                money: 0,
                energy: -2,
                goal16: -3
            },

            {
                text: "完全不理",
                money: 0,
                energy: 5,
                goal16: -5
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "假新聞危機",

        description:
        "社群開始瘋傳一則未經查證的國際新聞。",

        choices: [

            {
                text: "查證後再分享",
                money: 0,
                energy: -8,
                goal16: 20
            },

            {
                text: "直接轉發",
                money: 0,
                energy: 2,
                goal16: -10
            },

            {
                text: "當作沒看到",
                money: 0,
                energy: 5,
                goal16: -2
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "公平貿易巧克力",

        description:
        "你發現公平貿易巧克力比較貴。",

        choices: [

            {
                text: "支持公平貿易",
                money: -80,
                energy: 2,
                goal17: 15
            },

            {
                text: "買最便宜的",
                money: 30,
                energy: 0,
                goal17: -5
            },

            {
                text: "今天不吃甜食",
                money: 50,
                energy: -3,
                goal17: 5
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "國際志工計畫",

        description:
        "學校正在招募海外教育志工。",

        choices: [

            {
                text: "報名參加",
                money: -500,
                energy: -35,
                goal17: 20
            },

            {
                text: "幫忙宣傳",
                money: 0,
                energy: -8,
                goal17: 10
            },

            {
                text: "太麻煩了",
                money: 0,
                energy: 10,
                goal17: -4
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "跨國合作黑客松",

        description:
        "你和外國學生一起參加 SDGs 黑客松。",

        choices: [

            {
                text: "積極合作",
                money: 0,
                energy: -40,
                goal17: 15
            },

            {
                text: "只做自己的部分",
                money: 0,
                energy: -12,
                goal17: 5
            },

            {
                text: "全程擺爛",
                money: 0,
                energy: 15,
                goal17: -8
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "國際文化節",

        description:
        "學校正在舉辦國際文化交流節。",

        choices: [

            {
                text: "體驗不同文化",
                money: -100,
                energy: -12,
                goal17: 10
            },

            {
                text: "只去吃免費食物",
                money: 50,
                energy: 3,
                goal17: -2
            },

            {
                text: "完全不參加",
                money: 0,
                energy: 8,
                goal17: -4
            }

        ]
    },

    {
        category: "Global",

        type: "normal",

        title: "網路言論衝突",

        description:
        "你看到有人在留言區攻擊不同國家的文化。",

        choices: [

            {
                text: "理性提醒對方",
                money: 0,
                energy: -10,
                goal16: 10
            },

            {
                text: "加入混戰",
                money: 0,
                energy: -20,
                goal16: -10
            },

            {
                text: "默默離開",
                money: 0,
                energy: 5,
                goal16: -2
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "國際活動翻譯工讀",

        description:
        "學校的國際交流活動需要臨時英文翻譯工讀生。",

        choices: [

            {
                text: "接下整場翻譯",
                money: 400,
                energy: -35,
                goal17: 12
            },

            {
                text: "只幫忙接待一小時",
                money: 120,
                energy: -10,
                goal17: 6
            },

            {
                text: "英文太緊張不接",
                money: 0,
                energy: 10
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "國際文化節攤位",

        description:
        "國際文化節正在招募攤位工作人員。",

        choices: [

            {
                text: "負責整天攤位",
                money: 350,
                energy: -30,
                goal17: 10
            },

            {
                text: "只幫忙晚上",
                money: 150,
                energy: -12,
                goal17: 5
            },

            {
                text: "不想社交",
                money: 0,
                energy: 15
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "海外交換分享會",

        description:
        "國際處邀請你分享交換經驗。",

        choices: [

            {
                text: "認真準備分享",
                money: 250,
                energy: -25,
                goal17: 12
            },

            {
                text: "簡單講一下",
                money: 100,
                energy: -8,
                goal17: 5
            },

            {
                text: "拒絕邀請",
                money: 0,
                energy: 10
            }

        ]
    },
    {
        category: "Global",

        type: "money",

        title: "國際論壇接待工讀",

        description:
        "國際論壇需要學生協助接待外國講者。",

        choices: [

            {
                text: "負責全天接待",
                money: 500,
                energy: -35,
                goal17: 10
            },

            {
                text: "只幫忙上午",
                money: 200,
                energy: -12,
                goal17: 5
            },

            {
                text: "怕英文不好拒絕",
                money: 0,
                energy: 8
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "SDGs 海報設計",

        description:
        "國際學生社團徵求 SDGs 宣傳海報設計。",

        choices: [

            {
                text: "接案設計",
                money: 350,
                energy: -20,
                goal17: 8
            },

            {
                text: "簡單幫忙排版",
                money: 100,
                energy: -6,
                goal17: 3
            },

            {
                text: "沒興趣",
                money: 0,
                energy: 5
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "外國交換生家教",

        description:
        "交換生 Judi希望找中文家教。",

        choices: [

            {
                text: "每週固定教學",
                money: 450,
                energy: -25,
                goal17: 12
            },

            {
                text: "偶爾教一下",
                money: 180,
                energy: -8,
                goal17: 5
            },

            {
                text: "覺得麻煩",
                money: 0,
                energy: 8
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "國際展覽志工",

        description:
        "大型國際展覽正在招募工讀志工。",

        choices: [

            {
                text: "參與整天活動",
                money: 420,
                energy: -30,
                goal17: 10
            },

            {
                text: "只排半天班",
                money: 180,
                energy: -12,
                goal17: 5
            },

            {
                text: "不參加",
                money: 0,
                energy: 10
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "國際新聞翻譯",

        description:
        "教授需要學生協助翻譯國際新聞資料。",

        choices: [

            {
                text: "完整翻譯文章",
                money: 320,
                energy: -18,
                goal16: 8
            },

            {
                text: "只翻部分內容",
                money: 120,
                energy: -6,
                goal16: 3
            },

            {
                text: "直接拒絕",
                money: 0,
                energy: 5
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "聯合國模擬會議",

        description:
        "模擬聯合國活動正在招募工作人員。",

        choices: [

            {
                text: "擔任主持助理",
                money: 380,
                energy: -25,
                goal16: 10
            },

            {
                text: "只負責報到",
                money: 150,
                energy: -10,
                goal16: 4
            },

            {
                text: "太累不參加",
                money: 0,
                energy: 12
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "國際交流影片剪輯",

        description:
        "國際處需要 SDGs 宣傳影片剪輯。",

        choices: [

            {
                text: "完整剪輯影片",
                money: 500,
                energy: -30,
                goal17: 12
            },

            {
                text: "只幫忙字幕",
                money: 180,
                energy: -8,
                goal17: 5
            },

            {
                text: "沒時間",
                money: 0,
                energy: 8
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "國際交換展攤位",

        description:
        "學校交換展需要學生顧攤位。",

        choices: [

            {
                text: "顧整天攤位",
                money: 300,
                energy: -20,
                goal17: 8
            },

            {
                text: "只支援下午",
                money: 120,
                energy: -8,
                goal17: 3
            },

            {
                text: "直接回宿舍",
                money: 0,
                energy: 10
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "國際晚會主持",

        description:
        "國際晚會缺一位英文主持人。",

        choices: [

            {
                text: "接下主持",
                money: 450,
                energy: -28,
                goal17: 10
            },

            {
                text: "只幫忙暖場",
                money: 180,
                energy: -10,
                goal17: 4
            },

            {
                text: "怕出糗拒絕",
                money: 0,
                energy: 10
            }

        ]
    },

    {
        category: "Global",

        type: "money",

        title: "國際學生導覽",

        description:
        "新來的國際學生需要校園導覽。",

        choices: [

            {
                text: "完整帶隊導覽",
                money: 250,
                energy: -15,
                goal17: 8
            },

            {
                text: "只回答問題",
                money: 80,
                energy: -5,
                goal17: 3
            },

            {
                text: "裝忙離開",
                money: 0,
                energy: 5
            }

        ]
    }

];