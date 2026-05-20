const societyEvents = [

    {
        category: "Society",

        type: "normal",

        title: "凱咪的健康講座",

        description:
        "凱咪拉你去聽一場關於心理健康與壓力管理的講座。",

        choices: [

            {
                text: "認真去聽",
                money: 0,
                energy: -15,
                goal3: 20
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
                goal4: 5
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "顏萱的課業求救",

        description:
        "顏萱說她統計快爆炸了，問你能不能教她。",

        choices: [

            {
                text: "耐心教她",
                money: 0,
                energy: -18,
                goal4: 20
            },

            {
                text: "傳你自己的筆記給她",
                money: 0,
                energy: -5,
                goal4: 15
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

        type: "normal",

        title: "系上公益便當",

        description:
        "系學會發起公益便當活動，幫助弱勢家庭。",

        choices: [

            {
                text: "買一份支持",
                money: -80,
                energy: 0,
                goal1: 10,
                goal2: 10
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

        type: "normal",

        title: "安娜的性別平等海報",

        description:
        "安娜要做性別平等宣導海報，問你要不要幫忙。",

        choices: [

            {
                text: "一起設計海報",
                money: 0,
                energy: -15,
                goal5: 15
            },

            {
                text: "幫她找資料",
                money: 0,
                energy: -8,
                goal5: 10
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

        type: "normal",

        title: "柔苡的無障礙提醒",

        description:
        "柔苡發現教室門口堆了雜物，輪椅同學不好通過。",

        choices: [

            {
                text: "主動把雜物移開",
                money: 0,
                energy: -8,
                goal10: 20
            },

            {
                text: "通知助教處理",
                money: 0,
                energy: -3,
                goal10: 10
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

        type: "normal",

        title: "千千的剩食關懷",

        description:
        "寶可夢千千想把活動剩下的餐點送給需要的人。",

        choices: [

            {
                text: "幫忙整理餐點",
                money: 0,
                energy: -12,
                goal2: 15
            },

            {
                text: "幫忙聯絡社福單位",
                money: 0,
                energy: -8,
                goal2: 15,
                goal10: 10
            },

            {
                text: "自己先打包回家",
                money: 50,
                energy: 5,
                goal2: -5
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "松宜霖的志工時數",

        description:
        "松宜霖問你要不要一起去當課輔志工。",

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

        type: "normal",

        title: "校園霸凌留言",

        description:
        "逸玲看到班群有人嘲笑同學的外表。",

        choices: [

            {
                text: "私訊關心被嘲笑的人",
                money: 0,
                energy: -8,
                goal10: 10
            },

            {
                text: "在群組提醒大家尊重",
                money: 0,
                energy: -12,
                goal10: 15
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

        type: "normal",

        title: "健康午餐選擇",

        description:
        "午餐時間到了，你最近常熬夜又吃很油。",

        choices: [

            {
                text: "選均衡便當",
                money: -90,
                energy: 15,
                goal3: 10
            },

            {
                text: "繼續炸雞加珍奶",
                money: -150,
                energy: 20,
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

        type: "normal",

        title: "可云的獎學金資訊",

        description:
        "庫洛米可云發現一個弱勢學生獎學金資訊，問你要不要幫忙分享。",

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

        type: "normal",

        title: "國小閱讀營",

        description:
        "學校要辦偏鄉國小閱讀營，需要大學生協助。",

        choices: [

            {
                text: "報名帶活動",
                money: -50,
                energy: -30,
                goal4: 20,
                goal10: 10
            },

            {
                text: "捐二手童書",
                money: -30,
                energy: -5,
                goal4: 10
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

        type: "normal",

        title: "扇煦的社團招生",

        description:
        "扇煦的公益社團缺人，她拜託你幫忙招生。",

        choices: [

            {
                text: "幫她做招生文宣",
                money: 0,
                energy: -15,
                goal10: 15
            },

            {
                text: "推薦幾個朋友",
                money: 0,
                energy: -5,
                goal10: 10
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

        type: "normal",

        title: "月經平權提案",

        description:
        "學生會討論是否在校園提供免費生理用品。",

        choices: [

            {
                text: "支持並參與提案",
                money: 0,
                energy: -18,
                goal5: 15,
                goal10: 10
            },

            {
                text: "在社群分享資訊",
                money: 0,
                energy: -5,
                goal5: 10
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

        type: "normal",

        title: "宿舍室友情緒低落",

        description:
        "你的室友最近看起來很低落，常常不說話。",

        choices: [

            {
                text: "主動關心她",
                money: 0,
                energy: -10,
                goal3: 15
            },

            {
                text: "陪她去諮商中心",
                money: 0,
                energy: -18,
                goal3: 20
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

        type: "normal",

        title: "食物銀行活動",

        description:
        "附近社區正在募集罐頭與乾糧給需要的家庭。",

        choices: [

            {
                text: "買一些物資捐出",
                money: -150,
                energy: -5,
                goal1: 10,
                goal2: 15
            },

            {
                text: "幫忙搬運分類",
                money: 0,
                energy: -25,
                goal2: 20
            },

            {
                text: "自己最近也很窮",
                money: 0,
                energy: 5,
                goal1: -2
            }

        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "凱咪的校園陪伴計畫",

        description:
        "凱咪邀你一起參加陪伴弱勢兒童的週末活動。",

        choices: [
            {
                text: "一起去陪小朋友",
                money: 0,
                energy: -22,
                goal4: 15,
                goal10: 8
            },
            {
                text: "捐一些文具就好",
                money: -80,
                energy: -3,
                goal4: 7
            },
            {
                text: "週末想睡覺",
                money: 0,
                energy: 15,
                goal10: -5
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "安娜的社福募款",

        description:
        "安娜正在幫社福機構募款，問你要不要支持。",

        choices: [
            {
                text: "捐一點錢支持",
                money: -100,
                energy: 0,
                goal1: 20
            },
            {
                text: "幫她分享貼文",
                money: 0,
                energy: -5,
                goal1: 10
            },
            {
                text: "滑過當沒看到",
                money: 0,
                energy: 5,
                goal1: -3
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "柔苡的健康提醒",

        description:
        "柔苡發現你最近每天熬夜，提醒你要好好照顧身體。",

        choices: [
            {
                text: "今晚早點睡",
                money: 0,
                energy: 20,
                goal3: 8
            },
            {
                text: "繼續熬夜趕作業",
                money: 0,
                energy: -25,
                goal4: 6,
                goal3: -6
            },
            {
                text: "買能量飲硬撐",
                money: -60,
                energy: 8,
                goal3: -5
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "千千的共餐活動",

        description:
        "千千邀你參加社區共餐，陪獨居長者吃飯聊天。",

        choices: [
            {
                text: "一起去幫忙",
                money: 0,
                energy: -20,
                goal3: 10,
                goal10: 15
            },
            {
                text: "買水果請她帶去",
                money: -100,
                energy: -2,
                goal3: 20
            },
            {
                text: "我社恐不去",
                money: 0,
                energy: 10,
                goal10: -3
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "右廷的學習小組",

        description:
        "右廷想成立期中考互助讀書會。",

        choices: [
            {
                text: "加入並分享筆記",
                money: 0,
                energy: -18,
                goal4: 18
            },
            {
                text: "只參加不發言",
                money: 0,
                energy: -8,
                goal4: 8
            },
            {
                text: "自己讀比較快",
                money: 0,
                energy: 5,
                goal4: -2
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "顏萱的無障礙地圖",

        description:
        "顏萱想整理校園無障礙設施地圖。",

        choices: [
            {
                text: "陪她實地調查",
                money: 0,
                energy: -20,
                goal10: 15
            },
            {
                text: "幫忙整理表格",
                money: 0,
                energy: -8,
                goal10: 10
            },
            {
                text: "覺得用不到",
                money: 0,
                energy: 5,
                goal10: -5
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "松宜霖的急救課",

        description:
        "松宜霖報名了 CPR 急救課，問你要不要一起去。",

        choices: [
            {
                text: "一起去學急救",
                money: -50,
                energy: -15,
                goal3: 20
            },
            {
                text: "看線上影片學",
                money: 0,
                energy: -5,
                goal3: 10
            },
            {
                text: "我應該用不到吧",
                money: 0,
                energy: 5,
                goal3: -4
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "昕昕的免費家教",

        description:
        "昕昕想幫附近國中生做免費數學家教。",

        choices: [
            {
                text: "一起幫忙教",
                money: 0,
                energy: -25,
                goal4: 20
            },
            {
                text: "幫她出題目",
                money: 0,
                energy: -10,
                goal4: 10
            },
            {
                text: "數學我也不會",
                money: 0,
                energy: 8,
                goal4: -3
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "安娜的平權討論",

        description:
        "安娜邀你參加一場性別平權議題討論會。",

        choices: [
            {
                text: "參加並認真聽",
                money: 0,
                energy: -12,
                goal5: 15
            },
            {
                text: "先查資料再決定",
                money: 0,
                energy: -5,
                goal5: 10
            },
            {
                text: "覺得太敏感不想碰",
                money: 0,
                energy: 5,
                goal5: -4
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "柔苡的午餐分享",

        description:
        "柔苡發現有同學忘記帶錢吃午餐。",

        choices: [
            {
                text: "請他吃一餐",
                money: -80,
                energy: 0,
                goal2: 15
            },
            {
                text: "借他一點錢",
                money: -50,
                energy: -2,
                goal1: 8,
                goal2: 8
            },
            {
                text: "裝作沒聽到",
                money: 0,
                energy: 5,
                goal2: -4
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "千千的偏鄉物資箱",

        description:
        "寶可夢千千想募集書本與生活用品寄到偏鄉學校。",

        choices: [
            {
                text: "整理物資一起寄",
                money: -80,
                energy: -20,
                goal4: 15,
                goal10: 15
            },
            {
                text: "捐幾本舊書",
                money: 0,
                energy: -5,
                goal4: 10
            },
            {
                text: "東西留著比較安心",
                money: 0,
                energy: 5,
                goal10: -5
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "凱咪的反歧視貼文",

        description:
        "凱咪看到社群上有人散播歧視言論。",

        choices: [
            {
                text: "理性留言提醒",
                money: 0,
                energy: -12,
                goal10: 10
            },
            {
                text: "私訊朋友討論",
                money: 0,
                energy: -5,
                goal10: 5
            },
            {
                text: "跟著開玩笑",
                money: 0,
                energy: 3,
                goal10: -8
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "乃辭的營養早餐",

        description:
        "乃辭說你最近都不吃早餐，會影響健康。",

        choices: [
            {
                text: "叫乃辭請我吃",
                money: 0,
                energy: 12,
                goal3: 10
            },
            {
                text: "喝咖啡撐過去",
                money: -50,
                energy: 5,
                goal3: -4
            },
            {
                text: "不吃省錢",
                money: 50,
                energy: -10,
                goal3: -6
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "顏萱的校園安全巡查",

        description:
        "顏萱發現校園夜間照明不足，想回報學校。",

        choices: [
            {
                text: "一起整理問題地點",
                money: 0,
                energy: -15,
                goal10: 6,
                goal3: 20
            },
            {
                text: "幫忙寫回報信",
                money: 0,
                energy: -8,
                goal10: 10
            },
            {
                text: "反正我不晚上出門",
                money: 0,
                energy: 5,
                goal10: -5
            }
        ]
    },

    {
        category: "Society",

        type: "normal",

        title: "逸玲的公益路跑",

        description:
        "逸玲邀你參加為弱勢兒童募款的公益路跑。",

        choices: [
            {
                text: "報名參加",
                money: -100,
                energy: -30,
                goal3: 15,
                goal1: 15
            },
            {
                text: "只捐款不跑",
                money: -150,
                energy: 0,
                goal1: 10
            },
            {
                text: "我跑去吃宵夜",
                money: -120,
                energy: 8,
                goal3: -5
            }
        ]
    },

    {
        category: "Society",

        type: "money",

        title: "課輔家教",

        description:
        "學弟妹想找人幫忙複習考試，你可以接一小時家教。",

        choices: [

            {
                text: "認真教完整堂",
                money: 250,
                energy: -25,
                goal4: 12
            },

            {
                text: "只幫忙解幾題",
                money: 80,
                energy: -8,
                goal4: 5
            },

            {
                text: "今天太累不接",
                money: 0,
                energy: 15
            }

        ]
    },

    {
        category: "Society",

        type: "money",

        title: "社團活動工讀",

        description:
        "校慶活動缺人手，需要臨時工讀。",

        choices: [

            {
                text: "從早忙到晚",
                money: 500,
                energy: -45,
                goal8: 10
            },

            {
                text: "只幫忙下午",
                money: 200,
                energy: -18,
                goal8: 5
            },

            {
                text: "直接裝沒看到訊息",
                money: 0,
                energy: 10
            }

        ]
    },

    {
        category: "Society",

        type: "money",

        title: "陪讀計畫",

        description:
        "圖書館正在招募弱勢兒童陪讀志工。",

        choices: [

            {
                text: "認真陪讀",
                money: 180,
                energy: -30,
                goal4: 15,
                goal10: 5
            },

            {
                text: "只做簡單協助",
                money: 80,
                energy: -10,
                goal4: 5
            },

            {
                text: "今天想休息",
                money: 0,
                energy: 12
            }

        ]
    },
    {
        category: "Society",
        type: "money",
        title: "圖書館櫃台工讀",
        description: "圖書館臨時缺櫃台工讀生，問你能不能支援。",

        choices: [
            { text: "支援整個下午", money: 350, energy: -28, goal4: 8 },
            { text: "只幫忙兩小時", money: 150, energy: -10, goal4: 4 },
            { text: "今天想休息", money: 0, energy: 12 }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "公益活動攝影",
        description: "公益社團需要人幫活動拍照紀錄。",

        choices: [
            { text: "完整拍攝活動", money: 300, energy: -25, goal10: 8 },
            { text: "只拍開場", money: 100, energy: -8, goal10: 3 },
            { text: "相機沒電不接", money: 0, energy: 8 }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "校園導覽工讀",
        description: "學校開放日需要學生帶高中生參觀校園。",

        choices: [
            { text: "帶完整導覽", money: 280, energy: -22, goal4: 8 },
            { text: "只介紹系館", money: 120, energy: -8, goal4: 4 },
            { text: "怕生不想去", money: 0, energy: 10 }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "社福機構文案工讀",
        description: "社福機構需要人幫忙寫活動宣傳文案。",

        choices: [
            { text: "接下完整文案", money: 360, energy: -24, goal1: 8 },
            { text: "只幫忙潤稿", money: 130, energy: -8, goal1: 4 },
            { text: "沒有靈感", money: 0, energy: 8 }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "健康講座場務",
        description: "校園健康講座需要場務工讀生。",

        choices: [
            { text: "負責整場活動", money: 300, energy: -25, goal3: 8 },
            { text: "只幫忙報到", money: 120, energy: -8, goal3: 3 },
            { text: "太累不接", money: 0, energy: 12 }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "偏鄉營隊助教",
        description: "偏鄉營隊臨時需要大學生助教。",

        choices: [
            { text: "擔任整天助教", money: 450, energy: -35, goal4: 12, goal10: 5 },
            { text: "只幫忙半天", money: 200, energy: -18, goal4: 6 },
            { text: "路太遠不去", money: 0, energy: 10 }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "校園問卷調查員",
        description: "學生會需要人協助進行校園平權問卷調查。",

        choices: [
            { text: "認真訪問同學", money: 250, energy: -20, goal5: 8 },
            { text: "只發線上表單", money: 80, energy: -5, goal5: 3 },
            { text: "覺得尷尬不做", money: 0, energy: 8 }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "社區共餐幫手",
        description: "社區共餐活動需要人協助準備與收拾。",

        choices: [
            { text: "從準備到收拾都幫", money: 320, energy: -28, goal2: 8, goal10: 5 },
            { text: "只幫忙端餐", money: 120, energy: -10, goal2: 4 },
            { text: "今天不想出門", money: 0, energy: 12 }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "校園安全巡查工讀",
        description: "學校晚上需要學生協助巡查照明與安全死角。",

        choices: [
            { text: "參加整晚巡查", money: 380, energy: -30, goal3: 8, goal10: 5 },
            { text: "只巡查一小時", money: 150, energy: -12, goal3: 4 },
            { text: "晚上太可怕了", money: 0, energy: 10 }
        ]
    },

    {
        category: "Society",
        type: "money",
        title: "公益市集收銀",
        description: "公益市集需要人幫忙收銀與整理物資。",

        choices: [
            { text: "幫忙整天", money: 400, energy: -35, goal1: 8, goal2: 8 },
            { text: "只幫忙下午", money: 180, energy: -15, goal1: 4 },
            { text: "人太多不想去", money: 0, energy: 8 }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "同學的緊急求助",
        description: "同學突然身體不舒服，問你能不能陪她去保健室。",

        choices: [
            { text: "馬上陪她去", money: 0, energy: -12, goal3: 15 },
            { text: "幫她叫同學陪", money: 0, energy: -3, goal3: 8 },
            { text: "假裝沒看到訊息", money: 0, energy: 5, goal3: -6 }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "班上的筆記共享",
        description: "期中考前，有人提議大家共用雲端筆記。",

        choices: [
            { text: "上傳自己的整理", money: 0, energy: -18, goal4: 15 },
            { text: "只看別人的筆記", money: 0, energy: 5, goal4: -3 },
            { text: "幫忙整理格式", money: 0, energy: -8, goal4: 8 }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "宿舍公共空間",
        description: "宿舍公共廚房被弄得很髒，大家都不想處理。",

        choices: [
            { text: "主動清理", money: 0, energy: -20, goal3: 8, goal10: 6 },
            { text: "提醒大家輪流打掃", money: 0, energy: -8, goal10: 10 },
            { text: "反正不是我弄的", money: 0, energy: 5, goal10: -5 }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "無聲的歧視玩笑",
        description: "朋友開了一個讓某些族群不舒服的玩笑。",

        choices: [
            { text: "溫和提醒他", money: 0, energy: -10, goal10: 15 },
            { text: "私下跟他說", money: 0, energy: -6, goal10: 10 },
            { text: "跟著笑比較安全", money: 0, energy: 3, goal10: -8 }
        ]
    },

    {
        category: "Society",
        type: "normal",
        title: "校園心理健康週",
        description: "學校舉辦心理健康週活動，鼓勵學生關心自己。",

        choices: [
            { text: "參加壓力管理工作坊", money: -30, energy: -8, goal3: 15 },
            { text: "拿資料回去看", money: 0, energy: -3, goal3: 6 },
            { text: "覺得自己沒問題", money: 0, energy: 5, goal3: -3 }
        ]
    }

];