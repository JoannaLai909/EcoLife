const developmentEvents = [

    {
        category: "Development",

        type: "normal",

        title: "千千的 AI 專題",

        description:
        "千千想找你一起做 AI 永續應用專題。",

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

        type: "normal",

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

        type: "normal",

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

        type: "normal",

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

        type: "normal",

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

        type: "normal",

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

        type: "normal",

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

        type: "normal",

        title: "乃辭的智慧家電",

        description:
        "乃辭想買智慧節電插座。",

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

        type: "normal",

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

        type: "normal",

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

        type: "normal",

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

        type: "normal",

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

        type: "normal",

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

        type: "normal",

        title: "校園機器人展",

        description:
        "資工系正在展出 AI 與機器人技術。",

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

        type: "normal",

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
    },

    {
        category: "Development",

        type: "normal",

        title: "智慧停車系統",

        description:
        "學校正在測試智慧停車 App。",

        choices: [

            {
                text: "下載試用",
                money: -20,
                energy: -5,
                goal11: 8,
                goal9: 5
            },

            {
                text: "還是亂停車",
                money: 0,
                energy: 5,
                goal11: -6
            },

            {
                text: "騎腳踏車來學校",
                money: 20,
                energy: -15,
                goal11: 10
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "AI 自習室",

        description:
        "圖書館新增 AI 自習室預約系統。",

        choices: [

            {
                text: "研究新功能",
                money: 0,
                energy: -10,
                goal9: 8
            },

            {
                text: "用來搶熱門位子",
                money: 0,
                energy: 5,
                goal9: -3
            },

            {
                text: "直接去咖啡廳",
                money: -120,
                energy: 12,
                goal11: -2
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "逸玲的創新提案",

        description:
        "逸玲想做一個校園節能 App。",

        choices: [

            {
                text: "一起開發",
                money: -50,
                energy: -30,
                goal9: 15,
                goal7: 5
            },

            {
                text: "只提供想法",
                money: 0,
                energy: -8,
                goal9: 5
            },

            {
                text: "覺得沒人會用",
                money: 0,
                energy: 8,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "智慧販賣機",

        description:
        "校園導入能分析購買習慣的智慧販賣機。",

        choices: [

            {
                text: "體驗新科技",
                money: -30,
                energy: -3,
                goal9: 6
            },

            {
                text: "擔心個資問題",
                money: 0,
                energy: -5,
                goal16: 5
            },

            {
                text: "亂按機器玩",
                money: -10,
                energy: 8,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "柔苡的太陽能板",

        description:
        "柔苡想在社團展展示小型太陽能裝置。",

        choices: [

            {
                text: "幫忙組裝",
                money: -80,
                energy: -18,
                goal7: 12
            },

            {
                text: "只負責拍照",
                money: 0,
                energy: -3,
                goal7: 3
            },

            {
                text: "感覺很無聊",
                money: 0,
                energy: 5,
                goal7: -4
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "共享單車維修",

        description:
        "校園共享單車最近很多台壞掉。",

        choices: [

            {
                text: "回報故障車輛",
                money: 0,
                energy: -5,
                goal11: 8
            },

            {
                text: "幫忙簡單維修",
                money: -50,
                energy: -20,
                goal11: 12
            },

            {
                text: "壞掉就算了",
                money: 0,
                energy: 5,
                goal11: -5
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "校園數位化",

        description:
        "學校開始推動無紙化行政流程。",

        choices: [

            {
                text: "支持全面數位化",
                money: 0,
                energy: -8,
                goal9: 8,
                goal12: 5
            },

            {
                text: "我還是喜歡紙本",
                money: -20,
                energy: 5,
                goal12: -3
            },

            {
                text: "亂印一堆文件",
                money: -50,
                energy: 3,
                goal12: -8
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "右廷的 3D 列印",

        description:
        "右廷想用 3D 列印做環保模型。",

        choices: [

            {
                text: "幫忙建模",
                money: -30,
                energy: -20,
                goal9: 10
            },

            {
                text: "只幫忙上色",
                money: -10,
                energy: -5,
                goal9: 3
            },

            {
                text: "直接網購成品",
                money: -300,
                energy: 10,
                goal9: -4
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "智慧宿舍",

        description:
        "宿舍正在測試自動節能照明系統。",

        choices: [

            {
                text: "支持安裝",
                money: -20,
                energy: -3,
                goal7: 8,
                goal11: 5
            },

            {
                text: "嫌燈太常自動關掉",
                money: 0,
                energy: 5,
                goal7: -3
            },

            {
                text: "偷偷拔感測器",
                money: 20,
                energy: -8,
                goal7: -8
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "凱咪的科技展",

        description:
        "凱咪邀你一起參加科技與永續展覽。",

        choices: [

            {
                text: "認真參觀",
                money: -50,
                energy: -12,
                goal9: 10
            },

            {
                text: "只拍照打卡",
                money: -10,
                energy: 5,
                goal9: 1
            },

            {
                text: "直接回宿舍",
                money: 0,
                energy: 10,
                goal9: -4
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "自動垃圾分類機",

        description:
        "學生團隊做出 AI 垃圾分類裝置。",

        choices: [

            {
                text: "協助測試",
                money: 0,
                energy: -15,
                goal9: 12,
                goal12: 5
            },

            {
                text: "亂丟測試極限",
                money: 0,
                energy: 8,
                goal12: -6
            },

            {
                text: "完全沒興趣",
                money: 0,
                energy: 5,
                goal9: -3
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "昕昕的程式課",

        description:
        "昕昕推薦你修一門 AI 與永續發展課程。",

        choices: [

            {
                text: "認真修課",
                money: -100,
                energy: -30,
                goal4: 8,
                goal9: 10
            },

            {
                text: "只求低空飛過",
                money: 0,
                energy: -10,
                goal4: -2
            },

            {
                text: "直接退選",
                money: 0,
                energy: 12,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "智慧公車系統",

        description:
        "城市導入即時智慧公車資訊。",

        choices: [

            {
                text: "下載 App 使用",
                money: -5,
                energy: -3,
                goal11: 8
            },

            {
                text: "還是亂等車",
                money: 0,
                energy: -10,
                goal11: -3
            },

            {
                text: "直接搭 Uber",
                money: -250,
                energy: 15,
                goal11: -8
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "校園資料中心",

        description:
        "資訊中心正在升級節能伺服器。",

        choices: [

            {
                text: "參加導覽活動",
                money: 0,
                energy: -12,
                goal9: 8,
                goal7: 5
            },

            {
                text: "只想吹冷氣",
                money: 0,
                energy: 8,
                goal7: -2
            },

            {
                text: "覺得完全看不懂",
                money: 0,
                energy: 5,
                goal9: -3
            }

        ]
    },

    {
        category: "Development",

        type: "normal",

        title: "AI 自動翻譯耳機",

        description:
        "科技展正在展示 AI 即時翻譯耳機。",

        choices: [

            {
                text: "體驗新科技",
                money: -100,
                energy: -5,
                goal9: 8,
                goal17: 3
            },

            {
                text: "覺得沒必要",
                money: 0,
                energy: 5,
                goal9: -3
            },

            {
                text: "偷偷拿去玩遊戲",
                money: 0,
                energy: 10,
                goal9: -5
            }

        ]
    },

    {
        category: "Development",

        type: "money",

        title: "幫社團架網站",

        description:
        "社團需要一個活動網站，問你能不能接案幫忙。",

        choices: [

            {
                text: "接完整網站案",
                money: 500,
                energy: -45,
                goal9: 15
            },

            {
                text: "只做首頁",
                money: 180,
                energy: -18,
                goal9: 8
            },

            {
                text: "推薦別人接",
                money: 0,
                energy: 5,
                goal9: 2
            }

        ]
    },

    {
        category: "Development",

        type: "money",

        title: "修電腦打工",

        description:
        "昕昕電腦突然壞掉，問你能不能幫忙修。",

        choices: [

            {
                text: "完整幫他處理",
                money: 350,
                energy: -30,
                goal9: 12
            },

            {
                text: "只幫忙重灌",
                money: 120,
                energy: -10,
                goal9: 5
            },

            {
                text: "叫他送修",
                money: 0,
                energy: 10
            }

        ]
    },

    {
        category: "Development",

        type: "money",

        title: "AI 海報設計",

        description:
        "教授希望有人幫忙做 AI 研討會海報。",

        choices: [

            {
                text: "接下全部設計",
                money: 400,
                energy: -35,
                goal9: 10
            },

            {
                text: "只幫忙排版",
                money: 150,
                energy: -12,
                goal9: 5
            },

            {
                text: "太麻煩不接",
                money: 0,
                energy: 15
            }

        ]
    },
    {
        category: "Development",
        type: "normal",
        title: "逸玲的開源專案",
        description:
            "逸玲在 GitHub 上發起一個永續能源資料視覺化的開源專案，邀你一起貢獻程式碼。",
        choices: [
            {
                text: "認真寫幾個功能",
                money: 0,
                energy: -25,
                goal9: 12,
                goal7: 4
            },
            {
                text: "回報一個 Bug 就好",
                money: 0,
                energy: -5,
                goal9: 4
            },
            {
                text: "按個星星收藏",
                money: 0,
                energy: 3,
                goal9: -2
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "校園廢熱回收提案",
        description:
            "工學院教授提出把資料中心廢熱拿來加熱熱水的計畫，需要學生志工協助調查。",
        choices: [
            {
                text: "加入調查小組",
                money: 0,
                energy: -20,
                goal7: 12,
                goal9: 5
            },
            {
                text: "填問卷支持",
                money: 0,
                energy: -3,
                goal7: 4
            },
            {
                text: "覺得跟我沒關係",
                money: 0,
                energy: 5,
                goal7: -3
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "右廷的無人機測試",
        description:
            "右廷參加無人機送貨系統的校園測試計畫，問你要不要一起記錄飛行數據。",
        choices: [
            {
                text: "幫忙記錄分析",
                money: 0,
                energy: -18,
                goal9: 10,
                goal11: 5
            },
            {
                text: "去看飛飛的就好",
                money: 0,
                energy: 5,
                goal9: 1
            },
            {
                text: "擔心砸到人，不去",
                money: 0,
                energy: 8,
                goal11: -2
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "數位碳足跡計算",
        description:
            "環境社發起活動，請同學用 App 記錄自己一週的碳足跡。",
        choices: [
            {
                text: "認真記錄並減少排放",
                money: 0,
                energy: -12,
                goal9: 8,
                goal12: 6
            },
            {
                text: "只記錄不改習慣",
                money: 0,
                energy: -3,
                goal9: 3
            },
            {
                text: "嫌麻煩不參加",
                money: 0,
                energy: 6,
                goal12: -4
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "千千的線上課程",
        description:
            "千千找到一門免費的 AI 倫理與永續發展線上課程，說不定對找實習很有幫助。",
        choices: [
            {
                text: "每天撥時間認真修",
                money: 0,
                energy: -20,
                goal4: 10,
                goal9: 6
            },
            {
                text: "下載影片但從不看",
                money: 0,
                energy: 2,
                goal4: -2
            },
            {
                text: "轉傳給別人就好",
                money: 0,
                energy: 4,
                goal9: 0
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "智慧路燈提案",
        description:
            "學生自治會計畫向學校爭取在校園小徑裝設感應式節能路燈。",
        choices: [
            {
                text: "幫忙寫提案書",
                money: 0,
                energy: -22,
                goal11: 12,
                goal7: 5
            },
            {
                text: "連署支持",
                money: 0,
                energy: -3,
                goal11: 5
            },
            {
                text: "懶得管學校的事",
                money: 0,
                energy: 6,
                goal11: -4
            }
        ]
    },

    {
        category: "Development",
        type: "normal",
        title: "凱咪的二手電子市集",
        description:
            "凱咪想辦一個二手電子產品交換市集，讓舊設備延長使用壽命。",
        choices: [
            {
                text: "幫忙籌辦活動",
                money: -30,
                energy: -25,
                goal12: 12,
                goal9: 5
            },
            {
                text: "拿一台舊手機去換",
                money: 50,
                energy: -5,
                goal12: 6
            },
            {
                text: "直接買新的比較快",
                money: -400,
                energy: 5,
                goal12: -6
            }
        ]
    },

    // ── MONEY ─────────────────────────────────

    {
        category: "Development",
        type: "money",
        title: "幫教授整理研究資料",
        description:
            "教授的 AI 研究有一大批問卷資料需要清理和整理，問你有沒有時間兼職處理。",
        choices: [
            {
                text: "接下全部資料工作",
                money: 420,
                energy: -35,
                goal9: 12
            },
            {
                text: "只幫忙做前半段",
                money: 160,
                energy: -15,
                goal9: 5
            },
            {
                text: "推薦同學去接",
                money: 0,
                energy: 5,
                goal9: 1
            }
        ]
    },

    {
        category: "Development",
        type: "money",
        title: "社團 App 除錯",
        description:
            "熱音社的活動報名 App 一直當機，社長急著找人修好。",
        choices: [
            {
                text: "花時間找出根本原因",
                money: 380,
                energy: -30,
                goal9: 10
            },
            {
                text: "快速修補讓它能用",
                money: 150,
                energy: -12,
                goal9: 4
            },
            {
                text: "說超出能力範圍",
                money: 0,
                energy: 8
            }
        ]
    },

    {
        category: "Development",
        type: "money",
        title: "校外企業資料分析",
        description:
            "一家新創公司透過學校媒合，找學生幫忙分析用電行為數據。",
        choices: [
            {
                text: "做完整分析報告",
                money: 550,
                energy: -40,
                goal9: 15,
                goal7: 5
            },
            {
                text: "只做基本統計圖表",
                money: 200,
                energy: -15,
                goal9: 6
            },
            {
                text: "感覺太難，婉拒",
                money: 0,
                energy: 10
            }
        ]
    },

    {
        category: "Development",
        type: "money",
        title: "幫里辦公室架系統",
        description:
            "附近里辦公室想做一個簡單的線上預約系統，透過教授介紹來找你。",
        choices: [
            {
                text: "幫忙做完整系統",
                money: 480,
                energy: -38,
                goal11: 10,
                goal9: 8
            },
            {
                text: "用現成工具幫他設定",
                money: 180,
                energy: -12,
                goal11: 5
            },
            {
                text: "建議他找專業公司",
                money: 0,
                energy: 5
            }
        ]
    },

    {
        category: "Development",
        type: "money",
        title: "拍攝科技社宣傳影片",
        description:
            "科技社想做一支招生宣傳短片，找你幫忙拍攝剪輯。",
        choices: [
            {
                text: "認真拍完整影片",
                money: 300,
                energy: -28,
                goal9: 8
            },
            {
                text: "只幫忙剪輯素材",
                money: 120,
                energy: -10,
                goal9: 3
            },
            {
                text: "最近太忙推掉",
                money: 0,
                energy: 8
            }
        ]
    }

];