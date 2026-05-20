const globalEvents = [

    {
        category: "Global",
        type: "normal",
        title: "Judi 的國際文化邀請",
        description:
            "交換生 Judi 邀你參加國際文化交流活動，還說你不用很會英文，只要不要全程點頭就好。",
        choices: [
            {
                text: "一起參加交流活動",
                money: -5,
                energy: -10,
                goal17: 12
            },
            {
                text: "線上參加比較安全",
                money: 0,
                energy: -4,
                goal17: 6
            },
            {
                text: "太尷尬了不想去",
                money: 0,
                energy: 5,
                goal17: -4
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "胡尼克的留言區大戰",
        description:
            "胡尼克看到網路上有人攻擊不同國家的文化，立刻準備用更酸的留言反擊。",
        choices: [
            {
                text: "理性提醒不要仇恨發言",
                money: 0,
                energy: -10,
                goal16: 12
            },
            {
                text: "檢舉惡意留言",
                money: 0,
                energy: -5,
                goal16: 8
            },
            {
                text: "跟胡尼克一起加入混戰",
                money: 0,
                energy: -18,
                goal16: -10
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "露露的公平貿易咖啡",
        description:
            "露露拿著一杯公平貿易咖啡，說這杯雖然比較貴，但喝起來有國際責任感。",
        choices: [
            {
                text: "支持公平貿易咖啡",
                money: -40,
                energy: 5,
                goal17: 10
            },
            {
                text: "先了解公平貿易標章",
                money: 0,
                energy: -5,
                goal17: 8
            },
            {
                text: "買最便宜的咖啡就好",
                money: 10,
                energy: 5,
                goal17: -5
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "千千的跨國研究小組",
        description:
            "千千加入跨國 SDGs 線上研究團隊，但她發現會議時間剛好卡到晚餐。",
        choices: [
            {
                text: "一起加入研究團隊",
                money: 0,
                energy: -20,
                goal17: 15
            },
            {
                text: "只參加重要會議",
                money: 0,
                energy: -8,
                goal17: 6
            },
            {
                text: "用吃飯當理由拒絕",
                money: 0,
                energy: 8,
                goal17: -4
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "依林的深夜假新聞",
        description:
            "依林半夜睡不著，收到一篇來源不明的國際新聞，標題誇張到像連續劇預告。",
        choices: [
            {
                text: "幫她查證來源",
                money: 0,
                energy: -8,
                goal16: 12
            },
            {
                text: "提醒她不要直接轉發",
                money: 0,
                energy: -4,
                goal16: 8
            },
            {
                text: "覺得很刺激直接分享",
                money: 0,
                energy: 2,
                goal16: -10
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "安娜的國際志工夢",
        description:
            "安娜想報名國際教育志工，說她想把世界變好，但目前連行李箱都還沒整理好。",
        choices: [
            {
                text: "陪她一起報名",
                money: -100,
                energy: -25,
                goal17: 15
            },
            {
                text: "幫忙整理志工資料",
                money: 0,
                energy: -10,
                goal17: 8
            },
            {
                text: "只說加油但不行動",
                money: 0,
                energy: 8,
                goal17: -3
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "快俠的和平新聞慢讀",
        description:
            "快俠看到國際衝突新聞，決定慢慢讀完背景資料，但第一段就讀了十分鐘。",
        choices: [
            {
                text: "陪他了解事件背景",
                money: 0,
                energy: -8,
                goal16: 10
            },
            {
                text: "整理重點給他看",
                money: 0,
                energy: -12,
                goal16: 12
            },
            {
                text: "只看標題就下結論",
                money: 0,
                energy: 5,
                goal16: -6
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "柔苡的國際人權連署",
        description:
        "Judi 邀你參與國際人權連署。",

        choices: [
            {
                text: "閱讀內容後參與連署",
                money: 0,
                energy: -8,
                goal16: 12
            },
            {
                text: "查詢相關背景資料",
                money: 0,
                energy: -10,
                goal16: 10
            },
            {
                text: "直接亂簽完事",
                money: 0,
                energy: -2,
                goal16: -5
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "依林的跨時區會議",
        description:
            "你的專題需要半夜和國外學生開會，依林說反正她也睡不著。",
        choices: [
            {
                text: "熬夜參加討論",
                money: 0,
                energy: -25,
                goal17: 12
            },
            {
                text: "先錄影，隔天補看",
                money: 0,
                energy: -5,
                goal17: 6
            },
            {
                text: "直接缺席裝沒看到",
                money: 0,
                energy: 10,
                goal17: -6
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "泰瑞的難民援助箱",
        description:
            "泰瑞看到校園正在募集國際難民援助物資，抱著一箱罐頭問你要不要一起幫忙。",
        choices: [
            {
                text: "捐款並協助整理物資",
                money: -100,
                energy: -10,
                goal16: 10,
                goal17: 6
            },
            {
                text: "分享活動資訊",
                money: 0,
                energy: -5,
                goal17: 6
            },
            {
                text: "滑過當沒看到",
                money: 0,
                energy: 5,
                goal16: -3
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "凱倫的國際文化週",
        description:
            "學校舉辦國際文化週，凱倫聽到有各國飲料攤，眼睛立刻亮了。",
        choices: [
            {
                text: "認真體驗不同文化",
                money: -30,
                energy: -12,
                goal17: 15
            },
            {
                text: "和交換生聊天交流",
                money: 0,
                energy: -10,
                goal17: 12
            },
            {
                text: "只去拿免費食物和飲料",
                money: 20,
                energy: 3,
                goal17: -3
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "蓋瑞的聯合國直播",
        description:
            "蓋瑞推薦你看聯合國永續論壇直播，他說裡面藏著很多世界局勢的線索。",
        choices: [
            {
                text: "認真觀看並做筆記",
                money: 0,
                energy: -12,
                goal17: 15
            },
            {
                text: "看完後整理重點",
                money: 0,
                energy: -15,
                goal17: 12
            },
            {
                text: "掛著當背景音",
                money: 0,
                energy: 2,
                goal17: 1
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "右廷的跨國黑客松",
        description:
            "右廷邀你和外國學生一起參加 SDGs 黑客松，但隊友分散在三個時區。",
        choices: [
            {
                text: "積極協調分工",
                money: 0,
                energy: -35,
                goal17: 18
            },
            {
                text: "負責自己的部分",
                money: 0,
                energy: -12,
                goal17: 6
            },
            {
                text: "全程假裝網路不好",
                money: 0,
                energy: 12,
                goal17: -8
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "昕昕的國際論壇心得",
        description:
            "教授推薦大家看國際永續論壇，昕昕已經開好筆記文件等你加入。",
        choices: [
            {
                text: "和昕昕一起整理心得",
                money: 0,
                energy: -15,
                goal17: 12
            },
            {
                text: "只看重點片段",
                money: 0,
                energy: -5,
                goal17: 5
            },
            {
                text: "直接睡覺明天再說",
                money: 0,
                energy: 10,
                goal17: -4
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "楊咩咩的強硬演說",
        description:
            "模擬聯合國活動中，楊咩咩準備發表一段非常強硬、完全不想協商的演說。",
        choices: [
            {
                text: "提醒她加入和平協商內容",
                money: 0,
                energy: -12,
                goal16: 12
            },
            {
                text: "幫她改成理性版本",
                money: 0,
                energy: -18,
                goal16: 15
            },
            {
                text: "鼓勵她直接嗆爆全場",
                money: 0,
                energy: 5,
                goal16: -10
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "露露的公平貿易巧克力",
        description:
            "露露拿著公平貿易巧克力問你，『這個比較貴，但感覺比較有品味對吧？』",
        choices: [
            {
                text: "支持公平貿易商品",
                money: -80,
                energy: 3,
                goal17: 15
            },
            {
                text: "了解生產者權益",
                money: 0,
                energy: -6,
                goal17: 10
            },
            {
                text: "只買最便宜的巧克力",
                money: 30,
                energy: 0,
                goal17: -5
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "凱咪的國際筆友",
        description:
            "凱咪收到韓國交換生祝祝的筆友邀請，但她第一句想問對方喜歡喝什麼飲料。",
        choices: [
            {
                text: "認真交流文化",
                money: 0,
                energy: -10,
                goal17: 10
            },
            {
                text: "偶爾回訊息也不錯",
                money: 0,
                energy: -3,
                goal17: 4
            },
            {
                text: "直接已讀不回",
                money: 0,
                energy: 5,
                goal17: -4
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "安娜的災難募款海報",
        description:
        "扇煦邀請你參與反戰和平連署。",

        choices: [
            {
                text: "幫她整理可信募款資訊",
                money: 0,
                energy: -12,
                goal17: 10,
                goal16: 5
            },
            {
                text: "捐款支持救援",
                money: -200,
                energy: 0,
                goal17: 12
            },
            {
                text: "覺得離自己太遠",
                money: 0,
                energy: 5,
                goal17: -4
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "胡尼克的陰謀論影片",
        description:
            "胡尼克傳來一支國際陰謀論影片，還說『你看完就懂世界真相』。",
        choices: [
            {
                text: "查證影片來源",
                money: 0,
                energy: -8,
                goal16: 12
            },
            {
                text: "提醒他不要散播假訊息",
                money: 0,
                energy: -6,
                goal16: 10
            },
            {
                text: "直接轉到班群引爆討論",
                money: 0,
                energy: 3,
                goal16: -10
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "快俠的慢速翻譯任務",
        description:
            "快俠想幫國際學生翻譯活動公告，但他翻譯一句話要查三次字典。",
        choices: [
            {
                text: "陪他一起完成翻譯",
                money: 0,
                energy: -15,
                goal17: 12
            },
            {
                text: "幫他校對重點內容",
                money: 0,
                energy: -8,
                goal17: 8
            },
            {
                text: "叫他直接丟翻譯軟體",
                money: 0,
                energy: 3,
                goal17: -2
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "柔苡的和平海報",
        description:
            "柔苡正在設計反戰和平海報，但她覺得每個標語都不夠有力量。",
        choices: [
            {
                text: "幫她整理和平倡議資料",
                money: 0,
                energy: -12,
                goal16: 12
            },
            {
                text: "協助設計理性標語",
                money: 0,
                energy: -15,
                goal16: 10
            },
            {
                text: "建議用吵架式標語吸睛",
                money: 0,
                energy: 5,
                goal16: -6
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "泰瑞的國際水資源討論",
        description:
            "泰瑞參加國際水資源線上討論，發現不同國家的用水問題完全不一樣。",
        choices: [
            {
                text: "整理各國案例",
                money: 0,
                energy: -15,
                goal17: 12
            },
            {
                text: "提出合作討論問題",
                money: 0,
                energy: -12,
                goal17: 10
            },
            {
                text: "只聽到一半就分心",
                money: 0,
                energy: 5,
                goal17: -3
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "蓋瑞的國際法討論",
        description:
            "蓋瑞在課堂上聽到國際法與人權議題，開始默默畫出一張超複雜關係圖。",
        choices: [
            {
                text: "和他一起整理重點",
                money: 0,
                energy: -15,
                goal16: 12
            },
            {
                text: "查詢相關案例",
                money: 0,
                energy: -10,
                goal16: 8
            },
            {
                text: "覺得太複雜直接放棄",
                money: 0,
                energy: 8,
                goal16: -4
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "右廷的多語字幕挑戰",
        description:
            "右廷想幫 SDGs 宣傳影片加上多語字幕，但第一版字幕時間軸全歪了。",
        choices: [
            {
                text: "幫他修正字幕時間軸",
                money: 0,
                energy: -18,
                goal17: 12
            },
            {
                text: "只先完成英文字幕",
                money: 0,
                energy: -8,
                goal17: 6
            },
            {
                text: "覺得字幕歪一點也可愛",
                money: 0,
                energy: 5,
                goal17: -4
            }
        ]
    },

    {
        category: "Global",
        type: "normal",
        title: "昕昕的國際新聞筆記",
        description:
            "昕昕想養成每天看國際新聞的習慣，但她的筆記第一天就寫到像小論文。",
        choices: [
            {
                text: "一起整理新聞脈絡",
                money: 0,
                energy: -12,
                goal16: 10
            },
            {
                text: "幫她建立查證清單",
                money: 0,
                energy: -10,
                goal16: 12
            },
            {
                text: "只看社群懶人包",
                money: 0,
                energy: 5,
                goal16: -5
            }
        ]
    },

    {
        category: "Global",
        type: "money",
        title: "Judi 的中文家教",
        description:
            "交換生 Judi 希望找中文家教，還指定想學會在早餐店點蛋餅。",
        choices: [
            {
                text: "每週固定教學",
                money: 450,
                energy: -25,
                goal17: 12
            },
            {
                text: "偶爾教她生活中文",
                money: 180,
                energy: -8,
                goal17: 5
            },
            {
                text: "覺得備課太麻煩",
                money: 0,
                energy: 8
            }
        ]
    },

    {
        category: "Global",
        type: "money",
        title: "露露的國際晚會主持",
        description:
            "國際晚會缺一位英文主持人，露露說你只要看起來很有自信就成功一半。",
        choices: [
            {
                text: "接下整場主持",
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
        title: "千千的國際新聞翻譯",
        description:
            "教授需要學生協助翻譯國際新聞資料，千千問你要不要一起接。",
        choices: [
            {
                text: "完整翻譯文章",
                money: 320,
                energy: -18,
                goal16: 8,
                goal17: 4
            },
            {
                text: "只翻重點段落",
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
        title: "安娜的 SDGs 海報案",
        description:
            "國際學生社團徵求 SDGs 宣傳海報設計，安娜覺得這聽起來很適合你接案。",
        choices: [
            {
                text: "接案設計完整海報",
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
                text: "沒興趣不接",
                money: 0,
                energy: 5
            }
        ]
    },

    {
        category: "Global",
        type: "money",
        title: "柔苡的國際論壇接待",
        description:
            "國際論壇需要學生協助接待外國講者，柔苡提醒你至少要記得微笑。",
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
        title: "依林的深夜字幕工讀",
        description:
            "國際處需要 SDGs 宣傳影片字幕，依林半夜接案後發現自己真的需要隊友。",
        choices: [
            {
                text: "完整處理字幕",
                money: 500,
                energy: -30,
                goal17: 12
            },
            {
                text: "只幫忙校對字幕",
                money: 180,
                energy: -8,
                goal17: 5
            },
            {
                text: "沒時間幫忙",
                money: 0,
                energy: 8
            }
        ]
    },

    {
        category: "Global",
        type: "money",
        title: "右廷的模擬聯合國工作",
        description:
            "模擬聯合國活動正在招募工作人員，右廷說你很適合當主持助理。",
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
        title: "凱倫的國際文化節攤位",
        description:
            "國際文化節正在招募攤位工作人員，凱倫聽說有飲料攤後非常積極。",
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
        title: "泰瑞的國際學生導覽",
        description:
            "新來的國際學生需要校園導覽，泰瑞說他可以介紹有水池的地方。",
        choices: [
            {
                text: "完整帶隊導覽",
                money: 250,
                energy: -15,
                goal17: 8
            },
            {
                text: "只回答幾個問題",
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
    },

    {
        category: "Global",
        type: "money",
        title: "快俠的交換展攤位",
        description:
            "學校交換展需要學生顧攤位，快俠說他可以慢慢介紹每一張傳單。",
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
                text: "直接回宿舍休息",
                money: 0,
                energy: 10
            }
        ]
    }

];